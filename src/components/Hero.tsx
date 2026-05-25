/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useCallback, memo } from 'react';
import {
  ArrowRight,
  Calculator,
  CheckCircle,
  Sparkles,
  Bell,
  HelpCircle,
  Eye,
  EyeOff,
  Coins,
  Receipt,
  Gem,
  CreditCard,
  Laptop,
  Scan,
  MoreHorizontal
} from 'lucide-react';

import MockupPantallaApp from '../assets/mockup-pantalla-app.png';
import BannerPlanPlus from '../assets/banner-plan-plus.gif';

function Hero() {
  const handleScrollTo = useCallback((id: string) => {
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-white select-none"
    >
      {/* Subtle dot-grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.012)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(0,0,0,0.012)_1.5px,transparent_1.5px)] bg-[size:32px_32px] pointer-events-none opacity-80" />

      {/* Glow de Fondo Profundo — esquina superior derecha */}
      <div className="absolute top-0 right-0 w-[clamp(320px,45vw,600px)] h-[clamp(320px,45vw,600px)] bg-[#00E37C]/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Secondary subtle glow — bottom-left para equilibrio */}
      <div className="absolute -bottom-32 -left-32 w-[clamp(260px,35vw,400px)] h-[clamp(260px,35vw,400px)] bg-slate-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

          {/* ═══════════════════════════════════════════
              LEFT COLUMN — Messaging & CTAs
              ═══════════════════════════════════════════ */}
          <div className="lg:col-span-6 flex flex-col space-y-7 text-left">

            {/* Chip badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00E37C]/8 border border-[#00E37C]/15 text-[#00AA5B] text-xs font-semibold tracking-wide uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5 fill-[#00AA5B]" />
              El financiamiento exclusivo de IVOO
            </span>

            {/* Tipografía de Silicon Valley */}
            <h1 className="font-extrabold text-slate-900 tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Creditivoo
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E37C] to-emerald-700">
                Financia tus deseos
              </span>
              <br />
              tecnológicos hoy.
            </h1>

            {/* Subtexto elegante */}
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl font-normal leading-relaxed">
              Compra tecnología, electrodomésticos y productos seleccionados en las tiendas IVOO de todo el país con planes flexibles, cuotas predecibles y beneficios acumulables de inmediato.
            </p>

            {/* Quote card */}
            <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/60 shadow-sm max-w-lg backdrop-blur-sm">
              <span className="text-base md:text-lg font-medium text-[#008A4B] italic leading-snug">
                \u201cYa no hace falta tener todo pa&apos; tenerlo todo 😉\u201d
              </span>
            </div>

            {/* Trust labels */}
            <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-slate-500 text-sm font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#00E37C]" /> Sin bancos tradicionales
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#00E37C]" /> Sin vueltas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#00E37C]" /> Sin letra chiquita
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-1">
              <button
                onClick={() => handleScrollTo('#solicitud')}
                className="rounded-full bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white font-semibold text-base sm:px-8 px-5 py-4 min-h-[44px] shadow-[0_4px_14px_0_rgba(0,227,124,0.3)] hover:shadow-[0_6px_20px_rgba(0,227,124,0.4)] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 ease-in-out flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-primary-cta"
              >
                Solicitar ahora
                <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => handleScrollTo('#simulador')}
                className="rounded-full bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base sm:px-8 px-5 py-4 min-h-[44px] border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md active:scale-[0.98] transition-all duration-300 ease-in-out flex items-center justify-center gap-2.5 cursor-pointer"
                id="hero-secondary-cta"
              >
                <Calculator className="w-5 h-5 text-[#00AA5B]" />
                Simular mi compra
              </button>
            </div>

          </div>

          {/* ═══════════════════════════════════════════
              RIGHT COLUMN — Mockup Premium Flotante
              ═══════════════════════════════════════════ */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">

            {/* Glow detrás del dispositivo */}
            <div className="absolute w-80 h-80 rounded-full bg-[#00E37C]/8 blur-[80px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Mockup Premium — envoltorio flotante con micro-interacción */}
            <div className="w-full max-w-[340px] lg:max-w-[360px] transition-all duration-700 ease-out hover:-translate-y-3 hover:scale-[1.01] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] relative">

              {/* Contenedor Base del Mockup */}
              <div className="relative w-full aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] border-[5px] border-slate-900 bg-slate-900">

                {/* Capa Base: Pantalla de la App estática */}
                <img
                  src={MockupPantallaApp}
                  alt="Creditivoo App Mockup"
                  className="w-full h-full object-cover"
                  width={900}
                  height={1950}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />

                {/* Capa Superior: GIF Animado (Imán Visual) */}
                {/* Ajuste definitivo: subido un poco para mostrar “descuento” y “ayuda” sin exponer el borde superior */}
                <img
                  src={BannerPlanPlus}
                  alt="Banner Animado Plan Plus"
                  className="absolute z-10 shadow-sm"
                  width={816}
                  height={238}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  style={{
                    top: '55%',
                    left: '4.8%',
                    width: '90.4%',
                    height: 'auto',
                    borderRadius: '12px',
                  }}
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default memo(Hero);
