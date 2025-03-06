"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const templates = [
  {
    id: 1,
    name: "Modern Minimal",
    category: "minimal",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    color: "#64FFDA",
  },
  {
    id: 2,
    name: "Tech Innovator",
    category: "creative",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    color: "#CCD6F6",
  },
  {
    id: 3,
    name: "Creative Developer",
    category: "creative",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    color: "#8892B0",
  },
  {
    id: 4,
    name: "Professional Portfolio",
    category: "professional",
    image: "https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=80&w=2070&auto=format&fit=crop",
    color: "#64FFDA",
  },
  {
    id: 5,
    name: "Minimalist Code",
    category: "minimal",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
    color: "#CCD6F6",
  },
  {
    id: 6,
    name: "Enterprise Developer",
    category: "professional",
    image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop",
    color: "#8892B0",
  },
]

export default function TemplateGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTemplates =
    activeCategory === "all" ? templates : templates.filter((template) => template.category === activeCategory)

  return (
    <div>
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="grid grid-cols-4 max-w-md mx-auto">
          <TabsTrigger value="all" onClick={() => setActiveCategory("all")}>
            All
          </TabsTrigger>
          <TabsTrigger value="minimal" onClick={() => setActiveCategory("minimal")}>
            Minimal
          </TabsTrigger>
          <TabsTrigger value="creative" onClick={() => setActiveCategory("creative")}>
            Creative
          </TabsTrigger>
          <TabsTrigger value="professional" onClick={() => setActiveCategory("professional")}>
            Professional
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTemplates.map((template, index) => (
          <motion.div
            key={template.id}
            className="glass-effect rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <div className="relative aspect-[4/3] group">
              <Image src={template.image || "/placeholder.svg"} alt={template.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Preview Template
                </Button>
              </div>
            </div>
            <div className="p-4 border-t-2 transition-colors" style={{ borderColor: template.color }}>
              <h3 className="text-xl font-bold">{template.name}</h3>
              <p className="text-accent-light capitalize">{template.category}</p>
              <div className="mt-4 flex justify-between items-center">
                <Button
                  variant="outline"
                  className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
                >
                  Live Demo
                </Button>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  Select & Customize
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

