const announcements = [
  "Free Shipping on Orders Over $150",
  "New Season 2025 — Shop the Drop",
  "Use Code RICHLIFE for 10% Off",
  "Premium Quality Guaranteed",
]

export default function AnnouncementBar() {
  const tripleItems = [...announcements, ...announcements, ...announcements]

  return (
    <div
      style={{
        backgroundColor: "var(--gold)",
        color: "#000",
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
      <div
        style={{
          display: "inline-flex",
          animation: "scroll 20s linear infinite",
          padding: "0.625rem 0",
        }}
      >
        {tripleItems.map((text, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "0 3rem",
              fontSize: "0.6875rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                backgroundColor: "rgba(0,0,0,0.3)",
                marginRight: "1.5rem",
                flexShrink: 0,
              }}
            />
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
