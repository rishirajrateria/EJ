import { Circled, NoteArrow, StarSticker, Tick } from "./Marks";

const SENTENCE = "the quick brown fox";

// Per-letter wobble for the "before" line: rotation (deg), rise (em), size.
const wobble: [number, number, number][] = [
  [-8, 0.05, 1.1], [6, -0.12, 0.85], [-4, 0.1, 1.25], [0, 0, 1],
  [10, -0.18, 1.3], [-6, 0.08, 0.8], [4, -0.05, 1.15], [-12, 0.15, 0.9], [8, -0.2, 1.2],
  [0, 0, 1],
  [-5, 0.1, 1.35], [7, -0.1, 0.85], [-3, 0.2, 1.1], [12, -0.06, 0.95], [-9, 0.12, 1.25],
  [0, 0, 1],
  [6, -0.15, 0.9], [-10, 0.1, 1.3], [4, -0.2, 1.05],
];

// Handwriting guide: ascender line, dashed x-height line, baseline, descender
// line, spaced half an em apart. Playwrite GB S has an x-height of 0.52em and
// its baseline sits 0.95em below the top of a line-height:1 box, so neat text
// placed at top 0.4em lands on the 1.35em baseline.
function GuideLines() {
  return (
    <span aria-hidden="true">
      <span className="absolute inset-x-0 top-[0.35em] h-px bg-rule" />
      <span className="absolute inset-x-0 top-[0.85em] border-t-[1.5px] border-dashed border-rule" />
      <span className="absolute inset-x-0 top-[1.35em] h-[2px] bg-blue/45" />
      <span className="absolute inset-x-0 top-[1.85em] h-px bg-rule-faint" />
    </span>
  );
}

const words = SENTENCE.split(" ");
// index of each word's first letter within SENTENCE, so each letter keeps its own wobble
const wordStarts = words.map((_, i) => words.slice(0, i).reduce((n, w) => n + w.length + 1, 0));

export default function BeforeAfter() {
  return (
    <figure className="relative mx-auto w-full max-w-[540px] rotate-[1.2deg] pb-6">
      {/* washi tape */}
      <span className="tape -top-3 left-10 z-10 -rotate-6" aria-hidden="true" />

      <div className="relative overflow-hidden rounded-[4px] bg-white shadow-page">
        {/* margin line */}
        <span className="absolute inset-y-0 left-[54px] w-[2px] bg-margin/70 sm:left-[66px]" aria-hidden="true" />

        {/* date and title, underlined with a ruler */}
        <div className="flex items-end justify-between gap-3 pb-3 pl-[66px] pr-5 pt-5 sm:pl-[80px]">
          <p className="border-b-[1.5px] border-ink/70 pb-0.5 font-script text-[13px] text-ink sm:text-[15px]">
            Handwriting practice
          </p>
          <p className="border-b-[1.5px] border-ink/70 pb-0.5 font-script text-[11px] text-ink-soft sm:text-[13px]">
            Monday 6th October
          </p>
        </div>

        {/* Week 1 */}
        <div className="flex">
          <p className="w-[54px] shrink-0 pt-3 text-center font-hand text-[12px] font-semibold leading-tight text-redpen sm:w-[66px] sm:text-[13px]">
            Week<br />1
          </p>
          <div className="relative h-[2.2em] flex-1 pl-3 pr-5 text-[22px] sm:pl-4 sm:text-[30px]">
            <GuideLines />
            <p className="absolute left-3 top-[0.12em] whitespace-nowrap font-scrawl text-[1.15em] leading-none text-ink/85 sm:left-4" aria-label={`Messy handwriting: ${SENTENCE}`}>
              {words.map((word, w) => (
                <span key={word} className={`relative inline-block ${w === 1 ? "mx-[0.08em]" : "mr-[0.18em]"}`}>
                  {word.split("").map((ch, i) => {
                    const [r, y, s] = wobble[(wordStarts[w] + i) % wobble.length];
                    return (
                      <span
                        key={i}
                        aria-hidden="true"
                        className="inline-block"
                        style={{ transform: `translateY(${y}em) rotate(${r}deg)`, fontSize: `${s}em` }}
                      >
                        {ch}
                      </span>
                    );
                  })}
                  {w === 1 && <Circled />}
                </span>
              ))}
            </p>
            <p className="absolute -top-3 right-3 flex items-start gap-0.5 font-hand text-[12px] font-semibold leading-tight text-redpen sm:right-5 sm:text-[14px]">
              <span className="rotate-[-4deg]">sizing?<br />spacing?</span>
              <NoteArrow className="mt-2 h-5 w-7 -scale-x-100 rotate-12 sm:h-6 sm:w-9" />
            </p>
          </div>
        </div>

        {/* Week 8 */}
        <div className="flex pb-6">
          <p className="w-[54px] shrink-0 pt-3 text-center font-hand text-[12px] font-semibold leading-tight text-redpen sm:w-[66px] sm:text-[13px]">
            Week<br />8
          </p>
          <div className="relative h-[2.2em] flex-1 pl-3 pr-5 text-[22px] sm:pl-4 sm:text-[30px]">
            <GuideLines />
            <p className="absolute left-3 top-[0.4em] leading-none sm:left-4">
              <span className="relative inline-block">
                <span className="write-on block whitespace-nowrap font-script text-blue-deep">
                  {SENTENCE}
                </span>
                {/* pencil that follows the writing */}
                <svg
                  className="write-pen absolute -top-[0.75em] h-[1.4em] w-[1.4em]"
                  viewBox="0 0 40 40"
                  aria-hidden="true"
                >
                  <g transform="rotate(35 20 20)">
                    <rect x="16" y="-2" width="8" height="30" rx="1.5" fill="#ffd43b" />
                    <rect x="16" y="-2" width="8" height="6" rx="1.5" fill="#ff4f8b" />
                    <path d="M16 28 L20 38 L24 28 Z" fill="#f6e2b8" />
                    <path d="M18.6 34.5 L20 38 L21.4 34.5 Z" fill="#16205c" />
                  </g>
                </svg>
              </span>
            </p>
            <div className="pop-in absolute right-2 top-[1.3em] flex items-center gap-1 sm:-top-[0.2em] sm:right-4">
              <Tick className="h-7 w-7 sm:h-9 sm:w-9" />
              <span className="font-hand text-[14px] font-bold text-redpen sm:text-[17px]">Superb!</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pop-in absolute -bottom-3 -left-4 sm:-bottom-2 sm:left-auto sm:-right-6" style={{ animationDelay: "3.5s" }}>
        <StarSticker label="Well done!" className="h-20 w-20 drop-shadow-md sm:h-24 sm:w-24" />
      </div>
      <figcaption className="sr-only">
        The same sentence written by a student in week 1 (messy, uneven letters) and week 8
        (neat, joined handwriting marked &quot;Superb!&quot; by the tutor).
      </figcaption>
    </figure>
  );
}
