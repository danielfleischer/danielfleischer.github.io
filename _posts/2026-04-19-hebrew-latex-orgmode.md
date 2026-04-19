---
layout: post
title: Hebrew LaTeX in Org-mode
date: 2026-04-19
description: A minimal setup for exporting Hebrew LaTeX documents from Org-mode.
tags: emacs latex hebrew
categories: software
---

#### TL;DR
- Writing Hebrew with LaTeX needs `lualatex`, `babel` with `bidi`, and Hebrew-capable fonts.
- A small `hebrew.tex` preamble handles all the typesetting machinery.
- A custom Org export backend wires the preamble, compiler, language, and author into every Hebrew export without polluting the file itself.
- The result: plain Org files that export to bidirectional Hebrew PDFs with a single command.

-------

Writing Hebrew in LaTeX is not hard, but it requires a few moving pieces to line up: a modern engine, a bidirectional text package, and fonts that actually contain Hebrew glyphs. I wanted to get this working inside [Org-mode](https://orgmode.org/), without having to sprinkle `#+LATEX_HEADER` lines at the top of every document. Here is the setup I ended up with.

#### The LaTeX Preamble

First, the engine. LuaLaTeX and XeLaTeX both bring Unicode and OpenType to TeX, but they diverge where it matters for complex scripts: XeLaTeX delegates font discovery to the OS and requires explicit directional markup for RTL text, while LuaLaTeX builds its own font database --- seeing both system and TeX-tree fonts by name --- and handles bidirectional direction automatically at the engine level. For Hebrew, or any RTL-primary document, that distinction is decisive. With the LaTeX team's development focus firmly on LuaLaTeX, XeLaTeX is increasingly the legacy choice.

With LuaLaTeX settled, `babel` is the package of choice. The typesetting side lives in a single file, `hebrew.tex`:

```latex
% Template for Hebrew latex
\usepackage[bidi=basic]{babel}
\babelprovide[main,import]{hebrew}
\babelfont[hebrew]{rm}{Heebo}
\babelfont[english]{rm}{Avenir}
```

A few notes on what this does:

- `babel` with `bidi=basic` handles bidirectional text --- mixing Hebrew and English in the same paragraph without manual markup.
- `\babelprovide[main,import]{hebrew}` sets Hebrew as the main language and imports its locale data (date formats, hyphenation, etc.).
- `\babelfont` picks the font per language: [Heebo](https://fonts.google.com/specimen/Heebo) for Hebrew and Avenir for Latin script. LuaLaTeX picks these up directly from the system font registry --- on a Mac, anything installed through Font Book is available by name, no TeX-tree gymnastics required.

That's the entire preamble. No `polyglossia`, no `bidi` package directly, no manual font loading.

#### The Org Export Backend

The second half is making Org-mode use this preamble automatically. Instead of adding header lines to each file, I define a derived export backend:

```elisp
;; Hebrew Latex support via custom backend, for inserting the template
(org-export-define-derived-backend 'latex-hebrew 'latex
  :options-alist
  '((:latex-header "LATEX_HEADER" nil "\\input{./hebrew.tex}")
    (:latex-compiler "LATEX_COMPILER" nil "lualatex")
    (:language "LANGUAGE" nil "hebrew" t)
    (:with-drawers nil "d" nil)
    (:with-properties nil "prop" nil)
    (:author "AUTHOR" nil "דניאל פליישר" parse)))
```

`org-export-define-derived-backend` creates a new backend, `latex-hebrew`, that inherits everything from the built-in `latex` backend and only overrides a handful of defaults:

- `:latex-header` injects `\input{./hebrew.tex}` into the preamble, so the Hebrew setup is always loaded.
- `:latex-compiler` forces `lualatex`, which is required for the Unicode fonts and bidi machinery.
- `:language` sets `hebrew` as the document language.
- `:with-drawers` and `:with-properties` strip Org's internal drawers and property blocks from the output --- I don't want them in a finished document, but change to taste.
- `:author` defaults the author to my name in Hebrew, while still being overridable from the file.

Because it's a derived backend, everything else --- tables, code blocks, math, cross-references --- keeps working exactly as it does for regular LaTeX export.

#### Using It

The custom backend isn't meant for exporting directly --- it's there as a source of templates. With point in a buffer (or on a heading), `C-c C-e #` prompts for a backend and inserts the corresponding `#+` keywords, filled in from the `:options-alist`. Picking `latex-hebrew` drops in the `LATEX_HEADER`, `LATEX_COMPILER`, `LANGUAGE`, and `AUTHOR` lines, so the file or subtree is ready to export with the regular LaTeX backend. No per-file boilerplate to remember --- just the template, once.

The nice property of this split is that the two sides stay independent. `hebrew.tex` is a plain LaTeX snippet, reusable from any `.tex` document; the Elisp backend just points at it. Changing fonts or preamble options is a one-file edit on the LaTeX side, and adding more Hebrew-specific Org behavior is a one-file edit on the Elisp side.
