import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RecommendedPackages from "@/components/recommended-packages"

export const metadata: Metadata = {
  title: "Las Maravillas de Perú 10 Días 9 Noches",
  description:
    "Un viaje inolvidable de 10 días por Perú, explorando Lima, el Oasis de Huacachina, Cusco, el Valle Sagrado, Machu Picchu, Montaña de Colores, Laguna Humantay y el Lago Titicaca. Nueve noches de pura aventura.",
  keywords: "paquete Peru 10 días, tour Peru 10 dias, Lima, Huacachina, Cusco, Machu Picchu 10 días, Montaña de Colores, Laguna Humantay, Lago Titicaca, Las Maravillas de Perú",
  openGraph: {
    title: "Las Maravillas de Perú 10 Días 9 Noches - Machupicchu Origin",
    description: "Paquete completo de 10 días y 9 noches para descubrir las maravillas de Perú: Costa, Desierto y Sierra.",
    url: "https://machupicchuOrigin.com/paquetes/las-maravillas-de-peru-10d9n",
  },
}

const packageData = {
  title: "Las Maravillas de Perú",
  subtitle: "Varios dias recorriendo la Costa y los Andes",
  heroImage: "/10DIAS.jpg?height=600&width=800",
  duration: "10 días / 9 noches",
  difficulty: "Moderado",
  groupSize: "2-16 personas",
  price: "$1120",
  rating: 5,
  reviews: 320,
  abstract: {
    title: "Una Inmersión Profunda en la Cultura y Paisajes de Perú",
    content:
      "Este paquete de 10 días y 9 noches está diseñado para ofrecerte una experiencia peruana completa, llevándote desde la moderna Lima, a través del desértico Oasis de Huacachina, hasta el corazón del Imperio Inca en Cusco y las místicas aguas del Lago Titicaca. Cada día es una aventura, descubriendo paisajes sobrecogedores, historia milenaria y culturas vivas que te dejarán sin aliento. Un viaje que conecta los puntos más emblemáticos del sur de Perú, garantizando confort y una organización impecable.",
    highlights: [
      "Aventura en buggies y sandboard en el Oasis de Huacachina.",
      "Excursión a las Islas Ballestas para avistar fauna marina.",
      "City tour en Lima y Cusco, las capitales histórica y arqueológica.",
      "Visita al Valle Sagrado de los Incas: Chinchero, Maras y Moray.",
      "Día completo en la maravilla mundial: Machu Picchu con guiado privado.",
      "Trekking a la espectacular Montaña de Colores.",
      "Caminata a la prístina Laguna Humantay.",
      "Recorrido por la Ruta del Sol y navegación en el Lago Titicaca.",
      "9 noches de alojamiento, desayunos y almuerzos seleccionados.",
    ],
  },
  itinerary: [
    {
      time: "Día 1",
      title: "Llegada a Lima",
      description:
        "¡Bienvenida a Perú! A tu llegada al aeropuerto de Lima, te estaremos esperando con nuestra movilidad privada para llevarte a tu hotel en Miraflores, un distrito turístico y seguro, famoso por su malecón frente al mar, parques y excelentes restaurantes. Noche de hotel en Lima.",
    },
    {
      time: "Día 2",
      title: "Oasis Huacachina e Islas Ballestas",
      description:
        "Comenzamos temprano (recojo 04:30 am). Viajaremos a Paracas para una excursión en lancha a las Islas Ballestas, donde observarás lobos marinos, pingüinos y aves. Continuamos hacia Ica para una degustación de vinos y luego al Oasis de Huacachina para un emocionante tour en buggies y sandboarding en las dunas. Noche de hotel en Ica.",
    },
    {
      time: "Día 3",
      title: "City Tour en Lima y Vuelo a Cusco",
      description:
        "Iniciaremos un city tour por Lima, visitando el Parque del Amor en Miraflores y el centro histórico con su Plaza Mayor y catacumbas. Después del tour, te trasladaremos al aeropuerto para tu vuelo a Cusco. A tu llegada, te llevaremos al hotel. Este día es clave para la aclimatación a la altitud. Noche de hotel en Cusco.",
    },
    {
      time: "Día 4",
      title: "Valle Sagrado de los Incas",
      description:
        "Excursión de día completo (06:00 - 19:00). Visitaremos el mercado de Chinchero, las salineras de Maras y las terrazas de Moray. Disfrutaremos de un almuerzo en el corazón del valle, en Urubamba. Luego exploraremos la fortaleza de Ollantaytambo. Por la tarde, tomaremos el tren a Machu Picchu Pueblo (Aguas Calientes). Noche de hotel en Machu Picchu.",
    },
    {
      time: "Día 5",
      title: "Machu Picchu",
      description:
        "El gran día. Abordaremos el bus hacia la ciudadela de Machu Picchu para una visita guiada privada de 3 horas, explorando cada rincón de esta maravilla. Después, retornaremos a Aguas Calientes para tomar el tren de regreso. Te esperaremos en la estación para trasladarte a tu hotel en Cusco. Noche de hotel en Cusco.",
    },
    {
      time: "Día 6",
      title: "Montaña de Colores",
      description:
        "Recojo muy temprano (04:00 am). Haremos una parada en Cusipata para un desayuno buffet. La caminata hacia la cima dura aproximadamente 2 horas. Al llegar, serás recompensado con los maravillosos colores de la montaña. Tras las fotos, almorzaremos en Cusipata y regresaremos a Cusco alrededor de las 17:30. Noche de hotel en Cusco.",
    },
    {
      time: "Día 7",
      title: "Laguna Humantay",
      description:
        "Otro día de madrugada (recojo 04:00 am). Desayunaremos en Mollepata y luego iniciaremos la caminata de 1.5 horas desde Soraypampa hasta la hermosa laguna. Existe la opción de alquilar caballos. El retorno a Cusco será aproximadamente a las 17:30. Noche de hotel en Cusco.",
    },
    {
      time: "Día 8",
      title: "Ruta del Sol: De Cusco a Puno",
      description:
        "Viaje en bus turístico hacia Puno (salida 06:00 am). La 'Ruta del Sol' incluye paradas en la 'Capilla Sixtina de América' en Andahuaylillas y el santuario inca de Raqchi. Almorzaremos en ruta. Al llegar a Puno, te trasladaremos a tu hotel. Noche de hotel en Puno.",
    },
    {
      time: "Día 9",
      title: "Lago Titicaca: Islas Uros y Taquile",
      description:
        "Recojo del hotel (07:00 am). Navegaremos por el lago más alto del mundo. Visitaremos las islas flotantes de los Uros y luego conoceremos la cultura y los textiles de la isla Taquile. Disfrutaremos de un almuerzo en la isla. Regreso al hotel por la tarde. Noche de hotel en Puno.",
    },
    {
      time: "Día 10",
      title: "Salida del Perú",
      description:
        "Último día en Perú. Pasaremos por tu hotel en Puno para trasladarte al aeropuerto de Juliaca (a 1 hora) para tu vuelo de regreso a Lima, donde podrás conectar con tu salida internacional. Fin de nuestros servicios. ¡Hasta una próxima aventura!",
    },
  ],
  includes: [
    "02 noches de hotel en Lima",
    "04 noches de hotel en Cusco",
    "01 noche de hotel en Machu Picchu Pueblo",
    "02 noches de hotel en Puno",
    "Transporte privado del aeropuerto (ida y retorno)",
    "Traslados a todos los lugares a visitar",
    "Tren y bus turístico a Machu Picchu (ida y retorno)",
    "Paseo en bote en Islas Ballestas y Lago Titicaca",
    "Tour en buggies en el desierto de Huacachina",
    "Guiado privado en Machu Picchu y compartido en los demás tours",
    "Entradas para todos los tours mencionados",
    "09 Desayunos y 05 Almuerzos",
  ],
  notIncludes: [
    "Vuelos internacionales y domésticos (Lima-Cusco, Juliaca-Lima)",
    "Alimentos no mencionados en el programa",
    "Bebidas en los almuerzos y cenas",
    "Propinas para guías y conductores",
    "Gastos personales y souvenirs",
    "Seguro de viaje (altamente recomendado)",
  ],
  recommendations: [
    "Reservar vuelos con anticipación para obtener mejores precios.",
    "Empacar ropa en capas para climas variados: ligero para la costa, abrigador para la sierra.",
    "Llevar calzado de trekking cómodo, preferiblemente impermeable.",
    "Utilizar protector solar de alto factor, sombrero y gafas de sol, la radiación es alta en altitud.",
    "Llevar repelente de insectos, especialmente para Machu Picchu.",
    "Consultar con un médico sobre medicamentos para el mal de altura (aclimatación).",
    "Tener efectivo en moneda local (Soles) para compras pequeñas y propinas.",
  ],
}

export default function MaravillasDePeru10D9NPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={packageData} />
        <RecommendedPackages currentPackageId={1} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}