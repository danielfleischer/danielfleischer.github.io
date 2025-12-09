// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-deepmath-a-lightweight-math-reasoning-agent-with-smolagents",
        
          title: 'DeepMath: A lightweight math reasoning Agent with SmolAgents <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re on a journey to advance and democratize artificial intelligence through open source and open science.",
        section: "Posts",
        handler: () => {
          
            window.open("https://huggingface.co/blog/intel-deepmath", "_blank");
          
        },
      },{id: "post-breaking-language-barriers-in-mathematical-ai-introducing-hebrew-math-tutor",
        
          title: 'Breaking Language Barriers in Mathematical AI: Introducing Hebrew Math Tutor <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "A Blog post by Daniel Fleischer on Hugging Face",
        section: "Posts",
        handler: () => {
          
            window.open("https://huggingface.co/blog/danf/hebrew-math-tutor", "_blank");
          
        },
      },{id: "post-jujutsu-impressions",
        
          title: "Jujutsu Impressions",
        
        description: "My first impression of using the Jujutsu version control system.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/jj/";
          
        },
      },{id: "post-built-an-mcp-server-for-llms-to-search-email-from-terminal-daniel-fleischer-posted-on-the-topic-linkedin",
        
          title: 'Built an MCP server for LLMs to search email from terminal | Daniel... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "📬 I built an MCP server that lets LLMs search my email from the terminalThe server connects Claude to email search via the mu CLI tool. Now I just ask it things like: &quot;Find emails with PDF attachments from last April&quot; ⚡🛠 No custom frontend. No heavy framework. Just a CLI tool made smarter.💡 I learned that MCP servers are basically API translators — they take complex developer SDKs and flatten them into simple function calls that LLMs can actually use.🎯 The bigger picture: This pattern can breathe new life into existing CLI tools and services. Complex APIs → Simple, declarative functions → Natural language queries.This isn’t a product — just an experiment in stitching new capabilities into existing workflows. Code here: https://lnkd.in/eT2fJBSvmu email indexer and searcher: https://github.com/djcb/mu#MCP #LLM #EmailSearch #OpenSource #AIWhat existing tools would you want to make LLM-friendly? 🤔",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.linkedin.com/feed/update/urn:li:activity:7342918000003477506/", "_blank");
          
        },
      },{id: "post-summarize-hacker-news-posts-with-haystack-amp-opea-haystack",
        
          title: 'Summarize Hacker News Posts with Haystack &amp; OPEA | Haystack <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Build a RAG pipeline to fetch live Hacker News posts and summarize them with a local LLM endpoint",
        section: "Posts",
        handler: () => {
          
            window.open("https://haystack.deepset.ai/blog/hacker-news-summarization-opea", "_blank");
          
        },
      },{id: "post-attention-required-cloudflare",
        
          title: 'Attention Required! | Cloudflare <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.geektime.co.il/diy-rag/", "_blank");
          
        },
      },{id: "post-intel-labs-introduces-rag-fit-open-source-framework-for-retrieval-augmented-generation-in-llms-intel-community",
        
          title: 'Intel Labs Introduces RAG-FiT Open-Source Framework for Retrieval Augmented Generation in LLMs -... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Scott Bair is a key voice at Intel Labs , sharing insights into innovative research for inventing tomorrow’s technology. Intel Labs researchers",
        section: "Posts",
        handler: () => {
          
            window.open("https://community.intel.com/t5/Blogs/Tech-Innovation/Artificial-Intelligence-AI/Intel-Labs-Introduces-RAG-FiT-Open-Source-Framework-for/post/1636347", "_blank");
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@daniel.fleischer/open-domain-q-a-using-dense-retrievers-in-fastrag-65f60e7e9d1e", "_blank");
          
        },
      },{id: "projects-dictalm-2-0",
          title: 'DictaLM 2.0',
          description: "Multi-node pretraining of a Hebrew LLM with distributed data and model parallelism.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dictalm/";
            },},{id: "projects-fastrag",
          title: 'FastRAG',
          description: "A fast, scalable retrieval-augmented generation framework built on Haystack and HuggingFace, with Intel hardware optimizations.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fastrag/";
            },},{id: "projects-git-commit-lines-graph",
          title: 'Git Commit Lines Graph',
          description: "Python CLI tool for plotting project&#39;s line-count as a function of time, XKCD style.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gitlines/";
            },},{id: "projects-imdb-cli-browser",
          title: 'IMDB CLI browser',
          description: "CLI tool to browse IMDB, written in Go.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/imdb/";
            },},{id: "projects-mu-mcp-server",
          title: 'mu MCP Server',
          description: "MCP server POC for searching emails locally using the mu CLI tool.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mu-mcp/";
            },},{id: "projects-mu4easy-emails",
          title: 'mu4easy Emails',
          description: "Emacs package for multi-account email setup, based on the mu4e package.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mu4easy/";
            },},{id: "projects-rag-fit",
          title: 'RAG-FiT',
          description: "Open-source framework that helps train large language models to perform better at retrieval-augmented generation workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rag-fit/";
            },},{id: "projects-square",
          title: 'SQuARE',
          description: "Research paper: SQuARE uses self-interrogation to decompose questions, outperforming chain-of-thought prompts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/square/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%6E%69%65%6C%66%6C%65%69%73%63%68%65%72%64%65%76@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/danielfleischer", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/daniel-fleischer", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4031-4410", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
