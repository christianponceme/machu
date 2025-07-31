import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "IQUITOS Selva Peruana 4 días y 3 noches | Machupicchu Origin",
  description:
    "Sumérgete en el corazón del Amazonas. Vive una experiencia inolvidable de 4 días y 3 noches en un lodge en la selva de Iquitos, explorando su flora y fauna.",
  keywords: "Iquitos, selva peruana, tour amazonas, 4 días, lodge en la selva, delfines rosados, río amazonas",
}

const tourData = {
  title: "IQUITOS Selva Peruana 4 días y 3 noches",
  subtitle: "Inmersión en el Corazón del Amazonas",
  heroImage: "/iquitos-ai.png?height=600&width=1200",
  duration: "4 días / 3 noches",
  difficulty: "Fácil a Moderado",
  groupSize: "2-12 personas",
  price: "$425",
  rating: 4.7,
  reviews: 145,

  abstract: {
    title: "Una Aventura Auténtica en la Jungla",
    content:
      "Este programa de 4 días y 3 noches te llevará al corazón de la Amazonía peruana, partiendo de la ciudad de Iquitos. Te alojarás en un ecolodge rústico y confortable a orillas del río, desde donde realizarás excursiones diarias y nocturnas para descubrir la increíble biodiversidad de la selva. Navegarás por el majestuoso río Amazonas, buscarás delfines rosados, pescarás pirañas y caminarás por senderos donde podrías encontrar monos, perezosos y una infinidad de aves y plantas exóticas.",
    highlights: [
      "Navegación por el río Amazonas, el más caudaloso del mundo.",
      "Estadía de 3 noches en un lodge ecológico en plena selva.",
      "Avistamiento de delfines rosados y grises en su hábitat natural.",
      "Excursiones de caminata diurnas y nocturnas para descubrir la fauna.",
      "Pesca de pirañas y otras especies locales.",
      "Visita a una comunidad nativa para conocer su cultura y estilo de vida.",
      "Observación de monos, perezosos, aves exóticas e insectos.",
      "Guías locales expertos en la selva amazónica.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Iquitos - Río Amazonas - Lodge (Almuerzo, Cena)",
      description:
        "Te recogeremos del aeropuerto o de tu hotel en Iquitos para llevarte al puerto. Iniciaremos una navegación por el río Amazonas hasta llegar a nuestro lodge. Tras el almuerzo y un breve descanso, haremos una primera caminata de reconocimiento por la selva circundante. Por la noche, después de la cena, saldremos en una excursión nocturna para buscar caimanes y otras criaturas nocturnas.",
    },
    {
      time: "Día 2",
      title: "Exploración del Amazonas y Pesca de Pirañas (Desayuno, Almuerzo, Cena)",
      description:
        "Después del desayuno, realizaremos una excursión en bote por el río Amazonas en busca de los famosos delfines rosados. Luego, probaremos suerte con la pesca de pirañas y otros peces de la zona. Regresaremos al lodge para almorzar. Por la tarde, haremos una caminata etnobotánica donde nuestro guía nos enseñará sobre las plantas medicinales y sus usos ancestrales.",
    },
    {
      time: "Día 3",
      title: "Visita a Comunidad Nativa y Gigantes de la Selva (Desayuno, Almuerzo, Cena)",
      description:
        "Hoy visitaremos una comunidad nativa de la etnia Yagua, donde aprenderemos sobre sus costumbres, veremos sus danzas y podremos apreciar su artesanía. Por la tarde, exploraremos otra parte de la reserva para ver árboles gigantes como la Lupuna y aprender sobre el ecosistema local. Noche en el lodge.",
    },
    {
      time: "Día 4",
      title: "Observación de Aves - Retorno a Iquitos (Desayuno, Almuerzo)",
      description:
        "Nos levantaremos muy temprano para una excursión de observación de aves al amanecer, el mejor momento para ver la gran variedad de especies que habitan la zona. Regresaremos para el desayuno y tendremos tiempo libre para relajarnos en el lodge. Después del almuerzo, emprenderemos el viaje de regreso a Iquitos, donde te dejaremos en tu hotel o en el aeropuerto para tu vuelo de salida.",
    },
  ],

  includes: [
    "Traslados desde el aeropuerto u hotel en Iquitos hacia el lodge (ida y vuelta).",
    "Transporte fluvial en bote típico seguro.",
    "3 noches de alojamiento en un ecolodge con habitaciones privadas.",
    "Alimentación completa en el lodge (3 desayunos, 4 almuerzos, 3 cenas).",
    "Agua potable tratada disponible en el lodge.",
    "Guía de selva profesional bilingüe (español/inglés).",
    "Todas las excursiones descritas en el itinerario.",
    "Botas de goma para las caminatas.",
    "Botiquín de primeros auxilios.",
  ],

  notIncludes: [
    "Billetes de avión Lima - Iquitos - Lima.",
    "Consumo en el bar del lodge (bebidas alcohólicas, gaseosas).",
    "Propinas para el guía y el personal del lodge.",
    "Seguro de viaje y de salud.",
    "Gastos personales y souvenirs.",
    "Impuestos de aeropuerto.",
    "Primer desayuno y última cena.",
  ],

  recommendations: [
    "Se recomienda la vacuna contra la fiebre amarilla 10 días antes del viaje.",
    "Llevar repelente de insectos con alto contenido de DEET.",
    "Ropa ligera de algodón, pantalones largos y camisas de manga larga para protegerse de los mosquitos.",
    "Un impermeable o poncho para la lluvia.",
    "Zapatillas o botas de trekking cómodas (además de las botas de goma provistas).",
    "Linterna (preferiblemente frontal) y baterías de repuesto.",
    "Protector solar, gorra o sombrero y lentes de sol.",
    "Cámara fotográfica, binoculares y bolsas impermeables para protegerlos.",
    "Llevar DNI o Pasaporte original.",
  ],
}

export default function IquitosJunglePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour-iquitos" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}