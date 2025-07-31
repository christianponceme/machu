import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, Eye, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Guía Completa para Visitar Machu Picchu en 2025",
  description:
    "Todo lo que necesitas saber para planificar tu visita perfecta a la ciudadela inca más famosa del mundo. Guía actualizada 2025.",
  keywords: "guía Machu Picchu 2025, visitar Machu Picchu, consejos Machu Picchu, planificar viaje Machu Picchu",
  openGraph: {
    title: "Guía Completa para Visitar Machu Picchu en 2025",
    description: "Todo lo que necesitas saber para tu visita perfecta a Machu Picchu.",
    url: "https://machupicchuorigin.com/blog/guia-completa-machu-picchu-2025",
  },
}

export default function GuiaCompletaMachuPicchu2025() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-primary-600">Guía Completa Machu Picchu 2025</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Blog
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                Guía Completa para Visitar Machu Picchu en 2025
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>20 Julio 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>15 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>2.5K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog-1-1.png?height=400&width=800"
                alt="Machu Picchu al amanecer"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Leyendo una revista de Machu Picchu al amanecer, con el sol iluminando las ruinas incas.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Machu Picchu, la "Ciudad Perdida de los Incas", sigue siendo uno de los destinos más fascinantes del
                mundo. Esta guía completa te ayudará a planificar tu visita perfecta en 2025, con toda la información
                actualizada que necesitas conocer.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">¿Cuándo Visitar Machu Picchu?</h2>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">Temporada Seca (Mayo - Septiembre)</h3>
              <p className="mb-6">
                Aprovechar la temporada seca para organizar una visita a la legendaria ciudadela de Machu Picchu no es 
                simplemente una recomendación de viaje, es la clave fundamental para desbloquear una experiencia 
                verdaderamente sublime e inolvidable. Este periodo, que se extiende generalmente desde abril hasta octubre,
                representa la ventana de oportunidad ideal para presenciar la majestuosidad del santuario inca en su máximo
                esplendor. Durante estos meses, el clima andino se muestra en su faceta más benevolente, regalando a los
                visitantes días predominantemente soleados, cielos de un azul profundo y una visibilidad casi perfecta.
                Estas condiciones no solo facilitan la logística del viaje, sino que transforman por completo la 
                percepción y el disfrute del lugar, permitiendo que cada rincón, cada piedra y cada paisaje se revele 
                en toda su grandiosa dimensión, sin los inconvenientes o las limitaciones que impone la persistente lluvia
                de la estación húmeda. Planificar el viaje en esta época es asegurarse de que el único protagonista del
                día sea la asombrosa belleza de una de las maravillas del mundo moderno, garantizando una aventura sin 
                contratiempos climáticos y con recuerdos visuales imborrables.
              </p>
              <p className="mb-6">
                El impacto visual de Machu Picchu bajo el sol de la temporada seca es, sencillamente, sobrecogedor. Para los amantes de la fotografía, tanto profesionales como aficionados, estos meses son un paraíso. Imagina llegar al amanecer, cuando los primeros rayos de sol dorado atraviesan la Puerta del Sol (Inti Punku) y comienzan a bañar lentamente las terrazas agrícolas y las intrincadas construcciones de piedra. La luz nítida y clara del Ande define cada contorno, crea sombras dramáticas que acentúan la tridimensionalidad del complejo y resalta el contraste vibrante entre el verde esmeralda del césped y el gris granítico de los muros milenarios. A diferencia de la temporada de lluvias, donde la niebla puede envolver la ciudadela durante horas, ocultando las vistas panorámicas, la estación seca ofrece una claridad excepcional. Desde el mirador principal, es posible contemplar no solo la totalidad del sitio arqueológico, sino también el imponente pico del Huayna Picchu que se alza como un guardián eterno y el serpenteante río Urubamba que ruge en el fondo del cañón. Cada fotografía se convierte en una postal perfecta, una captura impecable de la magia del lugar, sin el filtro grisáceo de la lluvia o la frustración de una vista obstruida.
              </p>
              <p className="mb-6">
                Finalmente, visitar Machu Picchu durante la temporada seca puede intensificar la conexión espiritual y energética que muchos viajeros buscan. El sol, o Inti, era la deidad más importante para la civilización inca, la fuente de vida y poder. Ver el Templo del Sol, el Torreón y el Intihuatana (el reloj solar) bañados por la luz solar directa, tal como fueron diseñados para ser vistos y utilizados, añade una capa de autenticidad y profundidad a la experiencia. La energía del lugar se siente más vibrante, más palpable bajo el cielo despejado. La calidez del sol, la inmensidad del paisaje visible en todas direcciones y el aire puro y fresco de la montaña crean una atmósfera de serenidad y asombro. Es el escenario perfecto para la contemplación, para reflexionar sobre la increíble hazaña de ingeniería y la profunda cosmovisión de sus constructores. La temporada seca, en esencia, no solo ofrece las mejores condiciones físicas y visuales, sino que también proporciona el contexto ambiental ideal para conectar con el alma de Machu Picchu, para entender por qué este lugar fue, y sigue siendo, un centro sagrado de inmenso poder y significado. Es la garantía de vivir la experiencia en su forma más pura, gloriosa y completa.
              </p>
              <ul className="mb-6">
                <li>
                  <strong>Ventajas:</strong> Clima seco, cielos despejados, ideal para trekking
                </li>
                <li>
                  <strong>Desventajas:</strong> Mayor cantidad de turistas, precios más altos
                </li>
                <li>
                  <strong>Temperatura:</strong> Días cálidos (20-25°C), noches frías (5-10°C)
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">
                Temporada de Lluvias (Octubre - Abril)
              </h3>
              <p className="mb-6">
                Aunque hay más precipitaciones, esta época tiene sus propios encantos. Los paisajes están más verdes y
                hay menos multitudes, lo que permite una experiencia más íntima.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Cómo Llegar a Machu Picchu</h2>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">1. Tren desde Cusco</h3>
              <p className="mb-6">
                La forma más popular y cómoda de llegar. Hay varias opciones de tren que van desde Cusco (estación
                Poroy) o desde Ollantaytambo hasta Aguas Calientes.
              </p>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold mb-3">Opciones de Tren:</h4>
                <ul>
                  <li>
                    <strong>Expedition:</strong> Opción económica, ventanas panorámicas
                  </li>
                  <li>
                    <strong>Vistadome:</strong> Ventanas en el techo, snacks incluidos
                  </li>
                  <li>
                    <strong>Hiram Bingham:</strong> Tren de lujo, comida gourmet
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">2. Camino Inca</h3>
              <p className="mb-6">
                La ruta de trekking más famosa del mundo. Requiere reserva con meses de anticipación y buena condición
                física. La experiencia incluye varios sitios arqueológicos en el camino.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Entradas y Reservas</h2>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Importante</h4>
                <p className="text-yellow-700">
                  Las entradas a Machu Picchu deben comprarse con anticipación, especialmente en temporada alta. Se
                  recomienda reservar al menos 2-3 meses antes de tu viaje.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">Tipos de Entrada</h3>
              <ul className="mb-6">
                <li>
                  <strong>Machu Picchu Solo:</strong> Acceso a la ciudadela principal
                </li>
                <li>
                  <strong>Machu Picchu + Huayna Picchu:</strong> Incluye la montaña icónica
                </li>
                <li>
                  <strong>Machu Picchu + Montaña:</strong> Acceso a la Montaña Machu Picchu
                </li>
                <li>
                  <strong>Machu Picchu + Huchuy Picchu:</strong> Opción más fácil para familias
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Qué Llevar</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold mb-3">Ropa Esencial:</h4>
                  <ul>
                    <li>Ropa en capas</li>
                    <li>Chaqueta impermeable</li>
                    <li>Zapatos de trekking</li>
                    <li>Sombrero y gafas de sol</li>
                    <li>Ropa de cambio</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Otros Elementos:</h4>
                  <ul>
                    <li>Protector solar (factor alto)</li>
                    <li>Repelente de insectos</li>
                    <li>Cámara fotográfica</li>
                    <li>Batería portátil</li>
                    <li>Botella de agua</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Consejos Importantes</h2>

              <div className="space-y-4 mb-8">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-secondary-600 mb-2">💡 Aclimatación</h4>
                  <p className="text-blue-700">
                    Llega a Cusco al menos 1-2 días antes para aclimatarte a la altitud (3,400m). Bebe mucha agua y
                    evita el alcohol.
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">📸 Fotografía</h4>
                  <p className="text-green-700">
                    Las mejores fotos se toman temprano en la mañana. Llega en el primer bus para evitar multitudes y
                    capturar la ciudadela con mejor luz.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🎒 Equipaje</h4>
                  <p className="text-purple-700">
                    Solo se permite equipaje de mano pequeño. Las mochilas grandes deben dejarse en los lockers de Aguas
                    Calientes.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Presupuesto Estimado</h2>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Económico</h4>
                    <ul className="text-sm">
                      <li>Entrada: $45</li>
                      <li>Tren: $65</li>
                      <li>Bus: $24</li>
                      <li>Alojamiento: $30/noche</li>
                      <li>
                        <strong>Total: ~$164</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Medio</h4>
                    <ul className="text-sm">
                      <li>Entrada: $45</li>
                      <li>Tren: $85</li>
                      <li>Bus: $24</li>
                      <li>Alojamiento: $60/noche</li>
                      <li>
                        <strong>Total: ~$214</strong>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Lujo</h4>
                    <ul className="text-sm">
                      <li>Entrada: $45</li>
                      <li>Tren: $450</li>
                      <li>Bus: $24</li>
                      <li>Alojamiento: $200/noche</li>
                      <li>
                        <strong>Total: ~$719</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            <Ready/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
