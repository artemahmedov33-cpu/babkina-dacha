import { Phone, MessageCircle, Mail, MapPin, Navigation } from "lucide-react";
import { contacts } from "../data/catalog";

export default function Contacts() {
  return (
    <section id="contacts" className="py-7 sm:py-10 px-5 sm:px-10 md:px-14 bg-[#f6f2ec]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-playfair italic text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-3">
          Контакты
        </h2>
        <p className="text-gray-600 max-w-xl mb-6">
          Жильё, которое Вам по карману. Позвоните или напишите — рассчитаем стоимость
          вашего проекта и ответим на любые вопросы.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href={contacts.phoneHref}
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <Phone className="text-[#e8702a]" size={24} />
            <div>
              <p className="text-sm text-gray-500">Телефон</p>
              <p className="font-semibold text-gray-900">{contacts.phone}</p>
            </div>
          </a>

          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <MessageCircle className="text-[#e8702a]" size={24} />
            <div>
              <p className="text-sm text-gray-500">Мобильный и WhatsApp</p>
              <p className="font-semibold text-gray-900">{contacts.mobile}</p>
            </div>
          </a>

          <a
            href={contacts.emailHref}
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <Mail className="text-[#e8702a]" size={24} />
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-semibold text-gray-900">{contacts.email}</p>
            </div>
          </a>

          <a
            href={contacts.mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 rounded-2xl bg-white p-6 hover:shadow-lg transition-shadow"
          >
            <MapPin className="text-[#e8702a]" size={24} />
            <div>
              <p className="text-sm text-gray-500">Адрес</p>
              <p className="font-semibold text-gray-900">{contacts.address}</p>
              <p className="text-sm text-gray-500 mt-0.5">{contacts.addressAlt}</p>
            </div>
          </a>
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl bg-white p-6 max-w-2xl">
          <Navigation className="text-[#e8702a] shrink-0 mt-0.5" size={20} />
          <p className="text-sm text-gray-600">{contacts.directions}</p>
        </div>
      </div>
    </section>
  );
}
