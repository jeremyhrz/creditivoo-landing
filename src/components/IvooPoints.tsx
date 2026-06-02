/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Trophy, Gift, ArrowUpRight, Award, ShieldAlert } from 'lucide-react';

export default function IvooPoints() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Lights decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-r from-[#00E37C]/5 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            PUNTUACIÓN Y REPLIEGUES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            Tus buenos pagos también cuentan
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Los IVOOPoints son puntos de comportamiento dentro de Creditivoo. Te ayudan a construir un mejor perfil financiero y te permiten acceder a mejores condiciones de financiamiento.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Visual Score Meter Widget */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[340px] rounded-3xl bg-white border border-slate-200 p-6 shadow-sm relative">
              <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-emerald-500" />
              
              <span className="text-[10px] font-mono tracking-widest text-slate-500 block mb-6 font-bold">
                ESTADO DE COMPORTAMIENTO
              </span>

              {/* Progress Circle Visual */}
              <div className="relative flex justify-center items-center py-4">
                {/* SVG Circle Gauge */}
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="#000000"
                    strokeWidth="10"
                    fill="transparent"
                    className="opacity-5"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="65"
                    stroke="#00E37C"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray="408"
                    strokeDashoffset="80" /* representing 80% filled */
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_6px_rgba(0,227,124,0.15)]"
                  />
                </svg>
                {/* Score text absolute center */}
                <div className="absolute text-center flex flex-col justify-center">
                  <span className="font-display text-3xl font-black text-slate-900">825</span>
                  <span className="text-[10px] font-mono font-bold text-[#00AA5B] uppercase tracking-wider mt-0.5">
                    Rango Oro ★
                  </span>
                </div>
              </div>

              {/* Stats below meter */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-slate-100 text-center">
                <div>
                  <span className="text-[10.5px] font-mono text-slate-500 block uppercase">
                    Puntos Totales
                  </span>
                  <span className="text-sm font-semibold text-slate-800 font-mono mt-0.5 block">
                    1,240 pts
                  </span>
                </div>
                <div>
                  <span className="text-[10.5px] font-mono text-slate-500 block uppercase">
                    Tasa de Éxito
                  </span>
                  <span className="text-sm font-semibold text-[#00AA5B] font-mono mt-0.5 block">
                    100.0%
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Key Difference Highlights */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight">
              ¿Cuál es la diferencia entre IVOOPoints y Cashback?
            </h3>
            
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Es muy común confundir ambos términos, pero en Creditivoo tienen roles diferentes diseñados para potenciar tus compras y recompensar tu honestidad:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-2">
              {/* IVOOPoints card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#00E37C]/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#00E37C]/10 flex items-center justify-center text-[#00E37C] mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2 leading-tight">
                  IVOOPoints
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Miden exclusivamente tu comportamiento de pago dentro del sistema. Te ayudan a construir reputación interna para acceder a mayores límites o iniciales de 0%.
                </p>
              </div>

              {/* Cashback card */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#00E37C]/30 transition-all shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 mb-4 bg-indigo-500/10">
                  <Gift className="w-5 h-5" />
                </div>
                <h4 className="font-display text-lg font-bold text-slate-900 mb-2 leading-tight">
                  Cashback
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Es un beneficio de carácter estrictamente promocional. Consiste en la devolución de parte de tu dinero para usar en futuras campañas específicas.
                </p>
              </div>
            </div>

            {/* Note text */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex gap-3 text-left shadow-sm">
              <Award className="w-5 h-5 text-[#00E37C] shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-normal">
                Al ingresar al sistema inicias inmediatamente en un rango de evaluación. ¡Tus pagos a tiempo aseguran que acumules IVOOPoints más rápido que nadie!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
