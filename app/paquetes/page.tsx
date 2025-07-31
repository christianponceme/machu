import type { Metadata } from "next"
import PaquetesClientPage from "./PaquetesClientPage"

export const metadata: Metadata = {
  title: "Paquetes Perú - Machupicchu Origin",
  description:
    "Descubre nuestros paquetes completos para explorar Perú: desde 3 días en Cusco hasta 15 días de gran aventura. Hoteles, comidas y tours incluidos.",
  keywords: "paquetes Perú, tours completos Cusco, paquetes Machu Picchu, viajes organizados",
  openGraph: {
    title: "Paquetes Perú - Machupicchu Origin",
    description: "Paquetes completos para explorar lo mejor de Perú con todo incluido.",
    url: "https://machupicchuorigin.com/paquetes",
  },
}

export default function PaquetesPage() {
  return <PaquetesClientPage />
}
