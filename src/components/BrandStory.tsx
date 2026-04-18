import { Link } from "react-router-dom"

export default function BrandStory() {
  return (
    <section id="about" style={{ backgroundColor: "var(--charcoal)", padding: "6rem 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: "-1.5rem",
                border: "1px solid rgba(201,169,110,0.15)",
                zIndex: 0,
              }}
            />
            <img
              src="/about-brand.webp"
              alt="Our Story"
              style={{
                width: "100%",
                aspectRatio: "4/5",
                objectFit: "cover",
                position: "relative",
                zIndex: 1,
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-2rem",
                right: "-2rem",
                zIndex: 2,
                backgroundColor: "var(--gold)",
                padding: "1.5rem 2rem",
              }}
            >
              <p style={{ fontSize: "2rem", fontWeight: 800, color: "#000", lineHeight: 1 }}>2019</p>
              <p style={{ fontSize: "0.625rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#000", fontWeight: 600 }}>Est.</p>
            </div>
          </div>

          <div>
            <span className="section-label">Our Story</span>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#fff",
                marginTop: "0.75rem",
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Born from the<br />
              <span style={{ color: "var(--gold)" }}>Pursuit of More</span>
            </h2>
            <div style={{ width: "3rem", height: "1px", backgroundColor: "var(--gold)", marginBottom: "1.5rem" }} />
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#8a8a8a",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}
            >
              Rich Life Apparel was born from a simple belief — that how you dress shapes how you move through the world. We design for the bold, the driven, and the unapologetic.
            </p>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "#8a8a8a",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Every piece in our collection is crafted with intention. Premium materials, thoughtful silhouettes, and details that elevate the ordinary into something extraordinary.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                { num: "50+", label: "Premium Styles" },
                { num: "12K+", label: "Happy Customers" },
                { num: "100%", label: "Quality Assured" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                      lineHeight: 1,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {stat.num}
                  </p>
                  <p style={{ fontSize: "0.6875rem", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase" }}>{stat.label}</p>
                </div>
              ))}
            </div>

            <Link to="/about" className="btn-gold" style={{ textDecoration: "none" }}>
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
