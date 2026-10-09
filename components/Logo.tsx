export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <rect x="2" y="2" width="44" height="44" rx="13" fill="#1e1b4b" />
      {/* pencil nib forming the "junction" */}
      <path d="M14 33 L24 13 L34 33 Z" fill="#ff6b5e" />
      <path d="M24 13 L34 33 L28.5 33 Z" fill="#f59e0b" />
      <circle cx="24" cy="33" r="4.5" fill="#fffdf7" />
      <circle cx="24" cy="33" r="2" fill="#0d9488" />
    </svg>
  );
}
