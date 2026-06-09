import React, { useEffect, useState } from "react";
import { ArrowRight, BadgeCheck, ChevronDown, X } from "lucide-react";
import Button from "../ui/Button.jsx";
import { buildTypes } from "../../data/index.js";

export default function CallbackModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      setSubmitting(false);
      setError("");
    }
  }, [open]);

  if (!open) return null;

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setError("");
    setSubmitting(true);

    try {
      const response = await fetch("/api/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to submit the request right now.");
      }

      form.reset();
      setSubmitted(true);
    } catch (submitError) {
      setError(submitError.message);
      setSubmitted(false);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="callback-modal" role="presentation" onClick={onClose}>
      <div
        className="callback-modal-panel glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="callback-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="callback-modal-close" type="button" aria-label="Close form" onClick={onClose}>
          <X size={18} />
        </button>

        {submitted ? (
          <div className="callback-success">
            <BadgeCheck size={42} />
            <h3 id="callback-title">Request received</h3>
            <p>We&apos;ll review your idea and reach out by phone or email within one business day.</p>
            <Button variant="primary" onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <div className="callback-modal-head">
              <h3 id="callback-title">Launch callback</h3>
              <p>Vedryx may contact you by phone or email after reviewing your requirement.</p>
            </div>
            <form className="callback-form" onSubmit={handleSubmit}>
              <label className="callback-field callback-field--trap" aria-hidden="true">
                <span>Website</span>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
              <div className="callback-form-grid">
                <label className="callback-field">
                  <span>Work email</span>
                  <input type="email" name="email" required placeholder="you@company.com" />
                </label>
                <label className="callback-field">
                  <span>Phone number</span>
                  <input type="tel" name="phone" required placeholder="+91 9876543210" />
                </label>
                <label className="callback-field">
                  <span>Company name</span>
                  <input type="text" name="company" required placeholder="Your company or project name" />
                </label>
                <label className="callback-field">
                  <span>Build type</span>
                  <div className="callback-select-wrap">
                    <select name="buildType" required defaultValue="">
                      <option value="" disabled>Select what you want to launch</option>
                      {buildTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <ChevronDown size={16} aria-hidden="true" />
                  </div>
                </label>
              </div>
              <label className="callback-field callback-field--full">
                <span>Requirement summary</span>
                <textarea
                  name="summary"
                  required
                  rows={5}
                  placeholder="Tell us about your idea, target users, and launch goals..."
                />
                <em>Include your idea, target users, timeline, and what the first launch should prove.</em>
              </label>
              <Button variant="primary" type="submit" disabled={submitting}>
                {submitting ? "Submitting..." : <><ArrowRight size={16} /> Request callback</>}
              </Button>
              {error && <p className="callback-form-error" role="alert">{error}</p>}
            </form>
          </>
        )}
      </div>
    </div>
  );
}
