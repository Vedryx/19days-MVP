import React from "react";
import { Gem, LineChart, LockKeyhole, Megaphone, ShieldCheck, UsersRound } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";
import { outcomes } from "../../data/index.js";

export default function Outcomes() {
  return (
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
                  {points.map((point) => (
                    <li key={point}><ShieldCheck size={15} /> {point}</li>
                  ))}
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
  );
}
