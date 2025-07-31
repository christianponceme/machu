import type { Metadata } from "next"
import PreguntasFrecuentesClient from "./PreguntasFrecuentesClient"

export const metadata: Metadata = {
  title: "Preguntas Frecuentes - Machupicchu Origin",
  description:
    "Respuestas a las preguntas más frecuentes sobre tours a Machu Picchu, reservas, pagos y recomendaciones de viaje.",
  keywords: "preguntas frecuentes, FAQ, Machu Picchu, tours, reservas, información viaje",
}

export default function PreguntasFrecuentesPage() {
  return <PreguntasFrecuentesClient />
}
