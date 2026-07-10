import { contacts } from "../data/catalog";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white/60 px-5 sm:px-10 md:px-14 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 256 256" fill="#ffffff" className="opacity-80">
            <path d="M128 26 L246 122 L214 122 L214 230 L42 230 L42 122 L10 122 Z" />
          </svg>
          <span className="font-playfair italic text-white text-lg">Бабкина дача</span>
        </div>
        <p>{contacts.address} · {contacts.phone}</p>
        <p>© {new Date().getFullYear()} Бабкина дача. Все права защищены.</p>
      </div>
    </footer>
  );
}
