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
  return (
    <a className={`logo ${className}`.trim()} href={href} aria-label="Vedryx Pulse home">
      <LogoMark className="logo-mark" />
      {showWordmark ? (
        <span className="logo-wordmark">
          Vedryx <span className="logo-wordmark-suffix">Pulse</span>
        </span>
      ) : null}
    </a>
  );
}
