import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5492941547473";
const MESSAGE = "Hola AMJ Servicios, quisiera solicitar información.";

const WhatsAppFloat = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-2xl hover:scale-110 transition-transform animate-float-y"
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(142_70%_45%)] opacity-60 animate-ping" />
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 relative z-10" fill="currentColor" />
    </a>
  );
};

export default WhatsAppFloat;
