---
title: "Symphony — Classical Music GenAI"
description: "Exploring multimodal architecture challenges through classical music generation—where sheet music, audio, and MIDI must compose as unified understanding."
date: 2024-07-31
tech: [Python, PyTorch, Multimodal, MIDI, Audio Processing, Transformer]
status: in-progress
featured: true
draft: false
---

Classical music exists in multiple representations simultaneously: the conductor reads a score while musicians play from parts while the audience hears the acoustic result. Each modality contains information the others lack, yet they're aspects of the same underlying musical structure.

This is the core challenge I'm exploring with Symphony: building models that understand music the way humans do—across modalities, with awareness of both individual voices and their harmonic relationships.

The technical problem mirrors broader questions in multimodal AI: how do we create unified understanding from disparate data types? Classical music provides an ideal testbed because the relationships between modalities are well-defined musically and theoretically grounded.

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
