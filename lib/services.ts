import type { Accent } from "./palette";

export type ServiceFAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  menuLabel: string;
  seoTitle: string;
  seoDescription: string;
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    subtitle: string;
  };
  ages: string;
  duration: string;
  format: string;
  accent: Accent;
  outcomes: { title: string; text: string }[];
  steps: { title: string; text: string }[];
  faqs: ServiceFAQ[];
};

export const services: Service[] = [
  {
    slug: "handwriting-classes",
    name: "Handwriting Improvement Classes",
    shortName: "Handwriting",
    menuLabel: "Handwriting Improvement",
    seoTitle: "Online Handwriting Improvement Classes for Kids & Adults | UK & USA",
    seoDescription:
      "Transform messy handwriting in 8–12 weeks with live 1:1 online handwriting classes for kids and adults in the UK & USA. Certified tutors, structured method, free assessment.",
    hero: {
      eyebrow: "Our flagship programme",
      title: "From messy to",
      highlight: "magnificent",
      subtitle:
        "A structured, step-by-step handwriting method that fixes letter formation, sizing, spacing and speed — with visible change in the first few weeks.",
    },
    ages: "Ages 5+ and adults",
    duration: "8–12 week levels",
    format: "Live online · 1:1 & small group",
    accent: "blue",
    outcomes: [
      { title: "Legible letterforms", text: "Correct formation of every letter, taught stroke by stroke." },
      { title: "Consistent size & spacing", text: "Words that sit neatly on the line with even gaps." },
      { title: "Comfortable speed", text: "Write faster without the neatness falling apart." },
      { title: "Confident writer", text: "Pride in schoolwork, exams and everyday writing." },
    ],
    steps: [
      { title: "Free writing assessment", text: "We analyse a sample of current handwriting and share a personal improvement plan." },
      { title: "Grip, posture & patterns", text: "Pencil grip, paper angle and pre-writing patterns set the foundation." },
      { title: "Letters, words, sentences", text: "Systematic practice with instant correction in every live class." },
      { title: "Speed & style", text: "Build fluency and a neat personal style that lasts for life." },
    ],
    faqs: [
      {
        q: "How long does it take to improve handwriting?",
        a: "Most students show clearly visible improvement within 3–4 weeks of structured practice, and complete a full transformation in 8–12 weeks with two classes per week plus short daily practice.",
      },
      {
        q: "Can handwriting really be fixed online?",
        a: "Yes. In live video classes the tutor watches the student write in real time, corrects grip and stroke order instantly, and reviews worksheet photos after every session — the same feedback loop as in-person tuition.",
      },
      {
        q: "What age can my child start handwriting classes?",
        a: "Children can start from age 5, once they can hold a pencil. We also run dedicated programmes for teens and adults — it is never too late to improve handwriting.",
      },
      {
        q: "Do you teach print and cursive?",
        a: "Both. We teach neat print handwriting first where needed, and offer a dedicated cursive writing programme for joined-up writing.",
      },
      {
        q: "Do adults take handwriting classes too?",
        a: "Absolutely. Around a third of our students are adults — professionals, nurses, teachers and university students who want fast, legible everyday handwriting.",
      },
    ],
  },
  {
    slug: "cursive-writing-classes",
    name: "Cursive Writing Classes",
    shortName: "Cursive",
    menuLabel: "Cursive Writing",
    seoTitle: "Online Cursive Writing Classes for Kids & Adults | Learn Joined-Up Writing",
    seoDescription:
      "Learn beautiful joined-up cursive handwriting with live online classes for kids and adults in the UK & USA. Step-by-step letter joins, fluency and speed. Book a free trial.",
    hero: {
      eyebrow: "Joined-up thinking",
      title: "Flowing, elegant",
      highlight: "cursive",
      subtitle:
        "Master every letter join with a proven sequence — from first loops to fast, fluent joined-up writing that looks beautiful on the page.",
    },
    ages: "Ages 7+ and adults",
    duration: "10 week programme",
    format: "Live online · 1:1 & small group",
    accent: "violet",
    outcomes: [
      { title: "Every join mastered", text: "All letter families and joins taught in a logical order." },
      { title: "Rhythm & flow", text: "Smooth, continuous writing that reduces hand fatigue." },
      { title: "Speed with style", text: "Cursive that keeps up with note-taking and exams." },
      { title: "Signature-ready", text: "An elegant personal hand students are proud of." },
    ],
    steps: [
      { title: "Cursive readiness check", text: "We confirm print foundations and set the starting level." },
      { title: "Letter families & entries", text: "Undercurve, overcurve and loop letters — grouped for faster learning." },
      { title: "Joins & words", text: "The four join types practised into real words and sentences." },
      { title: "Fluency & personal style", text: "Speed drills and refinement into a consistent, elegant hand." },
    ],
    faqs: [
      {
        q: "What age should a child learn cursive?",
        a: "Most children are ready for cursive around age 7, once print letter formation is secure. Adults can learn or re-learn cursive at any age — many pick it up faster than children.",
      },
      {
        q: "Is cursive still worth learning?",
        a: "Yes. Research links cursive with better spelling, memory and writing fluency, and many UK schools expect joined handwriting by Year 3. In the US, over 20 states have reintroduced mandatory cursive instruction.",
      },
      {
        q: "How long does it take to learn cursive?",
        a: "With two live classes a week and ten minutes of daily practice, most students write confident joined-up cursive within 10 weeks.",
      },
      {
        q: "My child writes in print — will cursive confuse them?",
        a: "No. We build cursive on top of secure print foundations, and the structured join-by-join sequence prevents mixing of styles.",
      },
    ],
  },
  {
    slug: "calligraphy-classes",
    name: "Calligraphy Classes",
    shortName: "Calligraphy",
    menuLabel: "Calligraphy",
    seoTitle: "Online Calligraphy Classes for Beginners | Modern & Brush Lettering",
    seoDescription:
      "Learn modern calligraphy and brush lettering from scratch with live online classes for teens and adults in the UK & USA. Small groups, personal feedback, beginner-friendly.",
    hero: {
      eyebrow: "The art of beautiful writing",
      title: "Letters become",
      highlight: "art",
      subtitle:
        "From faux calligraphy to brush pens and flourishes — a relaxing, creative skill taught live, stroke by stroke, no experience needed.",
    },
    ages: "Ages 10+ and adults",
    duration: "8 week course",
    format: "Live online · small group",
    accent: "pink",
    outcomes: [
      { title: "Core strokes & drills", text: "The eight foundational strokes behind every style." },
      { title: "Full lowercase & capitals", text: "A complete modern calligraphy alphabet." },
      { title: "Flourishes & composition", text: "Layouts, swirls and finishing touches." },
      { title: "Real projects", text: "Cards, quotes and gifts you'll actually make." },
    ],
    steps: [
      { title: "Tools & faux calligraphy", text: "Start with an ordinary pencil — learn the logic of thick and thin strokes." },
      { title: "Brush pen basics", text: "Pressure control and the eight core strokes." },
      { title: "Alphabets & words", text: "Build the full alphabet, then connect letters beautifully." },
      { title: "Flourishing & projects", text: "Compose quotes, cards and envelope art with confidence." },
    ],
    faqs: [
      {
        q: "Do I need special pens to start calligraphy?",
        a: "No. The first classes use an ordinary pencil for faux calligraphy. We then recommend an affordable beginner brush pen — a simple starter list is shared before the course.",
      },
      {
        q: "Is online calligraphy class effective for complete beginners?",
        a: "Yes — the course is designed for absolute beginners. Live demonstrations, a document camera view of the tutor's strokes, and personal feedback on your practice photos make progress fast.",
      },
      {
        q: "What styles of calligraphy do you teach?",
        a: "We focus on modern calligraphy and brush lettering, the most popular and beginner-friendly styles, with an introduction to flourishing and composition.",
      },
      {
        q: "Can children learn calligraphy?",
        a: "Yes, from around age 10, once everyday handwriting is stable. Younger children usually benefit more from our handwriting improvement programme first.",
      },
    ],
  },
  {
    slug: "abacus-classes",
    name: "Abacus & Mental Math Classes",
    shortName: "Abacus",
    menuLabel: "Abacus & Mental Math",
    seoTitle: "Online Abacus Classes for Kids | Mental Math Training | UK & USA",
    seoDescription:
      "Live online abacus classes for kids aged 5–13 in the UK & USA. Build lightning-fast mental math, focus and confidence with certified abacus tutors. Free trial class.",
    hero: {
      eyebrow: "Mental math superpowers",
      title: "Calculate at the",
      highlight: "speed of thought",
      subtitle:
        "Abacus training turns numbers into pictures. Kids learn to add, subtract, multiply and divide in their head — faster than a calculator — while building laser focus.",
    },
    ages: "Ages 5–13",
    duration: "Level-based · 3 months per level",
    format: "Live online · small group",
    accent: "green",
    outcomes: [
      { title: "Lightning mental math", text: "Multi-digit sums solved in the head, visualising the beads." },
      { title: "Sharper focus", text: "Concentration and listening skills that carry into school." },
      { title: "Photographic visualisation", text: "Both brain hemispheres engaged through bead imagery." },
      { title: "Math confidence", text: "Number anxiety replaced with genuine enjoyment." },
    ],
    steps: [
      { title: "Meet the abacus", text: "Bead values, finger technique and first additions on a real abacus." },
      { title: "Small & big friends", text: "The complement formulas that unlock fast calculation." },
      { title: "Visualisation", text: "The abacus moves into the mind — true mental arithmetic begins." },
      { title: "Speed & mastery", text: "Multiplication, division and timed challenges, level by level." },
    ],
    faqs: [
      {
        q: "What is the best age to start abacus classes?",
        a: "Ages 5–8 is the sweet spot, while the brain's visualisation ability is developing fastest — but children up to 13 gain huge benefits. The key requirement is knowing numbers 0–9.",
      },
      {
        q: "How does abacus improve mental math?",
        a: "Children first calculate on a physical abacus, then learn to picture the beads and move them mentally. This visual method engages both brain hemispheres and makes multi-digit arithmetic feel effortless.",
      },
      {
        q: "How long until we see results?",
        a: "Most parents notice faster number work and better focus within 2–3 months. Full mental-math mastery develops across the level programme, with each level taking about three months.",
      },
      {
        q: "Do you provide the abacus and worksheets?",
        a: "We tell you exactly which student abacus to order (widely available online in the UK and USA for a few pounds/dollars) and provide all worksheets and practice material digitally.",
      },
      {
        q: "Will abacus conflict with school math methods?",
        a: "No — abacus develops number sense and calculation speed that supports any school curriculum, including UK National Curriculum and US Common Core approaches.",
      },
    ],
  },
  {
    slug: "phonics-classes",
    name: "Phonics & Early Reading Classes",
    shortName: "Phonics",
    menuLabel: "Phonics & Reading",
    seoTitle: "Online Phonics Classes for Kids | Learn to Read with Confidence",
    seoDescription:
      "Live online phonics classes for children aged 3–8 in the UK & USA. Systematic synthetic phonics, blending and reading fluency with friendly expert tutors. Free trial.",
    hero: {
      eyebrow: "First steps to reading",
      title: "Crack the",
      highlight: "reading code",
      subtitle:
        "Systematic synthetic phonics — the method used in the best UK and US schools — taught live with games, stories and songs that make sounds stick.",
    },
    ages: "Ages 3–8",
    duration: "Level-based · 10 weeks per level",
    format: "Live online · 1:1 & small group",
    accent: "yellow",
    outcomes: [
      { title: "All 44 sounds", text: "Every phoneme and its spellings, taught in a proven order." },
      { title: "Blending & segmenting", text: "The core skills that turn sounds into reading and spelling." },
      { title: "Reading fluency", text: "From first words to confident storybook reading." },
      { title: "Love of books", text: "Sessions built around stories, games and celebration." },
    ],
    steps: [
      { title: "Sound foundations", text: "Single letter sounds with actions, songs and games." },
      { title: "First blending", text: "CVC words — the magical moment of first real reading." },
      { title: "Digraphs & tricky words", text: "sh, ch, th and the common exception words." },
      { title: "Fluent reading", text: "Longer words, sentences and real books with expression." },
    ],
    faqs: [
      {
        q: "What age should my child start phonics?",
        a: "Sound awareness can start from age 3, with formal phonics typically from age 4–5, matching the Reception year in UK schools and kindergarten in the US.",
      },
      {
        q: "What is systematic synthetic phonics?",
        a: "It is the evidence-based method of teaching reading where children learn letter sounds in a planned sequence and blend them to read words — the approach required in English primary schools and used in leading US reading programmes.",
      },
      {
        q: "My child is behind in reading — can phonics classes help?",
        a: "Yes. We run catch-up programmes for ages 6–8 that identify exactly which sounds and skills are missing and close the gaps with targeted 1:1 teaching.",
      },
      {
        q: "How are online phonics classes kept engaging for young children?",
        a: "Sessions are short, fast-paced and playful — flashcards, actions, songs, digital games and plenty of praise. Parents consistently tell us it is the highlight of their child's week.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
