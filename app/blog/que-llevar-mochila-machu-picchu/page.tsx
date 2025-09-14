import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, CheckCircle, XCircle, Backpack, Sun, Droplet } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Qué Llevar en tu Mochila para Machu Picchu [2025]",
  description:
    "La guía de empaque definitiva. Descubre qué llevar en tu mochila para Machu Picchu y qué está prohibido. ¡Prepara tu equipaje y evita contratiempos!",
  keywords: "qué llevar a Machu Picchu, mochila para Machu Picchu, que empacar para Machu Picchu, lista de empaque Machu Picchu, articulos prohibidos Machu Picchu",
  openGraph: {
    title: "Guía de Empaque 2025: Qué Llevar en tu Mochila a Machu Picchu",
    description: "Prepara la mochila perfecta con nuestra lista de esenciales y conoce los objetos que no puedes ingresar a la ciudadela inca.",
    url: "https://machupicchuorigin.com/blog/que-llevar-mochila-machu-picchu",
  },
}

export default function QueLlevarMachuPicchu() {
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
              <span className="text-primary-600">Qué Llevar en tu Mochila a Machu Picchu</span>
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
                Guía de Empaque 2025: ¿Qué Llevar en tu Mochila para Visitar Machu Picchu?
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>28 Diciembre 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>10 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>1.5 K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/que-llevar.webp?height=400&width=800"
                alt="Mochila con implementos esenciales para Machu Picchu"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Una mochila bien preparada es la clave para una visita cómoda y sin preocupaciones a la maravilla del mundo.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                ¡La emoción de visitar Machu Picchu es inmensa! Pero antes de maravillarte con la ciudadela inca, es crucial
                preparar tu mochila. ¿Qué es realmente esencial? ¿Qué objetos están prohibidos? Una mala planificación
                del equipaje puede causarte inconvenientes en la puerta de ingreso. Esta guía definitiva te ayudará a empacar
                de manera inteligente para que tu única preocupación sea disfrutar del paisaje.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center">
                <Backpack className="h-8 w-8 mr-3" /> La Mochila Ideal para Machu Picchu
              </h2>
              <p className="mb-6">
                Primero, hablemos del continente antes del contenido. Las regulaciones de Machu Picchu son estrictas con el tamaño
                del equipaje. Se prohíbe el ingreso con mochilas grandes que superen los <strong>40x35x20 cm</strong> o los 5 kg de peso. Por lo tanto, tu mejor aliada será una mochila pequeña o una mochila de día ("daypack"). Elige una que sea ligera, cómoda y, si es posible, con una funda impermeable.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Los 10 Indispensables en tu Mochila</h2>
              <p className="mb-8">
                Empacar de manera minimalista pero efectiva es la clave. Aquí te dejamos una lista de los elementos que no pueden faltar para una visita cómoda y segura.
              </p>

              <div className="space-y-6">
                <div className="p-4 bg-gray-50 rounded-lg"><strong>1. Documentos Originales:</strong> Es el requisito número uno. Debes llevar tu pasaporte original (o DNI para ciudadanos de la Comunidad Andina) con el que compraste tus boletos. No se aceptan copias. Guarda también tu entrada a Machu Picchu.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>2. Botella de Agua Reutilizable:</strong> Mantenerse hidratado en la altura es fundamental. Las botellas de plástico de un solo uso están prohibidas, así que lleva una cantimplora o tomatodo.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>3. Protector Solar (SPF 30+):</strong> El sol en los Andes es muy intenso, incluso en días nublados. Aplícalo antes y durante tu visita para evitar quemaduras.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>4. Repelente de Insectos:</strong> Especialmente en la temporada de lluvias, los mosquitos pueden ser una molestia. Un buen repelente te salvará de las picaduras.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>5. Sombrero o Gorra y Gafas de Sol:</strong> Complementan la protección solar y te darán mayor comodidad visual durante el recorrido.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>6. Poncho para Lluvia o Casaca Impermeable:</strong> El clima en Machu Picchu es impredecible. Una lluvia repentina puede ocurrir en cualquier momento, incluso en temporada seca. ¡Los paraguas están prohibidos!</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>7. Snacks Energéticos:</strong> Una caminata por la ciudadela requiere energía. Lleva barras de granola, frutos secos o snacks similares en sus empaques originales.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>8. Cámara o Smartphone:</strong> Querrás capturar cada momento. Asegúrate de tener la batería completamente cargada y suficiente espacio de memoria.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>9. Dinero en Efectivo (Soles):</strong> Es útil para pequeños gastos como el uso de los baños fuera del recinto o para dar una propina a tu guía.</div>
                <div className="p-4 bg-gray-50 rounded-lg"><strong>10. Calzado Cómodo:</strong> Usa zapatos de trekking o zapatillas con buena suela antideslizante. El terreno es irregular y con muchos escalones de piedra.</div>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center">
                <XCircle className="h-8 w-8 mr-3 text-red-600" /> ¡Cuidado! Objetos Prohibidos en Machu Picchu
              </h2>
              <p className="mb-6">
                Para preservar la integridad de este santuario histórico, las autoridades prohíben estrictamente el ingreso de ciertos objetos. Dejar alguno de estos en tu hotel te ahorrará un mal rato en la entrada.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-3">Absolutamente Prohibido</h4>
                  <ul className="list-none space-y-2 text-red-700">
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Mochilas grandes (más de 40x35x20 cm).</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Trípodes, soportes para cámaras o palos selfie (selfie sticks).</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Paraguas o sombrillas.</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Drones y equipo de filmación profesional sin permiso.</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Bebidas alcohólicas y sustancias ilegales.</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Instrumentos musicales, altavoces o megáfonos.</li>
                    <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Coches de bebé (se recomiendan mochilas portabebés).</li>
                     <li className="flex items-start"><XCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Bastones de trekking con punta metálica (solo se permiten con punta de goma).</li>
                  </ul>
                </div>
                 <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-3">Permitido con Condiciones</h4>
                  <ul className="list-none space-y-2 text-green-700">
                     <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Agua en cantimploras o botellas reutilizables.</li>
                     <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Snacks y comida ligera en su empaque original.</li>
                     <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Bastones de trekking con punta de goma (especialmente para adultos mayores).</li>
                      <li className="flex items-start"><CheckCircle className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />Mochilas portabebés ergonómicas.</li>
                  </ul>
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Consejo Final: Vístete en Capas</h3>
              <p className="mb-8">
                El clima de Machu Picchu puede cambiar drásticamente en horas. Empieza la mañana con frío, siente calor al mediodía y termina con una lluvia ligera. La mejor estrategia es vestirse en capas: una camiseta ligera, una chompa o polar y una casaca impermeable/cortavientos. Así podrás adaptarte fácilmente a cualquier condición climática.
              </p>

              <p className="mb-6">
              
                Con tu mochila preparada de forma inteligente, estarás listo para vivir una experiencia inolvidable en una de las maravillas más impresionantes del mundo. ¡Disfruta de la magia de Machu Picchu!
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