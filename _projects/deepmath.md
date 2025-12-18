---
layout: page
title: DeepMath
description: Simple framework for training and evaluating math reasoning agents using local models, GRPO and vLLM.
img: assets/img/deepmath.jpg
importance: 0
category: work
github: https://github.com/IntelLabs/DeepMath
---

DeepMath is an aligned math reasoning agent built on Qwen3-4B Thinking and fine-tuned with GRPO. Instead of verbose text, the model emits tiny Python snippets for intermediate steps, runs them in a secure sandbox, and folds the results back into its reasoning, reducing errors and output length. The agent is implemented using the smolagents library.

We evaluate DeepMath on four math datasets: MATH500, AIME, HMMT, and HLE, and show that:

🤖 The math agent alone reduces output lengths by up to 66%, while often improving accuracy.

⚡ GRPO training improves the agent performance even further, in almost all benchmarks.

Check out the code for the agent implementation and the TRL-vLLM agentic training, including temperature scheduling.

Hugging Face Blog: <https://huggingface.co/blog/intel-deepmath> 

Code: <https://github.com/IntelLabs/fastRAG>
