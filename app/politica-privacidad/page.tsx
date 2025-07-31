import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Política de Privacidad - Machupicchu Origin",
  description:
    "Política de privacidad de Machupicchu Origin. Conoce cómo protegemos y utilizamos tu información personal.",
  keywords: "política privacidad, protección datos, información personal",
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gradient-to-r from-primary-600 to-primary-800">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Política de Privacidad</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Tu privacidad es importante para nosotros. Conoce cómo protegemos y utilizamos tu información personal.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">1. Información que Recopilamos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Recopilamos información personal que nos proporcionas voluntariamente cuando:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Realizas una reserva o consulta</li>
                    <li>Te suscribes a nuestro boletín</li>
                    <li>Nos contactas por email, teléfono o WhatsApp</li>
                    <li>Participas en nuestros tours</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Esta información puede incluir: nombre, email, teléfono, nacionalidad, fecha de nacimiento,
                    preferencias dietéticas y información médica relevante para los tours.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">2. Cómo Utilizamos tu Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">Utilizamos tu información personal para:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Procesar y confirmar tus reservas</li>
                    <li>Comunicarnos contigo sobre tu tour</li>
                    <li>Proporcionar servicios personalizados</li>
                    <li>Enviar información relevante sobre nuestros servicios</li>
                    <li>Mejorar nuestros servicios y experiencia del cliente</li>
                    <li>Cumplir con requisitos legales y de seguridad</li>
                    <li>Publicar contenido para las RR.SS, con tu permiso</li>                  
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">3. Compartir Información</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    No vendemos, alquilamos o compartimos tu información personal con terceros, excepto en los
                    siguientes casos:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Con proveedores de servicios necesarios para tu tour (hoteles, transporte, restaurantes)</li>
                    <li>Con autoridades cuando sea requerido por ley</li>
                    <li>En caso de emergencia médica durante los tours</li>
                    <li>Con tu consentimiento explícito</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">4. Protección de Datos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Implementamos medidas de seguridad apropiadas para proteger tu información personal:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Encriptación de datos sensibles</li>
                    <li>Acceso restringido a información personal</li>
                    <li>Capacitación regular de nuestro personal</li>
                    <li>Sistemas de backup seguros</li>
                    <li>Revisiones periódicas de seguridad</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">5. Tus Derechos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">Tienes derecho a:</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Acceder a tu información personal que tenemos</li>
                    <li>Corregir información inexacta o incompleta</li>
                    <li>Solicitar la eliminación de tu información</li>
                    <li>Oponerte al procesamiento de tu información</li>
                    <li>Retirar tu consentimiento en cualquier momento</li>
                    <li>Recibir una copia de tu información en formato portable</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Para ejercer estos derechos, contáctanos en info@machupicchuorigin.com
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">6. Cookies y Tecnologías Similares</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                    <li>Cookies esenciales para el funcionamiento del sitio</li>
                    <li>Cookies de análisis para mejorar nuestros servicios</li>
                    <li>Cookies de personalización para recordar tus preferencias</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed">
                    Puedes controlar las cookies a través de la configuración de tu navegador.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-600">7. Contacto</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Si tienes preguntas sobre esta política de privacidad, contáctanos:
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
