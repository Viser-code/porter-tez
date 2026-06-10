import { PHONE, TEL_LINK, WA_LINK } from "../data";

const TG_LINK = "https://t.me/portertez";

const contactItems = [
  {
    icon: "📞",
    title: "Телефон",
    val: PHONE,
    href: TEL_LINK,
  },
  {
    icon: "💬",
    title: "WhatsApp",
    val: PHONE,
    href: WA_LINK,
  },
  {
    icon: "✈️",
    title: "Telegram",
    val: "@portertez",
    href: TG_LINK,
  },
  {
    icon: "📍",
    title: "Адрес",
    val: "ул. Ахунбаева, 137/2, БЦ «Атакент», 3 этаж",
    href: "https://maps.google.com/?q=Ахунбаева+137/2+Бишкек",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Мы рядом
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Свяжитесь с Porter-tez
          </h2>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Работаем 24/7. Звоните, пишите в мессенджер или приходите в офис.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards grid */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {contactItems.map(({ icon, title, val, href }) => (
              <a
                key={title}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-start gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:border-orange-300 hover:shadow-md transition-all group"
              >
                <span className="text-3xl">{icon}</span>
                <div>
                  <div className="text-gray-400 text-xs mb-0.5">{title}</div>
                  <span className="text-gray-900 font-semibold group-hover:text-orange-500 transition-colors">
                    {val}
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={TEL_LINK}
              className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-md shadow-orange-200 text-lg"
            >
              📞 Позвонить сейчас
            </a>
            <a
              href={WA_LINK}
              className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95 text-lg"
            >
              💬 WhatsApp
            </a>
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl transition-all active:scale-95 text-lg"
            >
              ✈️ Telegram
            </a>
          </div>

          {/* Working hours note */}
          <div className="mt-6 bg-orange-50 border border-orange-100 rounded-xl p-4 text-center">
            <p className="text-orange-700 text-sm">
              🕐 Работаем <strong>24/7</strong>. Принимаем наличный и безналичный расчёт, заключаем договор.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
