/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserPlus, LayoutDashboard, ShoppingBag, CreditCard, Smile } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Regístrate',
      description: 'Crea tu perfil Creditivoo y completa tus datos básicos de manera 100% digital.',
      icon: UserPlus,
      color: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      number: '02',
      title: 'Conoce tu línea',
      description: 'Evaluamos tu perfil de forma instantánea y te mostramos tus opciones de financiamiento disponibles.',
      icon: LayoutDashboard,
      color: 'from-cyan-500/20 to-teal-500/20',
    },
    {
      number: '03',
      title: 'Elige tu producto',
      description: 'Selecciona lo último en tecnología, electrodomésticos o accesorios autorizados dentro del catálogo de IVOO.',
      icon: ShoppingBag,
      color: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      number: '04',
      title: 'Activa tu plan',
      description: 'Paga tu monto de inicial estimado de forma rápida o activa las condiciones disponibles según tu perfil.',
      icon: CreditCard,
      color: 'from-[#00E37C]/20 to-emerald-500/20',
    },
    {
      number: '05',
      title: 'Disfruta y paga en cuotas',
      description: 'Llévatelo a casa hoy mismo, organiza tus cuotas cómodamente, y mejora tu puntuación para el futuro.',
      icon: Smile,
      color: 'from-[#00FF88]/20 to-[#00E37C]/20',
    },
  ];

  return (
    <section id="como-funciona" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Glow decorations */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-cyan-500/5 blur-[80px]" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-emerald-500/5 blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-extrabold tracking-[0.25em] text-[#00E37C] uppercase bg-[#00E37C]/5 px-3.5 py-1.5 rounded-full border border-[#00E37C]/15">
            PASO A PASO
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            ¿Cómo funciona?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Financiar tus compras en IVOO es sumamente simple. Olvídate de los trámites engorrosos, hazlo todo en 5 pasos directos.
          </p>
        </div>

        {/* Connective Line (hidden on small screens, absolute on larger grid blocks) */}
        <div className="relative">
          <div className="hidden lg:block absolute left-4 right-4 top-1/2 -translate-y-12 h-0.5 bg-gradient-to-r from-emerald-500/10 via-[#00E37C]/30 to-emerald-500/10" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, idx) => {
              const IconComp = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white border border-slate-200/80 p-6 rounded-2xl relative flex flex-col items-start hover:border-[#00E37C]/30 hover:-translate-y-1.5 transition-all duration-300 shadow-sm"
                >
                  {/* Giant Step Number Background */}
                  <div className="absolute -top-2 right-4 font-display font-black text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#00E37C]/20 to-emerald-500/5 select-none pointer-events-none">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${step.color} border border-slate-100 text-[#00E37C] mb-6 shadow-sm`}>
                    <IconComp className="w-6 h-6" />
                  </div>

                  {/* Step Meta Info */}
                  <span className="text-[10px] font-mono tracking-widest text-[#00E37C] font-semibold uppercase mb-1">
                    Paso {idx + 1}
                  </span>
                  
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
