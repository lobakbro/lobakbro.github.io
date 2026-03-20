---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7]
inputDocuments: []
---

# UX Design Specification — lobakbro.github.io

**Author:** Sprin
**Date:** 2026-03-19

---

## Executive Summary

### Project Vision

A personal portfolio and essay site for Kevin M. Ong that functions as professional brand, intellectual home, and proof-of-work for a specific archetype: the thoughtful builder at the frontier. The site must communicate that Kevin is cutting-edge technically, deeply curious across domains, and human in a way that is memorable — not safe, not average, not sterile.

The site targets the intersection of: someone Anthropic would want to hire (capability-focused, research-minded, comfortable with ambiguity, cares about human agency and safety) AND someone you'd want to get tea with (quirky, opinionated about Rachmaninoff, has a cats page).

### Target Users

1. **Hiring managers at frontier AI companies** — evaluating technical depth AND intellectual character. They see hundreds of portfolios. Kevin's needs to stick.
2. **Peers and fellow engineers** — discovering essays, sharing interests, recognizing a kindred mind.
3. **Internet strangers** — arriving via an essay link, staying because the site itself signals taste and depth.

### Key Design Challenges

1. **The Portfolio Paradox** — Most dev portfolios are either corporate-sterile or try-hard-creative. Kevin needs a third path: composed confidence with genuine personality.
2. **Polymathic coherence** — Essays will span meditation, classical music, philosophy, deep learning, and more. The design must make this feel intentional (a Renaissance mind) rather than scattered.
3. **AUDHD-friendly reading** — The site should support both scanning (quick orientation) and deep immersion (essay reading), since Kevin's audience likely includes similar minds.
4. **Memorable without gimmicks** — "Cutting edge" should mean taste and thoughtfulness, not gratuitous animations.

### Design Opportunities

1. **The Gongfu Tea Principle** — Design the site like gongfu tea: every element intentional, nothing wasted, the experience rewards attention. This philosophy of graceful intentionality (wabi-sabi adjacent) can be the design's soul.
2. **Strategic depth as personality** — The admiration for Tokugawa, Marcus Aurelius, Frederick the Great maps to a design that reveals layers. Simple surface, depth beneath. Visitors who look closer find more.
3. **The essay experience as differentiator** — If the essays feel like reading a beautifully typeset independent magazine rather than a blog, that alone sets Kevin apart from 99% of dev portfolios.
4. **Composed frame, human content** — Let the design system be the intentional space. Let the content be where the quirky, opinionated, messy human shows through. The contrast IS the brand.

## Core User Experience

### Defining Experience

This is a **reading-first, impression-driven** site optimized for a specific visitor: a hiring manager at a frontier AI company who has 60 seconds to decide if Kevin is worth a conversation. The site must pass two tests simultaneously:

1. **The 5-second test** — Before reading a word, the design itself signals taste, intentionality, and technical sophistication. This person is not average.
2. **The 60-second test** — Within a minute, the visitor finds evidence of frontier thinking: essay titles that signal depth (agentic collaboration, evals, edtech product design), project descriptions that show builder instincts, and a voice that sounds like someone who'd thrive in ambiguity.

The secondary experience is the essay deep-dive — someone clicks through to a major article and encounters a reading experience that matches the quality of the thinking. This is where Kevin converts interest into conviction.

### Platform Strategy

- **Web-only, static site** (Astro on GitHub Pages)
- **Desktop-primary** — hiring managers review candidates on laptops. Desktop reading experience is the priority.
- **Mobile-capable** — essays shared on LinkedIn/Twitter will be opened on phones. Must read well but doesn't need to be the optimized path.
- **No offline, no app** — this is a publication, not a product.

### Effortless Interactions

- **Navigation should be invisible** — the site is small enough that visitors should never feel lost. No hamburger menus, no complex hierarchies.
- **Essay discovery should feel curated** — not a reverse-chronological blog dump. Major articles (agentic collaboration, evals) should be elevated above mini-essays.
- **Resume should be findable but not foregrounded** — it's a utility page, not a brand page. The site itself IS the resume.
- **Dark mode should be flawless** — this audience lives in dark mode. It's not an afterthought.

### Critical Success Moments

1. **The homepage impression** — If this feels generic, the hiring manager closes the tab. This is the make-or-break moment.
2. **The essay hook** — An essay title + first paragraph must signal "this person thinks differently about problems I care about."
3. **The projects-to-essays bridge** — A hiring manager who sees PrepVerified and then finds an essay on adaptive learning evals should think "this person goes deep." The connection between building and thinking must be visible.
4. **The personality reveal** — At some point the visitor discovers the cats page, the classical music opinions, the gongfu tea — and thinks "I want to work with this person." This should feel like finding an easter egg, not being hit over the head.

### Experience Principles

1. **Intentional restraint** — Every element earns its place. Like gongfu tea: nothing wasted, the experience rewards attention. If it doesn't serve the 60-second test or the deep-dive, it doesn't belong.
2. **Depth on demand** — Simple surface, layers beneath. The homepage is clean and immediate. Click deeper and find increasingly rich content. Reward curiosity.
3. **The writing IS the product** — Essays aren't blog posts. They're artifacts. The reading experience (typography, spacing, pacing) should make the thinking feel elevated.
4. **Composed frame, human content** — The design system is the intentional space. The content is where the quirky, opinionated human shows through. The contrast is the brand.
5. **Dark mode first** — Design for dark mode, adapt for light. This audience defaults to dark.

## Desired Emotional Response

### Primary Emotional Goals

The site should trigger one dominant reaction: **"This person is not like the others."**

Not through shock or gimmickry — through the unmistakable signal that every choice was deliberate, every detail considered, and the person behind it thinks in ways most applicants don't. The emotional goal is **intrigue that earns respect**.

A generic applicant's portfolio makes you think "competent." Kevin's should make you think "I need to talk to this person."

### Emotional Journey Mapping

1. **First landing (0-5 seconds):** "This doesn't look like every other portfolio." — Surprise through restraint. The design itself communicates that this person has taste and doesn't follow templates. Not confusion, not overwhelm — just the quiet recognition that something is different here.

2. **Scanning the homepage (5-30 seconds):** "Wait, this person writes about evals AND Sibelius?" — Curiosity through unexpected juxtaposition. The polymathic range should feel like a feature, not a bug. The generic applicant has a blog about "my journey learning Rust." Kevin has essays on meditation and agentic collaboration sitting side by side.

3. **Reading an essay (2-10 minutes):** "This is genuinely well-thought-out." — Intellectual respect. The reading experience should feel elevated — closer to a carefully edited publication than a dev blog. The thinking should feel rigorous without being academic, personal without being self-indulgent.

4. **After leaving (the residue):** "I remember that site." — Memorability. When they're reviewing 15 candidates at the end of the week, Kevin's site is the one they can actually picture. They might not remember the exact color scheme, but they remember how it felt.

### Micro-Emotions

**Prioritize:**
- **Intrigue** over familiarity — every generic choice is a missed opportunity
- **Confidence** over humility — the site should project conviction, not "hire me please"
- **Calm energy** over either stillness or chaos — the gongfu tea principle: precise, intentional, alive
- **Respect** over approachability — better to be admired than merely liked

**Avoid:**
- **Comfort** — comfort means forgettable. The site should have just enough edge to stick
- **Impressedness with tech** — no "wow cool animation." The craft should be invisible
- **Corporate trust** — this isn't a SaaS landing page. No testimonials energy
- **Trying too hard** — the line between memorable and desperate is taste. Stay on the right side

### Design Implications

- **Intrigue** → Unexpected typography or color choices that signal deliberateness. Not wild — considered. A palette no one else is using.
- **Confidence** → Generous whitespace. No cluttered "look at everything I've done" energy. Let things breathe. Choosing what NOT to show is the power move.
- **Calm energy** → Subtle motion if any. Nothing that demands attention — things that reward it. Micro-interactions that feel precise.
- **Memorability** → One or two signature design elements that no other portfolio has. A distinctive typographic treatment, an unusual layout decision, a color that sticks.
- **Anti-generic** → Every default must be questioned. Default card layout? Replace it. Default blue links? Replace them. Standard hero section? Rethink it. If a Tailwind template would produce it, it's wrong.

### Emotional Design Principles

1. **The opposite of default** — For every design decision, ask: "Would a generic portfolio do this?" If yes, find a better answer.
2. **Earned confidence** — The site should feel like someone who doesn't need to prove themselves, but whose work speaks clearly when you look.
3. **Quiet intensity** — Not loud, not minimal — alive. Like a well-made knife: simple, precise, and you can feel the intention behind it.
4. **Strategic vulnerability** — The personal content (cats, tea, music) should feel like deliberate openness, not oversharing. A confident person choosing to be human.

## UX Pattern Analysis & Inspiration

### Inspiring Products Analysis

**1. Gwern.net — The Scholar-Engineer**
A personal site that is unmistakably one person's mind made visible. Gwern's site succeeds because it feels like opening someone's research notebook — dense, confident, deeply personal in its obsessions, yet rigorously structured. The typography is distinctive (not beautiful in a conventional sense, but memorable). The sidenotes, the careful metadata, the willingness to be long — it signals "I take ideas seriously."
- **What to take:** The confidence to be intellectually dense. The metadata-richness (dates, tags, status markers) that signals a living body of work, not a blog dump. The sense that the site IS the person's brain.

**2. Craig Mod (craigmod.com) — The Intentional Maker**
A writer/walker/technologist whose site feels like a well-made Japanese object. Clean, considered, unhurried. The typography is exquisite — he clearly cares about the reading experience as much as the writing. His newsletter/essay distinction (quick thoughts vs. deep pieces) maps directly to Kevin's mini-essays vs. major articles.
- **What to take:** The editorial hierarchy between lightweight and heavyweight content. The sense that someone who cares about craft made this. The quiet confidence of generous whitespace.

**3. Stripe Press (press.stripe.com) — The Elevated Technical**
Stripe Press proves that technical/business content can feel like art. The typography, color choices, and layout are distinctive without being loud. It's the "composed frame" principle in action — the design is restrained and beautiful, making the content feel important.
- **What to take:** The elevation of technical content through design quality. The palette choices that feel unexpected but inevitable. The sense that ideas deserve beautiful presentation.

**4. Anthropic.com — The Target Audience's Own Aesthetic**
The site Kevin's audience literally works at. Clean, confident, lots of breathing room. A muted, sophisticated palette. The design says "we're serious about what we do" without saying "we're a corporation." It's the baseline his audience considers tasteful.
- **What to take:** Understanding the aesthetic baseline of the target audience. Then deliberately departing from it in specific ways — more personality, more warmth, more edge — while staying in the same register of quality.

**5. Things App / Linear — Calm Precision Tools**
Not publications, but relevant for interaction feel. These apps feel like well-made instruments. Every interaction is precise, responsive, considered. No unnecessary animation, but nothing feels static either. This is the "quiet intensity" emotional principle made interactive.
- **What to take:** The micro-interaction philosophy — precision over flash. The sense that someone sweated the details you can barely see.

**6. molt.church — Reverent Irreverence**
A joke site that succeeds because the craft is dead serious. Dark-first palette with sacred gold accent (#d4a853). Three-tier typography (Cinzel ceremonial serif / Crimson Pro readable serif / JetBrains Mono code) creating semantic layers. Fully committed theming — every detail reinforces the concept. Clean despite visual richness because spacing and hierarchy are disciplined.
- **What to take:** The courage to commit to a cohesive aesthetic concept. The dark + warm gold palette direction. The three-register typography strategy (display / body / code). The proof that personality and polish aren't opposites. The lesson that intentional theming > safe neutrality.

### Transferable UX Patterns

**Typography as Identity:**
- Use typography itself as the distinctive element. An unexpected serif for headings, or a deliberate monospace/serif pairing that signals "engineer who reads literature." This is cheaper and more effective than illustration or photography for establishing uniqueness.

**Editorial Content Hierarchy:**
- Borrow from publishing, not blogging. Major articles get a distinct presentation (full-width, hero treatment, estimated read time, publication-quality typography). Mini-essays get a lighter treatment. This signals that Kevin thinks about what deserves weight.

**Metadata as Signal:**
- Show essay status (draft, working, finished), dates, reading time, categories. This signals a living intellectual practice, not a collection of posts. Gwern does this well — it says "I'm always thinking."

**The Unhurried Homepage:**
- Resist the urge to show everything. A focused homepage with one clear statement, 2-3 featured pieces, and a path deeper. The confidence to leave things out is itself a signal.

**Sidenotes over Footnotes:**
- For the major articles, sidenotes (visible in the margin on desktop) rather than footnotes signal that Kevin's thinking has depth and he respects the reader's time. This is a Tufte/Gwern pattern that most dev blogs don't use.

### Anti-Patterns to Avoid

- **The GitHub-green contribution graph** — Nothing says "generic developer" faster. Kevin's proof of work is his writing and projects, not commit frequency.
- **The skills progress bar** — "Python: 90%, JavaScript: 75%" is the portfolio equivalent of "hard worker" on a resume. Meaningless and everywhere.
- **The timeline layout** — Chronological career timelines feel like LinkedIn exports. Kevin's story is thematic, not chronological.
- **Hero image with laptop/code on screen** — Stock-feeling, even when it's real.
- **"Hi, I'm Kevin, a passionate software engineer"** — The word "passionate" in a hero section is the kiss of death. Show, don't tell.
- **Card grid with identical cards** — The Pinterest/Medium layout. Treats all content as equal, which is the opposite of curation.
- **Animations on scroll** — Fade-in-on-scroll is the 2020s equivalent of the 2000s Flash intro. It's everywhere and it says nothing.

### Design Inspiration Strategy

**Adopt:**
- Editorial content hierarchy (major articles vs. mini-essays as distinct experiences)
- Typography-forward identity (the fonts ARE the brand)
- Generous whitespace as confidence signal
- Metadata-rich content presentation (status, dates, reading time)
- Dark-first palette with warm accent (inspired by molt.church's gold-on-dark approach)
- Three-register typography system (display / body / code)

**Adapt:**
- Gwern's density → Kevin's version should be more visually refined, less academic
- Craig Mod's quietness → Kevin needs slightly more energy (the AUDHD spark, the Napoleon ambition)
- Stripe Press elevation → Apply to a personal site without feeling corporate
- Anthropic's clean confidence → Add warmth and personality that Anthropic deliberately omits
- molt.church's committed theming → Apply the same conviction to Kevin's aesthetic without the ironic register

**Avoid:**
- Any pattern that appears in a "best developer portfolio" listicle
- Any layout achievable with an off-the-shelf template
- Any interaction that prioritizes "cool" over "clear"
- Any visual choice that could be described as "modern and clean" — that's code for generic

## Design System Foundation

### Design System Choice

**Custom design tokens on Tailwind CSS** — a bespoke visual identity built on Tailwind's utility-class foundation. No external component library. Every visual decision is hand-specified through CSS custom properties in `global.css` and Tailwind's `@theme` directive.

### Rationale for Selection

1. **Already in place** — Astro + Tailwind is the existing stack. Switching frameworks adds zero value for a 6-page static site.
2. **Maximum visual control** — No component library imposing its opinions. Every color, every spacing value, every typographic choice is Kevin's.
3. **Anti-generic by construction** — Component libraries carry visual DNA that makes sites look alike. Custom tokens on raw Tailwind produce something unique by default.
4. **Simplicity** — A personal site doesn't need a design system in the enterprise sense. It needs a coherent set of design tokens and a few well-crafted components.

### Implementation Approach

- **Design tokens** defined as CSS custom properties in `src/styles/global.css` via Tailwind's `@theme` directive (already the current pattern)
- **Typography** loaded via `@fontsource` packages or Google Fonts link in BaseLayout
- **Components** are Astro `.astro` files — no React, no JS framework overhead. Pure HTML + Tailwind classes + CSS custom properties
- **Dark/light modes** via `html.dark` class toggle (already implemented)
- **No JS-heavy interactions** — CSS transitions and animations only, keeping the site fast and the dependencies minimal

### Customization Strategy

The current `global.css` has generic Tailwind defaults that need complete replacement:
- `--color-primary: #2563eb` (Tailwind blue-600) → replace with distinctive palette
- `--font-sans: 'Inter'` → replace with typography that signals identity
- All spacing, border-radius, and shadow values → audit against "would a template produce this?" test
- The prose styles → redesign for editorial-quality reading experience

Design token decisions will be made in subsequent steps (Step 7: Visual Foundation) based on the emotional and inspirational direction established in Steps 4-5.

## Defining Core Experience

### Defining Experience

**The 10-Second Recognition:** A hiring manager lands on the homepage and immediately registers "this person is not like the other candidates." This isn't about reading content — it's about the pre-verbal impression the design, typography, and composition create before a single word is processed. If this moment fails, nothing else matters. If it succeeds, everything else has permission to work.

**The Deep Conviction Read:** Someone clicks into a major article (agentic collaboration, evals, edtech product design) and encounters a reading experience that elevates the thinking. The typography, spacing, and pacing make the essay feel like it belongs in a publication, not a blog. By the end, the reader doesn't just think Kevin is smart — they think he's the kind of person who produces artifacts worth reading.

### User Mental Model

The hiring manager's mental model when visiting a candidate's portfolio:

- **Default state:** Skepticism. They've seen dozens of portfolios. Most are forgettable. They're scanning for reasons to close the tab OR reasons to keep reading.
- **What they expect:** A hero section with name + title, some project cards, maybe a blog. They know this template.
- **Where the opportunity lives:** In breaking the template without confusing them. The navigation should be familiar (they're not here to learn a new interface). The content presentation should be surprising.
- **What makes them stay:** Unexpected quality. An essay title that sounds like something they'd discuss at work. A design that signals this person has taste they didn't expect from an engineer.

### Success Criteria

1. **The tab stays open.** The homepage doesn't get closed within 5 seconds. The design itself buys time.
2. **Something gets clicked.** An essay title, a project, the about page — the visitor goes deeper because something piqued curiosity.
3. **The site gets referenced.** In a hiring discussion, someone says "did you see Kevin's site?" The URL gets shared in a Slack channel.
4. **The essay gets finished.** A reader who starts a major article reads it to completion because the experience supports sustained attention.

### Novel UX Patterns

**Mostly established patterns, executed at unusual quality:**

The site should NOT require learning new interactions. Hiring managers are busy and impatient. Navigation is standard. Links work like links. Scrolling works like scrolling.

The novelty is in the **execution quality** and **content presentation**, not the interaction model:

- **Novel:** Editorial-quality typography and layout for technical content (most dev sites don't invest here)
- **Novel:** Content hierarchy that distinguishes major articles from mini-essays visually (most blogs treat all posts identically)
- **Novel:** A homepage that leads with intellectual identity rather than professional identity (not "Software Engineer at X" but something that signals how Kevin thinks)
- **Established:** Standard navigation, standard link behavior, standard responsive patterns
- **Established:** Dark/light mode toggle, standard reading flow

### Experience Mechanics

**1. Homepage Landing:**
- **Initiation:** Direct URL or LinkedIn/resume link click
- **First frame:** Name + a statement that is NOT a job title. Something that signals thinking, not employment. The design itself (palette, typography, whitespace) does half the work before any text is read.
- **Scan path:** Statement → featured essay titles (2-3 max) → project highlights → subtle path to more. No scroll-jacking, no forced sequence.

**2. Essay Discovery:**
- **Initiation:** Homepage featured section or direct essay link
- **Hierarchy:** Major articles presented with weight (larger type, more space, hero treatment). Mini-essays presented as a lighter-weight collection. The distinction is immediately visible.
- **Entry:** Essay pages open clean — title, date, estimated read time, then straight into content. No author bio block, no share buttons above the fold. Let the writing speak.

**3. Essay Reading:**
- **Typography:** Serif body text, generous line height, ~65ch measure. Headings in the display face. Code blocks in monospace. The three-register system from the inspiration analysis.
- **Pacing:** Generous paragraph spacing. Pull quotes or section breaks for major articles. The reader should never feel overwhelmed or rushed.
- **Completion:** End of essay flows naturally to related content or back to the essay index. No aggressive CTAs.

**4. Project Review:**
- **Presentation:** Projects shown with enough context to understand what Kevin built and WHY, not just a tech stack list. The connection to essays (if one exists) should be visible.
- **Depth:** Click into a project for full details. Keep it concise — the major articles are where the deep thinking lives.
