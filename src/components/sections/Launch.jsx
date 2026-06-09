import React from "react";
import { CalendarCheck } from "lucide-react";
import Button from "../ui/Button.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";

export default function Launch({ onLaunchClick }) {
  return (
    <section className="launch" id="launch">
      <ScrollReveal direction="scale">
        <div className="launch-panel">
          <h2>You Bring The Idea.<br />We'll Launch It In 19 Days.</h2>
          <p>Stop dreaming and start transacting. Your future business is exactly 19 days away. Are you ready to begin?</p>
          <Button variant="light" onClick={onLaunchClick}>
            <CalendarCheck size={16} /> Start Your 19-Day Clock
          </Button>
          <span>Only 1 spot left for this month. Secure your launch date now before we're fully booked.</span>
        </div>
      </ScrollReveal>
    </section>
  );
}
