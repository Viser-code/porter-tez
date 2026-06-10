import { plans } from "../data";

export default function Pricing() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="pricing" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Без скрытых доплат
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Тарифы
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Фиксированная цена на популярные услуги. Для крупных заказов —
            индивидуальный расчёт.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {plans.map(({ name, sub, price, unit, highlight, features }) => (
            <div
              key={name}
              className={`relative rounded-2xl p-6 border flex flex-col ${
                highlight
                  ? "bg-orange-500 border-orange-400 shadow-xl shadow-orange-200"
                  : "bg-white border-gray-100 shadow-sm"
              }`}
            >
              <div
                className={`text-sm font-medium mb-1 ${
                  highlight ? "text-orange-100" : "text-gray-400"
                }`}
              >
                {sub}
              </div>
              <h3 className={`text-xl font-black mb-1 ${highlight ? "text-white" : "text-gray-900"}`}>{name}</h3>

              <div
                className={`flex items-baseline gap-1 mb-6 mt-2 ${
                  highlight ? "text-white" : "text-orange-500"
                }`}
              >
                <span className="text-3xl font-black">{price}</span>
                <span
                  className={`text-sm ${
                    highlight ? "text-orange-100" : "text-gray-400"
                  }`}
                >
                  {unit}
                </span>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        highlight ? "text-white" : "text-orange-500"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        highlight ? "text-orange-50" : "text-gray-600"
                      }`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollTo("#contact")}
                className={`w-full py-3 rounded-xl font-bold transition-all active:scale-95 ${
                  highlight
                    ? "bg-white text-orange-600 hover:bg-orange-50"
                    : "bg-orange-500 hover:bg-orange-400 text-white"
                }`}
              >
                Оставить заявку
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
