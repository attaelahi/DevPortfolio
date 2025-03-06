import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import TemplateGrid from "@/components/template-grid"

export default function TemplatesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Portfolio Templates</h1>
            <p className="text-lg text-accent-light max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates to showcase your work.
            </p>
          </div>
          <TemplateGrid />
        </div>
      </div>
      <Footer />
    </main>
  )
}

