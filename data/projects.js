export const companies = [
  {
    id: "copley",
    name: "Copley",
    dates: "2024–2026",
    descriptor: "Sole designer",
    descriptorColor: "green",
    title: "0→1 AI marketing platform",
    tags: ["AI Workflow", "Design Systems", "IA", "UX Strategy"],
    projects: [
      {
        id: "ai-brief",
        title: "Manual to Agentic Briefs",
        label: "AI Workflow",
        size: "large",
        gradient: "linear-gradient(135deg, #16a34a 0%, #16a34a 50%, #4ade80 100%)",
        imageSrc: "/images/copley/agent.png",
        route: "/work/copley/ai-brief",
        inProgress: false,
        description:
          "End-to-end workflow enabling marketers to generate campaign briefs and creative using AI — reducing brief-to-launch time by 60%.",
        role: "Sole Product Designer",
        timeline: "2024–2025",
        company: "Copley Advertising",
        deliverables: "User flows, Wireframes, Prototypes, Design system components",
        challenge:
          "Copley's marketing teams were spending 2–3 days manually writing briefs before any creative work could begin. The challenge was to design an AI-assisted workflow that felt trustworthy and transparent — not a black box.",
        steps: [
          { number: "01", title: "Discovery & Research", description: "Conducted 12 stakeholder interviews with marketing managers and creatives. Mapped existing brief-to-campaign workflows and identified key pain points around brief quality and approval bottlenecks." },
          { number: "02", title: "Information Architecture", description: "Redesigned the campaign creation IA from scratch. Created a step-by-step wizard model that broke the overwhelming brief form into guided, context-aware sections." },
          { number: "03", title: "Prototyping & Testing", description: "Built interactive prototypes in Figma and ran 3 rounds of usability testing with internal teams. Iterated on AI output presentation, focusing on trust signals and edit affordances." },
          { number: "04", title: "Handoff & System", description: "Delivered production-ready specs and contributed 14 new components to the design system. Collaborated closely with engineering during QA to ensure pixel-perfect implementation." },
        ],
        skills: ["Figma", "User Research", "Information Architecture", "AI Product Design", "Prototyping", "Design Systems"],
      },
      {
        id: "design-system",
        title: "Design System & IA",
        label: "Design Systems",
        size: "small",
        gradient: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)",
        route: "/work/copley/design-system",
        inProgress: false,
        comingSoon: true,
        description:
          "Built a scalable component library and information architecture framework from 0→1 to unify the platform's design language.",
        role: "Sole Product Designer",
        timeline: "2024",
        company: "Copley Advertising",
        deliverables: "Component library, Token system, IA diagrams, Documentation",
        challenge:
          "With rapid product growth, Copley's interface had accumulated inconsistent patterns across 5+ product areas. We needed a unified design system that engineering and design could both own.",
        steps: [
          { number: "01", title: "Audit & Inventory", description: "Audited 200+ screens to catalog existing components, color usage, and typography patterns. Identified redundancies and inconsistencies across the product." },
          { number: "02", title: "Token Architecture", description: "Defined a semantic token system for color, spacing, and typography. Established naming conventions that mapped cleanly to Tailwind's utility classes." },
          { number: "03", title: "Component Library", description: "Built 60+ components in Figma with proper variant states (default, hover, focus, disabled, error). Documented usage guidelines and accessibility requirements." },
          { number: "04", title: "Rollout & Adoption", description: "Ran workshops with the engineering team to align on implementation. Created a contribution model so engineers could propose new components." },
        ],
        skills: ["Figma", "Design Systems", "Information Architecture", "Component Design", "Documentation", "Accessibility"],
      },
      {
        id: "ai-onboarding",
        title: "AI Onboarding",
        label: "UX Strategy",
        size: "small",
        gradient: "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)",
        imageSrc: "/images/copley/onboarding-home.png",
        route: "/work/copley/ai-onboarding",
        inProgress: false,
        description:
          "Designing first-run experience for AI features — helping users build trust and confidence with AI-generated outputs.",
        role: "Sole Product Designer",
        timeline: "2025–2026",
        company: "Copley Advertising",
        deliverables: "Onboarding flows, Tooltips, Empty states, Progress tracking",
        challenge:
          "New users struggled to understand what AI could do and were hesitant to trust AI-generated content. We needed an onboarding experience that educated, built confidence, and drove activation.",
        steps: [
          { number: "01", title: "Jobs-to-be-Done Research", description: "Mapped new user mental models around AI assistance. Identified the moment of trust as the critical activation point." },
          { number: "02", title: "Progressive Disclosure", description: "Designed a reveal-as-you-go onboarding that introduces AI features incrementally — starting with low-stakes tasks to build confidence." },
          { number: "03", title: "Trust Mechanics", description: "Designed transparency patterns: AI confidence scores, source citations, and easy override affordances to keep humans in control." },
          { number: "04", title: "Testing & Iteration", description: "Running A/B tests on onboarding sequences. Measuring impact on 7-day activation rate and feature adoption depth." },
        ],
        skills: ["Figma", "UX Strategy", "User Research", "AI Product Design", "Onboarding Design", "A/B Testing"],
      },
    ],
  },
  {
    id: "well",
    name: "Well",
    dates: "Jan–Jun 2022",
    descriptor: "Series C",
    descriptorColor: "blue",
    title: "Health benefits platform",
    tags: ["UX/UI Design", "Design Systems", "Feature Dev", "User Research"],
    projects: [
      {
        id: "in-app-challenges",
        title: "In-App Challenges",
        label: "Feature Dev",
        size: "large",
        gradient: "linear-gradient(135deg, #0369a1 0%, #38bdf8 60%, #7dd3fc 100%)",
        imageSrc: "/images/well/well-in-app-challenges.png",
        route: "/work/well/in-app-challenges",
        inProgress: false,
        description:
          "Designed a gamified health challenge system to drive daily engagement and habit formation across Well's member base.",
        role: "Product Designer",
        timeline: "Jan–Jun 2022",
        company: "Well",
        deliverables: "User flows, UI design, Prototypes, Design system components",
        challenge:
          "Well's engagement metrics showed members dropped off after initial setup. We needed a repeatable engagement loop that motivated healthy behaviors without feeling like homework.",
        steps: [
          { number: "01", title: "Behavioral Research", description: "Studied habit formation research and competitor wellness apps. Ran diary studies with 20 existing members to understand current health tracking behaviors." },
          { number: "02", title: "Challenge Architecture", description: "Designed a flexible challenge framework: daily, weekly, and milestone challenges with individual and team modes. Created a progression system with streaks and badges." },
          { number: "03", title: "UI Design", description: "Built the challenge hub with a focus on clarity and motivation. Designed celebratory moments for completions and gentle nudges for at-risk streaks." },
          { number: "04", title: "Launch & Measurement", description: "Shipped to 50K members. Tracked 7-day retention and challenge completion rates. Iterated based on drop-off analysis from the first two weeks." },
        ],
        skills: ["Figma", "User Research", "UX/UI Design", "Gamification", "Design Systems", "Prototyping"],
      },
      {
        id: "web-onboarding",
        title: "Web Onboarding",
        label: "UX/UI Design",
        size: "small",
        gradient: "linear-gradient(135deg, #0891b2 0%, #22d3ee 100%)",
        imageSrc: "/images/well/well-onboarding.png",
        route: "/work/well/web-onboarding",
        inProgress: false,
        description:
          "Redesigned Well's web onboarding to reduce drop-off and increase benefit enrollment rates.",
        role: "Product Designer",
        timeline: "Feb–Apr 2022",
        company: "Well",
        deliverables: "Onboarding flow, Web UI, Copy guidance, Analytics setup",
        challenge:
          "The existing onboarding had a 40% drop-off before benefit selection. Users found the process confusing and didn't understand the value of completing their profile.",
        steps: [
          { number: "01", title: "Drop-off Analysis", description: "Analyzed funnel data with the data team. Identified 3 key drop-off points in the existing flow and ran session recordings to understand why." },
          { number: "02", title: "Jobs-to-be-Done", description: "Interviewed new members to understand what they hoped to get from Well. Reframed onboarding around member outcomes, not company data collection." },
          { number: "03", title: "Redesign", description: "Redesigned the flow with clear progress indicators, benefit previews, and personalized content based on member health goals." },
          { number: "04", title: "Results", description: "New onboarding reduced drop-off by 28% and increased benefit enrollment by 35% in the first month post-launch." },
        ],
        skills: ["Figma", "UX/UI Design", "Funnel Analysis", "Copywriting", "User Research", "A/B Testing"],
      },
      {
        id: "buttons",
        title: "Buttons",
        label: "Design Systems",
        size: "small",
        gradient: "linear-gradient(135deg, #1d4ed8 0%, #60a5fa 100%)",
        imageSrc: "/images/well/well-buttons.png",
        route: "/work/well/buttons",
        inProgress: false,
        description:
          "Audited and rebuilt Well's button system for consistency, accessibility, and scalability across web and mobile.",
        role: "Product Designer",
        timeline: "May–Jun 2022",
        company: "Well",
        deliverables: "Button component spec, Figma library, Accessibility audit, Dev documentation",
        challenge:
          "Well had 14 different button variants across the product — inconsistently named, missing focus states, and failing WCAG AA contrast requirements.",
        steps: [
          { number: "01", title: "Audit", description: "Cataloged all button usages across web and mobile. Found 14 distinct variants, 6 different interaction states handled inconsistently, and 9 accessibility failures." },
          { number: "02", title: "System Design", description: "Designed a unified button taxonomy: Primary, Secondary, Ghost, Destructive, and Icon variants — each with 5 states and dark mode support." },
          { number: "03", title: "Accessibility", description: "Ensured all buttons met WCAG AA contrast ratios, had visible focus rings, and communicated state changes to screen readers." },
          { number: "04", title: "Documentation & Handoff", description: "Wrote comprehensive usage guidelines, do/don't examples, and implementation specs. Ran a workshop with engineering to align on the new system." },
        ],
        skills: ["Figma", "Design Systems", "Accessibility", "Component Design", "Documentation", "WCAG"],
      },
    ],
  },
  {
    id: "pasito",
    name: "Pasito",
    dates: "Jun 2021–Present",
    descriptor: "YCombinator backed",
    descriptorColor: "amber",
    title: "Fintech · HR communications platform",
    tags: ["UX/UI", "Brand Identity", "Feature Dev", "MVP Design"],
    projects: [
      {
        id: "mvp",
        title: "MVP",
        label: "MVP Design",
        size: "large",
        gradient: "linear-gradient(135deg, #be185d 0%, #f472b6 60%, #fbcfe8 100%)",
        imageSrc: "/images/pasito/pasito-home.png",
        route: "/work/pasito/mvp",
        inProgress: false,
        description:
          "Designed Pasito's 0→1 MVP — a personalized benefits navigation platform helping employees understand and enroll in their benefits.",
        role: "Lead Product Designer",
        timeline: "Jun–Dec 2021",
        company: "Pasito",
        deliverables: "Product strategy, User flows, Full UI design, Prototype, Brand system",
        challenge:
          "85% of employees don't understand their benefits, leaving thousands in unused employer contributions. Pasito needed an MVP that made benefits feel personal and understandable — not corporate and overwhelming.",
        steps: [
          { number: "01", title: "Product Strategy", description: "Worked with the CEO to define MVP scope. Focused on three core jobs: understand what you have, know what you're missing, and take action confidently." },
          { number: "02", title: "User Research", description: "Interviewed 25 employees across 5 companies about their benefits experience. Found that the primary emotion was confusion, not disengagement." },
          { number: "03", title: "0→1 Design", description: "Designed the full product from scratch — personalized benefits dashboard, enrollment wizard, comparison tools, and an AI-powered recommendations engine UI." },
          { number: "04", title: "Launch", description: "MVP shipped to 3 pilot companies. 78% of users completed their benefits review in the first session — vs. 12% industry average for traditional enrollment portals." },
        ],
        skills: ["Figma", "Product Strategy", "User Research", "UX/UI Design", "Brand Design", "Prototyping"],
      },
      {
        id: "marketing-website",
        title: "Marketing Website",
        label: "Brand Identity",
        size: "small",
        gradient: "linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)",
        imageSrc: "/images/pasito/marketing-website.png",
        route: "/work/pasito/marketing-website",
        inProgress: false,
        description:
          "Designed Pasito's marketing site to communicate the product's value to HR buyers and drive demo requests.",
        role: "Lead Product Designer",
        timeline: "Jan–Mar 2022",
        company: "Pasito",
        deliverables: "Website design, Brand identity, Illustrations, Copy direction",
        challenge:
          "Pasito needed to establish brand credibility with enterprise HR buyers while remaining approachable to employees. The site had to speak to two audiences simultaneously.",
        steps: [
          { number: "01", title: "Brand Foundation", description: "Developed Pasito's visual identity — color system, typography, illustration style, and motion principles — to feel trustworthy yet human." },
          { number: "02", title: "Content Strategy", description: "Mapped the buyer journey from awareness to demo request. Structured content to address HR buyer ROI concerns and employee experience benefits separately." },
          { number: "03", title: "Design", description: "Designed a 7-page marketing site with custom illustrations, social proof sections, and a clear conversion path toward demo scheduling." },
          { number: "04", title: "Results", description: "Site launched and contributed to a 3x increase in inbound demo requests. Featured in YC's design showcase." },
        ],
        skills: ["Figma", "Brand Identity", "Web Design", "Illustration", "Content Strategy", "Framer"],
      },
    ],
  },
];

// ─── Rich case study content ───────────────────────────────────────────────
// Stored here so page components stay presentational.

export const inAppChallengesContent = {
  eyebrow: "Case study · Well · April – June 2022",
  headline: "In-App Challenges",
  headlineEmphasis: "Challenges",
  subtitle:
    "Researching and developing the first MVP for in-app challenges — driving engagement across a broad, beautifully ambiguous audience.",
  heroImageLabel: "Add your Figma screen here",
  meta: {
    role: "Research · UX/UI",
    timeline: "April – June 2022",
    team: "Andrew Schwint · Colleen Curtis · Bernie Smigel",
    tools: "Figma · Jira",
  },
  theStart: {
    para1:
      "Well was already running challenges through email marketing. The ask seemed straightforward: bring those challenges into the app. But the more I dug in, the more complex it became. The first obstacle was understanding who we were actually designing for. I went in expecting a defined persona — and hit a wall immediately.",
    pullQuote: {
      text: "Well doesn't have one specific audience. It's for everyone.",
      emphasis: "everyone.",
      source: "Design Director",
    },
    para2:
      "That reframe changed everything. Instead of designing for a single user type, I needed to build something flexible enough to engage most users regardless of background, motivation, or comfort with technology.",
    requirements: [
      "Establish baseline metrics for challenge participation",
      "Define intended KPI lifts in challenge participation",
      "Define a Well point-of-view for what a challenges experience should be",
      "Define and/or fortify the audiences",
      "Define requisite user journeys and user flows",
      "Provide design artifacts to deliver proof of concept",
    ],
  },
  research: {
    para:
      "Before designing anything, I wanted to understand the psychology behind habit formation. The insight that unlocked my approach: habits and challenges follow the same four-stage loop. If I could design for how habits actually form, I could design challenges that stick. This led me to research gamer psychology — specifically the HEXAD framework developed by Andrzej Marczewski, which categorizes users by what motivates them. I identified five types relevant to Well, organized around a core tension: extrinsic users (motivated by rewards) vs. intrinsic users (motivated by personal growth). The goal of the challenges system would be to convert extrinsic users into intrinsic ones over time.",
    extrinsic: [
      { type: "Consumer", desc: "Will do what is needed to get rewards." },
      {
        type: "Self-Seeker",
        desc: "Helps others purely to get rewards and visible status from the system.",
      },
    ],
    intrinsic: [
      { type: "Socializer", desc: "Wants to interact and connect with others." },
      {
        type: "Achiever",
        desc: "Motivated by mastery — looking to learn new things and improve themselves.",
      },
      {
        type: "Networker",
        desc: "Looking for useful contacts that they can gain from.",
      },
    ],
  },
  ideation: {
    para:
      "Given the breadth of Well's audience, traditional personas would exclude too many users. Instead, I introduced levers — stackable personality traits that could be applied in combination to represent any user. I led the design team through a series of workshops where we mapped user stories for each lever, color-coding them red/yellow/green to identify where Well was underserving users and where challenges could create the most impact.",
    levers: [
      "Age",
      "Location",
      "Socioeconomic Status",
      "Job",
      "Chronic Illness",
      "Engagement",
      "Comfort with Technology",
      "Extrinsic/Intrinsic",
      "Achiever/Socializer",
      "Motivations",
      "Comfort sharing personal info",
    ],
    stakeholdersPara:
      "I synthesized the research into a stakeholder presentation covering two levers in depth, including user journey maps across five stages: awareness, evaluation, adoption, engagement, and loyalty. The presentation included clear conclusions on current gaps and specific recommendations for how challenges could address them — along with next steps for designers and PMs.",
    tracksPara:
      "After incorporating stakeholder feedback, the project split into two distinct tracks:",
    tracks: [
      {
        id: "challenges",
        tag: "TRACK A",
        title: "Challenges",
        desc: "Ongoing engagement mechanics to increase app adoption.",
        borderColor: "#38bdf8",
        bgColor: "#f0f9ff",
        tagColor: "#0369a1",
      },
      {
        id: "offers",
        tag: "TRACK B",
        title: "Offers",
        desc: "Targeted incentives tied to specific KPIs that may not impact overall adoption.",
        borderColor: "#fb923c",
        bgColor: "#fff7ed",
        tagColor: "#c2410c",
      },
    ],
  },
  design: {
    paras: [
      "With research and flows validated, I moved into design — working within the constraints of Well's existing component library and technical capabilities to create something shippable. Challenges surface under an 'In Progress' state and expand into a dedicated screen showing enrollment status, dates, reward tracking, and instructions.",
      "A key decision: rewards show a 'ready to claim' state throughout the challenge rather than only at completion. The 'ready to claim' decision came from what I'd learned in research — extrinsic users need visible proof that the system is working for them. If rewards only appeared at the end, users who weren't naturally motivated would disengage before they ever got there. Making points visible throughout kept the reward loop active even for users who hadn't yet built intrinsic motivation.",
      "Working within Well's existing tech constraints wasn't a limitation I fought against — it was a design problem in itself. The real challenge was figuring out how to communicate richness and progression through a relatively simple component set. That constraint actually pushed me toward clearer information hierarchy rather than relying on complex interactions to do the work.",
      "I delivered a mix of lo-fi and hi-fi wireframes, giving the team enough fidelity to understand the concept and enough flexibility to iterate.",
    ],
  },
  futureStates: {
    intro:
      "Since co-op was ending, I wasn't able to iterate on the MVP or see it developed. I left insight from my research and process for the team to consider moving forward.",
    items: [
      {
        number: "01",
        text: "Ability for members to view progress with a clickable details and in-progress screen within each challenge",
      },
      {
        number: "02",
        text: "Easy way to find new, track active, and review past experiences via a cohesive discovery page",
      },
      {
        number: "03",
        text: "Activating intrinsic social experiences — group challenges with leaderboards",
      },
      {
        number: "04",
        text: "Opt-in individual challenges geared towards health and wellness goals",
      },
      {
        number: "05",
        text: "Expanded reward types beyond points — badges, levels, and exclusive unlocks",
      },
    ],
    closing:
      "I left Well at the end of my co-op with a full research report, validated user flows, production-ready wireframes, and a documented future state roadmap — giving the team a clear path forward. The experience of taking a years-old idea from ambiguous brief to shippable MVP in a single term taught me that the most valuable thing a designer can do early in a project isn't to design at all — it's to ask the right questions until the problem is actually clear.",
  },
  skills: {
    blue: [
      "UX Research",
      "Gamification Design",
      "Journey Mapping",
      "Stakeholder Presentations",
      "Workshop Facilitation",
      "Wireframing",
    ],
    gray: ["Figma", "Jira"],
  },
  nav: {
    prev: { label: "AI Onboarding", href: "/work/copley/ai-onboarding" },
    next: { label: "Web Onboarding", href: "/work/well/web-onboarding" },
  },
};

// ─── Card token design system ───────────────────────────────────────────────
// Maps every card in the in-app challenges case study to a color + shape token.
// Import this alongside inAppChallengesContent to keep rendering decisions
// co-located with design data.

export const inAppChallengesCardTokens = {
  keyDecisions: [
    { color: "blue",  shape: "hexagon", spinDir: "spinr", spinDuration: 20 },
    { color: "green", shape: "diamond", spinDir: "spin",  spinDuration: 18 },
  ],
  hexad: {
    extrinsic: { color: "amber", shape: "diamond", spinDir: "spinr", spinDuration: 16 },
    intrinsic:  { color: "teal",  shape: "hexagon", spinDir: "spin",  spinDuration: 14 },
  },
  tracks: [
    { color: "violet", shape: "diamond", spinDir: "spinr", spinDuration: 22 },
    { color: "pink",   shape: "hexagon", spinDir: "spin",  spinDuration: 18 },
  ],
  futureStates: [
    { color: "blue", shape: "hexagon", spinDir: "spin",  spinDuration: 20 },
    { color: "blue", shape: "diamond", spinDir: "spinr", spinDuration: 16 },
    { color: "blue", shape: "triangle",spinDir: "spin",  spinDuration: 24 },
    { color: "blue", shape: "hexagon", spinDir: "spinr", spinDuration: 18 },
    { color: "blue", shape: "diamond", spinDir: "spin",  spinDuration: 14 },
  ],
};

export function getProject(companyId, projectId) {
  const company = companies.find((c) => c.id === companyId);
  if (!company) return null;
  const project = company.projects.find((p) => p.id === projectId);
  if (!project) return null;
  return { company, project };
}

export function getNextProject(companyId, projectId) {
  const allProjects = companies.flatMap((c) =>
    c.projects.map((p) => ({ companyId: c.id, ...p }))
  );
  const idx = allProjects.findIndex(
    (p) => p.companyId === companyId && p.id === projectId
  );
  if (idx === -1) return null;
  return allProjects[(idx + 1) % allProjects.length];
}
