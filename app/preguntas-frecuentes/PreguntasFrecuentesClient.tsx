"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Clock, MapPin, CreditCard, Users, Mountain } from "lucide-react"

const faqCategories = [
  {
    icon: HelpCircle,
    title: "General",
    questions: [
      {
        q: "¿Qué incluyen sus tours?",
        a: "Nuestros tours incluyen guía certificado, transporte, entradas a sitios arqueológicos y comidas especificadas en cada itinerario. Los detalles específicos varían según el tour elegido.",
      },
      {
        q: "¿Hablan español e inglés?",
        a: "Sí, todos nuestros guías son bilingües (español/inglés). También tenemos guías que hablan otros idiomas bajo solicitud especial. Y sin costo adicional",
      },
      {
        q: "¿Qué tamaño tienen los grupos?",
        a: "Mantenemos grupos pequeños para una experiencia personalizada: máximo 15 personas para tours regulares y grupos privados desde 1 persona.",
      },
    ],
  },
  {
    icon: Clock,
    title: "Reservas y Tiempos",
    questions: [
      {
        q: "¿Con cuánta anticipación debo reservar?",
        a: "Recomendamos reservar con al menos 2-3 semanas de anticipación. Para el Camino Inca, es necesario reservar con 6 meses de anticipación debido a permisos limitados. Consultanos para mas detalles.",
      },
      {
        q: "¿Puedo cancelar mi reserva?",
        a: "Sí, tenemos políticas de cancelación flexibles. Más de 7 días antes: 90% de reembolso. Entre 3-7 días: 50% de reembolso. Menos de 3 días: sin reembolso. Consultanos para mas detalles.",
      },
      {
        q: "¿Qué pasa si llueve?",
        a: "Los tours continúan con lluvia ligera. En caso de condiciones climáticas extremas que cierren sitios, ofrecemos reprogramación gratuita o reembolso completo.",
      },
    ],
  },
  {
    icon: CreditCard,
    title: "Pagos",
    questions: [
      {
        q: "¿Qué métodos de pago aceptan?",
        a: "Aceptamos efectivo (soles/dólares), transferencias bancarias, PayPal y tarjetas de crédito (Visa, MasterCard, American Express).",
      },
      {
        q: "¿Debo pagar todo por adelantado?",
        a: "Requerimos 80% de depósito para confirmar la reserva. El saldo restante se paga al estar en  Cusco, en cualquier metodo de pago. Hay facilifdad de pago hasta en 3 meeses sin intereses.",
      },
      {
        q: "¿Hay descuentos para estudiantes?",
        a: "No, posteriormente si estaremos dando pero ahora tenemos descuentos para grupos grandes y reservas anticipadas.",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Machu Picchu",
    questions: [
      {
        q: "¿Necesito reservar Huayna Picchu por separado?",
        a: "Sí, la entrada a Huayna Picchu es adicional ($100) y debe reservarse con anticipación debido a cupos limitados (400 personas por día).",
      },
      {
        q: "¿Cuánto tiempo tengo en Machu Picchu?",
        a: "En tours de día completo tienes aproximadamente 3 horas de tour guiado, en estas tienes tiempo para explorar y fotografiar.",
      },
      {
        q: "¿Puedo llevar mochila grande?",
        a: "No se permiten mochilas grandes en Machu Picchu. Puedes llevar una mochila pequeña (hasta 20 litros). Hay servicio de guardado en Aguas Calientes.",
      },
    ],
  },
  {
    icon: Users,
    title: "Preparación",
    questions: [
      {
        q: "¿Qué documentos necesito?",
        a: "Pasaporte original es obligatorio para todos los tours. Asi como tambien, carnet universitario en caso sea estudiate. Para menores, autorización de padres.",
      },
      {
        q: "¿Necesito estar en buena forma física?",
        a: "Depende del tour. Machu Picchu clásico es fácil. Camino Inca y Salkantay requieren condición física moderada-buena.",
      },
      {
        q: "¿Qué debo llevar?",
        a: "Ropa cómoda en capas, zapatos de trekking, protector solar, sombrero, agua, cámara y efectivo. Lista detallada se envía con la confirmación.",
      },
    ],
  },
  {
    icon: Mountain,
    title: "Altitud y Salud",
    questions: [
      {
        q: "¿Qué es el mal de altura?",
        a: "Síntomas por la altitud de Cusco (3,400m): dolor de cabeza, náuseas, fatiga. Recomendamos llegar 1-2 días antes, hidratarse bien y evitar alcohol.",
      },
      {
        q: "¿Hay medicamentos para la altura?",
        a: "Sí, recomendamos consultar con tu médico sobre medicamentos como acetazolamida. También ayuda el té de coca y mantenerse hidratado.",
      },
      {
        q: "¿Qué pasa si me siento mal durante el tour?",
        a: "Nuestros guías están entrenados en primeros auxilios y llevamos oxígeno de emergencia. Siempre priorizamos tu seguridad y bienestar.",
      },
    ],
  },
]

export default function PreguntasFrecuentesClient() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Preguntas Frecuentes</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros tours y servicios. Si no encuentras lo que
              buscas, contáctanos directamente.
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {faqCategories.map((category, categoryIndex) => {
                const IconComponent = category.icon
                return (
                  <Card key={categoryIndex} className="h-fit">
                    <CardHeader>
                      <CardTitle className="text-2xl text-primary-600 flex items-center space-x-2">
                        <IconComponent className="h-6 w-6" />
                        <span>{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0">
                          <h4 className="font-semibold text-primary-600 mb-2">{faq.q}</h4>
                          <p className="text-gray-700 leading-relaxed text-sm">{faq.a}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-accent-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-primary-600 mb-4">¿No encontraste tu respuesta?</h2>
            <p className="text-xl text-gray-700 mb-8">
              Nuestro equipo de expertos está listo para ayudarte con cualquier pregunta específica sobre tu viaje a
              Machu Picchu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contacto">
                <button className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                  Enviar Consulta
                </button>
              </a>
              <button
                onClick={() => window.open("https://wa.me/51907966198", "_blank")}
                className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-3 rounded-md font-semibold transition-colors bg-transparent"
              >
                WhatsApp Directo
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
