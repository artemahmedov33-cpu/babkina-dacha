import { PhoneCall, MessageCircle } from "lucide-react";
import { contacts } from "../data/catalog";

export function CallbackBar() {
  const message = "Здравствуйте! Оставляю телефон, чтобы зафиксировать гарантированную скидку.";
  const waHref = `${contacts.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-8 sm:py-10 px-5 sm:px-10 md:px-14 bg-[#e8702a]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-white text-xl sm:text-2xl font-semibold">Перезвоните мне!</h3>
          <p className="text-white/85 text-sm mt-1">
            Оставьте свой телефон и зафиксируйте гарантированную скидку
          </p>
        </div>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
        >
          <PhoneCall size={16} />
          Оставить телефон
        </a>
      </div>
    </section>
  );
}

export function CallbackFab() {
  return (
    <a
      href={contacts.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-5 right-5 z-[90] flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 hover:scale-105 transition-transform"
    >
      <MessageCircle size={26} />
    </a>
  );
}
