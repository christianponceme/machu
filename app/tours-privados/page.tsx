import type { Metadata } from "next"
import ToursPrivadosClient from "./ToursPrivadosClient"

export const metadata: Metadata = {
  title: "Tours Privados VIP - Machupicchu Origin",
  description:
    "Experiencias exclusivas y personalizadas con guías privados, transporte exclusivo y atención premium. Tours privados a Machu Picchu y Cusco.",
  keywords: "tours privados Cusco, Machu Picchu VIP, guía privado, tours exclusivos, experiencia premium",
  openGraph: {
    title: "Tours Privados VIP - Machupicchu Origin",
    description: "Experiencias exclusivas y personalizadas con guías privados y atención premium.",
    url: "https://machupicchuorigin.com/tours-privados",
  },
}

export default function ToursPrivadosPage() {
  return <ToursPrivadosClient />
}
