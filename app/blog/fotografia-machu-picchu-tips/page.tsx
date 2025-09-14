import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, Camera } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Fotografía en Machu Picchu: 10 Tips para Capturar la Foto Perfecta",
  description:
    "Consejos esenciales para fotógrafos de todos los niveles. Aprende sobre la mejor luz, ángulos clásicos, y cómo capturar la magia de Machu Picchu con tu cámara.",
  keywords: "fotografía Machu Picchu, tips fotos Machu Picchu, mejores fotos Machu Picchu, cómo fotografiar Machu Picchu, ángulos Machu Picchu, luz Machu Picchu",
  openGraph: {
    title: "Fotografía en Machu Picchu: 10 Tips Esenciales para Capturar la Magia",
    description: "Desde la hora dorada hasta los ángulos secretos, esta guía te ayudará a tomar las mejores fotos de la maravilla inca.",
    url: "https://machupicchuorigin.com/blog/fotografia-machu-picchu-tips",
  },
}

export default function FotografiaMachuPicchu() {
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
              <span className="text-primary-600">Fotografía en Machu Picchu: Tips</span>
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
                Fotografía en Machu Picchu: 10 Tips para Capturar la Foto Perfecta
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>8 Diciembre 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>7 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>2.3 K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog9-foto.webp"
                alt="Fotógrafo capturando la clásica vista de Machu Picchu al amanecer."
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Encontrar la luz y el ángulo perfectos es clave para transmitir la inmensidad y magia de la ciudadela inca.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Machu Picchu es, sin duda, uno de los lugares más fotogénicos del planeta. Cada rincón parece diseñado para ser capturado. Pero conseguir esa foto espectacular, la que realmente transmite la magia del lugar, requiere algo más que apuntar y disparar. Ya sea que uses un smartphone o una cámara profesional, estos 10 consejos te ayudarán a llevarte a casa recuerdos imborrables.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center"><Camera className="mr-3" /> Los Mejores Consejos Fotográficos para Machu Picchu</h2>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">1. Aprovecha la Hora Dorada</h3>
              <p className="mb-6">
                La luz es el ingrediente más importante en fotografía. La mejor luz en Machu Picchu es durante la "hora dorada": la primera hora después del amanecer y la última hora antes del atardecer.
                <br/><strong>Por la mañana:</strong> Ingresa en el primer turno. La luz es suave, dorada y a menudo encontrarás una niebla mística que se disipa lentamente, revelando la ciudadela poco a poco.
                <br/><strong>Por la tarde:</strong> La luz cálida del atardecer baña las piedras con tonos dorados y crea largas sombras que dan profundidad a la imagen. Además, suele haber menos gente. Evita el mediodía, cuando el sol directo crea sombras duras y aplana la imagen.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">2. Busca el Ángulo Clásico (¡y Asegura tu Boleto!)</h3>
              <p className="mb-6">
                La foto postal de Machu Picchu se toma desde la zona alta, cerca de la <strong>Casa del Guardián</strong>. Para acceder a esta vista panorámica, necesitas un boleto del <strong>Circuito 1 o 2</strong>. Desde aquí tendrás la ciudadela completa con la montaña Huayna Picchu al fondo. Investiga y compra tus boletos con antelación para asegurar el acceso a este mirador.
              </p>

              <div className="my-8">
                <img src="/machupicchu -profesional.webp" alt="La vista panorámica clásica de Machu Picchu desde la Casa del Guardián." className="w-full rounded-lg shadow-md" />
                <p className="text-sm text-center mt-2 text-gray-500">La vista icónica requiere el boleto correcto (Circuito 1 o 2).</p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">3. Juega con la Composición</h3>
              <p className="mb-6">
                No te limites a centrar la ciudadela. Usa técnicas de composición para hacer tus fotos más interesantes. Utiliza la <strong>regla de los tercios</strong>, coloca las líneas de los andenes (terrazas) para que guíen la mirada del espectador (líneas guía), y usa las ventanas y puertas trapezoidales para <strong>enmarcar</strong> vistas de las montañas o de otros edificios.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">4. Incluye un Sujeto: Personas o Llamas</h3>
              <p className="mb-6">
                Añadir una persona (o una de las famosas llamas residentes) en tu foto puede darle una increíble sensación de escala y contar una historia. Una figura humana contemplando el paisaje transmite asombro. Una llama posando con indiferencia añade un toque de autenticidad y humor. ¡Ten paciencia y espera el momento perfecto!
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">5. Enfócate en los Detalles</h3>
              <p className="mb-6">
                Machu Picchu es más que su vista panorámica. Acércate y captura los detalles que revelan la maestría inca: el ensamblaje perfecto de las piedras, la textura de la roca cubierta de musgo, los intrincados canales de agua, o las delicadas orquídeas que crecen en las grietas. Estas tomas macro cuentan una historia más íntima.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">6. Utiliza un Lente Gran Angular</h3>
              <p className="mb-6">
                Para capturar la inmensidad del paisaje que rodea a Machu Picchu, un lente gran angular es tu mejor amigo. Te permitirá incluir tanto la ciudadela como las imponentes montañas que la rodean en una sola toma. La mayoría de los smartphones modernos tienen un excelente modo "gran angular" que funciona de maravilla.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">7. Sé Paciente con el Clima</h3>
              <p className="mb-6">
                El clima en la ceja de selva es impredecible. La niebla puede cubrirlo todo en un instante y desaparecer al siguiente. No te desesperes si llegas y no se ve nada. A menudo, la niebla crea las fotos más dramáticas y etéreas. Ten paciencia, busca un buen lugar y espera. La recompensa puede ser una vista espectacular que pocos llegan a ver.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-10 rounded-r-lg">
                <h4 className="font-bold text-xl text-blue-700 mb-3">Equipo Esencial</h4>
                <ul className="text-secondary-600 list-none p-0">
                  <li><strong>Cámara:</strong> ¡La que tengas! Desde tu smartphone hasta una DSLR.</li>
                  <li><strong>Lentes:</strong> Un gran angular es clave. Un lente versátil (24-70mm) también es una gran opción.</li>
                  <li><strong>Baterías y Memoria:</strong> ¡Lleva extras! La altitud y el frío pueden agotar las baterías más rápido.</li>
                  <li><strong>Protección:</strong> Una funda o bolsa impermeable es indispensable. El clima cambia rápido.</li>
                  <li><strong>Paño de microfibra:</strong> Para limpiar el lente de la lluvia o la niebla.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">8. Respeta las Reglas Fotográficas</h3>
              <p className="mb-6">
                Recuerda que estás en un Santuario Histórico. Los <strong>trípodes, monopods, palos de selfie y drones están prohibidos</strong> para el público general para proteger el sitio y no incomodar a los demás visitantes. Infórmate de las últimas regulaciones antes de ir.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">9. Explora Ángulos Menos Típicos</h3>
              <p className="mb-6">
                Una vez que tengas la foto clásica, ¡muévete! Baja a la parte central de la ciudadela y fotografía los edificios desde abajo hacia arriba. Si haces la caminata hacia el <strong>Intipunku (Puerta del Sol)</strong> o el <strong>Puente Inca</strong>, obtendrás perspectivas completamente diferentes y con menos gente.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">10. El Toque Final: La Edición</h3>
              <p className="mb-6">
                No tengas miedo de editar un poco tus fotos. Un simple ajuste de contraste, exposición o saturación puede hacer que los colores resalten y que tu imagen cobre vida. Hay muchas aplicaciones gratuitas y fáciles de usar (como Snapseed o Lightroom Mobile) que pueden mejorar tus fotos en segundos.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Conclusión: Captura tu Propia Experiencia</h3>
              <p className="mb-8">
                Más allá de la técnica, la mejor foto será aquella que capture lo que sentiste al estar en ese lugar mágico. Experimenta, sé creativo y no olvides guardar la cámara por momentos para simplemente absorber la energía y la belleza de Machu Picchu con tus propios ojos. ¡Ese es el mejor recuerdo de todos!
              </p>

              <Ready />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}