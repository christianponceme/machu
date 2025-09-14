import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Norte Peruano y Machupicchu 9 Días 8 Noches - Expedición Completa | Machupicchu Origin",
  description:
    "La aventura definitiva por todo Perú: Lima, costa, sierra, selva, Machu Picchu, Amazonía y más. 15 días explorando la diversidad completa del país.",
  keywords: "Gran aventura Perú 15 días, Amazonía, costa sierra selva, expedición completa",
}

const tourData = {
  title: "Norte Peruano y Machupicchu 9 Días 8 Noches",
  subtitle: "La Expedición Definitiva por Todo Perú",
  heroImage: "/NORTE9dias.webp?height=600&width=1200",
  duration: "15 días / 14 noches",
  difficulty: "Aventurero",
  groupSize: "2-12 personas",
  price: "$2,850",
  rating: 5.0,
  reviews: 78,

  abstract: {
    title: "La Aventura Más Completa del Perú",
    content:
      "Esta es la expedición definitiva para los verdaderos aventureros que quieren experimentar toda la diversidad del Perú en un solo viaje épico. Desde las cosmopolitas calles de Lima hasta la exuberante Amazonía, pasando por el desierto costero, los majestuosos Andes, la cultura inca y las tradiciones ancestrales del altiplano. Este viaje de 15 días te llevará a través de todos los ecosistemas del país, incluyendo experiencias únicas como navegación por el Amazonas, vuelo sobre Nazca, trekking en los Andes y encuentros con comunidades nativas.",
    highlights: [
      "Lima: capital gastronómica y centro histórico colonial",
      "Amazonía: navegación, fauna exótica y comunidades nativas",
      "Líneas de Nazca y oasis de Huacachina",
      "Arequipa: Ciudad Blanca y Cañón del Colca",
      "Cusco completo: ciudad, Valle Sagrado y Machu Picchu",
      "Lago Titicaca: islas flotantes y culturas ancestrales",
      "Experiencias gastronómicas en cada región",
      "Actividades de aventura en todos los ecosistemas",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima - City Tour",
      description:
        "Recepción en aeropuerto Jorge Chávez. City tour por Lima colonial y moderna visitando centro histórico, Miraflores y Barranco. Cena en restaurante gourmet con vista al océano.",
    },
    {
      time: "Día 2-3",
      title: "Amazonía - Iquitos",
      description:
        "Vuelo a Iquitos. Navegación por el río Amazonas, visita a comunidades nativas, observación de delfines rosados, caminatas nocturnas y experiencias de supervivencia en la selva.",
    },
    {
      time: "Día 4",
      title: "Vuelo Lima - Paracas",
      description:
        "Retorno a Lima y viaje por carretera a Paracas. Excursión a Islas Ballestas para observar fauna marina. Continuación al oasis de Huacachina.",
    },
    {
      time: "Día 5",
      title: "Líneas de Nazca - Sandboarding",
      description:
        "Vuelo panorámico sobre las misteriosas Líneas de Nazca. Sandboarding en las dunas de Huacachina. Experiencia de buggy al atardecer.",
    },
    {
      time: "Día 6-7",
      title: "Arequipa - Cañón del Colca",
      description:
        "Viaje a Arequipa. City tour por la Ciudad Blanca. Excursión de 2 días al Cañón del Colca, observación de cóndores y aguas termales de La Calera.",
    },
    {
      time: "Día 8",
      title: "Vuelo Arequipa - Cusco",
      description:
        "Vuelo matutino a Cusco. Día de aclimatación con visita suave al barrio de San Blas y mercado San Pedro. Ceremonia de bienvenida andina.",
    },
    {
      time: "Día 9",
      title: "Cusco Imperial - Sitios Arqueológicos",
      description:
        "City tour completo visitando Qorikancha, Catedral y los sitios arqueológicos de Sacsayhuamán, Qenqo, Puka Pukara y Tambomachay.",
    },
    {
      time: "Día 10",
      title: "Valle Sagrado - Experiencias Culturales",
      description:
        "Tour cultural del Valle Sagrado con visitas a Pisac, Ollantaytambo, Maras, Moray y experiencias auténticas con familias locales.",
    },
    {
      time: "Día 11",
      title: "Machu Picchu - Ciudadela Perdida",
      description:
        "Viaje en tren panorámico a Aguas Calientes. Tour guiado completo de Machu Picchu con tiempo libre extendido. Noche en Aguas Calientes.",
    },
    {
      time: "Día 12",
      title: "Montaña de Colores - Aventura Andina",
      description:
        "Retorno a Cusco y tour a la espectacular Montaña de Colores Vinicunca. Experiencia de alta montaña con paisajes únicos.",
    },
    {
      time: "Día 13",
      title: "Tren Panorámico Cusco - Puno",
      description:
        "Viaje en tren panorámico a través del altiplano peruano con paradas en sitios arqueológicos y paisajes espectaculares.",
    },
    {
      time: "Día 14",
      title: "Lago Titicaca - Islas Flotantes",
      description:
        "Excursión completa al Lago Titicaca visitando las islas flotantes de los Uros y la isla Taquile. Experiencias con comunidades ancestrales.",
    },
    {
      time: "Día 15",
      title: "Sillustani - Vuelo a Lima",
      description:
        "Visita a las torres funerarias de Sillustani. Vuelo a Lima con conexión internacional. Cena de despedida si el tiempo lo permite.",
    },
  ],

  includes: [
    "Vuelos domésticos: Lima-Iquitos-Lima, Arequipa-Cusco, Juliaca-Lima",
    "14 noches de hotel 3-4 estrellas con desayuno",
    "3 noches Lima, 2 Amazonía, 1 Huacachina, 2 Arequipa, 4 Cusco, 1 Valle Sagrado, 1 Puno",
    "Todas las comidas especificadas en itinerario",
    "Transporte terrestre y fluvial según programa",
    "Vuelo sobre Líneas de Nazca",
    "Navegación amazónica con guía especializado",
    "Tren panorámico Cusco-Puno",
    "Tren a Machu Picchu ida y vuelta",
    "Entradas a todos los sitios arqueológicos y parques",
    "Guías especializados en cada región",
    "Experiencias culturales auténticas",
    "Actividades de aventura incluidas",
  ],

  notIncludes: [
    "Vuelos internacionales",
    "Comidas no especificadas en el itinerario",
    "Bebidas alcohólicas",
    "Propinas para guías, conductores y personal local",
    "Gastos personales, souvenirs y compras",
    "Seguro de viaje (obligatorio para actividades de aventura)",
    "Medicamentos para mal de altura",
    "Actividades opcionales no mencionadas",
    "Tasas de aeropuerto domésticas",
  ],

  recommendations: [
    "Llegar 1 día antes a Lima para descanso",
    "Llevar ropa para todos los climas (selva, costa, sierra, altiplano)",
    "Vacunas recomendadas para la Amazonía",
    "Medicamentos para mal de altura para Cusco y Puno",
    "Protector solar muy fuerte para todos los destinos",
    "Repelente de insectos para la Amazonía",
    "Cámara resistente al agua para navegación",
    "Documentos de identidad para todos los vuelos",
  ],
}

export default function GranAventuraPeru15D14NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RecommendedPackages currentPackageId={1} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
