import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Términos y Condiciones - Machupicchu Origin",
  description:
    "Términos y condiciones de servicio de Machupicchu Origin. Conoce nuestras políticas de reserva, cancelación y condiciones generales.",
  keywords: "términos condiciones, políticas reserva, condiciones servicio",
}

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Términos y Condiciones</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Conoce nuestras condiciones de servicio y políticas para garantizar una experiencia transparente y segura.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">1. Condiciones Generales</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Al contratar nuestros servicios, usted acepta estos términos y condiciones. Machupicchu Origin se
                    reserva el derecho de modificar estos términos en cualquier momento, notificando a los clientes con
                    anticipación razonable.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Todos nuestros tours están sujetos a disponibilidad y condiciones climáticas. Nos comprometemos a
                    brindar servicios de calidad con guías certificados y equipos de seguridad apropiados.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">2. Reservas y Pagos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Reserva:</strong> Para confirmar su reserva se requiere un depósito del 80% del valor total
                    del tour o paquete. El saldo restante debe ser pagado antes del inicio del tour.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Métodos de pago:</strong> Aceptamos pagos en efectivo (soles o dólares), transferencias
                    bancarias, PayPal y principales tarjetas de crédito.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Confirmación:</strong> Todas las reservas serán confirmadas por escrito vía email con los
                    detalles completos del tour.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">3. Política de Cancelación</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cancelación por el cliente:</strong>
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Más de 7 días antes: Reembolso del 90% (10% gastos administrativos)</li>
                    <li>3-7 días antes: Reembolso del 50%</li>
                    <li>Menos de 3 días: No hay reembolso</li>
                    <li>Consulta para mayor información</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Cancelación por condiciones climáticas:</strong> Reembolso completo o reprogramación sin
                    costo adicional.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">4. Responsabilidades</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Del cliente:</strong> Llegar puntualmente, seguir las instrucciones del guía, llevar
                    documentación requerida y equipo recomendado.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>De Machupicchu Origin:</strong> Proporcionar guías certificados, transporte seguro, primeros
                    auxilios básicos y cumplir con el itinerario establecido.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Limitación de responsabilidad:</strong> No nos hacemos responsables por pérdidas personales,
                    accidentes por negligencia del cliente o eventos fuera de nuestro control.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">5. Requisitos y Recomendaciones</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Documentación:</strong> Pasaporte original obligatorio para todos los tours. Estudiantes
                    deben presentar carnet universitario vigente.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Condición física:</strong> Algunos tours requieren condición física moderada. Consulte con
                    nuestros asesores si tiene dudas sobre su capacidad.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Seguro de viaje:</strong> Altamente recomendado para todos los tours, especialmente
                    trekkings y actividades de aventura.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">6. Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Para consultas sobre estos términos y condiciones, contáctenos:
                  </p>
                  <div className="mt-4 space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong> info@machupicchuorigin.com
                    </p>
                    <p>
                      <strong>Teléfono:</strong> +51 907 966 198
                    </p>
                    <p>
                      <strong>Dirección:</strong> Calle 28 de julio K-8, Cusco, Perú
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Última actualización: Agosto 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
