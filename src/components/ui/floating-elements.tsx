'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  shape: 'circle' | 'square' | 'triangle'
  color: string
  duration: number
  delay: number
}

// Generate deterministic random values for consistent SSR/CSR
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

const generateDeterministicElements = (seed: number, count: number) => {
  const shapes: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle']
  const colors = ['#8b5cf6', '#3b82f6', '#10b981', '#f59e0b']
  
  const elements: FloatingElement[] = []
  for (let i = 0; i < count; i++) {
    const randomSeed = seed + i * 1000
    elements.push({
      id: i,
      x: parseFloat(seededRandom(randomSeed).toFixed(4)) * 100,
      y: parseFloat(seededRandom(randomSeed + 100).toFixed(4)) * 100,
      size: parseFloat((seededRandom(randomSeed + 200) * 30 + 10).toFixed(4)),
      shape: shapes[Math.floor(seededRandom(randomSeed + 300) * shapes.length)],
      color: colors[Math.floor(seededRandom(randomSeed + 400) * colors.length)],
      duration: parseFloat((seededRandom(randomSeed + 500) * 10 + 5).toFixed(4)),
      delay: parseFloat((seededRandom(randomSeed + 600) * 5).toFixed(4))
    })
  }
  return elements
}

export function FloatingElements() {
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    setElements(generateDeterministicElements(98765, 15))
  }, [])

  const renderShape = (element: FloatingElement) => {
    const baseClasses = "absolute opacity-20"
    const style = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: element.size,
      height: element.size,
      backgroundColor: element.color,
    }

    switch (element.shape) {
      case 'circle':
        return (
          <div
            key={element.id}
            className={`${baseClasses} rounded-full`}
            style={style}
          />
        )
      case 'square':
        return (
          <div
            key={element.id}
            className={`${baseClasses} transform rotate-45`}
            style={style}
          />
        )
      case 'triangle':
        return (
          <div
            key={element.id}
            className={baseClasses}
            style={{
              ...style,
              width: 0,
              height: 0,
              borderLeft: `${element.size / 2}px solid transparent`,
              borderRight: `${element.size / 2}px solid transparent`,
              borderBottom: `${element.size}px solid ${element.color}`,
              backgroundColor: 'transparent',
            }}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: element.delay }}
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              x: [0, 10, 0],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {renderShape(element)}
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}