import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import FloatingChatbot from "@/components/floating-chatbot"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      <FloatingChatbot />
    </main>
  )
}

