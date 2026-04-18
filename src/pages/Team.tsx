import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const leadership = [
  { name: "Marcus Chen", role: "Founder & Creative Director", bio: "Visionary behind the brand's aesthetic since 2019." },
  { name: "Sarah Williams", role: "Head of Design", bio: "Former luxury fashion house designer with 15+ years experience." },
  { name: "David Park", role: "CEO", bio: "Leading brand strategy and global expansion initiatives." },
]

const departments = [
  {
    name: "Design Team",
    description: "The creative minds sketching the future of Rich Life. From initial concepts to final samples.",
    count: "8 members",
  },
  {
    name: "Production",
    description: "Ensuring every piece meets our exacting standards. Quality control specialists and material experts.",
    count: "12 members",
  },
  {
    name: "Styling Team",
    description: "The faces you meet in our showrooms. Experts in fit, fabric, and personal style.",
    count: "15 members",
  },
  {
    name: "Operations",
    description: "Keeping everything running smoothly behind the scenes. Logistics, customer care, and more.",
    count: "10 members",
  },
]

export default function Team() {
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
        {/* Sketch Pattern - Crosshatch */}
        <div style={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a96e' stroke-width='0.3'%3E%3Cpath d='M0 40L40 0M0 0l40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
        }} />
        
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
          <span className="section-label">The People</span>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "1rem",
            lineHeight: 1.1,
          }}>
            Meet the <span style={{ color: "var(--gold)" }}>Team</span>
          </h1>
          <p style={{
            fontSize: "1.125rem",
            color: "#888",
            maxWidth: "600px",
            marginTop: "1.5rem",
            lineHeight: 1.7,
          }}>
            Behind every piece is a team of passionate individuals dedicated to bringing the Rich Life vision to life.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Leadership</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              The Founders
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}>
            {leadership.map((person) => (
              <div key={person.name} style={{
                position: "relative",
                padding: "2.5rem",
                backgroundColor: "var(--charcoal)",
                border: "1px solid rgba(201,169,110,0.1)",
              }}>
                {/* Sketch Corner Marks */}
                <div style={{
                  position: "absolute",
                  top: "0.5rem",
                  left: "0.5rem",
                  width: "20px",
                  height: "20px",
                  borderLeft: "1px solid rgba(201,169,110,0.3)",
                  borderTop: "1px solid rgba(201,169,110,0.3)",
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "0.5rem",
                  right: "0.5rem",
                  width: "20px",
                  height: "20px",
                  borderRight: "1px solid rgba(201,169,110,0.3)",
                  borderBottom: "1px solid rgba(201,169,110,0.3)",
                }} />

                {/* Avatar Placeholder */}
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  backgroundColor: "var(--dark)",
                  border: "2px dashed rgba(201,169,110,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                  fontSize: "2rem",
                  color: "var(--gold)",
                }}>
                  {person.name.charAt(0)}
                </div>

                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.375rem",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "0.25rem",
                }}>
                  {person.name}
                </h3>
                <p style={{
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}>
                  {person.role}
                </p>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  lineHeight: 1.6,
                }}>
                  {person.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo / Group Presentation */}
      <section style={{ padding: "6rem 0", backgroundColor: "#000" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Family</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              The People Behind the Brand
            </h2>
          </div>

          {/* Large Group Presentation Area */}
          <div style={{
            position: "relative",
            aspectRatio: "21/9",
            backgroundColor: "var(--charcoal)",
            border: "1px dashed rgba(201,169,110,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}>
            {/* Sketch Decoration Lines */}
            <div style={{
              position: "absolute",
              top: "2rem",
              left: "2rem",
              right: "2rem",
              height: "1px",
              background: "repeating-linear-gradient(90deg, rgba(201,169,110,0.2) 0px, rgba(201,169,110,0.2) 8px, transparent 8px, transparent 12px)",
            }} />
            <div style={{
              position: "absolute",
              bottom: "2rem",
              left: "2rem",
              right: "2rem",
              height: "1px",
              background: "repeating-linear-gradient(90deg, rgba(201,169,110,0.2) 0px, rgba(201,169,110,0.2) 8px, transparent 8px, transparent 12px)",
            }} />

            <div style={{ textAlign: "center" }}>
              <div style={{
                fontSize: "4rem",
                color: "var(--gold)",
                marginBottom: "1rem",
                opacity: 0.5,
              }}>
                ◈
              </div>
              <p style={{
                fontSize: "1.25rem",
                color: "#666",
                letterSpacing: "0.1em",
              }}>
                45+ Passionate Individuals
              </p>
              <p style={{
                fontSize: "0.875rem",
                color: "#444",
                marginTop: "0.5rem",
              }}>
                United by a shared vision of excellence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section style={{ padding: "6rem 0", backgroundColor: "var(--charcoal)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="section-label">Structure</span>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#fff",
              marginTop: "0.75rem",
            }}>
              Our Teams
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}>
            {departments.map((dept, idx) => (
              <div key={dept.name} style={{
                padding: "2rem",
                backgroundColor: "rgba(0,0,0,0.3)",
                border: "1px dashed rgba(201,169,110,0.15)",
                position: "relative",
              }}>
                {/* Number Badge */}
                <div style={{
                  position: "absolute",
                  top: "-10px",
                  left: "2rem",
                  backgroundColor: "var(--charcoal)",
                  padding: "0 0.5rem",
                  fontSize: "0.625rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                }}>
                  {String(idx + 1).padStart(2, "0")}
                </div>

                <h3 style={{
                  fontSize: "1.125rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "0.75rem",
                }}>
                  {dept.name}
                </h3>
                <p style={{
                  fontSize: "0.875rem",
                  color: "#666",
                  lineHeight: 1.6,
                  marginBottom: "1rem",
                }}>
                  {dept.description}
                </p>
                <span style={{
                  fontSize: "0.75rem",
                  color: "var(--gold)",
                  letterSpacing: "0.1em",
                }}>
                  {dept.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section style={{ padding: "4rem 0", backgroundColor: "var(--dark)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 2rem", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
            fontWeight: 700,
            color: "#fff",
            marginBottom: "1rem",
          }}>
            Join Our Team
          </h2>
          <p style={{
            fontSize: "0.9375rem",
            color: "#888",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}>
            We&apos;re always looking for passionate individuals who share our vision. Check out our open positions.
          </p>
          <a 
            href="#" 
            className="btn-gold"
            style={{ textDecoration: "none", display: "inline-block" }}
          >
            View Careers
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
