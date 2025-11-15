'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  MapPin, 
  Users, 
  Heart, 
  Zap,
  ArrowRight,
  Send,
  Briefcase,
  Code,
  Cpu,
  Shield,
  Clock,
  DollarSign,
  GraduationCap,
  Award
} from 'lucide-react'
import Link from 'next/link'

const openPositions = [
  {
    id: 1,
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    experience: "5+ years",
    salary: "₹20L - ₹40L",
    icon: Code,
    color: "bg-blue-500/10 text-blue-500",
    responsibilities: [
      "Lead development of web applications using Next.js, React, and Node.js",
      "Design and implement scalable, maintainable architecture",
      "Mentor junior engineers and conduct code reviews",
      "Collaborate with product managers and designers",
      "Optimize application performance and security"
    ],
    requirements: [
      "5+ years of experience in full-stack development",
      "Strong proficiency in JavaScript/TypeScript",
      "Experience with React, Next.js, Node.js",
      "Knowledge of cloud platforms (AWS/GCP/Azure)",
      "Excellent problem-solving and communication skills"
    ],
    niceToHave: [
      "Experience with AI/ML integration",
      "Contributions to open-source projects",
      "Experience with microservices architecture",
      "Familiarity with DevOps practices"
    ]
  },
  {
    id: 2,
    title: "ML Engineer",
    department: "AI/ML",
    location: "Remote", 
    type: "Full-time",
    experience: "3+ years",
    salary: "₹18L - ₹35L",
    icon: Cpu,
    color: "bg-purple-500/10 text-purple-500",
    responsibilities: [
      "Design and implement machine learning models and pipelines",
      "Deploy models to production and monitor performance",
      "Collaborate with data scientists and engineers",
      "Optimize model inference latency and cost",
      "Stay updated with latest ML research and techniques"
    ],
    requirements: [
      "3+ years of experience in machine learning engineering",
      "Strong Python programming skills",
      "Experience with TensorFlow, PyTorch, or scikit-learn",
      "Knowledge of MLOps practices and tools",
      "Understanding of software engineering principles"
    ],
    niceToHave: [
      "Experience with LLMs and transformers",
      "Knowledge of computer vision",
      "Experience with cloud ML platforms",
      "Research publications or contributions"
    ]
  },
  {
    id: 3,
    title: "Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time", 
    experience: "3+ years",
    salary: "₹15L - ₹30L",
    icon: Briefcase,
    color: "bg-green-500/10 text-green-500",
    responsibilities: [
      "Create user-centered designs for web and mobile applications",
      "Conduct user research and usability testing",
      "Develop wireframes, prototypes, and high-fidelity designs",
      "Collaborate with engineers to ensure design implementation",
      "Maintain and evolve design systems"
    ],
    requirements: [
      "3+ years of experience in product design",
      "Proficiency in Figma, Sketch, or Adobe XD",
      "Strong portfolio demonstrating design process",
      "Understanding of UX principles and methodologies",
      "Excellent communication and presentation skills"
    ],
    niceToHave: [
      "Experience with design systems",
      "Knowledge of front-end development",
      "Animation and motion design skills",
      "Experience with AI-powered design tools"
    ]
  },
  {
    id: 4,
    title: "DevOps / SRE",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    experience: "4+ years", 
    salary: "₹18L - ₹35L",
    icon: Shield,
    color: "bg-orange-500/10 text-orange-500",
    responsibilities: [
      "Design and implement CI/CD pipelines",
      "Manage cloud infrastructure and deployments",
      "Monitor system performance and reliability",
      "Implement security best practices",
      "Automate operational processes"
    ],
    requirements: [
      "4+ years of experience in DevOps or SRE roles",
      "Strong knowledge of cloud platforms (AWS/GCP/Azure)",
      "Experience with containerization and orchestration",
      "Proficiency in infrastructure as code (Terraform)",
      "Understanding of monitoring and observability"
    ],
    niceToHave: [
      "Kubernetes expertise",
      "Experience with serverless architectures",
      "Security certifications",
      "Cost optimization experience"
    ]
  }
]

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-leading compensation with regular reviews"
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    description: "Work when you're most productive"
  },
  {
    icon: GraduationCap,
    title: "Learning Stipend",
    description: "Annual budget for courses and conferences"
  },
  {
    icon: MapPin,
    title: "Remote-First",
    description: "Work from anywhere in the world"
  },
  {
    icon: Heart,
    title: "Health Coverage",
    description: "Comprehensive health insurance for you and your family"
  },
  {
    icon: Award,
    title: "Equity Options",
    description: "Stock options for senior positions"
  }
]

const culture = [
  {
    icon: Users,
    title: "Small Teams",
    description: "Work in focused, collaborative teams where your impact matters"
  },
  {
    icon: Zap,
    title: "Ownership Culture",
    description: "Take ownership of projects from concept to deployment"
  },
  {
    icon: Heart,
    title: "Continuous Learning",
    description: "Stay curious with regular learning opportunities and challenges"
  }
]

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null)
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    position: '',
    resume: '',
    portfolio: '',
    message: ''
  })

  const handleApplication = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle application submission
    console.log('Application submitted:', applicationForm)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4">Careers</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join TechMatrix-AI
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Build products that matter. Work with a team that values innovation, 
              growth, and work-life balance. Remote-first with competitive benefits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Culture</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We celebrate curiosity, ownership, and cross-functional skills
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We take care of our team so they can focus on doing their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our team of talented engineers and designers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {openPositions.map((position) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${position.color}`}>
                          <position.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{position.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{position.department}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="text-xs">
                          {position.type}
                        </Badge>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {position.location}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Briefcase className="w-3 h-3 mr-1" />
                        {position.experience}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {position.salary}
                      </Badge>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Key Responsibilities</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {position.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => setSelectedPosition(position.id)}
                      >
                        {selectedPosition === position.id ? 'Hide Details' : 'View Details & Apply'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Expanded Details */}
                {selectedPosition === position.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Requirements</h4>
                            <ul className="text-sm space-y-2">
                              {position.requirements.map((req, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Nice to Have</h4>
                            <ul className="text-sm space-y-2">
                              {position.niceToHave.map((nice, i) => (
                                <li key={i} className="flex items-start">
                                  <span className="w-1 h-1 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                  {nice}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t border-border/50">
                          <h4 className="font-semibold mb-3">Apply for this Position</h4>
                          <form onSubmit={handleApplication} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <Label htmlFor="name">Name *</Label>
                                <Input
                                  id="name"
                                  value={applicationForm.name}
                                  onChange={(e) => setApplicationForm(prev => ({ ...prev, name: e.target.value }))}
                                  required
                                />
                              </div>
                              <div>
                                <Label htmlFor="email">Email *</Label>
                                <Input
                                  id="email"
                                  type="email"
                                  value={applicationForm.email}
                                  onChange={(e) => setApplicationForm(prev => ({ ...prev, email: e.target.value }))}
                                  required
                                />
                              </div>
                            </div>
                            
                            <div>
                              <Label htmlFor="resume">Resume/GitHub Link *</Label>
                              <Input
                                id="resume"
                                value={applicationForm.resume}
                                onChange={(e) => setApplicationForm(prev => ({ ...prev, resume: e.target.value }))}
                                placeholder="https://linkedin.com/in/yourprofile or resume link"
                                required
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="portfolio">Portfolio (Optional)</Label>
                              <Input
                                id="portfolio"
                                value={applicationForm.portfolio}
                                onChange={(e) => setApplicationForm(prev => ({ ...prev, portfolio: e.target.value }))}
                                placeholder="https://yourportfolio.com"
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="message">Why are you interested in this role?</Label>
                              <Textarea
                                id="message"
                                value={applicationForm.message}
                                onChange={(e) => setApplicationForm(prev => ({ ...prev, message: e.target.value }))}
                                rows={4}
                                placeholder="Tell us about your experience and why you'd be a great fit..."
                              />
                            </div>
                            
                            <Button type="submit" className="w-full">
                              <Send className="w-4 h-4 mr-2" />
                              Submit Application
                            </Button>
                          </form>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
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
              Don't see the perfect role?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll 
              keep you in mind for future opportunities.
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/contact">
                Send Open Application
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}  