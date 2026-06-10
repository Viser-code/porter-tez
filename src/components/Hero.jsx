import { TEL_LINK, PHONE } from "../data";

const stats = [
  { val: "20 мин", label: "Среднее время подачи" },
  { val: "6 000+", label: "Успешных заказов" },
  { val: "24/7", label: "Принимаем заявки" },
];

const tags = ["Грузоперевозки по городу", "Вывоз мусора", "Портер на заказ"];

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-200/50 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-700 text-sm font-medium">
                Работаем 24/7 · Подача от 20 минут
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
              Грузовое такси
              <br />
              <span className="text-orange-500">и вывоз мусора</span>
              <br />
              <span className="text-gray-500 text-3xl sm:text-4xl font-bold">
                в Бишкеке
              </span>
            </h1>

            <p className="text-gray-600 text-lg max-w-xl mb-8 leading-relaxed">
              Перевозим стройматериалы, доставляем бытовую технику, вывозим
              строительный мусор по Бишкеку и области. Фиксируем цену{" "}
              <strong className="text-gray-900">до выезда</strong>.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((t) => (
                <span
                  key={t}
                  className="bg-white border border-gray-200 text-gray-600 text-sm px-3 py-1 rounded-full shadow-sm"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-14">
              <button
                onClick={() => scrollTo("#contact")}
                className="bg-orange-500 hover:bg-orange-400 active:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-200 active:scale-95"
              >
                Заказать портер
              </button>
              <a
                href={TEL_LINK}
                className="flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-500 font-semibold px-8 py-4 rounded-xl text-lg transition-all active:scale-95 bg-white"
              >
                <span>📞</span> {PHONE}
              </a>
            </div>
          </div>

          {/* Right column — Stats */}
          <div className="hidden lg:grid grid-cols-1 gap-5">
            {stats.map(({ val, label }) => (
              <div
                key={val}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex items-center gap-5"
              >
                <div className="text-orange-500 font-black text-4xl w-28">{val}</div>
                <div className="text-gray-500 text-base leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats mobile */}
        <div className="grid grid-cols-3 gap-4 max-w-lg lg:hidden">
          {stats.map(({ val, label }) => (
            <div
              key={val}
              className="bg-white border border-gray-100 rounded-xl p-3 text-center shadow-sm"
            >
              <div className="text-orange-500 font-black text-xl sm:text-2xl">
                {val}
              </div>
              <div className="text-gray-500 text-xs mt-1 leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400">
        <span className="text-xs">Прокрутите</span>
        <svg
          className="w-4 h-4 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
