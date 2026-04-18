import { useEffect, useRef } from "react"

// Fashion sketch SVG paths
const fashionSketches = [
  // T-shirt
  "M20,5 L35,20 L30,25 L25,20 L25,60 L15,60 L15,20 L10,25 L5,20 Z",
  // Dress/Frock
  "M25,5 L30,15 L35,25 L30,60 L20,60 L15,25 L20,15 Z",
  // Pants
  "M15,15 L35,15 L38,25 L35,60 L28,60 L25,30 L22,60 L15,60 L12,25 Z",
  // Blazer/Jacket
  "M15,10 L25,5 L35,10 L40,25 L35,30 L35,55 L15,55 L15,30 L10,25 Z M25,5 L25,55",
  // Hoodie
  "M18,8 L32,8 L38,18 L35,22 L38,55 L12,55 L15,22 L12,18 Z M25,8 L25,15 Q25,12 22,12 Q19,12 19,15 Q19,18 22,18 Q25,18 25,15",
]

export default function FashionBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { clientX, clientY } = e
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      const moveX = (clientX - centerX) / 50
      const moveY = (clientY - centerY) / 50
      
      containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`
    }

    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const positions = [
    { top: "10%", left: "5%", rotate: -15, scale: 1.2, sketch: 0 },
    { top: "25%", right: "8%", rotate: 25, scale: 0.9, sketch: 1 },
    { top: "45%", left: "3%", rotate: -30, scale: 1, sketch: 2 },
    { top: "60%", right: "5%", rotate: 10, scale: 1.1, sketch: 3 },
    { top: "75%", left: "10%", rotate: -10, scale: 0.8, sketch: 4 },
    { top: "85%", right: "12%", rotate: 20, scale: 0.95, sketch: 1 },
    { top: "15%", left: "30%", rotate: -5, scale: 0.7, sketch: 3 },
    { top: "55%", right: "25%", rotate: 35, scale: 0.75, sketch: 0 },
    { top: "35%", left: "15%", rotate: -25, scale: 0.6, sketch: 2 },
    { top: "70%", right: "35%", rotate: 15, scale: 0.65, sketch: 4 },
  ]

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
        transition: "transform 0.3s ease-out",
        willChange: "transform",
      }}
    >
      {positions.map((pos, i) => (
        <svg
          key={i}
          viewBox="0 0 50 70"
          style={{
            position: "absolute",
            top: pos.top,
            left: pos.left,
            right: pos.right,
            width: "80px",
            height: "110px",
            opacity: 0.04,
            transform: `rotate(${pos.rotate}deg) scale(${pos.scale})`,
            transition: "all 0.5s ease",
            animation: `float ${6 + i * 0.5}s ease-in-out infinite`,
            animationDelay: `${i * 0.8}s`,
          }}
        >
          <path
            d={fashionSketches[pos.sketch]}
            fill="none"
            stroke="var(--gold)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}
