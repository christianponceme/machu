import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "CUSCO Inca Jungle 3 días 2 noches - Tour Clásico | Machupicchu Origin",
  description:
    "Vive la aventura del Inca Jungle en su versión de 3 días y 2 noches. Una ruta que combina ciclismo de montaña, trekking por la selva y la visita a Machu Picchu.",
  keywords: "CUSCO Inca Jungle 3 días, tour de aventura, ciclismo Abra Malaga, trekking a Machu Picchu, tour 3 días",
}

const tourData = {
  title: "CUSCO Inca Jungle 3 días y 2 noches",
  subtitle: "Aventura Express: Ciclismo y Trekking",
  heroImage: "/heromachu.png?height=600&width=1200",
  duration: "3 días / 2 noches",
  difficulty: "Moderado",
  groupSize: "2-12 personas",
  price: "$470",
  rating: 4.8,
  reviews: 175,

  abstract: {
    title: "Resumen del Tour",
    content:
      "Este tour es la versión condensada y llena de acción del famoso Inca Jungle. Durante 3 días, te sumergirás en una aventura que comienza con un emocionante descenso en bicicleta desde las alturas del Abra Málaga hacia la cálida selva alta. Realizarás caminatas por senderos rodeados de naturaleza exuberante, te relajarás en aguas termales y, como broche de oro, explorarás la enigmática ciudadela de Machu Picchu. Es la combinación perfecta de adrenalina, naturaleza y cultura.",
    highlights: [
      "Descenso en bicicleta de montaña por paisajes andinos espectaculares.",
      "Caminata por senderos selváticos hasta Aguas Calientes.",
      "Visita a las relajantes aguas termales de Cocalmayo (opcional).",
      "Noche en Aguas Calientes, el pueblo al pie de Machu Picchu.",
      "Tour guiado profesional en la ciudadela inca de Machu Picchu.",
      "Aventura y cultura combinadas en una ruta inolvidable.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Cusco – Abra Málaga – Santa Teresa (Ciclismo)",
      description: "Partimos temprano de Cusco en transporte privado hacia el Abra Málaga (4,316 m). Tras una breve charla de seguridad, comenzaremos el descenso en bicicleta de montaña. Atravesaremos paisajes impresionantes hasta llegar al pueblo de Santa María, donde almorzaremos. Luego, continuaremos en nuestro transporte hasta Santa Teresa. Tarde libre para visitar opcionalmente los baños termales de Cocalmayo. Pasaremos la noche en un hostal en Santa Teresa.",
    },
    {
      time: "Día 2",
      title: "Santa Teresa – Hidroeléctrica – Aguas Calientes (Trekking)",
      description:
        "Por la mañana, tendrás la opción de realizar Zipline (actividad no incluida). Luego, nuestro transporte nos llevará hasta la central Hidroeléctrica. Desde aquí, emprenderemos una caminata de aproximadamente 3 horas por un sendero plano junto a las vías del tren, rodeados de la flora y fauna de la selva. Al llegar a Aguas Calientes, nos instalaremos en el hotel y tendremos la noche libre para explorar el pueblo.",
    },
    {
      time: "Día 3",
      title: "Machu Picchu – Cusco (Maravilla del Mundo)",
      description:
        "Nos levantaremos muy temprano para tomar uno de los primeros buses hacia Machu Picchu. Disfrutaremos de un tour guiado de 2.5 horas, explorando los templos, plazas y recintos más importantes de la ciudadela. Después del tour, tendrás tiempo libre para seguir explorando. Por la tarde, tomaremos el tren de regreso desde Aguas Calientes a Ollantaytambo, donde nuestro transporte nos esperará para llevarnos de vuelta a tu hotel en Cusco.",
    },
  ],

  includes: [
    "Recojo de tu hotel en Cusco",
    "Transporte turístico Cusco - Abra Málaga - Santa Teresa - Hidroeléctrica",
    "Bicicletas de montaña con equipo de seguridad (casco, guantes)",
    "2 noches de alojamiento (1 en Santa Teresa, 1 en Aguas Calientes)",
    "2 desayunos, 2 almuerzos, 2 cenas",
    "Entrada a la ciudadela de Machu Picchu",
    "Guía profesional de aventura bilingüe",
    "Zipline en Santa Teresa, entrada a los baños de Cocalmayo",
    "Tren de retorno Aguas Calientes - Ollantaytambo",
    "Transporte Ollantaytambo - Cusco",
    "Botiquín de primeros auxilios",
  ],

  notIncludes: [
    "Desayuno del primer día y almuerzo del último día",
    "Bus de subida y bajada a Machu Picchu (opcional, $24)",
    "Propinas para el guía y el personal",
    "Snacks, bebidas y gastos personales",
    "Seguro de viaje (muy recomendado)",
  ],

  recommendations: [
    "Llevar pasaporte original",
    "Mochila pequeña y cómoda (30L)",
    "Zapatos de trekking resistentes",
    "Repelente de insectos para la selva",
    "Protector solar, gorra y lentes de sol",
    "Ropa de baño y toalla pequeña (para Cocalmayo)",
    "Ropa ligera y de abrigo (sistema de capas)",
    "Dinero en efectivo para gastos extra y opcionales",
    "Cámara de fotos y batería extra",
  ],
}

export default function IncaJungle3d2nPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour2" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}