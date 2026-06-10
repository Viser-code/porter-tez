import { useState, useEffect } from "react";
import { TEL_LINK, WA_LINK } from "../data";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 flex gap-3">
      <a
        href={TEL_LINK}
        className="flex-1 bg-orange-500 text-white text-center py-3.5 rounded-xl font-bold shadow-lg shadow-orange-500/40 active:scale-95 transition-transform"
      >
        📞 Позвонить
      </a>
      <a
        href={WA_LINK}
        className="flex-1 bg-green-600 text-white text-center py-3.5 rounded-xl font-bold shadow-lg shadow-green-600/30 active:scale-95 transition-transform"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
