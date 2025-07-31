"use client"
import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Facebook, Instagram } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"


// TikTok icon component since it's not in lucide-react
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const toursOptions = [
  {
    name: "CUSCO Inca Jungle 3 días",
    href: "/tours/tour0",
    image: "/Machu_Picchu,_Peru_(2018).jpg?height=100&width=120",
  },
  {
    name: "CUSCO Camino Inca 3 días",
    href: "/tours/tour1",
    image: "/camino-inca.jpg?height=80&width=120",
  },
  {
    name: "LIMA Lineas de Nazca y Oasis Huacachina 2 días",
    href: "/tours/tour2",
    image: "/nazca.jpeg?height=80&width=120",
  },
  {
    name: "PUNO Lago Titicaca Uros, Taquile y Amantani 2 días",
    href: "/tours/tour3",
    image: "/uros.jpeg?height=80&width=120",
  },
  {
    name: "AREQUIPA Avistamiento Colca 2 días",
    href: "/tours/tour4",
    image: "/colca.jpeg?height=80&width=120",
  },
  {
    name: "IQUITOS Selva Peruana 4 días y 3 noches",
    href: "/tours/tour5",
    image: "/iquitos.jpeg?height=80&width=120",
  },
]

const paquetesOptions = [
  { name: "Aventura Peruana Clasica 10 Días 9 Noches", href: "/paquetes/pack2" },
  { name: "Aventura Peruana Clasica  15 Días 14 Noches", href: "/paquetes/pack3" },
  { name: "Cusco y Machu Picchu 5 Días 4 Noches", href: "/paquetes/pack0" },
  { name: "Selva Peruana y Machupicchu 9 Días 8 Noches", href: "/paquetes/pack5" },
  { name: "Peru y Bolivia 15 Días 14 Noches", href: "/paquetes/pack7" },
  { name: "Salkantay Treking en 5 Días 4 Noches", href: "/paquetes/pack9" },
  { name: "Cusco y Machu Picchu 7 Días 6 Noches", href: "/paquetes/pack1" },
  { name: "Luna de Miel en Peru", href: "/paquetes/pack8" },
  { name: "Aventura Peru Bolivia 20 Días 19 Noches", href: "/paquetes/pack4" },
  { name: "Norte Peruano y Machupicchu 9 Días 8 Noches", href: "/paquetes/pack6" },
] as const
const navigation = [
  
  { name: "Full Day", href: "/tours-un-dia" },
  { name: "Tours", href: "/tours", hasDropdown: true, options: toursOptions },
  { name: "Paquetes Perú", href: "/paquetes", hasDropdown: true, options: paquetesOptions },
  { name: "Blog", href: "/blog" },
  { name: "Acerca de Nosotros", href: "/nosotros" },
  { name: "Contacto", href: "/contacto" },
  { name: "Privados", href: "/tours-privados" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = "51907966198"
    const message = "Hola! Me interesa conocer más sobre los tours a Machu Picchu."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <nav className="flex items-center justify-between h-full p-1 lg:px-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo-machu-picchu2.png"
              alt="Machupicchu Origin Logo"
              width={80}
              height={80} />
            <span className="text-lg font-bold text-secondary-600">Machupicchu Origin</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-6 lg:items-center">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className={`text-sm font-semibold leading-6 transition-colors flex items-center space-x-1 h-auto p-2 
                        ${pathname.startsWith(item.href) ? "text-[#2e4536]" : "text-gray-900 hover:text-[#2e4536]"
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-3 w-3" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className={item.name === "Tours" ? "w-[800px] p-4" : "w-64"}>
                    {item.name === "Tours" ? (
                      <div className="grid grid-cols-3 gap-4">
                        {item.options?.map((option) => (
                          <DropdownMenuItem key={option.name} asChild className="p-0">
                            <Link href={option.href} className="w-full">
                              <div className="flex flex-col items-center space-y-2 p-3 hover:bg-[#f7f5dd] rounded-lg w-full text-center transition-colors duration-200">
                                {"image" in option && (
                                  <img
                                    src={option.image || "/placeholder.svg"}
                                    alt={option.name}
                                    className="w-32 h-20 object-cover rounded-md"
                                  />
                                )}
                                <span className="text-sm font-medium text-gray-900 leading-tight hover:text-[#2e4536]">
                                  {option.name}
                                </span>
                              </div>
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    ) : (
                      item.options?.map((option) => (
                        <DropdownMenuItem key={option.name} asChild className="p-0">
                          <Link href={option.href} className="w-full">
                            <div className="p-3 hover:bg-[#f7f5dd] w-full rounded transition-colors duration-200">
                              <span className="text-sm hover:text-[#2e4536]">{option.name}</span>
                            </div>
                          </Link>
                        </DropdownMenuItem>
                      ))
                    )}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-semibold leading-6 transition-colors ${
                    pathname === item.href ? "text-[#2e4536]" : "text-gray-900 hover:text-[#2e4536]"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:space-x-4">
          {/* Social Media Icons */}
          <div className="flex space-x-3">
            <Link
              href="https://facebook.com/machupicchuOrigin"
              target="_blank"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2e4536" }}
            >
              <Facebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://instagram.com/machupicchuorigin"
              target="_blank"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2e4536" }}
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.tiktok.com/@machupicchuorigin_"
              target="_blank"
              className="transition-colors hover:opacity-70"
              style={{ color: "#2e4536" }}
            >
              <TikTokIcon className="h-5 w-5" />
            </Link>
          </div>
          <Button
            onClick={handleWhatsAppClick}
            className="text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#d68e28" }}
          >
            Reservar Ahora
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="space-y-2 px-6 py-6">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <div className="text-base font-semibold text-gray-900">{item.name}</div>
                    <div className="pl-4 space-y-1">
                      {item.options?.map((option) => (
                        <Link
                          key={option.name}
                          href={option.href}
                          className="block text-sm text-gray-600 hover:text-[#2e4536]"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {option.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block text-base font-semibold leading-7 transition-colors ${
                      pathname === item.href ? "text-[#2e4536]" : "text-gray-900 hover:text-[#2e4536]"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 space-y-4">
              <div className="flex justify-center space-x-4">
                <Link
                  href="https://facebook.com/machupicchuOrigin"
                  target="_blank"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "#2e4536" }}
                >
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com/machupicchu_origin"
                  target="_blank"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "#2e4536" }}
                >
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://tiktok.com/@machupicchu_origin"
                  target="_blank"
                  className="transition-colors hover:opacity-70"
                  style={{ color: "#2e4536" }}
                >
                  <TikTokIcon className="h-6 w-6" />
                </Link>
              </div>
              <Button
                onClick={handleWhatsAppClick}
                className="w-full text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#d68e28" }}
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
