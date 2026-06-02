/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckSquare, Medal, ShieldAlert, Award, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="que-es" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative radial gradients to break monotony */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            CONÓCENOS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            Una forma más flexible de comprar en IVOO
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
            Creditivoo es un sistema de financiamiento propio de IVOO que te permite acceder a productos seleccionados, organizar tus pagos y construir beneficios dentro del ecosistema IVOO.
          </p>
        </div>

        {/* Feature Cards Grid (Two prominent structural cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Compra en cuotas */}
          <div className="relative group rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-8 hover:border-[#00E37C]/30 hover:shadow-[0_10px_35px_rgba(0,227,124,0.05)] transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#00E37C]/5 rounded-full blur-xl group-hover:bg-[#00E37C]/10 transition-colors" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00E37C]/10 flex items-center justify-center text-[#00E37C] border border-[#00E37C]/25 mb-6 group-hover:scale-110 group-hover:bg-[#00E37C]/20 transition-all duration-300">
                <CheckSquare className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-24px sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Compra en cuotas
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed">
                Elige productos participantes y paga de forma más cómoda. Olvídate de los papeleos bancarios tradicionales y de los intereses agobiantes. Nos adaptamos a tu bolsillo.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-[#00E37C] font-semibold text-sm">
              <Star className="w-4 h-4 fill-[#00E37C]" />
              <span>Planes ajustados para ti</span>
            </div>
          </div>

          {/* Card 2: Beneficios por buen comportamiento */}
          <div className="relative group rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-200/80 p-8 hover:border-[#00E37C]/30 hover:shadow-[0_10px_35px_rgba(0,227,124,0.05)] transition-all duration-300 flex flex-col justify-between">
            <div className="absolute -top-3 -right-3 w-16 h-16 bg-[#00E37C]/5 rounded-full blur-xl group-hover:bg-[#00E37C]/10 transition-colors" />
            
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00E37C]/10 flex items-center justify-center text-[#00E37C] border border-[#00E37C]/25 mb-6 group-hover:scale-110 group-hover:bg-[#00E37C]/20 transition-all duration-300">
                <Medal className="w-7 h-7" />
              </div>
              
              <h3 className="font-display text-24px sm:text-2xl font-bold text-slate-900 tracking-tight mb-3">
                Beneficios por buen comportamiento
              </h3>
              
              <p className="text-slate-600 text-base leading-relaxed">
                Tus pagos a tiempo te ayudan a desbloquear mejores condiciones. Aumenta tu línea disponible, reduce tu inicial a cero y acumula IVOOPoints para canjear en tus compras.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-2 text-[#00E37C] font-semibold text-sm">
              <Award className="w-4 h-4 fill-[#00E37C]" />
              <span>Sube de nivel y gana más</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
