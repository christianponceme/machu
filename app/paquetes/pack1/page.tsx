import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Cusco 07 Días 06 Noches",
  description:
    "Un paquete completo de 7 días para explorar todas las maravillas de Cusco: Valle Sagrado, Machu Picchu, Montaña de Colores, Laguna Humantay y el City Tour. La aventura andina definitiva.",
  keywords: "paquete Cusco 7 dias, tour Cusco completo, Machu Picchu, Valle Sagrado, Montaña de Colores, Laguna Humantay, Maravillas de Cusco",
  openGraph: {
    title: "Las Maravillas de Cusco 07 Días 06 Noches - Machupicchu Origin",
    description: "Un viaje inolvidable de 7 días y 6 noches por el corazón del Imperio Inca, combinando cultura, historia y aventura en paisajes asombrosos.",
    url: "https://machupicchuOrigin.com/paquetes/las-maravillas-de-cusco-7d6n",
  },
}

const packageData = {
  title: "Las Maravillas de Cusco",
  subtitle: "7 Días y 6 Noches de Aventura Andina Completa",
  heroImage: "/7DIASCUSCO.jpg?height=600&width=1200",
  duration: "7 días / 6 noches",
  difficulty: "Moderado-Desafiante",
  groupSize: "2-16 personas",
  price: "$835",
  rating: 5,
  reviews: 250,

  abstract: {
    title: "La Experiencia Andina Más Completa en una Semana",
    content:
      "Este paquete de 7 días y 6 noches está diseñado para los viajeros que quieren vivirlo todo. Sumérgete en la magia de Cusco explorando no solo sus tesoros arqueológicos como Machu Picchu y el Valle Sagrado, sino también desafiando la altura para conquistar dos de las maravillas naturales más espectaculares de los Andes: la Montaña de 7 Colores y la Laguna Humantay. Es el equilibrio perfecto entre cultura, historia y aventura de alta montaña, todo perfectamente organizado para una experiencia inolvidable.",
    highlights: [
      "Visita a la maravilla mundial, Machu Picchu, con un guiado PRIVADO.",
      "Exploración completa del Valle Sagrado: Chinchero, Maras, Moray y Ollantaytambo.",
      "Trekking a la famosa Montaña de 7 Colores (Vinicunca).",
      "Caminata a la joya turquesa de los Andes, la Laguna Humantay.",
      "City tour completo por Cusco y sus imponentes sitios arqueológicos.",
      "6 noches de alojamiento, desayunos y almuerzos clave incluidos.",
      "Todos los traslados, tren turístico y entradas para una aventura sin estrés.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Cusco: El Corazón del Imperio Inca",
      description:
        "¡Bienvenido a Cusco! Nuestro equipo te recibirá en el aeropuerto para llevarte en movilidad privada a tu hotel. Este día es clave para la aclimatación a la altitud. Aprovecha para explorar la Plaza de Armas y sus alrededores. Noche en Cusco.",
    },
    {
      time: "Día 2",
      title: "Valle Sagrado de los Incas",
      description:
        "Tour de día completo que inicia en Chinchero, famoso por sus textiles. Continuamos hacia las Salineras de Maras y las terrazas de Moray. Tras un almuerzo buffet en Urubamba, exploramos la fortaleza de Ollantaytambo y abordamos el tren a Aguas Calientes. Noche en Machu Picchu Pueblo.",
    },
    {
      time: "Día 3",
      title: "Machu Picchu, La Ciudadela Perdida",
      description:
        "El día más esperado. Subimos en bus a Machu Picchu para una visita guiada PRIVADA de 3 horas que te sumergirá en su historia. Después, tendrás tiempo libre en Aguas Calientes antes de tomar el tren de regreso. Te esperaremos para llevarte a tu hotel en Cusco. Noche en Cusco.",
    },
    {
      time: "Día 4",
      title: "Montaña de 7 Colores (Vinicunca)",
      description:
        "Aventura de madrugada (recojo 04:00 am). Nos dirigimos a Cusipata para un desayuno energético. La caminata de 2 horas te llevará a la cima de Vinicunca para admirar sus increíbles tonalidades. Almuerzo incluido antes de regresar a Cusco. Noche en Cusco.",
    },
    {
      time: "Día 5",
      title: "City Tour Cusco y Centros Arqueológicos",
      description:
        "Exploraremos la capital Inca. El tour incluye el Templo del Sol (Qorikancha) y los impresionantes sitios arqueológicos de Sacsayhuamán, Q'enqo, Puca Pucara y Tambomachay, un recorrido lleno de historia y cultura. Noche en Cusco.",
    },
    {
      time: "Día 6",
      title: "Laguna Humantay, la Joya Turquesa",
      description:
        "Otra salida temprana (04:00 am) nos lleva a Mollepata para desayunar. Luego, una caminata de 1.5 horas nos conduce a la espectacular Laguna Humantay, al pie de un nevado. Almuerzo incluido. Regreso a Cusco por la tarde. Noche en Cusco.",
    },
    {
      time: "Día 7",
      title: "Salida del Perú",
      description:
        "Según el horario de tu vuelo, te recogeremos de tu hotel para llevarte al aeropuerto de Cusco, concluyendo esta inolvidable aventura. ¡Esperamos haber creado recuerdos memorables para ti! ¡Hasta la próxima!",
    },
  ],

  includes: [
    "05 noches de hotel en Cusco",
    "01 noche de hotel en Machu Picchu Pueblo",
    "Transporte privado del aeropuerto (ida y retorno)",
    "Tren y bus turístico a Machu Picchu (ida y retorno)",
    "Traslado a todos los lugares a visitar",
    "Guiado privado en Machu Picchu",
    "Servicio compartido en los demás tours (Valle Sagrado, Montaña Colores, City Tour, Laguna Humantay)",
    "Guía de turismo en todos los tours",
    "Entradas a todos los sitios mencionados",
    "06 Desayunos",
    "03 Almuerzos (en tour de Valle Sagrado, Montaña Colores y Laguna Humantay)",
  ],

  notIncludes: [
    "Vuelos internacionales y locales (opcional a cotizar)",
    "Alimentos no mencionados en el programa",
    "Seguro de viaje",
    "Propinas para guías y conductores",
    "Gastos personales y souvenirs",
  ],

  recommendations: [
    "Llega a Cusco con 1 o 2 días de anticipación para una aclimatación óptima.",
    "Empaca ropa en capas, incluyendo prendas impermeables y abrigadoras para los tours de montaña.",
    "Es indispensable usar calzado de trekking cómodo y resistente.",
    "El protector solar, sombrero y gafas de sol son cruciales por la radiación en altura.",
    "Consulta a tu médico sobre medicamentos para el mal de altura (soroche).",
    "Lleva snacks energéticos y una botella de agua recargable a las caminatas.",
    "Ten a mano tu pasaporte original para el ingreso a Machu Picchu.",
  ],
}

export default function MaravillasDeCusco7D6NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={packageData} />
        <RecommendedPackages currentPackageId={5} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}