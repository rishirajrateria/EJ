import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt =
  "The Education Junction — Online Handwriting & Abacus Classes for Kids and Adults, UK & USA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// A blue exercise-book cover with a white name label.
export default function OgImage() {
  const field = (label: string, value: string, big = false) => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 18 }}>
      <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 3, color: "#4b5482", display: "flex" }}>
        {label}
      </div>
      <div
        style={{
          fontSize: big ? 52 : 30,
          fontWeight: 800,
          color: "#16205c",
          borderBottom: "3px dashed #9aa1c4",
          paddingBottom: 6,
          display: "flex",
        }}
      >
        {value}
      </div>
    </div>
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#2f5bff",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* spine with staples */}
        <div style={{ width: 70, height: "100%", background: "#1c3ed6", display: "flex" }} />
        <div style={{ position: "absolute", left: 28, top: 140, width: 12, height: 56, borderRadius: 6, background: "rgba(255,255,255,0.7)", display: "flex" }} />
        <div style={{ position: "absolute", left: 28, bottom: 140, width: 12, height: 56, borderRadius: 6, background: "rgba(255,255,255,0.7)", display: "flex" }} />

        <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 80px 0 90px" }}>
          <div
            style={{
              width: 640,
              background: "#ffffff",
              borderRadius: 14,
              padding: "34px 44px 40px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 10px 0 rgba(0,0,0,0.15)",
            }}
          >
            {field("SUBJECT", "Handwriting & Abacus", true)}
            {field("NAME", "The Education Junction")}
            {field("WHERE", "Live online · UK & USA")}
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", color: "#fff" }}>
            <div
              style={{
                width: 210,
                height: 210,
                borderRadius: 999,
                background: "#ffd43b",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#16205c",
                transform: "rotate(-8deg)",
              }}
            >
              <div style={{ fontSize: 30, fontWeight: 800, display: "flex" }}>FREE</div>
              <div style={{ fontSize: 30, fontWeight: 800, display: "flex" }}>TRIAL</div>
              <div style={{ fontSize: 30, fontWeight: 800, display: "flex" }}>CLASS</div>
            </div>
            <div style={{ marginTop: 36, fontSize: 26, fontWeight: 700, display: "flex" }}>Kids &amp; adults</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
