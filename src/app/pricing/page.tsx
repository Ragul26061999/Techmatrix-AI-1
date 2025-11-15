'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Check, 
  X, 
  ArrowRight,
  Zap,
  Users,
  Shield,
  Clock,
  Star,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'
import { useEffect } from 'react'

const plans = [
  {
    name: "Discovery Sprint",
    description: "Validate your idea with research and prototyping",
    price: { inr: "₹2L–₹6L", usd: "$3k–$8k" },
    duration: "4–6 weeks",
    icon: Zap,
    features: [
      "Research report & user interviews",
      "User journeys & personas",
      "Clickable prototype",
      "Prioritized roadmap",
      "Technical feasibility assessment",
      "Market analysis",
      "2-week iteration cycles",
      "Final presentation & handoff"
    ],
    notIncluded: [
      "Production development",
      "Ongoing support",
      "Advanced analytics"
    ],
    popular: false,
    cta: "Start Discovery"
  },
  {
    name: "MVP Development",
    description: "Launch your minimum viable product",
    price: { inr: "₹6L–₹30L", usd: "$8k–$40k" },
    duration: "6–12 weeks",
    icon: Users,
    features: [
      "Everything in Discovery",
      "Production-ready application",
      "CI/CD pipeline setup",
      "Automated testing suite",
      "Deployment & hosting",
      "Basic analytics setup",
      "Performance optimization",
      "Documentation & training",
      "3-month support warranty"
    ],
    notIncluded: [
      "Advanced ML features",
      "Custom integrations",
      "Ongoing maintenance"
    ],
    popular: true,
    cta: "Build MVP"
  },
  {
    name: "Product Development",
    description: "Full-scale product development & growth",
    price: { inr: "₹3L–₹20L", usd: "$4k–$25k" },
    duration: "6+ months",
    icon: Shield,
    features: [
      "Everything in MVP",
      "Advanced features & integrations",
      "AI/ML capabilities",
      "Scalable architecture",
      "Advanced analytics & monitoring",
      "A/B testing framework",
      "Feature sprints",
      "Dedicated team",
      "Priority support",
      "Regular roadmap planning"
    ],
    notIncluded: [
      "Custom compliance requirements"
    ],
    popular: false,
    cta: "Discuss Project"
  }
]

const addOns = [
  {
    name: "Managed MLOps",
    price: { inr: "From ₹80k", usd: "From $1k" },
    period: "per month",
    features: [
      "Model training pipelines",
      "Inference endpoints",
      "Model monitoring",
      "A/B testing for models",
      "Automated retraining"
    ]
  },
  {
    name: "Priority Support",
    price: { inr: "From ₹40k", usd: "From $500" },
    period: "per month",
    features: [
      "24/7 support availability",
      "1-hour response time",
      "Dedicated support engineer",
      "Monthly health checks",
      "Emergency hotfixes"
    ]
  },
  {
    name: "Security Audit",
    price: { inr: "From ₹1.5L", usd: "From $2k" },
    period: "one-time",
    features: [
      "Penetration testing",
      "Security assessment",
      "Compliance review",
      "Security recommendations",
      "Implementation support"
    ]
  }
]

const faqs = [
  {
    question: "What payment terms do you offer?",
    answer: "We typically work with milestone-based payments: 30% upfront, 40% at mid-project, and 30% on delivery. For longer engagements, we offer monthly billing."
  },
  {
    question: "Who owns the intellectual property?",
    answer: "You own all IP rights to the final deliverables. We retain rights to our reusable components and tools, but grant you a perpetual license to use them."
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We can integrate with your team as consultants, augment your staff, or take full ownership of specific components."
  },
  {
    question: "What if the project scope changes?",
    answer: "We use agile methodology to accommodate changes. Scope adjustments are documented with clear impact on timeline and budget before implementation."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support packages from basic maintenance to 24/7 priority support with guaranteed response times."
  }
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const [hexagons, setHexagons] = useState<Array<{id: number, x: number, y: number, size: number}>>([])
  
  useEffect(() => {
    // Generate deterministic hexagons for consistent SSR/CSR
    const newHexagons = []
    for (let i = 0; i < 12; i++) {
      newHexagons.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 60 + 30
      })
    }
    setHexagons(newHexagons)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/30 via-blue-950/20 to-indigo-950/30"></div>
        
        {/* Floating hexagons */}
        {hexagons.map((hexagon) => (
          <motion.div
            key={hexagon.id}
            className="absolute border-2 border-cyan-400/20 rotate-45"
            style={{
              left: `${hexagon.x}%`,
              top: `${hexagon.y}%`,
              width: `${hexagon.size}px`,
              height: `${hexagon.size}px`,
            }}
            animate={{
              rotate: [45, 405, 45],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: (hexagon.size % 5) + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: hexagon.id * 0.3
            }}
          />
        ))}
        
        {/* Animated waves */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full">
            <defs>
              <pattern id="pricing-waves" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 50 Q 25 30, 50 50 T 100 50" fill="none" stroke="currentColor" strokeWidth="1" className="text-cyan-300" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-waves)" />
          </svg>
        </div>
        
        {/* Floating triangles */}
        <div className="absolute top-1/4 left-1/3 w-16 h-16 border-t-8 border-r-8 border-transparent border-l-cyan-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-20 h-20 border-t-8 border-r-8 border-transparent border-l-cyan-400/20 rotate-45 animate-pulse"></div>
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
            <Badge className="mb-4">Pricing</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transparent Pricing for Every Scale
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect package for your project. Fixed pricing for clear scope, flexible options for evolving needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <Card className={`h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 ${
                  plan.popular ? 'border-primary/50 shadow-primary/20' : ''
                }`}>
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground text-sm">{plan.description}</p>
                    <div className="mt-4">
                      <div className="text-3xl font-bold text-primary">
                        {plan.price.inr}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {plan.price.usd}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        <Clock className="w-3 h-3 mr-1" />
                        {plan.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <Check className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {plan.notIncluded.length > 0 && (
                        <div>
                          <h4 className="font-semibold mb-3">Not Included</h4>
                          <ul className="space-y-2">
                            {plan.notIncluded.map((feature, i) => (
                              <li key={i} className="flex items-start text-sm text-muted-foreground">
                                <X className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <Button 
                        className={`w-full mt-6 ${plan.popular ? 'bg-primary' : ''}`}
                        variant={plan.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <Link href="/contact">
                          {plan.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Add-on Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Enhance your project with specialized services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {addOns.map((addOn, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50"
                variant={index === 0 ? "elevated" : index === 1 ? "glass" : "default"}
                >
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{addOn.name}</h3>
                    <div className="mb-4">
                      <div className="text-xl font-bold text-primary">{addOn.price.inr}</div>
                      <div className="text-sm text-muted-foreground">{addOn.price.usd}</div>
                      <div className="text-xs text-muted-foreground">{addOn.period}</div>
                    </div>
                    <ul className="space-y-1">
                      {addOn.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <Check className="w-3 h-3 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Common questions about our pricing and engagement models
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-3">
                      <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Every project is unique. Let's discuss your specific requirements and create a tailored proposal.
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}