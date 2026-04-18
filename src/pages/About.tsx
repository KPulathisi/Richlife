import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const milestones = [
  { year: "2019", title: "The Beginning", desc: "Rich Life Apparel founded with a vision to redefine modern luxury streetwear." },
  { year: "2020", title: "First Collection", desc: "Launched our debut line featuring signature hoodies and premium basics." },
  { year: "2021", title: "Expansion", desc: "Opened our flagship showroom and introduced the women's collection." },
  { year: "2022", title: "Collaborations", desc: "Partnered with renowned designers for limited edition capsule collections." },
  { year: "2023", title: "Sustainability", desc: "Committed to eco-conscious materials and ethical manufacturing practices." },
  { year: "2024", title: "Global Reach", desc: "Showrooms now in 5 major cities, serving customers worldwide." },
]

const values = [
  { title: "Quality First", desc: "We never compromise on materials or craftsmanship. Every stitch matters." },
  { title: "Bold Expression", desc: "Fashion is self-expression. Our pieces help you tell your story." },
  { title: "Timeless Design", desc: "Trends fade, style remains. We create pieces that last beyond seasons." },
  { title: "Community", desc: "Rich Life is more than clothing—it's a mindset, a community of driven individuals." },
]

export default function About() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <Navbar />
      
      {/* Hero Section */}
      <section style={{ position: "relative", padding: "10rem 0 6rem", backgroundColor: "#000" }}>
        {/* Sketch Pattern Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg stroke='%23c9a96e' stroke-width='0.5'%3E%3Cpath d='M0 0l60 60M60 0L0 60'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }} />
        
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="section-label">Our Story</span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "1rem",
            lineHeight: 1.1,
          }}>
            Crafted for the <span style={{ color: "var(--gold)" }}>Bold</span>
          </h1>
          <p style={{
            fontSize: "1.125rem",
            color: "#888",
            maxWidth: "600px",
            marginTop: "1.5rem",
            lineHeight: 1.7,
          }}>
            From a small studio to a global presence, our journey has always been about one thing: creating apparel that empowers you to live richly.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}>
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute",
                inset: "-1rem",
                border: "1px dashed rgba(201,169,110,0.2)",
                zIndex: 0,
              }} />
              <img
                src={`${import.meta.env.BASE_URL}about-brand.webp`}
                alt="Rich Life Studio"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
            <div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "1.5rem",
              }}>
                Born from a Vision
              </h2>
              <div style={{ width: "3rem", height: "1px", backgroundColor: "var(--gold)", marginBottom: "1.5rem" }} />
              <p style={{
                fontSize: "1rem",
                color: "#888",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}>
                Rich Life Apparel was founded in 2019 with a simple belief: clothing should be more than fabric—it should be a statement of intent. We design for those who refuse to settle, who pursue excellence in every aspect of life.
              </p>
              <p style={{
                fontSize: "1rem",
                color: "#888",
                lineHeight: 1.8,
                marginBottom: "1.25rem",
              }}>
                Every piece in our collection reflects hours of careful consideration. From selecting premium materials to perfecting the fit, we obsess over details so you don't have to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">What We Stand For</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              Our Values
            </h2>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}>
            {values.map((value, idx) => (
              <div key={value.title} style={{
                padding: "2rem",
                border: "1px dashed rgba(201,169,110,0.15)",
                backgroundColor: "rgba(0,0,0,0.3)",
              }}>
                <div style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid var(--gold)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontSize: "1.25rem",
                  color: "var(--gold)",
                  fontFamily: "'Playfair Display', serif",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <h3 style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "6rem 0", backgroundColor: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Through The Years</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              Our Journey
            </h2>
          </div>
          
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}>
            {milestones.map((milestone) => (
              <div key={milestone.year} style={{
                position: "relative",
                paddingLeft: "1.5rem",
                borderLeft: "1px dashed rgba(201,169,110,0.3)",
              }}>
                <div style={{
                  position: "absolute",
                  left: "-5px",
                  top: "0",
                  width: "9px",
                  height: "9px",
                  borderRadius: "50%",
                  backgroundColor: "var(--gold)",
                }} />
                <span style={{
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                  fontWeight: 600,
                }}>
                  {milestone.year}
                </span>
                <h3 style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}>
                  {milestone.title}
                </h3>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}>
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--dark)", borderTop: "1px solid var(--border)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "3rem",
            textAlign: "center",
          }}>
            {[
              { num: "5", label: "Cities" },
              { num: "50+", label: "Designs" },
              { num: "12K", label: "Community" },
              { num: "100%", label: "Passion" },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "var(--gold)",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}>
                  {stat.num}
                </p>
                <p style={{
                  fontSize: "0.75rem",
                  color: "#666",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}>
                  {stat.label}
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
