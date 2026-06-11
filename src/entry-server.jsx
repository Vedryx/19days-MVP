import React, { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

/**
 * SSR entry for Vedryx Pulse.
 *
 * Pulse has no client-side router (single landing page), so we just render
 * the App component directly. If we add additional routes later, port the
 * StaticRouter pattern from `vedryx-contract-FE/src/entry-server.jsx`.
 */
export function render(_url = "/") {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
