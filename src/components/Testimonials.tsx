const testimonials = [
  {
    id: 1,
    name: "Marcus J.",
    location: "Atlanta, GA",
    rating: 5,
    text: "The quality of the RL Signature Hoodie blew me away. This isn't fast fashion — it's the real deal. I've gotten so many compliments wearing it.",
    initials: "MJ",
  },
  {
    id: 2,
    name: "Aaliyah R.",
    location: "New York, NY",
    rating: 5,
    text: "Finally a brand that understands style AND quality. The women's collection fits perfectly and the fabric feels premium. Worth every penny.",
    initials: "AR",
  },
  {
    id: 3,
    name: "Devon T.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Rich Life Apparel has completely changed my wardrobe. Every piece I've bought has been exceptional. The bomber jacket is my favorite piece I own.",
    initials: "DT",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      style={{
        backgroundColor: "#000",
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle at 50% 50%, rgba(201,169,110,0.03) 0%, transparent 60%)",
        }}
      />
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">What They're Saying</span>
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
            Customer Stories
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                padding: "2rem",
                position: "relative",
                transition: "border-color 0.3s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.3)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.75rem",
                  fontSize: "4rem",
                  lineHeight: 1,
                  color: "rgba(201,169,110,0.1)",
                  fontFamily: "Georgia, serif",
                  fontWeight: 900,
                }}
              >
                "
              </div>

              <StarRating count={t.rating} />

              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "#c0c0c0",
                  lineHeight: 1.7,
                  marginBottom: "1.75rem",
                  fontStyle: "italic",
                }}
              >
                "{t.text}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgba(201,169,110,0.15)",
                    border: "1px solid rgba(201,169,110,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "var(--gold)",
                    letterSpacing: "0.05em",
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: "0.875rem", color: "#fff" }}>{t.name}</p>
                  <p style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
