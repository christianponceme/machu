"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Camera, Compass, Train, Mountain } from "lucide-react"

const services = [
  {
    icon: Train,
    title: "Tour Clásico a Machu Picchu",
    description: "Viaje en tren panorámico y visita guiada completa a la ciudadela inca.",
    duration: "1 día",
    price: "Desde $180",
    features: ["Tren panorámico", "Guía profesional", "Entrada incluida", "Almuerzo típico"],
  },
  {
    icon: Mountain,
    title: "Camino Inca Clásico",
    description: "Trekking de 4 días por la ruta original hacia Machu Picchu.",
    duration: "4 días",
    price: "Desde $650",
    features: ["Camping incluido", "Cocinero personal", "Porteadores", "Equipo completo"],
  },
  {
    icon: Compass,
    title: "Salkantay Trek",
    description: "Aventura alternativa de 5 días con paisajes espectaculares.",
    duration: "5 días",
    price: "Desde $450",
    features: ["Aguas termales", "Vistas del Salkantay", "Pueblos locales", "Experiencia auténtica"],
  },
  {
    icon: Camera,
    title: "Tour Puno",
    description: "Experiencia especializada para capturar los mejores momentos.",
    duration: "2 días",
    price: "Desde $320",
    features: ["Guía fotógrafo", "Mejores ubicaciones", "Amanecer y atardecer", "Tips profesionales"],
  },
  {
    icon: Users,
    title: "Tour Privado VIP",
    description: "Experiencia exclusiva y personalizada para grupos pequeños.",
    duration: "Flexible",
    price: "Desde $400",
    features: ["Guía privado", "Transporte exclusivo", "Itinerario personalizado", "Atención premium"],
  },
  {
    icon: Clock,
    title: "Tour Express",
    description: "Visita rápida pero completa ideal para viajeros con poco tiempo.",
    duration: "1 día",
    price: "Desde $150",
    features: ["Salida temprana", "Tren rápido", "Visita esencial", "Regreso mismo día"],
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nuestros Tours y Servicios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia variedad de experiencias para que vivas Machu Picchu de la manera que más te guste,
            desde tours clásicos hasta aventuras extremas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <IconComponent className="h-6 w-6 text-orange-600" />
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                      <Button className="bg-orange-600 hover:bg-orange-700">Reservar Ahora</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            onClick={() => {
              const element = document.querySelector("#contacto")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Ver Todos los Tours
          </Button>
        </div>
      </div>
    </section>
  )
}
