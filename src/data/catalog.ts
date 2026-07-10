export type CatalogItem = {
  id: string;
  name: string;
  size: string;
  price: string;
  image: string;
};

export type CatalogCategory = {
  key: string;
  title: string;
  items: CatalogItem[];
};

const tilda = (hash: string, file: string, width = 700) =>
  `https://static.tildacdn.com/${hash}/-/resize/${width}x/${file}`;

export const catalog: CatalogCategory[] = [
  {
    key: "houses",
    title: "Каркасные дома",
    items: [
      { id: "uyut", name: "Уют", size: "18 м²", price: "от 550 000 ₽", image: tilda("tild3363-3361-4661-b364-303233356632", "_.jpg") },
      { id: "lyudmila", name: "Людмила", size: "36 м² + терраса", price: "от 950 000 ₽", image: tilda("tild3639-6663-4238-a461-356239666437", "_.jpg") },
      { id: "mechta", name: "Мечта", size: "54 м²", price: "от 1 280 000 ₽", image: tilda("tild3162-3431-4533-b561-336666643635", "_.jpg") },
      { id: "fazenda", name: "Фазенда", size: "72 м²", price: "от 1 580 000 ₽", image: tilda("tild3534-3235-4734-a339-623462373639", "_.jpg") },
      { id: "svetlitsa", name: "Светлица", size: "53 м²", price: "от 1 710 000 ₽", image: tilda("tild3164-6137-4631-b162-653538643834", "dk047_01_07.jpg") },
      { id: "zagorodny", name: "Загородный", size: "55 м²", price: "от 1 850 000 ₽", image: tilda("tild3233-3263-4432-a438-376335376231", "dk005_01_05.jpg") },
      { id: "semeyny", name: "Семейный", size: "72 м²", price: "от 1 870 000 ₽", image: tilda("tild3236-6363-4166-a232-316137386461", "dk140_01_10.jpg") },
      { id: "otrada", name: "Отрада", size: "76 м² + гараж", price: "от 1 980 000 ₽", image: tilda("tild6263-3834-4965-a261-393732616661", "dk018_01_08.jpg") },
    ],
  },
  {
    key: "barnhouses",
    title: "Барнхаусы",
    items: [
      { id: "dachny-barn", name: "Дачный Барн", size: "6×10 м", price: "от 1 540 000 ₽", image: tilda("tild6162-6130-4062-b433-623332336333", "__.png") },
      { id: "ambar", name: "Амбар", size: "5×10 м", price: "от 1 360 000 ₽", image: tilda("tild3962-6565-4036-b665-633732393163", "dbh038_01.jpg") },
      { id: "ochag", name: "Очаг", size: "6×10 м", price: "от 1 240 000 ₽", image: tilda("tild6530-6335-4332-a231-353765346330", "dbh036_01.jpg") },
      { id: "ugolok", name: "А-Frame «Уголок»", size: "6×6 м", price: "от 1 150 000 ₽", image: tilda("tild3064-3664-4263-a437-303065656536", "__.png") },
    ],
  },
  {
    key: "banya",
    title: "Бани",
    items: [
      { id: "optima", name: "Мобильная баня «Оптима»", size: "2,2×3 м", price: "от 430 000 ₽", image: tilda("tild3965-3537-4466-b462-326138663536", "Gemini_Generated_Ima.png") },
      { id: "elochka", name: "Мобильная баня «Ёлочка»", size: "2,3×5 м", price: "665 000 ₽", image: tilda("tild3865-3466-4362-a439-383762383838", "mb039_01.jpg") },
      { id: "dachnaya", name: "Каркасная баня «Дачная»", size: "6×3 м + терраса", price: "от 825 000 ₽", image: tilda("tild3932-6466-4262-a533-333164636538", "bk037_01_07.jpg") },
      { id: "patio", name: "Каркасная баня «Патио»", size: "7×5 м + терраса", price: "от 1 730 000 ₽", image: tilda("tild6330-3166-4561-b938-656239333134", "bk067_01_07.jpg") },
    ],
  },
];

export const contacts = {
  phone: "+7 (8442) 987-600",
  phoneHref: "tel:+78442987600",
  mobile: "+7 (917) 338-76-00",
  mobileHref: "tel:+79173387600",
  whatsapp: "https://wa.me/79173387600",
  email: "roadtel@mail.ru",
  emailHref: "mailto:roadtel@mail.ru",
  address: "г. Волгоград, массив № 5, 179, СНТ Мичуринец",
  addressAlt: "ул. Шурухина, 90/179",
  mapHref: "https://yandex.ru/maps/?text=" + encodeURIComponent("Волгоград, СНТ Мичуринец, массив 5, 179"),
};
