import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeCheck,
  Blocks,
  Bolt,
  Bot,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleDot,
  Gem,
  Layers3,
  LineChart,
  LockKeyhole,
  Megaphone,
  MessageSquareQuote,
  Rocket,
  ShieldCheck,
  Sparkles,
  TabletSmartphone,
  Target,
  TrendingUp,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import Logo from "./Logo.jsx";
import HeroBackground from "./HeroBackground.jsx";
import ScrollReveal from "./ScrollReveal.jsx";
import "./styles.css";
import "./animations.css";

const phases = [
  { label: "Idea", icon: CircleDot },
  { label: "Plan", icon: Blocks },
  { label: "Design", icon: Sparkles },
  { label: "Build", icon: Layers3 },
  { label: "Launch", icon: Rocket, active: true },
];

const timeline = [
  {
    day: "Days 1–4",
    title: "Strategy & Design",
    phaseOne: true,
    detail:
      "We run discovery to capture your vision, build the strategic roadmap, and design world-class UX/UI around your brand—so scope, priorities, and launch direction are locked before engineering starts.",
  },
  { day: "Days 5–15", title: "Core Engineering", detail: "Infrastructure and product build with elite precision and speed.", active: true },
  { day: "Day 16-17", title: "Refinement", detail: "QA, polish, and conversion tuning." },
  { day: "Day 18", title: "Final Review", detail: "Founder handoff and launch approval." },
  { day: "Day 19", title: "Launch Day", detail: "Market entry with full deployment support.", success: true },
];

const whyCards = [
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

const outcomes = [
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

const faqs = [
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

const buildTypes = [
  "SaaS Platform",
  "Mobile App",
  "AI-Native Product",
  "Digital Marketplace",
  "Not sure yet",
];

function Button({ children, variant = "primary", href, onClick, type = "button" }) {
  const className = `button ${variant}`;
  const useButton = Boolean(onClick) || type === "submit";

  if (useButton) {
    return (
      <button className={className} type={type} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <a className={className} href={href ?? "#launch"}>
      {children}
    </a>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  return (
    <div className="section-header">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function GlassCard({ children, className = "" }) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

function CallbackModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
    }
  }, [open]);

  if (!open) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="callback-modal" role="presentation" onClick={onClose}>
      <div
        className="callback-modal-panel glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="callback-modal-close" type="button" aria-label="Close form" onClick={onClose}>
          <X size={18} />
        </button>

        {submitted ? (
          <div className="callback-success">
            <BadgeCheck size={42} />
            <h3 id="callback-title">Request received</h3>
            <p>We&apos;ll review your idea and reach out by phone or email within one business day.</p>
            <Button variant="primary" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className="callback-modal-head">
              <h3 id="callback-title">Launch callback</h3>
              <p>Vedryx may contact you by phone or email after reviewing your requirement.</p>
            </div>
            <form className="callback-form" onSubmit={handleSubmit}>
              <div className="callback-form-grid">
                <label className="callback-field">
                  <span>Work email</span>
                  <input type="email" name="email" required placeholder="you@company.com" />
                </label>
                <label className="callback-field">
                  <span>Phone number</span>
                  <input type="tel" name="phone" required placeholder="+91 9876543210" />
                </label>
                <label className="callback-field">
                  <span>Company name</span>
                  <input type="text" name="company" required placeholder="Your company or project name" />
                </label>
                <label className="callback-field">
                  <span>Build type</span>
                  <div className="callback-select-wrap">
                    <select name="buildType" required defaultValue="">
                      <option value="" disabled>Select what you want to launch</option>
                      {buildTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} aria-hidden="true" />
                  </div>
                </label>
              </div>
              <label className="callback-field callback-field--full">
                <span>Requirement summary</span>
                <textarea
                  name="summary"
                  required
                  rows={5}
                  placeholder="Tell us about your idea, target users, and launch goals..."
                />
                <em>Include your idea, target users, timeline, and what the first launch should prove.</em>
              </label>
              <Button variant="primary" type="submit">
                Request callback <ArrowRight size={16} />
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [callbackOpen, setCallbackOpen] = useState(false);
  return (
    <main>
      <nav className="topbar" aria-label="Primary navigation">
        <Logo />
        <div className="nav-links">
          <a href="#process">Process</a>
          <a href="#services">Services</a>
          <a href="#success">Success</a>
          <a href="#faq">FAQ</a>
        </div>
        <Button href="#launch">Launch My Idea</Button>
      </nav>

      <section className="hero" id="top">
        <HeroBackground />
        <div className="hero-inner">
          <span className="hero-pill"><Sparkles size={14} /> Business Launch Infrastructure</span>
          <h1>Turn Your Idea Into A Real Business In Just 19 Days</h1>
          <p>
            We take your concept from a raw thought to a market-ready product with users.
            No technical knowledge required. We handle everything.
          </p>
          <div className="hero-actions">
            <Button><Rocket size={16} /> Launch My Idea</Button>
            <Button variant="secondary" href="#process">See How It Works</Button>
          </div>
          <div className="phase-track" aria-label="Launch phases">
            {phases.map(({ label, icon: Icon, active }, index) => (
              <div
                className={`phase ${active ? "active" : ""}`}
                key={label}
                style={{ animationDelay: `${0.72 + index * 0.08}s` }}
              >
                <span><Icon size={20} /></span>
                <strong>{label}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="protocol band" id="process">
        <ScrollReveal>
          <SectionHeader
            title="The 19-Day Execution Protocol"
            text="A relentless, high-velocity roadmap from concept to market dominance."
          />
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <div className="phase-labels">
            <span>Phase 01</span>
            <span>Phase 02</span>
            <span>Phase 03</span>
          </div>
        </ScrollReveal>
        <div className="timeline-grid">
          {timeline.map((item, index) => (
            <ScrollReveal
              key={`${item.day}-${item.title}`}
              delay={index * 90}
              direction="scale"
              className={[
                item.phaseOne && "phase-one",
                item.tall && "tall",
                item.active && "current",
                item.success && "success",
                "timeline-item",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <GlassCard>
                <span>{item.day}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                {item.tall && <CircleDot className="corner-mark" size={18} />}
                {item.active && (
                  <div className="progress">
                    <span />
                    <strong>65%</strong>
                  </div>
                )}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={120}>
          <GlassCard className="founder-note">
          <MessageSquareQuote size={26} />
          <div>
            <h3>Strategic Phasing - The Founder's Note</h3>
            <p>
              For most applications, we focus on a launch-ready scope that gets you to business in 19 days.
              We eliminate unnecessary complexity for the initial launch, and then cover the remaining scope
              in subsequent phases once your business is live.
            </p>
            <div className="mini-metrics">
              <span><Check size={14} /> Eliminate Complexity</span>
              <span><Check size={14} /> Revenue-First Launch</span>
              <span><Check size={14} /> Iterative Growth</span>
            </div>
          </div>
        </GlassCard>
        </ScrollReveal>
      </section>

      <section className="why" id="success">
        <ScrollReveal>
          <SectionHeader
            title="Why Vedryx?"
            text="The traditional way of building a business is broken. We've fixed it."
          />
        </ScrollReveal>
        <div className="three-grid">
          {whyCards.map(({ icon: Icon, title, text }, index) => (
            <ScrollReveal key={title} delay={index * 100} direction="up" className="grid-item">
              <GlassCard>
                <Icon className="card-icon" size={28} />
                <h3>{title}</h3>
                <p>{text}</p>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="comparison">
        <ScrollReveal direction="right" className="comparison-copy">
          <h2>Why 19 Days?</h2>
          <p>
            Speed isn't just a metric; it's a competitive advantage. In the time it takes an agency
            to onboard you, we've already launched your first customers.
          </p>
          <GlassCard className="signal">
            <TrendingUp size={22} />
            <div>
              <h3>Momentum Protection</h3>
              <p>Ideas die in long development cycles. We ship while your passion is still its peak.</p>
            </div>
          </GlassCard>
          <GlassCard className="signal">
            <UsersRound size={22} />
            <div>
              <h3>Market Feedback</h3>
              <p>The faster you launch, the faster you learn what your customers actually want.</p>
            </div>
          </GlassCard>
        </ScrollReveal>
        <ScrollReveal direction="left" delay={120} className="animate-bars">
          <GlassCard className="score-card">
          <div className="compare-row">
            <div className="compare-row-top">
              <div className="compare-label">
                <span>Traditional Agency</span>
                <em className="status-risk">Status: Risky</em>
              </div>
              <span className="compare-time">6 – 8 Months</span>
            </div>
            <div className="compare-bar compare-bar--thin">
              <span style={{ "--bar-width": "6%" }} />
            </div>
          </div>
          <div className="compare-row">
            <div className="compare-row-top">
              <div className="compare-label">
                <span>Freelance Team</span>
                <em className="status-warn">Status: Unpredictable</em>
              </div>
              <span className="compare-time">3 – 4 Months</span>
            </div>
            <div className="compare-bar compare-bar--thin">
              <span style={{ "--bar-width": "40%" }} />
            </div>
          </div>
          <div className="vedryx-compare">
            <div className="vedryx-compare-head">
              <div className="compare-label">
                <span className="vedryx-name">VEDRYX</span>
                <em className="status-ready">
                  <i aria-hidden="true" />
                  Status: Market Ready
                </em>
              </div>
              <div className="vedryx-compare-meta">
                <strong>19 Days</strong>
                <span className="compare-badge">Industry Fastest</span>
              </div>
            </div>
            <div className="compare-bar compare-bar--thick">
              <span style={{ "--bar-width": "15%" }} />
            </div>
            <p className="compare-savings">Save 5+ Months of Development Time</p>
          </div>
          <blockquote className="compare-quote">
            <MessageSquareQuote size={28} aria-hidden="true" />
            <div>
              <p>Speed is the only thing that matters in the early stages.</p>
              <cite>The founder&apos;s rule</cite>
            </div>
          </blockquote>
          </GlassCard>
        </ScrollReveal>
      </section>

      <section className="outcomes band" id="services">
        <ScrollReveal>
          <SectionHeader title="What We Can Build: Focused On Outcomes." />
        </ScrollReveal>
        <div className="bento-grid">
          {outcomes.map(({ title, text, points, icon: Icon, status, className }, index) => (
            <ScrollReveal
              key={title}
              delay={index * 90}
              direction="scale"
              className={`outcome-item ${className || ""}`.trim()}
            >
              <GlassCard className={`outcome ${className || ""}`.trim()}>
              <h3>{title}</h3>
              <p>{text}</p>
              {points && (
                <ul>
                  {points.map((point) => <li key={point}><ShieldCheck size={15} /> {point}</li>)}
                </ul>
              )}
              {Icon && <Icon className="outcome-graphic" size={58} />}
              {status && <div className="status-bar"><span>{status}</span><i /></div>}
              {title === "Digital Marketplaces" && (
                <div className="market-icons">
                  <span><Megaphone size={22} /></span>
                  <span><Gem size={22} /></span>
                  <span><UsersRound size={22} /></span>
                  <span><LockKeyhole size={22} /></span>
                </div>
              )}
              {title === "SaaS Platforms" && <LineChart className="chart-art" size={150} />}
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <ScrollReveal>
          <SectionHeader title="Frequently Asked Questions" />
        </ScrollReveal>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <ScrollReveal key={item.q} delay={index * 80}>
              <details open={index === 0}>
                <summary>{item.q}<ChevronDown size={18} /></summary>
                <p>{item.a}</p>
              </details>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="launch" id="launch">
        <ScrollReveal direction="scale">
          <div className="launch-panel">
          <h2>You Bring The Idea.<br />We'll Launch It In 19 Days.</h2>
          <p>Stop dreaming and start transacting. Your future business is exactly 19 days away. Are you ready to begin?</p>
          <Button variant="light" onClick={() => setCallbackOpen(true)}>
            <CalendarCheck size={16} /> Start Your 19-Day Clock
          </Button>
          <span>Only 1 spot left for this month. Secure your launch date now before we're fully booked.</span>
          </div>
        </ScrollReveal>
      </section>

      <ScrollReveal>
        <footer className="site-footer">
        <div className="site-footer-inner">
          <Logo className="site-footer-logo" />
          <p className="site-footer-copy">© 2026 Vedryx. Built for the ambitious.</p>
          <nav className="site-footer-links" aria-label="Footer">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </footer>
      </ScrollReveal>

      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
