---
title: "Symphony — Classical Music GenAI"
description: "A personal project implementing new ideas in multimodal architectures for classical music generation"
date: 2024-07-31
tech: [Python, PyTorch, Multimodal, MIDI, Audio Processing]
status: in-progress
featured: true
draft: true
---

Many use cases require a mixture of data modalities such as healthcare and robotics. Intuitively, having a model that learns from more than one data modality should perform better than a model that learns only from one type.

Classical music is represented in several ways: video recordings, audio recordings, MIDI files, and sheet music. There is also a variety of scholarly articles describing and analyzing the text. The data explains what instruments are playing what note and when.

Generative models are divided across modalities. The end goal is to create a model that can generate classical music, particularly symphonies. Specifically, the model should be able to produce sheet music, audio recordings, and MIDI files.

## The Inputs

**Sheet music** is widely available but in the form of images or PDFs. Additionally, sheet music is available as scores with notation for several instruments at once or separately per instrument.

**Audio recordings** are also widely available, but the cocktail party problem makes it difficult to separate the instruments, especially in symphonies. Music is unique in that the sum of the parts is greater than the whole, yet the model should understand the individual parts in context of the whole.

**MIDI files** are a digital representation of sheet music. They are a sequence of notes with timing information. MIDI files are the most machine-readable format of the three.

The model should be able to take in any of the three inputs and generate the other two. The model should also be able to take in a mix of the three inputs and generate the other two.

The model should also be able to take in scholarly articles, many of them analyzing the styles of a particular composer or a deep analysis of particular pieces. The model should be able to generate structured music from text descriptions.

## Series Outline

This is a multi-post series on the EarWorm project. The end goal is to create a crossmodal model that can generate classical music using sheet music, audio recordings, and MIDI files.

1. **Introduction** — The project and the data. Plus a model to remove noise from audio recordings.
2. **Architecture** — The model architecture.
