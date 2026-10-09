export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="lg-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8a4dff" />
          <stop offset="1" stopColor="#ff4d6d" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#lg-bg)" />
      {/* pencil nib forming the "junction" */}
      <path d="M14 33 L24 13 L34 33 Z" fill="#ffe066" />
      <path d="M24 13 L34 33 L28.5 33 Z" fill="#ffd23f" />
      <circle cx="24" cy="33" r="4.5" fill="#fffaf3" />
      <circle cx="24" cy="33" r="2" fill="#00c49a" />
    </svg>
  );
}
