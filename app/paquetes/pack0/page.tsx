import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Cusco 5 Días 4 Noches",
  description:
    "Paquete de 5 días para explorar lo mejor de Cusco: Valle Sagrado de los Incas, la ciudadela de Machu Picchu y la asombrosa Montaña de Colores. Aventura y cultura en el corazón de los Andes.",
  keywords: "paquete Cusco 5 días, Las Maravillas de Cusco, Machu Picchu, Valle Sagrado, Montaña de Colores, tour Cusco 5 dias, Chinchero, Maras, Moray",
  openGraph: {
    title: "Las Maravillas de Cusco 5 Días 4 Noches - Machupicchu Origin",
    description: "Paquete completo de 5 días y 4 noches para descubrir las joyas de la región de Cusco: cultura, historia y paisajes inolvidables.",
    url: "https://machupicchuOrigin.com/paquetes/las-maravillas-de-cusco-5d4n",
  },
}

const packageData = {
  title: "Las Maravillas de Cusco",
  subtitle: "5 Días 4 Noches en el Valle Sagrado, Machu Picchu y Montaña de Colores.",
  heroImage: "/5DIAS.png?height=600&width=1200",
  duration: "5 días / 4 noches",
  difficulty: "Moderado",
  groupSize: "2-16 personas",
  price: "$699",
  rating: 4.9,
  reviews: 185,

  abstract: {
    title: "La Esencia de Cusco en 5 Días Inolvidables",
    content:
      "Este paquete de 5 días y 4 noches está perfectamente diseñado para que descubras los tesoros más impresionantes de la región de Cusco. Desde la historia viva del Valle Sagrado de los Incas, pasando por la energía mágica de la ciudadela de Machu Picchu, hasta la belleza surrealista de la Montaña de 7 Colores. Una experiencia concentrada y llena de aventura, ideal para quienes desean vivir lo mejor de los Andes peruanos con total comodidad y organización.",
    highlights: [
      "Exploración completa del Valle Sagrado: Chinchero, Maras, Moray y Ollantaytambo.",
      "Visita a la maravilla mundial, Machu Picchu, con un guiado PRIVADO.",
      "Aventura de trekking a la famosa y colorida Montaña Vinicunca.",
      "4 noches de alojamiento en hoteles seleccionados en Cusco y Machu Picchu Pueblo.",
      "Todos los traslados, tren turístico Expedition y entradas a los sitios de interés incluidas.",
      "Organización completa para que solo te preocupes de disfrutar.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Cusco: El Ombligo del Mundo",
      description:
        "Te daremos la bienvenida en el aeropuerto de Cusco y te trasladaremos en movilidad privada a tu hotel. Este primer día es crucial para la aclimatación a la altitud. Podrás aprovechar para dar un paseo por la hermosa Plaza de Armas y las pintorescas calles coloniales. Noche en Cusco.",
    },
    {
      time: "Día 2",
      title: "Valle Sagrado de los Incas",
      description:
        "Iniciaremos el tour temprano hacia Chinchero para explorar su centro arqueológico y textil. Continuaremos hacia las impresionantes Salineras de Maras y las terrazas circulares de Moray. Después de un almuerzo buffet en Urubamba, visitaremos la imponente fortaleza de Ollantaytambo. Por la tarde, abordaremos el tren turístico hacia Aguas Calientes para pasar la noche.",
    },
    {
      time: "Día 3",
      title: "Machu Picchu: La Ciudadela Perdida",
      description:
        "El día más esperado. Tomaremos el bus hacia la ciudadela de Machu Picchu para disfrutar de una visita guiada privada de aproximadamente 3 horas. Al finalizar, descenderemos a Aguas Calientes, donde tendrás tiempo libre para almorzar antes de tomar el tren de regreso. A tu llegada a Cusco, nuestro equipo te esperará para llevarte a tu hotel.",
    },
    {
      time: "Día 4",
      title: "Montaña de Colores (Vinicunca)",
      description:
        "Comenzaremos la aventura muy temprano (recojo 04:00 am), dirigiéndonos a Cusipata para un delicioso desayuno buffet. La caminata hacia la Montaña de Colores dura aproximadamente 2 horas. En la cima, tendrás tiempo para admirar los impresionantes tonos naturales y tomar fotografías. Regresaremos a Cusipata para un merecido almuerzo antes de volver a Cusco, llegando alrededor de las 5:30 PM.",
    },
    {
      time: "Día 5",
      title: "Salida del Perú",
      description:
        "En este último día, según el horario de tu vuelo, pasaremos por tu hotel en Cusco para trasladarte al aeropuerto. Abordarás tu vuelo, marcando el final de esta inolvidable experiencia. Con esto culminan nuestros servicios. ¡Hasta una próxima aventura!",
    },
  ],

  includes: [
    "03 noches de hotel en Cusco.",
    "01 noche de hotel en Machu Picchu Pueblo.",
    "Transporte PRIVADO del aeropuerto hotel (ida y retorno).",
    "Tren categoría EXPEDITION y bus turístico a Machu Picchu (ida y retorno).",
    "Traslado a todos los lugares a visitar.",
    "Guiado PRIVADO en Machu Picchu.",
    "Servicio compartido en los demás tours.",
    "Guía de turismo en todos los tours.",
    "Entradas para Tour Valle Sagrado y Montaña de colores.",
    "04 Desayunos.",
    "02 Almuerzos.",
    "Asistencia permanente.",
  ],

  notIncludes: [
    "Vuelos internacionales.",
    "Vuelos locales (Lima-Cusco ida y retorno), opcional a cotizar.",
    "Alimentos no mencionados en el programa.",
    "Seguros de Viaje.",
    "Propinas para guías y personal.",
    "Gastos personales y souvenirs.",
  ],

  recommendations: [
    "Llega a Cusco al menos un día antes para una mejor aclimatación a la altitud.",
    "Empaca ropa en capas: prendas ligeras para el día y abrigadoras para las noches.",
    "Usa calzado de trekking cómodo e impermeable, especialmente para la Montaña de Colores.",
    "No olvides protector solar de alto factor, sombrero y gafas de sol.",
    "Consulta con tu médico sobre medicamentos para el mal de altura (soroche).",
    "Lleva contigo una botella de agua reutilizable para mantenerte hidratado.",
    "Ten a mano efectivo en moneda local (Soles) para pequeñas compras.",
  ],
}

export default function MaravillasDeCusco5D4NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={packageData} />
        <RecommendedPackages currentPackageId={3} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}