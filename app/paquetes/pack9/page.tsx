import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Salkantay Trek en 5 Días 4 Noches - La Aventura a Machu Picchu | Machupicchu Origin",
  description:
    "Embárcate en la aventura de tu vida con el Salkantay Trek de 5 días. Una ruta desafiante y espectacular que te llevará desde las faldas del nevado Salkantay hasta la majestuosa ciudadela de Machu Picchu. ¡Una experiencia inolvidable!",
  keywords: "Salkantay trek, caminata a Machu Picchu, trekking 5 días, nevado Salkantay, Laguna Humantay, aventura en Cusco",
}

const tourData = {
  title: "Salkantay Trek a Machu Picchu",
  subtitle: "La Aventura por Montañas Sagradas hacia la Ciudadela Inca",
  heroImage: "/SALKANTAY.png?height=600&width=1200",
  duration: "5 días / 4 noches",
  difficulty: "Desafiante",
  groupSize: "2-12 personas",
  price: "$780",
  rating: 4.9,
  reviews: 215,

  abstract: {
    title: "Una Ruta Épica Hacia Machu Picchu",
    content:
      "El Salkantay Trek es una de las caminatas más impresionantes del mundo y una alternativa espectacular al Camino Inca. Esta ruta de 5 días te lleva a través de paisajes increíblemente diversos, desde las gélidas alturas del Abra Salkantay a 4,630 metros, junto a un imponente glaciar, hasta descender a la exuberante vegetación del bosque nuboso. Verás lagunas de color turquesa, valles profundos y finalmente, la recompensa de llegar a la ciudad perdida de los Incas, Machu Picchu. Es el viaje perfecto para aventureros que buscan un reto físico y una conexión profunda con la naturaleza de los Andes.",
    highlights: [
      "Visita a la impresionante Laguna Humantay de color turquesa.",
      "Cruce del Abra Salkantay, el punto más alto a 4,630 m.s.n.m.",
      "Vistas espectaculares del nevado sagrado Salkantay (6,271 m).",
      "Descenso de los Andes a la selva alta (bosque nuboso).",
      "Noches en campamentos bajo un cielo estrellado.",
      "La recompensa final: un tour guiado en la maravilla de Machu Picchu.",
      "Una aventura que combina reto físico y belleza paisajística.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Cusco - Soraypampa - Laguna Humantay",
      description:
        "Partida muy temprano desde Cusco. Viajaremos en vehículo hasta Mollepata y luego a Soraypampa (3,920 m), punto de inicio de la caminata. Por la tarde, haremos una ascensión a la espectacular Laguna Humantay (4,200 m). Noche en campamento o domos en Soraypampa.",
    },
    {
      time: "Día 2",
      title: "Soraypampa - Abra Salkantay - Chaullay",
      description:
        "El día más desafiante. Iniciaremos el ascenso hacia el Abra Salkantay (4,630 m), el punto más alto del trek, con vistas imponentes del nevado. Luego, comenzaremos un largo descenso hacia el bosque nuboso hasta llegar a nuestro campamento en Chaullay (2,900 m).",
    },
    {
      time: "Día 3",
      title: "Chaullay - La Playa - Santa Teresa",
      description:
        "Una caminata más sencilla a través de la selva alta. Veremos plantaciones de café, plátano y granadilla. Llegaremos a La Playa Sahuayaco para almorzar y luego tomaremos un transporte a Santa Teresa. Tarde libre para visitar las aguas termales de Cocalmayo (opcional).",
    },
    {
      time: "Día 4",
      title: "Santa Teresa - Hidroeléctrica - Aguas Calientes",
      description:
        "Por la mañana, tendrás la opción de hacer zipline, una de las actividades de aventura más emocionantes de la zona. Luego, nos transportaremos a Hidroeléctrica, desde donde caminaremos por unas 3 horas junto a la vía del tren hasta llegar al pueblo de Aguas Calientes. Noche en hotel.",
    },
    {
      time: "Día 5",
      title: "Machu Picchu - Retorno a Cusco",
      description:
        "¡El gran final! Tomaremos uno de los primeros buses hacia Machu Picchu para disfrutar del amanecer. Tendrán un tour guiado de 2 horas por la ciudadela inca y tiempo libre para explorar. Por la tarde, regresaremos en tren desde Aguas Calientes a Ollantaytambo y luego en bus a Cusco.",
    },
  ],

  includes: [
    "Briefing informativo un día antes del trek.",
    "Transporte de Cusco al inicio de la caminata (Soraypampa).",
    "Guía profesional de montaña bilingüe.",
    "Cocinero y equipo de cocina.",
    "Arrieros y mulas (para equipo de campamento y 7kg de pertenencias personales).",
    "Alimentación durante el trek (4D, 4A, 4C).",
    "Equipo de campamento: tiendas dobles, matras (colchonetas).",
    "1 noche de hotel básico en Aguas Calientes.",
    "Ticket de entrada a Machu Picchu.",
    "Ticket de bus de Aguas Calientes a Machu Picchu (ida).",
    "Ticket de tren de Aguas Calientes a Ollantaytambo y bus a Cusco.",
    "Botiquín de primeros auxilios y balón de oxígeno.",
  ],

  notIncludes: [
    "Desayuno del primer día y almuerzo/cena del último día.",
    "Bolsa de dormir y bastones de trekking (se pueden alquilar).",
    "Seguro de viaje (obligatorio).",
    "Propinas para el guía, cocinero y arrieros.",
    "Bebidas extras y snacks.",
    "Entrada a la Montaña Huayna Picchu o Machu Picchu.",
    "Bus de bajada de Machu Picchu a Aguas Calientes.",
    "Entrada a las aguas termales de Cocalmayo.",
    "Actividades opcionales como el Zipline.",
  ],

  recommendations: [
    "Aclimatarse en Cusco por lo menos 2-3 días antes de iniciar.",
    "Tener una buena condición física es esencial.",
    "Llevar una mochila pequeña para el día (agua, snacks, cámara, etc.).",
    "Bolsa de dormir de calidad (temperaturas pueden bajar de 0°C).",
    "Botas de trekking impermeables y previamente usadas.",
    "Ropa en capas: térmica, polar, chaqueta impermeable y cortavientos.",
    "Protector solar potente, sombrero y gafas de sol.",
    "Repelente de insectos para las zonas de selva.",
    "Linterna frontal y baterías extra.",
    "Llevar efectivo en soles para gastos extra y propinas.",
  ],
}

export default function SalkantayTrek5D4NPage() {
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