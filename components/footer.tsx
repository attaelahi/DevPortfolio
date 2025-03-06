import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 bg-accent relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold gradient-text">DevPortfolio</span>
            </Link>
            <p className="text-accent-light mb-6">
              AI-powered portfolio builder for developers. Create stunning portfolios in minutes.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com" className="text-accent-light hover:text-secondary transition-colors">
                <Github size={20} />
              </Link>
              <Link href="https://twitter.com" className="text-accent-light hover:text-secondary transition-colors">
                <Twitter size={20} />
              </Link>
              <Link href="https://linkedin.com" className="text-accent-light hover:text-secondary transition-colors">
                <Linkedin size={20} />
              </Link>
              <Link
                href="mailto:info@devportfolio.ai"
                className="text-accent-light hover:text-secondary transition-colors"
              >
                <Mail size={20} />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/templates" className="text-accent-light hover:text-secondary transition-colors">
                  Templates
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-accent-light hover:text-secondary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-accent-light hover:text-secondary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-accent-light hover:text-secondary transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-accent-light hover:text-secondary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-accent-light hover:text-secondary transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-accent-light hover:text-secondary transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-accent-light hover:text-secondary transition-colors">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-accent-light hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-accent-light hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-accent-light hover:text-secondary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-accent-light hover:text-secondary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-accent-light/20 mt-12 pt-8 text-center text-accent-light">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

