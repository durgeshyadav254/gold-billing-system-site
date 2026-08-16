import { SITE, whatsappLink } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed right-6 bottom-6 z-50 flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#25D366]/30 transition hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#25D366]/40"
      aria-label={`WhatsApp ${SITE.whatsapp}`}
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-0" />
      <MessageCircle size={22} className="relative z-10" />
      <span className="relative z-10 hidden sm:inline">
        Buy · {SITE.whatsapp}
      </span>
      <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-gold" />
    </a>
  );
}
