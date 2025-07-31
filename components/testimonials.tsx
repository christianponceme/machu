"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Quote, MessageCircle } from "lucide-react"

const testimonials = [
  {
    name: "Sara Vargas",
    country: "Puerto Rico",
    rating: 5,
    text: "¡Increíble experiencia! Carlos, nuestro guía, conocía cada detalle de la historia inca. El tour fue perfectamente organizado y las vistas de Machu Picchu al amanecer fueron simplemente mágicas.",
    tour: "Tour Clásico a Machu Picchu",
    image: "/testimoino0.png?height=80&width=80",
  },
  {
    name: "Marco Rossi",
    country: "España",
    rating: 5,
    text: "El Camino Inca fue la aventura de mi vida. El equipo de Machupicchu Origin se encargó de todo, desde el equipamiento hasta la comida deliciosa. Recomiendo 100% esta agencia.",
    tour: "Camino Inca Clásico",
    image: "/testimonio1.png?height=80&width=80",
  },
  {
    name: "Emma Thompson",
    country: "Puerto Rico",
    rating: 5,
    text: "Como fotógrafa, el Tour Puno superó todas mis expectativas. Los guías conocían los mejores spots y horarios para capturar Machu Picchu en todo su esplendor.",
    tour: "Tour Puno",
    image: "/testimonio2.png?height=80&width=80",
  },
  {
    name: "Hans Mueller",
    country: "Colombia",
    rating: 5,
    text: "Servicio excepcional desde el primer contacto. La atención personalizada y el conocimiento local hicieron que nuestro viaje familiar fuera perfecto. Volveremos sin duda.",
    tour: "Tour Privado VIP",
    image: "/testimonio3.png?height=80&width=80",
  },
]

export default function Testimonials() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "51907966198"
    const message =
      "Hola! Me interesa conocer más sobre los tours a Machu Picchu después de leer las excelentes reseñas."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Lo Que Dicen Nuestros Viajeros</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Miles de viajeros han confiado en nosotros para vivir la experiencia de sus vidas. Lee sus testimonios
            reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={testimonial.image ||"/placeholder.svg" }
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">• {testimonial.tour}</span>
                    </div>
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 h-6 w-6 text-secondary-200" />
                      <p className="text-gray-700 leading-relaxed mb-4 pl-4">{testimonial.text}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-primary-600">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.country}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-light-500 border border-secondary-200 rounded-lg px-6 py-3 mb-6">
            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            <span className="text-primary-600 font-semibold">4.9/5 estrellas en TripAdvisor</span>
            <span className="text-secondary-600">• Más de 500 reseñas</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={handleWhatsAppClick} className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <svg
              className="mr-2 h-5 w-5" // Le das las clases de tamaño y margen
              fill="currentColor"
              viewBox="0 0 24 24"
             >
             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
             </svg>
             Contactanos por WhatsApp
            </Button>
            <Button
              variant="outline"
              className="border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent px-8 py-3"
              onClick={() => window.open("tel:+51907966198", "_self")}
            >
              Llamar Ahora: +51 907 966 198
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
