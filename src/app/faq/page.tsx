'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ChevronDown, 
  ChevronUp,
  Clock,
  Shield,
  Users,
  Code,
  ArrowRight,
  HelpCircle
} from 'lucide-react'
import Link from 'next/link'

const faqCategories = [
  {
    name: "General",
    icon: HelpCircle,
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    name: "Process",
    icon: Clock,
    color: "bg-green-500/10 text-green-500"
  },
  {
    name: "Technical",
    icon: Code,
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    name: "Legal & Security",
    icon: Shield,
    color: "bg-red-500/10 text-red-500"
  }
]

const faqs = [
  {
    category: "General",
    question: "What is TechMatrix-AI?",
    answer: "TechMatrix-AI is a full-stack development company specializing in AI-powered web and mobile applications. We help startups and enterprises build, launch, and scale intelligent software products."
  },
  {
    category: "General",
    question: "What industries do you work with?",
    answer: "We work across various industries including retail, fintech, edtech, healthtech, and enterprise applications. Our expertise in AI/ML allows us to adapt to any domain requiring intelligent solutions."
  },
  {
    category: "General",
    question: "How long have you been in business?",
    answer: "Our team brings together 50+ years of combined experience in software development, with a focus on AI/ML for the past 5 years. We've successfully delivered 50+ projects across different industries."
  },
  {
    category: "Process",
    question: "How long does it take to build an MVP?",
    answer: "Typically 6-12 weeks depending on complexity. A discovery sprint can help validate requirements and potentially reduce this timeline. Factors affecting timeline include feature complexity, integration requirements, and team availability."
  },
  {
    category: "Process",
    question: "What is your development process?",
    answer: "We follow an agile methodology with 2-week sprints. Our process includes: Discovery (research & planning), Design (UX/UI & prototyping), Development (iterative builds), Testing (quality assurance), and Deployment (launch & monitoring)."
  },
  {
    category: "Process",
    question: "How do you handle project communication?",
    answer: "We use Slack for daily communication, conduct weekly progress meetings, and provide bi-weekly demos. Clients get access to our project management tools to track progress in real-time."
  },
  {
    category: "Process",
    question: "Can you work with our existing team?",
    answer: "Absolutely! We can integrate seamlessly with your team as consultants, augment your staff, or take ownership of specific components. We're experienced in collaborative development environments."
  },
  {
    category: "Technical",
    question: "What technology stack do you use?",
    answer: "We're polyglot but commonly use: Frontend (Next.js, React, TypeScript), Backend (Node.js, Python), Mobile (React Native, Flutter), Databases (PostgreSQL, MongoDB), Cloud (AWS, GCP, Azure), and AI/ML frameworks (TensorFlow, PyTorch)."
  },
  {
    category: "Technical",
    question: "Do you provide ongoing maintenance?",
    answer: "Yes, we offer various maintenance packages from basic bug fixes to 24/7 support with guaranteed response times. Maintenance includes updates, security patches, performance optimization, and feature enhancements."
  },
  {
    category: "Technical",
    question: "Can you help with existing applications?",
    answer: "Yes, we can modernize legacy applications, add new features, improve performance, and migrate to modern tech stacks. We start with a technical audit to understand the current state."
  },
  {
    category: "Technical",
    question: "What about scalability and performance?",
    answer: "We build with scalability in mind using cloud-native architectures, microservices, and performance monitoring. Our solutions are designed to handle growth from 100 to 1M+ users."
  },
  {
    category: "Legal & Security",
    question: "Do you sign NDAs?",
    answer: "Yes, we sign NDAs before any discovery work. We take confidentiality seriously and have standard NDAs ready, or we can work with your legal team on custom agreements."
  },
  {
    category: "Legal & Security",
    question: "Who owns the intellectual property?",
    answer: "You own all IP rights to the final deliverables. We retain rights to our reusable components and tools but grant you a perpetual license to use them in your project."
  },
  {
    category: "Legal & Security",
    question: "What about data security and privacy?",
    answer: "We follow industry best practices for data security, including encryption, access controls, and regular security audits. We're GDPR-compliant and can adapt to other regulatory requirements."
  },
  {
    category: "Legal & Security",
    question: "What are your payment terms?",
    answer: "We typically work with milestone-based payments: 30% upfront, 40% at mid-project, and 30% on delivery. For longer engagements, we offer monthly billing with NET 30 terms."
  },
  {
    category: "Legal & Security",
    question: "Do you provide contracts and SLAs?",
    answer: "Yes, we provide detailed Master Services Agreements (MSA) and Statements of Work (SOW) for each project. We also offer Service Level Agreements for ongoing support with guaranteed uptime and response times."
  }
]

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())

  const filteredFAQs = selectedCategory 
    ? faqs.filter(faq => faq.category === selectedCategory)
    : faqs

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/30 via-purple-950/20 to-pink-950/30"></div>
        
        {/* Floating question marks */}
        <div className="absolute top-1/4 left-1/4 text-4xl text-indigo-400/20 font-bold">?</div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl text-purple-400/20 font-bold">?</div>
        <div className="absolute top-1/3 right-1/3 text-3xl text-pink-400/20 font-bold">?</div>
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full">
            <defs>
              <pattern id="faq-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-indigo-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#faq-dots)" />
          </svg>
        </div>
        
        {/* Floating squares */}
        <div className="absolute top-1/5 left-1/6 w-6 h-6 bg-indigo-400/20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-8 h-8 bg-purple-400/20 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-5 h-5 bg-pink-400/20 animate-pulse"></div>
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
            <Badge className="mb-4">FAQ</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about working with TechMatrix-AI. Can't find what you're looking for? 
              <Link href="/contact" className="text-primary hover:underline ml-1">
                Get in touch
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="group"
            >
              All Categories
              {selectedCategory === null && (
                <ChevronUp className="ml-2 h-4 w-4" />
              )}
            </Button>
            {faqCategories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.name)}
                  className="group"
                >
                  <IconComponent className="w-4 h-4 mr-2" />
                  {category.name}
                  {selectedCategory === category.name && (
                    <ChevronUp className="ml-2 h-4 w-4" />
                  )}
                </Button>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => {
              const categoryInfo = faqCategories.find(c => c.name === faq.category)
              const IconComponent = categoryInfo?.icon || HelpCircle
              const isExpanded = expandedItems.has(index)
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden"
                  variant={index % 3 === 0 ? "elevated" : index % 3 === 1 ? "glass" : "default"}
                  >
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="w-full text-left p-6 hover:bg-card/80 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3 flex-1">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${categoryInfo?.color}`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <h3 className="font-semibold text-lg">{faq.question}</h3>
                                <Badge variant="outline" className="text-xs">
                                  {faq.category}
                                </Badge>
                              </div>
                              <AnimatePresence>
                                {isExpanded && (
                                  <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-muted-foreground"
                                  >
                                    {faq.answer}
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </div>
                          </div>
                          <div className="ml-4">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-muted-foreground" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-muted-foreground" />
                            )}
                          </div>
                        </div>
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Quick Facts</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "6-12", label: "Weeks for MVP" },
              { number: "2", label: "Week Sprints" },
              { number: "98%", label: "On-Time Delivery" },
              { number: "24h", label: "Response Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
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
              Still have questions?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're here to help. Get in touch with our team for personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}