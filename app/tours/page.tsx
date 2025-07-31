import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Star } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Tours - Machupicchu Origin",
  description:
    "Explora nuestra amplia gama de tours a Machu Picchu: Camino Inca, Salkantay Trek, tours clásicos y experiencias personalizadas. Encuentra el tour perfecto para ti.",
  keywords: "tours Machu Picchu, Camino Inca, Salkantay Trek, tours Cusco, experiencias Perú",
  openGraph: {
    title: "Tours - Machupicchu Origin",
    description: "Explora nuestra amplia gama de tours a Machu Picchu con guías expertos.",
    url: "https://machupicchuorigin.com/tours",
  },
}

const tours = [
  {
    id: 1,
    title: "CUSCO Inca Jungle 3 días",
    description: "Descubre la ciudadela inca de Machupicchu y sus alrededores con un guía experto local certificado.",
    duration: "3 días",
    difficulty: "Fácil",
    price: "Desde $470",
    rating: 4.9,
    reviews: 245,
    image: "/Machu_Picchu,_Peru_(2018).jpg?height=300&width=400",
    href: "/tours/tour0",
  },
  {
    id: 2,
    title: "CUSCO Camino Inca 3 días",
    description: "La ruta original de los incas hacia Machu Picchu, una experiencia única e inolvidable.",
    duration: "3 días",
    difficulty: "Desafiante",
    price: "Desde $850",
    rating: 4.8,
    reviews: 189,
    image: "/camino-inca.jpg?height=300&width=400",
    href: "/tours/tour1",
  },
  {
    id: 3,
    title: "LIMA Lineas de Nazca y Oasis Huacachina 2 días",
    description: "Aventura alternativa con paisajes espectaculares de las lineas en Nazca y Oasis Huacachina.",
    duration: "2 días",
    difficulty: "Moderado",
    price: "Desde $425",
    rating: 4.7,
    reviews: 156,
    image: "/nazca.jpeg?height=300&width=400",
    href: "/tours/tour2",
  },
  {
    id: 4,
    title: "PUNO Lago Titicaca Uros, Taquile y Amantani 2 días",
    description: "Visita la majestuosidad de las isla de los uros, Tallique y amantani.",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $100",
    rating: 4.9,
    reviews: 98,
    image: "/uros.jpeg?height=300&width=400",
    href: "/tours/tour3",
  },
  {
    id: 5,
    title: "AREQUIPA Avistamiento Colca 2 días",
    description: "Explora el maravilloso Cañon del colca y sus hermosos paisajes.",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $120",
    rating: 4.6,
    reviews: 203,
    image: "/colca.jpeg?height=300&width=400",
    href: "/tours/tour4",
  },
  {
    id: 6,
    title: "IQUITOS Selva Peruana 4 días y 3 noches",
    description: "La ciudad de iquitos tiene una hermosa flora y fauna que te dejara sin palabras.",
    duration: "4 días",
    difficulty: "Moderado",
    price: "Desde $425",
    rating: 4.5,
    reviews: 167,
    image: "/iquitos.jpeg?height=300&width=400",
    href: "/tours/tour5",
  },
]

export default function ToursPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Tours</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Descubre la experiencia perfecta para ti. Desde aventuras épicas hasta tours relajados, tenemos algo para
              cada tipo de viajero.
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative">
                    <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-64 object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white p-4">
                        <p className="text-sm leading-relaxed">{tour.description}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.price}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{tour.rating}</span>
                        <span className="text-sm text-gray-500">({tour.reviews})</span>
                      </div>
                      <span className="text-sm text-secondary-600 font-medium">{tour.difficulty}</span>
                    </div>

                    <h3 className="text-xl font-bold text-primary-600 mb-2">{tour.title}</h3>

                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Grupos pequeños</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Link href={tour.href} className="flex-1">
                        <Button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white">
                          Ver Detalles
                        </Button>
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
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Creamos experiencias personalizadas según tus intereses, tiempo disponible y presupuesto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700 text-white">
                  Solicitar Tour Personalizado
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
