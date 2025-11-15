'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Rocket, 
  Cpu, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Users,
  Zap,
  Shield,
  Star
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const products = [
  {
    name: "MatrixLaunch",
    subtitle: "MVP Kit",
    description: "6-week rapid MVP package from idea to launch",
    icon: Rocket,
    price: { inr: "From ₹8L", usd: "From $10k" },
    duration: "6 weeks",
    features: [
      "Discovery & validation sprint",
      "UX/UI design & prototyping", 
      "Core MVP development",
      "CI/CD pipeline setup",
      "Cloud deployment",
      "Basic analytics integration",
      "2-week post-launch support",
      "Technical documentation"
    ],
    idealFor: "Startups and enterprises looking to validate ideas quickly",
    techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "AWS"],
    popular: true
  },
  {
    name: "MatrixAI",
    subtitle: "ModelOps Platform",
    description: "Managed MLOps for production AI systems",
    icon: Cpu,
    price: { inr: "From ₹80k", usd: "From $1k" },
    duration: "Monthly subscription",
    features: [
      "Automated model training pipelines",
      "Model versioning & registry",
      "Real-time inference endpoints",
      "Performance monitoring & alerting",
      "A/B testing framework",
      "Automated retraining",
      "Explainability dashboards",
      "24/7 monitoring"
    ],
    idealFor: "Companies with ML models in production needing reliable operations",
    techStack: ["TensorFlow", "PyTorch", "Kubernetes", "MLflow", "Prometheus"],
    popular: false
  },
  {
    name: "MatrixScale",
    subtitle: "Cloud Platform",
    description: "Managed cloud infrastructure for sustained growth",
    icon: Cloud,
    price: { inr: "From ₹1.5L", usd: "From $2k" },
    duration: "Monthly subscription",
    features: [
      "Infrastructure as Code setup",
      "Auto-scaling configurations",
      "Load balancing & CDN",
      "Database optimization",
      "Security hardening",
      "Backup & disaster recovery",
      "Cost optimization",
      "Dedicated SRE support"
    ],
    idealFor: "Growing applications needing enterprise-grade infrastructure",
    techStack: ["AWS", "GCP", "Terraform", "Docker", "Kubernetes"],
    popular: false
  }
]

const benefits = [
  {
    icon: Zap,
    title: "Fast Deployment",
    description: "Get started within days, not months"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Built with security best practices from day one"
  },
  {
    icon: Users,
    title: "Expert Support",
    description: "Dedicated team of specialists for your success"
  }
]

const caseStudies = [
  {
    company: "RetailTech Startup",
    product: "MatrixLaunch",
    result: "Launched MVP in 5 weeks, raised seed funding"
  },
  {
    company: "FinTech Company", 
    product: "MatrixAI",
    result: "Reduced model deployment time by 80%"
  },
  {
    company: "SaaS Platform",
    product: "MatrixScale", 
    result: "Handled 10x traffic growth with zero downtime"
  }
]

export default function ProductsPage() {
  const [circles, setCircles] = useState<Array<{id: number, x: number, y: number, size: number, color: string}>>([])
  
  useEffect(() => {
    // Generate deterministic circles for consistent SSR/CSR
    const colors = ["bg-blue-500/10", "bg-purple-500/10", "bg-cyan-500/10", "bg-green-500/10"]
    const newCircles = []
    for (let i = 0; i < 15; i++) {
      newCircles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 50,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }
    setCircles(newCircles)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-pink-950/20 to-cyan-950/30"></div>
        
        {/* Floating circles */}
        {circles.map((circle) => (
          <motion.div
            key={circle.id}
            className={`absolute rounded-full ${circle.color} blur-2xl`}
            style={{
              left: `${circle.x}%`,
              top: `${circle.y}%`,
              width: `${circle.size}px`,
              height: `${circle.size}px`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: (circle.size % 5) + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: circle.id * 0.2
            }}
          />
        ))}
        
        {/* Animated dots pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full">
            <defs>
              <pattern id="products-dots" x="0" y="0" width="25" height="25" patternUnits="userSpaceOnUse">
                <circle cx="3" cy="3" r="2" fill="currentColor" className="text-purple-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#products-dots)" />
          </svg>
        </div>
        
        {/* Animated beams */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <linearGradient id="beam-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.5)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.5)" />
              </linearGradient>
            </defs>
            <g>
              <rect x="20%" y="0" width="2" height="100%" fill="url(#beam-gradient)" />
              <rect x="50%" y="0" width="2" height="100%" fill="url(#beam-gradient)" />
              <rect x="80%" y="0" width="2" height="100%" fill="url(#beam-gradient)" />
            </g>
          </svg>
        </div>
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
            <Badge className="mb-4">Products</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Productized Solutions for Every Need
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Pre-built, tested solutions that accelerate your development timeline. 
              From MVP launch to enterprise scale, we have you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Scalable solutions designed for modern businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative ${product.popular ? 'lg:scale-105' : ''}`}
              >
                {product.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground z-10">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <Card className={`h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 ${
                  product.popular ? 'border-primary/50 shadow-primary/20' : ''
                }`}
                variant={product.popular ? "elevated" : index % 2 === 0 ? "glass" : "default"}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <product.icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl">
                      {product.name}
                      <span className="block text-sm text-primary font-normal">
                        {product.subtitle}
                      </span>
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">{product.description}</p>
                    <div className="mt-4">
                      <div className="text-2xl font-bold text-primary">
                        {product.price.inr}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {product.price.usd}
                      </div>
                      <Badge variant="outline" className="mt-2">
                        {product.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="flex-1">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3">What's Included</h4>
                        <ul className="space-y-2">
                          {product.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Ideal For</h4>
                        <p className="text-sm text-muted-foreground">
                          {product.idealFor}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <Button 
                        className={`w-full mt-6 ${product.popular ? 'bg-primary' : ''}`}
                        variant={product.popular ? 'default' : 'outline'}
                        asChild
                      >
                        <Link href="/contact">
                          Get Started
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

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how our products have helped companies achieve their goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Badge variant="secondary" className="mb-3">
                        {study.product}
                      </Badge>
                      <h3 className="font-semibold mb-2">{study.company}</h3>
                      <p className="text-sm text-muted-foreground">
                        {study.result}
                      </p>
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
              Our products are great starting points, but we can also build completely custom solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group" asChild>
                <Link href="/contact">
                  Discuss Custom Solution
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}