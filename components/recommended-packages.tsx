import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"
import Link from "next/link"
import image from "next/image"

interface Package {
  id: number
  title: string
  description: string
  duration: string
  difficulty: string
  price: string
  rating: number
  reviews: number
  image: string
  href: string
}

interface RecommendedPackagesProps {
  currentPackageId?: number
  title?: string
}

const allPackages: Package[] = [
  {
    id: 1,
    title: "Aventura Peruana Clasica 10 Días 9 Noches",
    description: "Lo esencial de Cusco y Machu Picchu en un paquete perfecto para escapadas cortas.",
    duration: "10 días / 9 noches",
    difficulty: "Fácil",
    price: "Desde $*",
    rating: 4.7,
    reviews: 156,
    image: "/campos.webp?height=300&width=400",
    href: "/paquetes/pack2",
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
    image: "/machupicchu01.webp?height=300&width=400",
    href: "/paquetes/pack3",
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
    image: "/machupichu02.webp?height=300&width=400",
    href: "/paquetes/pack0",
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
    image: "/selvaperu.webp?height=300&width=400",
    href: "/paquetes/pack5",
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
    image: "/turismobolivia.webp?height=300&width=400",
    href: "/paquetes/pack7",
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
    image: "/salkantay.webp?height=300&width=400",
    href: "/paquetes/pack9",
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
    image: "/ruinas machu.webp?height=300&width=400",
    href: "/paquetes/pack1",
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
    image: "/lunamiel.webp?height=300&width=400",
    href: "/paquetes/pack8",
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
    image: "/salar.webp?height=300&width=400",
    href: "/paquetes/pack4",
  },
  {
    id: 10,
    title: "Norte Peruano y Machupicchu 9 Días 8 Noches",
    description: "La aventura definitiva por todo Perú: costa, sierra, selva y Amazonía.",
    duration: "9 días / 8 noches",
    difficulty: "Aventurero",
    price: "Desde $*",
    rating: 5.0,
    reviews: 78,
    image: "/carrosmedianos.webp?height=300&width=400",
    href: "/paquetes/pack6",
  },
]

export default function RecommendedPackages({
  currentPackageId,
  title = "Otros Paquetes Perú",
}: RecommendedPackagesProps) {
  // Filter out current package and get 3 random recommendations
  const recommendedPackages = allPackages
    .filter((pkg) => pkg.id !== currentPackageId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">Descubre otras experiencias increíbles que podrían interesarte</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recommendedPackages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-secondary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.price}
                </div>
                <Badge className="absolute top-4 left-4 bg-primary-600 text-white">{pkg.difficulty}</Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{pkg.rating}</span>
                    <span className="text-sm text-gray-500">({pkg.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-primary-600 mb-2 line-clamp-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                  <Users className="h-4 w-4" />
                  <span>Grupos pequeños</span>
                </div>

                <div className="flex space-x-2">
                  <Link href={pkg.href} className="flex-1">
                    <Button className="w-full bg-secondary-600 hover:bg-secondary-700 text-white">Ver Detalles</Button>
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

        <div className="text-center mt-12">
          <Link href="/paquetes">
            <Button
              size="lg"
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
            >
              Ver Todos los Paquetes
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
