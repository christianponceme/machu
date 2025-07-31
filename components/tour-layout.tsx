"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, Check, X, AlertCircle } from "lucide-react"
import Link from "next/link"

interface TourData {
  title: string
  subtitle: string
  heroImage: string
  duration: string
  difficulty: string
  groupSize: string
  price: string
  rating: number
  reviews: number
  abstract: {
    title: string
    content: string
    highlights: string[]
  }
  itinerary: Array<{
    time: string
    title: string
    description: string
  }>
  includes: string[]
  notIncludes: string[]
  recommendations: string[]
}

interface TourLayoutProps {
  tourData: TourData
}

export default function TourLayout({ tourData }: TourLayoutProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={tourData.heroImage || "/placeholder.svg"}
          alt={tourData.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{tourData.title}</h1>
            <p className="text-xl md:text-2xl">{tourData.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Tour Info Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-secondary-600" />
                <span className="font-medium">{tourData.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-secondary-600" />
                <span className="font-medium">{tourData.groupSize}</span>
              </div>
              <Badge variant="outline" className="border-secondary-600 text-secondary-600">
                {tourData.difficulty}
              </Badge>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{tourData.rating}</span>
                <span className="text-gray-500">({tourData.reviews} reseñas)</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-sm text-gray-500">Desde</div>
                <div className="text-3xl font-bold text-secondary-600">{tourData.price}</div>
                <div className="text-sm text-gray-500">por persona</div>
              </div>
              <Link href="/contacto">
                <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
                  Reservar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Abstract */}
            <section id="abstracto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">{tourData.abstract.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-6">{tourData.abstract.content}</p>
                  <div>
                    <h4 className="font-semibold text-primary-600 mb-3">Destacados del Tour:</h4>
                    <ul className="space-y-2">
                      {tourData.abstract.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Itinerary */}
            <section id="itinerario">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">Itinerario Detallado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {tourData.itinerary.map((item, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-bold text-secondary-600">{item.time}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary-600 mb-2">{item.title}</h4>
                          <p className="text-gray-700">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Includes */}
            <section id="incluye">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">Qué Incluye / No Incluye</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-4 flex items-center">
                        <Check className="h-5 w-5 mr-2" />
                        Incluye
                      </h4>
                      <ul className="space-y-2">
                        {tourData.includes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Check className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-600 mb-4 flex items-center">
                        <X className="h-5 w-5 mr-2" />
                        No Incluye
                      </h4>
                      <ul className="space-y-2">
                        {tourData.notIncludes.map((item, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <X className="h-4 w-4 text-red-600 mt-1 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Price Card */}
            <section id="precio">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">Precio y Reserva</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-secondary-600 mb-2">{tourData.price}</div>
                    <div className="text-gray-500">por persona</div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duración:</span>
                      <span className="font-medium">{tourData.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Dificultad:</span>
                      <span className="font-medium">{tourData.difficulty}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Grupo:</span>
                      <span className="font-medium">{tourData.groupSize}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Link href="/contacto">
                      <Button className="w-full bg-secondary-600 hover:bg-secondary-700" size="lg">
                        Reservar Ahora
                      </Button>
                    </Link>
                    <Button
                      variant="outline"
                      className="w-full border-primary-600 text-primary-600 hover:bg-primary-50 bg-transparent"
                      onClick={() => window.open("https://wa.me/51907966198", "_blank")}
                    >
                      Consultar por WhatsApp
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-light-500 rounded-lg">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-secondary-600 mt-0.5 flex-shrink-0" />
                      <div className="text-sm">
                        <p className="font-medium text-primary-600 mb-1">Reserva con confianza</p>
                        <p className="text-gray-600">Cancelación gratuita hasta 24 horas antes del tour</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Recommendations */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-primary-600">Recomendaciones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tourData.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <AlertCircle className="h-4 w-4 text-secondary-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
