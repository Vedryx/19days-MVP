import React from "react";

const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
  "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
  "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
  "M-345 -229C-345 -229 -277 176 187 303C651 430 719 835 719 835",
];

export default function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <svg className="hero-background-svg" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="hero-path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6d5ef7" stopOpacity="0" />
            <stop offset="50%" stopColor="#6d5ef7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#00d2fd" stopOpacity="0" />
          </linearGradient>
        </defs>
        {paths.map((path, index) => (
          <path
            key={path}
            d={path}
            className="hero-background-path"
            style={{ "--path-delay": `${index * 0.35}s` }}
            stroke="url(#hero-path-gradient)"
            strokeWidth="1.2"
            fill="none"
          />
        ))}
      </svg>
      <div className="hero-orb hero-orb--one" />
      <div className="hero-orb hero-orb--two" />
      <div className="hero-orb hero-orb--three" />
    </div>
  );
}
