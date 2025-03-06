"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Senior Frontend Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop",
    content:
      "DevPortfolio transformed my online presence. The AI-generated bio perfectly captured my experience, and the GitHub integration made showcasing my projects effortless.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Chen",
    role: "Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop",
    content:
      "I was amazed by how quickly I could set up a professional portfolio. The templates are beautiful, and the customization options let me make it truly mine.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    role: "Backend Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=987&auto=format&fit=crop",
    content:
      "As someone who dreaded creating a portfolio, DevPortfolio was a game-changer. The AI helped me articulate my skills in ways I couldn't have done myself.",
    rating: 4,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 relative overflow-hidden" id="testimonials">
      <div className="absolute inset-0 bg-gradient-to-b from-primary to-accent opacity-90 z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-accent text-secondary text-sm font-medium mb-4"
          >
            <Star size={16} className="fill-secondary text-secondary" />
            <span>Testimonials</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            What Developers Are <span className="gradient-text">Saying</span>
          </motion.h2>
          <motion.p
            className="text-lg text-accent-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join thousands of developers who have transformed their online presence with DevPortfolio.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <motion.div
                    className="glass-effect rounded-xl p-8 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="absolute top-6 left-6 h-12 w-12 text-secondary opacity-20" />
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-secondary">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-lg mb-4 relative z-10">{testimonial.content}</p>
                        <div className="flex items-center justify-center md:justify-start gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={i < testimonial.rating ? "fill-secondary text-secondary" : "text-accent-light"}
                            />
                          ))}
                        </div>
                        <h4 className="font-bold text-xl">{testimonial.name}</h4>
                        <p className="text-accent-light">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center text-white z-10 hover:bg-accent transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-12 h-12 rounded-full bg-accent/80 flex items-center justify-center text-white z-10 hover:bg-accent transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-secondary" : "bg-accent-light/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

