import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, BookOpen, Wrench, HelpCircle } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Historia y Misterios de Machu Picchu: Lo que no te Cuentan",
  description: "Explora la fascinante historia de Machu Picchu, desde su construcción por Pachacútec hasta su abandono y redescubrimiento. Descubre los misterios que aún rodean a la ciudadela inca.",
  keywords: "historia Machu Picchu, misterios Machu Picchu, construcción Machu Picchu, Pachacútec, Hiram Bingham, ciudadela inca, misterios incas",
  openGraph: {
    title: "Historia y Misterios de Machu Picchu: Lo que no te Cuentan",
    description: "Sumérgete en los enigmas y la grandeza de la ciudadela inca. Un viaje a través del tiempo para entender su propósito, su abandono y los secretos que guarda.",
    url: "https://machupicchuorigin.com/blog/historia-misterios-machu-picchu",
  },
}

export default function HistoriaMisteriosMachuPicchu() {
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
              <span className="text-primary-600">Historia y Misterios de Machu Picchu</span>
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
                Historia y Misterios de Machu Picchu: Lo que no te Cuentan los Guías
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>12 Marzo 2025</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>11 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>2.1K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/pachacutek.jpeg?height=400&width=800"
                alt="Vista mística de Machu Picchu entre la niebla"
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Cada piedra de Machu Picchu guarda siglos de historia y preguntas sin respuesta.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Machu Picchu es mucho más que una postal espectacular o una simple ruina antigua. Es un libro de historia escrito en piedra, un testimonio de ingeniería celestial y un cofre lleno de misterios que, incluso hoy, desafían nuestras explicaciones. ¿Estás listo para viajar en el tiempo y desvelar algunos de sus secretos mejor guardados?
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center"><BookOpen className="mr-3 text-amber-600"/>El Origen: La Visión del Inca Pachacútec</h2>
              <p className="mb-6">
                La historia oficial nos dice que Machu Picchu fue construido a mediados del siglo XV, alrededor de 1450, bajo el mandato del Inca Pachacútec, el gran transformador del imperio incaico. Pero su propósito exacto sigue siendo un tema de debate. No era una ciudad común; su ubicación remota y su exquisita arquitectura sugieren funciones muy especiales.
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li><strong>Residencia Real:</strong> Se cree que fue una lujosa finca de descanso para el Inca y su corte, un lugar para escapar de las presiones de Cusco.</li>
                <li><strong>Santuario Religioso:</strong> Su alineación con montañas sagradas (Apus) y astros sugiere que era un centro ceremonial y astronómico de suma importancia.</li>
                <li><strong>Centro Administrativo:</strong> Su ubicación estratégica entre los Andes y la selva amazónica la convertía en un punto de control clave para el intercambio de productos como la hoja de coca.</li>
              </ul>
              <p className="mb-6">
                Lo más probable es que fuera una combinación de las tres, una ciudadela multifuncional que reflejaba el poder y la cosmovisión del imperio inca.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center"><Wrench className="mr-3 text-gray-700"/>La Proeza de la Ingeniería Inca</h2>
              <p className="mb-6">
                La construcción de Machu Picchu es, en sí misma, un misterio. ¿Cómo lograron los incas, sin herramientas de hierro ni la rueda, levantar una ciudad de piedra en la cima de una montaña con tal precisión?
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Técnicas Asombrosas:</h4>
                <ul>
                  <li><strong>Arquitectura Antisísmica:</strong> Los muros tienen una ligera inclinación hacia adentro y las piedras de las esquinas están encajadas de forma trapezoidal, lo que permite que "bailen" durante un terremoto y vuelvan a su sitio, una tecnología que supera a muchas construcciones modernas.</li>
                  <li><strong>Técnica Ashlar:</strong> Cortaron y pulieron enormes bloques de granito para que encajaran perfectamente sin una gota de mortero. La unión entre algunas piedras es tan precisa que ni una hoja de papel puede insertarse.</li>
                  <li><strong>Manejo del Agua:</strong> Crearon un sistema de 130 fuentes y canales subterráneos que abastecían de agua a toda la ciudadela, un sistema que sigue funcionando hoy.</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center"><HelpCircle className="mr-3 text-sky-600"/>El Gran Misterio: ¿Por Qué se Abandonó?</h2>
              <p className="mb-6">
                Tan enigmático como su construcción es su abandono. Machu Picchu fue habitado por menos de 100 años. Alrededor de 1540, sus pobladores se marcharon, dejando la ciudadela casi intacta. No hay registros de una batalla ni de su destrucción. Las principales teorías son:
              </p>
               <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <p className="text-yellow-700 mb-2">
                  La teoría más aceptada es que la conquista española interrumpió las vías de suministro y comunicación del imperio. Al caer el poder central en Cusco, centros dependientes como Machu Picchu se volvieron insostenibles y sus habitantes se marcharon para unirse a la resistencia o regresar a sus lugares de origen. Los españoles, afortunadamente, nunca la encontraron, lo que la salvó del saqueo y la destrucción.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Misterios Grabados en Piedra</h2>
              <p className="mb-6">
                Más allá de las grandes preguntas, cada rincón de Machu Picchu esconde sus propios enigmas:
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <ul className="space-y-4">
                  <li><strong>El Intihuatana:</strong> Esta piedra tallada, cuyo nombre significa "donde se amarra el sol", es mucho más que un reloj solar. Se cree que era un observatorio astronómico para predecir solsticios y equinoccios, y un punto de energía sagrado. ¿Cómo funcionaba exactamente? Sigue siendo un misterio.</li>
                  <li><strong>El Templo del Cóndor:</strong> Una formación rocosa natural que fue tallada para asemejarse a un cóndor en vuelo, con una piedra en el suelo que actúa como cabeza. Se especula que era un altar de sacrificios, pero no hay pruebas concluyentes.</li>
                  <li><strong>El "Redescubrimiento" de Hiram Bingham:</strong> Aunque se le atribuye el descubrimiento en 1911, el explorador estadounidense no fue el primero. Familias locales vivían y cultivaban en la zona, y fue un niño, Pablito Richarte, quien lo guió hasta la ciudadela. El mérito de Bingham fue dar a conocer Machu Picchu al mundo y promover su estudio científico.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Un Legado Vivo y un Enigma Eterno</h3>
              <p className="mb-6">
                Hoy, como Patrimonio de la Humanidad y maravilla del mundo, Machu Picchu nos sigue maravillando. No es solo un lugar para visitar, sino un lugar para sentir. Es caminar por la historia, tocar las piedras que los incas tallaron y sentir la energía de los misterios que aún flotan en el aire de la montaña.
              </p>
              <p className="mb-6">
                La próxima vez que veas una foto de Machu Picchu, recuerda que no estás viendo solo ruinas, sino un rompecabezas de 500 años que sigue esperando a que alguien junte todas sus piezas.
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