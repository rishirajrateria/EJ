import { Tick } from "./Marks";

// A four-rod soroban. Markup is complete on the server; /junction.js makes
// the beads tappable and runs the "make this number" challenge.

const places = [1000, 100, 10, 1] as const;
const placeShort = { 1000: "Th", 100: "H", 10: "T", 1: "O" } as const;
const placeName = { 1000: "Thousands", 100: "Hundreds", 10: "Tens", 1: "Ones" } as const;
const beadColor = { 1000: "#7b4dff", 100: "#ff4f8b", 10: "#12b886", 1: "#2f5bff" } as const;

// Must match --bead-h in globals.css
const BEAD = 30;
const PAD = 8;
const HEAVEN = 2 * BEAD;
const BEAM = 10;
const EARTH_TOP = PAD + HEAVEN + BEAM;
const HEIGHT = EARTH_TOP + 5 * BEAD + PAD;

export default function Abacus({
  initial = 336,
  targets = [25, 7, 99, 360, 1234],
}: {
  initial?: number;
  targets?: number[];
}) {
  const digits = places.map((p) => Math.floor(initial / p) % 10);

  return (
    <div
      data-abacus
      data-target={targets[0]}
      data-targets={targets.join(",")}
      data-solved={String(initial === targets[0])}
      className="abacus w-full max-w-[400px]"
    >
      <div className="mb-4 flex min-h-[60px] items-center justify-between gap-3 rounded-xl border-2 border-ink bg-white px-4 py-2 shadow-[0_4px_0_#16205c]">
        <p className="abacus-unsolved font-bold text-ink">
          Can you make{" "}
          <span data-abacus-target className="font-display text-2xl font-extrabold text-pink-deep tabular-nums">
            {targets[0]}
          </span>
          ?
        </p>
        <button type="button" data-abacus-clear className="abacus-unsolved text-sm font-bold text-ink-soft underline decoration-2 underline-offset-4 hover:text-ink">
          Clear
        </button>
        <p className="abacus-solved items-center gap-1 font-hand text-lg font-bold text-redpen" role="status">
          <Tick className="h-7 w-7" /> Excellent!
        </p>
        <button type="button" data-abacus-next className="abacus-solved btn btn-yellow !px-3 !py-1.5 text-sm">
          Next number →
        </button>
      </div>

      <div className="rounded-2xl bg-ink p-3 shadow-[0_10px_0_-2px_rgb(22_32_92/0.22)]">
        <div className="relative grid grid-cols-4 rounded-lg bg-[#eef3ff] px-1" style={{ height: HEIGHT }}>
          {/* reckoning bar */}
          <div className="absolute inset-x-0 z-10 bg-ink" style={{ top: PAD + HEAVEN, height: BEAM }} aria-hidden="true" />
          {places.map((place, idx) => {
            const d = digits[idx];
            const heavenOn = d >= 5;
            const earthOn = d % 5;
            return (
              <div
                key={place}
                data-rod
                data-place={place}
                role="group"
                aria-label={`${placeName[place]} rod`}
                className="relative"
                style={{ "--bead": beadColor[place] } as React.CSSProperties}
              >
                <span className="absolute inset-y-2 left-1/2 -ml-[2px] w-1 rounded bg-ink/30" aria-hidden="true" />
                {/* unit marker dot on the bar */}
                <span
                  className="absolute left-1/2 z-20 -ml-[2.5px] h-[5px] w-[5px] rounded-full bg-white/80"
                  style={{ top: PAD + HEAVEN + 2.5 }}
                  aria-hidden="true"
                />
                <button
                  type="button"
                  data-bead
                  data-kind="heaven"
                  data-on={String(heavenOn)}
                  aria-pressed={heavenOn}
                  aria-label={`${placeName[place]}: five-bead`}
                  className="abacus-bead"
                  style={{ top: PAD }}
                >
                  <span />
                </button>
                {[1, 2, 3, 4].map((i) => (
                  <button
                    key={i}
                    type="button"
                    data-bead
                    data-kind="earth"
                    data-index={i}
                    data-on={String(i <= earthOn)}
                    aria-pressed={i <= earthOn}
                    aria-label={`${placeName[place]}: one-bead ${i}`}
                    className="abacus-bead"
                    style={{ top: EARTH_TOP + i * BEAD }}
                  >
                    <span />
                  </button>
                ))}
              </div>
            );
          })}
        </div>

        <div className="mt-2 grid grid-cols-4 text-center">
          {places.map((place, idx) => (
            <div key={place}>
              <p className="label-caps text-white/55">{placeShort[place]}</p>
              <p data-digit-for={place} className="font-display text-xl font-extrabold tabular-nums text-white">
                {digits[idx]}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-4 flex items-baseline justify-between gap-4">
        <span className="label-caps text-ink-soft">The abacus shows</span>
        <span data-abacus-value className="font-display text-4xl font-extrabold tabular-nums text-ink">
          {initial.toLocaleString("en-GB")}
        </span>
      </p>
    </div>
  );
}
