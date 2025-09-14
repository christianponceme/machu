import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, Puzzle } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Arquitectura Inca: Las Asombrosas Técnicas de Construcción que Desafían el Tiempo",
  description:
    "Explora la genialidad de la arquitectura inca. Descubre sus técnicas de construcción, el uso de la piedra, y cómo sus edificaciones resisten terremotos hasta hoy.",
  keywords: "arquitectura inca, construcción inca, técnicas construcción inca, piedras incas, muros incas, Sacsayhuaman, Machu Picchu arquitectura",
  openGraph: {
    title: "Arquitectura Inca: Secretos de las Construcciones que Vencieron a la Naturaleza",
    description: "Un análisis detallado de la cantería, el diseño trapezoidal y la ingeniería antisísmica que hacen de la arquitectura inca un legado eterno.",
    url: "https://machupicchuorigin.com/blog/arquitectura-inca-tecnicas-construccion",
  },
}

export default function ArquitecturaInca() {
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
              <span className="text-primary-600">Arquitectura Inca: Técnicas de Construcción</span>
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
                Arquitectura Inca: Las Asombrosas Técnicas que Desafían al Tiempo
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>12 Diciembre 2023</span>
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
                  <span>1.3K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog-construccion.webp"
                alt="Detalle de un muro inca perfectamente ensamblado en Cusco."
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                El ensamblaje perfecto de las piedras, sin mortero, es el sello distintivo de la maestría constructiva inca.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Visitar Machu Picchu, Sacsayhuamán o cualquier sitio arqueológico inca es quedar maravillado ante una pregunta inevitable: ¿cómo lo hicieron? La arquitectura inca no es solo un conjunto de ruinas antiguas; es un testimonio de una ingeniería avanzada, una precisión asombrosa y una profunda conexión con la naturaleza que sigue desafiando nuestra comprensión moderna.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Los 3 Pilares de la Arquitectura Inca</h2>
              <p className="mb-6">
                La genialidad de las construcciones incas se puede entender a través de tres principios fundamentales que aplicaron en cada edificación: precisión, solidez y armonía.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4 flex items-center">
                <Puzzle className="mr-3" /> 1. Precisión: La Cantería Perfecta sin Mortero
              </h3>
              <p className="mb-6">
                El rasgo más famoso de la arquitectura inca es su cantería. Los incas eran maestros en cortar y pulir enormes bloques de piedra hasta que encajaran con una precisión milimétrica, sin necesidad de usar ningún tipo de argamasa o mortero. Esta técnica, conocida como "sillar", creaba muros tan ajustados que ni una hoja de papel puede insertarse entre las piedras. Un ejemplo icónico es la <strong>Piedra de los Doce Ángulos</strong> en la calle Hatun Rumiyoc de Cusco, una sola piedra que encaja perfectamente con doce otras a su alrededor.
              </p>
              <div className="my-8">
                <img src="/piedra-12-angulos.webp" alt="La famosa Piedra de los Doce Ángulos en Cusco" className="w-full rounded-lg shadow-md" />
                <p className="text-sm text-center mt-2 text-gray-500">Un testimonio de la habilidad inca para trabajar la piedra de forma poligonal.</p>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">2. Solidez: Ingeniería Antisísmica Adelantada a su Tiempo</h3>
              <p className="mb-6">
                Los Andes es una región sísmicamente activa. Los incas lo sabían y diseñaron sus edificios para durar. Sus técnicas de construcción antisísmica eran increíblemente eficaces:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li><strong>Muros Inclinados:</strong> Las paredes se construían con una ligera inclinación hacia adentro para aumentar su estabilidad.</li>
                  <li><strong>Formas Trapezoidales:</strong> Puertas, ventanas y nichos eran más anchos en la base que en la parte superior. Esta forma distribuye el peso de manera más efectiva y es extremadamente estable durante los terremotos.</li>
                  <li><strong>Ensamblaje Flexible:</strong> Al no usar mortero, las piedras podían moverse individualmente durante un sismo. Se dice que las piedras "danzaban" con el temblor y luego volvían a su lugar original, disipando la energía sísmica.</li>
              </ul>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Las "Piedras Danzantes"</h4>
                <p className="text-yellow-700 mb-2">
                  Esta es la razón por la que muchas construcciones coloniales españolas, construidas sobre cimientos incas, se derrumbaron durante los terremotos, mientras que los muros incas originales permanecieron intactos. Los españoles construían con rigidez; los incas, con flexibilidad.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">3. Armonía: Construyendo en Diálogo con la Naturaleza</h3>
              <p className="mb-6">
                Los incas no buscaban dominar el paisaje, sino formar parte de él. Sus construcciones se integran de manera orgánica y respetuosa con el entorno. Adaptaban sus edificios a la topografía de las montañas, seguían las curvas de los ríos y a menudo incorporaban formaciones rocosas naturales (huacas sagradas) como parte de sus muros o templos. Machu Picchu es el ejemplo supremo: la ciudadela parece una extensión natural de la montaña en la que fue construida.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Tipos de Muros y Estilos Constructivos</h2>
              <p className="mb-6">
                No todos los muros incas son iguales. Se pueden identificar principalmente dos estilos:
              </p>
              <ul className="mb-6 space-y-3">
                <li>🧱 <strong>Estilo Celular o Poligonal:</strong> Caracterizado por piedras de formas y tamaños irregulares que encajan como un rompecabezas. Es el estilo que vemos en las murallas de Sacsayhuamán, con sus bloques megalíticos.</li>
                <li>🏛️ <strong>Estilo Sedimentario o Regular:</strong> Utiliza bloques rectangulares de piedra, dispuestos en hileras horizontales perfectas. Este estilo, más refinado, se reservaba para edificios de gran importancia, como el <strong>Coricancha</strong> o Templo del Sol en Cusco.</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">El Misterio: ¿Cómo Movían las Piedras Gigantes?</h2>
              <p className="mb-6">
                Esta sigue siendo una de las grandes preguntas. No tenían la rueda para transporte pesado ni animales de tiro capaces de mover bloques de más de 100 toneladas. La teoría más aceptada es que utilizaron una combinación de ingenio y una increíble fuerza laboral (a través del sistema de trabajo comunitario llamado <strong>mita</strong>). Se cree que usaron rampas de tierra y piedra, troncos de madera como rodillos, palancas y cuerdas para arrastrar las piedras desde las canteras, a menudo a kilómetros de distancia.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Conclusión: Un Legado de Piedra e Ingenio</h3>
              <p className="mb-8">
                La arquitectura inca es mucho más que piedras apiladas. Es un símbolo de poder, un sistema de conocimiento y una expresión de su cosmovisión. Cada muro, cada terraza y cada templo nos habla de un pueblo que dominó la ingeniería y vivió en profunda armonía con el mundo que los rodeaba. La próxima vez que te pares frente a una de estas magníficas construcciones, tómate un momento para apreciar el increíble legado de ingenio que ha perdurado a través de los siglos.
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