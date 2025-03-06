"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import TemplateCarousel from "@/components/template-carousel"
import Image from "next/image"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-accent opacity-90"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-secondary rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.3,
            }}
            animate={{
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [Math.random() * 0.5 + 0.3, Math.random() * 0.3 + 0.1, Math.random() * 0.5 + 0.3],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-accent text-secondary text-sm font-medium mb-6"
            >
              AI-Powered Developer Portfolios
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Build Your <span className="gradient-text">AI-Driven Portfolio</span> in Minutes!
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Connect your GitHub, choose a template, and let AI do the rest. Create a stunning developer portfolio that
              showcases your skills and projects.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 animate-glow">
                Get Started <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground text-lg px-8 py-6"
              >
                View Templates
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <TemplateCarousel />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

