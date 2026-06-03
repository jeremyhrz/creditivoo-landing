/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, Sparkles, HelpCircle } from 'lucide-react';

interface PlanesProps {
  onPlanSelect?: (plan: 'plus') => void;
}

export default function Planes({ onPlanSelect }: PlanesProps) {
  const handleScrollToForm = (plan: 'plus') => {
    if (onPlanSelect) {
      onPlanSelect(plan);
    }
  };

  const plusBenefits = [
    'Mayor flexibilidad según tu perfil.',
    'Posibilidad de inicial de 0%.',
    'Aumento progresivo de línea de compra.',
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
            Nuestro Plan
          </h2>
          <p className="text-slate-500 text-lg md:text-xl mt-6">
            Desbloquea el acceso inteligente a los mejores productos de tecnología y electrodomésticos con el Plan Plus VIP.
          </p>
        </div>

        {/* Plan Layout — Solo Plan Plus */}
        <div className="flex justify-center max-w-xl mx-auto">
          <div className="rounded-[2rem] bg-white border-2 border-[#00E37C]/40 p-8 sm:p-10 flex flex-col justify-between hover:-translate-y-2 shadow-[0_30px_60px_-15px_rgba(0,227,124,0.15)] transition-all duration-300 relative z-10 overflow-visible group w-full">
            
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
            Los montos, beneficios y condiciones exactas están sujetos a evaluación, perfil del cliente y políticas vigentes de la plataforma. La información mostrada es netamente referencial.
          </p>
        </div>

      </div>
    </section>
  );
}
