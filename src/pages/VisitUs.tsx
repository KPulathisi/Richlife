import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const showrooms = [
  {
    city: "New York",
    address: "425 Broadway, SoHo",
    hours: "Mon–Sat: 10am – 8pm, Sun: 12pm – 6pm",
    phone: "+1 (212) 555-0123",
    featured: true,
  },
  {
    city: "Los Angeles",
    address: "8500 Sunset Boulevard, West Hollywood",
    hours: "Mon–Sat: 11am – 7pm, Sun: 12pm – 5pm",
    phone: "+1 (310) 555-0456",
    featured: false,
  },
  {
    city: "London",
    address: "12 Savile Row, Mayfair",
    hours: "Mon–Sat: 10am – 7pm, Closed Sun",
    phone: "+44 20 7946 0958",
    featured: false,
  },
  {
    city: "Tokyo",
    address: "5-2-1 Shibuya, Shibuya City",
    hours: "Daily: 11am – 9pm",
    phone: "+81 3-1234-5678",
    featured: false,
  },
]

export default function VisitUs() {
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
        {/* Map Grid Pattern Background */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a96e' stroke-width='0.4'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M50 0v100M0 50h100'/%3E%3Ccircle cx='50' cy='50' r='20'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }} />
        
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="section-label">Experience</span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "1rem",
            lineHeight: 1.1,
          }}>
            Visit Our <span style={{ color: "var(--gold)" }}>Showrooms</span>
          </h1>
          <p style={{
            fontSize: "1.125rem",
            color: "#888",
            maxWidth: "600px",
            marginTop: "1.5rem",
            lineHeight: 1.7,
          }}>
            Step into our spaces. Feel the fabrics, try the fits, and experience the Rich Life difference in person.
          </p>
        </div>
      </section>

      {/* Featured Showroom */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}>
            <div style={{ position: "relative" }}>
              {/* Sketch Frame */}
              <div style={{
                position: "absolute",
                inset: "-1rem",
                border: "2px dashed rgba(201,169,110,0.15)",
                zIndex: 0,
              }} />
              <div style={{
                position: "absolute",
                inset: "-0.5rem",
                border: "1px solid rgba(201,169,110,0.1)",
                zIndex: 0,
              }} />
              <img
                src="/about-brand.webp"
                alt="Flagship Showroom"
                style={{
                  width: "100%",
                  aspectRatio: "16/10",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
            </div>
            <div>
              <span style={{
                fontSize: "0.625rem",
                color: "var(--gold)",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}>
                Flagship Location
              </span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#fff",
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
              }}>
                New York Showroom
              </h2>
              <p style={{
                fontSize: "1rem",
                color: "#888",
                lineHeight: 1.8,
                marginBottom: "1.5rem",
              }}>
                Our flagship space in the heart of SoHo. Three floors of curated collections, private styling suites, and a space that embodies the Rich Life aesthetic.
              </p>
              
              <div style={{ marginTop: "2rem" }}>
                <div style={{ 
                  display: "flex", 
                  gap: "1rem", 
                  marginBottom: "1rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--gold)", fontSize: "1rem" }}>📍</span>
                  <span style={{ color: "#aaa" }}>425 Broadway, New York, NY 10013</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  gap: "1rem", 
                  marginBottom: "1rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--gold)", fontSize: "1rem" }}>🕐</span>
                  <span style={{ color: "#aaa" }}>Mon–Sat: 10am – 8pm, Sun: 12pm – 6pm</span>
                </div>
                <div style={{ 
                  display: "flex", 
                  gap: "1rem",
                  alignItems: "flex-start",
                }}>
                  <span style={{ color: "var(--gold)", fontSize: "1rem" }}>📞</span>
                  <span style={{ color: "#aaa" }}>+1 (212) 555-0123</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Locations */}
      <section style={{ padding: "6rem 0", backgroundColor: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Global Presence</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              All Locations
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}>
            {showrooms.map((location) => (
              <div key={location.city} style={{
                padding: "2rem",
                backgroundColor: "var(--charcoal)",
                border: location.featured ? "1px solid rgba(201,169,110,0.3)" : "1px solid rgba(201,169,110,0.1)",
                position: "relative",
              }}>
                {location.featured && (
                  <span style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    fontSize: "0.625rem",
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}>
                    Flagship
                  </span>
                )}
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "1rem",
                }}>
                  {location.city}
                </h3>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}>
                    Address
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#888" }}>{location.address}</p>
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}>
                    Hours
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#888" }}>{location.hours}</p>
                </div>
                <div>
                  <p style={{
                    fontSize: "0.75rem",
                    color: "var(--gold)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "0.25rem",
                  }}>
                    Contact
                  </p>
                  <p style={{ fontSize: "0.875rem", color: "#888" }}>{location.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Experience</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              What to Expect
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}>
            {[
              { title: "Private Styling", desc: "One-on-one sessions with our expert stylists" },
              { title: "Custom Fittings", desc: "Tailoring services available on-site" },
              { title: "Exclusive Access", desc: "See new drops before anyone else" },
              { title: "VIP Events", desc: "Invitations to launches and private shows" },
            ].map((service) => (
              <div key={service.title} style={{
                textAlign: "center",
                padding: "1.5rem",
              }}>
                <div style={{
                  width: "50px",
                  height: "50px",
                  border: "1px dashed rgba(201,169,110,0.3)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "var(--gold)",
                  fontSize: "1.25rem",
                }}>
                  ✦
                </div>
                <h4 style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0.5rem",
                }}>
                  {service.title}
                </h4>
                <p style={{
                  fontSize: "0.75rem",
                  color: "#666",
                  lineHeight: 1.5,
                }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
          }}>
            Can&apos;t Make It In?
          </h2>
          <p style={{
            fontSize: "0.9375rem",
            color: "#888",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}>
            Reach out to our team for virtual styling consultations or any inquiries.
          </p>
          <a 
            href="mailto:hello@richlife.com" 
            className="btn-outline"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
