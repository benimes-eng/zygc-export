import { MessageCircle } from "lucide-react";

export function WhatsApp() {
  return (
    <a
      href="#"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-4 py-3 shadow-lg hover:brightness-110 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="text-sm font-medium">WhatsApp</span>
    </a>
  );
}
