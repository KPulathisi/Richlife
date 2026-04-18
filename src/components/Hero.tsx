import { useEffect, useState, useRef } from "react"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)
  const bgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!bgRef.current) return
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      bgRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#000",
      }}
    >
      <div
        ref={bgRef}
        style={{
          position: "absolute",
          inset: "-20px",
          backgroundImage: "url('/hero-bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          opacity: 0.45,
          transition: "transform 0.3s ease-out",
          willChange: "transform",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(201,169,110,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 50%)`,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          paddingTop: "6rem",
        }}
      >
        <div style={{ maxWidth: "700px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.1s",
            }}
          >
            <div style={{ width: "2.5rem", height: "1px", backgroundColor: "var(--gold)" }} />
            <span className="section-label">New Season 2025</span>
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: "0.5rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            DRESS THE
          </h1>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "var(--gold)",
              marginBottom: "2rem",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 0.8s ease 0.3s",
            }}
          >
            RICH LIFE
          </h1>

          <p
            style={{
              fontSize: "1rem",
              color: "#a3a3a3",
              lineHeight: 1.7,
              maxWidth: "450px",
              marginBottom: "3rem",
              fontWeight: 300,
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.4s",
            }}
          >
            Elevate your wardrobe with pieces crafted for those who live without limits. Premium quality, uncompromising style.
          </p>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              flexWrap: "wrap",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease 0.5s",
            }}
          >
            <a href="#collections" className="btn-gold" style={{ textDecoration: "none" }}>
              Explore Collection
            </a>
            <a href="#about" className="btn-outline" style={{ textDecoration: "none" }}>
              Our Story
            </a>
          </div>
        </div>
      </div>

    </section>
  )
}
