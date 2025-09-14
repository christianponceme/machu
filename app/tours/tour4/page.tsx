import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "AREQUIPA Avistamiento Colca 2 días | Machupicchu Origin",
  description:
    "Embárcate en una aventura de 2 días desde Arequipa al Cañón del Colca, uno de los más profundos del mundo, y maravíllate con el majestuoso vuelo del cóndor.",
  keywords: "Arequipa, Cañon del Colca, avistamiento de cóndores, Cruz del Cóndor, Chivay, tour 2 días, Pampa Cañahuas",
}

const tourData = {
  title: "AREQUIPA Avistamiento Colca 2 días",
  subtitle: "El Vuelo del Cóndor en el Cañón Profundo",
  heroImage: "/canoncolca-ai.webp?height=600&width=1200",
  duration: "2 días / 1 noche",
  difficulty: "Fácil a Moderado",
  groupSize: "2-15 personas",
  price: "$130",
  rating: 4.8,
  reviews: 215,

  abstract: {
    title: "El Corazón del Mundo Andino",
    content:
      "Este tour de 2 días te lleva desde la 'Ciudad Blanca' de Arequipa hasta el corazón del Cañón del Colca, uno de los cañones más profundos del planeta. Viajarás a través de reservas nacionales, observando vicuñas en su hábitat natural y pasando por miradores a casi 5,000 metros de altura. La experiencia culmina en la Cruz del Cóndor, un mirador natural donde serás testigo del impresionante vuelo del Cóndor Andino, el ave sagrada de los Incas. Una noche en el pintoresco pueblo de Chivay completa esta inmersión en los paisajes y la cultura del Colca.",
    highlights: [
      "Avistamiento del majestuoso Cóndor Andino en la Cruz del Cóndor.",
      "Visita a uno de los cañones más profundos del mundo.",
      "Observación de vicuñas, alpacas y llamas en la Reserva de Pampa Cañahuas.",
      "Parada en el Mirador de los Volcanes (4,910 msnm).",
      "Noche en el tradicional pueblo de Chivay.",
      "Visita a pueblos coloniales y miradores naturales.",
      "Opcional: Baño relajante en las aguas termales de La Calera.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Arequipa - Pampa Cañahuas - Chivay",
      description:
        "El tour inicia con el recojo de tu hotel en Arequipa entre las 08:00 y 08:30 AM. Viajaremos hacia el Valle del Colca, haciendo una parada en la Reserva Nacional de Pampa Cañahuas para observar vicuñas. Luego, nos detendremos en el 'Mirador de los Volcanes' a 4,910 metros, la parte más alta del camino. Llegaremos a Chivay para almorzar (no incluido) y instalarnos en el hotel. Por la tarde, tendrás la opción de visitar los baños termales de La Calera. Pasaremos la noche en Chivay.",
    },
    {
      time: "Día 2",
      title: "Chivay - Cruz del Cóndor - Arequipa",
      description:
        "Después de un desayuno temprano, nos dirigiremos al mirador de la 'Cruz del Cóndor', el punto más esperado del viaje. Aquí, tendrás tiempo para admirar la profundidad del cañón y, con suerte, el majestuoso vuelo de los cóndores. De regreso a Chivay, visitaremos los pueblos de Pinchollo, Maca y Yanque, y los miradores de Antahuilque y Choquetico. Almorzaremos en Chivay (no incluido) y luego emprenderemos el viaje de retorno a Arequipa, llegando aproximadamente a las 5:30 PM.",
    },
  ],

  includes: [
    "Recojo de tu hotel en Arequipa (zona céntrica).",
    "Transporte turístico compartido Arequipa - Colca - Arequipa.",
    "Guía profesional bilingüe (español / inglés).",
    "1 noche de alojamiento en hotel en Chivay.",
    "1 desayuno (Día 2).",
    "Boleto Turístico del Colca para visitar el valle.",
    "Asistencia permanente.",
  ],

  notIncludes: [
    "Almuerzos y cenas.",
    "Entrada a los baños termales de La Calera (aprox. S/15).",
    "Bebidas durante las comidas.",
    "Propinas para el guía y conductor.",
    "Gastos personales y souvenirs.",
    "Seguro de viaje.",
  ],

  recommendations: [
    "Llevar pasaporte o documento de identidad original.",
    "Aclimatarse a la altura en Arequipa al menos un día antes.",
    "Usar ropa de abrigo para las mañanas y noches frías (vestir en capas).",
    "Llevar gorra, lentes de sol y bloqueador solar de alto factor.",
    "Traer ropa de baño y toalla si deseas visitar las aguas termales.",
    "Usar zapatos cómodos para caminar.",
    "Llevar cámara con baterías extra.",
    "Tener dinero en efectivo (soles peruanos) para comidas y gastos personales.",
  ],
}

export default function ArequipaColcaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour-arequipa" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}