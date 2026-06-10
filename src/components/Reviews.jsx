import { useState, useEffect, useRef } from "react";
import { reviews } from "../data";
import StarRating from "./StarRating";

export default function Reviews() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const next = () => setActive((a) => (a + 1) % reviews.length);
  const prev = () => setActive((a) => (a - 1 + reviews.length) % reviews.length);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  const r = reviews[active];

  return (
    <section id="reviews" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <span className="text-orange-500 text-sm font-semibold uppercase tracking-widest">
            Нам доверяют
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mt-2">
            Отзывы клиентов
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Review card */}
          <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 relative shadow-sm">
            <div className="text-6xl text-orange-200 font-serif absolute top-4 left-6 leading-none select-none">
              "
            </div>

            <StarRating n={r.rating} />

            <p className="text-gray-700 text-lg leading-relaxed mt-4 mb-8 relative z-10">
              {r.text}
            </p>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                style={{ backgroundColor: r.color }}
              >
                {r.avatar}
              </div>
              <div>
                <div className="text-gray-900 font-bold">{r.name}</div>
                <div className="text-gray-400 text-sm">{r.role}</div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => { resetTimer(); prev(); }}
              className="w-10 h-10 border border-gray-200 hover:border-orange-400 text-gray-500 hover:text-orange-500 rounded-full flex items-center justify-center transition-all"
            >
              ←
            </button>

            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { resetTimer(); setActive(i); }}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-6 bg-orange-500" : "w-2 bg-gray-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { resetTimer(); next(); }}
              className="w-10 h-10 border border-gray-200 hover:border-orange-400 text-gray-500 hover:text-orange-500 rounded-full flex items-center justify-center transition-all"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
