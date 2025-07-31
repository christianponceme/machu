import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Luna de Miel en Peru - Experiencia Total | Machupicchu Origin",
  description:
    "Celebren su amor con un viaje inolvidable por el Perú. Un itinerario romántico y personalizable que los llevará por Lima, Arequipa, Cusco, Machu Picchu y el Lago Titicaca. Creen recuerdos eternos en su luna de miel soñada.",
  keywords:
    "Luna de miel en Perú, viaje de novios a Machu Picchu, tour romántico Perú, Lima Arequipa Cusco Puno para parejas, luna de miel de lujo",
}

const tourData = {
  title: "Luna de Miel en Perú",
  subtitle: "Un Viaje Inolvidable por Lima, Cusco, Machu Picchu y más",
  heroImage: "/LUNADEMIEL.png?height=600&width=1200",
  duration: "12 días / 11 noches (Itinerario flexible)",
  difficulty: "Suave a Moderado",
  groupSize: "Exclusivo para dos",
  price: "$1,4150",
  rating: 5.0,
  reviews: 312,

  abstract: {
    title: "Un Comienzo Mágico: Su Luna de Miel Soñada en Perú",
    content:
      "Este no es solo un viaje, es el primer capítulo de su vida juntos. Hemos diseñado una experiencia de luna de miel que combina aventura, romance y cultura en los escenarios más espectaculares del Perú. Desde cenas románticas en Lima hasta amaneceres mágicos en Machu Picchu, cada detalle está pensado para crear momentos inolvidables. Disfruten de hoteles con encanto, experiencias privadas y la comodidad de un itinerario perfectamente organizado, pero con la flexibilidad de adaptarse a sus sueños. Permitan que la magia del Perú sea el telón de fondo de su historia de amor.",
    highlights: [
      "Cenas románticas en Lima, la capital gastronómica.",
      "Paseos por la encantadora 'Ciudad Blanca' de Arequipa.",
      "Noches mágicas en el Valle Sagrado de los Incas.",
      "Visita privada a la maravilla mundial: Machu Picchu.",
      "Atardeceres inolvidables en el místico Lago Titicaca.",
      "Hoteles con encanto y detalles especiales para lunamieleros.",
      "Itinerario personalizable para que su viaje sea único.",
      "Experiencias exclusivas y memorables solo para ustedes dos.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima: El Comienzo de la Aventura",
      description:
        "¡Bienvenidos al Perú! Serán recibidos en el aeropuerto de Lima y trasladados a su hotel en el bohemio distrito de Miraflores. Tarde libre para descansar y aclimatarse. Por la noche, disfrutarán de una cena de bienvenida en un restaurante con vistas espectaculares.",
    },
    {
      time: "Día 2",
      title: "Lima: Sabores y Secretos para Dos",
      description:
        "Descubran juntos el encanto del centro histórico de Lima, declarado Patrimonio de la Humanidad. Por la tarde, participarán en una clase de cocina privada, aprendiendo los secretos del ceviche y el pisco sour. Una experiencia divertida y deliciosa. Vuelo nocturno a la ciudad de Arequipa.",
    },
    {
      time: "Día 3",
      title: "Arequipa: Un Paseo por la Ciudad Blanca",
      description:
        "Despierten en la hermosa Arequipa. Realizarán un tour privado por sus calles de sillar blanco, visitando el Monasterio de Santa Catalina, un refugio de paz y color. Disfrutarán de las vistas de los volcanes desde el mirador de Yanahuara, el lugar perfecto para una foto romántica.",
    },
    {
      time: "Día 4",
      title: "Rumbo al Colca: Naturaleza y Relajación",
      description:
        "Emprenderán un viaje escénico hacia el Valle del Colca, observando vicuñas en la Reserva Nacional. Por la tarde, podrán relajarse en las aguas termales de la zona, una experiencia reconfortante bajo el cielo andino. Noche en un acogedor hotel en el valle.",
    },
    {
      time: "Día 5",
      title: "El Vuelo del Cóndor y Llegada a Cusco",
      description:
        "Temprano por la mañana, se dirigirán a la Cruz del Cóndor para presenciar el majestuoso vuelo de estas aves legendarias. Un momento que les dejará sin aliento. Por la tarde, volarán desde Arequipa a Cusco, el corazón del imperio inca. Noche de aclimatación en la ciudad imperial.",
    },
    {
      time: "Día 6",
      title: "Cusco: Magia y Encanto Imperial",
      description:
        "Exploren la magia de Cusco con un tour por sus principales atractivos: la Plaza de Armas, la Catedral y el templo de Qorikancha. Luego, visitarán las imponentes ruinas de Sacsayhuamán. Tarde libre para perderse en las románticas calles de San Blas. Por la noche, cena con show de danzas andinas.",
    },
    {
      time: "Día 7",
      title: "Valle Sagrado: Un Refugio de Amor",
      description:
        "Viajarán al Valle Sagrado de los Incas. Visitarán el colorido mercado de Pisac y el impresionante complejo arqueológico. Tras un delicioso almuerzo buffet, explorarán la fortaleza de Ollantaytambo. Pasarán la noche en un hotel con encanto en el valle, rodeados de naturaleza y paz.",
    },
    {
      time: "Día 8",
      title: "Machu Picchu: El Sueño Cumplido",
      description:
        "El día más esperado. Un viaje en tren panorámico los llevará a Aguas Calientes. Desde allí, ascenderán a Machu Picchu para un tour guiado privado. Tendrán tiempo de sobra para explorar cada rincón, sentir su energía y capturar este momento eterno juntos. Noche en Aguas Calientes.",
    },
    {
      time: "Día 9",
      title: "Amanecer en Machu Picchu y Retorno a Cusco",
      description:
        "Oportunidad de regresar a Machu Picchu para ver el amanecer (opcional) o disfrutar de una mañana relajada en el pueblo. Por la tarde, tomarán el tren de regreso a Cusco, llevando con ustedes un recuerdo imborrable.",
    },
    {
      time: "Día 10",
      title: "Rumbo a Puno: El Lago Navegable más Alto",
      description:
        "Por la mañana, tomarán un vuelo de Cusco a Juliaca. Serán trasladados a su hotel en Puno, a orillas del Lago Titicaca. Disfruten de un espectacular atardecer sobre el lago, un espectáculo de colores y reflejos que inspira romance.",
    },
    {
      time: "Día 11",
      title: "Lago Titicaca: Islas Flotantes y Cultura Viva",
      description:
        "Navegarán por las aguas azules del Titicaca para visitar las fascinantes islas flotantes de los Uros, construidas de totora. Luego, continuarán hacia la isla de Taquile, donde compartirán un almuerzo tradicional con la comunidad y aprenderán sobre sus famosos textiles. Una conexión cultural profunda y auténtica.",
    },
    {
      time: "Día 12",
      title: "Despedida: Hasta Pronto, Perú",
      description:
        "Después del desayuno, y a la hora apropiada, serán trasladados al aeropuerto de Juliaca para tomar su vuelo de regreso a Lima, desde donde podrán conectar con su vuelo internacional. Fin de una luna de miel inolvidable.",
    },
  ],

  includes: [
    "Vuelos domésticos: Lima-Arequipa, Arequipa-Cusco, Cusco-Juliaca, Juliaca-Lima.",
    "11 noches en hoteles de categoría 3-4 estrellas, seleccionados por su encanto y ambiente romántico.",
    "Todos los desayunos y las comidas especificadas en el itinerario.",
    "Cena romántica de bienvenida en Lima.",
    "Detalle especial de luna de miel en su habitación.",
    "Todos los traslados en transporte turístico privado o de primera categoría.",
    "Clase de cocina privada en Lima.",
    "Tren panorámico a Machu Picchu (ida y vuelta).",
    "Tour en bote privado o en grupo pequeño en el Lago Titicaca.",
    "Todas las entradas a los sitios mencionados en el itinerario.",
    "Guías profesionales y privados en la mayoría de los tours.",
    "Asistencia permanente 24/7 durante todo su viaje.",
  ],

  notIncludes: [
    "Vuelos internacionales hacia/desde Perú.",
    "Comidas y bebidas no especificadas en el itinerario.",
    "Seguro de viaje (altamente recomendado).",
    "Propinas para guías, conductores y personal.",
    "Gastos personales como souvenirs, lavandería, etc.",
    "Entrada opcional a Huayna Picchu o Montaña Machu Picchu (se requiere reserva anticipada).",
    "Actividades opcionales no mencionadas.",
  ],

  recommendations: [
    "Reserven con al menos 4-6 meses de antelación para asegurar los mejores hoteles y horarios.",
    "Empaquen ropa variada para diferentes climas: ligera para Lima, y abrigadora para los Andes.",
    "El protector solar, sombrero y gafas de sol son indispensables en la sierra y el altiplano.",
    "Consulten a su médico sobre el mal de altura; tomen las cosas con calma los primeros días en altitud.",
    "Dejen espacio en la maleta para las hermosas artesanías peruanas.",
    "No olviden su cámara para capturar cada momento mágico.",
    "Consideren aprender algunas frases básicas en español, ¡será un lindo detalle!",
    "Lo más importante: ¡relájense, disfruten y celebren su amor!",
  ],
}

export default function PeruCompleto10D9NPage() {
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