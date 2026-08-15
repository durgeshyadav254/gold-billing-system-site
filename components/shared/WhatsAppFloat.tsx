import { SITE, whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.03] hover:shadow-xl"
      aria-label={`WhatsApp ${SITE.whatsapp}`}
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Buy · {SITE.whatsapp}</span>
    </a>
  );
}
