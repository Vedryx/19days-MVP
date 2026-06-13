// PostHog browser SDK init + named-event helpers. No-op when
// VITE_POSTHOG_KEY is unset so this is safe to ship before the project
// is provisioned. Once the key lands in Vercel env, the next deploy
// turns analytics on with no further code changes.
//
// Free tier budget: 1M events / month, 5K session recordings / month.
// We disable session recording by default to stay inside the cap; turn
// it on in the PostHog dashboard if needed.

let initialized = false
let posthogRef = null
let initPromise = null

async function ensureInit() {
  if (initialized) return posthogRef
  if (initPromise) return initPromise
  if (typeof window === 'undefined') return null

  initPromise = (async () => {
    const key = import.meta.env?.VITE_POSTHOG_KEY
    if (!key) {
      initialized = true
      return null
    }
    try {
      const mod = await import('posthog-js')
      const posthog = mod.default ?? mod
      posthog.init(key, {
        api_host: import.meta.env?.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: 'identified_only', // only create profiles after identify() — keeps anonymous events cheap
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: true,
        disable_session_recording: true,
        // The PostHog project's remote-config endpoint (/array/:key/config)
        // currently returns 404 on EU host — surfaces in Lighthouse
        // "errors-in-console" (best-practices). We don't use feature flags
        // or remote config yet, so disabling the decide/flags call is safe
        // and silences the console errors.
        advanced_disable_decide: true,
        advanced_disable_flags: true,
        advanced_disable_feature_flags: true,
        // Do not send sensitive form values via autocapture.
        // PostHog redacts inputs of type=password by default; this adds
        // a wider net for our callback form fields.
        mask_all_text: false,
        // Lightweight property allowlist for autocapture — strip any
        // inputs that look like email / phone before they leave the page.
        sanitize_properties(properties) {
          const PII_KEYS = ['email', 'phone', 'summary']
          for (const key of Object.keys(properties || {})) {
            if (PII_KEYS.some((p) => key.toLowerCase().includes(p))) {
              properties[key] = '[redacted]'
            }
          }
          return properties
        },
      })
      posthogRef = posthog
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('PostHog init failed', err)
    }
    initialized = true
    return posthogRef
  })()

  return initPromise
}

export async function initPostHog() {
  await ensureInit()
}

/**
 * Capture a named funnel event. Safe to call before init() resolves —
 * the call is awaited under the hood. No PII should ever go into props.
 */
export async function track(eventName, props = {}) {
  const posthog = await ensureInit()
  if (!posthog) return
  posthog.capture(eventName, props)
}
