---
title: "Constellation: Adaptive Learning System"
description: "An intelligent tutoring system that knows what to teach you next, when you're ready for it, and how to tell if you actually learned it, with every piece of content generated on the fly by an LLM."
date: 2026-3-15
tech: [SvelteKit, TypeScript, SQLite, Drizzle ORM, Python, Claude API]
status: in-progress
featured: true
draft: false
---

Constellation is an intelligent tutoring system I'm building around Claude. It decides what to teach you next, when you're ready for it, and how to tell if you actually learned it. Every piece of content is generated on the fly. The system deconstructs a learning objective into atomic skills, maps their prerequisite relationships as a graph, and uses that structure to drive instruction. I've been dogfooding it for my own interview preparation.

## The Gap

![Agents? For explaining? Groundbreaking.](/photos/agents_for_explaining.jpg)

Many of the labs realize that a primary use case for agents is as a glorified Google search. For many, the modality of talking to an agent can make learning much more accessible. These specialized teaching-mode agents likely use a combination of supervised fine-tuning and context steering to create a more conversational and socratic learning buddy.

These are a good first step, but a real socratic mentor needs to understand your goals, the hierarchical relationship and prerequisite requirements between these ideas and your learning state in context of what needs to be taught. For example, a great language teacher even having just met you can quickly assess and approximate your current language mastery level and recognize your personal shortfalls and provide recommendations for you to overcome them. An English instructor teaching someone to pronounce the "r" sound from a language that doesn't have such sounds is different than for correcting someone's speech impediment.

## Choosing the How, Not Just the What

Every existing tool picks *what* you should study next. None of them pick *how*. But the how matters enormously. Reviewing something I've already demonstrated mastery on should look different from a first exposure. Being quizzed on something I haven't been taught yet just feels bad. A correct answer under time pressure is a stronger signal than a correct answer with hints and starter code.

So the system doesn't just select a topic. It selects a (topic, phase, scaffold level) tuple. Five phases, borrowed from medical simulation mastery learning: **Learn** (Socratic buildup with worked examples), **Practice** (guided implementation with support), **Prove** (independent cold recall, no hints), **Perform** (interview-pressure conditions with time constraints and follow-up probes), and **Maintain** (spaced review to prevent decay). Scaffolding fades using backward fading: the last support elements are removed first. Transitions are criterion-based, not threshold-based. You advance when you demonstrate capability, not when a number crosses a line.

The mastery model accounts for scaffolding too. A correct answer with hints and starter code (L1) gets a guess probability of 40%. The same correct answer under time pressure with no support (L4) gets 5%. The BKT parameters shift based on how much help was given, so hint-assisted successes carry less signal than independent ones. This is what makes mastery estimates trustworthy instead of inflated.

<figure>
  <img src="/constellation_short_example.jpg" alt="A comprehension question during a Learn phase session on ThreadPoolExecutor" />
  <figcaption>Learn phase, L1 scaffold. The system opens with an analogy (restaurant kitchen → thread pool), explains the concept, then checks understanding with a targeted comprehension question before moving on.</figcaption>
</figure>

Not all errors are equal either. A conceptual misunderstanding ("I don't know why we need concurrency") is a fundamentally different signal than a syntax mistake (wrong import path). The grading system classifies errors into severity tiers and weights mastery impact accordingly. Leech detection only triggers on conceptual and design-level failures, not recall slips.

<figure>
  <img src="/constellation_graded_example.jpg" alt="Graded feedback after a correct answer on ThreadPoolExecutor" />
  <figcaption>Feedback card after submission. The system confirms the answer, adds nuance the learner missed (tasks queue beyond the limit), and feeds the grade back into BKT mastery estimation.</figcaption>
</figure>

That led to the architecture: four components working together.

**The MAP, a knowledge-space deconstructed skill graph.** Every skill in the domain is a node. Prerequisite relationships are edges. The graph encodes what depends on what, so the system knows which skills are available to target based on what's already been mastered. This is the system's understanding of the domain itself.

<figure>
  <img src="/constellation_example_graph.jpg" alt="Constellation's skill graph with nodes representing skills and edges encoding prerequisites" />
  <figcaption>The MAP. Each node is a skill, edges encode prerequisite relationships, colors indicate mastery state (green = mastered, blue = in progress, orange = fading, gray = untouched). The system only targets skills whose prerequisites are sufficiently mastered.</figcaption>
</figure>

**The learning state assessor.** Bayesian Knowledge Tracing gives a probabilistic estimate of mastery for each node. A correct answer doesn't necessarily mean mastery, it could be a guess. BKT works well for atomic skill checks where observations are frequent and binary. It breaks down for open-ended compound problems like "How would you design TikTok" where multiple skills are exercised simultaneously and the signal is harder to decompose. That's where the error severity taxonomy and embedded assessment checkpoints come in, extracting multiple mastery signals from a single complex problem.

**The instructor policy engine.** This is the component that selects the (topic, phase, scaffold level) tuple. Given the MAP, the current learning state, and priority weighting toward the goal, the engine decides _what_ to teach, _when_ to teach it, and _how_. First exposure gets a different treatment than review. A fading skill gets reinforced before the system pushes into new territory that depends on it. The engine also respects interleaving constraints, mixing topics across sessions rather than drilling one area to exhaustion.

**The drill generator.** Claude generates practice adapted to the learner's current position and the modality the policy engine selects: a Socratic dialogue, a code problem requiring a concept in a new context, an explanation prompt forcing articulation of something half-understood. But Claude reasons about pedagogy within hard constraints. The system overrides invalid teaching sequences. You can't verify mastery on a skill that's never been introduced. You can't start a first exposure with a code editor. The model is a component inside a pedagogical frame, not the product itself.

## Why These Choices

Every major decision traces back to a constraint or research finding. BKT over Deep Knowledge Tracing because DKT needs 10,000+ learners to train and I have one. BKT parameters are human-readable: I can debug "why does the system think I'm at 40%?" DKT is a black box. FSRS over SM-2 for spaced repetition because Jarrett Ye's 2022 research showed 20-30% fewer reviews for the same retention, validated across millions of Anki users. Soft prerequisites over hard gates because ALEKS-style hard gating kills motivation, users feel blocked and quit. And no gamification: no streaks, no badges, no points. Readiness score is the only metric. Streaks optimize for showing up, not for learning. When the measure becomes the target it stops being a good measure.

## What I'm Learning From Using It

Trust. I need to trust the system to want to use it. I need to trust it knows what I know. I need to trust it knows the material. And when it works, it's insightful red flags to avoid, green flags to remember, it's not a wall of text, it seems to have plans within each module, it shakes things up and at the end of the session I can tell it how I felt about the session and next time I trust the experience will be even better.

The first version technically worked. The engine selected topics, generated drills, tracked mastery. But using it daily revealed problems the architecture couldn't predict. The pedagogy felt off and I couldn't tell why. Was the phase selection wrong? Were the mastery estimates drifting? Was the content too easy? I had no way to see inside the system's decisions. So I built observability infrastructure: mastery state dashboards, selector decision logs with full scoring breakdowns, trajectory views, parameter tuning with replay against historical data. Every mastery update carries an audit trail, every selection decision logs its rationale, every LLM call records duration and token count.

That infrastructure started paying for itself immediately. The selector logs showed that without multi-session penalties, the system would grind the same skill repeatedly in a single day, diminishing returns masked by rising mastery numbers. LRU cache is the clearest example: 16 attempts across two sessions, mastery still at 0.35 with a 4-fail streak. The system correctly flagged it as a leech, a skill where observation count is high but mastery isn't climbing, which means the teaching approach needs to change, not just the repetition count. That's a finding I wouldn't have reached by feel alone. The mastery dashboard makes it visible at a glance: every skill's probability of mastery, effective mastery, retrievability, stability, phase, scaffold level, and observation count in one table.

<figure>
  <img src="/constellation_example_mastery.jpg" alt="Mastery dashboard showing BKT state, FSRS parameters, and leech detection across 49 skills" />
  <figcaption>The mastery dashboard. P(M) is probability of mastery, Eff.M adjusts for observation count (low observations = low confidence), Ret. is FSRS retrievability (memory decay), Stab. is memory stability. LRU cache at the bottom: leech status, 0.35 mastery despite 8 observations.</figcaption>
</figure>

Behavioral control has been a huge headache. I'm trying to integrate learning science best practices like interleaving while using LLMs to generate the right quantity and type of content during a session. A Learn module needs enough interactions to go from "never seen" to "tried once with help." A Practice module needs enough to go from "tried with help" to "can articulate and implement." The quantity isn't fixed; it depends on the skill complexity and how the learner is doing within the module. Getting this right requires the evaluation and iteration infrastructure to see what's happening and tune it quickly.

As a singular user and dogfooder there are real limitations. I can't A/B test at scale. I can't separate "this works for me" from "this works." But being the learner and the builder at the same time creates a tight feedback loop that theory alone can't replicate. Every session is a usability test and a pedagogical experiment and building out this infrastructure allows me to rapidly see changes and tune behavior.

## Where This Is Going

The biggest frontier is dynamic interactive content generation. The system currently delivers text, code blocks, and structured feedback. The real vision is LLM-generated interactive learning experiences rendered directly in the browser: visualizations you can manipulate, simulations you can break, diagrams that respond to your input. Purpose-built for pedagogy, where every interactive element is tuned to the learner's mastery state and the concept being taught. Building the content engine that generates these reliably, at quality, within what a browser can render, is the hard part.

Beyond that: validated evals. The system predicts mastery gains before each session and compares to actual outcomes, flagging when predictions diverge by more than 15%. But mastery estimates still need to be validated against transfer performance, not just within-system accuracy. Grading reliability needs tracking across model versions. The system needs to prove its own components work, not just assume they do. And eventually: generalizing beyond n=1. The architecture is designed for a single learner. BKT was chosen partly because it works at that scale. With enough users, the upgrade path to DKT or AKT is there, but that's a different system.

## Origin

The architecture traces back to EarWorm, a project where I tried to decompose the skill space of piano performance using hierarchical VQ-VAE on professional MIDI datasets. Different domain, but the same four components survived: a skill graph, a state assessor, a policy engine, a content generator.
