const collections = [
  {
    id: "men",
    label: "Men's Collection",
    description: "Bold cuts and premium fabrics for the modern man who refuses to blend in.",
    image: `${import.meta.env.BASE_URL}collection-men.webp`,
    href: "#men",
  },
  {
    id: "women",
    label: "Women's Collection",
    description: "Effortlessly sophisticated pieces that command attention in every room.",
    image: `${import.meta.env.BASE_URL}collection-women.webp`,
    href: "#women",
  },
  {
    id: "accessories",
    label: "Accessories",
    description: "The finishing touches that elevate every outfit to another level.",
    image: `${import.meta.env.BASE_URL}collection-accessories.webp`,
    href: "#accessories",
  },
]

export default function Collections() {
  return (
    <section id="collections" style={{ backgroundColor: "var(--dark)", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ marginBottom: "3.5rem" }}>
          <span className="section-label">Shop by Category</span>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
              letterSpacing: "-0.02em",
            }}
          >
            Explore Collections
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {collections.map((col) => (
            <a
              key={col.id}
              href={col.href}
              style={{
                position: "relative",
                display: "block",
                aspectRatio: "3/4",
                overflow: "hidden",
                textDecoration: "none",
                cursor: "pointer",
                backgroundColor: "#111",
              }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement
                if (img) img.style.transform = "scale(1.06)"
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement
                if (img) img.style.transform = "scale(1)"
              }}
            >
              <img
                src={col.image}
                alt={col.label}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                }}
              />
              <div className="img-overlay" />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "2rem 1.75rem",
                }}
              >
                <div style={{ width: "2rem", height: "1px", backgroundColor: "var(--gold)", marginBottom: "0.875rem" }} />
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.375rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.5rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {col.label}
                </h3>
                <p style={{ fontSize: "0.8125rem", color: "#b0b0b0", lineHeight: 1.5, marginBottom: "1.25rem" }}>
                  {col.description}
                </p>
                <span
                  style={{
                    fontSize: "0.6875rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  View Collection
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
