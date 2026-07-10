import { Wallet, Factory, Clock3 } from "lucide-react";

const ITEMS = [
  {
    icon: Wallet,
    title: "Прозрачная схема оплаты",
    text: "30% в момент заключения договора, 40% после установки силового каркаса и кровли, 30% после подписания акта выполненных работ.",
  },
  {
    icon: Factory,
    title: "Собственное производство",
    text: "Силовой каркас собирается по классической каркасной технологии на собственном производстве под контролем технолога.",
  },
  {
    icon: Clock3,
    title: "Сроки строительства",
    text: "Строительство дачного дома по каркасной технологии в сравнении с блочным строением — от 21 дня с отделкой «под ключ».",
  },
];

export default function Advantages() {
  return (
    <section className="py-7 sm:py-10 px-5 sm:px-10 md:px-14 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-6">
          <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-white">
            Почему выбирают нас
          </h2>
          <p className="text-white/50 text-sm max-w-xs">
            «Строим — хорошо! Плохо и без нас построят»
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
          {ITEMS.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 p-6 bg-white/5">
              <Icon className="text-[#e8702a]" size={28} />
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-white/60 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
