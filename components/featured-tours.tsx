import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Train, Mountain, Camera } from "lucide-react"

const featuredTours = [
  {
    id: 1,
    icon: Train,
    title: "Tour Clásico a Machu Picchu",
    description: "La forma más cómoda de conocer Machu Picchu en un día completo.",
    duration: "1 día",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 4.9,
    reviews: 245,
    image: "/blog9-foto.png?height=300&width=400",
    popular: true,
  },
  {
    id: 2,
    icon: Mountain,
    title: "Camino Inca Clásico",
    description: "La experiencia más auténtica siguiendo los pasos de los incas.",
    duration: "4 días",
    difficulty: "Desafiante",
    price: "Desde $*",
    rating: 4.8,
    reviews: 189,
    image: "/blog3-3.png?height=300&width=400",
    popular: false,
  },
  {
    id: 3,
    icon: Camera,
    title: "Tour Puno",
    description: "Captura los mejores momentos con un guía especializado en fotografía.",
    duration: "2 días",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 4.9,
    reviews: 98,
    image: "/uros.png?height=300&width=400",
    popular: false,
  },
]

// Función para generar el enlace de WhatsApp
const generateWhatsAppLink = (tour) => {
  const phoneNumber = "51907966198" 
  const message = `Hola! Me interesa reservar el "${tour.title}" - ${tour.description} (${tour.duration}). ¿Podrían darme más información sobre disponibilidad y precios?`
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export default function FeaturedTours() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Tours Destacados</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestras experiencias más solicitadas, diseñadas para diferentes tipos de aventureros y niveles de
            condición física.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour) => {
            const IconComponent = tour.icon
            return (
              <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 relative">
                {tour.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-secondary-600 text-white">Más Popular</Badge>
                  </div>
                )}

                <div className="relative">
                  <img src={tour.image || "/placeholder.svg"} alt={tour.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <IconComponent className="h-5 w-5 text-secondary-600" />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{tour.rating}</span>
                      <span className="text-sm text-gray-500">({tour.reviews})</span>
                    </div>
                    <Badge variant="outline">{tour.difficulty}</Badge>
                  </div>
                  <CardTitle className="text-xl">{tour.title}</CardTitle>
                  <CardDescription className="text-gray-600">{tour.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4" />
                        <span>Grupos pequeños</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-secondary-600">{tour.price}</span>
                      <a 
                        href={generateWhatsAppLink(tour)}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-secondary-600 hover:bg-secondary-700">Reservar</Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Link href="/tours">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-primary-600 bg-transparent"
            >
              Ver Todos los Tours
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}