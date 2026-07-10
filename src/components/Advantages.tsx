import { Wallet, Factory, Clock3, Percent } from "lucide-react";

const ITEMS = [
  {
    icon: Wallet,
    title: "Прозрачная схема оплаты",
    text: "30% при подписании договора, 40% после сборки каркаса, 30% по завершении строительства — без скрытых доплат.",
  },
  {
    icon: Factory,
    title: "Собственное производство",
    text: "Изготавливаем конструкции сами и контролируем каждый этап силами штатного технолога.",
  },
  {
    icon: Clock3,
    title: "От 21 дня «под ключ»",
    text: "Классическая каркасная технология позволяет собрать дом, барнхаус или баню в сжатые сроки.",
  },
  {
    icon: Percent,
    title: "Гарантированная скидка",
    text: "Оставьте номер телефона — рассчитаем стоимость проекта и зафиксируем персональную скидку.",
  },
];

export default function Advantages() {
  return (
    <section className="py-20 sm:py-28 px-5 sm:px-10 md:px-14 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
          <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-white">
            Почему выбирают нас
          </h2>
          <p className="text-white/50 text-sm max-w-xs">
            «Строим — хорошо! Плохо и без нас построят»
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
