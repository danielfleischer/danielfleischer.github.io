---
layout: page
title: Xe-Forge
description: A multi-stage, LLM-powered pipeline that automatically optimizes Triton GPU kernels for Intel GPUs.
img: assets/img/xe-forge.png
importance: -1
category: work
github: https://github.com/IntelLabs/Xe-Forge
---

Xe-Forge is an open-source project that uses large language models to scale the work of expert kernel engineers, optimizing Triton GPU kernels for Intel GPUs. Writing high-performance kernels is a deep, specialized craft, and the skills for Intel hardware are especially scarce because Intel isn't the incumbent GPU platform—so that expertise is thinly represented, both among practitioners and in model training data. Xe-Forge amplifies the engineers who have it, taking on the repeated optimization cycles so they can focus on the hard, creative parts. Given a functionally correct kernel, the system applies up to nine optimization stages—from algorithmic restructuring and operator fusion through block pointer modernization, GPU-specific tuning, and open-ended discovery. Each stage is driven by a Chain-of-Verification-and-Refinement (CoVeR) agent that generates candidates, validates them on real hardware, and iterates on failures.

A curated knowledge base captures hard-won Intel GPU expertise—power-of-two warp counts, GRF modes, SLM sizing—that is largely absent from LLM training data, keeping the model within architecturally valid bounds and encoding the specialist know-how that makes these kernels fast. The project ships two execution engines: a fully automated DSPy pipeline and an interactive Claude Code workspace, both backed by integrated benchmarking and roofline analysis. Evaluated on KernelBench Level-2 kernels and Flash Attention on the Intel Arc Pro B70, Xe-Forge delivers consistent speedups over PyTorch eager, with individual kernels improving by more than 10× against already-optimized Triton code from the vLLM project.

For more details, see the accompanying paper, "Xe-Forge: Multi-Stage LLM-Powered Kernel Optimization for Intel GPU," and the blog post describing the packaging of Xe-Forge as an agent skill for the Hugging Face Kernel Hub.

<https://github.com/IntelLabs/Xe-Forge>

<https://huggingface.co/blog/danf/intel-xpu-kernels-skill>
