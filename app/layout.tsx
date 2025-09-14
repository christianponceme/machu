import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ScrollToTop from "@/components/scroll-to-top"
import WhatsAppButton from "@/components/whatsapp-button";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Machupicchu Origin - Tours a Machu Picchu y Cusco",
  description:
    "Descubre Machu Picchu con los mejores tours y paquetes. Agencia especializada en Camino Inca, Valle Sagrado y experiencias auténticas en Cusco, Perú.",
  keywords: "Machu Picchu, tours Cusco, Camino Inca, Valle Sagrado, viajes Perú, agencia turismo",
  authors: [{ name: "Machupicchu Origin" }],
  creator: "Machupicchu Origin",
  publisher: "Machupicchu Origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://machupicchuorigin.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Machupicchu Origin - Tours a Machu Picchu y Cusco",
    description: "Descubre Machu Picchu con los mejores tours y paquetes especializados.",
    url: "https://machupicchuorigin.com",
    siteName: "Machupicchu Origin",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Machu Picchu Tours",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Machupicchu Origin - Tours a Machu Picchu",
    description: "Descubre Machu Picchu con los mejores tours especializados.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'chrisponce.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ScrollToTop />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  )
}
