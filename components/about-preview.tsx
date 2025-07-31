import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Heart, Shield } from "lucide-react"

const highlights = [
  {
    icon: Award,
    title: "3+ Años",
    description: "De experiencia en turismo",
  },
  {
    icon: Users,
    title: "10+ Guías",
    description: "Certificados y locales",
  },
  {
    icon: Heart,
    title: "200+",
    description: "Viajeros satisfechos",
  },
  {
    icon: Shield,
    title: "100%",
    description: "Seguridad garantizada",
  },
]

export default function AboutPreview() {
  return (
    <section className="py-24 bg-accent-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">Somos Machupicchu Origin</h2>
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Somos una agencia de turismo local especializada en crear experiencias únicas e inolvidables en Machu
                Picchu y el Valle Sagrado de los Incas. Fundada por guías nativos de Cusco, nuestra misión es compartir
                la riqueza cultural y natural de nuestros ancestros.
              </p>
              <p className="text-lg leading-relaxed">
                Con más de 15 años de experiencia, hemos perfeccionado cada detalle de nuestros tours para garantizar
                que cada visitante viva una experiencia auténtica, segura y transformadora.
              </p>
            </div>
            <div className="mt-8">
              <Link href="/nosotros">
                <Button className="bg-secondary-600 hover:bg-secondary-700 text-white">Conoce Nuestra Historia</Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 bg-white">
                  <CardContent className="pt-6 pb-4">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 bg-secondary-100 rounded-full">
                        <IconComponent className="h-6 w-6 text-secondary-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-primary-600 mb-1">{highlight.title}</div>
                    <p className="text-sm text-gray-600">{highlight.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
