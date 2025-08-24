---
layout: page
title: FastRAG
description: A fast, scalable retrieval-augmented generation framework built on Haystack and HuggingFace, with Intel hardware optimizations.
img: assets/img/fastrag-logo.png
importance: 2
category: work
github: https://github.com/IntelLabs/fastRAG
---

fastRAG is a research framework for building fast, scalable retrieval-augmented generation (RAG) pipelines. It blends Haystack’s modular tooling with HuggingFace models and adds Intel hardware optimizations to accelerate end-to-end RAG workloads. The project exposes a flexible suite of interchangeable components—across multiple backends and RAG patterns (FiD, ColBERT, REPLUG, PLAID)—while staying fully Haystack v2+ compatible for seamless integration into existing workflows.

Designed for researchers and production teams alike, fastRAG is easy to install and extend, with optional extras like fastrag[intel] or fastrag[openvino] for Intel-optimized backends. It supports popular vector stores (e.g., Qdrant) and multiple inference backends (ONNX Runtime, OpenVINO, Gaudi 2, Llama-Cpp, among others). Learn more and contribute at the GitHub repository.

<https://github.com/IntelLabs/fastRAG>
