---
layout: page
title: SQuARE
description: "Research paper: SQuARE uses self-interrogation to decompose questions, outperforming chain-of-thought prompts."
img: assets/img/square.png
importance: 3
category: work
---

SQuARE introduces a self-interrogation paradigm for prompting LLMs. Instead of directly answering a question, the model generates and resolves a sequence of auxiliary questions before tackling the main query, encouraging a more comprehensive decomposition and exploration of the topic. This approach builds on chain-of-thought prompting and aims to better leverage the model’s internal reasoning. We evaluated SQuARE with Llama 3 and GPT-4o across multiple QA datasets and reported that it significantly surpasses traditional chain-of-thought prompts and existing rephrase-and-respond methods. We provide code at the Intel Labs GitHub repository.

<div class="row justify-content-sm-center">
    <div class="col-sm-5 mt-10 mt-md-0">
        {% include figure.liquid path="assets/img/square.png" title="LLM uses SQuARE to answer a question." class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<https://arxiv.org/abs/2502.09390>

<https://github.com/IntelLabs/RAG-FiT/tree/square>
