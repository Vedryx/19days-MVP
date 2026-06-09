import React from "react";
import { Check, CircleDot, MessageSquareQuote } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";
import { timeline } from "../../data/index.js";

export default function Protocol() {
  return (
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
  );
}
