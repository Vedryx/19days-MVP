import React, { useState } from "react";
import Nav from "./components/layout/Nav.jsx";
import Footer from "./components/layout/Footer.jsx";
import Hero from "./components/sections/Hero.jsx";
import Protocol from "./components/sections/Protocol.jsx";
import Why from "./components/sections/Why.jsx";
import Comparison from "./components/sections/Comparison.jsx";
import Outcomes from "./components/sections/Outcomes.jsx";
import Faq from "./components/sections/Faq.jsx";
import Launch from "./components/sections/Launch.jsx";
import CallbackModal from "./components/modals/CallbackModal.jsx";
import { track } from "./lib/posthog.js";
import "./styles.css";
import "./animations.css";

export default function App() {
  const [callbackOpen, setCallbackOpen] = useState(false);
  const openCallback = (source = "unknown") => {
    track("cta_book_click", { site: "vedryx-pulse-web", source });
    setCallbackOpen(true);
  };

  return (
    <main>
      <Nav onLaunchClick={() => openCallback("nav")} />
      <Hero onLaunchClick={() => openCallback("hero")} />
      <Protocol />
      <Why />
      <Comparison />
      <Outcomes />
      <Faq />
      <Launch onLaunchClick={() => openCallback("launch_section")} />
      <Footer />
      <CallbackModal open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </main>
  );
}
