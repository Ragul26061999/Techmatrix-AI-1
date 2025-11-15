'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  ShoppingCart, 
  Building, 
  GraduationCap, 
  Heart, 
  Settings,
  ArrowRight,
  TrendingUp,
  Users,
  Zap,
  Shield,
  BarChart
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// Generate deterministic random values for consistent SSR/CSR
const generateParticleData = (seed: number, count: number) => {
  const particles = []
  for (let i = 0; i < count; i++) {
    // Simple pseudo-random number generator for consistent values
    const random = (seed * 9301 + 49297 * i) % 233280 / 233280
    particles.push({
      id: i,
      top: parseFloat((random * 100).toFixed(4)),
      left: parseFloat((((random * 10000) % 100)).toFixed(4)),
      width: parseFloat(((random * 8) + 2).toFixed(4)),
      height: parseFloat(((random * 8) + 2).toFixed(4)),
      delay: parseFloat((random * 2).toFixed(4))
    })
  }
  return particles
}

const industries = [
  {
    name: "Retail & E-commerce",
    icon: ShoppingCart,
    color: "bg-blue-500/10 text-blue-500",
    description: "Transform online shopping with AI-powered personalization",
    challenges: [
      "Low conversion rates",
      "Cart abandonment", 
      "Poor customer experience",
      "Inventory management"
    ],
    solutions: [
      "Personalized product recommendations",
      "Dynamic pricing optimization",
      "Customer behavior analytics",
      "Automated inventory forecasting"
    ],
    outcomes: [
      { metric: "+35%", label: "Conversion Rate" },
      { metric: "-28%", label: "Cart Abandonment" },
      { metric: "+42%", label: "Customer Retention" }
    ],
    caseStudy: "Major retailer increased conversion by 35% with our recommendation engine"
  },
  {
    name: "FinTech",
    icon: Building,
    color: "bg-green-500/10 text-green-500", 
    description: "Secure, compliant financial technology solutions",
    challenges: [
      "Fraud detection",
      "Regulatory compliance",
      "Transaction processing",
      "Customer onboarding"
    ],
    solutions: [
      "AI-powered fraud detection",
      "Automated KYC processes",
      "Real-time transaction monitoring",
      "Compliance automation"
    ],
    outcomes: [
      { metric: "-75%", label: "Fraud Attempts" },
      { metric: "+60%", label: "Processing Speed" },
      { metric: "-85%", label: "Manual Review" }
    ],
    caseStudy: "FinTech startup reduced fraud by 75% with our ML system"
  },
  {
    name: "EdTech",
    icon: GraduationCap,
    color: "bg-purple-500/10 text-purple-500",
    description: "Adaptive learning platforms for modern education",
    challenges: [
      "Student engagement",
      "Personalized learning",
      "Assessment accuracy",
      "Progress tracking"
    ],
    solutions: [
      "Adaptive learning paths",
      "AI-powered assessments",
      "Real-time progress analytics",
      "Gamification features"
    ],
    outcomes: [
      { metric: "+65%", label: "Engagement" },
      { metric: "+48%", label: "Completion Rates" },
      { metric: "+35%", label: "Learning Outcomes" }
    ],
    caseStudy: "EdTech company improved student engagement by 65%"
  },
  {
    name: "HealthTech",
    icon: Heart,
    color: "bg-red-500/10 text-red-500",
    description: "Secure healthcare technology and patient management",
    challenges: [
      "Data privacy",
      "Patient workflows",
      "EHR integration",
      "Telemedicine"
    ],
    solutions: [
      "HIPAA-compliant systems",
      "Patient management platforms",
      "EHR integration solutions",
      "Telemedicine applications"
    ],
    outcomes: [
      { metric: "+55%", label: "Efficiency" },
      { metric: "-70%", label: "Paperwork" },
      { metric: "+40%", label: "Patient Satisfaction" }
    ],
    caseStudy: "Healthcare provider improved efficiency by 55%"
  },
  {
    name: "Enterprise Apps",
    icon: Settings,
    color: "bg-orange-500/10 text-orange-500",
    description: "Streamline business operations with custom applications",
    challenges: [
      "Workflow automation",
      "Data silos",
      "Legacy systems",
      "Employee productivity"
    ],
    solutions: [
      "Workflow automation platforms",
      "Data integration solutions",
      "Legacy system modernization",
      "Employee productivity tools"
    ],
    outcomes: [
      { metric: "+45%", label: "Productivity" },
      { metric: "-60%", label: "Manual Tasks" },
      { metric: "+50%", label: "Data Visibility" }
    ],
    caseStudy: "Enterprise client automated 60% of manual workflows"
  }
]

const process = [
  {
    icon: Users,
    title: "Industry Discovery",
    description: "Deep dive into your specific industry challenges and requirements"
  },
  {
    icon: Zap,
    title: "Solution Design",
    description: "Tailored solution architecture addressing your unique needs"
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Industry-specific compliance and security implementation"
  },
  {
    icon: BarChart,
    title: "Measurable Results",
    description: "Data-driven outcomes and continuous optimization"
  }
]

export default function SolutionsPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles] = useState(() => generateParticleData(54321, 15))
  
  // Parallax effects for different layers
  const layer1Y = useTransform(scrollY, [0, 1000], [0, -150])
  const layer2Y = useTransform(scrollY, [0, 1000], [0, -300])
  const layer3Y = useTransform(scrollY, [0, 1000], [0, -450])
  
  // Handle resize
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

  return (
    <div ref={containerRef} className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Base gradient layers */}
        <div className="absolute inset-0">
          {/* Deep space gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950"
            style={{ y: layer1Y }}
          />
          
          {/* Nebula effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-cyan-900/20"
            style={{ y: layer2Y }}
          />
          
          {/* Atmospheric haze */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-slate-900/50"
            style={{ y: layer3Y }}
          />
        </div>
        
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-indigo-500/10 blur-3xl"
          animate={{ 
            x: [0, 15, 0],
            y: [0, -25, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary/20"
            style={{
              top: `${particle.top.toFixed(4)}%`,
              left: `${particle.left.toFixed(4)}%`,
              width: `${particle.width.toFixed(4)}px`,
              height: `${particle.height.toFixed(4)}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (particle.left % 20) - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: (particle.width % 5) + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.delay
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4">Industry Solutions</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Specialized Solutions for Your Industry
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Industry-specific expertise combined with cutting-edge AI technology. 
                We understand your unique challenges and deliver tailored solutions.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Expertise</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Proven solutions across multiple verticals
              </p>
            </motion.div>

            <div className="space-y-12">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column - Industry Info */}
                        <div className="p-8">
                          <div className="flex items-center space-x-3 mb-4">
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${industry.color}`}>
                              <industry.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold">{industry.name}</h3>
                          </div>
                          <p className="text-muted-foreground mb-6">{industry.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Common Challenges</h4>
                            <div className="space-y-2">
                              {industry.challenges.map((challenge, i) => (
                                <div key={i} className="flex items-center text-sm">
                                  <div className="w-2 h-2 bg-destructive rounded-full mr-3"></div>
                                  {challenge}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold mb-3">Our Solutions</h4>
                            <div className="space-y-2">
                              {industry.solutions.map((solution, i) => (
                                <div key={i} className="flex items-center text-sm">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                                  {solution}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Outcomes */}
                        <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8">
                          <h4 className="font-semibold mb-6">Proven Results</h4>
                          <div className="grid grid-cols-3 gap-4 mb-8">
                            {industry.outcomes.map((outcome, i) => (
                              <div key={i} className="text-center">
                                <div className="text-2xl font-bold text-primary mb-1">
                                  {outcome.metric}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {outcome.label}
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <Card className="bg-background/50 backdrop-blur-sm border-border/50">
                            <CardContent className="p-4">
                              <div className="flex items-start space-x-3">
                                <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <div>
                                  <h5 className="font-semibold text-sm mb-1">Success Story</h5>
                                  <p className="text-xs text-muted-foreground">
                                    {industry.caseStudy}
                                  </p>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Industry-specific methodology for guaranteed success
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 text-center hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Industry
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Ready to leverage AI technology for your specific industry challenges? 
                Let's discuss how we can help you achieve similar results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">View Case Studies</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}