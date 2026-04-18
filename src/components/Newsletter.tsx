import { useState } from "react"

export default function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #0d0d0d 0%, #111 50%, #0d0d0d 100%)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "5rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "0 2rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        <span className="section-label">Stay in the Loop</span>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "0.75rem",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
          }}
        >
          Join the Rich Life
        </h2>
        <p style={{ color: "#6b6b6b", fontSize: "0.9375rem", lineHeight: 1.7, marginBottom: "2.5rem" }}>
          Be the first to know about new drops, exclusive releases, and member-only offers.
        </p>

        {submitted ? (
          <div
            style={{
              padding: "1.25rem 2rem",
              border: "1px solid rgba(201,169,110,0.4)",
              color: "var(--gold)",
              fontSize: "0.875rem",
              letterSpacing: "0.08em",
            }}
          >
            Welcome to the family. Watch your inbox.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", gap: "0", maxWidth: "480px", margin: "0 auto" }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              style={{
                flex: 1,
                backgroundColor: "#0a0a0a",
                border: "1px solid var(--border)",
                borderRight: "none",
                color: "#fff",
                padding: "0.875rem 1.25rem",
                fontSize: "0.875rem",
                outline: "none",
                transition: "border-color 0.2s",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(201,169,110,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
            />
            <button
              type="submit"
              className="btn-gold"
              style={{ flexShrink: 0, padding: "0.875rem 1.75rem", whiteSpace: "nowrap" }}
            >
              Subscribe
            </button>
          </form>
        )}
        <p style={{ fontSize: "0.6875rem", color: "#444", marginTop: "1rem", letterSpacing: "0.05em" }}>
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
