---
title: "Constellation: Adaptive Learning System"
description: "An intelligent tutoring system that knows what to teach you next, when you're ready for it, and how to tell if you actually learned it, with every piece of content generated on the fly by an LLM."
date: 2026-3-15
tech: [SvelteKit, TypeScript, SQLite, Drizzle ORM, Python, Claude API]
status: in-progress
featured: true
draft: false
---

Constellation is an intelligent tutoring system that knows what to teach you next, when you're ready for it, and how to tell if you actually learned it. Every piece of content is generated on the fly by an LLM. The system deconstructs a learning objective into atomic skill requirements, maps their prerequisite relationships as a knowledge space graph, and uses that structure to drive personalized instruction.

## The Gap

![Agents? For explaining? Groundbreaking.](/photos/agents_for_explaining.jpg)

Many of the labs realize that a primary use case for agents is as a glorified Google search. For many, the modality of talking to an agent can make learning much more accessible. These specialized teaching-mode agents likely use a combination of supervised fine-tuning and context steering to create a more conversational and socratic learning buddy.

While a good first step, a real socratic mentor needs to understand your goal, deconstruct your goal into atomic sub skills and goals, understand the hierarchical relationship and prerequisite requirements between these ideas and understand your learning state in context of what needs to be taught. For example, a great language teacher even having just met you can quickly assess and approximate your current language mastery level and recognize your personal shortfalls and provide recommendations for you to overcome them. An English instructor teaching someone to pronounce the "r" sound from a language that doesn't have such sounds is different than for correcting someone's speech impediment.

## Choosing the How, Not Just the What

Every existing tool picks *what* you should study next. None of them pick *how*. But the how matters enormously. Reviewing something I've already demonstrated mastery on should look different from a first exposure. Being quizzed on something I haven't been taught yet just feels bad. A correct answer under time pressure is a stronger signal than a correct answer with hints and starter code.

So the system doesn't just select a topic. It selects a (topic, phase, scaffold level) tuple. Five phases, borrowed from medical simulation mastery learning: **Learn** (Socratic buildup with worked examples), **Practice** (guided implementation with support), **Prove** (independent cold recall, no hints), **Perform** (interview-pressure conditions with time constraints and follow-up probes), and **Maintain** (spaced review to prevent decay). Scaffolding fades using backward fading: the last support elements are removed first. Transitions are criterion-based, not threshold-based. You advance when you demonstrate capability, not when a number crosses a line.

Not all errors are equal either. A conceptual misunderstanding ("I don't know why we need concurrency") is a fundamentally different signal than a syntax mistake (wrong import path). The grading system classifies errors into severity tiers and weights mastery impact accordingly. Leech detection only triggers on conceptual and design-level failures, not recall slips.

That led to the architecture: four components working together.

**The MAP, a knowledge-space deconstructed skill graph.** Every skill in the domain is a node. Prerequisite relationships are edges. The graph encodes what depends on what, so the system knows which skills are available to target based on what's already been mastered. This is the system's understanding of the domain itself.

![Constellation's skill graph. Nodes represent skills, edges encode prerequisites, colors indicate mastery state.](/constellation_example_graph.jpg)

**The learning state assessor.** Bayesian Knowledge Tracing gives a probabilistic estimate of mastery for each node. A correct answer doesn't necessarily mean mastery, it could be a guess. BKT works well for atomic skill checks where observations are frequent and binary. It breaks down for open-ended compound problems like "How would you design TikTok" where multiple skills are exercised simultaneously and the signal is harder to decompose. That's where the error severity taxonomy and embedded assessment checkpoints come in, extracting multiple mastery signals from a single complex problem.

**The instructor policy engine.** This is the component that selects the (topic, phase, scaffold level) tuple. Given the MAP, the current learning state, and priority weighting toward the goal, the engine decides _what_ to teach, _when_ to teach it, and _how_. First exposure gets a different treatment than review. A fading skill gets reinforced before the system pushes into new territory that depends on it. The engine also respects interleaving constraints, mixing topics across sessions rather than drilling one area to exhaustion.

**The drill generator.** Claude generates practice adapted to the learner's current position in the graph and the modality the policy engine selects. A Socratic dialogue about design trade-offs. A code problem that requires applying a concept in a new context. An explanation prompt that forces articulation of something half-understood. The content is tuned to the learning moment, not pulled from a static bank.

## What I'm Learning From Using It

Trust. I need to trust the system to want to use it. I need to trust it knows me. I need to trust it knows the material. And when it works, it's insightful red flags to avoid, green flags to remember, it's not a wall of text, it seems to have plans within each module, it shakes things up and at the end of the session I can tell it how I felt about the session and next time I trust the experience will be even better.

The first version of the system technically worked. The engine selected topics, generated drills, tracked mastery. But using it daily revealed problems that the architecture alone couldn't predict. The pedagogy felt off and I couldn't tell *why*. Was the phase selection wrong? Were the mastery estimates drifting? Was the content too easy? I had no way to see inside the system's decisions. That sent me back to build observability and iterability infrastructure: mastery state dashboards, selector decision logs, trajectory views, parameter tuning with replay so I could test changes against historical data without running live sessions. The system needed to be inspectable before it could be trustworthy.

As a singular user and dogfooder there are real limitations. I can't A/B test at scale. I can't separate "this works for me" from "this works." But being the learner and the builder at the same time creates a tight feedback loop that theory alone can't replicate. Every session is a usability test and a pedagogical experiment and building out this infrastructure allows me to rapidly see changes and tune behavior.

## The Harder Problems

The biggest open problem is dynamic interactive content generation. The system currently delivers text, code blocks, and structured feedback. But the real vision is LLM-generated interactive learning experiences rendered directly in the browser: visualizations you can manipulate, simulations you can break, diagrams that respond to your input. Think Claude's dynamic artifacts but purpose-built for pedagogy, where every interactive element is tuned to the learner's current mastery state and the concept being taught. Building the content engine that can generate these reliably, at quality, within the constraints of what a web app can render, is the frontier.

Beyond that: good evals. How do you measure whether the system is actually producing learning, not just producing sessions? Mastery estimates need to be validated against transfer performance. Grading reliability needs to be tracked across model versions. The system needs to prove its own components work, not just assume they do.

## Where This Started

The thinking traces back to EarWorm, a project where I tried to train a hierarchical VQ-VAE 2 on professional piano MIDI datasets to decompose the skill space of piano performance. The hypothesis: can we hierarchically organize atomic units of piano playing skill from professionals, then apply that framework to amateurs to understand what they're attempting and how good they are at it? The system would move away from conventional MIDI monitoring (matching inputs to notation) and instead evaluate the performed skill level during a session.

That skill-space decomposition in piano was especially challenging because we would have to pattern match these atomic units to human language. What I was getting at was knowledge space theory applied to performance piano. The components I envisioned for that agentic piano teacher (a skill graph, a state assessor, a policy engine, a drill generator) are the same four components that survive in Constellation today. Different domain, same architecture of thinking.
