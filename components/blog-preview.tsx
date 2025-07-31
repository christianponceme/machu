import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "Mejor Época para Visitar Machu Picchu",
    excerpt: "Descubre cuál es la temporada ideal para tu viaje a la ciudadela inca según el clima y las multitudes.",
    author: "Carlos Quispe",
    date: "15 Enero 2025",
    image: "/placeholder.svg?height=200&width=300",
    href: "/blog/mejor-epoca-visitar-machu-picchu",
  },
  {
    id: 2,
    title: "Preparación Física para el Camino Inca",
    excerpt: "Consejos esenciales para prepararte físicamente y disfrutar al máximo tu trekking hacia Machu Picchu.",
    author: "María Huamán",
    date: "10 Enero 2025",
    image: "/placeholder.svg?height=200&width=300",
    href: "/blog/preparacion-fisica-camino-inca",
  },
  {
    id: 3,
    title: "Historia y Misterios de Machu Picchu",
    excerpt: "Explora los secretos mejor guardados de la ciudadela inca y las teorías sobre su construcción.",
    author: "José Condori",
    date: "5 Enero 2025",
    image: "/placeholder.svg?height=200&width=300",
    href: "/blog/historia-misterios-machu-picchu",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Blog de Viajes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consejos, historias y guías de expertos para que aproveches al máximo tu aventura en Machu Picchu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <CardTitle className="text-xl text-primary-600 group-hover:text-secondary-600 transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={post.href}>
                  <Button variant="ghost" className="p-0 h-auto text-secondary-600 hover:text-secondary-700">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary-600 text-secondary-600 hover:bg-secondary-600 hover:text-white bg-transparent"
            >
              Ver Todos los Artículos
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
