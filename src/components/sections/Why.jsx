import React from "react";
import GlassCard from "../ui/GlassCard.jsx";
import SectionHeader from "../ui/SectionHeader.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";
import { whyCards } from "../../data/index.js";

export default function Why() {
  return (
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
  );
}
