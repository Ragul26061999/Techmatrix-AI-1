'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Search, 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  BookOpen,
  Code,
  Lightbulb,
  Shield,
  TrendingUp,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

const blogPosts = [
  {
    id: 1,
    title: "How We Built a Recommender That Increased Conversion 26%",
    excerpt: "Deep dive into the architecture and implementation of our hybrid collaborative filtering system that transformed a retail client's conversion rates.",
    category: "Case Study",
    author: "Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/blog/recommender.jpg",
    tags: ["Machine Learning", "E-commerce", "Case Study"],
    featured: true
  },
  {
    id: 2,
    title: "Productionizing LLMs: Costs, Latency & Monitoring",
    excerpt: "Learn how to deploy large language models at scale while managing costs and ensuring reliable performance.",
    category: "Technical",
    author: "Alex Kumar",
    date: "2024-01-10", 
    readTime: "12 min read",
    image: "/blog/llms.jpg",
    tags: ["LLM", "MLOps", "Production"],
    featured: true
  },
  {
    id: 3,
    title: "Designing Mobile-First Workflows for Enterprise Apps",
    excerpt: "Best practices for creating intuitive mobile experiences that drive productivity in enterprise environments.",
    category: "Design",
    author: "Maya Patel",
    date: "2024-01-05",
    readTime: "6 min read", 
    image: "/blog/mobile.jpg",
    tags: ["Mobile", "UX Design", "Enterprise"],
    featured: false
  },
  {
    id: 4,
    title: "How to Ship an MVP in 8 Weeks",
    excerpt: "Our proven methodology for taking ideas from concept to production in record time without sacrificing quality.",
    category: "Process",
    author: "David Lee",
    date: "2023-12-28",
    readTime: "10 min read",
    image: "/blog/mvp.jpg", 
    tags: ["MVP", "Process", "Startup"],
    featured: false
  },
  {
    id: 5,
    title: "Security Checklist for Modern Web Applications",
    excerpt: "Essential security measures every web application should implement to protect user data and prevent attacks.",
    category: "Security",
    author: "Raj Sharma",
    date: "2023-12-20",
    readTime: "9 min read",
    image: "/blog/security.jpg",
    tags: ["Security", "Best Practices", "Web Development"],
    featured: false
  },
  {
    id: 6,
    title: "Microservices vs Monolith: When to Choose Which",
    excerpt: "A comprehensive guide to help you decide between microservices and monolithic architecture for your next project.",
    category: "Architecture",
    author: "Lisa Wang",
    date: "2023-12-15",
    readTime: "11 min read",
    image: "/blog/architecture.jpg",
    tags: ["Architecture", "Microservices", "System Design"],
    featured: false
  }
]

const categories = [
  { name: "All", icon: BookOpen, color: "bg-gray-500/10 text-gray-500" },
  { name: "Case Study", icon: TrendingUp, color: "bg-blue-500/10 text-blue-500" },
  { name: "Technical", icon: Code, color: "bg-green-500/10 text-green-500" },
  { name: "Design", icon: Lightbulb, color: "bg-purple-500/10 text-purple-500" },
  { name: "Process", icon: Shield, color: "bg-orange-500/10 text-orange-500" },
  { name: "Security", icon: Shield, color: "bg-red-500/10 text-red-500" }
]

const resources = [
  {
    title: "Development Checklist",
    description: "Comprehensive checklist for web application development",
    type: "Checklist",
    icon: Shield
  },
  {
    title: "API Design Guide",
    description: "Best practices for designing RESTful APIs",
    type: "Guide",
    icon: Code
  },
  {
    title: "Performance Optimization",
    description: "Techniques to improve application performance",
    type: "Tutorial",
    icon: TrendingUp
  }
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-purple-950/20 to-fuchsia-950/30"></div>
        
        {/* Floating blog icons */}
        <div className="absolute top-1/4 left-1/4 text-3xl text-violet-400/20">
          <BookOpen className="w-8 h-8" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-4xl text-purple-400/20">
          <Code className="w-10 h-10" />
        </div>
        <div className="absolute top-1/3 right-1/3 text-2xl text-fuchsia-400/20">
          <Lightbulb className="w-6 h-6" />
        </div>
        
        {/* Animated zigzag pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="blog-zigzag" patternUnits="userSpaceOnUse" width="30" height="30">
                <path d="M 0 15 L 15 0 L 30 15 L 15 30 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-violet-400" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-zigzag)" />
          </svg>
        </div>
        
        {/* Floating triangles */}
        <div className="absolute top-1/5 left-1/6 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-violet-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[24px] border-b-purple-400/20 rotate-45 animate-pulse"></div>
        <div className="absolute top-2/3 left-1/3 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-fuchsia-400/20 rotate-45 animate-pulse"></div>
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
            <Badge className="mb-4">Blog & Resources</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Product design, AI engineering, case studies, tutorials, and best practices. 
              Stay updated with the latest in technology and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const IconComponent = category.icon
                return (
                  <Button
                    key={category.name}
                    variant={selectedCategory === category.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.name)}
                    className="flex items-center space-x-2"
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{category.name}</span>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "All" && !searchTerm && featuredPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Featured Articles</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 overflow-hidden hover:shadow-lg transition-shadow duration-300 group"
                  variant={index % 3 === 0 ? "elevated" : index % 3 === 1 ? "glass" : "default"}
                  >
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/30" />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary">{post.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                      <p className="text-muted-foreground mt-2">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                          <Calendar className="w-4 h-4 ml-2" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-3">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
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
      )}

      {/* Regular Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-6">
              {selectedCategory === "All" && !searchTerm ? "Recent Articles" : "Search Results"}
            </h2>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300 group">
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                      <BookOpen className="w-12 h-12 text-primary/30" />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">{post.category}</Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-muted-foreground">
                          <User className="w-3 h-3" />
                          <span>{post.author}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read
                            <ArrowRight className="w-3 h-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Developer Resources</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Free guides, checklists, and tutorials to accelerate your development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow duration-300 group" variant={index === 0 ? "elevated" : index === 1 ? "glass" : "default"}>
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <resource.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <Badge variant="outline" className="mb-4">{resource.type}</Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      Download
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20" variant="gradient">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Get the latest articles, resources, and insights delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input placeholder="Enter your email" />
                  <Button>Subscribe</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}