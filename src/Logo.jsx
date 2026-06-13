export function LogoMark({ className = "", title = "Vedryx Pulse" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M22 46 L62 142 L106 30"
        stroke="#4E99F0"
        strokeWidth="16"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3.02 -2.15) scale(0.2344)"
      />
    </svg>
  );
}

export default function Logo({ className = "", href = "#top", showWordmark = true }) {
  // a11y: the visible wordmark reads "Vedryx Pulse" while the previous
  // aria-label said "Vedryx Pulse home". Lighthouse "label-content-name-mismatch"
  // requires the accessible name to start with the visible text. Drop the
  // aria-label and let the rendered text be the name when wordmark is shown.
  // When the wordmark is hidden, fall back to an aria-label that matches the
  // SVG's <title> so screen-readers still get a meaningful name.
  const accessibleNameProps = showWordmark
    ? {}
    : { "aria-label": "Vedryx Pulse" };
  return (
    <a className={`logo ${className}`.trim()} href={href} {...accessibleNameProps}>
      <LogoMark className="logo-mark" title={showWordmark ? "" : "Vedryx Pulse"} />
      {showWordmark ? (
        <span className="logo-wordmark">
          Vedryx <span className="logo-wordmark-suffix">Pulse</span>
        </span>
      ) : null}
    </a>
  );
}
