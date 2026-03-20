---
title: "EarWorm — Piano Skill Decomposition"
description: "A hierarchical VQ-VAE trained on professional piano MIDI to decompose the skill space of piano performance into a learned codebook — the precursor to Meridian."
date: 2024-07-31
tech: [Python, VQ-VAE, MIDI Processing, ASAP Dataset]
status: in-progress
featured: true
draft: false
---

The idea behind EarWorm was to escape a fundamental trap in music education technology: most systems require you to synchronize your playing to a MIDI reference and then grade you on timing accuracy. That measures compliance, not skill. A student playing a simplified passage perfectly and a professional interpreting the same passage with rubato and dynamic nuance would score very differently — and the system would prefer the student.

I wanted to build something that could understand your skill state from how you play, not how closely you match a reference.

## The Approach

The core technique was a hierarchical VQ-VAE (Vector Quantized Variational Autoencoder) trained on the ASAP dataset — a collection of professional-level piano MIDI performances with detailed annotations. The idea was to learn a discrete codebook of skill states: quantized representations of what professional piano performance looks like at different levels of the hierarchy.

With that codebook, you could take a student's playing, encode it against the learned representations, and map where they actually are in the skill space — without ever comparing note-for-note against a reference MIDI file.

From there, the goal was to generate targeted sheet music drills: exercises specifically designed to close the gap between the student's current codebook position and their nearest growth edge.

## What It Became

The skill-space decomposition thinking from EarWorm directly became the foundation for Meridian, my adaptive interview prep system. The insight transferred: don't measure against a reference, measure the learner's actual state, and then generate targeted practice to move them forward.

The 68-skill DAG in Meridian, the adaptive targeting engine, the focus on identifying gaps rather than drilling strengths — all of that traces back to the codebook idea from EarWorm. Different domain, same architecture of thinking.
