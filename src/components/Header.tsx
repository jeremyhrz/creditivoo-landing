/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoPrincipal from '../assets/logo-principal.png';
import type { AppView } from '../App';

type NavItem = {
  name: string;
  view: AppView;
};

type HeaderProps = {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
};

const menuItems: NavItem[] = [
  { name: 'Inicio', view: 'inicio' },
  { name: 'Qué es', view: 'que-es' },
  { name: 'Cómo funciona', view: 'como-funciona' },
  { name: 'Planes', view: 'planes' },
  { name: 'Simulador', view: 'simulador' },
  { name: 'Beneficios', view: 'beneficios' },
  { name: 'Requisitos', view: 'requisitos' },
  { name: 'Preguntas', view: 'preguntas' },
];

function Header({ currentView, onViewChange }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Monitor scroll height to make standard frosted-glass sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const handleNavigation = useCallback((view: AppView) => {
    setIsOpen(false);
    setIsAnimating(false);
    requestAnimationFrame(() => {
      setIsAnimating(true);
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
      animationTimeoutRef.current = setTimeout(() => setIsAnimating(false), 1000);
    });
    onViewChange(view);
  }, [onViewChange]);

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
            className={`cursor-pointer flex items-center transition-transform duration-[1000ms] ease-out ${
              isAnimating ? 'scale-105 rotate-1' : 'scale-100 rotate-0'
            }`}
            onClick={() => handleNavigation('inicio')}
          >
            <img
              src={logoPrincipal}
              alt="Creditivoo"
              className="h-8 md:h-10 w-auto object-contain"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Nav — Links con línea inferior animada */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => {
              const isActive = currentView === item.view;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.view)}
                  className={`relative py-2 font-medium tracking-tight text-sm transition-all duration-300 cursor-pointer after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#00E37C] after:rounded-full after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-[#00E37C] after:w-full'
                      : 'text-slate-600 hover:text-[#00E37C] after:w-0 hover:after:w-full'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA — Botón Píldora "Glow Magnético" */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavigation('solicitud')}
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
                onClick={() => handleNavigation(item.view)}
                className={`block w-full text-left px-4 py-3 text-[15px] font-medium rounded-xl transition-all duration-200 ${
                  currentView === item.view ? 'text-[#00E37C]' : 'text-slate-600 hover:bg-[#00E37C]/5 hover:text-[#00E37C]'
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>
          <div className="px-4 pb-4 pt-2 border-t border-slate-100/80">
            <button
              onClick={() => handleNavigation('solicitud')}
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

export default memo(Header);
