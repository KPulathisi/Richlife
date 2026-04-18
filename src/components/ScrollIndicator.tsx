import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      setVisible(window.scrollY < heroHeight)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 40,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.5s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <span
        style={{
          fontSize: "0.625rem",
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#888",
          fontWeight: 500,
        }}
      >
        Scroll
      </span>
      <div
        style={{
          width: "1px",
          height: "3rem",
          background: "linear-gradient(to bottom, var(--gold), transparent)",
          animation: "pulse 2s infinite",
        }}
      />
    </div>
  )
}
