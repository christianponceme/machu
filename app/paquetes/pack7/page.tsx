import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Perú y Bolivia 15 Días 14 Noches",
  description:
    "Un viaje épico de 15 días que combina lo mejor de Perú y Bolivia. Desde Lima y Machu Picchu hasta el increíble Salar de Uyuni. Una aventura sudamericana inolvidable.",
  keywords: "paquete Peru y Bolivia 15 dias, tour Peru Bolivia, Machu Picchu y Salar de Uyuni, Lima, Cusco, La Paz, Aventura Sudamerica",
  openGraph: {
    title: "Las Maravillas de Perú y Bolivia 15 Días 14 Noches - Machupicchu Origin",
    description: "El paquete definitivo de 15 días para explorar los íconos de Perú y Bolivia: Costa, Andes, Altiplano y el Salar más grande del mundo.",
    url: "https://machupicchuOrigin.com/paquetes/maravillas-peru-bolivia-15d14n",
  },
}

const packageData = {
  title: "Las Maravillas de Perú y Bolivia",
  subtitle: "Una Aventura de Dos Naciones: de Machu Picchu al Salar de Uyuni",
  heroImage: "/15DIASBOLVIA.png?height=600&width=1200",
  duration: "15 días / 14 noches",
  difficulty: "Moderado - Desafiante",
  groupSize: "2-16 personas",
  price: "$1430",
  rating: 5,
  reviews: 350,

  abstract: {
    title: "La Aventura Sudamericana Definitiva",
    content:
      "Este paquete de 15 días y 14 noches es un viaje trascendental que une los tesoros más grandes de Perú y Bolivia. Comienza tu expedición en la costa peruana, atraviesa los Andes para maravillarte con Machu Picchu y sus joyas aledañas, y cruza al altiplano para descubrir el espejo del cielo: el Salar de Uyuni. Es una experiencia inmersiva diseñada para aventureros que desean conectar con la historia, la cultura y los paisajes más espectaculares de Sudamérica, con una logística impecable que une dos naciones fascinantes.",
    highlights: [
      "Aventura en el desierto de Huacachina y las Islas Ballestas.",
      "Exploración de Cusco, el Valle Sagrado y la maravilla mundial Machu Picchu.",
      "Trekkings a la Montaña de Colores y la Laguna Humantay.",
      "Navegación en el Lago Titicaca, el lago navegable más alto del mundo.",
      "Travesía a Bolivia, conociendo la vibrante ciudad de La Paz.",
      "Tour completo de 2 días por el majestuoso Salar de Uyuni y sus lagunas altiplánicas.",
      "14 noches de alojamiento, tours y traslados clave incluidos para una experiencia sin preocupaciones.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima, Perú",
      description:
        "¡Bienvenido a Perú! Te recibiremos en el aeropuerto de Lima para trasladarte a tu hotel en el turístico distrito de Miraflores. Disfruta de la tarde para aclimatarte y explorar la zona. Noche en Lima.",
    },
    {
      time: "Día 2",
      title: "Oasis Huacachina e Islas Ballestas",
      description:
        "Salida muy temprano hacia Paracas para un tour en lancha a las Islas Ballestas, observando fauna marina. Luego, nos dirigimos a Ica para una degustación de vinos y una tarde de adrenalina con buggies y sandboard en el Oasis de Huacachina. Noche en Lima.",
    },
    {
      time: "Día 3",
      title: "City Tour Lima y Vuelo a Cusco",
      description:
        "Por la mañana, city tour por el centro histórico de Lima. Luego, te trasladaremos al aeropuerto para tu vuelo a Cusco. A tu llegada a la capital Inca, te recibiremos para llevarte a tu hotel. Noche en Cusco.",
    },
    {
      time: "Día 4",
      title: "Valle Sagrado de los Incas",
      description:
        "Excursión al Valle Sagrado, visitando el mercado de Chinchero, las Salineras de Maras y las terrazas de Moray. Tras un almuerzo buffet, exploraremos la fortaleza de Ollantaytambo y tomaremos el tren a Aguas Calientes. Noche en Machu Picchu Pueblo.",
    },
    {
      time: "Día 5",
      title: "Machu Picchu, Maravilla del Mundo",
      description:
        "Visita guiada de 3 horas por la increíble ciudadela de Machu Picchu. Por la tarde, retorno en tren a Ollantaytambo y luego en bus a tu hotel en Cusco. Noche en Cusco.",
    },
    {
      time: "Día 6",
      title: "Montaña de Colores (Vinicunca)",
      description:
        "Aventura de altura con un trekking a la espectacular Montaña de 7 Colores. Disfrutarás de un desayuno en ruta y almuerzo al finalizar la caminata. Regreso a Cusco por la tarde. Noche en Cusco.",
    },
    {
      time: "Día 7",
      title: "City Tour Cusco y Sitios Arqueológicos",
      description:
        "Recorrido por la ciudad de Cusco, visitando la Catedral, el Templo del Sol (Qorikancha) y los sitios arqueológicos cercanos de Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay. Noche en Cusco.",
    },
    {
      time: "Día 8",
      title: "Laguna Humantay",
      description:
        "Trekking a la prístina Laguna Humantay, de aguas turquesas, ubicada al pie de la montaña sagrada. Una caminata desafiante con una recompensa visual inolvidable. Noche en Cusco.",
    },
    {
      time: "Día 9",
      title: "Ruta del Sol: De Cusco a Puno",
      description:
        "Viaje en bus turístico hacia Puno. La ruta incluye paradas en la 'Capilla Sixtina de América' en Andahuaylillas, el templo de Wiracocha en Raqchi y el paso de La Raya. Noche en Puno.",
    },
    {
      time: "Día 10",
      title: "Lago Titicaca: Uros y Taquile",
      description:
        "Excursión de día completo en el lago navegable más alto del mundo. Visitaremos las islas flotantes de los Uros y la isla de Taquile, famosa por sus textiles y cultura. Noche en Puno.",
    },
    {
      time: "Día 11",
      title: "Cruce a Bolivia y Viaje Nocturno a Uyuni",
      description:
        "Traslado a la terminal para el bus de Puno a La Paz, Bolivia. A tu llegada a La Paz, tendrás tiempo para aclimatarte y almorzar. Por la noche, te trasladaremos a la terminal para abordar el bus nocturno hacia Uyuni.",
    },
    {
      time: "Día 12",
      title: "Salar de Uyuni: El Espejo del Cielo (Día 1)",
      description:
        "Llegada a Uyuni temprano. Después del desayuno, comienza el tour visitando el Cementerio de Trenes, Colchani y el majestuoso Salar de Uyuni, incluyendo el antiguo Hotel de Sal y una sesión de fotos al atardecer. Noche en un hotel en la zona.",
    },
    {
      time: "Día 13",
      title: "Lagunas Altiplánicas y Retorno a La Paz (Uyuni Día 2)",
      description:
        "El tour continúa hacia el sur para visitar las lagunas altiplánicas y observar flamencos. Visitaremos Pulacayo y las aguas termales. Por la noche, cena y viaje en bus nocturno de regreso a La Paz.",
    },
    {
      time: "Día 14",
      title: "Llegada y Descanso en La Paz",
      description:
        "Llegada a La Paz por la mañana. Te trasladaremos a tu hotel para que puedas descansar y recuperarte del viaje. Tarde libre para explorar la ciudad a tu propio ritmo. Noche en La Paz.",
    },
    {
      time: "Día 15",
      title: "Salida de La Paz, Bolivia",
      description:
        "Después del desayuno, y según tu horario de vuelo, te trasladaremos al aeropuerto de La Paz para tu partida. Fin de una aventura inolvidable por Perú y Bolivia.",
    },
  ],

  includes: [
    "02 noches de hotel en Lima",
    "05 noches de hotel en Cusco",
    "01 noche de hotel en Machu Picchu Pueblo",
    "02 noches de hotel en Puno",
    "03 noches de hotel en Bolivia (La Paz y Uyuni)",
    "Transporte privado en todos los traslados",
    "Tren y bus turístico a Machu Picchu (ida y retorno)",
    "Bus turístico Puno-La Paz y buses nocturnos La Paz-Uyuni-La Paz",
    "Guiado privado en Machu Picchu",
    "Todos los tours mencionados en Perú y Bolivia",
    "Entradas a todos los sitios del itinerario",
    "13 Desayunos, 06 Almuerzos, 01 Cena",
    "Asistencia permanente 24/7",
  ],

  notIncludes: [
    "Vuelos internacionales y domésticos (Lima-Cusco opcional)",
    "Alimentos y bebidas no mencionados en el programa",
    "Seguro de viaje (altamente recomendado)",
    "Tasas fronterizas o de terminales de bus",
    "Propinas para guías y conductores",
    "Gastos personales y souvenirs",
  ],

  recommendations: [
    "Contratar un seguro de viaje con cobertura para ambos países.",
    "Empacar ropa muy abrigadora para las noches en el altiplano boliviano.",
    "Llevar ropa en capas para los múltiples climas del viaje.",
    "Llevar pasaporte original, visa (si es requerida para tu nacionalidad) y efectivo (Soles y Bolivianos).",
    "Aclimatarse bien en Cusco antes de los trekkings de altura.",
    "Llevar protector solar de alto factor, gorro, guantes y gafas de sol para el Salar de Uyuni.",
    "Mantenerse bien hidratado durante todo el viaje.",
  ],
}

export default function MaravillasPeruBolivia15D14NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={packageData} />
        <RecommendedPackages currentPackageId={4} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}