import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Calendar, User, Clock, Eye, ArrowLeft, Share2, Utensils } from "lucide-react"
import Link from "next/link"
import { Ready } from "@/components/ready"

export const metadata: Metadata = {
  title: "Gastronomía Cusqueña: 10 Platos que Debes Probar",
  description:
    "Embárcate en un viaje culinario por Cusco y descubre los sabores ancestrales y fusiones modernas que hacen de su gastronomía una de las mejores de Perú.",
  keywords: "gastronomía cusqueña, comida típica de Cusco, platos de Cusco, Cuy al horno, Chiri Uchu, Lomo Saltado, Trucha Frita, Sopa de Quinua",
  openGraph: {
    title: "Gastronomía Cusqueña: 10 Platos que Debes Probar para una Experiencia Completa",
    description: "Una guía esencial de los platos más emblemáticos de la cocina cusqueña, desde sus raíces incas hasta sus influencias modernas.",
    url: "https://machupicchuorigin.com/blog/gastronomia-cusquena-platos-probar",
  },
}

export default function GastronomiaCusquena() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-primary-600">
                Inicio
              </Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary-600">
                Blog
              </Link>
              <span>/</span>
              <span className="text-primary-600">Gastronomía Cusqueña: Platos que Debes Probar</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <Link href="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al Blog
              </Link>
              
              <h1 className="text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                Gastronomía Cusqueña: 10 Platos que Debes Probar para una Experiencia Completa
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>22 Diciembre 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Marjorie Ponce</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>11 min de lectura</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>980 vistas</span>
                </div>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12">
              <img
                src="/blog6-comida.webp"
                alt="Mesa con varios platos típicos de la gastronomía cusqueña"
                className="w-full h-100 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                La cocina cusqueña es un festín de sabores que fusiona ingredientes andinos milenarios con técnicas españolas.
              </p>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-8 font-medium">
                Viajar a Cusco no es solo una aventura para los ojos, sino también para el paladar. La gastronomía cusqueña es una de las más ricas y variadas de Perú, un reflejo de su historia, su geografía y la sabiduría de sus ancestros. Desde platos que se remontan a la época inca hasta fusiones contemporáneas, cada bocado cuenta una historia. Aquí te presentamos 10 platos que son una parada obligatoria en tu ruta culinaria por el ombligo del mundo.
              </p>

              <h2 className="text-3xl font-bold text-primary-600 mt-12 mb-6 flex items-center"><Utensils className="mr-3" /> Platos Emblemáticos de la Cocina Cusqueña</h2>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">1. Chiri Uchu</h3>
              <p className="mb-6">
                Considerado el plato bandera de Cusco, el Chiri Uchu (que significa "ají frío" en quechua) es un festín servido a temperatura ambiente que se consume tradicionalmente durante las festividades del Corpus Christi. Es una explosión de sabores que combina carnes como cuy al horno, gallina sancochada, charqui (carne seca) y chorizo, con acompañamientos como algas, hueveras de pescado, maíz tostado, queso y una torreja de maíz. Probarlo es una experiencia cultural en sí misma.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">2. Cuy al Horno</h3>
              <p className="mb-6">
                Un plato que puede causar sorpresa a los visitantes pero que es un manjar en los Andes desde tiempos preincaicos. El cuy (conejillo de indias) se adereza con hierbas locales como el huacatay y especias, para luego ser horneado lentamente hasta que su piel queda crujiente y su carne tierna. Se suele servir entero con papas doradas y una ensalada fresca. Es una fuente rica en proteínas y un plato fundamental en celebraciones importantes.
              </p>

              <div className="my-8">
                <img src="/cuy.webp" alt="Plato de Cuy al Horno servido con papas y ensalada" className="w-full rounded-lg shadow-md" />
                <p className="text-sm text-center mt-2 text-gray-500">El Cuy al Horno, crujiente por fuera y tierno por dentro, es un clásico de las celebraciones andinas.</p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">3. Lomo Saltado</h3>
              <p className="mb-6">
                Aunque es un plato nacional, el Lomo Saltado en Cusco adquiere un toque especial. Este plato es el resultado perfecto de la fusión chino-peruana (chifa). Trozos jugosos de lomo de res se saltean a fuego alto en un wok con cebolla roja, tomate, ají amarillo y sillao (salsa de soja). La magia culmina al servirlo con papas fritas crujientes y arroz blanco. En Cusco, a menudo se prepara con carne de alpaca, ofreciendo una deliciosa variante local.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">4. Sopa de Quinua</h3>
              <p className="mb-6">
                Perfecta para aclimatarse a la altitud y combatir el frío de las noches cusqueñas. Esta sopa es nutritiva, reconfortante y deliciosa. Se prepara a base de quinua, el "grano de oro de los incas", cocida lentamente con verduras picadas como apio, zanahoria y papas, y a menudo un trozo de carne para darle más sustancia. Es un plato ligero pero lleno de energía.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">5. Trucha Frita</h3>
              <p className="mb-6">
                Gracias a los ríos y lagunas de los Andes, la trucha es un pescado fresco y abundante en la región. La preparación más popular es simple pero exquisita: la trucha se sazona, se empana ligeramente en harina y se fríe hasta obtener una textura crujiente por fuera y jugosa por dentro. Se acompaña con papas, ensalada y, a veces, arroz. Es una opción fresca y ligera que no te puedes perder.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">6. Adobo de Cerdo</h3>
              <p className="mb-6">
                Este es el desayuno dominical por excelencia para muchos cusqueños. El adobo es un guiso sustancioso de carne de cerdo marinada durante horas en chicha de jora (una bebida de maíz fermentado), ají panca, ajo y comino. La cocción lenta hace que la carne sea increíblemente tierna y el caldo espeso y lleno de sabor. Se sirve caliente con pan cusqueño, ideal para "sopear" y disfrutar cada gota.
              </p>

              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">7. Chairo</h3>
              <p className="mb-6">
                Otra sopa andina potente y llena de historia. El Chairo es una sopa espesa y consistente, diseñada para dar energía a los campesinos durante sus largas jornadas de trabajo. Sus ingredientes principales son el chuño (papa deshidratada), carne de cordero o res, papas, habas, zanahorias y trigo. Su sabor es profundo y es un verdadero abrazo al estómago en un día frío.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">8. Kapchi de Setas</h3>
              <p className="mb-6">
                Un plato vegetariano que destaca la riqueza de los productos del Valle Sagrado. El Kapchi es un guiso cremoso a base de habas, papas, leche, queso fresco y huevo, sazonado con hierbas aromáticas. En temporada de lluvias (de enero a marzo), se le añaden setas silvestres, lo que le da un sabor terroso y único. Es una opción deliciosa y reconfortante.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">9. Olluquito con Charqui</h3>
              <p className="mb-6">
                Un guiso netamente andino que combina dos ingredientes milenarios: el olluco, un tubérculo de textura suave y color vibrante, y el charqui, carne de llama o alpaca deshidratada y salada. El olluco se pica en tiras finas y se cocina con el charqui deshilachado, creando un plato sabroso y de gran valor nutricional. Es un sabor que te transporta directamente a los Andes.
              </p>
              
              <h3 className="text-2xl font-semibold text-primary-600 mt-8 mb-4">10. Pepián de Cuy</h3>
              <p className="mb-6">
                Una preparación diferente y más elaborada que el cuy al horno. En el pepián, el cuy se guisa en una salsa espesa hecha a base de maní molido, ajíes y especias. El resultado es una carne suave impregnada de una salsa cremosa y llena de sabor. Se sirve con arroz y papas, y demuestra la versatilidad de este ingrediente andino.
              </p>
              
              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 my-10 rounded-r-lg">
                <h4 className="font-bold text-xl text-primary-700 mb-3">Consejo del Viajero</h4>
                <p className="text-primary-800">
                  No te limites a los restaurantes turísticos. Anímate a explorar los mercados locales como el Mercado de San Pedro o las "picanterías" tradicionales. Allí encontrarás los sabores más auténticos de la cocina cusqueña, servidos en porciones generosas y a precios muy asequibles. ¡El verdadero sabor de Cusco a menudo se esconde en los lugares más humildes!
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-primary-600 mt-12 mb-4">Conclusión: Un Viaje de Sabores</h3>
              <p className="mb-8">
                La gastronomía de Cusco es un pilar fundamental de su identidad cultural. Cada plato es una invitación a explorar la historia, la tierra y el corazón de los Andes. Al planificar tu viaje a Machu Picchu, asegúrate de dejar tiempo y espacio para degustar estas maravillas culinarias. Tu aventura no estará completa sin haber saboreado Cusco.
              </p>

              <Ready />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}