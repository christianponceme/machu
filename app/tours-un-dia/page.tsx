'use client' // ¡ESTA LÍNEA ES LA MÁS IMPORTANTE!

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, MapPin, Calendar, BarChart3 } from "lucide-react"; // Añadido BarChart3
import Image from "next/image"; // Importante para las imágenes
import Header from "@/components/header"; // Asumo que tienes un Header y Footer
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

// --- Datos de los tours ---
const tours = [
    {
      id: 1,
      title: "CUSCO Inca Jungle 3 días (CUSCO)",
      description: "Visita la ciudadela inca más famosa del mundo en un día completo con tren panorámico.",
      duration: "14 horas",
      difficulty: "Fácil",
      price: "Desde $380",
      rating: 4.8,
      reviews: 24,
      image: "/Machu_Picchu,_Peru_(2018).jpg", // Usa rutas de imagen reales
      highlights: ["Tren panorámico", "Guía experto", "Entrada incluida"],
      departure: "5:00 AM",
      return: "7:00 PM",
    },
    {
      id: 2,
      title: "Islas Ballestas y Oasis Huachina Full Day (LIMA - ICA)",
      description: "Imponentes formaciones rocosas, santuario de lobos marinos y miles de aves.",
      duration: "10 horas",
      difficulty: "Fácil",
      price: "Desde $68",
      rating: 4.7,
      reviews: 25,
      image: "/Islas_Ballestas_-_panoramio.jpg",
      highlights: ["Mercado de Pisac", "Fortaleza Ollantaytambo", "Almuerzo incluido"],
      departure: "8:00 AM",
      return: "6:00 PM",
    },
    {
      id: 3,
      title: "Montaña de 7 Colores (CUSCO)",
      description: "Camina entre gigantes andinos, un circuito de belleza natural y mística en Cusco.",
      duration: "14 horas",
      difficulty: "Moderado", // Cambiado para que el filtro funcione
      price: "Desde $45",
      rating: 4.6,
      reviews: 18,
      image: "/montana -colores.jpg",
      highlights: ["Paisajes únicos", "Desayuno incluido", "Transporte privado"],
      departure: "4:30 AM",
      return: "6:30 PM",
    },
    {
      id: 4,
      title: "Laguna Humantay (CUSCO)",
      description: "Caminata a la laguna turquesa más hermosa de Cusco, rodeada de nevados.",
      duration: "12 horas",
      difficulty: "Moderado",
      price: "Desde $38",
      rating: 4.5,
      reviews: 16,
      image: "/laguna-humantay.jpg",
      highlights: ["Laguna turquesa", "Nevado Salkantay", "Guía especializado"],
      departure: "5:00 AM",
      return: "5:00 PM",
    },
    {
      id: 5,
      title: "City Tour (Cusco)",
      description: "La fortaleza de Sacsayhuaman, Qenqo, Puka Pukara, Tambomachay y el Templo del Sol Koricancha (CUSCO)",
      duration: "8 horas",
      difficulty: "Fácil",
      price: "Desde $45",
      rating: 4.7,
      reviews: 14,
      image: "/city-tour.jpg",
      highlights: ["Terrazas de Moray", "Salineras ancestrales", "Pueblo de Chinchero"],
      departure: "9:00 AM",
      return: "3:00 PM",
    },
    {
      id: 6,
      title: "Cuatrimoto Maras y Moray (CUSCO)",
      description: "Siente la adrenalina de las asombrosas Salineras de Maras y las terrazas agrícolas de Moray.",
      duration: "7 horas",
      difficulty: "Fácil",
      price: "Desde $68",
      rating: 4.8,
      reviews: 29,
      image: "/cuatrimoto.png",
      highlights: ["Cuatrimoto", "Salineras", "Moray"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
    {
      id: 7,
      title: "Siete Lagunas de Ausangate (CUSCO)",
      description: "Camina entre gigantes andinos. Un circuito de belleza natural y mística en Cusco.",
      duration: "14 horas",
      difficulty: "Desafiante",
      price: "Desde $43",
      rating: 4.8,
      reviews: 41,
      image: "/siete-lagunas.jpg",
      highlights: ["Lagunas", "Ausangate"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
     {
      id: 8,
      title: "Tour Ciudad Sagrada Caral (LIMA)",
      description: "Viaja 5000 años al pasado, la cuna de la civilización americana y pirámides en Caral.",
      duration: "5 horas",
      difficulty: "Fácil",
      price: "Desde $154",
      rating: 4.8,
      reviews: 28,
      image: "/caral.jpg",
      highlights: ["Caral", "Centro histórico Caral"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
     {
      id: 9,
      title: "Lago Titicaca Uros y Taquile (PUNO)",
      description: "Descubre la vida en las islas flotantes de los Uros y la rica cultura textil de Taquile.",
      duration: "14 horas",
      difficulty: "Fácil",
      price: "Desde $38",
      rating: 4.8,
      reviews: 29,
      image: "/lago-titi.jpeg",
      highlights: ["Qorikancha", "Sacsayhuamán", "Centro histórico"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
     {
      id: 10,
      title: "Peru Selvatico (IQUITOS)",
      description: "Aventura de un día en el Amazonas. Navega sus ríos y descubre la exótica biodiversidad de Iquitos.",
      duration: "14 horas",
      difficulty: "Medio",
      price: "Desde $45",
      rating: 4.8,
      reviews: 15,
      image: "/salva.jpg",
      highlights: ["Selva", "Selvatico", "Iquitos"],
    },
     {
      id: 11,
      title: "Reserva Tambopata (PUERTO MALDONADO)",
      description: "Un paraíso de biodiversidad en el corazón del Amazonas. Explora la selva y su exótica vida silvestre.",
      duration: "13 horas",
      difficulty: "Fácil",
      price: "Desde $60",
      rating: 4.8,
      reviews: 10,
      image: "/reserva.jpg",
      highlights: ["Qorikancha", "Sacsayhuamán", "Centro histórico"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
     {
      id: 12,
      title: "Cañon de Colca (AREQUIPA)",
      description: "Maravíllate con el vuelo del cóndor en uno de los cañones más profundos del mundo.",
      duration: "10 horas",
      difficulty: "Moderado",
      price: "Desde $60",
      rating: 4.8,
      reviews: 22,
      image: "/colca.jpg",
      highlights: ["Qorikancha", "Sacsayhuamán", "Centro histórico"],
      departure: "1:00 PM",
      return: "6:00 PM",
    },
  ];

// --- Opciones de filtros ---
const difficulties = ["Todos", "Fácil", "Moderado", "Desafiante"];
const durations = ["Todos", "Medio día", "Día completo"];


// --- Componente de la página ---
export default function ToursUnDiaPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState("Todos");
  const [selectedDuration, setSelectedDuration] = useState("Todos");

  const handleWhatsAppClick = (tourTitle: string) => {
    const phoneNumber = "51907966198";
    const message = `Hola! Me interesa reservar el tour full day de "${tourTitle}".`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const filteredTours = tours.filter((tour) => {
    const difficultyMatch = selectedDifficulty === "Todos" || tour.difficulty === selectedDifficulty;
    
    // Lógica de duración ajustada
    const durationHours = parseInt(tour.duration);
    const durationMatch =
      selectedDuration === "Todos" ||
      (selectedDuration === "Medio día" && durationHours <= 9) ||
      (selectedDuration === "Día completo" && durationHours > 9);

    return difficultyMatch && durationMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section
          className="relative py-24 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-full.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FULL DAY</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              PERU: La magia de Machu Picchu a sus tesoros ancestrales.¡Una aventura única!
              Un día completo perfectamente organizado.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-6 bg-gray-50 border-b border-gray-200 sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Dificultad:</span>
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={selectedDifficulty === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={`transition-colors ${selectedDifficulty === difficulty ? "bg-primary-600 hover:bg-primary-700 text-white" : "bg-white"}`}
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-700 self-center">Duración:</span>
                {durations.map((duration) => (
                  <Button
                    key={duration}
                    variant={selectedDuration === duration ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedDuration(duration)}
                    className={`transition-colors ${selectedDuration === duration ? "bg-primary-600 hover:bg-primary-700 text-white" : "bg-white"}`}
                  >
                    {duration}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <Card key={tour.id} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                  <div className="relative h-56 w-full">
                    <Image
                      src={tour.image}
                      alt={tour.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3 bg-secondary-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                      {tour.price}
                    </div>
                  </div>

                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-primary-600 mb-2 h-14">{tour.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">{tour.description}</p>

                    <div className="border-t border-b border-gray-100 my-4 py-3 space-y-3 text-sm">
                        <div className="flex justify-between text-gray-700">
                            <span className="font-semibold flex items-center gap-2"><BarChart3 size={16} className="text-primary-600"/> Dificultad:</span>
                            <span>{tour.difficulty}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span className="font-semibold flex items-center gap-2"><Clock size={16} className="text-primary-600"/> Duración:</span>
                            <span>{tour.duration}</span>
                        </div>
                        <div className="flex justify-between text-gray-700">
                            <span className="font-semibold flex items-center gap-2"><Users size={16} className="text-primary-600"/> Grupos:</span>
                            <span>Pequeños</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-1 mt-auto">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-bold text-gray-800">{tour.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({tour.reviews} reviews)</span>
                    </div>
                  </CardContent>
                  <div className="p-4 bg-gray-50">
                    <Button
                      onClick={() => handleWhatsAppClick(tour.title)}
                      className="w-full bg-primary-600 hover:bg-primary-700"
                    >
                      Reserva Ahora
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {filteredTours.length === 0 && (
              <div className="text-center py-16 col-span-full">
                <p className="text-lg text-gray-600">No se encontraron tours con los filtros seleccionados.</p>
                <Button
                  onClick={() => {
                    setSelectedDifficulty("Todos");
                    setSelectedDuration("Todos");
                  }}
                  className="mt-4 bg-primary-600 hover:bg-primary-700"
                >
                  Limpiar Filtros
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
