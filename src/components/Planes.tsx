/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface PlanesProps {
  onPlanSelect?: (plan: 'basic' | 'plus') => void;
}

export default function Planes({ onPlanSelect }: PlanesProps) {
  const handleScrollToForm = (plan: 'basic' | 'plus') => {
    if (onPlanSelect) {
      onPlanSelect(plan);
    }
    const element = document.querySelector('#solicitud');
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
  };

  const basicBenefits = [
    'Línea de crédito según evaluación.',
    'Inicial flexible.',
    'Pago en 3 cuotas.',
    'Acumulación de IVOOPoints.',
    'Acceso a productos seleccionados.',
    'Sin costo de membresía.',
  ];

  const plusBenefits = [
    'Mayor flexibilidad según tu perfil.',
    'Posibilidad de inicial de 0%.',
    'Aumento progresivo de línea de crédito.',
    'Multiplicador de IVOOPoints.',
    'Cashback o descuentos promocionales.',
    'Días de pago más flexibles.',
    'Beneficios en servicio técnico, instalación o reparación.',
    'Premios o beneficios especiales.',
  ];

  return (
    <section id="planes" className="py-32 bg-white relative overflow-hidden font-sans">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E37C]/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            CATÁLOGO DE CONTRATACIÓN
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-6 leading-tight">
            Nuestros Planes
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mt-6">
            Elige el plan perfecto para ti y desbloquea el acceso inteligente a los mejores productos de tecnología y electrodomésticos.
          </p>
        </div>

        {/* Pricing Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* PLAN BÁSICO */}
          <div className="rounded-[2rem] bg-white border border-slate-200 p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-300 relative">
            <div>
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-slate-900 tracking-tight">
                    Plan Básico
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 font-medium">
                    La opción ideal para compras planificadas.
                  </p>
                </div>
              </div>

              {/* Price visual placeholder */}
              <div className="my-8 pb-8 border-b border-slate-100">
                <span className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight block">
                  60% de inicial y 3 cuotas
                </span>
              </div>

              {/* Benefit checks */}
              <ul className="space-y-4 my-8">
                {basicBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 py-0.5">
                    <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200">
                      <Check className="w-3.5 h-3.5 text-slate-500" />
                    </div>
                    <span className="text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={() => handleScrollToForm('basic')}
                className="w-full py-4 rounded-xl border border-slate-200 text-slate-700 font-bold hover:bg-slate-50 hover:text-slate-900 active:scale-95 transition-all duration-200 cursor-pointer text-center text-lg shadow-sm"
              >
                Elegir Plan Básico
              </button>
            </div>
          </div>

          {/* PLAN PLUS (Imán de Conversión) */}
          <div className="rounded-[2rem] bg-white border-2 border-[#00E37C]/40 p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-2 shadow-[0_30px_60px_-15px_rgba(0,227,124,0.15)] transition-all duration-300 relative lg:-mt-6 lg:mb-[-1.5rem] z-10 overflow-visible group">
            
            {/* Interior Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00E37C]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#00E37C]/10 transition-colors duration-500" />
            
            {/* Floating Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50/60 border border-emerald-100/50 text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 shadow-sm whitespace-nowrap z-20">
              <Sparkles className="w-4 h-4 fill-white" /> RECOMENDADO IVOO
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-display text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                    Plan Plus
                  </h3>
                  <p className="text-sm text-emerald-600 font-semibold mt-2">
                    Acceso inmediato sin barreras de entrada.
                  </p>
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-[#00E37C] to-emerald-400 rounded-2xl flex items-center justify-center shadow-lg shadow-[#00E37C]/20 shrink-0">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Price visual placeholder */}
              <div className="my-8 pb-8 border-b border-[#00E37C]/10">
                <span className="text-2xl sm:text-4xl font-extrabold text-[#00AA5B] tracking-tight block">
                  0% de inicial y 4 cuotas
                </span>
              </div>

              {/* Benefit checks */}
              <ul className="space-y-4 my-8">
                {plusBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-800 py-0.5">
                    <div className="w-6 h-6 rounded-full bg-[#00E37C]/15 flex items-center justify-center shrink-0 border border-[#00E37C]/20">
                      <Check className="w-3.5 h-3.5 text-[#00AA5B] stroke-[3]" />
                    </div>
                    <span className="text-base font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 relative z-10">
              <button
                onClick={() => handleScrollToForm('plus')}
                className="w-full py-5 rounded-xl bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white font-bold hover:scale-[1.02] active:scale-95 shadow-xl shadow-[#00E37C]/20 transition-all duration-300 cursor-pointer text-center text-lg"
              >
                Solicitar Plan Plus Ahora
              </button>
            </div>
          </div>

        </div>

        {/* Brand Disclaimer Notice */}
        <div className="max-w-3xl mx-auto mt-20 p-5 rounded-2xl bg-slate-50 border border-slate-100 flex gap-4 text-left shadow-sm">
          <HelpCircle className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
          <p className="text-sm text-slate-500 leading-relaxed">
            Los montos, beneficios y condiciones exactas están sujetos a evaluación crediticia, perfil del cliente y políticas vigentes de la plataforma. La información mostrada es netamente referencial.
          </p>
        </div>

      </div>
    </section>
  );
}
