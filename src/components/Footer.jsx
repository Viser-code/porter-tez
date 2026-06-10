import { TEL_LINK, WA_LINK } from "../data";

const TG_LINK = "https://t.me/portertez";

const links = [
  ["#services", "Услуги"],
  ["#process", "Как работаем"],
  ["#pricing", "Тарифы"],
  ["#reviews", "Отзывы"],
  ["#contact", "Контакты"],
];

export default function Footer() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-white border-t border-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center text-white font-black text-lg">
              P
            </div>
            <span className="text-gray-900 font-black text-xl">
              Porter<span className="text-orange-500">-tez</span>
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className="text-gray-500 hover:text-orange-500 text-sm transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-6 border-t border-gray-100">
          <p className="text-gray-400 text-sm">
            © 2019–2025 Porter-tez. Портер такси, вывоз мусора и грузоперевозки по Бишкеку.
          </p>
          <div className="flex gap-3">
            <a
              href={TEL_LINK}
              className="bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg transition-colors"
            >
              📞 Позвонить
            </a>
            <a
              href={WA_LINK}
              className="bg-green-50 hover:bg-green-100 border border-green-200 text-green-700 text-sm px-4 py-2 rounded-lg transition-colors"
            >
              💬 WhatsApp
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 text-sm px-4 py-2 rounded-lg transition-colors"
            >
              ✈️ Telegram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
