import type { Metadata } from "next"
import Header from "@/components/header"
import { Ready }from "@/components/ready"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Clock, Eye } from "lucide-react"
import Link from "next/link"
import Image from 'next/image';

export const metadata: Metadata = {
  title: "Blog de Viajes - Machupicchu Origin",
  description:
    "Consejos, historias y guías de expertos para que aproveches al máximo tu aventura en Machu Picchu y Cusco. Blog oficial de Machupicchu Origin.",
  keywords: "blog viajes Machu Picchu, consejos Cusco, guías turismo Perú, historias viajes",
  openGraph: {
    title: "Blog de Viajes - Machupicchu Origin",
    description: "Consejos y guías de expertos para tu aventura en Machu Picchu.",
    url: "https://machupicchuorigin.com/blog",
  },
}

const categories = [
  { name: "Todos", count: 12 },
  { name: "Consejos de Viaje", count: 4 },
  { name: "Historia Inca", count: 3 },
  { name: "Preparación", count: 3 },
  { name: "Experiencias", count: 2 },
]

const featuredPost = {
  id: 1,
  title: "Guía Completa para Visitar Machu Picchu en 2025",
  excerpt: "Todo lo que necesitas saber para planificar tu visita perfecta a la ciudadela inca más famosa del mundo.",
  author: "Marjorie Ponce",
  date: "20 julio 2025",
  readTime: "15 min",
  views: "2.5K",
  category: "Consejos de Viaje",
  image: "/blog-1.webp?height=400&width=600",
  href: "/blog/guia-completa-machu-picchu-2025",
  featured: true,
}

const blogPosts = [
  {
    id: 2,
    title: "Mejor Época para Visitar Machu Picchu",
    excerpt: "Descubre cuál es la temporada ideal para tu viaje a la ciudadela inca según el clima y las multitudes.",
    author: "Marjorie Ponce",
    date: "30 julio 2025",
    readTime: "12 min",
    views: "1.8K",
    category: "Consejos de Viaje",
    image: "/blog2.webp?height=200&width=300",
    href: "/blog/mejor-epoca-visitar-machu-picchu",
  },
  {
    id: 3,
    title: "Preparación Física para el Camino Inca",
    excerpt: "Consejos esenciales para prepararte físicamente y disfrutar al máximo tu trekking hacia Machu Picchu.",
    author: "Marjorie Ponce",
    date: "05 Agosto 2025",
    readTime: "10 min",
    views: "1.2K",
    category: "Preparación",
    image: "/blog3.webp?height=200&width=300",
    href: "/blog/preparacion-fisica-camino-inca",
  },
  {
    id: 4,
    title: "Historia y Misterios de Machu Picchu",
    excerpt: "Explora los secretos mejor guardados de la ciudadela inca y las teorías sobre su construcción.",
    author: "Marjorie Ponce",
    date: "12 Marzo 2025",
    readTime: "11 min",
    views: "2.1K",
    category: "Historia Inca",
    image: "/blog4-antiguo.webp?height=200&width=300",
    href: "/blog/historia-misterios-machu-picchu",
  },
  {
    id: 5,
    title: "Qué Llevar en tu Mochila a Machu Picchu",
    excerpt: "Lista completa de elementos esenciales para tu visita a Machu Picchu según la temporada.",
    author: "Marjorie Ponce",
    date: "28 Diciembre 2023",
    readTime: "10 min",
    views: "1.5K",
    category: "Preparación",
    image: "/blo4.webp?height=200&width=300",
    href: "/blog/que-llevar-mochila-machu-picchu",
  },
  {
    id: 6,
    title: "Gastronomía Cusqueña: Platos que Debes Probar",
    excerpt: "Descubre los sabores únicos de la cocina cusqueña y dónde encontrar los mejores restaurantes.",
    author: "Marjorie Ponce",
    date: "22 Diciembre 2023",
    readTime: "11 min",
    views: "980",
    category: "Experiencias",
    image: "/blog6.webp?height=200&width=300",
    href: "/blog/gastronomia-cusquena-platos-probar",
  },
  {
    id: 7,
    title: "Mal de Altura en Cusco: Prevención y Tratamiento",
    excerpt: "Guía completa para prevenir y tratar el mal de altura durante tu visita a Cusco y Machu Picchu.",
    author: "Marjorie Ponce",
    date: "18 Diciembre 2023",
    readTime: "10 min",
    views: "1.7K",
    category: "Consejos de Viaje",
    image: "/blog-malaltura.webp?height=200&width=300",
    href: "/blog/mal-altura-cusco-prevencion",
  },
  {
    id: 8,
    title: "Arquitectura Inca: Técnicas de Construcción",
    excerpt: "Descubre las increíbles técnicas de construcción que utilizaron los incas en Machu Picchu.",
    author: "Marjorie Ponce",
    date: "12 Diciembre 2023",
    readTime: "12 min",
    views: "1.3K",
    category: "Historia Inca",
    image: "/blog8.webp?height=200&width=300",
    href: "/blog/arquitectura-inca-tecnicas-construccion",
  },
  {
    id: 9,
    title: "Fotografía en Machu Picchu: Tips de Experto",
    excerpt: "Consejos profesionales para capturar las mejores fotos de Machu Picchu en cualquier época del año.",
    author: "Marjorie Ponce",
    date: "8 Diciembre 2023",
    readTime: "7 min",
    views: "2.3K",
    category: "Consejos de Viaje",
    image: "/blog9.webp?height=200&width=300",
    href: "/blog/fotografia-machu-picchu-tips",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section 
         className="relative py-24 bg-cover bg-center"
         style={{ backgroundImage: "url('/salva.webp')" }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600">Blog de Viajes</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-300">
              Consejos, historias y guías de expertos para que aproveches al máximo tu aventura en Machu Picchu.
            </p>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-primary-600 mb-8">Artículo Destacado</h2>
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={featuredPost.image || "/placeholder.svg"}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary-600 text-white">{featuredPost.category}</Badge>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-600 mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <Link href={featuredPost.href}>
                      <Button className="bg-secondary-600 hover:bg-secondary-700">
                        Leer Artículo Completo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 bg-secondary-200 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-primary-600 mb-12">Últimos Artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-secondary-600 text-white text-xs">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-2">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg text-primary-600 group-hover:text-secondary-600 transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Link href={post.href}>
                        <Button variant="ghost" size="sm" className="text-secondary-600 hover:text-secondary-700 p-0">
                          Leer más
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <Ready/>
        {/* Newsletter */}
        <section className="py-16 bg-primary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4 text-amber-600">Suscríbete a Nuestro Blog</h2>
            <p className="text-xl mb-8">
              Recibe los mejores consejos de viaje y ofertas exclusivas directamente en tu correo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
              />
              <Button className="bg-secondary-600 hover:bg-secondary-700 px-8">Suscribirse</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
