export default function Swash({
  children,
  color = "#ff4d6d",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="swash">
      {children}
      <svg viewBox="0 0 120 12" preserveAspectRatio="none" aria-hidden="true">
        <path
          d="M2 9 Q 30 2 60 7 T 118 5"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
