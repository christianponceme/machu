import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Perú y Bolivia 20 Días 19 Noches - Aventura Épica",
  description:
    "La expedición definitiva de 20 días por Perú y Bolivia. Desde Lima, Líneas de Nazca, Arequipa, Cusco, Machu Picchu hasta el increíble Salar de Uyuni. La aventura más completa.",
  keywords: "paquete Peru Bolivia 20 dias, tour completo Peru Bolivia, Lineas de Nazca, Machu Picchu, Salar de Uyuni, expedicion sudamerica",
  openGraph: {
    title: "Las Maravillas de Perú y Bolivia 20 Días 19 Noches - Machupicchu Origin",
    description: "Una expedición épica de 20 días y 19 noches por los tesoros más emblemáticos de Perú y Bolivia.",
    url: "https://machupicchuOrigin.com/paquetes/maravillas-peru-bolivia-20d19n",
  },
}

const tourData = {
  title: "Las Maravillas de Perú y Bolivia",
  subtitle: "20 Días y 19 Noches: La Expedición Definitiva",
  heroImage: "/20DIAS .webp?height=600&width=1200",
  duration: "20 días / 19 noches",
  difficulty: "Desafiante",
  groupSize: "2-16 personas",
  price: "$2070",
  rating: 5,
  reviews: 510,

  abstract: {
    title: "La Expedición Más Épica por Perú y Bolivia",
    content:
      "Esta expedición de 20 días es el viaje más completo y transformador que puedas imaginar, conectando los destinos más icónicos de Perú y Bolivia. Iniciarás en la costa peruana, sobrevolando las enigmáticas Líneas de Nazca y sintiendo la adrenalina en el desierto de Huacachina. Ascenderás a los Andes para explorar la 'Ciudad Blanca' de Arequipa y el profundo Cañón del Colca. Te sumergirás en la magia de Cusco, el Valle Sagrado y Machu Picchu, y te desafiarás en sus montañas de colores. Finalmente, cruzarás al altiplano para navegar el Lago Titicaca, descubrir la vibrante La Paz y maravillarte ante el espejo infinito del Salar de Uyuni. Es una odisea que lo abarca todo: desierto, cañones, historia inca, cultura andina y paisajes de otro mundo.",
    highlights: [
      "Sobrevuelo de las misteriosas Líneas de Nazca.",
      "Aventura en el Oasis de Huacachina e Islas Ballestas.",
      "Exploración de Arequipa y el Cañón del Colca con avistamiento de cóndores.",
      "Recorrido completo por Cusco: City tour, Valle Sagrado, Machu Picchu, Montaña de Colores y Laguna Humantay.",
      "Travesía por la Ruta del Sol y navegación en el Lago Titicaca.",
      "Visita a La Paz, la capital más alta del mundo, y sus mercados.",
      "Expedición de 2 días por el increíble Salar de Uyuni y sus lagunas de colores.",
      "19 noches de alojamiento y experiencias cuidadosamente planificadas.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima",
      description: "Bienvenida en el aeropuerto de Lima. Nuestro equipo te trasladará a tu hotel en Miraflores para que puedas descansar e iniciar esta gran aventura.",
    },
    {
      time: "Día 2",
      title: "City Tour Lima",
      description: "Recorrido por la Lima moderna y colonial, visitando el Parque del Amor, la Plaza de Armas, la Catedral y las impresionantes Catacumbas del Convento de San Francisco.",
    },
    {
      time: "Día 3",
      title: "Oasis Huacachina e Islas Ballestas",
      description: "Salida muy temprano hacia Paracas para el tour en bote a las Islas Ballestas. Luego, aventura en Ica con degustación de vinos y un emocionante tour en buggies y sandboard en el oasis de Huacachina. Noche en Nazca.",
    },
    {
      time: "Día 4",
      title: "Sobrevuelo Líneas de Nazca y Rumbo a Arequipa",
      description: "Por la mañana, sobrevolaremos en avioneta las enigmáticas Líneas de Nazca. Por la tarde, tomaremos un bus nocturno de primera clase con destino a la ciudad de Arequipa.",
    },
    {
      time: "Día 5",
      title: "Llegada y City Tour en Arequipa",
      description: "Llegada a Arequipa por la mañana y traslado al hotel para descansar. Por la tarde, city tour por la 'Ciudad Blanca', explorando sus claustros, iglesias y miradores.",
    },
    {
      time: "Día 6",
      title: "Cañón del Colca (Día 1)",
      description: "Viaje hacia el Valle del Colca, atravesando la Reserva Nacional de Salinas y Aguada Blanca. Llegada a Chivay, con tarde libre para disfrutar de los baños termales y una cena con show folklórico.",
    },
    {
      time: "Día 7",
      title: "Cruz del Cóndor (Colca Día 2) y Noche en Arequipa",
      description: "Visita a la Cruz del Cóndor para el avistamiento del majestuoso vuelo de los cóndores. Exploraremos pueblos del valle antes de regresar a la ciudad de Arequipa para pernoctar.",
    },
    {
      time: "Día 8",
      title: "Vuelo a Cusco y Walking Tour",
      description: "Vuelo matutino de Arequipa a Cusco. Traslado al hotel. Por la tarde, un walking tour de aclimatación por las principales calles, el barrio de San Blas y Qoricancha.",
    },
    {
      time: "Día 9",
      title: "Valle Sagrado de los Incas VIP",
      description: "Excursión al Valle Sagrado, visitando Chinchero, Maras y Moray. Tras un almuerzo buffet, exploraremos Ollantaytambo y tomaremos el tren a Aguas Calientes. Noche en Machu Picchu Pueblo.",
    },
    {
      time: "Día 10",
      title: "Machu Picchu, Maravilla del Mundo",
      description: "Visita guiada de 3 horas por la ciudadela de Machu Picchu. Por la tarde, retorno en tren y bus a tu hotel en Cusco.",
    },
    {
      time: "Día 11",
      title: "Montaña de 7 Colores",
      description: "Trekking de altura a la espectacular Montaña Vinicunca. Una caminata desafiante con una recompensa visual de paisajes coloridos únicos en el mundo.",
    },
    {
      time: "Día 12",
      title: "Laguna Humantay",
      description: "Caminata hacia la prístina Laguna Humantay, una joya turquesa al pie de un imponente nevado. Una experiencia de conexión con la naturaleza andina.",
    },
    {
      time: "Día 13",
      title: "Ruta del Sol: Cusco a Puno",
      description: "Viaje en bus turístico a Puno, con paradas guiadas en la Capilla de Andahuaylillas, el templo de Raqchi y el paso de La Raya. Noche en Puno.",
    },
    {
      time: "Día 14",
      title: "Lago Titicaca: Uros y Taquile",
      description: "Excursión de día completo en el lago navegable más alto del mundo, visitando las islas flotantes de los Uros y la cultural isla de Taquile.",
    },
    {
      time: "Día 15",
      title: "Viaje de Puno a La Paz, Bolivia",
      description: "Traslado temprano a la terminal para el bus de Puno a La Paz. Cruce de frontera y llegada a la capital boliviana por la tarde. Noche en La Paz.",
    },
    {
      time: "Día 16",
      title: "City Tour La Paz y Bus Nocturno a Uyuni",
      description: "Por la mañana, City Tour por La Paz, visitando el Mercado de las Brujas y viajando en sus famosos teleféricos. Por la noche, bus nocturno hacia el Salar de Uyuni.",
    },
    {
      time: "Día 17",
      title: "Salar de Uyuni (Día 1)",
      description: "Llegada a Uyuni. Inicio del tour visitando el Cementerio de Trenes, Colchani y el inmenso Salar. Noche en un hotel de sal o en las cercanías.",
    },
    {
      time: "Día 18",
      title: "Salar de Uyuni (Día 2) y Retorno a La Paz",
      description: "El tour continúa hacia las lagunas de colores y desiertos altiplánicos. Por la tarde, retorno a Uyuni para tomar el bus nocturno de regreso a La Paz.",
    },
    {
      time: "Día 19",
      title: "Llegada y Día Libre en La Paz",
      description: "Llegada a La Paz por la mañana y traslado al hotel. Día libre para descansar, hacer compras o explorar la ciudad por tu cuenta.",
    },
    {
      time: "Día 20",
      title: "Salida Internacional",
      description: "Desayuno en el hotel. A la hora coordinada, traslado al Aeropuerto Internacional de El Alto para tu vuelo de salida. Fin de la expedición.",
    },
  ],

  includes: [
    "17 noches de hotel y 2 noches en bus cama.",
    "Transporte privado para todos los traslados.",
    "Avioneta para sobrevuelo de las Líneas de Nazca.",
    "Bus turístico y nocturno entre ciudades.",
    "Tren y bus a Machu Picchu (ida y retorno).",
    "Guiado privado en Machu Picchu y compartido en demás tours.",
    "Entradas a todos los sitios mencionados en Perú y Bolivia.",
    "Tour de 2 días en el Salar de Uyuni en camioneta 4x4.",
    "19 Desayunos, 07 Almuerzos, 01 Cena.",
    "Asistencia permanente 24/7 en ambos países.",
  ],

  notIncludes: [
    "Vuelos internacionales y vuelo doméstico Arequipa-Cusco (opcional).",
    "Alimentos y bebidas no mencionados.",
    "Seguro de viaje (obligatorio).",
    "Tasas de inmigración, fronterizas o de aeropuertos.",
    "Propinas para guías, conductores y personal.",
    "Gastos personales.",
  ],

  recommendations: [
    "Contratar un seguro de viaje con amplia cobertura para ambos países.",
    "Empacar para una extrema variedad de climas: desierto, valles templados, alta montaña fría y altiplano.",
    "Es esencial una buena aclimatación a la altitud. Sigue las recomendaciones del guía.",
    "Llevar pasaporte original y verificar requisitos de visa para Bolivia según tu nacionalidad.",
    "Tener a mano efectivo en las monedas locales (Soles peruanos y Bolivianos).",
    "Llevar cargadores portátiles (power banks), ya que habrá trayectos largos.",
    "El protector solar, gorro, guantes y gafas de sol son indispensables, especialmente en el altiplano.",
  ],
}

export default function PeruBolivia20D19NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RecommendedPackages currentPackageId={6} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}