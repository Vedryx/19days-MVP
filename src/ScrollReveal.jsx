import React, { useEffect, useRef, useState } from "react";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  as: Tag = "div",
  immediate = false,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      return undefined;
    }

    const node = ref.current;
    if (!node) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [immediate]);

  return (
    <Tag
      ref={ref}
      className={[
        "scroll-reveal",
        `scroll-reveal--${direction}`,
        visible && "is-visible",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
