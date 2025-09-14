import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import TourLayout from "@/components/tour-layout"
import RelatedTours from "@/components/related-tours"

export const metadata: Metadata = {
  title: "LIMA Lineas de Nazca y Oasis Huacachina 2 días - Aventura Alternativa | Machupicchu Origin",
  description:
    "Escápate de Lima por 2 días y vive una aventura inolvidable. Sobrevuela las enigmáticas Líneas de Nazca, deslízate en sandboard por las dunas de Huacachina y explora la vida marina de las Islas Ballestas.",
  keywords: "Lineas de Nazca, Oasis Huacachina, tour desde Lima, Islas Ballestas, sandboard, buggies, tour 2 días",
}

const tourData = {
  title: "LIMA: Líneas de Nazca y Oasis Huacachina",
  subtitle: "Misterio, Desierto y Aventura en 2 Días",
  heroImage: "/lineasdenazca.webp?height=600&width=1200",
  duration: "2 días / 1 noche",
  difficulty: "Fácil",
  groupSize: "2-10 personas",
  price: "$425",
  rating: 4.9,
  reviews: 178,

  abstract: {
    title: "Resumen de la Aventura",
    content:
      "Este tour de 2 días es la escapada perfecta desde Lima para sumergirte en los misterios y la belleza de la costa sur del Perú. El primer día, sentirás la adrenalina en las inmensas dunas del Oasis de Huacachina con un tour de buggies y sandboard. El segundo día, te elevarás sobre el desierto para presenciar las enigmáticas Líneas de Nazca, geoglifos ancestrales que han desconcertado a los historiadores durante décadas. Es una combinación perfecta de aventura, cultura y paisajes asombrosos.",
    highlights: [
      "Sobrevuelo de 35 minutos sobre las misteriosas Líneas de Nazca.",
      "Tour en buggies areneros a toda velocidad por el desierto de Huacachina.",
      "Práctica de sandboard en las dunas más altas de Sudamérica.",
      "Visita al único oasis natural del desierto en América: Huacachina.",
      "Transporte turístico privado y cómodo desde Lima.",
      "Noche de alojamiento en la ciudad de Nazca.",
    ],
  },

  itinerary: [
    {
      time: "Día 1",
      title: "Lima - Ica (Oasis Huacachina) - Nazca",
      description:
        "Te recogeremos muy temprano de tu hotel en Lima. Viajaremos en nuestro transporte turístico por la carretera Panamericana Sur hasta la ciudad de Ica. Después de almorzar, nos dirigiremos al Oasis de Huacachina. Aquí, subiremos a los buggies areneros para un recorrido lleno de adrenalina por las dunas, con paradas para practicar sandboard. Al atardecer, continuaremos nuestro viaje hacia la ciudad de Nazca, donde pasaremos la noche en un hotel.",
    },
    {
      time: "Día 2",
      title: "Sobrevuelo Líneas de Nazca - Retorno a Lima",
      description:
        "Después del desayuno, nos trasladaremos al aeródromo María Reiche. Tras los procedimientos de seguridad, abordarás una avioneta para un inolvidable sobrevuelo de 35 minutos sobre las famosas Líneas de Nazca, observando figuras como el colibrí, el mono y la araña. Al finalizar el vuelo, emprenderemos el viaje de regreso a Lima. Te dejaremos en la comodidad de tu hotel al anochecer, concluyendo nuestra aventura.",
    },
  ],

  includes: [
    "Recojo y traslado de regreso a tu hotel en Lima.",
    "Transporte turístico privado (Lima - Ica - Nazca - Lima).",
    "Tour en buggies y sandboard en el Oasis de Huacachina.",
    "Sobrevuelo a las Líneas de Nazca (vuelo de 35 min aprox.).",
    "1 noche de hotel en Nazca (habitación doble o matrimonial).",
    "Guía/conductor profesional.",
    "Asistencia permanente.",
  ],

  notIncludes: [
    "Alimentación (desayuno, almuerzos, cenas).",
    "Impuesto de sobrevuelo en el aeródromo de Nazca (aprox. $10, pago en persona).",
    "Bebidas y snacks.",
    "Propinas para el guía y personal.",
    "Gastos personales.",
  ],

  recommendations: [
    "Llevar pasaporte original (obligatorio para el sobrevuelo).",
    "Usar ropa ligera y cómoda para el día y una chaqueta para la noche/mañana.",
    "Llevar gorra, lentes de sol y protector solar.",
    "Usar zapatillas o zapatos cerrados para las actividades.",
    "Llevar una cámara para capturar los increíbles paisajes.",
    "Dinero en efectivo (soles) para impuestos, comidas y compras.",
    "Considerar tomar una pastilla para el mareo antes del vuelo si eres sensible.",
  ],
}

export default function NazcaHuacachinaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <TourLayout tourData={tourData} />
        <RelatedTours currentTour="tour4" />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}