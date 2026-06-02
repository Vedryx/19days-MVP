export function LogoMark({ className = "", title = "Vedryx" }) {
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
      <defs>
        <linearGradient id="vedryx-mark-gradient" x1="6" y1="30" x2="30" y2="6" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6d5ef7" />
          <stop offset="1" stopColor="#00d2fd" />
        </linearGradient>
        <linearGradient id="vedryx-mark-glow" x1="18" y1="4" x2="18" y2="14" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#a2e7ff" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect
        x="1.5"
        y="1.5"
        width="33"
        height="33"
        rx="10"
        fill="url(#vedryx-mark-gradient)"
        fillOpacity="0.14"
      />
      <rect
        x="1.5"
        y="1.5"
        width="33"
        height="33"
        rx="10"
        stroke="url(#vedryx-mark-gradient)"
        strokeOpacity="0.55"
        strokeWidth="1.5"
      />
      <path
        d="M9.5 25.5L18 10.5L26.5 25.5H22.4L18 16.8L13.6 25.5H9.5Z"
        fill="url(#vedryx-mark-gradient)"
      />
      <path
        d="M16.2 9.6L18 7.2L19.8 9.6"
        stroke="url(#vedryx-mark-glow)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="18" cy="6.8" r="2.1" fill="#00d2fd" />
      <circle cx="18" cy="6.8" r="4.2" fill="#00d2fd" fillOpacity="0.18" />
    </svg>
  );
}

export default function Logo({ className = "", href = "#top", showWordmark = true }) {
  return (
    <a className={`logo ${className}`.trim()} href={href} aria-label="Vedryx home">
      <LogoMark className="logo-mark" />
      {showWordmark ? <span className="logo-wordmark">Vedryx</span> : null}
    </a>
  );
}
