"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Ready() { // ¡Componente renombrado a 'Ready'!
  return (
    <div className="bg-secondary-100 p-6 rounded-lg text-center  ">
      <h3 className="text-2xl font-bold text-primary-600 mb-4">¿Listo para tu Aventura?</h3>
      <p className="text-gray-700 mb-6">
        Planificar tu visita a Machu Picchu o alguna parte del Perú puede parecer abrumador, pero con la información correcta y un buen tour
        operador, será la experiencia de tu vida.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href="/tours">
          <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
            Ver Nuestros Tours
          </Button>
        </Link>
        <Link href="/tours-un-dia">
          <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
            Ver Nuestros Full Day
          </Button>
        </Link>
        <Link href="/paquetes">
          <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
            Ver Nuestros Paquetes
          </Button>
        </Link>
      </div>
    </div>
  );
}