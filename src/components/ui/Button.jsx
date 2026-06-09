import React from "react";

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
}) {
  const className = `button ${variant}`;
  const useButton = Boolean(onClick) || type === "submit";

  if (useButton) {
    return (
      <button className={className} type={type} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    );
  }

  return (
    <a className={className} href={href ?? "#launch"}>
      {children}
    </a>
  );
}
