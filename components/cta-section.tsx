"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"

export default function CtaSection() {
  return (
    <section className="py-20 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-gradient-to-b from-accent to-primary opacity-90 z-0"></div>

      <motion.div
        className="container mx-auto px-4 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent text-secondary text-sm font-medium mb-6"
          >
            <Rocket size={16} />
            <span>Ready to Launch</span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Start Building Your <span className="gradient-text">Portfolio</span> Today
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-accent-light mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of developers who have transformed their online presence with DevPortfolio. It's free to get
            started!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-6 animate-glow">
              Start Building For Free
            </Button>
          </motion.div>

          <motion.p
            className="text-sm text-accent-light mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            No credit card required. Upgrade anytime.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

