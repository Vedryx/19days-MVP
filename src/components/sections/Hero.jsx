import React from "react";
import { Rocket, Sparkles } from "lucide-react";
import HeroBackground from "../../HeroBackground.jsx";
import Button from "../ui/Button.jsx";
import { phases } from "../../data/index.js";

export default function Hero({ onLaunchClick }) {
  return (
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
          <Button onClick={onLaunchClick}><Rocket size={16} /> Launch My Idea</Button>
          <Button variant="secondary" href="#process">See How It Works</Button>
        </div>
        <div className="phase-track" aria-label="Launch phases">
          {phases.map(({ label, icon: Icon, active }, index) => (
            <div
              key={label}
              className={`phase ${active ? "active" : ""}`}
              style={{ animationDelay: `${0.72 + index * 0.08}s` }}
            >
              <span><Icon size={20} /></span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
