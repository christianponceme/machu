import type { Metadata } from "next"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import FeaturedTours from "@/components/featured-tours"
import WhyChooseUs from "@/components/why-choose-us"
import Testimonials from "@/components/testimonials"
import AboutPreview from "@/components/about-preview"
import CallToAction from "@/components/call-to-action"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"

export const metadata: Metadata = {
  title: "Machupicchu Origin - Tours y Experiencias Únicas en Machu Picchu",
  description:
    "Descubre la magia de Machu Picchu con Machupicchu Origin. Tours personalizados, guías expertos y experiencias inolvidables en la ciudadela inca más famosa del mundo.",
  keywords: "Machu Picchu, tours, Cusco, Perú, turismo, ciudadela inca, Camino Inca, Huayna Picchu",
  openGraph: {
    title: "Machupicchu Origin - Tours y Experiencias Únicas en Machu Picchu",
    description: "Descubre la magia de Machu Picchu con tours personalizados y guías expertos.",
    url: "https://machupicchuorigin.com",
    siteName: "Machupicchu Origin",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Machu Picchu al amanecer",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedTours />
        <WhyChooseUs />
        <AboutPreview />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
