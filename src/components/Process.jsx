import { steps } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Прозрачно и просто
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Как проходит заказ
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            От заявки до разгрузки. Согласуем стоимость до начала работ.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-0 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-orange-200 via-orange-400 to-orange-200" />

          {steps.map(({ num, title, desc, icon }, i) => (
            <div
              key={num}
              className="flex-1 relative flex md:flex-col items-start md:items-center gap-4 md:gap-0 px-4 md:px-6 pb-8 md:pb-0"
            >
              {/* Mobile vertical connector */}
              {i < steps.length - 1 && (
                <div className="md:hidden absolute left-7 top-16 bottom-0 w-0.5 bg-gradient-to-b from-orange-300 to-orange-100" />
              )}

              {/* Icon circle */}
              <div className="flex-shrink-0 w-14 h-14 bg-orange-50 border-2 border-orange-300 rounded-2xl flex items-center justify-center text-2xl mb-0 md:mb-6 relative z-10">
                {icon}
              </div>

              <div className="md:text-center">
                <div className="text-orange-500 text-xs font-bold mb-1">
                  {num}
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
