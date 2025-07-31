import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, Heart, Zap, ChevronsUp } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Guía Completa de Preparación Física para el Camino Inca",
  description:
    "Prepárate para la aventura de tu vida. Descubre cómo entrenar tu cuerpo para conquistar el Camino Inca a Machu Picchu, consejos de aclimatación y más.",
  keywords: "preparación física Camino Inca, entrenamiento Camino Inca, cómo prepararse para el Camino Inca, trekking andino, aclimatación Cusco",
  openGraph: {
    title: "Guía Completa de Preparación Física para el Camino Inca",
    description: "Consejos esenciales y un plan de entrenamiento para asegurar que disfrutes cada paso del legendario Camino Inca a Machu Picchu.",
    url: "https://machupicchuorigin.com/blog/preparacion-fisica-camino-inca",
  },
}

export default function PreparacionFisicaCaminoInca() {
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
              <span className="text-primary-600">Preparación Física para el Camino Inca</span>
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
                Guía de Preparación Física para el Camino Inca: Conquista la Ruta a Machu Picchu
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>05 Agosto 2025</span>
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
                  <span>1.2K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog-preparacion.png?height=400&width=800"
                alt="Senderista en el Camino Inca con montañas de fondo"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Una buena preparación física es la clave para disfrutar plenamente de los paisajes y la historia del Camino Inca.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                El Camino Inca es una de las rutas de senderismo más famosas y gratificantes del mundo. Sin embargo, su belleza va de la mano con un desafío físico considerable: altitudes elevadas, ascensos empinados y varios días de caminata. Una preparación adecuada no solo te ayudará a completar la ruta, sino a disfrutarla sin sufrimientos innecesarios.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">¿Qué tan Difícil es el Camino Inca?</h2>
              <p className="mb-6">
                El Camino Inca Clásico (4 días y 3 noches) se considera de dificultad moderada a desafiante. No necesitas ser un atleta de élite, pero sí tener un buen estado físico general. El principal reto no es la distancia diaria (que promedia los 10-12 km), sino la combinación de:
              </p>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                <li><strong>Altitud:</strong> Caminarás a más de 3,000 msnm, alcanzando un pico de 4,215 msnm en el "Paso de la Mujer Muerta" (Warmiwañusqa).</li>
                <li><strong>Escalones de piedra:</strong> Miles de escalones incas, irregulares y a menudo empinados, pondrán a prueba tus rodillas y cuádriceps.</li>
                <li><strong>Cambios de clima:</strong> El clima andino puede cambiar rápidamente, pasando de un sol intenso a lluvia fría en cuestión de horas.</li>
              </ul>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Pilares del Entrenamiento para el Camino Inca</h2>
              <p className="mb-6">
                Recomendamos iniciar tu preparación al menos <strong>3 a 4 meses antes</strong> de tu viaje. Concéntrate en tres áreas clave:
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4 flex items-center"><Heart className="mr-3 text-red-500"/>1. Resistencia Cardiovascular</h3>
              <p className="mb-6">
                El "cardio" es fundamental para que tu cuerpo gestione eficientemente el oxígeno en altitud. El objetivo es poder mantener un esfuerzo sostenido durante varias horas.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-secondary-600 mb-3">Actividades recomendadas:</h4>
                <ul>
                  <li><strong>Senderismo (Hiking):</strong> Es la mejor práctica. Busca rutas con desniveles y terrenos irregulares. Intenta hacer caminatas largas (4-6 horas) los fines de semana.</li>
                  <li><strong>Correr o trotar:</strong> Excelente para mejorar la capacidad pulmonar.</li>
                  <li><strong>Ciclismo y natación:</strong> Son opciones de bajo impacto que fortalecen el corazón y los pulmones.</li>
                  <li><strong>Subir escaleras:</strong> Ya sea en un edificio o en una máquina de gimnasio (stairmaster), es el simulador perfecto para los escalones incas.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4 flex items-center"><Zap className="mr-3 text-yellow-500"/>2. Fuerza Muscular</h3>
              <p className="mb-6">
                Necesitarás fuerza en las piernas para las subidas y estabilidad en el core para mantener el equilibrio con tu mochila.
              </p>
               <div className="bg-green-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-green-800 mb-3">Ejercicios clave:</h4>
                <ul>
                  <li><strong>Piernas y Glúteos:</strong> Sentadillas (squats), zancadas (lunges), elevaciones de talones y peso muerto son esenciales para potenciar los músculos que más usarás.</li>
                  <li><strong>Core (Abdomen y Espalda Baja):</strong> Planchas (planks), puentes de glúteos y abdominales te darán la estabilidad necesaria para cargar tu mochila sin lesionarte.</li>
                  <li><strong>Espalda y Hombros:</strong> Remos y flexiones ayudarán a fortalecer la parte superior del cuerpo.</li>
                </ul>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Consejo Pro:</h4>
                <p className="text-yellow-700 mb-2">
                  ¡Entrena con la mochila que llevarás! Unas semanas antes del viaje, empieza a hacer tus caminatas de práctica con la mochila cargada (con unos 4-6 kg) para acostumbrar a tus hombros y espalda al peso.
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4 flex items-center"><ChevronsUp className="mr-3 text-teal-500"/>3. Aclimatación a la Altitud</h3>
              <p className="mb-6">
                Este es quizás el factor más crucial y el que no se puede entrenar en casa (a menos que vivas en altitud). El mal de altura o "soroche" puede arruinar tu experiencia.
              </p>
              <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Estrategia Obligatoria</h4>
                <p className="text-red-700">
                  Llega a Cusco (3,399 msnm) al menos <strong>2 o 3 días antes</strong> de empezar el Camino Inca. No planifiques actividades físicas intensas para tus primeros días. Dedícalos a:
                </p>
                <ul className="list-disc pl-5 mt-2 text-red-700">
                  <li>Caminar suavemente por la ciudad.</li>
                  <li>Beber abundante agua y mate de coca.</li>
                  <li>Comer ligero y evitar el alcohol.</li>
                  <li>Descansar adecuadamente.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Plan de Entrenamiento Sugerido (12 Semanas)</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b-2 p-4">Frecuencia</th>
                      <th className="border-b-2 p-4 bg-gray-50">Entrenamiento Cardiovascular</th>
                      <th className="border-b-2 p-4 bg-gray-50">Entrenamiento de Fuerza</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b p-4 font-semibold">Días por semana</td>
                      <td className="border-b p-4 bg-gray-50">3-4 días</td>
                      <td className="border-b p-4 bg-gray-50">2-3 días</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Tipo</td>
                      <td className="border-b p-4 bg-gray-50">Combinar sesiones cortas (30-45 min) con una larga (2-6 horas) el fin de semana.</td>
                      <td className="border-b p-4 bg-gray-50">Circuitos de cuerpo completo, enfocados en piernas y core.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 font-semibold">Progresión</td>
                      <td className="border-b p-4 bg-gray-50">Aumentar gradualmente la duración e intensidad. Buscar terrenos con más inclinación.</td>
                      <td className="border-b p-4 bg-gray-50">Aumentar repeticiones, series o peso de forma progresiva.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">La Preparación Mental</h3>
              <p className="mb-6">
                No subestimes el poder de la mente. El Camino Inca también es un reto mental. Habrá momentos de cansancio, especialmente durante el ascenso al segundo día. Mantén una actitud positiva, ve a tu propio ritmo (no es una carrera), disfruta del paisaje y recuerda la increíble recompensa que te espera al llegar a la Puerta del Sol (Inti Punku) y ver Machu Picchu por primera vez.
              </p>
              <p className= "mb-8">
                Con una preparación física y mental adecuada, el Camino Inca no será un suplicio, sino la aventura de tu vida. ¡Empieza a entrenar y prepárate para crear recuerdos imborrables!
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