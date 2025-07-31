import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Clock, RefreshCw, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Cancelación - Machupicchu Origin",
  description:
    "Política de cancelación y reembolsos de Machupicchu Origin. Conoce nuestras condiciones para cancelaciones y cambios de fecha.",
  keywords: "política cancelación, reembolsos, cambios fecha, condiciones cancelación",
}

export default function PoliticaCancelacionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Cancelación</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conoce nuestras políticas de cancelación, reembolsos y cambios de fecha para planificar tu viaje con
              tranquilidad.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600 flex items-center space-x-2">
                    <Clock className="h-6 w-6" />
                    <span>1. Plazos de Cancelación</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <h4 className="font-semibold text-green-800 mb-2">Más de 7 días</h4>
                      <p className="text-green-700 text-sm">Reembolso del 90%</p>
                      <p className="text-green-600 text-xs mt-1">10% gastos administrativos</p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h4 className="font-semibold text-yellow-800 mb-2">3-7 días antes</h4>
                      <p className="text-yellow-700 text-sm">Reembolso del 50%</p>
                      <p className="text-yellow-600 text-xs mt-1">50% gastos operativos</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-800 mb-2">Menos de 3 días</h4>
                      <p className="text-red-700 text-sm">Sin reembolso</p>
                      <p className="text-red-600 text-xs mt-1">Gastos ya comprometidos</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start space-x-2">
                      <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-secondary-600 font-medium">Importante:</p>
                        <p className="text-blue-700 text-sm">
                          Los plazos se calculan desde la fecha de inicio del tour, no desde la fecha de cancelación.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600 flex items-center space-x-2">
                    <RefreshCw className="h-6 w-6" />
                    <span>2. Cambios de Fecha</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Entendemos que los planes pueden cambiar. Ofrecemos flexibilidad para cambios de fecha:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>
                      <strong>Más de 7 días antes:</strong> Cambio gratuito (sujeto a disponibilidad)
                    </li>
                    <li>
                      <strong>3-7 días antes:</strong> Cambio con 25% del valor del tour
                    </li>
                    <li>
                      <strong>Menos de 3 días:</strong> Cambio con 50% del valor del tour
                    </li>
                  </ul>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">Beneficio especial:</p>
                    <p className="text-green-700 text-sm">
                      Si cambias tu fecha con más de 15 días de anticipación, el cambio es completamente gratuito.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600 flex items-center space-x-2">
                    <Shield className="h-6 w-6" />
                    <span>3. Cancelaciones por Fuerza Mayor</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    En caso de cancelaciones por circunstancias fuera de nuestro control, aplicamos políticas
                    especiales:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-secondary-600 mb-2">Condiciones Climáticas Extremas</h4>
                      <p className="text-blue-700 text-sm">
                        Reembolso completo o reprogramación sin costo adicional cuando las autoridades cierren sitios
                        por seguridad.
                      </p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <h4 className="font-semibold text-purple-800 mb-2">Emergencias de Salud</h4>
                      <p className="text-purple-700 text-sm">
                        Con certificado médico, ofrecemos reembolso del 80% o reprogramación gratuita.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                      <h4 className="font-semibold text-orange-800 mb-2">Restricciones Gubernamentales</h4>
                      <p className="text-orange-700 text-sm">
                        Reembolso completo si las autoridades prohíben el acceso a destinos turísticos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">4. Proceso de Cancelación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">Para cancelar tu reserva, sigue estos pasos:</p>
                  <ol className="list-decimal list-inside text-gray-700 space-y-2 ml-4">
                    <li>Envía un email a info@machupicchuorigin.com con tu código de reserva</li>
                    <li>Incluye el motivo de la cancelación y documentos de respaldo si aplica</li>
                    <li>Recibirás confirmación de cancelación dentro de 24 horas</li>
                    <li>Los reembolsos se procesan en 5-10 días hábiles</li>
                  </ol>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-800 font-medium">Información requerida:</p>
                    <ul className="text-gray-700 text-sm mt-2 space-y-1">
                      <li>• Código de reserva</li>
                      <li>• Nombre completo del titular</li>
                      <li>• Fecha del tour</li>
                      <li>• Motivo de cancelación</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">5. Casos Especiales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">Camino Inca</h4>
                      <p className="text-gray-700 text-sm">
                        Debido a permisos limitados y no transferibles, las cancelaciones del Camino Inca tienen
                        condiciones especiales. Consulta al momento de la reserva.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">Tours Privados</h4>
                      <p className="text-gray-700 text-sm">
                        Los tours privados tienen mayor flexibilidad. Cambios de fecha gratuitos hasta 48 horas antes
                        del tour.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-600 mb-2">Paquetes Multi-día</h4>
                      <p className="text-gray-700 text-sm">
                        Para paquetes de varios días, la política se aplica según la fecha de inicio del primer
                        servicio.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">6. Contacto para Cancelaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Para cancelaciones o cambios, contáctanos inmediatamente:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Email:</strong> info@machupicchuorigin.com
                      </p>
                      <p>
                        <strong>WhatsApp:</strong> +51 984 123 456
                      </p>
                      <p>
                        <strong>Teléfono:</strong> +51 84 231 789
                      </p>
                    </div>
                    <div className="space-y-2 text-gray-700">
                      <p>
                        <strong>Horario de atención:</strong>
                      </p>
                      <p>Lunes a Domingo: 7:00 AM - 10:00 PM</p>
                      <p>
                        <strong>Emergencias:</strong> 24/7
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Última actualización: Enero 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
