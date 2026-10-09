// Wavy section divider. `fill` is the color of the section BELOW the wave;
// place it at the end of the section above (which shows through the gaps).
export default function Wave({
  fill,
  flip = false,
}: {
  fill: string;
  flip?: boolean;
}) {
  return (
    <div aria-hidden="true" className={flip ? "rotate-180" : ""}>
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="block h-10 w-full sm:h-14"
      >
        <path
          d="M0 28 C 120 56 240 56 360 34 C 480 12 600 0 720 14 C 840 28 960 56 1080 52 C 1200 48 1320 20 1440 24 L 1440 56 L 0 56 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
