import {
  Blocks,
  CircleDot,
  Layers3,
  Rocket,
  Sparkles,
  Target,
  Bot,
  Bolt,
  TabletSmartphone,
} from "lucide-react";

export const phases = [
  { label: "Idea", icon: CircleDot },
  { label: "Plan", icon: Blocks },
  { label: "Design", icon: Sparkles },
  { label: "Build", icon: Layers3 },
  { label: "Launch", icon: Rocket, active: true },
];

export const timeline = [
  {
    day: "Days 1–4",
    title: "Strategy & Design",
    phaseOne: true,
    detail:
      "We run discovery to capture your vision, build the strategic roadmap, and design world-class UX/UI around your brand—so scope, priorities, and launch direction are locked before engineering starts.",
  },
  {
    day: "Days 5–15",
    title: "Core Engineering",
    detail: "Infrastructure and product build with elite precision and speed.",
    active: true,
  },
  { day: "Day 16-17", title: "Refinement", detail: "QA, polish, and conversion tuning." },
  { day: "Day 18", title: "Final Review", detail: "Founder handoff and launch approval." },
  {
    day: "Day 19",
    title: "Launch Day",
    detail: "Market entry with full deployment support.",
    success: true,
  },
];

export const whyCards = [
  {
    icon: Target,
    title: "Outcome-First Engineering",
    text: "Instead of talking about tech stacks, we focus on your business goals. Our systems are built for speed and market readiness from day one.",
  },
  {
    icon: Bot,
    title: "Zero Technical Friction",
    text: "You don't need a CTO or dev team. We act as your entire technical department, handling everything from infrastructure to deployment.",
  },
  {
    icon: Bolt,
    title: "The 19-Day Advantage",
    text: "Most agencies take months. We launch in 19 days. This speed preserves your momentum and lets you test your idea with real users while the market is still fresh.",
  },
];

export const outcomes = [
  {
    title: "SaaS Platforms",
    text: "Engineered for high-volume transactions and enterprise-grade performance. We build the backbone of your recurring revenue.",
    points: ["Scalable Cloud Infrastructure", "Multi-tenant Architecture", "Robust Security Protocols"],
    className: "wide",
  },
  {
    title: "Mobile Apps",
    text: "Seamless iOS and Android experiences that turn casual users into loyal brand advocates.",
    icon: TabletSmartphone,
  },
  {
    title: "AI-Native Products",
    text: "Leveraging large language models to automate complex workflows and create unique competitive advantages.",
    status: "AI CORE ACTIVE",
  },
  {
    title: "Digital Marketplaces",
    text: "Multi-sided platforms designed for trust, security, and friction-less conversion between buyers and sellers.",
    className: "market",
  },
];

export const faqs = [
  {
    q: "Do I need any technical knowledge?",
    a: "Absolutely not. Our entire model is built for visionary founders who want to focus on business growth, not debugging code. We handle all infrastructure, development, and deployment.",
  },
  {
    q: "What happens after Day 19?",
    a: "You leave with a live product, launch assets, and a clear operating plan. Ongoing iteration and growth support can continue after launch.",
  },
  {
    q: "Can you really build a complex app in 19 days?",
    a: "Yes, when scope is ruthless and execution is senior-led. We focus the first release on the market proof that matters most.",
  },
];

export const buildTypes = [
  "SaaS Platform",
  "Mobile App",
  "AI-Native Product",
  "Digital Marketplace",
  "Not sure yet",
];
