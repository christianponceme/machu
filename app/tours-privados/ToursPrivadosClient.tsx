"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Star, Crown, Shield, Heart } from "lucide-react"
import Link from "next/link"

const privateTours = [
  {
    id: 1,
    title: "Machu Picchu Privado VIP",
    description: "Experiencia exclusiva a Machu Picchu con guía privado, tren de primera clase y acceso prioritario.",
    duration: "1 día",
    difficulty: "Fácil",
    price: "Desde $450",
    rating: 5.0,
    reviews: 89,
    image: "/mapi.webp?height=300&width=400",
    href: "/tours/machu-picchu-privado-vip",
    features: ["Guía privado", "Tren primera clase", "Acceso VIP", "Almuerzo gourmet"],
  },
  {
    id: 2,
    title: "Valle Sagrado Privado",
    description: "Tour privado del Valle Sagrado con experiencias culturales exclusivas y almuerzo con familia local.",
    duration: "1 día",
    difficulty: "Fácil",
    price: "Desde $280",
    rating: 4.9,
    reviews: 67,
    image: "/vallesagrado.webp?height=300&width=400",
    href: "/tours/tour4-privado",
    features: ["Transporte privado", "Experiencias exclusivas", "Almuerzo familiar", "Flexibilidad total"],
  },
  {
    id: 3,
    title: "City Tour Cusco Privado",
    description: "Descubre Cusco a tu ritmo con guía privado y acceso a sitios arqueológicos sin multitudes.",
    duration: "1 día",
    difficulty: "Fácil",
    price: "Desde $180",
    rating: 4.8,
    reviews: 124,
    image: "/sacsay.webp?height=300&width=400",
    href: "/tours/city-tour-cusco-privado",
    features: ["Horarios flexibles", "Acceso prioritario", "Guía especializado", "Transporte exclusivo"],
  },
  {
    id: 4,
    title: "Camino Inca Privado 2 Días",
    description: "Experiencia exclusiva del Camino Inca con grupo privado, cocinero personal y equipo premium.",
    duration: "2 días",
    difficulty: "Moderado",
    price: "Desde $850",
    rating: 5.0,
    reviews: 45,
    image: "/caminoin.webp?height=300&width=400",
    href: "/tours/camino-inca-privado-2dias",
    features: ["Grupo privado", "Cocinero personal", "Equipo premium", "Porteadores incluidos"],
  },
  {
    id: 5,
    title: "Tour Puno Privado",
    description: "Sesión fotográfica privada en Machu Picchu con fotógrafo profesional y ubicaciones exclusivas.",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $650",
    rating: 5.0,
    reviews: 34,
    image: "/urosp.webp?height=300&width=400",
    href: "/tours/tour3-privado",
    features: ["Fotógrafo profesional", "Ubicaciones secretas", "Edición incluida", "Sesión personalizada"],
  },
  {
    id: 6,
    title: "Experiencia Gastronómica Privada",
    description: "Tour culinario privado con chef, mercados locales, clase de cocina y cena gourmet.",
    duration: "1 día",
    difficulty: "Fácil",
    price: "Desde $320",
    rating: 4.9,
    reviews: 78,
    image: "/cuy.webp?height=300&width=400",
    href: "/tours/gastronomico-privado",
    features: ["Chef privado", "Mercados exclusivos", "Clase de cocina", "Cena gourmet"],
  },
]

const vipFeatures = [
  {
    icon: Crown,
    title: "Experiencia VIP",
    description: "Atención personalizada y servicios exclusivos durante todo el tour.",
  },
  {
    icon: Shield,
    title: "Flexibilidad Total",
    description: "Horarios adaptables y itinerarios personalizados según tus preferencias.",
  },
  {
    icon: Heart,
    title: "Atención Premium",
    description: "Guías especializados y servicios de primera clase en cada detalle.",
  },
]

export default function ToursPrivadosClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tours Privados VIP</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Experiencias exclusivas y personalizadas con guías privados, transporte exclusivo y atención premium para
              hacer de tu viaje algo verdaderamente especial.
            </p>
          </div>
        </section>

        {/* VIP Features */}
        <section className="py-16 bg-accent-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Por Qué Elegir Nuestros Tours Privados?</h2>
              <p className="text-xl text-gray-600">
                Disfruta de una experiencia completamente personalizada con servicios exclusivos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vipFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-secondary-100 rounded-full">
                          <IconComponent className="h-8 w-8 text-secondary-600" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-primary-600 mb-3">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Private Tours Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-600 mb-4">Nuestros Tours Privados</h2>
              <p className="text-xl text-gray-600">
                Cada experiencia está diseñada para ofrecerte lo mejor con total exclusividad y personalización.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {privateTours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative">
                    <img
                      src={tour.image || "/placeholder.svg"}
                      alt={tour.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.price}
                    </div>
                    <Badge className="absolute top-4 left-4 bg-yellow-500 text-white">VIP</Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                        <span className="text-sm text-gray-500">({tour.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-primary-600 mb-2">{tour.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{tour.description}</p>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-primary-600">Incluye:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tour.features.slice(0, 2).map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                        {tour.features.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{tour.features.length - 2} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href="/contacto" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-primary-600 text-primary-600 hover:bg-secondary-700 bg-secondary-600"
                        >
                          Cotizar
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿Buscas una experiencia única y exclusiva?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Nuestros tours privados están diseñados para ofrecerte la máxima comodidad, flexibilidad y exclusividad.
              Cada detalle está pensado para hacer de tu viaje una experiencia inolvidable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                  Solicitar Cotización Personalizada
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
                onClick={() => window.open("https://wa.me/51907966198", "_blank")}
              >
                Consultar por WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
