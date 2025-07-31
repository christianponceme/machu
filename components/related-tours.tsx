import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface RelatedTour {
  id: string
  title: string
  abstract: string
  image: string
  href: string
}

const allTours: RelatedTour[] = [
  {
    id: "tour1",
    title: "CUSCO Camino Inca 3 días",
    abstract:
      "La ruta original de los incas hacia Machu Picchu, una experiencia única de trekking con sitios arqueológicos exclusivos.",
    image: "/camino-inca.jpg?height=200&width=300",
    href: "/tours/tour1",
  },
  {
    id: "tour2",
    title: "LIMA Lineas de Nazca y Oasis Huacachina 2 días",
    abstract: "Aventura alternativa con paisajes espectaculares de las lineas en Nazca y Oasis Huacachina.",
    image: "/nazca.jpeg?height=200&width=300",
    href: "/tours/tour2",
  },
  {
    id: "tour3",
    title: "PUNO Lago Titicaca Uros, Taquile y Amantani 2 días",
    abstract: "Visita la majestuosidad de las isla de los uros, Tallique y amantani.",
    image: "/uros.jpeg?height=200&width=300",
    href: "/tours/tour3",
  },
  {
    id: "tour4",
    title: "AREQUIPA Avistamiento Colca 2 días",
    abstract: "Explora el maravilloso Cañon del colca y sus hermosos paisajes.",
    image: "/colca.jpeg?height=200&width=300",
    href: "/tours/tour4",
  },
  {
    id: "tour5",
    title: "IQUITOS Selva Peruana 4 días y 3 noches",
    abstract: "La ciudad de iquitos tiene una hermosa flora y fauna que te dejara sin palabras.",
    image: "/iquitos.jpeg?height=200&width=300",
    href: "/tours/tour5",
  },
  {
    id: "tour0",
    title: "CUSCO Inca Jungle 3 días",
    abstract: "Descubre la ciudadela inca inca de Machupicchu y sus alrededores con un guía experto local certificado.",
    image: "/Machu_Picchu,_Peru_(2018).jpg?height=200&width=300",
    href: "/tours/tour0",
  },
]

interface RelatedToursProps {
  currentTour: string
}

export default function RelatedTours({ currentTour }: RelatedToursProps) {
  // Filter out current tour and get 3 random related tours
  const relatedTours = allTours.filter((tour) => tour.id !== currentTour).slice(0, 3)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Otros Tours Recomendados</h2>
          <p className="text-xl text-gray-600">Descubre más experiencias únicas en Cusco y Machu Picchu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedTours.map((tour) => (
            <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={tour.image || "/placeholder.svg"}
                  alt={tour.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary-600 mb-3">{tour.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{tour.abstract}</p>
                <Link href={tour.href}>
                  <Button className="w-full bg-secondary-600 hover:bg-secondary-700">Ver Detalles</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
