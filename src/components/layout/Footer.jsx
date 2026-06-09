import React from "react";
import Logo from "../../Logo.jsx";
import ScrollReveal from "../../ScrollReveal.jsx";

export default function Footer() {
  return (
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
  );
}
