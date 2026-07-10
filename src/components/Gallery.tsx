import { gallery } from "../data/gallery";

export default function Gallery() {
  return (
    <section id="gallery" className="py-7 sm:py-10 px-5 sm:px-10 md:px-14 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 sm:mb-6">
          Фотогалерея
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
          {gallery.map((item, i) => (
            <div key={item.id} className="aspect-square rounded-xl overflow-hidden bg-gray-100">
              <img
                src={item.image}
                alt={`Бабкина дача — построенный объект ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
