'use client'

import { motion, useScroll, useTransform, useSpring, useMotionValue, useAnimation } from 'framer-motion'
import { useEffect, useRef, useState, useMemo } from 'react'
import { FloatingElements } from './floating-elements'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

interface Node {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

// Generate deterministic random values for consistent SSR/CSR
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const generateDeterministicParticles = (seed: number, count: number) => {
  const particleArray: Particle[] = []
  for (let i = 0; i < count; i++) {
    const randomSeed = seed + i * 1000
    particleArray.push({
      id: i,
      x: parseFloat((seededRandom(randomSeed) * 100).toFixed(4)),
      y: parseFloat((seededRandom(randomSeed + 100) * 100).toFixed(4)),
      size: parseFloat((seededRandom(randomSeed + 200) * 3 + 1).toFixed(4)),
      duration: parseFloat((seededRandom(randomSeed + 300) * 20 + 10).toFixed(4)),
      delay: parseFloat((seededRandom(randomSeed + 400) * 5).toFixed(4))
    })
  }
  return particleArray
}

const generateDeterministicNodes = (seed: number, count: number) => {
  const nodeArray: Node[] = []
  for (let i = 0; i < count; i++) {
    const randomSeed = seed + i * 2000
    nodeArray.push({
      id: i,
      x: parseFloat((seededRandom(randomSeed) * 100).toFixed(4)),
      y: parseFloat((seededRandom(randomSeed + 100) * 100).toFixed(4)),
      vx: parseFloat(((seededRandom(randomSeed + 200) - 0.5) * 0.5).toFixed(4)),
      vy: parseFloat(((seededRandom(randomSeed + 300) - 0.5) * 0.5).toFixed(4)),
      radius: parseFloat((seededRandom(randomSeed + 400) * 100 + 50).toFixed(4))
    })
  }
  return nodeArray
}

export function AdvancedAnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollY } = useScroll()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  
  // Parallax effects for different layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -150])
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -300])
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -450])
  
  // Spring animations for mouse interaction
  const mouseX = useSpring(mousePosition.x, { stiffness: 100, damping: 30 })
  const mouseY = useSpring(mousePosition.y, { stiffness: 100, damping: 30 })
  
  // Generate particles deterministically
  const particles = useMemo(() => {
    return generateDeterministicParticles(12345, 50)
  }, [])

  // Generate floating nodes for network effect deterministically
  const nodes = useMemo(() => {
    return generateDeterministicNodes(54321, 8)
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

  // Handle canvas resize
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight
        })
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Network animation on canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = dimensions.width
    canvas.height = dimensions.height

    let animationId: number
    const nodePositions = nodes.map(node => ({
      x: (node.x / 100) * dimensions.width,
      y: (node.y / 100) * dimensions.height,
      vx: node.vx,
      vy: node.vy,
      radius: node.radius
    }))

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update node positions
      nodePositions.forEach((node, index) => {
        node.x += node.vx
        node.y += node.vy

        // Bounce off walls
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(139, 92, 246, 0.6)'
        ctx.fill()

        // Draw connections
        nodePositions.forEach((otherNode, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            )
            
            if (distance < 150) {
              ctx.beginPath()
              ctx.moveTo(node.x, node.y)
              ctx.lineTo(otherNode.x, otherNode.y)
              ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * (1 - distance / 150)})`
              ctx.lineWidth = 1
              ctx.stroke()
            }
          }
        })
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [dimensions, nodes])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Base gradient layers */}
      <div className="absolute inset-0">
        {/* Deep space gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"
          style={{ transform: `translateY(${layer1Y.get()}px)` }}
        />
        
        {/* Nebula effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"
          style={{ transform: `translateY(${layer2Y.get()}px)` }}
        />
        
        {/* Atmospheric haze */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-slate-900/50"
          style={{ transform: `translateY(${layer3Y.get()}px)` }}
        />
      </div>

      {/* Animated grid pattern */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${layer1Y.get()}px)` }}
      >
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="advancedGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.5"
              />
              <circle
                cx="30"
                cy="30"
                r="2"
                fill="url(#nodeGradient)"
                opacity="0.6"
              />
            </pattern>
            <radialGradient id="gridGradient">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
            </radialGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#advancedGrid)" />
        </svg>
      </motion.div>

      {/* Floating particles */}
      <motion.div className="absolute inset-0" style={{ transform: `translateY(${layer2Y.get()}px)` }}>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/40"
            style={{
              left: `${particle.x.toFixed(4)}%`,
              top: `${particle.y.toFixed(4)}%`,
              width: `${particle.size.toFixed(4)}px`,
              height: `${particle.size.toFixed(4)}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 10, 0],
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

      {/* Network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60"
        style={{ transform: `translateY(${layer1Y.get()}px)` }}
      />

      {/* Orbital rings */}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {[0, 120, 240].map((rotation, index) => (
            <motion.div
              key={index}
              className="absolute w-96 h-96 rounded-full border border-primary/20"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 1.3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Mouse-following glow effect */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        style={{
          left: mouseX.get() - 192,
          top: mouseY.get() - 192,
          transition: "all 0.3s ease-out"
        }}
      />
      
      {/* Secondary mouse glow */}
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-blue-500/10 blur-2xl pointer-events-none"
        style={{
          left: mouseX.get() - 128,
          top: mouseY.get() - 128,
          transition: "all 0.5s ease-out"
        }}
      />

      {/* Floating geometric shapes */}
      <motion.div className="absolute inset-0 pointer-events-none" style={{ transform: `translateY(${layer3Y.get()}px)` }}>
        {[
          { x: 10, y: 20, size: 40, rotation: 45 },
          { x: 80, y: 60, size: 30, rotation: -30 },
          { x: 25, y: 80, size: 50, rotation: 60 },
          { x: 70, y: 30, size: 35, rotation: -45 },
        ].map((shape, index) => (
          <motion.div
            key={index}
            className="absolute border border-primary/30"
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
              transform: `rotate(${shape.rotation}deg)`,
            }}
            animate={{
              rotate: [shape.rotation, shape.rotation + 360],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 15 + index * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </motion.div>

      {/* Overlay gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-70" />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background/80" />
      </div>

      {/* Additional floating elements */}
      <FloatingElements />
    </div>
  )
}