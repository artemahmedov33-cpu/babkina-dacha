import { contacts } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white/60 px-5 sm:px-10 md:px-14 py-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-4 text-sm">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 256 256" fill="#ffffff" className="opacity-80">
              <path d="M128 26 L246 122 L214 122 L214 230 L42 230 L42 122 L10 122 Z" />
            </svg>
            <span className="font-playfair italic text-white text-lg">Бабкина дача</span>
          </div>
          <p>{contacts.address} · {contacts.phone}</p>
          <a href="#privacy" className="hover:text-white transition-colors">
            Политика конфиденциальности
          </a>
        </div>
        <div className="border-t border-white/10 pt-4 flex flex-col sm:flex-row justify-between gap-2 text-xs text-white/40">
          <p>Любое использование материалов, текста, фотографий с данного сайта будет преследоваться по закону.</p>
          <p>© {new Date().getFullYear()} Бабкина дача. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
