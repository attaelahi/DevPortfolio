"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const templates = [
  {
    id: 1,
    name: "Modern Minimal",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "#64FFDA",
  },
  {
    id: 2,
    name: "Tech Innovator",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#CCD6F6",
  },
  {
    id: 3,
    name: "Creative Developer",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    color: "#8892B0",
  },
]

export default function TemplateCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % templates.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + templates.length) % templates.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide()
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <div
      className="relative rounded-xl overflow-hidden glass-effect p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        {templates.map((template, index) => (
          <motion.div
            key={template.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 0.9,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              <Image
                src={template.image || "/placeholder.svg"}
                alt={template.name}
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent rounded-lg"></div>
              <div
                className="absolute bottom-0 left-0 right-0 p-4 text-center"
                style={{
                  borderBottom: `3px solid ${template.color}`,
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <h3 className="text-xl font-bold">{template.name}</h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center text-white z-10 hover:bg-accent transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-accent/80 flex items-center justify-center text-white z-10 hover:bg-accent transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {templates.map((_, index) => (
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
  )
}

