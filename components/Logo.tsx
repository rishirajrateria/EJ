// A blue exercise book with ruled lines and a margin; the "j" of Junction
// is written on it, and its dot is an abacus bead.
export default function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="1" y="1" width="38" height="38" rx="8" fill="#2f5bff" />
      <path d="M1 14h38M1 30h38" stroke="#fff" strokeOpacity=".28" strokeWidth="1.5" />
      <path d="M1 22h38" stroke="#fff" strokeOpacity=".28" strokeWidth="1.5" strokeDasharray="2.5 2.5" />
      <path d="M9 1v38" stroke="#ff7aa5" strokeWidth="2" />
      <path
        d="M24 16.5v12.5c0 4.6-2.7 6.6-6 6.6-2.1 0-3.7-.8-4.7-2.3"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path d="M19.2 9.5 L21.2 6.4 H26.8 L28.8 9.5 L26.8 12.6 H21.2 Z" fill="#ffd43b" />
    </svg>
  );
}
