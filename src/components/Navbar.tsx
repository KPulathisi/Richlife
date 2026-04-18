import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Collections", href: "/collections" },
  { label: "About", href: "/about" },
  { label: "Visit Us", href: "/visit-us" },
  { label: "Team", href: "/team" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.4s ease",
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
        borderBottom: scrolled ? "1px solid #1a1a1a" : "1px solid transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <img
              src={`${import.meta.env.BASE_URL}FB_IMG_1776450125103.jpg.jpeg`}
              alt="Rich Life Apparel"
              style={{ height: "52px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          <nav style={{ display: "flex", gap: "2.5rem", alignItems: "center" }} className="hidden-mobile">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                style={{
                  color: location.pathname === link.href ? "var(--gold)" : "#e5e5e5",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.href) {
                    e.currentTarget.style.color = "#e5e5e5"
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <Link
              to="/visit-us"
              className="btn-gold"
              style={{ 
                textDecoration: "none", 
                fontSize: "0.625rem",
                padding: "0.625rem 1.25rem",
              }}
            >
              Visit Us
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ background: "none", border: "none", color: "#e5e5e5", cursor: "pointer", padding: "4px", display: "none" }}
              className="mobile-menu-btn"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen
                  ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
                  : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{
          backgroundColor: "rgba(0,0,0,0.98)",
          borderTop: "1px solid #1a1a1a",
          padding: "2rem",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                color: location.pathname === link.href ? "var(--gold)" : "#e5e5e5",
                fontSize: "0.875rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 500,
                textDecoration: "none",
                padding: "0.875rem 0",
                borderBottom: "1px solid #1a1a1a",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
