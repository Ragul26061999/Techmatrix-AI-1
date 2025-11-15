'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Lightbulb, 
  Users, 
  Target, 
  Award,
  ArrowRight,
  Zap,
  Globe,
  Heart
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

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We push boundaries with cutting-edge AI solutions that redefine what's possible."
  },
  {
    icon: Users,
    title: "People-Centric",
    description: "Your success is our success. We build lasting partnerships based on trust."
  },
  {
    icon: Target,
    title: "Precision Delivery",
    description: "Every project is executed with meticulous attention to detail and quality."
  },
  {
    icon: Award,
    title: "Excellence Standard",
    description: "We don't just meet expectations - we exceed them consistently."
  }
]

const team = [
  {
    name: "Alex Morgan",
    role: "Founder & CEO",
    experience: "15+ years in AI & Machine Learning",
    bio: "Former AI Research Lead at Google with a PhD in Deep Learning from Stanford."
  },
  {
    name: "Sarah Johnson",
    role: "CTO",
    experience: "Former Google & Microsoft Engineering Lead",
    bio: "Built scalable systems serving 100M+ users. Expert in distributed systems and AI infrastructure."
  },
  {
    name: "Michael Chen",
    role: "Head of Product",
    experience: "Built products used by 50M+ users",
    bio: "Product strategist with experience at leading tech companies. Focuses on user-centric design."
  },
  {
    name: "Priya Sharma",
    role: "AI Research Director",
    experience: "PhD in Deep Learning, Published Researcher",
    bio: "Published researcher in neural networks and computer vision. Leads our AI innovation initiatives."
  }
]

const milestones = [
  { year: "2019", event: "Founded with a vision to democratize AI" },
  { year: "2020", event: "First enterprise client partnership" },
  { year: "2021", event: "Launched our proprietary AI platform" },
  { year: "2022", event: "Reached $10M in annual revenue" },
  { year: "2023", event: "Expanded to global markets" },
  { year: "2024", event: "Recognized as Top AI Innovator" }
]

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles] = useState(() => generateParticleData(12345, 15))
  
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
            className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950"
            style={{ y: layer1Y }}
          />
          
          {/* Nebula effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20"
            style={{ y: layer2Y }}
          />
          
          {/* Atmospheric haze */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-slate-900/50"
            style={{ y: layer3Y }}
          />
        </div>
        
        {/* Floating gradient orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"
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
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl"
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
          className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl"
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
        <section className="relative py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 text-base py-1 px-4">About TechMatrix-AI</Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                Shaping the Future with <span className="text-primary">AI Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
                We're a team of passionate innovators, engineers, and visionaries 
                dedicated to transforming businesses through artificial intelligence.
              </p>
              <Button size="lg" className="group px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Start Your AI Journey
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  To empower businesses of all sizes with accessible, ethical, and transformative 
                  AI solutions that drive innovation, efficiency, and growth.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  We believe that artificial intelligence should be a force for good - enhancing 
                  human capabilities rather than replacing them, and creating opportunities 
                  for everyone to thrive in the digital age.
                </p>
                <div className="flex items-center text-muted-foreground">
                  <Zap className="w-5 h-5 mr-2 text-primary" />
                  <span>Delivering measurable business impact through AI</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  A world where AI augments human potential, solves complex challenges, 
                  and creates sustainable value for businesses and society.
                </p>
                <p className="text-muted-foreground text-lg mb-8">
                  We envision a future where every organization, regardless of size or industry, 
                  can harness the power of AI to unlock new possibilities and achieve unprecedented success.
                </p>
                <div className="flex items-center text-muted-foreground">
                  <Heart className="w-5 h-5 mr-2 text-primary" />
                  <span>Creating technology that serves humanity</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Our Principles</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Values</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 text-center hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Leadership</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The minds behind our innovation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-8 text-center">
                      <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                        <Users className="w-12 h-12 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary text-base mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                      <p className="text-sm text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Journey</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Milestones that shaped who we are today
              </p>
            </motion.div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20"></div>
              
              <div className="space-y-16">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                      <div className="inline-block">
                        <div className="text-lg font-semibold text-primary mb-2">{milestone.year}</div>
                        <div className="text-muted-foreground bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-sm">
                          {milestone.event}
                        </div>
                      </div>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">By The Numbers</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Measurable impact across all our projects
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "26%", label: "Avg Conversion Lift" },
                { number: "4.8", label: "Client Satisfaction" },
                { number: "98%", label: "On-Time Delivery" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
                Join hundreds of forward-thinking companies leveraging our AI solutions 
                to drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group px-8 py-6 text-lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}