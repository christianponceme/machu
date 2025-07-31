import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Perú 15 Días 14 Noches - Paquete Completo",
  description:
    "El tour definitivo de 15 días por Perú. Explora Lima, Huacachina, Arequipa, Cañón del Colca, Lago Titicaca, Cusco, Valle Sagrado, Machu Picchu, Montaña de Colores y Laguna Humantay.",
  keywords: "paquete Peru 15 dias, tour Peru completo, Lima, Arequipa, Colca, Puno, Cusco, Machu Picchu 15 días, Maravillas de Perú, tour completo Peru",
  openGraph: {
    title: "Las Maravillas de Perú 15 Días 14 Noches - Machupicchu Origin",
    description: "Un viaje épico de 15 días y 14 noches para descubrir todas las maravillas de Perú: costa, desierto, cañones, altiplano y la magia de los Andes.",
    url: "https://machupicchuOrigin.com/paquetes/las-maravillas-de-peru-15d14n",
  },
}

const packageData = {
  title: "Las Maravillas de Perú",
  subtitle: "15 Días y 14 Noches: La Aventura Definitiva por Perú",
  heroImage: "/15DIAS.png?height=600&width=1200",
  duration: "15 días / 14 noches",
  difficulty: "Moderado-Alto",
  groupSize: "2-16 personas",
  price: "$1505",
  rating: 5,
  reviews: 412,

  abstract: {
    title: "La Experiencia Peruana Más Completa y Profunda",
    content:
      "Este paquete de 15 días y 14 noches es la inmersión total en la riqueza cultural, paisajística y aventurera de Perú. Diseñado meticulosamente para conectar la costa vibrante de Lima con el desierto de Ica, la majestuosidad de Arequipa y el Cañón del Colca, las místicas aguas del Lago Titicaca y el corazón ancestral del Imperio Inca en Cusco. Cada día es un capítulo nuevo en un viaje que lo abarca todo, garantizando una experiencia inolvidable, con logística impecable y confort en cada etapa.",
    highlights: [
      "Aventura completa en el Oasis de Huacachina con buggies y sandboard.",
      "Exploración de la 'Ciudad Blanca' de Arequipa y el profundo Cañón del Colca.",
      "Avistamiento del majestuoso vuelo del Cóndor.",
      "Inmersión cultural en el Lago Titicaca con noche en la isla de Amantaní.",
      "Recorrido por la 'Ruta del Sol' entre Puno y Cusco.",
      "Visita al Valle Sagrado de los Incas: Chinchero, Maras, Moray y Ollantaytambo.",
      "Día completo en la maravilla mundial: Machu Picchu con guiado privado.",
      "Trekking a la espectacular Montaña de 7 Colores.",
      "Caminata a la prístina Laguna Humantay.",
      "14 noches de alojamiento, desayunos y experiencias locales incluidas."
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima: Capital Gastronómica",
      description:
        "Bienvenida en el aeropuerto de Lima. Nuestro equipo te trasladará a tu hotel en el distrito de Miraflores. Disfruta de la tarde para explorar el malecón y la vibrante escena culinaria. Noche en Lima.",
    },
    {
      time: "Día 2",
      title: "Islas Ballestas y Oasis Huacachina",
      description:
        "Día de aventura. Salida temprano hacia Paracas para el tour en bote a las Islas Ballestas. Luego, nos dirigimos a Ica para una degustación de vinos y una tarde de adrenalina en el oasis de Huacachina con buggies y sandboard. Retorno a Lima para pernoctar.",
    },
    {
      time: "Día 3",
      title: "City Tour en Lima, la Ciudad de los Reyes",
      description:
        "Recorrido por los lugares más emblemáticos de Lima, desde el Parque del Amor en Miraflores hasta el Centro Histórico, declarado Patrimonio de la Humanidad, visitando la Plaza Mayor y sus catacumbas. Noche en Lima.",
    },
    {
      time: "Día 4",
      title: "Vuelo a Arequipa y City Tour en la 'Ciudad Blanca'",
      description:
        "Traslado al aeropuerto para el vuelo a Arequipa. Recepción y traslado al hotel. Por la tarde, city tour visitando el Monasterio de Santa Catalina, la Plaza de Armas y los miradores con vistas a los volcanes. Noche en Arequipa.",
    },
    {
      time: "Día 5",
      title: "Rumbo al Cañón del Colca (Día 1)",
      description:
        "Iniciamos el viaje hacia el Valle del Colca, atravesando la Reserva Nacional de Aguada Blanca. Observaremos vicuñas y paisajes de altura. Llegada a Chivay, tarde libre para los baños termales y cena con show folklórico. Noche en Chivay.",
    },
    {
      time: "Día 6",
      title: "Cruz del Cóndor y Viaje a Puno (Colca Día 2)",
      description:
        "Temprano por la mañana, nos dirigimos a la Cruz del Cóndor para presenciar el impresionante vuelo de los cóndores. De regreso, visitaremos pueblos tradicionales antes de emprender el viaje en bus hacia Puno. Noche en Puno.",
    },
    {
      time: "Día 7",
      title: "Lago Titicaca: Uros y Noche en Amantaní",
      description:
        "Excursión en el lago navegable más alto del mundo. Visitaremos las islas flotantes de los Uros y continuaremos a la isla de Amantaní para una experiencia de turismo vivencial, pasando la noche con una familia local.",
    },
    {
      time: "Día 8",
      title: "Lago Titicaca: Isla Taquile y Retorno a Puno",
      description:
        "Nos despedimos de Amantaní y navegamos hacia Taquile, famosa por sus textiles. Exploraremos la isla y almorzaremos antes de regresar a la ciudad de Puno por la tarde. Noche en Puno.",
    },
    {
      time: "Día 9",
      title: "La Ruta del Sol: De Puno a Cusco",
      description:
        "Viaje panorámico en bus turístico hacia Cusco. La ruta incluye paradas en Pukara, el paso de La Raya, el complejo de Raqchi y la 'Capilla Sixtina de América' en Andahuaylillas. Almuerzo buffet en ruta. Llegada a Cusco al atardecer.",
    },
    {
      time: "Día 10",
      title: "Valle Sagrado de los Incas",
      description:
        "Excursión completa por el Valle Sagrado, visitando Chinchero, las salineras de Maras, las terrazas de Moray y la fortaleza de Ollantaytambo. Por la tarde, tomaremos el tren hacia Aguas Calientes (Machu Picchu Pueblo) para pernoctar.",
    },
    {
      time: "Día 11",
      title: "Maravilla del Mundo: Machu Picchu",
      description:
        "El día más esperado. Subida en bus a Machu Picchu para una visita guiada privada que revelará su historia y misterios. Por la tarde, retorno en tren y bus a Cusco. Noche en Cusco.",
    },
    {
      time: "Día 12",
      title: "Montaña de 7 Colores (Vinicunca)",
      description:
        "Aventura de altura. Salida de madrugada hacia la Montaña de Colores. Disfrutaremos de una caminata para llegar a la cima y maravillarnos con sus paisajes únicos. Desayuno y almuerzo incluidos. Regreso a Cusco por la tarde.",
    },
    {
      time: "Día 13",
      title: "City Tour Cusco y Centros Arqueológicos",
      description:
        "Recorrido por la capital del Imperio Inca: el Templo del Sol o Qorikancha y los imponentes sitios arqueológicos de Sacsayhuamán, Q'enqo, Puka Pukara y Tambomachay. Noche en Cusco.",
    },
    {
      time: "Día 14",
      title: "Laguna Humantay, la Joya Turquesa",
      description:
        "Excursión a la impresionante Laguna Humantay, ubicada en las faldas del nevado Salkantay. Una caminata desafiante con una recompensa visual inolvidable. Desayuno y almuerzo incluidos. Noche en Cusco.",
    },
    {
      time: "Día 15",
      title: "Salida del Perú",
      description:
        "Mañana libre en Cusco para compras de último minuto o simplemente para disfrutar de la ciudad. A la hora coordinada, traslado al aeropuerto para tu vuelo de salida. Fin de una aventura inolvidable.",
    },
  ],

  includes: [
    "14 noches de alojamiento (3 Lima, 2 Arequipa, 1 Chivay, 2 Puno, 1 Amantaní, 4 Cusco, 1 Aguas Calientes)",
    "Todos los traslados desde y hacia aeropuertos y terminales",
    "Transporte turístico para todos los tours",
    "Vuelos locales (Lima-Arequipa y Cusco-Lima) en paquetes seleccionados",
    "Tren turístico a Machu Picchu (ida y vuelta)",
    "Bus a Machu Picchu (ida y vuelta)",
    "Entradas a todos los sitios mencionados en el itinerario",
    "Guiado privado en Machu Picchu",
    "Guía profesional bilingüe para cada excursión",
    "13 Desayunos y 05 Almuerzos especificados",
    "Asistencia permanente 24/7",
  ],

  notIncludes: [
    "Vuelos internacionales",
    "Vuelos locales (si no se selecciona el paquete que los incluye)",
    "Seguro de viaje (obligatorio)",
    "Comidas y cenas no mencionadas",
    "Bebidas",
    "Propinas para guías y conductores",
    "Gastos personales y souvenirs",
  ],

  recommendations: [
    "Contratar un seguro de viaje que cubra trekking y cancelaciones.",
    "Llegar a ciudades de altura (Arequipa, Cusco) con al menos un día de anticipación para aclimatarse.",
    "Empacar ropa versátil para climas fríos, templados y cálidos.",
    "Llevar calzado de trekking resistente y cómodo.",
    "No olvidar protector solar, sombrero, gafas de sol y repelente de insectos.",
    "Consultar a un médico sobre la prevención del mal de altura.",
    "Llevar una batería externa para dispositivos electrónicos.",
    "Tener siempre a mano el pasaporte original.",
  ],
}

export default function MaravillasDePeru15D14NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={packageData} />
        <RecommendedPackages currentPackageId={2} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}