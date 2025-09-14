import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "Tour Puno - 2 Días | Machupicchu Origin",
  description:
    "Explora el Lago Titicaca, el lago navegable más alto del mundo. Visita las islas flotantes de los Uros y la cultural Isla Taquile en un tour de 2 días desde Puno.",
  keywords: "Tour Puno, Lago Titicaca, Islas Uros, Isla Taquile, Sillustani, tour 2 días, Puno Perú",
}

const tourData = {
  title: "Tour Puno 2 Días",
  subtitle: "Lago Titicaca, Uros y Taquile",
  heroImage: "/hero-islauros.webp?height=600&width=1200",
  duration: "2 días / 1 noche",
  difficulty: "Fácil",
  groupSize: "2-15 personas",
  price: "$150",
  rating: 4.8,
  reviews: 165,

  abstract: {
    title: "Resumen del Tour",
    content:
      "Sumérgete en la magia del Altiplano con este tour de 2 días por Puno y el Lago Titicaca. Navegarás por las aguas azules del lago navegable más alto del mundo para descubrir el fascinante estilo de vida de los Uros en sus islas flotantes de totora. Al día siguiente, explorarás la Isla Taquile, famosa por su arte textil declarado Patrimonio de la Humanidad. Es una experiencia cultural única, llena de paisajes impresionantes y tradiciones ancestrales que perduran en el tiempo.",
    highlights: [
      "Navegación por el legendario Lago Titicaca.",
      "Visita a las singulares Islas Flotantes de los Uros.",
      "Conexión con la cultura y textiles de la Isla Taquile.",
      "Almuerzo tradicional con vistas panorámicas en Taquile.",
      "Noche en un cómodo hotel en la ciudad de Puno.",
      "Guía local experto en la cultura del Altiplano.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Puno - Islas de los Uros - Isla Taquile",
      description:
        "Te recogeremos de tu hotel en Puno por la mañana y nos dirigiremos al puerto. Abordaremos nuestra lancha para iniciar la travesía hacia las Islas Flotantes de los Uros. Aprenderás cómo construyen sus islas y casas con totora. Luego, continuaremos el viaje a la Isla Taquile. Disfrutarás de una caminata y un delicioso almuerzo tradicional. Por la tarde, regresaremos a Puno para trasladarte a tu hotel.",
    },
    {
      time: "Día 2",
      title: "Día Libre o Tour Opcional / Traslado de Salida",
      description:
        "Después del desayuno en el hotel, tendrás la mañana libre para explorar la ciudad de Puno, visitar su catedral o el mercado local. A la hora acordada, te recogeremos de tu hotel para llevarte al aeropuerto de Juliaca o al terminal de buses para tu próximo destino, concluyendo nuestros servicios.",
    },
  ],

  includes: [
    "Recojo de tu hotel en Puno (zona céntrica).",
    "Traslados hotel - puerto - hotel.",
    "Tour en lancha compartida por el Lago Titicaca.",
    "Guía profesional bilingüe (español/inglés).",
    "Entradas a las Islas Uros y Taquile.",
    "Almuerzo típico en la Isla Taquile (Día 1).",
    "1 noche de hotel 3 estrellas en Puno.",
    "1 desayuno en el hotel.",
    "Traslado de salida al aeropuerto o terminal de buses.",
  ],

  notIncludes: [
    "Pasajes de avión o bus hacia/desde Puno.",
    "Cena del primer día y almuerzo del segundo día.",
    "Propinas para el guía y personal.",
    "Gastos personales y souvenirs.",
    "Bebidas durante las comidas.",
    "Paseo opcional en balsa de totora en los Uros (aprox. S/10).",
  ],

  recommendations: [
    "Llevar pasaporte o documento de identidad original.",
    "Aclimatarse a la altitud de Puno (3,827 m) al menos un día antes.",
    "Usar abundante protector solar, gorra y lentes de sol.",
    "Vestir en capas; ropa abrigadora para las mañanas/noches y ligera para el día.",
    "Usar zapatos cómodos para caminar.",
    "Llevar cámara fotográfica para capturar los paisajes.",
    "Tener dinero en efectivo (Soles peruanos) para compras y propinas.",
  ],
}

export default function TourPuno2DiasPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour-puno" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}