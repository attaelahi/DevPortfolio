"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Palette, Code, Bot, Globe, Sparkles } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: <Github className="h-10 w-10 text-secondary" />,
    title: "GitHub Integration",
    description: "Connect your GitHub account to automatically import your projects and contributions.",
  },
  {
    icon: <Linkedin className="h-10 w-10 text-secondary" />,
    title: "LinkedIn Sync",
    description: "Import your professional experience and skills directly from your LinkedIn profile.",
  },
  {
    icon: <Bot className="h-10 w-10 text-secondary" />,
    title: "AI-Powered Bios",
    description: "Generate professional developer bios and project descriptions with our advanced AI.",
  },
  {
    icon: <Palette className="h-10 w-10 text-secondary" />,
    title: "Customizable Templates",
    description: "Choose from multiple professionally designed templates and customize them to your liking.",
  },
  {
    icon: <Code className="h-10 w-10 text-secondary" />,
    title: "Code Highlighting",
    description: "Showcase your code snippets with beautiful syntax highlighting and annotations.",
  },
  {
    icon: <Globe className="h-10 w-10 text-secondary" />,
    title: "Custom Domain",
    description: "Connect your own domain name for a more professional and personalized portfolio.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="features">
      <div className="absolute inset-0 bg-gradient-to-b from-accent to-primary opacity-90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent text-secondary text-sm font-medium mb-4"
          >
            <Sparkles size={16} />
            <span>Powerful Features</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Everything You Need to Build Your <span className="gradient-text">Perfect Portfolio</span>
          </motion.h2>
          <motion.p
            className="text-lg text-accent-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            DevPortfolio combines powerful integrations with AI to create stunning developer portfolios that stand out.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-xl p-6 hover:border-secondary transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(100, 255, 218, 0.2)" }}
            >
              <div className="mb-4 p-3 bg-accent inline-block rounded-lg">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-accent-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-xl glass-effect p-4">
            <div className="aspect-video relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="DevPortfolio Dashboard Preview"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

