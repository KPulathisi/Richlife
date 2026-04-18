const items = [
  "Premium Quality",
  "Rich Life Apparel",
  "New Season 2025",
  "Luxury Streetwear",
  "Free Shipping $150+",
  "Crafted to Elevate",
]

export default function MarqueeBanner() {
  const repeated = [...items, ...items, ...items]

  return (
    <div
      style={{
        backgroundColor: "var(--charcoal)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "0.875rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.6875rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 500,
                color: "#888",
              }}
            >
              {item}
            </span>
            <span
              style={{
                display: "inline-block",
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "var(--gold)",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
