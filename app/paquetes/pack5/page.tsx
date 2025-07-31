import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Selva Peruana y Machupicchu 9 Días 8 Noches - Aventura Amazónica e Inca | Machupicchu Origin",
  description:
    "Combina la magia de la historia inca con la biodiversidad de la selva amazónica. Este paquete de 9 días te lleva a Machu Picchu y a la Reserva Nacional de Tambopata para una aventura inolvidable.",
  keywords: "Selva peruana, Machu Picchu, Tambopata, Cusco, aventura amazónica, tour Perú 9 días",
}

const tourData = {
  title: "Selva Peruana y Machupicchu",
  subtitle: "Aventura de los Andes a la Amazonía",
  heroImage: "/SELVA9DIAS .png?height=600&width=1200",
  duration: "9 días / 8 noches",
  difficulty: "Moderado",
  groupSize: "2-10 personas",
  price: "$2,450",
  rating: 4.9,
  reviews: 112,

  abstract: {
    title: "La Aventura Definitiva: Andes y Amazonía",
    content:
      "Este es un viaje de contrastes épicos, diseñado para el viajero que desea experimentar las dos joyas más grandes del Perú. Comenzarás en las alturas de Cusco, explorando la capital Inca, el Valle Sagrado y la majestuosa ciudadela de Machu Picchu. Luego, volarás al corazón de la Amazonía para sumergirte en la exuberante selva de Tambopata. Te alojarás en un ecolodge, navegarás por ríos serpenteantes y buscarás vida silvestre exótica. Es la combinación perfecta de historia milenaria y naturaleza vibrante.",
    highlights: [
      "Exploración completa de Cusco, el ombligo del mundo Inca.",
      "Visita al místico Valle Sagrado de los Incas.",
      "Día completo en la maravilla mundial, Machu Picchu.",
      "Vuelo al corazón de la Amazonía peruana (Puerto Maldonado).",
      "Estadía en un ecolodge inmerso en la Reserva de Tambopata.",
      "Excursiones en bote para avistar caimanes, nutrias gigantes y aves exóticas.",
      "Caminatas nocturnas para descubrir la fauna de la selva.",
      "Combinación única de cultura andina y biodiversidad amazónica.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Cusco - Capital de los Incas",
      description:
        "Recepción en el aeropuerto de Cusco y traslado a su hotel. Tendrán el día para aclimatarse a la altitud (3,400 msnm). Recomendamos un paseo ligero por el pintoresco barrio de San Blas. Noche en Cusco.",
    },
    {
      time: "Día 2",
      title: "Cusco Imperial y Ruinas Cercanas",
      description:
        "Tour por la mañana para explorar los tesoros de Cusco: el Qorikancha (Templo del Sol) y la Catedral. Por la tarde, visitarán las impresionantes ruinas incas de Sacsayhuamán, Qenqo y Tambomachay. Noche en Cusco.",
    },
    {
      time: "Día 3",
      title: "El Valle Sagrado de los Incas",
      description:
        "Excursión de día completo al Valle Sagrado. Visitarán el colorido mercado de Pisac y su sitio arqueológico. Disfrutarán de un almuerzo buffet en Urubamba y explorarán la imponente fortaleza de Ollantaytambo. Noche en el Valle Sagrado.",
    },
    {
      time: "Día 4",
      title: "Maravilla del Mundo: Machu Picchu",
      description:
        "Viaje en tren desde Ollantaytambo hasta Aguas Calientes. Inmediatamente, tomarán el bus hacia Machu Picchu para un tour guiado completo por la ciudadela. Tendrán tiempo libre para explorar y tomar fotos antes de regresar a Cusco por la tarde. Noche en Cusco.",
    },
    {
      time: "Día 5",
      title: "Vuelo a la Amazonía - Puerto Maldonado",
      description:
        "Traslado al aeropuerto de Cusco para su vuelo a Puerto Maldonado. A su llegada, serán recibidos y trasladados al puerto para embarcar en un bote motorizado que los llevará a su ecolodge en la Reserva Nacional de Tambopata. Caminata de introducción por la tarde. Noche en el lodge.",
    },
    {
      time: "Día 6",
      title: "Aventura en el Lago Sandoval",
      description:
        "Después del desayuno, realizarán una excursión al Lago Sandoval, hogar de la nutria gigante de río, monos y una gran variedad de aves. Navegarán en canoa por el lago y disfrutarán de la increíble biodiversidad. Por la noche, buscarán caimanes en el río. Noche en el lodge.",
    },
    {
      time: "Día 7",
      title: "Canopy y Caminatas por la Selva",
      description:
        "Experimenten la selva desde las alturas con una caminata por puentes colgantes en el canopy. Obtendrán una perspectiva única del dosel del bosque. Por la tarde, realizarán una caminata etnobotánica para aprender sobre las plantas medicinales de la Amazonía. Noche en el lodge.",
    },
    {
      time: "Día 8",
      title: "Retorno de la Selva y Vuelo a Lima",
      description:
        "Después del desayuno, viajarán en bote de regreso a Puerto Maldonado para tomar su vuelo a Lima. A su llegada, serán trasladados a su hotel en Miraflores. Tarde libre para explorar la capital. Noche en Lima.",
    },
    {
      time: "Día 9",
      title: "Despedida del Perú",
      description:
        "A la hora apropiada, traslado desde su hotel al aeropuerto Jorge Chávez de Lima para su vuelo internacional de regreso a casa. Fin de la aventura.",
    },
  ],

  includes: [
    "Vuelos domésticos: Cusco-Puerto Maldonado y Puerto Maldonado-Lima.",
    "8 noches de alojamiento: 4 en Cusco/Valle Sagrado, 3 en ecolodge amazónico, 1 en Lima.",
    "Todas las comidas especificadas en el itinerario (Pensión completa en la selva).",
    "Todos los traslados en transporte turístico privado o de primera categoría.",
    "Tren a Machu Picchu (categoría Expedition o similar) ida y vuelta.",
    "Todas las excursiones y tours mencionados con guías profesionales locales.",
    "Entradas a todos los sitios arqueológicos y reservas naturales.",
    "Excursiones en bote y actividades en la selva.",
    "Asistencia permanente durante todo el viaje.",
  ],

  notIncludes: [
    "Vuelos internacionales hacia Lima y desde Lima.",
    "Vuelo Lima-Cusco del primer día.",
    "Comidas y bebidas no especificadas en el itinerario.",
    "Seguro de viaje (altamente recomendado).",
    "Propinas para guías, conductores y personal del lodge.",
    "Gastos personales y souvenirs.",
    "Impuestos de aeropuerto.",
  ],

  recommendations: [
    "Llevar ropa para climas variados: abrigadora para Cusco y ligera/de secado rápido para la selva.",
    "Repelente de insectos con DEET es indispensable para la selva.",
    "Binoculares para el avistamiento de fauna en la selva y los Andes.",
    "Botas de trekking cómodas y sandalias/zapatillas para el lodge.",
    "Protector solar, sombrero y gafas de sol para ambos destinos.",
    "Vacuna contra la fiebre amarilla (consultar con su médico).",
    "Linterna frontal para caminatas nocturnas.",
    "Una mochila pequeña para las excursiones diarias.",
  ],
}

export default function SelvaPeruanaYMachupicchu9D8NPage() {
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