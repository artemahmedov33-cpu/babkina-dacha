import { ArrowRight } from "lucide-react";
import { catalog, contacts } from "../data/catalog";

export default function Catalog() {
  return (
    <>
      {catalog.map((category, idx) => (
        <section
          key={category.key}
          id={category.key}
          className={`py-7 sm:py-10 px-5 sm:px-10 md:px-14 ${idx % 2 === 1 ? "bg-[#f6f2ec]" : "bg-white"}`}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">
              {category.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {category.items.map((item) => {
                const message = `Здравствуйте! Интересует ${category.title.toLowerCase()} «${item.name}» (${item.size}).`;
                const waHref = `${contacts.whatsapp}?text=${encodeURIComponent(message)}`;
                return (
                  <div key={item.id} className="group flex flex-col">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
                      {item.badge && (
                        <span
                          className={`absolute top-2.5 left-2.5 z-10 text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full text-white ${
                            item.badge === "ХИТ" ? "bg-[#e8702a]" : "bg-emerald-600"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                      <img
                        src={item.image}
                        alt={`${item.name}, ${item.size}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.size}</p>
                    <p className="mt-1 text-base font-semibold text-[#e8702a]">{item.price}</p>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-[#e8702a] transition-colors"
                    >
                      Узнать подробнее <ArrowRight size={15} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
