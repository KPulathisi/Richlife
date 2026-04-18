import { Link } from "react-router-dom"

const products = [
  {
    id: 1,
    name: "RL Signature Hoodie",
    category: "Men's — Hoodies",
    image: "/product-hoodie.svg",
    tag: "New",
  },
  {
    id: 2,
    name: "Premium Jogger Set",
    category: "Men's — Bottoms",
    image: "/product-joggers.svg",
    tag: "Featured",
  },
  {
    id: 3,
    name: "Luxe Bomber Jacket",
    category: "Outerwear",
    image: "/product-jacket.svg",
    tag: "New",
  },
  {
    id: 4,
    name: "Minimal Graphic Tee",
    category: "Unisex — Tops",
    image: "/product-tee.svg",
    tag: null,
  },
]

export default function NewArrivals() {
  return (
    <section id="new-arrivals" style={{ backgroundColor: "#000", padding: "6rem 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <span className="section-label">Just Dropped</span>
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
              New Arrivals
            </h2>
          </div>
          <Link
            to="/collections"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--gold)",
              textDecoration: "none",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              paddingBottom: "4px",
              borderBottom: "1px solid var(--gold)",
            }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={(e) => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement
                const overlay = e.currentTarget.querySelector(".product-overlay") as HTMLDivElement
                if (img) img.style.transform = "scale(1.05)"
                if (overlay) overlay.style.opacity = "1"
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.querySelector("img") as HTMLImageElement
                const overlay = e.currentTarget.querySelector(".product-overlay") as HTMLDivElement
                if (img) img.style.transform = "scale(1)"
                if (overlay) overlay.style.opacity = "0"
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  overflow: "hidden",
                  backgroundColor: "#111",
                  marginBottom: "1rem",
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
                {product.tag && (
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      backgroundColor: "var(--gold)",
                      color: "#000",
                      fontSize: "0.625rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "0.25rem 0.625rem",
                    }}
                  >
                    {product.tag}
                  </span>
                )}
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    right: "1rem",
                    textAlign: "center",
                    opacity: 0,
                    transition: "all 0.3s ease",
                  }}
                  className="product-overlay"
                >
                  <span
                    style={{
                      fontSize: "0.6875rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      fontWeight: 600,
                      backgroundColor: "rgba(0,0,0,0.85)",
                      padding: "0.75rem 1.5rem",
                      display: "inline-block",
                      border: "1px solid rgba(201,169,110,0.4)",
                    }}
                  >
                    View Details
                  </span>
                </div>
              </div>
              <div>
                <p style={{ fontSize: "0.6875rem", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.25rem" }}>
                  {product.category}
                </p>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#e5e5e5" }}>{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
