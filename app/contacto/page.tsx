"use client"
import Link from "next/link"
import type React from "react"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, Clock, Send, Calendar, Users } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfonos",
    details: ["+51 907 966 198", "+51 942 238 421 "],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@machupicchuorigin.com", "ventas@machupicchuorigin.com"],
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Dom: 7:00 AM - 10:00 PM", "Atención 24/7 para emergencias"],
  },
]

const countries = [
  { code: "+93", flag: "🇦🇫", name: "Afganistán" },
  { code: "+355", flag: "🇦🇱", name: "Albania" },
  { code: "+49", flag: "🇩🇪", name: "Alemania" },
  { code: "+376", flag: "🇦🇩", name: "Andorra" },
  { code: "+244", flag: "🇦🇴", name: "Angola" },
  { code: "+966", flag: "🇸🇦", name: "Arabia Saudí" },
  { code: "+213", flag: "🇩🇿", name: "Argelia" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+374", flag: "🇦🇲", name: "Armenia" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+43", flag: "🇦🇹", name: "Austria" },
  { code: "+994", flag: "🇦🇿", name: "Azerbaiyán" },
  { code: "+1", flag: "🇧🇸", name: "Bahamas" },
  { code: "+880", flag: "🇧🇩", name: "Bangladés" },
  { code: "+375", flag: "🇧🇾", name: "Bielorrusia" },
  { code: "+32", flag: "🇧🇪", name: "Bélgica" },
  { code: "+591", flag: "🇧🇴", name: "Bolivia" },
  { code: "+387", flag: "🇧🇦", name: "Bosnia y Herzegovina" },
  { code: "+55", flag: "🇧🇷", name: "Brasil" },
  { code: "+359", flag: "🇧🇬", name: "Bulgaria" },
  { code: "+257", flag: "🇧🇮", name: "Burundi" },
  { code: "+975", flag: "🇧🇹", name: "Bután" },
  { code: "+238", flag: "🇨🇻", name: "Cabo Verde" },
  { code: "+855", flag: "🇰🇭", name: "Camboya" },
  { code: "+237", flag: "🇨🇲", name: "Camerún" },
  { code: "+1", flag: "🇨🇦", name: "Canadá" },
  { code: "+974", flag: "🇶🇦", name: "Catar" },
  { code: "+235", flag: "🇹🇩", name: "Chad" },
  { code: "+56", flag: "🇨🇱", name: "Chile" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+357", flag: "🇨🇾", name: "Chipre" },
  { code: "+57", flag: "🇨🇴", name: "Colombia" },
  { code: "+269", flag: "🇰🇲", name: "Comoras" },
  { code: "+82", flag: "🇰🇷", name: "Corea del Sur" },
  { code: "+225", flag: "🇨🇮", name: "Costa de Marfil" },
  { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
  { code: "+385", flag: "🇭🇷", name: "Croacia" },
  { code: "+53", flag: "🇨🇺", name: "Cuba" },
  { code: "+45", flag: "🇩🇰", name: "Dinamarca" },
  { code: "+253", flag: "🇩🇯", name: "Yibuti" },
  { code: "+593", flag: "🇪🇨", name: "Ecuador" },
  { code: "+20", flag: "🇪🇬", name: "Egipto" },
  { code: "+503", flag: "🇸🇻", name: "El Salvador" },
  { code: "+971", flag: "🇦🇪", name: "Emiratos Árabes Unidos" },
  { code: "+291", flag: "🇪🇷", name: "Eritrea" },
  { code: "+421", flag: "🇸🇰", name: "Eslovaquia" },
  { code: "+386", flag: "🇸🇮", name: "Eslovenia" },
  { code: "+34", flag: "🇪🇸", name: "España" },
  { code: "+1", flag: "🇺🇸", name: "Estados Unidos" },
  { code: "+372", flag: "🇪🇪", name: "Estonia" },
  { code: "+251", flag: "🇪🇹", name: "Etiopía" },
  { code: "+63", flag: "🇵🇭", name: "Filipinas" },
  { code: "+358", flag: "🇫🇮", name: "Finlandia" },
  { code: "+679", flag: "🇫🇯", name: "Fiyi" },
  { code: "+33", flag: "🇫🇷", name: "Francia" },
  { code: "+241", flag: "🇬🇦", name: "Gabón" },
  { code: "+220", flag: "🇬🇲", name: "Gambia" },
  { code: "+995", flag: "🇬🇪", name: "Georgia" },
  { code: "+233", flag: "🇬🇭", name: "Ghana" },
  { code: "+30", flag: "🇬🇷", name: "Grecia" },
  { code: "+502", flag: "🇬🇹", name: "Guatemala" },
  { code: "+224", flag: "🇬🇳", name: "Guinea" },
  { code: "+240", flag: "🇬🇶", name: "Guinea Ecuatorial" },
  { code: "+245", flag: "🇬🇼", name: "Guinea-Bisáu" },
  { code: "+592", flag: "🇬🇾", name: "Guyana" },
  { code: "+509", flag: "🇭🇹", name: "Haití" },
  { code: "+504", flag: "🇭🇳", name: "Honduras" },
  { code: "+36", flag: "🇭🇺", name: "Hungría" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+62", flag: "🇮🇩", name: "Indonesia" },
  { code: "+964", flag: "🇮🇶", name: "Irak" },
  { code: "+98", flag: "🇮🇷", name: "Irán" },
  { code: "+353", flag: "🇮🇪", name: "Irlanda" },
  { code: "+354", flag: "🇮🇸", name: "Islandia" },
  { code: "+972", flag: "🇮🇱", name: "Israel" },
  { code: "+39", flag: "🇮🇹", name: "Italia" },
  { code: "+1", flag: "🇯🇲", name: "Jamaica" },
  { code: "+81", flag: "🇯🇵", name: "Japón" },
  { code: "+962", flag: "🇯🇴", name: "Jordania" },
  { code: "+7", flag: "🇰🇿", name: "Kazajistán" },
  { code: "+254", flag: "🇰🇪", name: "Kenia" },
  { code: "+996", flag: "🇰🇬", name: "Kirguistán" },
  { code: "+686", flag: "🇰🇮", name: "Kiribati" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+856", flag: "🇱🇦", name: "Laos" },
  { code: "+266", flag: "🇱🇸", name: "Lesoto" },
  { code: "+371", flag: "🇱🇻", name: "Letonia" },
  { code: "+961", flag: "🇱🇧", name: "Líbano" },
  { code: "+231", flag: "🇱🇷", name: "Liberia" },
  { code: "+218", flag: "🇱🇾", name: "Libia" },
  { code: "+423", flag: "🇱🇮", name: "Liechtenstein" },
  { code: "+370", flag: "🇱🇹", name: "Lituania" },
  { code: "+352", flag: "🇱🇺", name: "Luxemburgo" },
  { code: "+389", flag: "🇲🇰", name: "Macedonia del Norte" },
  { code: "+261", flag: "🇲🇬", name: "Madagascar" },
  { code: "+60", flag: "🇲🇾", name: "Malasia" },
  { code: "+265", flag: "🇲🇼", name: "Malaui" },
  { code: "+960", flag: "🇲🇻", name: "Maldivas" },
  { code: "+223", flag: "🇲🇱", name: "Malí" },
  { code: "+356", flag: "🇲🇹", name: "Malta" },
  { code: "+212", flag: "🇲🇦", name: "Marruecos" },
  { code: "+222", flag: "🇲🇷", name: "Mauritania" },
  { code: "+230", flag: "🇲🇺", name: "Mauricio" },
  { code: "+52", flag: "🇲🇽", name: "México" },
  { code: "+691", flag: "🇫🇲", name: "Micronesia" },
  { code: "+373", flag: "🇲🇩", name: "Moldavia" },
  { code: "+377", flag: "🇲🇨", name: "Mónaco" },
  { code: "+976", flag: "🇲🇳", name: "Mongolia" },
  { code: "+382", flag: "🇲🇪", name: "Montenegro" },
  { code: "+258", flag: "🇲🇿", name: "Mozambique" },
  { code: "+95", flag: "🇲🇲", name: "Myanmar" },
  { code: "+264", flag: "🇳🇦", name: "Namibia" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+505", flag: "🇳🇮", name: "Nicaragua" },
  { code: "+227", flag: "🇳🇪", name: "Níger" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+47", flag: "🇳🇴", name: "Noruega" },
  { code: "+64", flag: "🇳🇿", name: "Nueva Zelanda" },
  { code: "+968", flag: "🇴🇲", name: "Omán" },
  { code: "+31", flag: "🇳🇱", name: "Países Bajos" },
  { code: "+92", flag: "🇵🇰", name: "Pakistán" },
  { code: "+507", flag: "🇵🇦", name: "Panamá" },
  { code: "+675", flag: "🇵🇬", name: "Papúa Nueva Guinea" },
  { code: "+595", flag: "🇵🇾", name: "Paraguay" },
  { code: "+51", flag: "🇵🇪", name: "Perú" },
  { code: "+48", flag: "🇵🇱", name: "Polonia" },
  { code: "+351", flag: "🇵🇹", name: "Portugal" },
  { code: "+44", flag: "🇬🇧", name: "Reino Unido" },
  { code: "+236", flag: "🇨🇫", name: "República Centroafricana" },
  { code: "+420", flag: "🇨🇿", name: "República Checa" },
  { code: "+243", flag: "🇨🇩", name: "República Democrática del Congo" },
  { code: "+1", flag: "🇩🇴", name: "República Dominicana" },
  { code: "+250", flag: "🇷🇼", name: "Ruanda" },
  { code: "+40", flag: "🇷🇴", name: "Rumania" },
  { code: "+7", flag: "🇷🇺", name: "Rusia" },
  { code: "+685", flag: "🇼🇸", name: "Samoa" },
  { code: "+378", flag: "🇸🇲", name: "San Marino" },
  { code: "+239", flag: "🇸🇹", name: "Santo Tomé y Príncipe" },
  { code: "+221", flag: "🇸🇳", name: "Senegal" },
  { code: "+381", flag: "🇷🇸", name: "Serbia" },
  { code: "+248", flag: "🇸🇨", name: "Seychelles" },
  { code: "+232", flag: "🇸🇱", name: "Sierra Leona" },
  { code: "+65", flag: "🇸🇬", name: "Singapur" },
  { code: "+963", flag: "🇸🇾", name: "Siria" },
  { code: "+252", flag: "🇸🇴", name: "Somalia" },
  { code: "+94", flag: "🇱🇰", name: "Sri Lanka" },
  { code: "+268", flag: "🇸🇿", name: "Suazilandia" },
  { code: "+27", flag: "🇿🇦", name: "Sudáfrica" },
  { code: "+249", flag: "🇸🇩", name: "Sudán" },
  { code: "+211", flag: "🇸🇸", name: "Sudán del Sur" },
  { code: "+46", flag: "🇸🇪", name: "Suecia" },
  { code: "+41", flag: "🇨🇭", name: "Suiza" },
  { code: "+597", flag: "🇸🇷", name: "Surinam" },
  { code: "+66", flag: "🇹🇭", name: "Tailandia" },
  { code: "+886", flag: "🇹🇼", name: "Taiwán" },
  { code: "+255", flag: "🇹🇿", name: "Tanzania" },
  { code: "+992", flag: "🇹🇯", name: "Tayikistán" },
  { code: "+670", flag: "🇹🇱", name: "Timor Oriental" },
  { code: "+228", flag: "🇹🇬", name: "Togo" },
  { code: "+676", flag: "🇹🇴", name: "Tonga" },
  { code: "+1", flag: "🇹🇹", name: "Trinidad y Tobago" },
  { code: "+216", flag: "🇹🇳", name: "Túnez" },
  { code: "+993", flag: "🇹🇲", name: "Turkmenistán" },
  { code: "+90", flag: "🇹🇷", name: "Turquía" },
  { code: "+688", flag: "🇹🇻", name: "Tuvalu" },
  { code: "+380", flag: "🇺🇦", name: "Ucrania" },
  { code: "+256", flag: "🇺🇬", name: "Uganda" },
  { code: "+598", flag: "🇺🇾", name: "Uruguay" },
  { code: "+998", flag: "🇺🇿", name: "Uzbekistán" },
  { code: "+678", flag: "🇻🇺", name: "Vanuatu" },
  { code: "+58", flag: "🇻🇪", name: "Venezuela" },
  { code: "+84", flag: "🇻🇳", name: "Vietnam" },
  { code: "+967", flag: "🇾🇪", name: "Yemen" },
  { code: "+260", flag: "🇿🇲", name: "Zambia" },
  { code: "+263", flag: "🇿🇼", name: "Zimbabue" },
]

const tourTypes = [
  "FULL DAY",
  "Paquetes",
  "Tours",
  "Privados",
  "Paquete Personalizado",
  "Tour Personalizado",
  "Otro",
]

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+51",
    tourType: "",
    travelDate: "",
    groupSize: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Crear mensaje estructurado para WhatsApp
      const whatsappMessage = `🏔️ *SOLICITUD DE INFORMACIÓN - MACHU PICCHU*

👤 *Nombre:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Teléfono:* ${formData.countryCode} ${formData.phone}
🎯 *Tour:* ${formData.tourType || 'No especificado'}
📅 *Fecha de viaje:* ${formData.travelDate || 'Por definir'}
👥 *Número de personas:* ${formData.groupSize || 'No especificado'}

💬 *Mensaje:*
${formData.message}

_Enviado desde machupicchuorigin.com_`

      // Crear URL de WhatsApp con mensaje pre-escrito
      const whatsappURL = `https://wa.me/51907966198?text=${encodeURIComponent(whatsappMessage)}`
      
      // Simular un pequeño delay para mostrar el loading
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Abrir WhatsApp automáticamente
      window.open(whatsappURL, '_blank')
      
      // Mostrar confirmación inmediata
      alert("¡Perfecto! Se ha abierto WhatsApp con tu mensaje listo. Solo toca 'Enviar' en WhatsApp para completar el envío.")
      
      // Limpiar formulario
      setFormData({
        name: "",
        email: "",
        phone: "",
        countryCode: "+51",
        tourType: "",
        travelDate: "",
        groupSize: "",
        message: "",
      })

    } catch (error) {
      console.error('Error:', error)
      alert("Hubo un error. Por favor intenta de nuevo o contáctanos directamente por WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    if (name === "countryCode") {
      value = value.split('-')[0]
    }
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const selectedCountry = countries.find((country) => country.code === formData.countryCode)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-primary-600">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-amber-600">Contáctanos</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-secondary-300">
              ¿Listo para vivir la aventura de tu vida? Contáctanos y diseñemos juntos tu experiencia perfecta en Machu
              Picchu.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center space-x-2">
                      <Send className="h-6 w-6 text-secondary-600" />
                      <span>Solicita Información</span>
                    </CardTitle>
                    <p className="text-gray-600">
                      Completa el formulario y se abrirá WhatsApp con tu mensaje listo para enviar. ¡Respuesta inmediata garantizada!
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre Completo *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Tu nombre completo"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Teléfono
                        </label>
                        <div className="flex">
                          <Select
                            onValueChange={(value) => handleSelectChange("countryCode", value)}
                            defaultValue="+51-95"
                          >
                            <SelectTrigger className="w-32 rounded-r-none border-r-0">
                              <div className="flex items-center space-x-2">
                                <span>{selectedCountry?.flag}</span>
                                <span className="text-sm">{formData.countryCode}</span>
                              </div>
                            </SelectTrigger>
                            <SelectContent className="max-h-60">
                              {countries.map((country, index) => (
                                <SelectItem key={index} value={`${country.code}-${index}`}>
                                  <div className="flex items-center space-x-2">
                                    <span>{country.flag}</span>
                                    <span className="text-sm">{country.code}</span>
                                    <span className="text-sm text-gray-600">{country.name}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="987654321"
                            className="rounded-l-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Tour de Interés</label>
                          <Select onValueChange={(value) => handleSelectChange("tourType", value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tour" />
                            </SelectTrigger>
                            <SelectContent>
                              {tourTypes.map((tour) => (
                                <SelectItem key={tour} value={tour}>
                                  {tour}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-2">
                            <Calendar className="inline h-4 w-4 mr-1" />
                            Fecha de Viaje
                          </label>
                          <Input
                            id="travelDate"
                            name="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
                          <Users className="inline h-4 w-4 mr-1" />
                          Número de Personas
                        </label>
                        <Select onValueChange={(value) => handleSelectChange("groupSize", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tamaño del grupo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 persona</SelectItem>
                            <SelectItem value="2">2 personas</SelectItem>
                            <SelectItem value="3-4">3-4 personas</SelectItem>
                            <SelectItem value="5-8">5-8 personas</SelectItem>
                            <SelectItem value="9+">9+ personas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Mensaje *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Cuéntanos sobre tu viaje ideal a Machu Picchu, intereses especiales, nivel de condición física, presupuesto aproximado, etc."
                          rows={5}
                        />
                      </div>

                      {/* Botón de envio */}
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-secondary-600 hover:bg-secondary-700"
                        disabled={isSubmitting}
                      >
                        <span>{isSubmitting ? "Preparando WhatsApp..." : "Enviar por WhatsApp"}</span>
                      </Button>
                      <p className="text-sm text-gray-500 text-center">
                        Al enviar, se abrirá WhatsApp con tu mensaje listo para enviar. Responderemos en minutos.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          <IconComponent className="h-6 w-6 text-secondary-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-primary-600 mb-2">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 mb-1">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}

                {/* WhatsApp Card */}
                <Card className="bg-green-50 border-green-200">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <svg
                         className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform"
                         fill="currentColor"
                         viewBox="0 0 24 24"
                           >
                       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg> 
                   <h3 className="font-semibold text-green-600">WhatsApp</h3>
                    </div>
                    <p className="text-gray-600 mb-4">¿Necesitas respuesta inmediata? Escríbenos por WhatsApp.</p>
                    <Button
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.open("https://wa.me/51907966198", "_blank")}
                    >
                      Chatear por WhatsApp
                    </Button>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="bg-red-50 border-red-200">
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary-600 mb-2">Emergencias 24/7</h4>
                    <p className="text-gray-600 mb-3">
                      Si ya eres nuestro cliente y tienes una emergencia durante tu viaje:
                    </p>
                    <p className="text-red-600 font-semibold">+51 907 966 198</p>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardContent className="pt-6">
                    <h4 className="font-semibold text-primary-600 mb-4">Síguenos</h4>
                    <div className="space-y-2">
                      <Link
                        href="https://facebook.com/machupicchuOrigin"
                        target="_blank"
                      >
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          Facebook - @MachupichuOrigin
                        </Button>
                      </Link>
                      <Link
                        href="https://instagram.com/machupicchuorigin"
                        target="_blank"
                      >
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          Instagram - @MachupichuOrigin
                        </Button>
                      </Link>
                      <Link
                        href="https://www.tiktok.com/@machupicchuorigin_"
                        target="_blank"
                      >
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          Tiktok - @MachupichuOrigin
                        </Button>
                      </Link>
                      <Link
                        href="https://www.tripadvisor.com/UserReviewEdit-d33352023?m=68676"
                        target="_blank"
                      >
                        <Button variant="outline" className="w-full justify-start bg-transparent">
                          Tripadvisor - @MachupichuOrigin
                        </Button>
                      </Link>

                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
