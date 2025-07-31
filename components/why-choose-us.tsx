import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Heart, Users, Clock, Star, CheckCircle, Globe, Zap, Trophy } from "lucide-react"

const certifications = [
  {
    icon: CheckCircle,
    title: "MINCETUR",
    description: "Certificado oficial del Ministerio de Comercio Exterior y Turismo del Perú",
  },
  {
    icon: Globe,
    title: "TripAdvisor",
    description: "Certificado de Excelencia por 5 años consecutivos",
  },
  {
    icon: Zap,
    title: "ISO 9001",
    description: "Certificación internacional de calidad en servicios turísticos",
  },
  {
    icon: Trophy,
    title: "APTAE",
    description: "Miembro de la Asociación Peruana de Turismo de Aventura y Ecoturismo",
  },
]

const reasons = [
  {
    icon: Award,
    title: "Guías Expertos Locales",
    description:
      "Todos nuestros guías son nativos de Cusco con certificación oficial y conocimiento profundo de la cultura inca.",
  },
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Protocolos de seguridad certificados, equipos de primeros auxilios y seguros completos para todos nuestros tours.",
  },
  {
    icon: Heart,
    title: "Experiencias Auténticas",
    description:
      "Conectamos a los viajeros con la verdadera cultura local a través de experiencias genuinas y respetuosas.",
  },
  {
    icon: Users,
    title: "Grupos Pequeños",
    description: "Mantenemos grupos reducidos para garantizar atención personalizada y una experiencia más íntima.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description: "Soporte completo antes, durante y después de tu viaje. Estamos aquí cuando nos necesites.",
  },
  {
    icon: Star,
    title: "Excelencia Comprobada",
    description:
      "Más de 10,000 viajeros satisfechos y certificado de excelencia en TripAdvisor por 5 años consecutivos.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">¿Por Qué Elegir Machupicchu Origin?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Con más de 15 años de experiencia, somos tu mejor opción para descubrir Machu Picchu de manera segura,
            auténtica y memorable.
          </p>

          {/* Certificaciones */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-4 bg-secondary-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-secondary-600" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-primary-600 mb-2">{cert.title}</h4>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon
            return (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
              >
                <CardContent className="pt-8 pb-6">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-secondary-100 rounded-full">
                      <IconComponent className="h-8 w-8 text-secondary-600" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-primary-600 mb-3">{reason.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
