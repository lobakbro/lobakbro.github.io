---
title: "Meridian — Adaptive Interview Prep"
description: "An adaptive interview preparation system that maps your knowledge state across 68 skills and generates targeted practice to close gaps — built on skill-space decomposition ideas from the EarWorm project."
date: 2024-09-15
tech: [SvelteKit, TypeScript, SQLite, Drizzle ORM, Python, Claude CLI]
status: in-progress
featured: true
draft: false
---

Most interview prep is broken. You drill through hundreds of practice questions without knowing which gaps actually matter, without adaptive difficulty, and without feedback that helps you grow rather than just tells you what you got wrong. Meridian is my attempt to fix that — an adaptive system I built and use for my own interview preparation.

The core insight came from EarWorm, an earlier project where I used a hierarchical VQ-VAE to decompose the skill space of piano performance. The idea there was to escape the trap of synchronizing play-along to MIDI and instead understand a player's skill state from how they actually play. That skill-space decomposition thinking became the foundation for Meridian.

## How It Works

Meridian maps interview preparation as a directed acyclic graph of 68 skills with 84 prerequisite edges. Instead of throwing random questions at you, it estimates where you are in the skill graph and targets the gaps that will unlock the most progress.

**Adaptive Skill Targeting**: An engine with an 85% success rule, 5-tier recommendation priority, deadline proximity adaptation, and leech detection — the system finds the edge of your ability and keeps you there.

**Claude-Generated Problems**: Problems are generated and graded by Claude via structured JSON prompts with behavioral protocol. Five rubric types (coding, system design, ML/research, behavioral, CodeSignal) with error taxonomy and confidence calibration.

**Interactive Skill Graph**: A Cytoscape.js visualization showing mastery progression and prerequisite relationships in real time. You can see exactly where you are and where you need to go.

**Session Debriefs**: After each practice session, the system surfaces prediction-vs-actual divergence — where you thought you were strong but weren't, and where you underestimated yourself.

## What I'm Learning

Building something I actually use daily has changed how I think about adaptive systems. The feedback loop is immediate and honest — if the targeting is wrong, I feel it in the next session. Some things I've discovered:

The system's value isn't in making practice easier — it's in making practice more honest. Knowing exactly which skills are weak and why is uncomfortable but far more useful than a confidence-boosting drill session.

Confidence calibration matters as much as accuracy. The divergence between "I think I know this" and "I actually know this" is where the most important learning happens.
