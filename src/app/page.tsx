'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Users, Zap, Shield, BarChart, Code, Cpu, Cloud, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { AdvancedAnimatedBackground } from '@/components/ui/advanced-animated-background'

export default function Home() {
  const { scrollY } = useScroll()

  const heroY = useTransform(scrollY, [0, 300], [0, -100])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <div className="relative min-h-screen bg-background">
      {/* Advanced Animated Background */}
      <AdvancedAnimatedBackground />

      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Top Badges */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3 mb-8 mt-30"
            >
             
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mt-10 mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Transform Your Business with
              <span className="block text-primary">AI-Powered Solutions</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              End-to-end AI, web, and mobile app engineering — from product design to ML integration, 
              cloud deployment, and ongoing growth. We ship production-ready software that scales.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Button size="lg" className="group px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link href="/portfolio">View Case Studies</Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "98%", label: "On-Time Delivery" },
                { number: "24h", label: "Response Time" },
                { number: "4.9/5", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Device Mockups */}
            <motion.div
              className="relative max-w-5xl mx-auto"
              initial={{ opacity: 5, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Laptop Mockup */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-4 shadow-2xl border border-slate-700">
                    <div className="bg-slate-950 rounded p-4">
                      <div className="flex space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-primary to-primary/60 rounded w-3/4"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        <div className="h-2 bg-slate-700 rounded w-2/3"></div>
                        <div className="h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded mt-4 flex items-center justify-center">
                          <Code className="w-12 h-12 text-primary/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone Mockup */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-3 shadow-2xl border border-slate-700 max-w-xs mx-auto">
                    <div className="bg-slate-950 rounded-2xl p-4">
                      <div className="h-6 bg-slate-800 rounded-full mb-4"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gradient-to-r from-primary to-primary/60 rounded w-2/3"></div>
                        <div className="h-2 bg-slate-700 rounded w-1/2"></div>
                        <div className="h-24 bg-gradient-to-br from-primary/10 to-primary/5 rounded mt-4 flex items-center justify-center">
                          <Cpu className="w-8 h-8 text-primary/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problems We Solve Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Common Challenges</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Problems We Solve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Common challenges that stop businesses from reaching their potential
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Slow Time to Market",
                description: "Rapid product sprints and MVP launches in 6-12 weeks."
              },
              {
                icon: Shield,
                title: "Unreliable Infrastructure",
                description: "Cloud-native, resilient architectures with 99.9% uptime."
              },
              {
                icon: BarChart,
                title: "Weak Product-Market Fit",
                description: "UX-first research, prototypes, and validated experiments."
              }
            ].map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 bg-card/50 backdrop-blur-sm border-border/50 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                      <problem.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Expertise</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              End-to-end product development with AI at the core
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Product Design & Discovery",
                description: "Research, personas, prototypes, user testing."
              },
              {
                icon: Code,
                title: "Web & Mobile Engineering",
                description: "React/Next.js, React Native, Flutter, TypeScript."
              },
              {
                icon: Cpu,
                title: "AI & ML Integration",
                description: "Custom models, LLMs, recommendation engines, MLOps."
              },
              {
                icon: Cloud,
                title: "Cloud & DevOps",
                description: "AWS/GCP/Azure, CI/CD, infra as code, observability."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Success Story</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Case Study</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <Badge className="mb-4 bg-primary text-primary-foreground">Case Study</Badge>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      SmartRetail — Personalized Commerce Platform
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Low repeat purchase rate and generic recommendations were hurting conversion. 
                      We implemented a hybrid collaborative-filtering model with dynamic promotions.
                    </p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">+26%</div>
                        <div className="text-sm text-muted-foreground">Conversion</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">+18%</div>
                        <div className="text-sm text-muted-foreground">AOV</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">90 days</div>
                        <div className="text-sm text-muted-foreground">Timeline</div>
                      </div>
                    </div>
                    <Button asChild size="lg" className="group">
                      <Link href="/portfolio">
                        View Full Case Study
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                  <div className="relative">
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg p-6 shadow-2xl border border-slate-700">
                      <div className="bg-slate-950 rounded p-4">
                        <div className="flex items-center justify-center h-48">
                          <BarChart className="w-24 h-24 text-primary/50" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Client Feedback</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "TechMatrix-AI transformed our digital presence. Their AI recommendations increased our conversion by 26% in just 90 days.",
                author: "Sarah Johnson",
                role: "CTO, RetailCorp",
                company: "RetailCorp"
              },
              {
                quote: "The team delivered our MVP in record time while maintaining the highest quality standards. Their expertise in AI is unmatched.",
                author: "Michael Chen",
                role: "Product Director, FinTechX",
                company: "FinTechX"
              },
              {
                quote: "Working with TechMatrix-AI was a game-changer for our business. Their approach to problem-solving is both innovative and practical.",
                author: "Priya Sharma",
                role: "CEO, EduTech Solutions",
                company: "EduTech Solutions"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{testimonial.author}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <TrendingUp key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Let's discuss how we can help you launch your next AI-powered product with our proven methodology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Request a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}