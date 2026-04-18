import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const lookbookItems = [
  {
    id: 1,
    title: "Essential Hoodie",
    category: "Men's — Streetwear",
    image: "/product-hoodie.svg",
    season: "Spring/Summer 2025",
  },
  {
    id: 2,
    title: "Urban Joggers",
    category: "Men's — Bottoms",
    image: "/product-joggers.svg",
    season: "Spring/Summer 2025",
  },
  {
    id: 3,
    title: "Signature Bomber",
    category: "Outerwear",
    image: "/product-jacket.svg",
    season: "Fall/Winter 2024",
  },
  {
    id: 4,
    title: "Minimal Tee",
    category: "Unisex — Basics",
    image: "/product-tee.svg",
    season: "Core Collection",
  },
  {
    id: 5,
    title: "Classic Overshirt",
    category: "Men's — Shirts",
    image: "/collection-men.webp",
    season: "Spring/Summer 2025",
  },
  {
    id: 6,
    title: "Elegant Blazer",
    category: "Women's — Formal",
    image: "/collection-women.webp",
    season: "Fall/Winter 2024",
  },
]

const collectionCategories = [
  {
    id: "mens",
    name: "Men's Collection",
    description: "Bold silhouettes and refined essentials for the modern gentleman.",
    image: "/collection-men.webp",
  },
  {
    id: "womens",
    name: "Women's Collection",
    description: "Effortless sophistication meets contemporary edge.",
    image: "/collection-women.webp",
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "The details that complete every look.",
    image: "/collection-accessories.webp",
  },
]

export default function CollectionsPage() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero */}
      <section style={{ 
        position: "relative", 
        padding: "10rem 0 6rem", 
        backgroundColor: "#000",
        overflow: "hidden",
      }}>
        {/* Sketch Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a96e' stroke-width='0.3'%3E%3Cpath d='M0 40h80M40 0v80'/%3E%3Ccircle cx='40' cy='40' r='30'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }} />
        
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="section-label">Lookbook</span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "1rem",
            lineHeight: 1.1,
          }}>
            The <span style={{ color: "var(--gold)" }}>Collections</span>
          </h1>
          <p style={{
            fontSize: "1.125rem",
            color: "#888",
            maxWidth: "600px",
            marginTop: "1.5rem",
            lineHeight: 1.7,
          }}>
            Explore our curated collections. Each piece designed with intention, crafted for those who demand more from their wardrobe.
          </p>
        </div>
      </section>

      {/* Collection Categories */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}>
            {collectionCategories.map((cat) => (
              <div key={cat.id} style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                cursor: "pointer",
              }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.7s ease",
                  }}
                />
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "2rem",
                }}>
                  <div style={{
                    width: "2rem",
                    height: "1px",
                    backgroundColor: "var(--gold)",
                    marginBottom: "1rem",
                  }} />
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}>
                    {cat.name}
                  </h3>
                  <p style={{
                    fontSize: "0.875rem",
                    color: "#aaa",
                    lineHeight: 1.6,
                  }}>
                    {cat.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Grid */}
      <section style={{ padding: "6rem 0", backgroundColor: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ marginBottom: "3rem" }}>
            <span className="section-label">Gallery</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              Featured Pieces
            </h2>
          </div>

          {/* Masonry-style Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {lookbookItems.map((item, index) => (
              <div 
                key={item.id} 
                style={{
                  gridRow: index % 3 === 1 ? "span 2" : "span 1",
                }}
              >
                <div style={{
                  position: "relative",
                  height: index % 3 === 1 ? "100%" : "auto",
                  aspectRatio: index % 3 === 1 ? "unset" : "3/4",
                  overflow: "hidden",
                  backgroundColor: "#111",
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.5rem",
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  }}>
                    <p style={{
                      fontSize: "0.625rem",
                      color: "var(--gold)",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      marginBottom: "0.25rem",
                    }}>
                      {item.season}
                    </p>
                    <h3 style={{
                      fontSize: "1rem",
                      fontWeight: 600,
                      color: "#fff",
                      marginBottom: "0.25rem",
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      fontSize: "0.75rem",
                      color: "#888",
                    }}>
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sketch Divider */}
      <div style={{
        height: "1px",
        background: "repeating-linear-gradient(90deg, var(--gold) 0px, var(--gold) 10px, transparent 10px, transparent 15px)",
        opacity: 0.3,
      }} />

      {/* Style Notes */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}>
            {[
              { icon: "✦", title: "Premium Fabrics", desc: "Sourced from the finest mills worldwide" },
              { icon: "◆", title: "Tailored Fit", desc: "Designed for modern silhouettes" },
              { icon: "◇", title: "Timeless Style", desc: "Beyond trends, built to last" },
              { icon: "○", title: "Detail Focus", desc: "Every element carefully considered" },
            ].map((note) => (
              <div key={note.title} style={{ padding: "1.5rem" }}>
                <div style={{
                  fontSize: "1.5rem",
                  color: "var(--gold)",
                  marginBottom: "1rem",
                }}>
                  {note.icon}
                </div>
                <h4 style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#fff",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}>
                  {note.title}
                </h4>
                <p style={{
                  fontSize: "0.75rem",
                  color: "#666",
                  lineHeight: 1.5,
                }}>
                  {note.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
