---
title: "Building Constellation: Adaptive Learning in a Chaotic System"
description: "What happens when you try to build an intelligent tutoring system and discover that the hardest problem isn't the AI — it's the evaluation."
date: 2024-12-01
author: Kevin Ong
category: research
tags: [constellation, adaptive-learning, knowledge-space-theory, ai, evaluation]
featured: true
draft: true
readingTime: "8 min read"
---

Constellation started because I needed to prep for interviews and everything available was bad. Not bad in the obvious ways — the questions were fine, the platforms worked. Bad in the way that matters: none of them knew what I actually needed to learn next.

That problem led me to knowledge space theory, the framework behind ALEKS (the adaptive learning system from McGraw-Hill). The core idea is elegant: decompose a domain into atomic skills, map the prerequisite relationships between them as a directed graph, estimate where the student is in that graph, and serve content that targets the frontier — the skills they're ready to learn next.

ALEKS uses teams of domain experts to build these knowledge structures by hand. I wanted to see if agents could do it. And they could — sort of.

## Agents Mapping Knowledge Space

The first surprising discovery was that group AI dynamics actually work for knowledge decomposition. Multiple agents scouring documentation, textbooks, interview guides, and job postings could collaboratively construct a skill graph that captured meaningful prerequisite relationships. The DAG that Constellation uses today was built this way.

But "built" is doing a lot of work in that sentence. The agents produced a draft. A human — me — had to interrogate every edge, ask whether "understanding gradient descent" really requires "linear algebra foundations" or just "calculus," and decide at what granularity a "skill" should be defined. The agents accelerated the process enormously, but the judgment calls were mine.

## The Evaluation Problem

The harder discovery was that evaluating whether the system actually works is a fundamentally chaotic problem.

Consider what Constellation is trying to track simultaneously: the student's current knowledge state across dozens of skills, their learning style and preferences, what they're currently studying, their history with each subject, whether this is a first introduction or a review, how fast they're forgetting things, and whether they're in a productive struggle zone or a frustration zone.

Each of these is a signal. Each signal is noisy. And the signals interact in non-obvious ways — a student who's frustrated with system design questions might actually be making progress if their confidence calibration is improving even while their accuracy temporarily dips.

Traditional evaluation metrics don't capture this. Accuracy on questions tells you what someone can do right now but not what they're learning. Completion rates tell you engagement but not growth. Time-on-task tells you effort but not efficiency.

What you actually want to measure is: is the student's knowledge state moving in the right direction, at the right pace, across the right skills? And is the system's model of that state converging toward reality?

## What Knowledge Tracing and Spaced Repetition Are Supposed to Solve

This is where knowledge tracing and spaced repetition scheduling come in — and where I'm currently working.

Knowledge tracing gives you a probabilistic model of whether a student has "learned" a skill based on their response pattern. It accounts for guessing and slipping — a correct answer doesn't necessarily mean mastery, and an incorrect answer doesn't necessarily mean ignorance. The model updates with each interaction, giving you a running posterior probability of mastery for each skill.

Spaced repetition handles the forgetting curve — when should the student see this material again to maximize retention? The timing matters because memory consolidation is a physical process. Too soon and you're wasting time. Too late and you're starting over.

The integration challenge is getting these systems to talk to each other and to the content generation layer. Knowledge tracing says the student has a 73% probability of mastering "recursion." Spaced repetition says their last review of recursion-related material was 4 days ago and they're at risk of forgetting. The adaptive engine needs to synthesize these signals and decide: do we reinforce recursion, push forward to dynamic programming (which depends on recursion), or context-switch to behavioral questions because the student's been grinding algorithms for too long?

These aren't deterministic decisions. They're judgment calls that the system makes probabilistically, and evaluating whether those judgment calls are good requires ground truth that you don't have until weeks later when you see whether the student actually retained the knowledge.

## What I'm Learning

Building something I use daily has changed how I think about adaptive systems.

The feedback loop is honest in a way that academic evaluation can't be. When the targeting is wrong — when the system serves me a hard distributed systems question when I haven't solidified the networking fundamentals — I feel it immediately. The gap between "the system thinks I'm ready" and "I'm actually ready" is visceral.

Confidence calibration has turned out to be the most valuable signal, not accuracy. The divergence between "I think I know this" and "I actually know this" is where the real learning happens. The system surfaces this divergence in session debriefs, and it's consistently the most uncomfortable and most useful part of the experience.

The hardest lesson: you can't optimize a learning system the way you optimize a recommendation system. Recommendation systems succeed when users are satisfied. Learning systems succeed when users are challenged in exactly the right way — which often means they're not satisfied in the moment. Productive discomfort is the mechanism, not a failure mode.

I'm still building Constellation. The evaluation problem isn't solved — I'm not sure it can be, in the traditional ML sense. But the process of trying to solve it has taught me more about how learning actually works than anything I could have read.
