import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { initSentry } from "./lib/sentry.js";

// Fire-and-forget. No-op when VITE_SENTRY_DSN is unset.
initSentry();

createRoot(document.getElementById("root")).render(<App />);
