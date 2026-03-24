---
title: "Constellation — Adaptive Learning System"
description: "An adaptive learning system that models knowledge as a constellation of mastered nodes in a skill graph, using knowledge tracing and spaced repetition to target the frontier of what you're ready to learn next."
date: 2026-3-15
tech: [SvelteKit, TypeScript, SQLite, Drizzle ORM, Python, Claude API]
status: in-progress
featured: true
draft: false
---

_This page is a work in progress._

Constellation is an intelligent tutoring system that knows what to teach you next, when you're ready for it, and how to tell if you actually learned it. Every piece of content is generated on the fly by an LLM. The system deconstructs a learning objective into atomic skill requirements, maps their prerequisite relationships as a knowledge space graph, and uses that structure to drive personalized instruction.


### The Gap

![Agents? For explaining? Groundbreaking.](/photos/agents_for_explaining.jpg)

Many of the labs realize that a primary use case for agents is as a glorified Google search. For many, the modality of talking to an agent can make learning much more accessible. These specialized teaching-mode agents likely use a combination of supervised fine-tuning and context steering to create a more conversational and socratic learning buddy.

While a good first step, a real socratic mentor needs to understand your goal, deconstruct your goal into atomic sub skills and goals, understand the hierarchical relationship and prerequisite requirements between these ideas and understand your learning state in context of what needs to be taught. For example, a great language teacher even having just met you can quickly assess and approximate your current language mastery level and recognize your personal shortfalls and provide recommendations for you to overcome them. An English instructor teaching someone to pronounce the "r" sound from a language that doesn't have such sounds is different than for correcting someone's speech impediment.

### The Solution Idea

So the system needed to become Socratic — able to engage with concepts through dialogue, not just through code execution. And it needed different modalities: sometimes the right way to learn something is to explain it back, sometimes it's flash cards, sometimes it's interactive minigames. It keeps learning refreshing and engaging. The drill generator needed to match the modality and pedagogy to the concept and my observed mastery state. We could also discover analytical signals of what kind of learner you are and what you respond best to. Some people absorb what they read really well, other people like ideas visualized. Reviewing something I've already demonstrated mastery on should look different from a first exposure. Being quizzed on something I haven't been taught yet just feels bad.

That led to the architecture: four components working together.

**The MAP — a knowledge-space deconstructed skill graph.** Every skill in the domain is a node. Prerequisite relationships are edges. The graph encodes what depends on what, so the system knows which skills are available to target based on what's already been mastered. This is the system's understanding of the domain itself.

![Constellation's skill graph — nodes represent skills, edges encode prerequisites, colors indicate mastery state.](/constellation_example_graph.jpg)

**The learning state assessor.** Bayesian Knowledge Tracing gives a probabilistic estimate of mastery for each node. A correct answer doesn't necessarily mean mastery — could be a guess. However, BKT is appropriate for many micro asessment learning event evaluations. It doesn't necessarily work for a problem like, "How would you design Tiktok"

**The instructor policy engine.** This is where the pedagogy modality is selected. Given the MAP, the current learning state, and content to be reviewed the engine decides _what_ to teach, _when_ to teach it, and _how_. First exposure gets a different treatment than review. A fading skill gets reinforced before the system pushes into new territory that depends on it.

**The drill generator.** Claude generates practice adapted to the learner's current position in the graph and the modality the policy engine selects. A Socratic dialogue about design trade-offs. A code problem that requires applying a concept in a new context. An explanation prompt that forces articulation of something half-understood. The content is tuned to the learning moment, not pulled from a static bank.

## What I'm Learning From Using It

Trust. I need to trust the system to want to use it. I need to trust it knows me. I need to trust it knows the material. And when it works, it's insightful red flags to avoid, green flags to remember, it's not a wall of text, it seems to have plans within each module, it shakes things up and at the end of the session I can tell it how I felt about the session and next time I trust the experience will be even better.

As a singular user and dogfooder there are limitations of what I can and can't do.

## The Harder Problems

Building the adaptive content engine that can build personalized interactive content in the browser. Good evals. Cost, scaling, experience.

## Where This Started

The thinking traces back to EarWorm — a project where I tried to train a hierarchical VQ-VAE 2 on professional piano MIDI datasets to decompose the skill space of piano performance. The hypothesis: can we hierarchically organize atomic units of piano playing skill from professionals, then apply that framework to amateurs to understand what they're attempting and how good they are at it? The system would move away from conventional MIDI monitoring — matching inputs to notation — and instead evaluate the performed skill level during a session.

That skill-space decomposition in piano was especially challenging because we would have to pattern match these atomic units to human language. What I was getting at was knowledge space theory applied to performance piano. The components I envisioned for that agentic piano teacher — a skill graph, a state assessor, a policy engine, a drill generator — are the same four components that survive in Constellation today. Different domain, same architecture of thinking.

I first started trying to Intereview prep with just me and Claude in a terminal alongside my IDE. Claude could generate problems, evaluate my solutions, and we could go back and forth even, but Claude's output needed tremenoud amounts of coaching and quickly became clear that I wanted a system that could socratically engage with the material of my study while having an intimate and accurate knowledge of The problems were the system did not remember what I had studied, what my mastery level was, or even what I should really learn to ace the interview.