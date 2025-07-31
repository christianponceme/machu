import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, Share2 } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "La Mejor Época para Visitar Machu Picchu: Guía Definitiva",
  description:
    "Descubre cuál es la mejor época para tu viaje a Machu Picchu. Analizamos la temporada seca y de lluvias para que elijas el momento perfecto.",
  keywords: "mejor época Machu Picchu, cuando visitar Machu Picchu, clima Machu Picchu, temporada seca Machu Picchu, temporada lluvias Machu Picchu",
  openGraph: {
    title: "La Mejor Época para Visitar Machu Picchu: Guía Definitiva",
    description: "Analizamos el clima, los precios y la afluencia de turistas para ayudarte a planificar tu viaje soñado a la maravilla inca.",
    url: "https://machupicchuorigin.com/blog/mejor-epoca-visitar-machu-picchu",
  },
}

export default function MejorEpocaMachuPicchu() {
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
              <span className="text-primary-600">Mejor Época para Visitar Machu Picchu</span>
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
                La Mejor Época del Año para Visitar Machu Picchu: Guía Definitiva
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>30 Julio 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>12 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>1.8K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog-1-1.png?height=400&width=800"
                alt="Machu Picchu en un día soleado de temporada seca"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Elegir la época correcta definirá tu experiencia en la maravilla del mundo, equilibrando clima, multitudes y paisajes.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Planificar un viaje a Machu Picchu es un sueño, pero una pregunta clave determina la experiencia: 
                ¿cuál es la mejor época para ir? La respuesta no es única, pues depende de tus prioridades. ¿Buscas 
                cielos azules para la foto perfecta o prefieres una atmósfera mística con menos gente? Aquí desglosamos 
                cada temporada para que tomes la mejor decisión. 
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">La Dualidad del Clima Andino: Seca vs. Lluviosa</h2>
              <p className="mb-6">
                El clima en la región de Cusco y Machu Picchu se divide en dos estaciones muy marcadas: la temporada seca y la temporada de lluvias. No hay un "verano" o "invierno" tradicional. Cada una ofrece una cara distinta de la ciudadela inca y presenta sus propias ventajas y desventajas.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">Temporada Seca (Abril - Octubre): El Esplendor del Sol</h3>
              <p className="mb-6">
                Considerada por muchos como la mejor época para visitar, la temporada seca ofrece las condiciones climáticas 
                más favorables. Los días son consistentemente soleados, los cielos de un azul intenso y las probabilidades 
                de lluvia son muy bajas, lo que facilita los recorridos. 
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Ventajas Clave:</h4>
                <ul>
                  <li><strong>Vistas Despejadas:</strong> La ausencia de nubes y niebla garantiza vistas panorámicas espectaculares de la ciudadela y las montañas circundantes, como Huayna Picchu. Ideal para la fotografía. </li>
                  <li><strong>Senderismo Seguro:</strong> Los caminos y senderos, tanto dentro del santuario como en rutas como el Camino Inca, están secos y son más seguros para caminar.</li>
                  <li><strong>Clima Agradable:</strong> Disfrutarás de temperaturas cálidas durante el día, perfectas para explorar cada rincón sin preocuparte por el mal tiempo.</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">A Considerar:</h4>
                <p className="text-yellow-700 mb-2">
                  Esta es la temporada alta. La demanda es enorme, lo que se traduce en más turistas y precios más elevados en vuelos, hoteles y tours. <strong>Es crucial reservar todo con meses de antelación</strong>, especialmente las entradas a Machu Picchu y el Camino Inca. 
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">Temporada de Lluvias (Noviembre - Marzo): La Magia Verde y Mística</h3>
              <p className="mb-6">
                Llamada también "temporada verde", esta época transforma el paisaje andino en una paleta de verdes intensos y vibrantes. Aunque las lluvias son frecuentes, raramente duran todo el día. Suelen ser chubascos fuertes pero cortos, principalmente por la tarde, lo que permite explorar, especialmente por las mañanas. 
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-secondary-600 mb-3">Ventajas Clave:</h4>
                <ul>
                  <li><strong>Menos Multitudes:</strong> La menor afluencia de turistas permite una experiencia más íntima y personal. Podrás explorar la ciudadela con más calma y sentir su energía sin aglomeraciones.</li>
                  <li><strong>Paisajes Exuberantes:</strong> La vegetación está en su máximo esplendor. El contraste del verde con la piedra gris y la niebla matutina crea una atmósfera etérea y mágica.</li>
                  <li><strong>Mejores Precios:</strong> Al ser temporada baja, es posible encontrar mejores ofertas en alojamiento y servicios turísticos.</li>
                </ul>
              </div>

              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Dato Importante</h4>
                <p className="text-red-700">
                  El <strong>Camino Inca Clásico cierra por mantenimiento durante todo el mes de febrero</strong> debido a las fuertes lluvias y para labores de conservación. Sin embargo, Machu Picchu y otras rutas alternativas permanecen abiertos.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">El "Punto Dulce": Los Meses de Transición</h2>
              <p className="mb-6">
                Para muchos viajeros experimentados, los mejores meses son los que marcan la transición entre temporadas: <strong>abril, mayo, septiembre y octubre</strong>.  Estos meses ofrecen el equilibrio perfecto.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Disfrutarás de un clima mayormente agradable con menos lluvias que en la temporada húmeda. </li>
                  <li>Los paisajes aún conservan la exuberancia y el verdor de las lluvias recientes.</li>
                  <li>Las multitudes del pico de la temporada alta (junio a agosto) ya han disminuido.</li>
                  <li>Los precios pueden ser ligeramente más bajos que en pleno julio o agosto.</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Tabla Comparativa: ¿Qué Temporada te Conviene?</h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b-2 p-4">Factor</th>
                      <th className="border-b-2 p-4 bg-green-50 text-green-800">Temporada Seca (Abr-Oct)</th>
                      <th className="border-b-2 p-4 bg-blue-50 text-secondary-600">Temporada de Lluvias (Nov-Mar)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b p-4 font-semibold">Clima</td>
                      <td className="border-b p-4 bg-gray-50">Soleado, seco, noches frías.</td>
                      <td className="border-b p-4 bg-gray-50">Lluvias intermitentes, húmedo, templado.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Afluencia</td>
                      <td className="border-b p-4 bg-gray-50">Alta. Muchas multitudes.</td>
                      <td className="border-b p-4 bg-gray-50">Baja. Experiencia más tranquila.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Precios</td>
                      <td className="border-b p-4 bg-gray-50">Altos. Se recomienda reservar con antelación.</td>
                      <td className="border-b p-4 bg-gray-50">Bajos. Buenas ofertas disponibles.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Paisaje</td>
                      <td className="border-b p-4 bg-gray-50">Vegetación más seca, tonos dorados.</td>
                      <td className="border-b p-4 bg-gray-50">Exuberante, verde intenso y vibrante.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Fotografía</td>
                      <td className="border-b p-4 bg-gray-50">Ideal para vistas panorámicas y cielos azules.</td>
                      <td className="border-b p-4 bg-gray-50">Ideal para fotos místicas con niebla y paisajes dramáticos.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Conclusión: ¿Entonces, Cuándo Voy?</h3>
              <p className="mb-6">
                La "mejor" época realmente depende de lo que valores más en tu viaje:
              </p>
              <ul className="mb-6 space-y-3">
                <li>✈️ <strong>Si priorizas el buen tiempo y las vistas garantizadas, y no te importan las multitudes ni los precios más altos:</strong> Elige la temporada seca, especialmente de <strong>mayo a septiembre.</strong></li>
                <li>🧘 <strong>Si buscas una conexión más espiritual, paisajes verdes, menos gente y un presupuesto más ajustado:</strong> La temporada de lluvias (<strong>noviembre a enero, o marzo</strong>) es tu opción ideal. ¡Solo empaca un buen impermeable!</li>
                <li>⚖️ <strong>Si quieres lo mejor de ambos mundos:</strong> Apunta a los meses de transición como <strong>abril, mayo, septiembre u octubre.</strong></li>
              </ul>
              <p className="mb-8">
                Sin importar cuándo decidas venir, Machu Picchu te espera con su energía y belleza inigualables. ¡Planifica con anticipación y prepárate para una de las experiencias más increíbles de tu vida!
              </p>
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