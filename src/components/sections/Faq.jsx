import React from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "../ui/SectionHeader.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";
import { faqs } from "../../data/index.js";

export default function Faq() {
  return (
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
  );
}
