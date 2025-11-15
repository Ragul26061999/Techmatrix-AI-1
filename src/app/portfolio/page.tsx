'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  BarChart, 
  ShoppingCart, 
  GraduationCap, 
  Heart, 
  Building,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  Users
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const caseStudies = [
  {
    title: "SmartRetail — Personalized Commerce Platform",
    client: "Leading Retail Chain",
    challenge: "Low repeat purchase rate, generic recommendations",
    solution: "Hybrid collaborative-filtering + embedding model, dynamic promotions, revamped UX",
    stack: ["Next.js", "Python (FastAPI)", "PostgreSQL", "Redis", "AWS SageMaker"],
    impact: {
      conversion: "+26%",
      aov: "+18%",
      timeline: "90 days"
    },
    duration: "4 months",
    role: "End-to-end product + models + infra",
    quote: "We saw conversion jump within 6 weeks of deployment. The personalization engine transformed our customer experience.",
    category: "Retail"
  },
  {
    title: "FinSecure — Automated KYC & Fraud Detection",
    client: "Fintech Startup",
    challenge: "Manual KYC processes, high fraud rates",
    solution: "Computer vision for document verification, ML-based fraud detection, API integration",
    stack: ["React Native", "Node.js", "TensorFlow", "AWS", "PostgreSQL"],
    impact: {
      processing: "-85%",
      fraud: "-72%",
      approval: "+40%"
    },
    duration: "6 months",
    role: "Mobile app + ML models + backend",
    quote: "Processing time dropped from days to minutes. Fraud detection accuracy improved dramatically.",
    category: "Fintech"
  },
  {
    title: "EduLearn — Adaptive Learning Platform",
    client: "EdTech Company",
    challenge: "One-size-fits-all content, low engagement",
    solution: "Personalized learning paths, adaptive assessments, real-time progress tracking",
    stack: ["Next.js", "Python", "React Native", "MongoDB", "GCP"],
    impact: {
      engagement: "+64%",
      completion: "+45%",
      retention: "+38%"
    },
    duration: "5 months",
    role: "Web platform + mobile app + recommendation engine",
    quote: "Student engagement skyrocketed. The adaptive learning paths keep users motivated and progressing.",
    category: "EdTech"
  },
  {
    title: "HealthConnect — Patient Management System",
    client: "Healthcare Provider",
    challenge: "Fragmented patient data, inefficient workflows",
    solution: "Unified patient dashboard, EHR integration, AI-powered triage system",
    stack: ["React", "Node.js", "Python", "AWS", "PostgreSQL"],
    impact: {
      efficiency: "+52%",
      errors: "-68%",
      satisfaction: "+41%"
    },
    duration: "8 months",
    role: "Full-stack development + HIPAA compliance + integration",
    quote: "Clinician efficiency improved significantly while reducing errors. The system transformed our operations.",
    category: "HealthTech"
  },
  {
    title: "EnterpriseFlow — Workflow Automation",
    client: "Manufacturing Company",
    challenge: "Manual processes, poor visibility",
    solution: "Custom workflow engine, real-time dashboards, automated notifications",
    stack: ["Vue.js", "Node.js", "Python", "Docker", "Kubernetes"],
    impact: {
      productivity: "+73%",
      costs: "-46%",
      visibility: "+89%"
    },
    duration: "6 months",
    role: "Platform development + DevOps + automation",
    quote: "Operational efficiency improved across all departments. Real-time visibility is a game-changer.",
    category: "Enterprise"
  },
  {
    title: "SocialHub — Community Platform",
    client: "Media Company",
    challenge: "Low user engagement, poor content discovery",
    solution: "Social features, content recommendation, real-time messaging",
    stack: ["React Native", "Next.js", "Node.js", "Redis", "AWS"],
    impact: {
      engagement: "+127%",
      sessions: "+94%",
      retention: "+58%"
    },
    duration: "4 months",
    role: "Mobile + web development + recommendation system",
    quote: "User engagement surpassed all expectations. The platform became central to our community.",
    category: "Social"
  }
]

const categoryIcons: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
  "Retail": ShoppingCart,
  "Fintech": Building,
  "EdTech": GraduationCap,
  "HealthTech": Heart,
  "Enterprise": Building,
  "Social": Users
}

export default function PortfolioPage() {
  const [waves, setWaves] = useState<Array<{id: number, x: number, y: number, width: number, height: number}>>([])
  
  useEffect(() => {
    // Generate deterministic waves for consistent SSR/CSR
    const newWaves = []
    for (let i = 0; i < 8; i++) {
      newWaves.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        width: Math.random() * 200 + 100,
        height: Math.random() * 40 + 20
      })
    }
    setWaves(newWaves)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-emerald-950/20 to-teal-950/30"></div>
        
        {/* Floating waves */}
        {waves.map((wave) => (
          <motion.div
            key={wave.id}
            className="absolute border-t-2 border-green-400/30 rounded-full"
            style={{
              left: `${wave.x}%`,
              top: `${wave.y}%`,
              width: `${wave.width}px`,
              height: `${wave.height}px`,
            }}
            animate={{
              scaleX: [1, 1.2, 1],
              opacity: [0.2, 0.5, 0.2],
              translateY: [0, -10, 0],
            }}
            transition={{
              duration: (wave.width % 5) + 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: wave.id * 0.4
            }}
          />
        ))}
        
        {/* Animated zigzag pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="portfolio-zigzag" patternUnits="userSpaceOnUse" width="30" height="30" patternTransform="rotate(0)">
                <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-green-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#portfolio-zigzag)" />
          </svg>
        </div>
        
        {/* Floating diamonds */}
        <div className="absolute top-1/5 left-1/5 w-8 h-8 bg-green-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-10 h-10 bg-emerald-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/6 w-6 h-6 bg-teal-400/20 rotate-45 animate-pulse"></div>
      </div>
      
      {/* Content */}
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4">Portfolio</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Success Stories That Speak
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real results from real projects. See how we've helped companies transform their businesses with AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = categoryIcons[study.category] || BarChart
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group"
                  variant={index % 3 === 0 ? "elevated" : index % 3 === 1 ? "glass" : "default"}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-xs">
                          <IconComponent className="w-3 h-3 mr-1" />
                          {study.category}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {study.duration}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{study.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </CardHeader>
                    
                    <CardContent className="flex-1">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{study.solution}</p>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technology Stack</h4>
                          <div className="flex flex-wrap gap-1">
                            {study.stack.map((tech) => (
                              <Badge key={tech} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Impact</h4>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {Object.entries(study.impact).map(([key, value]) => (
                              <div key={key} className="bg-primary/10 rounded p-2">
                                <div className="text-lg font-bold text-primary">{value}</div>
                                <div className="text-xs text-muted-foreground capitalize">
                                  {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                          "{study.quote}"
                        </blockquote>

                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="w-full group">
                            View Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">By the Numbers</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Measurable impact across all our projects
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to create your success story?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}