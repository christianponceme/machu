"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        src="/hero-video1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.5)" }}
      />
        <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="flex items-center justify-center mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="ml-2 text-sm">Calificación 5 estrellas en TripAdvisor</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Descubre la Magia de
          <span className="block text-secondary-400">Machu Picchu</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Vive una experiencia única en la ciudadela inca más famosa del mundo con nuestros tours personalizados y guías
          expertos locales.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/tours">
            <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 text-lg">
              Explorar Tours
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/contacto">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg bg-transparent">
              Contactar Ahora
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-400">3+</div>
            <div className="text-sm uppercase tracking-wide">Años de Experiencia</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-400">200+</div>
            <div className="text-sm uppercase tracking-wide">Turistas Satisfechos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary-400">40+</div>
            <div className="text-sm uppercase tracking-wide">Tours Disponibles</div>
          </div>
        </div>
      </div>
    </section>
  )
}
