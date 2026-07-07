require 'feedjira'
require 'httparty'
require 'jekyll'
require 'nokogiri'
require 'time'

module ExternalPosts
  class ExternalPostsGenerator < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      if site.config['external_sources'] != nil
        site.config['external_sources'].each do |src|
          puts "Fetching external posts from #{src['name']}:"
          if src['rss_url']
            fetch_from_rss(site, src)
          elsif src['posts']
            fetch_from_urls(site, src)
          end
        end
      end
    end

    def fetch_from_rss(site, src)
      xml = HTTParty.get(src['rss_url']).body
      return if xml.nil?
      begin
        feed = Feedjira.parse(xml)
      rescue StandardError => e
        puts "Error parsing RSS feed from #{src['rss_url']} - #{e.message}"
        return
      end
      process_entries(site, src, feed.entries)
    end

    def process_entries(site, src, entries)
      entries.each do |e|
        puts "...fetching #{e.url}"
        create_document(site, src['name'], e.url, {
          title: e.title,
          content: e.content,
          summary: e.summary,
          published: e.published
        }, src)
      end
    end

    def create_document(site, source_name, url, content, src = {})
      # check if title is composed only of whitespace or foreign characters
      if content[:title].gsub(/[^\w]/, '').strip.empty?
        # use the source name and last url segment as fallback
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}"
      else
        # parse title from the post or use the source name and last url segment as fallback
        slug = content[:title].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')
        slug = "#{source_name.downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, '')}-#{url.split('/').last}" if slug.empty?
      end

      path = site.in_source_dir("_posts/#{slug}.md")
      doc = Jekyll::Document.new(
        path, { :site => site, :collection => site.collections['posts'] }
      )
      doc.data['external_source'] = source_name
      doc.data['title'] = content[:title]
      doc.data['feed_content'] = content[:content]
      doc.data['description'] = content[:summary]
      doc.data['date'] = content[:published]
      doc.data['redirect'] = url
      
      # Apply default categories and tags from source configuration
      if src['categories'] && src['categories'].is_a?(Array) && !src['categories'].empty?
        doc.data['categories'] = src['categories']
      end
      if src['tags'] && src['tags'].is_a?(Array) && !src['tags'].empty?
        doc.data['tags'] = src['tags']
      end
      
      doc.content = content[:content]
      site.collections['posts'].docs << doc
    end

    # Titles served by anti-bot interstitials (e.g. Cloudflare's "Just a
    # moment...") when the build runs from a challenged IP such as a CI runner.
    # These must never be baked into the site as post titles.
    BLOCKED_TITLE_PATTERNS = [
      /\Ajust a moment/i,
      /attention required/i,
      /access denied/i,
      /are you a (human|robot)/i,
      /enable javascript and cookies/i
    ].freeze

    def fetch_from_urls(site, src)
      src['posts'].each do |post|
        # A title/description set in _config.yml wins over anything fetched,
        # keeping the build deterministic and independent of the runner's IP.
        if post['title']
          content = {
            title: post['title'],
            content: post['content'] || '',
            summary: post['description']
          }
        else
          puts "...fetching #{post['url']}"
          content = fetch_content_from_url(post['url'])
          if blocked_title?(content[:title])
            puts "...WARNING: '#{content[:title]}' looks like an anti-bot page; " \
                 "falling back to source name. Set 'title:' in _config.yml to fix."
            content[:title] = src['name']
            content[:content] = ''
            content[:summary] = nil
          end
        end
        content[:published] = parse_published_date(post['published_date'])
        create_document(site, src['name'], post['url'], content, src)
      end
    end

    def blocked_title?(title)
      title = title.to_s.strip
      title.empty? || BLOCKED_TITLE_PATTERNS.any? { |re| title.match?(re) }
    end

    def parse_published_date(published_date)
      case published_date
      when String
        Time.parse(published_date).utc
      when Date
        published_date.to_time.utc
      else
        raise "Invalid date format for #{published_date}"
      end
    end

    def fetch_content_from_url(url)
      # Use a browser-like User-Agent; the HTTParty default is blocked or
      # challenged by many hosts, which yields anti-bot interstitial pages.
      response = HTTParty.get(url, {
        headers: {
          "User-Agent" => "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 " \
                          "(KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"
        },
        follow_redirects: true
      })
      parsed_html = Nokogiri::HTML(response.body)

      title = parsed_html.at('head title')&.text&.strip || ''
      description = parsed_html.at('head meta[name="description"]')&.attr('content')
      description ||= parsed_html.at('head meta[name="og:description"]')&.attr('content')
      description ||= parsed_html.at('head meta[property="og:description"]')&.attr('content')

      body_content = parsed_html.search('p').map { |e| e.text }
      body_content = body_content.join() || ''

      {
        title: title,
        content: body_content,
        summary: description
        # Note: The published date is now added in the fetch_from_urls method.
      }
    end

  end
end
