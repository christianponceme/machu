"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Calendar } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    id: 1,
    title: "Aventura Peruana Clasica 10 Días 9 Noches",
    description: "Lo esencial de Cusco y Machu Picchu en un paquete perfecto para escapadas cortas.",
    duration: "10 días / 9 noches",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 5,
    reviews: 156,
    image: "/campos.png?height=300&width=400",
    href: "/paquetes/pack2",
    highlights: ["City tour Cusco", "Valle Sagrado", "Machu Picchu", "Hoteles"],
  },
  {
    id: 2,
    title: "Aventura Peruana Clasica  15 Días 14 Noches",
    description: "Experiencia completa incluyendo Maras, Moray y tiempo adicional en cada destino.",
    duration: "15 días / 14 noches",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 4.8,
    reviews: 134,
    image: "/machupicchu01.jpeg?height=300&width=400",
    href: "/paquetes/pack3",
    highlights: ["Cusco extendido", "Maras y Moray", "Machu Picchu", "Valle Sagrado"],
  },
  {
    id: 3,
    title: "Cusco y Machu Picchu 5 Días 4 Noches",
    description: "Para aventureros que buscan experiencias únicas.",
    duration: "5 días / 4 noches",
    difficulty: "Moderado",
    price: "Desde $*",
    rating: 4.9,
    reviews: 89,
    image: "/machupichu02.jpeg?height=300&width=400",
    href: "/paquetes/pack0",
    highlights: ["Cusco", "Machu Picchu", "Valle Sagrado"],
  },
  {
    id: 4,
    title: "Selva Peruana y Machupicchu 9 Días 8 Noches",
    description: "Entra a la selva del Peru y vive una apasionante aventura.",
    duration: "9 días / 8 noches",
    difficulty: "Fácil - Confort",
    price: "Desde $*",
    rating: 5.0,
    reviews: 89,
    image: "/selvaperu.jpg?height=300&width=400",
    href: "/paquetes/pack5",
    highlights: ["Selva", "Tren Hiram Bingham", "Machupicchu"],
  },
  {
    id: 5,
    title: "Peru y Bolivia 15 Días 14 Noches",
    description: "Conoce lo mejor de Paru y Bolivia.",
    duration: "15 Días 14 Noches",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 4.8,
    reviews: 234,
    image: "/turismobolivia.jpg?height=300&width=400",
    href: "/paquetes/pack7",
    highlights: ["Salar de Uyuni", "La Paz", "Bolivia", "Peru"],
  },
  {
    id: 6,
    title: "Salkantay Treking en 5 Días 4 Noches",
    description: "Explora Cusco, Machu Picchu y el místico Lago Titicaca con sus islas flotantes.",
    duration: "5 días / 4 noches",
    difficulty: "Fácil - Moderado",
    price: "Desde $*",
    rating: 4.9,
    reviews: 156,
    image: "/salkantay.jpg?height=300&width=400",
    href: "/paquetes/pack9",
    highlights: ["Salkantay", "Treking ", "Caminata"],
  },
  {
    id: 7,
    title: "Cusco y Machu Picchu 7 Días 6 Noches",
    description: "Gran circuito por el Cusco, Machu Picchu.",
    duration: "7 días / 6 noches",
    difficulty: "Moderado",
    price: "Desde $*",
    rating: 4.8,
    reviews: 198,
    image: "/ruinas machu.jpeg?height=300&width=400",
    href: "/paquetes/pack1",
    highlights: ["Machu picchu", "Cusco imperial", "Valle Sagrado"],
  },
  {
    id: 8,
    title: "Luna de Miel en Peru",
    description: "La experiencia más completa: Lima, Arequipa, Cusco, Machu Picchu y Puno.",
    duration: "- días / - noches",
    difficulty: "Moderado",
    price: "Desde $*",
    rating: 4.9,
    reviews: 267,
    image: "/lunamiel.jpeg?height=300&width=400",
    href: "/paquetes/pack8",
    highlights: ["Lima ", "Arequipa", "Puno", "Todo incluido"],
  },
  {
    id: 9,
    title: "Aventura Peru Bolivia 20 Días 19 Noches",
    description: "Conoce lo mejor de Paru y Bolivia.",
    duration: "20 días / 19 noches",
    difficulty: "Moderado - Aventurero",
    price: "Desde $*",
    rating: 4.9,
    reviews: 134,
    image: "/salar.jpeg?height=300&width=400",
    href: "/paquetes/pack4",
    highlights: ["Salar de Uyuni", "La Paz", "Bolivia", "Peru"],
  },
  {
    id: 10,
    title: "Norte Peruano y Machupicchu 9 Días 8 Noches",
    description: "La aventura definitiva explorando todo Perú de norte a sur.",
    duration: "9 días / 8 noches",
    difficulty: "Aventurero",
    price: "Desde $*",
    rating: 5.0,
    reviews: 78,
    image: "/carrosmedianos.jpeg?height=300&width=400",
    href: "/paquetes/pack6",
    highlights: ["Todo Perú", "Norte", "Costa y sierra", "Experiencia única"],
  },
]

const categories = [
  { name: "Todos", count: packages.length },
  { name: "Cortos (3-5 días)", count: 3 },
  { name: "Medianos (6-9 días)", count: 4 },
  { name: "Largos (10+ días)", count: 3 },
]

export default function PaquetesClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Paquetes Perú</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Descubre nuestros paquetes completos diseñados para que vivas la experiencia perfecta en Perú, desde
              escapadas cortas hasta grandes aventuras.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <Button key={category.name} variant="outline" className="bg-white">
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative">
                    <img
                      src={pkg.image || "/placeholder.svg"}
                      alt={pkg.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary-600 text-white">{pkg.difficulty}</Badge>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Calendar className="h-5 w-5 text-secondary-600" />
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{pkg.rating}</span>
                        <span className="text-sm text-gray-500">({pkg.reviews})</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary-600">{pkg.price}</div>
                    </div>

                    <h3 className="text-xl font-bold text-primary-600 mb-2 line-clamp-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Grupos pequeños</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <h4 className="font-semibold text-sm text-primary-600">Incluye:</h4>
                      <div className="flex flex-wrap gap-1">
                        {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {highlight}
                          </Badge>
                        ))}
                        {pkg.highlights.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{pkg.highlights.length - 3} más
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={pkg.href} className="flex-1">
                        <Button className="w-full bg-secondary-600 hover:bg-secondary-700">Ver Detalles</Button>
                      </Link>
                      <Link href="/contacto" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
                        >
                          Reservar
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿No encuentras el paquete perfecto?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Creamos paquetes personalizados según tus intereses, tiempo disponible y presupuesto. Cuéntanos tu sueño
              de viaje y lo haremos realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
                  Solicitar Paquete Personalizado
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
