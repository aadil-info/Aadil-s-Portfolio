import React from "react";

/**
 * Logo — Gradient rounded square with "Aa" + "Aadil" wordmark
 */
export default function Logo({ size = 36, className = "" }) {
  return (
    <div
      className={`select-none flex items-center gap-2.5 flex-shrink-0 ${className}`}
      aria-label="Aadil Logo"
    >
      {/* Gradient square mark with "Aa" */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id="logo-bg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#6D3FEF" />
            <stop offset="100%" stopColor="#9B6DFF" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="11" fill="url(#logo-bg)" />
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="17"
          fontWeight="700"
          fill="white"
          letterSpacing="-0.5"
        >
          Aa&hearts;
        </text>
      </svg>

      {/* Wordmark */}
      <span
        className="font-bold text-[#111111] tracking-tight"
        style={{ fontSize: "16px", letterSpacing: "-0.03em" }}
      >
    
      </span>
    </div>
  );
}
