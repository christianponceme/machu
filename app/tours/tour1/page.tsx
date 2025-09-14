import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "CUSCO Camino Inca 3 días - Trekking Clásico | Machupicchu Origin",
  description:
    "Experimenta la esencia del Camino Inca en esta versión condensada de 3 días. Un trekking clásico que te lleva por senderos históricos hasta la majestuosidad de Machu Picchu.",
  keywords: "Camino Inca 3 días, trekking corto Machu Picchu, ruta inca clásica, aventura 3 días, Machupicchu",
}

const tourData = {
  title: "CUSCO Camino Inca 3 días",
  subtitle: "La Ruta Clásica en Versión Express",
  heroImage: "/caminoinca-ai.webp?height=600&width=1200",
  duration: "3 días / 2 noches",
  difficulty: "Desafiante",
  groupSize: "2-12 personas",
  price: "$850",
  rating: 4.8,
  reviews: 152,

  abstract: {
    title: "La Aventura Clásica, Optimizada",
    content:
      "Este trekking de 3 días es la opción ideal para aquellos con tiempo limitado pero que no quieren perderse la experiencia de acampar en el Camino Inca. La ruta ha sido diseñada para cubrir los tramos más impresionantes del sendero, combinando ascensos desafiantes, paisajes andinos de ensueño y la visita a sitios arqueológicos fascinantes. Pasarás dos noches acampando bajo las estrellas antes de tu llegada triunfal a la ciudadela de Machu Picchu en el último día.",
    highlights: [
      "Trekking por la ruta original del Camino Inca.",
      "Cruce del famoso paso de Warmiwañusqa (Paso de la Mujer Muerta).",
      "Visita a sitios arqueológicos clave como Wiñay Wayna.",
      "Dos noches de campamento en los Andes.",
      "Equipo de camping de alta calidad y personal de apoyo.",
      "Tour guiado en la ciudadela de Machu Picchu.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Cusco - Km 82 - Ayapata (3,300m)",
      description:
        "Iniciamos con el recojo de tu hotel y un viaje hasta el Km 82 (Piscacucho), el punto de partida oficial del Camino Inca. Después de cruzar el control, comenzaremos una caminata moderada por el valle del río Urubamba. Ascenderemos gradualmente hasta nuestro primer campamento en Ayapata, un lugar perfecto para aclimatarse y descansar para el día siguiente.",
    },
    {
      time: "Día 2",
      title: "Ayapata - Chaquicocha (3,600m)",
      description:
        "Este es el día más exigente y gratificante. Ascenderemos por la mañana al famoso Paso de la Mujer Muerta (Warmiwañusqa) a 4,215m, el punto más alto del trek. Tras celebrar la hazaña, descenderemos a Pacaymayu para almorzar. Por la tarde, subiremos el segundo paso, Runkurakay, y visitaremos el sitio arqueológico del mismo nombre antes de llegar a nuestro campamento en Chaquicocha.",
    },
    {
      time: "Día 3",
      title: "Chaquicocha - Machu Picchu - Cusco",
      description:
        "Nos levantamos temprano para una hermosa caminata a través del bosque nuboso, visitando los sitios de Phuyupatamarca y Wiñay Wayna. Desde aquí, es una caminata final hacia la Puerta del Sol (Inti Punku), donde obtendrás las primeras vistas panorámicas de Machu Picchu. Descenderemos a la ciudadela para un tour guiado completo. Por la tarde, tomaremos el bus a Aguas Calientes y luego el tren de regreso a Ollantaytambo y un bus a Cusco.",
    },
  ],

  includes: [
    "Briefing informativo un día antes del tour",
    "Transporte de Cusco al Km 82",
    "Tren de retorno Aguas Calientes - Ollantaytambo y bus a Cusco",
    "Permiso de ingreso al Camino Inca y entrada a Machu Picchu",
    "Guía profesional bilingüe",
    "Cocinero y equipo de cocina",
    "Porteadores (para equipo de campamento y comida)",
    "2 desayunos, 2 almuerzos, 2 cenas",
    "Snack diario y agua hervida para rellenar",
    "Carpas dobles de 4 estaciones",
    "Colchonetas inflables",
    "Botiquín de primeros auxilios y balón de oxígeno",
  ],

  notIncludes: [
    "Desayuno del primer día y almuerzo del último día",
    "Bolsa de dormir (se puede alquilar por $20)",
    "Bastones de trekking (se pueden alquilar)",
    "Porteador personal (opcional, se puede contratar)",
    "Propinas para el guía, cocinero y porteadores",
    "Bus de bajada Machu Picchu - Aguas Calientes ($12)",
    "Seguro de viaje (obligatorio)",
    "Bebidas extras y gastos personales",
  ],

  recommendations: [
    "Reservar con un mínimo de 5-6 meses de antelación",
    "Llevar pasaporte original (indispensable para el ingreso)",
    "Aclimatarse a la altitud en Cusco al menos 2 días antes",
    "Estar en buena condición física",
    "Usar botas de trekking ya amoldadas",
    "Mochila de día (30-40 litros) con cobertor de lluvia",
    "Ropa para clima frío y cálido (sistema de capas)",
    "Linterna frontal, baterías extra, y un power bank",
  ],
}

export default function CaminoInca3DiasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour3" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}