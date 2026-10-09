import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "The Education Junction — Online Handwriting & Abacus Classes for Kids and Adults, UK & USA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #251c69 0%, #5b2aa8 60%, #b8338f 100%)",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(255,77,109,0.4)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -60,
            width: 380,
            height: 380,
            borderRadius: 9999,
            background: "rgba(0,169,240,0.3)",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="72" height="72" viewBox="0 0 48 48">
            <rect x="2" y="2" width="44" height="44" rx="13" fill="#fffaf3" />
            <path d="M14 33 L24 13 L34 33 Z" fill="#ff4d6d" />
            <path d="M24 13 L34 33 L28.5 33 Z" fill="#ffd23f" />
            <circle cx="24" cy="33" r="4.5" fill="#251c69" />
            <circle cx="24" cy="33" r="2" fill="#00c49a" />
          </svg>
          <div
            style={{
              fontSize: 36,
              color: "rgba(255,255,255,0.85)",
              display: "flex",
              fontWeight: 600,
            }}
          >
            The Education Junction
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Beautiful handwriting.</span>
          <span style={{ color: "#ffd23f" }}>Brilliant minds.</span>
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 30,
            color: "rgba(255,255,255,0.75)",
            display: "flex",
          }}
        >
          Live online handwriting · cursive · calligraphy · abacus · phonics
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            color: "#ffd23f",
            display: "flex",
            fontWeight: 600,
          }}
        >
          Kids &amp; adults · UK &amp; USA · Free trial class
        </div>
      </div>
    ),
    { ...size }
  );
}
