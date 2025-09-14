"use client";

// app/terminos-compra/page.tsx
import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Calendar, FileText, Upload, CheckCircle, AlertTriangle } from 'lucide-react';
import Header from "@/components/header";
import Image from 'next/image';
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const FormularioRegistro = () => {
  const [formData, setFormData] = useState({
    // Datos del paquete turístico
    asesorVentas: '',
    nombreTour: '',
    emailAsesor: '',
    numeroDias: '',
    
    // Información del viajero
    nombreApellido: '',
    fechaNacimiento: '',
    email: '',
    telefono: '',
    codigoPostal: '',
    numeroPasaporte: '',
    fechaEmision: '',
    fechaExpiracion: '',
    
    // Emergencia
    nombreEmergencia: '',
    telefonoEmergencia: '',
    informacionAdicional: '',
    firmaArchivo: null as File | null,
    
    // Términos
    aceptaTerminos: false,
    aceptaContrato: false
  });

  const [errors, setErrors] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      firmaArchivo: file
    }));
  };

  const validateForm = () => {
    const newErrors = [];
    
    if (!formData.asesorVentas) newErrors.push('Asesor de ventas es requerido');
    if (!formData.nombreApellido) newErrors.push('Nombre y apellido es requerido');
    if (!formData.email) newErrors.push('Email es requerido');
    if (!formData.telefono) newErrors.push('Teléfono es requerido');
    if (!formData.numeroPasaporte) newErrors.push('Número de pasaporte es requerido');
    if (!formData.nombreEmergencia) newErrors.push('Contacto de emergencia es requerido');
    if (!formData.telefonoEmergencia) newErrors.push('Teléfono de emergencia es requerido');
    if (!formData.aceptaTerminos) newErrors.push('Debe aceptar los términos y condiciones');
    if (!formData.aceptaContrato) newErrors.push('Debe firmar el contrato de exención');
    
    return newErrors;
  };

  const handleSubmit = async () => {
    const validationErrors = validateForm();
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    setIsSubmitting(true);
    
    // Simular envío
    await new Promise<void>(resolve => setTimeout(resolve, 2000));
    
    alert('¡Formulario enviado exitosamente! Nos contactaremos pronto.');
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-40 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-mount.webp')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-600 mb-4">Términos y condiciones de compra y Contrato de exención</h2>
          </div> 
        </section>

        <div className="max-w-4xl mx-auto px-4 py-4">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden">
            <div className="bg-green-800 text-white p-4">
              <h1 className="text-xl font-bold text-amber-600">BOLETÍN DE INSCRIPCIÓN</h1>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-4 flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-300">
                      <div className="bg-gray-100 p-2 text-sm font-medium">Agencia de viajes local</div>
                      <div className="p-2 text-secondary-600">Machupicchu Origin</div>
                    </div>
                    <div className="border border-gray-300">
                      <div className="bg-gray-100 p-2 text-sm font-medium">RUC</div>
                      <div className="p-2">10727680398</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-300">
                      <div className="bg-gray-100 p-2 text-sm font-medium">Dirección</div>
                      <div className="p-2">Calle 28 de Julio K-8 - Cusco</div>
                    </div>
                    <div className="border border-gray-300">
                      <div className="bg-gray-100 p-2 text-sm font-medium">Teléfono principal</div>
                      <div className="p-2">+51 907 966 198</div>
                    </div>
                  </div>
                </div>
                
                <div className="ml-8">
                  <div className="w-32 h-24 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-green-800 rounded-full flex items-center justify-center mb-2 mx-auto">
                        <Image
                           src="/logo-blanco.webp"  
                           alt="Icono de Origen de Machupicchu" // Añade una descripción útil
                           width={100}          // Ancho real de tu imagen en píxeles
                           height={60}         // Alto real de tu imagen en píxeles
                           className="rounded-full" // Puedes aplicar clases de estilo si es necesario
                       />
                      </div>
                      <div className="text-secondary-600 font-bold text-sm">MACHUPICCHU ORIGIN</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-center mb-2">
                <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-red-800 font-medium">Errores en el formulario:</h3>
              </div>
              <ul className="list-disc list-inside text-red-700 text-sm">
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-6">
            {/* Sección 1: Datos del Paquete Turístico */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-green-800 text-white p-3">
                <h2 className="font-bold text-secondary-300">1. DATOS DEL PAQUETE TURÍSTICO</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Asesor(a) de Ventas <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="asesorVentas"
                      value={formData.asesorVentas}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    >
                      <option value="">- Seleccione su Asesor -</option>
                      <option value="maria-gonzalez">Marjorie Ponce</option>
                      <option value="carlos-rodriguez">Eduardo Flores</option>
                      <option value="ana-lopez">Ana López</option>
                      <option value="pedro-martinez">Pedro Martínez</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre del tour</label>
                    <input
                      type="text"
                      name="nombreTour"
                      value={formData.nombreTour}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Nombre del tour"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email de asesor(a) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="emailAsesor"
                      value={formData.emailAsesor}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="asesor@machupicchuorigin.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Numero de días <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      name="numeroDias"
                      value={formData.numeroDias}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="0"
                      min="1"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 2: Información del Viajero */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-green-800 text-white p-3">
                <h2 className="font-bold text-secondary-300">2. INFORMACIÓN DEL VIAJERO</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre y apellido <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nombreApellido"
                      value={formData.nombreApellido}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Fecha de nacimiento <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      name="fechaNacimiento"
                      value={formData.fechaNacimiento}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="su@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono/WhatsApp</label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código postal</label>
                    <input
                      type="text"
                      name="codigoPostal"
                      value={formData.codigoPostal}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Código postal"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      N° de pasaporte <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="numeroPasaporte"
                      value={formData.numeroPasaporte}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Número de pasaporte"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de emisión</label>
                    <input
                      type="date"
                      name="fechaEmision"
                      value={formData.fechaEmision}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Fecha de expiración</label>
                    <input
                      type="date"
                      name="fechaExpiracion"
                      value={formData.fechaExpiracion}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 space-y-1">
                  <p>* Nombres y apellidos como se indica en el pasaporte</p>
                  <p>* Le agradecemos de enviar la copia del pasaporte actualizado.</p>
                  <p>* Si es necesario renovar su pasaporte, debe enviarnos la copia del pasaporte nuevo y guarde con usted una copia del <span className="text-blue-600 underline">antiguo</span>, al momento del viaje.</p>
                </div>
              </div>
            </div>

            {/* Sección 3: Contacto de Emergencia */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="bg-green-800 text-white p-3">
                <h2 className="font-bold text-secondary-300">3. PERSONA A CONTACTAR EN CASO DE EMERGENCIA (EN EL PAÍS DE ORIGEN)</h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre y apellido</label>
                    <input
                      type="text"
                      name="nombreEmergencia"
                      value={formData.nombreEmergencia}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="Nombre del contacto de emergencia"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input
                      type="tel"
                      name="telefonoEmergencia"
                      value={formData.telefonoEmergencia}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                      placeholder="+1 999 999 999"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Información adicional (alergias, dietas, restricciones, medicación u otro) <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="informacionAdicional"
                    value={formData.informacionAdicional}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-green-800 focus:border-transparent"
                    placeholder="Especifique cualquier información relevante para el viaje..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suba una foto de su firma <span className="text-red-500">*</span>
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-800 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                      id="firma-upload"
                    />
                    <label htmlFor="firma-upload" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-blue-600">Elegir archivo</p>
                      <p className="text-xs text-gray-500 mt-1">Formatos: JPG, PNG, PDF</p>
                    </label>
                    {formData.firmaArchivo && (
                      <p className="text-green-600 text-sm mt-2">✓ {formData.firmaArchivo.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Términos y Condiciones */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="aceptaTerminos"
                    name="aceptaTerminos"
                    checked={formData.aceptaTerminos}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-800"
                  />
                  <label htmlFor="aceptaTerminos" className="text-sm text-gray-700">
                    <strong>Al completar este formulario de registro certifico que:</strong>
                    <ol className="list-decimal list-inside mt-2 space-y-1 text-xs text-gray-600">
                      <li>He leído y aceptado todos los <a href="/terminos-condiciones" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">Términos y Condiciones</a> de venta, así como la descripción del viaje</li>
                      <li>He consultado a mi médico, para participar en un viaje de altura</li>
                      <li>Autorizo a Machu Picchu Origin a utilizar de manera voluntaria mis fotografías y/o videos tomados durante el viaje, con fines de difusión en redes sociales, página web y otros medios digitales oficiales de la empresa</li>
                      <li>Declaro bajo juramento asumir toda responsabilidad de mi estado de salud en la realización del paquete turístico, expresando que los datos proporcionados en el presente documento son verdaderos, sometiéndome a las responsabilidades que acarrea la falsa declaración</li>
                    </ol>
                    <p className="mt-3 text-xs">
                      Por lo tanto, afirmo que tomo conocimiento de los servicios incluidos y no incluidos en el viaje, así como de toda la información necesaria para el buen desarrollo del viaje.
                    </p>
                  </label>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="aceptaContrato"
                    name="aceptaContrato"
                    checked={formData.aceptaContrato}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-800"
                  />
                  <label htmlFor="aceptaContrato" className="text-sm text-gray-700">
                    <strong>Al completar este formulario de registro certifico que:</strong>
                    <p className="mt-1 text-xs text-gray-600">
                      He leído y firmó el <a href="/contrato-exencion" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline" >Contrato de Exención de Responsabilidades Legales</a>
                    </p>
                  </label>
                </div>
              </div>
            </div>

            {/* Botón de Envío */}
            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="bg-secondary-600 hover:bg-secondary-800 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO FORMULARIO...' : 'ENVIAR FORMULARIO'}
              </button>
              <p className="text-sm text-gray-600 mt-3">
                Al enviar este formulario, recibirá una confirmación por email y nos contactaremos con usted pronto.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default FormularioRegistro;