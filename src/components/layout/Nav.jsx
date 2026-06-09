import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../../Logo.jsx";
import Button from "../ui/Button.jsx";

const links = [
  { href: "#process", label: "Process" },
  { href: "#services", label: "Services" },
  { href: "#success", label: "Success" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav({ onLaunchClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav className="topbar" aria-label="Primary navigation">
        <Logo />
        <div className="nav-links">
          {links.map(({ href, label }) => (
            <a key={href} href={href}>{label}</a>
          ))}
        </div>
        <Button href="#launch" onClick={onLaunchClick}>Launch My Idea</Button>
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)} />
          <nav className="mobile-menu-panel">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="mobile-menu-link" onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <Button
              href="#launch"
              onClick={() => { setMenuOpen(false); onLaunchClick?.(); }}
            >
              Launch My Idea
            </Button>
          </nav>
        </div>
      )}
    </>
  );
}
