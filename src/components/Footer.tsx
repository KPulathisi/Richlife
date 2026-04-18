const footerLinks = {
  Explore: ["Collections", "New Arrivals", "Lookbook", "Our Story"],
  Visit: ["Showrooms", "Book Appointment", "Location & Hours", "Virtual Tour"],
  Company: ["About Us", "Our Team", "Careers", "Press", "Contact"],
}

const socialLinks = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Twitter/X",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.13 8.13 0 004.77 1.52V6.76a4.85 4.85 0 01-1-.07z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--dark)", borderTop: "1px solid var(--border)" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "5rem 2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(3, 1fr)",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          <div>
            <img
              src={`${import.meta.env.BASE_URL}FB_IMG_1776450125103.jpg.jpeg`}
              alt="Rich Life Apparel"
              style={{ height: "60px", width: "auto", objectFit: "contain", marginBottom: "1.5rem" }}
            />
            <p style={{ fontSize: "0.875rem", color: "#666", lineHeight: 1.7, maxWidth: "260px", marginBottom: "2rem" }}>
              Premium apparel for those who live boldly. Visit our showrooms to experience the collection in person.
            </p>
            <div style={{ display: "flex", gap: "0.875rem" }}>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "38px",
                    height: "38px",
                    border: "1px solid var(--border)",
                    color: "#666",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)"
                    e.currentTarget.style.color = "var(--gold)"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)"
                    e.currentTarget.style.color = "#666"
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: "0.6875rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "1.5rem",
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: "none" }}>
                {links.map((link) => (
                  <li key={link} style={{ marginBottom: "0.75rem" }}>
                    <a
                      href="#"
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#666")}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <p style={{ fontSize: "0.75rem", color: "#444", letterSpacing: "0.05em" }}>
          © 2025 Rich Life Apparel. All rights reserved.
        </p>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontSize: "0.75rem",
                color: "#444",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
