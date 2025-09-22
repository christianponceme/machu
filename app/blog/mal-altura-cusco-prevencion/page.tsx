import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, Clock, Eye, ArrowLeft, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Mal de Altura en Cusco: Cómo Prevenir y Tratar el Soroche",
  description:
    "Guía completa para prevenir y aliviar los síntomas del mal de altura (soroche) en tu viaje a Cusco y Machu Picchu. Consejos prácticos, remedios naturales y más.",
  keywords: "mal de altura, soroche, prevenir mal de altura cusco, síntomas soroche, remedios mal de altura, aclimatación cusco, pastillas soroche",
  openGraph: {
    title: "Mal de Altura en Cusco: Guía Esencial para Prevenir el Soroche",
    description: "No dejes que el mal de altura arruine tu viaje. Aprende todo sobre la prevención, los síntomas y los remedios para disfrutar de Cusco sin problemas.",
    url: "https://machupicchuorigin.com/blog/mal-altura-cusco-prevencion",
  },
}

export default function MalDeAlturaCusco() {
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
              <span className="text-primary-600">Mal de Altura en Cusco: Prevención</span>
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
                Mal de Altura en Cusco: Guía Práctica para Prevenir y Combatir el Soroche
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>18 Diciembre 2023</span>
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
                  <span>1.7 K vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog-coca.webp"
                alt="Turista bebiendo mate de coca con vista a la ciudad de Cusco"
                className="w-full h-90 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                La aclimatación adecuada es el primer y más importante paso para disfrutar de las maravillas de Cusco sin contratiempos.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Cusco, la antigua capital del Imperio Inca, se encuentra a 3,399 metros sobre el nivel del mar. Esta altitud es parte de su magia, pero también presenta un desafío para los viajeros: el mal de altura o "soroche". No dejes que el miedo al soroche te impida disfrutar de tu viaje soñado. Con la preparación y los conocimientos adecuados, puedes minimizar sus efectos y vivir una experiencia increíble.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">¿Qué es Exactamente el Mal de Altura o Soroche?</h2>
              <p className="mb-6">
                El mal de altura es la respuesta del cuerpo a la menor presión de oxígeno disponible en altitudes elevadas. Tu cuerpo necesita tiempo para adaptarse a tener menos oxígeno. Es importante saber que el soroche puede afectar a cualquiera, sin importar la edad, el sexo o la condición física. Los atletas de alto rendimiento son tan susceptibles como cualquier otra persona.
              </p>
              <h4 className="font-semibold text-gray-700 mb-3">Los síntomas más comunes incluyen:</h4>
              <ul className="list-disc pl-5 mb-6 space-y-2">
                  <li>Dolor de cabeza (el más común)</li>
                  <li>Mareos y náuseas</li>
                  <li>Fatiga o agotamiento físico</li>
                  <li>Dificultad para respirar</li>
                  <li>Pérdida de apetito</li>
                  <li>Problemas para dormir</li>
              </ul>
              
              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">La Clave de Todo: La Aclimatación Correcta</h2>
              <p className="mb-6">
                La prevención es mil veces mejor que el tratamiento. La estrategia más efectiva contra el soroche es una aclimatación gradual y paciente.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-secondary-600 mb-3">Tu Plan de Aclimatación:</h4>
                <ul>
                  <li><strong>Tómalo con Calma el Primer Día:</strong> ¡Es una orden! Al llegar a Cusco, evita cualquier actividad física extenuante. No corras a subir a Sacsayhuamán. Camina despacio, descansa en tu hotel y permite que tu cuerpo se ajuste.</li>
                  <li><strong>Planifica un Itinerario Inteligente:</strong> Si es posible, considera pasar tu primera noche en el Valle Sagrado (aprox. 2,800 m), que tiene una altitud menor que la ciudad de Cusco. Lugares como Urubamba u Ollantaytambo son ideales para una aclimatación más suave antes de subir a Cusco.</li>
                  <li><strong>Duerme Bien:</strong> El descanso es fundamental. Asegúrate de dormir al menos 8 horas las primeras noches para ayudar a tu cuerpo en el proceso de adaptación.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Consejos Prácticos y Remedios Ancestrales</h2>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <ul className="space-y-4">
                  <li><strong>💧 Hidrátate Constantemente:</strong> Bebe mucha agua, incluso más de lo habitual. Una buena hidratación mejora la circulación y el transporte de oxígeno en la sangre.</li>
                  <li><strong>🍃 La Hoja de Coca, tu Aliada Andina:</strong> El remedio ancestral por excelencia. Puedes masticar las hojas (sin tragarlas) o beberla en té (mate de coca). Ayuda a la oxigenación de la sangre y alivia los dolores de cabeza. La encontrarás en todos los hoteles y mercados.</li>
                  <li><strong>🍲 Come Ligero y Rico en Carbohidratos:</strong> Evita las comidas pesadas, grasosas y el alcohol durante las primeras 24-48 horas. Opta por sopas (como la de quinua), pastas y papas. Los carbohidratos son una buena fuente de energía en la altura.</li>
                  <li><strong>🌿 Prueba la Muña:</strong> Conocida como la menta andina, la muña es otra hierba local excelente para el estómago y los mareos. Pídela como infusión.</li>
                </ul>
              </div>
              
              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">¿Debo Tomar Pastillas para el Soroche?</h2>
              <p className="mb-6">
                Existen medicamentos como la Acetazolamida (comercialmente conocida como Diamox) que pueden ayudar a prevenir los síntomas. Sin embargo, no son para todos y pueden tener efectos secundarios (como hormigueo en manos y pies). 
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h4 className="font-semibold text-yellow-800 mb-2">Consulta Médica Primero</h4>
                <p className="text-yellow-700 mb-2">
                  <strong>Es fundamental que consultes a tu médico</strong> antes de tomar cualquier medicamento para el mal de altura. Un profesional podrá evaluar tu caso y recetarte la dosis adecuada si lo considera necesario. No te automediques.
                </p>
              </div>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6">Tabla Resumen: Tu Plan Anti-Soroche</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th className="border-b-2 p-4 bg-green-100 text-green-800">✅ Qué Hacer (Recomendado)</th>
                      <th className="border-b-2 p-4 bg-red-100 text-red-800">❌ Qué Evitar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border-b p-4 bg-gray-50">Descansar las primeras 24 horas.</td>
                      <td className="border-b p-4 bg-gray-50">Hacer esfuerzo físico intenso al llegar.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 bg-gray-50">Beber mucha agua y mate de coca.</td>
                      <td className="border-b p-4 bg-gray-50">Beber alcohol o fumar.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 bg-gray-50">Comer ligero (sopas, carbohidratos).</td>
                      <td className="border-b p-4 bg-gray-50">Comer comidas pesadas y grasosas.</td>
                    </tr>
                    <tr>
                      <td className="border-b p-4 bg-gray-50">Subir de altitud gradualmente.</td>
                      <td className="border-b p-4 bg-gray-50">Ascender bruscamente sin aclimatación.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-10 rounded-r-lg">
                <h4 className="font-bold text-xl text-red-700 mb-3 flex items-center"><AlertTriangle className="mr-3" /> ¿Y si los Síntomas son Severos?</h4>
                <p className="text-red-800">
                  Si los síntomas no mejoran después de 24-48 horas o empeoran (dificultad respiratoria severa, confusión, falta de coordinación), es crucial <strong>buscar atención médica inmediatamente y descender a una altitud menor</strong>. Aunque son muy raros, el edema pulmonar o cerebral de altitud son condiciones serias que requieren tratamiento urgente.
                </p>
              </div>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Conclusión: Escucha a tu Cuerpo</h3>
              <p className="mb-8">
                El mal de altura es una posibilidad real, pero no tiene por qué arruinar tu viaje. La clave es la prevención, la paciencia y escuchar las señales de tu cuerpo. Aclimatarse correctamente te permitirá disfrutar plenamente de la energía mágica de Cusco, el Valle Sagrado y, por supuesto, la majestuosidad de Machu Picchu.
              </p>

              <Ready />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}