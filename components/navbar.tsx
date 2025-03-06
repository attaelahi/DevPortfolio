"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!mounted) return null

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/templates" className="text-accent-light hover:text-secondary transition-colors">
            Templates
          </Link>
          <Link href="/features" className="text-accent-light hover:text-secondary transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-accent-light hover:text-secondary transition-colors">
            Pricing
          </Link>
          <Link href="/blog" className="text-accent-light hover:text-secondary transition-colors">
            Blog
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="outline"
            className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
          >
            Log In
          </Button>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 glow-effect">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <ModeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-accent-light">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glass-effect">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="/templates"
              className="text-accent-light hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Templates
            </Link>
            <Link
              href="/features"
              className="text-accent-light hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-accent-light hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-accent-light hover:text-secondary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground w-full"
              >
                Log In
              </Button>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

