"use client";

// app/contrato-exencion/page.tsx
import React from 'react';
import { FileText, MapPin, Shield, AlertTriangle, Scale } from 'lucide-react';
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

const ContratoExencion = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section
          className="relative py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/llamas.webp')" }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Acuerdo de Liberación de Responsabilidades
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Documento legal que establece los términos y condiciones para su participación en nuestros tours turísticos
            </p>
          </div>
        </section>

        {/* Document Content */}
        <div className="max-w-5xl mx-auto px-4 py-12">
          {/* Header Document */}
          <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="bg-green-800 text-white p-6">
              <h1 className="text-2xl font-bold text-center">ACUERDO DE LIBERACIÓN DE RESPONSABILIDADES LEGALES</h1>
            </div>
            
            <div className="p-8">
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed">
                  Se establece mediante el presente documento, al cual designamos como <span className="font-bold text-gray-900">ACUERDO DE LIBERACIÓN DE RESPONSABILIDADES LEGALES (ACUERDO ESPECÍFICO)</span> que firman:
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-800 rounded-full p-2">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 leading-relaxed">
                      La compañía <span className="font-bold text-green-800">MACHUPICCHU ORIGIN E.I.R.L.</span>, registrada con <span className="font-bold">RUC 10727680398</span>, 
                      con sede legal y tributaria ubicada en el inmueble K-8 de la calle Calle 28 de Julio en el distrito de San Jeronimo, provincia y región del Cusco, 
                      República del Perú, con correo institucional de contacto <span className="text-blue-600 font-medium">info@machupicchuorigin.com</span>, 
                      debidamente representada por su apoderada legal (Gerente General), la señora Marjorie Jennifer Ponce Cruz, quien para estos propósitos además 
                      se encuentra identificada con DNI 72768039 quien en lo posterior y para fines del presente documento se le denominará como 
                      <span className="font-bold text-green-800"> "LA EMPRESA"</span>; y, del otro lado, el(la) señor(a):
                    </p>
                    
                    <div className="mt-4 p-4 border-2 border-dashed border-gray-300 rounded-lg">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-600">Identificado(a) con DNI o Pasaporte N.°:</span>
                          <div className="border-b border-gray-400 mt-1 h-6"></div>
                        </div>
                        <div>
                          <span className="text-gray-600">Domiciliado(a) en:</span>
                          <div className="border-b border-gray-400 mt-1 h-6"></div>
                        </div>
                        <div>
                          <span className="text-gray-600">Con correo electrónico:</span>
                          <div className="border-b border-gray-400 mt-1 h-6"></div>
                        </div>
                        <div>
                          <span className="text-gray-600">Y número telefónico:</span>
                          <div className="border-b border-gray-400 mt-1 h-6"></div>
                        </div>
                      </div>
                      <p className="text-center text-gray-600 font-medium mt-4">
                        en adelante se le denominará <span className="font-bold text-secondary-600">"EL TURISTA"</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clausula Primera */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-green-700 text-white p-4">
              <h2 className="text-xl font-bold">1. Cláusula Inicial – Antecedentes</h2>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Que <span className="font-bold text-green-800">LA EMPRESA</span> es una entidad legalmente constituida y especializada en la organización, 
                  promoción y comercialización de tours y paquetes turísticos en diversos destinos dentro de la República del Perú y el Estado Plurinacional de Bolivia.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Que <span className="font-bold text-secondary-600">EL TURISTA</span>, de manera voluntaria y consciente, ha decidido participar en el paquete turístico denominado 
                  [Nombre del Tour], el cual comprende diversos destinos y servicios turísticos especificados en el itinerario de viaje el cual se encuentra 
                  comprendido para el período de entre el [Fecha de inicio] y el [Fecha de finalización], y ha manifestado su conformidad con las condiciones 
                  descritas en el presente acuerdo.
                </p>
              </div>
            </div>
          </div>

          {/* Clausula Segunda */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-green-700 text-white p-4">
              <h2 className="text-xl font-bold">2. Cláusula Secundaria – De Los Pactos Y Convenios:</h2>
            </div>
            
            <div className="p-6">
              <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                <div className="flex items-center mb-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600 mr-2" />
                  <h3 className="text-lg font-bold text-orange-800">2.1. De la "Liberación de Responsabilidad Legal"</h3>
                </div>
              </div>
              
              <p className="text-gray-700 font-medium mb-4">
                <span className="font-bold text-secondary-600">EL TURISTA</span> reconoce y acepta expresamente que:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Participa de manera completamente voluntaria en todas las actividades turísticas y de esparcimiento ofrecidas por 
                    <span className="font-bold text-green-800"> LA EMPRESA</span>, se establece que, en lo presente, no se exige vicio alguno que pueda 
                    invalidar la decisión pura y voluntaria del <span className="font-bold text-secondary-600">TURISTA</span> por contratar los servicios de 
                    <span className="font-bold text-green-800"> LA EMPRESA</span>.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Asume los riesgos inherentes a dichas actividades, que incluyen, sin limitación alguna, caminatas en terrenos irregulares, 
                    ascensos y descensos en zonas de altitud elevada, desplazamientos en medios de transporte terrestre y aéreo, así como cualquier 
                    otra actividad que pueda implicar un riesgo físico, personal o material, tanto dentro como fuera de los límites de las zonas turísticas.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Exime de toda responsabilidad a <span className="font-bold text-green-800">LA EMPRESA</span>, a sus empleados, agentes, representantes, 
                    proveedores de servicios y cualquier tercero relacionado, por cualquier accidente, lesión (temporal o permanente), enfermedad 
                    (profesional o común), pérdida, robo o daño material que pudiera ocurrir durante el desarrollo del tour o como consecuencia de su 
                    participación en el mismo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Condiciones de Salud */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-secondary-600 text-white p-4">
              <h3 className="text-lg font-bold">2.2. Condiciones de Salud y Capacidad Física</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 font-medium mb-4">
                <span className="font-bold text-secondary-600">EL TURISTA</span> declara bajo juramento que:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Se encuentra en un estado de salud óptimo para participar en todas las actividades físicas que conforman el programa del tour 
                    (dicha declaración constituye una declaración asimilada).
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Cuenta con la condición física y mental adecuada para realizar las actividades que implican esfuerzo físico, caminatas en 
                    altitud y otros desafíos de naturaleza similar.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Ha informado a <span className="font-bold text-green-800">LA EMPRESA</span> de cualquier condición médica preexistente, 
                    limitación física o requerimiento especial que pudiese influir en su participación en el tour o que pudiera poner en riesgo 
                    su seguridad o la de los demás.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Seguro de Viaje */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-secondary-600 text-white p-4">
              <h3 className="text-lg font-bold">2.3. Póliza de Viaje</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-secondary-600">EL TURISTA</span> asume la responsabilidad de contratar una póliza de viaje adecuada que cubra 
                cualquier imprevisto, accidente, enfermedad, pérdida de bienes personales, cancelaciones o situaciones similares durante su participación 
                en el tour. La Empresa recomienda enfáticamente la adquisición de dicha póliza y <span className="underline font-medium">no asume ninguna 
                responsabilidad por la no contratación ni por la cobertura que éste ofrezca</span>.
              </p>
            </div>
          </div>

          {/* Obligaciones */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-secondary-600 text-white p-4">
              <h3 className="text-lg font-bold">2.4. Compromisos de Conducta y Cumplimiento</h3>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 font-medium mb-4">
                <span className="font-bold text-secondary-600">EL TURISTA</span> se compromete a:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Cumplir con todas las instrucciones de seguridad y comportarse de manera respetuosa y responsable, según lo indicado por los guías y 
                    personal de <span className="font-bold text-green-800">LA EMPRESA</span>. <span className="font-bold text-secondary-600">EL TURISTA</span> reconoce 
                    expresamente haber sido notificado con las "instrucciones de seguridad", "guías" y demás documentos que son pieza útil en el servicio 
                    contratado a <span className="font-bold text-green-800">LA EMPRESA</span>.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Observar las normas de comportamiento y las leyes locales durante el desarrollo del tour, respetando las regulaciones relativas al 
                    medio ambiente, patrimonio cultural, seguridad y convivencia ciudadana.
                  </p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">
                    Abstenerse de participar en actividades que puedan poner en peligro su seguridad personal, la de otros participantes o la de los 
                    propios guías y organizadores del tour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Modificaciones */}
          <div className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden">
            <div className="bg-secondary-600 text-white p-4">
              <h3 className="text-lg font-bold">2.5. Alteraciones y Cancelaciones</h3>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-bold text-green-800">LA EMPRESA</span> se reserva el derecho de modificar o cancelar el tour en cualquier momento 
                  por razones imprevistas, <span className="underline">tales como condiciones meteorológicas adversas, situaciones de fuerza mayor, 
                  convulsiones sociales o cualquier otra circunstancia que pudiera comprometer la seguridad y el bienestar de los participantes</span>.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-secondary-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  En caso de que <span className="font-bold text-green-800">LA EMPRESA</span> decida cancelar el tour, ofrecerá <span className="font-bold text-secondary-600">AL TURISTA</span> la 
                  opción de un reembolso o la posibilidad de reprogramar el tour en una fecha alternativa, según lo indicado en el documento de términos 
                  y condiciones generales de venta.
                </p>
              </div>
            </div>
          </div>

          {/* Jurisdicción */}
          <div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
            <div className="bg-primary-600 text-white p-4">
              <div className="flex items-center space-x-2">
                <Scale className="w-5 h-5" />
                <h3 className="text-lg font-bold">2.6. Jurisdicción y Ley Aplicable</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-700 leading-relaxed">
                Este acuerdo se regirá e interpretará de conformidad con las leyes de la República del Perú. Cualquier disputa, controversia o conflicto 
                que surja con ocasión de la ejecución o interpretación de este acuerdo será resuelta por los tribunales competentes en la ciudad de Cusco, 
                Perú, a cuya jurisdicción ambas partes se someten de manera irrevocable.
              </p>
            </div>
          </div>

          {/* Footer info */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-green-800 font-medium">
              Este documento debe ser firmado antes del inicio del tour. Para cualquier consulta, contáctenos a través de nuestros canales oficiales.
            </p>
            <p className="text-green-600 text-sm mt-2">
              Machupicchu Origin - Tu aventura comienza aquí
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContratoExencion;