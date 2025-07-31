
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Shield, Heart, Globe, Star, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Acerca de Nosotros - Machupicchu Origin",
  description:
    "Conoce la historia de Machupicchu Origin, una agencia de turismo local con más de 15 años de experiencia creando experiencias únicas en Machu Picchu y el Valle Sagrado.",
  keywords: "agencia turismo Cusco, guías locales Machu Picchu, turismo responsable Perú",
  openGraph: {
    title: "Acerca de Nosotros - Machupicchu Origin",
    description: "Conoce nuestra historia y compromiso con el turismo responsable en Machu Picchu.",
    url: "https://machupicchuorigin.com/nosotros",
  },
}

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Más de 3 años brindando experiencias de calidad mundial en Machu Picchu.",
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

const stats = [
  { number: "3+", label: "Años de Experiencia" },
  { number: "200+", label: "Turistas Satisfechos" },
  { number: "40+", label: "Tours Disponibles" },
  { number: "10+", label: "Guías Certificados" },
]

const team = [
  {
    name: "Marjorie Ponce",
    role: "Fundadora y Guía Principal",
    image: "/CEO.png?height=300&width=300",
    description: "Egresada guía de turismo con 3 años de experiencia, nacida en Cusco y experta en historia inca.",
  },
  {
    name: "Alejandra Huamán",
    role: "Directora de Operaciones",
    image: "/worker1.png?height=300&width=300",
    description: "Especialista en logística de tours con formación en turismo sostenible.",
  },
  {
    name: "Eduardo Flores",
    role: "Director de Marketing",
    image: "/worker2.png?height=300&width=300",
    description: "Experto en marketing y experto en ventas.",
 },
]

const certifications = [
  "Certificación MINCETUR",
  "Guías Oficiales de Turismo",
  "Primeros Auxilios Wilderness",
  "Turismo Sostenible",
  "Certificación TripAdvisor",
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600">Acerca de Machupicchu Origin</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-300">
              Tu puerta de entrada auténtica a la magia de Machu Picchu, guiada por expertos locales apasionados por
              nuestra cultura ancestral.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-secondary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-accent-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-6">Nuestra Historia</h2>
                <div className="space-y-6 text-gray-700">
                  <p className="text-lg leading-relaxed text-primary-500">
                    Machupicchu Origin nació en 2022 del sueño de Marjorie Ponce, una guía local de Cusco que creció
                    escuchando las historias de sus abuelos sobre los antiguos incas. Después de años trabajando para
                    otras agencias, Marjorie decidió crear su propia empresa para ofrecer experiencias más auténticas y
                    personalizadas.
                  </p>
                  <p className="text-lg leading-relaxed text-primary-500">
                    Lo que comenzó como unos cortos cuentos, se ha convertido en una de las agencias con más
                    compromiso de Cusco, manteniendo siempre nuestros valores fundamentales: autenticidad, respeto por
                    la cultura local y compromiso con la conservación del patrimonio.
                  </p>
                  <p className="text-lg leading-relaxed text-primary-500">
                    Hoy, nuestro equipo está formado por más de 10 guías certificados, todos nacidos en la región y
                    apasionados por compartir la riqueza cultural de nuestros ancestros con viajeros de todo el mundo.
                  </p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/historia.png?height=600&width=500"
                  alt="Historia de Machupicchu Origin"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
                <div className="absolute -bottom-6 -left-6 bg-secondary-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-3xl font-bold">2022</div>
                  <div className="text-sm">Año de Fundación</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Nuestros Valores</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Los principios que guían cada una de nuestras acciones y nos han convertido en líderes del turismo
                responsable en Cusco.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon
                return (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="pt-8 pb-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-secondary-100 rounded-full">
                          <IconComponent className="h-8 w-8 text-secondary-600" />
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-primary-600 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-accent-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Nuestro Equipo</h2>
              <p className="text-xl text-primary-500 max-w-3xl mx-auto">
                Conoce a los expertos locales que harán de tu viaje una experiencia inolvidable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 ">
                  <CardContent className="pt-8 pb-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h4 className="text-xl font-semibold text-primary-600 mb-2">{member.name}</h4>
                    <p className="text-secondary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-primary-500 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">Certificaciones y Reconocimientos</h2>
              <p className="text-xl text-primary-500 max-w-3xl mx-auto">
                Nuestro compromiso con la excelencia está respaldado por certificaciones oficiales y reconocimientos de
                la industria.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-accent-500 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                  <span className="text-primary-500 font-medium">{cert}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-light-500 border border-secondary-200 rounded-lg px-6 py-3">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="text-primary-500 font-semibold">Certificado de TripAdvisor 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-light-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-secondary-200">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="h-8 w-8 text-secondary-600" />
                    <h3 className="text-2xl font-bold text-primary-600">Nuestra Misión</h3>
                  </div>
                  <p className="text-primary-500 leading-relaxed">
                    Crear experiencias auténticas y transformadoras que conecten a los viajeros con la rica herencia
                    cultural de los incas, mientras promovemos el turismo responsable y apoyamos a las comunidades
                    locales de Cusco y el Valle Sagrado.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-secondary-200">
                <CardContent className="pt-8 pb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Globe className="h-8 w-8 text-secondary-600" />
                    <h3 className="text-2xl font-bold text-primary-600">Nuestra Visión</h3>
                  </div>
                  <p className="text-primary-500 leading-relaxed">
                    Ser reconocidos como la agencia líder en turismo cultural y sostenible en Perú, preservando y
                    compartiendo nuestro patrimonio ancestral con el mundo, mientras contribuimos al desarrollo
                    económico y social de nuestras comunidades.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer /> 
      <WhatsAppButton />
     </div>
  )
}