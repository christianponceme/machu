import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Heart, Globe } from "lucide-react"

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Más de 15 años brindando experiencias de calidad mundial en Machu Picchu.",
  },
  {
    icon: Shield,
    title: "Seguridad",
    description: "Protocolos de seguridad certificados y guías con primeros auxilios.",
  },
  {
    icon: Heart,
    title: "Pasión",
    description: "Amamos lo que hacemos y compartimos la magia de nuestra cultura ancestral.",
  },
  {
    icon: Globe,
    title: "Sostenibilidad",
    description: "Comprometidos con el turismo responsable y la conservación del patrimonio.",
  },
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sobre Machupicchu Origin</h2>
            <div className="space-y-6 text-gray-600">
              <p className="text-lg leading-relaxed">
                Somos una agencia de turismo local especializada en crear experiencias únicas e inolvidables en Machu
                Picchu y el Valle Sagrado de los Incas. Fundada por guías nativos de Cusco, nuestra misión es compartir
                la riqueza cultural y natural de nuestros ancestros con viajeros de todo el mundo.
              </p>
              <p className="text-lg leading-relaxed">
                Con más de 15 años de experiencia, hemos perfeccionado cada detalle de nuestros tours para garantizar
                que cada visitante viva una experiencia auténtica, segura y transformadora. Nuestro equipo está formado
                por guías certificados, expertos en historia inca y apasionados por mostrar los secretos mejor guardados
                de esta maravilla del mundo.
              </p>
              <p className="text-lg leading-relaxed">
                Creemos en el turismo responsable y trabajamos de la mano con las comunidades locales para preservar
                nuestro patrimonio cultural y natural para las futuras generaciones.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/placeholder.svg?height=600&width=500"
              alt="Guía local en Machu Picchu"
              className="rounded-lg shadow-xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm">Turistas Felices</div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-orange-100 rounded-full">
                        <IconComponent className="h-8 w-8 text-orange-600" />
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
