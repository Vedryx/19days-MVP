import React from "react";
import { MessageSquareQuote, TrendingUp, UsersRound } from "lucide-react";
import GlassCard from "../ui/GlassCard.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";

export default function Comparison() {
  return (
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
  );
}
