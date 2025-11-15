'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Search, 
  Code, 
  Cpu, 
  Cloud, 
  Shield, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap,
  BarChart
} from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const services = [
  {
    icon: Search,
    title: "Discovery & Design Sprint",
    description: "Validate your idea with research and prototyping",
    deliverables: [
      "Research report",
      "User journeys", 
      "Clickable prototype",
      "Prioritized roadmap"
    ],
    outcome: "Validate the idea and reduce risk",
    duration: "4-6 weeks",
    pricing: "Fixed scope",
    popular: false
  },
  {
    icon: Code,
    title: "MVP & Full Product Development",
    description: "From concept to production-ready application",
    deliverables: [
      "Production app",
      "CI/CD pipeline",
      "Automated tests",
      "Deployment guides"
    ],
    outcome: "Launch your product with confidence",
    duration: "6-12 weeks (MVP)",
    pricing: "Fixed scope + T&M",
    popular: true
  },
  {
    icon: Cpu,
    title: "Custom AI & ML Engineering",
    description: "Integrate intelligent capabilities into your products",
    deliverables: [
      "Model training pipelines",
      "Inference endpoints",
      "Monitoring systems",
      "Model registry"
    ],
    outcome: "Production-ready ML systems",
    duration: "8-16 weeks",
    pricing: "T&M",
    popular: false
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Build resilient, scalable infrastructure",
    deliverables: [
      "Infrastructure as Code",
      "Runbooks",
      "Observability dashboards",
      "Security configurations"
    ],
    outcome: "Reliable, scalable infrastructure",
    duration: "4-8 weeks",
    pricing: "T&M",
    popular: false
  },
  {
    icon: TrendingUp,
    title: "Maintenance & Growth",
    description: "Ongoing support and optimization",
    deliverables: [
      "Feature sprints",
      "Performance tuning",
      "Analytics setup",
      "Roadmap planning"
    ],
    outcome: "Continuous improvement",
    duration: "Ongoing",
    pricing: "Retainer",
    popular: false
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Ensure your product meets industry standards",
    deliverables: [
      "Penetration testing",
      "Threat modeling",
      "Data classification",
      "Compliance readiness"
    ],
    outcome: "Secure, compliant product",
    duration: "2-4 weeks",
    pricing: "Fixed scope",
    popular: false
  }
]

const techStack = {
  "Frontend": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  "Backend": ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
  "Mobile": ["React Native", "Flutter", "Swift", "Kotlin"],
  "AI/ML": ["TensorFlow", "PyTorch", "scikit-learn", "LLM APIs", "MLOps"],
  "Cloud": ["AWS", "GCP", "Azure", "Kubernetes", "Docker"],
  "DevOps": ["Terraform", "GitHub Actions", "Jenkins", "Prometheus", "Grafana"]
}

export default function ServicesPage() {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([])
  
  useEffect(() => {
    // Generate deterministic particles for consistent SSR/CSR
    const newParticles = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2
      })
    }
    setParticles(newParticles)
  }, [])

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-indigo-950/20 to-purple-950/30"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-purple-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full bg-cyan-500/10 blur-3xl animate-pulse"></div>
        
        {/* Floating particles */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, (particle.x % 20) - 10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: (particle.size % 3) + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: particle.id * 0.1
            }}
          />
        ))}
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="services-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
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
            <Badge className="mb-6 text-base py-1 px-4">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Modular Services for <span className="text-primary">Every Need</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-10">
              Pick full product delivery or specific engagements — design sprints, engineering, ML, or operations. 
              We adapt to your requirements and timeline.
            </p>
            <Button size="lg" className="group px-8 py-6 text-lg" asChild>
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  variant={service.popular ? "elevated" : index % 3 === 1 ? "glass" : "default"}
                  className={`h-full hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50 group ${service.popular ? 'border-primary/50 shadow-primary/20 relative' : ''}`}
                >
                  {service.popular && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground z-10">
                      <Zap className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center">
                          <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                          Deliverables
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {service.duration}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {service.pricing}
                        </Badge>
                      </div>
                      
                      <div className="pt-4 border-t border-border/50">
                        <p className="text-sm text-muted-foreground">
                          <span className="font-semibold">Outcome:</span> {service.outcome}
                        </p>
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
            className="text-center mb-16"
          >
            <Badge className="mb-4">Our Approach</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Research, requirements gathering, and planning" },
              { step: "02", title: "Design", description: "UX/UI design and prototyping" },
              { step: "03", title: "Develop", description: "Agile development with continuous feedback" },
              { step: "04", title: "Deploy", description: "Launch, monitor, and optimize" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Technology Stack</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tools We Use</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Modern tools and frameworks for building scalable applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, technologies], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-primary" />
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4">Pricing</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Models</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transparent pricing tailored to your project scope and requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Search className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Discovery Sprint</h3>
                  <div className="text-2xl font-bold text-primary mb-3">₹2L–₹6L</div>
                  <div className="text-sm text-muted-foreground mb-5">$3k–$8k</div>
                  <p className="text-sm mb-6">4–6 weeks of research and prototyping</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Research report & user interviews
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      User journeys & personas
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Clickable prototype
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-primary/50 shadow-primary/20 text-center h-full relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">MVP Development</h3>
                  <div className="text-2xl font-bold text-primary mb-3">₹6L–₹30L</div>
                  <div className="text-sm text-muted-foreground mb-5">$8k–$40k</div>
                  <p className="text-sm mb-6">6–12 weeks to launch your product</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Everything in Discovery
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Production-ready application
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      CI/CD pipeline setup
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Product Development</h3>
                  <div className="text-2xl font-bold text-primary mb-3">₹3L–₹20L</div>
                  <div className="text-sm text-muted-foreground mb-5">$4k–$25k / month</div>
                  <p className="text-sm mb-6">6+ months of ongoing development</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Everything in MVP
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Advanced features & integrations
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary mt-0.5 flex-shrink-0" />
                      Scalable architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Custom pricing available for enterprise projects and managed MLOps services
            </p>
            <Button size="lg" className="group px-8 py-6 text-lg" asChild>
              <Link href="/contact">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's build something amazing together
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Tell us about your project and we'll help you choose the right service package.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group px-8 py-6 text-lg" asChild>
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg" asChild>
                <Link href="/portfolio">See Examples</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}