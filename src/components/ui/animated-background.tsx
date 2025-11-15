'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

// Generate deterministic random values for consistent SSR/CSR
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const generateParticleData = (seed: number, count: number) => {
  return [...Array(count)].map((_, i) => {
    const randomSeed = seed + i * 1000
    return {
      id: `particle-${i}`,
      left: parseFloat((seededRandom(randomSeed) * 100).toFixed(4)),
      top: parseFloat((seededRandom(randomSeed + 100) * 100).toFixed(4)),
      duration: parseFloat((3 + seededRandom(randomSeed + 200) * 2).toFixed(4)),
      delay: parseFloat((seededRandom(randomSeed + 300) * 2).toFixed(4))
    }
  })
}

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particleData, setParticleData] = useState<Array<{
    id: string
    left: number
    top: number
    duration: number
    delay: number
  }>>([])

  // Parallax effects
  const y1 = useTransform(scrollY, [0, 1000], [0, -200])
  const y2 = useTransform(scrollY, [0, 1000], [0, -400])
  const y3 = useTransform(scrollY, [0, 1000], [0, -600])

  // Generate particle data deterministically
  useEffect(() => {
    setParticleData(generateParticleData(55555, 20))
  }, [])

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900" />
      
      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: y1 }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      {/* Floating Particles */}
      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        {particleData.map((particle, i) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${particle.left.toFixed(4)}%`,
              top: `${particle.top.toFixed(4)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </motion.div>

      {/* Network Nodes */}
      <motion.div className="absolute inset-0" style={{ y: y3 }}>
        <svg className="w-full h-full">
          {[...Array(8)].map((_, i) => {
            const x = 20 + (i * 12)
            const y = 20 + (Math.sin(i) * 10)
            return (
              <g key={`node-${i}`}>
                <motion.circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="3"
                  fill="#8b5cf6"
                  fillOpacity="0.6"
                  animate={{
                    r: [3, 6, 3],
                    fillOpacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut"
                  }}
                />
                {/* Connection lines */}
                {i < 7 && (
                  <motion.line
                    x1={`${x}%`}
                    y1={`${y}%`}
                    x2={`${20 + ((i + 1) * 12)}%`}
                    y2={`${20 + (Math.sin(i + 1) * 10)}%`}
                    stroke="#8b5cf6"
                    strokeOpacity="0.2"
                    strokeWidth="1"
                    animate={{
                      strokeOpacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </g>
            )
          })}
        </svg>
      </motion.div>

      {/* Mouse-following Glow */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transition: "all 0.3s ease-out"
        }}
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
    </div>
  )
}