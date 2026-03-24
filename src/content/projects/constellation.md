---
title: "Constellation — Adaptive Learning System"
description: "An adaptive learning system that models knowledge as a constellation of mastered nodes in a skill graph, using knowledge tracing and spaced repetition to target the frontier of what you're ready to learn next."
date: 2026-3-15
tech: [SvelteKit, TypeScript, SQLite, Drizzle ORM, Python, Claude API]
status: in-progress
featured: true
draft: false
---

*This page is a work in progress.*



## How It Started

The first version of Constellation was just me and Claude in a terminal alongside my IDE. It worked for code. Claude could generate problems, evaluate my solutions, and we could go back and forth. But it was limiting. We were engaging with code, not with the ideas behind what was supposed to be learned. You can't develop intuition for system design trade-offs by only writing code. The modality shouldn't be limited.

### What's out there Now

![Agents? For explaining? Groundbreaking.](/photos/agents_for_explaining.jpg)

Many of the labs realize that a primary use case for agents is as a glorified Google search. For many, the modality of talking to an agent can make learning much more accessible. These specialized teaching-mode agents likely use a combination of supervised fine-tuning and context steering to create a more conversational and socratic learning buddy.

While a good first step, a real socratic mentor needs to understand your goal, deconstruct your goal into atomic sub skills and goals, understand the hierarchical relationship and prerequisite requirements between these ideas and understand your learning state in context of what needs to be taught. For example, a great language teacher even having just met you can quickly assess and approximate your current language mastery level and recognize your personal shortfalls and provide recommendations for you to overcome them. An English instructor teaching someone to pronounce the "r" sound from a language that doesn't have such sounds is different than for correcting someone's speech impediment. 

Pass the initial skill assessment, now the system should ideally teach you the content in a way that makes sense to you so that you learn as much as possible and as quickly as possible. The goal of the system is the student's expedient understanding, not memorization. Conventional learning research shows some simple and effective techniques like interleaving and recall. 

The end result should be an agentic system that knows what, when, and how to teach you so you learn and retain as quickly as possible. The components are a knowledge space deconstructed graph (MAP), a learning state assessor,  an instructor policy engine, and drill generator. Or more succinctly, an intelligent tutoring system.

### The Solution Idea

So the system needed to become Socratic — able to engage with concepts through dialogue, not just through code execution. And it needed different modalities: sometimes the right way to learn something is to explain it back, sometimes it's flash cards, sometimes it's interactive minigames. It keeps learning refreshing and engaging. The drill generator needed to match the modality and pedagogy to the concept and my observed mastery state. We could also discover analytical signals of what kind of learner you are and what you respond best to. Some people absorb what they read really well, other people like ideas visualized. Reviewing something I've already demonstrated mastery on should look different from a first exposure. Being quizzed on something I haven't been taught yet just feels bad.

That led to the architecture: four components working together.

**The MAP — a knowledge-space deconstructed skill graph.** Every skill in the domain is a node. Prerequisite relationships are edges. The graph encodes what depends on what, so the system knows which skills are available to target based on what's already been mastered. This is the system's understanding of the domain itself.

![Constellation's skill graph — nodes represent skills, edges encode prerequisites, colors indicate mastery state.](/constellation_example_graph.jpg)

**The learning state assessor.** Bayesian Knowledge Tracing gives a probabilistic estimate of mastery for each node. A correct answer doesn't necessarily mean mastery — could be a guess. However, BKT is appropriate for many micro asessment learning event evaluations. It doesn't necessarily work for a problem like, "How would you design Tiktok"

**The instructor policy engine.** This is where the pedagogy modality is selected. Given the MAP, the current learning state, and content to be reviewed the engine decides *what* to teach, *when* to teach it, and *how*. First exposure gets a different treatment than review. A fading skill gets reinforced before the system pushes into new territory that depends on it.

**The drill generator.** Claude generates practice adapted to the learner's current position in the graph and the modality the policy engine selects. A Socratic dialogue about design trade-offs. A code problem that requires applying a concept in a new context. An explanation prompt that forces articulation of something half-understood. The content is tuned to the learning moment, not pulled from a static bank.

## What I'm Learning From Using It

Trust. I need to trust the system to want to use it. I need to trust it knows me. I need to trust it knows the material. And when it works, it's insightful red flags to avoid, green flags to remember, it's not a wall of text, it seems to have plans within each module, it shakes things up and at the end of the session I can tell it how I felt about the session and next time I trust the experience will be even better.

As a singular user and dogfooder there are limitations of what I can and can't do. 

## The Harder Problems

Building the adaptive content engine that can build personalized interactive content in the browser. Good evals. Cost, scaling, experience.

## Where This Started

The thinking traces back to EarWorm — a project where I tried to train a hierarchical VQ-VAE 2 on professional piano MIDI datasets to decompose the skill space of piano performance. The hypothesis: can we hierarchically organize atomic units of piano playing skill from professionals, then apply that framework to amateurs to understand what they're attempting and how good they are at it? The system would move away from conventional MIDI monitoring — matching inputs to notation — and instead evaluate the performed skill level during a session.

That skill-space decomposition in piano was especially challenging because we would have to pattern match these atomic units to human language. What I was getting at was knowledge space theory applied to performance piano. The components I envisioned for that agentic piano teacher — a skill graph, a state assessor, a policy engine, a drill generator — are the same four components that survive in Constellation today. Different domain, same architecture of thinking.
