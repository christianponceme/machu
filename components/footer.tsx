import Link from "next/link"
import Image from "next/image"
import { Mountain, Facebook, Instagram, Youtube } from "lucide-react"

// TikTok icon component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#2e4536" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image 
               src="/logo-blanco.png"
               alt="Machupicchu Origin Logo"
               width={80}
               height={80} 
              />
              <span className="text-2xl font-bold">Machupicchu Origin</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Más de tres años de experiencia nos respaldan en la creación de viajes 
              inolvidables a Machu Picchu y otros tesoros peruanos. Te garantizamos
               seguridad, autenticidad y excelencia en cada aventura.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com/machupicchuOrigin"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-8 w-6" />
              </Link>
              <Link
                href="https://instagram.com/machupicchuorigin"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-8 w-6" />
              </Link>
              <Link
                href="https://www.tiktok.com/@machupicchuorigin_"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <TikTokIcon className="h-8 w-6" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCAORwvgkP_jnRolFKZT2_Ow"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="h-8 w-7
                " />
              </Link>
            </div>
          </div>

          {/* Tours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Todos los tours
                </Link>
              </li>
              <li>
                <Link href="/paquetes" className="text-gray-300 hover:text-white transition-colors">
                  Todos los Paquetes
                </Link>
              </li>
              <li>
                <Link href="/tours-un-dia" className="text-gray-300 hover:text-white transition-colors">
                  Tours de 1 Día
                </Link>
              </li>
              <li>
                <Link href="/tours-privados" className="text-gray-300 hover:text-white transition-colors">
                  Tours Privados
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Acerca de Nosotros
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <Link href="/terminos-condiciones" className="text-gray-300 hover:text-white transition-colors text-sm">
                Términos y Condiciones
              </Link>
              <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors text-sm">
                Política de Privacidad
              </Link>
              <Link href="/preguntas-frecuentes" className="text-gray-300 hover:text-white transition-colors text-sm">
                Preguntas Frecuentes
              </Link>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Machupicchu Origin. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
