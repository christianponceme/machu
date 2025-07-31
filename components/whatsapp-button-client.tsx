'use client'

import { Button } from "@/components/ui/button";

interface WhatsAppButtonClientProps {
  tourTitle: string;
  buttonText: string;
  className?: string;
}

export default function WhatsAppButtonClient({ tourTitle, buttonText, className }: WhatsAppButtonClientProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "51907966198";
    const message = `Hola, me interesa el tour ${tourTitle}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button onClick={handleWhatsAppClick} className={className}>
      {buttonText}
    </Button>
  );
}
