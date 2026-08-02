---
layout: page
title: <code>otzar</code>
description: I kept forgetting what I'd already written, so I built something to search my own notes.
img: assets/img/otzar.jpg
importance: 0
category: fun
github: https://github.com/danielfleischer/otzar
---

I have a habit of writing things down and then forgetting I wrote them. Years of markdown, org files, PDFs, papers, source code. Keeping all of it was never the problem — finding it again was. `grep` needs the exact word I used, but my memory works in terms of concepts.

So I built **otzar**, which is Hebrew for *treasure*, and also for *thesaurus*. It searches my files by word and by meaning at the same time, and tells me where it found things: this line, that page, that paragraph.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-10 mt-md-0">
        {% include figure.liquid path="assets/img/otzar.jpg" title="An open chest of bundled notes, journals and papers" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Everything runs on my laptop. A Go program you type at, a Clojure server doing the actual work with Lucene, Ollama for the embeddings. No cloud, no database to maintain, no API key — my journal shouldn't need a privacy policy.

The same program is also an MCP server, so Claude searches the exact index I do. Read-only, deliberately: I want it finding things in my notes, not editing them.

None of that is where the fun was, though. Building a personal tool is its own pleasure, closer to knitting yourself a glove: it only has to fit one hand, and you're the one wearing it.

I've been using it every day for a month. The surprise wasn't how well it retrieves. It's how often I go looking for something and find I'd already tackled a similar issue and what my insights were.

<https://github.com/danielfleischer/otzar>
