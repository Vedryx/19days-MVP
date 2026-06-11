import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initSentry } from "./lib/sentry.js";
import { initPostHog, track } from "./lib/posthog.js";

// Fire-and-forget. No-op when VITE_SENTRY_DSN is unset.
initSentry();

// Fire-and-forget. No-op when VITE_POSTHOG_KEY is unset.
initPostHog().then(() => {
  // Funnel start: page reached the landing entrypoint.
  track("landing_view", { site: "vedryx-pulse-web" });
});

createRoot(document.getElementById("root")).render(<App />);
