import { useState, useEffect } from 'react'
import { PHONE, TEL_LINK, WA_LINK } from '../data'

const navLinks = [
  ['#services', 'Услуги'],
  ['#process', 'Как работаем'],
  ['#pricing', 'Тарифы'],
  ['#reviews', 'Отзывы'],
  ['#contact', 'Контакты'],
]

export default function NavBar({ menuOpen, setMenuOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur shadow-md shadow-gray-200/60'
          : 'bg-white/90 backdrop-blur'
      }`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={e => scrollTo(e, '#hero')} className="flex items-center gap-2">
          <div className="max-w-16 max-h-16 rounded-lg flex items-center justify-center text-white font-black text-lg">
            <img src="logoPorter.png" alt="logoPorter.png" />
          </div>
          <span className="text-gray-900 font-black text-xl tracking-tight">
            Porter<span className="text-orange-500">-tez</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={e => scrollTo(e, href)}
              className="text-gray-600 hover:text-orange-500 text-sm font-medium transition-colors">
              {label}
            </a>
          ))}
          <a
            href={TEL_LINK}
            className="bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors shadow-sm shadow-orange-200">
            {PHONE}
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню">
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-800 transition-all ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-5 shadow-lg">
          {navLinks.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={e => scrollTo(e, href)}
              className="block py-3 text-gray-700 border-b border-gray-100 font-medium">
              {label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={TEL_LINK}
              className="bg-orange-500 text-white text-center py-3 rounded-xl font-semibold">
              📞 Позвонить
            </a>
            <a
              href={WA_LINK}
              className="bg-green-600 text-white text-center py-3 rounded-xl font-semibold">
              💬 WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
