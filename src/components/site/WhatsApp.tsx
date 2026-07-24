import { MessageCircle } from "lucide-react";

export function WhatsApp() {
  return (
    <a
      href="https://wa.me/251900000000?text=Hello%20ZYGC%20Export%2C%20I%27d%20like%20to%20inquire%20about%20your%20products."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:brightness-110 hover:scale-105 transition-transform"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium hidden sm:inline">WhatsApp</span>
    </a>
  );
}
