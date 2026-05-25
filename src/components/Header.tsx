/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoPrincipal from '../assets/logo-principal.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll height to make standard frosted-glass sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Qué es', href: '#que-es' },
    { name: 'Cómo funciona', href: '#como-funciona' },
    { name: 'Planes', href: '#planes' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Beneficios', href: '#beneficios' },
    { name: 'Requisitos', href: '#requisitos' },
    { name: 'Preguntas', href: '#preguntas' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'py-3 bg-white/70 backdrop-blur-xl saturate-150 border-b border-slate-200/40 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.03)]'
          : 'py-5 bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div
            className="cursor-pointer flex items-center transition-all duration-300 hover:opacity-80 active:scale-95"
            onClick={() => handleScrollTo('#inicio')}
          >
            <img
              src={logoPrincipal}
              alt="Creditivoo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </div>

          {/* Desktop Nav — Links con línea inferior animada */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.href)}
                className="relative py-2 text-slate-600 font-medium tracking-tight text-sm hover:text-[#00E37C] transition-all duration-300 cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-[2px] after:bg-[#00E37C] after:rounded-full hover:after:w-full after:transition-all after:duration-300"
                id={`nav-${item.href.replace('#', '')}`}
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA — Botón Píldora "Glow Magnético" */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleScrollTo('#solicitud')}
              className="rounded-full bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white font-semibold text-sm px-6 py-2.5 shadow-[0_4px_14px_0_rgba(0,227,124,0.3)] hover:shadow-[0_6px_20px_rgba(0,227,124,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              id="cta-header-desktop"
            >
              Solicitar ahora
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Burger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl text-slate-700 hover:text-[#00E37C] hover:bg-slate-100/60 active:scale-90 transition-all duration-200 focus:outline-none"
              aria-label="Toggle Menu"
              id="mobile-menu-btn"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu — Tarjeta Flotante Premium */}
      <div
        className={`lg:hidden absolute inset-x-0 top-full transition-all duration-300 ease-in-out z-40 ${
          isOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-3 invisible pointer-events-none'
        }`}
      >
        <div className="mx-3 mt-2 rounded-2xl bg-white/95 backdrop-blur-2xl border border-slate-200/60 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.12)] overflow-hidden">
          <div className="px-2 pt-3 pb-4 space-y-0.5">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.href)}
                className="block w-full text-left px-4 py-3 text-slate-600 hover:bg-[#00E37C]/5 hover:text-[#00E37C] text-[15px] font-medium rounded-xl transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="px-4 pb-4 pt-2 border-t border-slate-100/80">
            <button
              onClick={() => handleScrollTo('#solicitud')}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white font-semibold text-center flex items-center justify-center gap-2 shadow-[0_4px_14px_0_rgba(0,227,124,0.3)] hover:shadow-[0_6px_20px_rgba(0,227,124,0.4)] active:scale-[0.98] transition-all duration-300 text-[15px] cursor-pointer"
              id="cta-header-mobile"
            >
              Solicitar ahora
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

    </header>
  );
}
