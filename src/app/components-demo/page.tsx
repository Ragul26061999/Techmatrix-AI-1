'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { 
  Code, 
  Palette, 
  Zap, 
  Layers,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const cardVariants = [
  {
    name: "Default Card",
    description: "Standard card with solid background",
    variant: "default",
    icon: Layers,
    features: ["Solid background", "Subtle shadow", "Clean borders"]
  },
  {
    name: "Glass Card",
    description: "Translucent card with blur effect",
    variant: "glass",
    icon: Palette,
    features: ["Translucent background", "Backdrop blur", "Soft shadow"]
  },
  {
    name: "Elevated Card",
    description: "Card with prominent shadow",
    variant: "elevated",
    icon: Zap,
    features: ["Strong shadow", "No border", "Floating effect"]
  },
  {
    name: "Outlined Card",
    description: "Card with accent border",
    variant: "outlined",
    icon: Code,
    features: ["Transparent background", "Accent border", "Hover effects"]
  },
  {
    name: "Gradient Card",
    description: "Card with gradient background",
    variant: "gradient",
    icon: Palette,
    features: ["Gradient background", "Subtle border", "Modern look"]
  }
]

export default function ComponentsDemoPage() {
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
            <Badge className="mb-4">Component Library</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Card Component Styles
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the different card styles available in our design system. 
              Each variant serves a specific purpose and context.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Card Variants Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cardVariants.map((card, index) => {
              const IconComponent = card.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card variant={card.variant as any} className="h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle>{card.name}</CardTitle>
                      <CardDescription>{card.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-sm">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" size="sm">
                        Use This Style
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">When to Use Each Variant</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose the right card style based on your content and context
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Content Hierarchy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Default</Badge>
                    <div>
                      <h4 className="font-semibold">General Content</h4>
                      <p className="text-sm text-muted-foreground">Use for standard content sections and informational cards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Elevated</Badge>
                    <div>
                      <h4 className="font-semibold">Featured Content</h4>
                      <p className="text-sm text-muted-foreground">Use for important content that needs to stand out</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Glass</Badge>
                    <div>
                      <h4 className="font-semibold">Overlay Content</h4>
                      <p className="text-sm text-muted-foreground">Use for content over images or complex backgrounds</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Design Context</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Outlined</Badge>
                    <div>
                      <h4 className="font-semibold">Minimal Context</h4>
                      <p className="text-sm text-muted-foreground">Use when you want to reduce visual weight</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Gradient</Badge>
                    <div>
                      <h4 className="font-semibold">Creative Context</h4>
                      <p className="text-sm text-muted-foreground">Use for marketing or creative content sections</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Badge variant="outline" className="mt-1">Default</Badge>
                    <div>
                      <h4 className="font-semibold">Data-Heavy</h4>
                      <p className="text-sm text-muted-foreground">Use for cards with complex information</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Implementation */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Implementation</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Easy to use with simple prop changes
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <pre className="bg-muted rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{`// Default card
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card Description</CardDescription>
  </CardHeader>
  <CardContent>
    Card content here...
  </CardContent>
</Card>

// Glass card
<Card variant="glass">
  ...
</Card>

// Elevated card
<Card variant="elevated">
  ...
</Card>

// Outlined card
<Card variant="outlined">
  ...
</Card>

// Gradient card
<Card variant="gradient">
  ...
</Card>`}</code>
                </pre>
              </CardContent>
            </Card>
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
              Ready to Build?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Start using these card styles in your components today.
            </p>
            <Button size="lg" className="group" asChild>
              <Link href="/services">
                View All Components
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}