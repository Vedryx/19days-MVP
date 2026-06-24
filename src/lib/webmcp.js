const CALLBACK_ENDPOINT = "/api/callback";

function clean(value) {
  return typeof value === "string" ? value.trim() : "";
}

async function requestCallback(input = {}) {
  const buildType = clean(input.buildType) || clean(input.role);
  const payload = {
    email: clean(input.email).toLowerCase(),
    phone: clean(input.phone),
    company: clean(input.company),
    role: buildType,
    buildType,
    summary: clean(input.summary),
    website: clean(input.website),
  };

  const response = await fetch(CALLBACK_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await response.json().catch(() => ({}));

  if (!response.ok || body.ok === false) {
    throw new Error(body.message || "Unable to submit the callback request.");
  }

  return body?.ok === true ? body : { ok: true };
}

export function registerWebMcpTools() {
  if (typeof window === "undefined" || typeof navigator === "undefined") return;

  const modelContext = navigator.modelContext;
  if (!modelContext || typeof modelContext.provideContext !== "function") return;
  if (window.__vedryxPulseWebMcpRegistered) return;

  window.__vedryxPulseWebMcpRegistered = true;

  try {
    modelContext.provideContext({
      tools: [
        {
          name: "request_callback",
          description:
            "Request a Vedryx Pulse callback for a founder who wants to launch a product in 19 days.",
          inputSchema: {
            type: "object",
            additionalProperties: false,
            required: ["email", "phone", "summary"],
            anyOf: [{ required: ["buildType"] }, { required: ["role"] }],
            properties: {
              email: {
                type: "string",
                format: "email",
                description: "Work email for the founder or project owner.",
              },
              phone: {
                type: "string",
                description: "Phone number for the callback.",
              },
              company: {
                type: "string",
                description: "Company or product name, if available.",
              },
              buildType: {
                type: "string",
                description: "Product type, such as SaaS, mobile app, AI-native product, or marketplace.",
              },
              role: {
                type: "string",
                description: "Alternative field for product type or founder requirement.",
              },
              summary: {
                type: "string",
                description: "Brief product idea, launch goal, or project context.",
              },
              website: {
                type: "string",
                description: "Leave blank. Honeypot field for spam prevention.",
              },
            },
          },
          execute: requestCallback,
        },
      ],
    });
  } catch (error) {
    window.__vedryxPulseWebMcpRegistered = false;
    console.warn("WebMCP registration failed", error);
  }
}
