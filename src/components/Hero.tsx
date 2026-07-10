import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import RevealLayer from "./RevealLayer";
import { contacts } from "../data/catalog";

const BG_IMAGE_1 =
  "https://static.tildacdn.com/tild3363-3361-4661-b364-303233356632/-/resize/1400x/_.jpg";
const BG_IMAGE_2 =
  "https://static.tildacdn.com/tild6439-3139-4732-a334-613632353337/-/resize/700x/____1.png";

const NAV_ITEMS = [
  { label: "Главная", href: "#hero" },
  { label: "Дома", href: "#houses" },
  { label: "Барнхаусы", href: "#barnhouses" },
  { label: "Бани", href: "#banya" },
  { label: "Галерея", href: "#gallery" },
  { label: "Контакты", href: "#contacts" },
];

export default function Hero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="hero" className="relative w-full overflow-hidden h-screen bg-black" style={{ height: "100dvh" }}>
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat z-10 hero-zoom"
        style={{ backgroundImage: `url(${BG_IMAGE_1})` }}
      />

      <RevealLayer image={BG_IMAGE_2} cursorX={cursorPos.x} cursorY={cursorPos.y} />

      <nav className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between p-4 sm:p-5">
        <a href="#hero" className="flex items-center gap-2">
          <svg width="26" height="26" viewBox="0 0 256 256" fill="#ffffff">
            <path d="M128 26 L246 122 L214 122 L214 230 L42 230 L42 122 L10 122 Z" />
          </svg>
          <span className="text-white text-2xl font-playfair italic">Бабкина дача</span>
        </a>

        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-2 py-2 items-center gap-1">
          {NAV_ITEMS.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              className={
                i === 0
                  ? "px-4 py-1.5 rounded-full text-sm font-medium text-white"
                  : "px-4 py-1.5 rounded-full text-sm font-medium text-white/80 hover:bg-white/20 hover:text-white transition-colors"
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={contacts.mobileHref}
          className="hidden md:block bg-white text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gray-100"
        >
          Заказать звонок
        </a>

        <button
          type="button"
          aria-label="Меню"
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden text-white p-2"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden fixed top-16 left-4 right-4 z-[100] bg-white/95 backdrop-blur-md rounded-2xl p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              {item.label}
            </a>
          ))}
          <a
            href={contacts.mobileHref}
            className="mt-2 bg-[#e8702a] text-white text-sm font-semibold px-4 py-2.5 rounded-xl text-center"
          >
            Заказать звонок
          </a>
        </div>
      )}

      <div className="absolute top-[14%] left-0 right-0 z-50 flex flex-col items-center text-center px-5 pointer-events-none">
        <h1 className="text-white leading-[0.95]">
          <span
            className="block font-playfair italic font-normal text-5xl sm:text-7xl md:text-8xl hero-anim hero-reveal"
            style={{ letterSpacing: "-0.05em", animationDelay: "0.25s" }}
          >
            Дом, который
          </span>
          <span
            className="block font-normal text-5xl sm:text-7xl md:text-8xl -mt-1 hero-anim hero-reveal"
            style={{ letterSpacing: "-0.08em", animationDelay: "0.42s" }}
          >
            строится навсегда
          </span>
        </h1>
      </div>

      <div
        className="hidden sm:block absolute bottom-14 left-10 md:left-14 max-w-[260px] z-50 hero-anim hero-fade"
        style={{ animationDelay: "0.7s" }}
      >
        <p className="text-sm text-white/80 leading-relaxed">
          Строим каркасные дома, барнхаусы и бани по классической технологии — с собственным
          производством и контролем технолога на каждом этапе.
        </p>
      </div>

      <div
        className="absolute bottom-10 sm:bottom-24 left-5 right-5 sm:left-auto sm:right-10 md:right-14 max-w-full sm:max-w-[260px] z-50 flex flex-col items-start gap-4 sm:gap-5 hero-anim hero-fade"
        style={{ animationDelay: "0.85s" }}
      >
        <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
          Наведите курсор на фото, чтобы заглянуть внутрь и увидеть планировку дома «Уют» —
          от фундамента до кровли. Строим «под ключ» от 21 дня.
        </p>
        <a
          href={contacts.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#e8702a] hover:bg-[#d2611f] text-white text-sm font-medium px-7 py-3 rounded-full transition-all hover:scale-[1.03] active:scale-95 hover:shadow-lg hover:shadow-[#e8702a]/30"
        >
          Оставить заявку
        </a>
        <p className="text-[11px] text-white/50 leading-snug max-w-[220px]">
          Нажимая на кнопку, вы даёте согласие на обработку персональных данных и соглашаетесь с{" "}
          <a href="#privacy" className="underline hover:text-white/80">
            политикой конфиденциальности
          </a>
        </p>
      </div>
    </section>
  );
}
