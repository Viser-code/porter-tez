import { services } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Что мы делаем
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Услуги Porter-tez
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Грузовое такси, услуги грузчиков и вывоз мусора для частных
            клиентов и бизнеса.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon, title, desc, tag }) => (
            <div
              key={title}
              className="relative bg-white border border-gray-100 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all group shadow-sm"
            >
              {tag && (
                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              )}
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-orange-500 transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
