/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Coins, CalendarRange, TrendingUp, Trophy, Tag, Wrench, ShieldCheck, ShoppingBag } from 'lucide-react';

export default function Benefits() {
  const benefitCards = [
    {
      title: 'Inicial flexible',
      description: 'Elige el porcentaje de inicial que mejor se adapte a tu presupuesto en el momento de la compra.',
      icon: Coins,
      badge: 'Flexible'
    },
    {
      title: 'Pago en cuotas',
      description: 'Organiza tus pagos de manera cómoda en cuotas mensuales fijas, claras y fáciles de entender.',
      icon: CalendarRange,
      badge: 'Simple'
    },
    {
      title: 'Línea progresiva',
      description: 'Aumenta tu límite disponible para futuras compras de tecnología demostrando buen comportamiento de pago.',
      icon: TrendingUp,
      badge: 'Crecimiento'
    },
    {
      title: 'IVOOPoints',
      description: 'Gana puntos asociados a tu perfil por cada pago a tiempo. Úsalos para desbloquear ventajas exclusivas.',
      icon: Trophy,
      badge: 'Puntos IVOO'
    },
    {
      title: 'Cashback o descuentos',
      description: 'Recibe beneficios promocionales y retornos aplicados automáticamente según campañas vigentes.',
      icon: Tag,
      badge: 'Ahorro'
    },
    {
      title: 'Beneficios en servicios IVOO',
      description: 'Accede a descuentos preferenciales en instalación de equipos, soporte técnico y servicio de reparaciones.',
      icon: Wrench,
      badge: 'Servicios'
    },
    {
      title: 'Exclusivo para compras en IVOO',
      description: 'Diseñado específicamente para optimizar tu experiencia de compra en el retail tecnológico líder del país.',
      icon: ShoppingBag,
      badge: 'Original'
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Lights background */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#00E37C]/5 to-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            CONSTRUYE TU PERFIL
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            Más que financiamiento, beneficios por cumplir
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Mientras mejor sea tu comportamiento de pago, más posibilidades puedes desbloquear dentro del ecosistema IVOO.
          </p>
        </div>

        {/* Bento-Inspired Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefitCards.map((benefit, idx) => {
            const IconComp = benefit.icon;
            // Bento stretching behavior: make card 3 span full row on mobile/md or larger screens
            const spanClass = idx === 2 
              ? 'md:col-span-2 lg:col-span-1' 
              : idx === 5
              ? 'md:col-span-2'
              : '';

            return (
              <div
                key={idx}
                className={`group rounded-3xl bg-white border border-slate-100 p-6 hover:border-[#00E37C]/30 hover:shadow-[0_12px_40px_rgba(0,227,124,0.06)] transition-all duration-300 flex flex-col justify-between ${spanClass}`}
              >
                <div>
                  {/* Top bar in card */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-full bg-[#00E37C]/10 text-emerald-600 flex items-center justify-center transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full transition-colors border border-emerald-100/50 group-hover:bg-emerald-100/60 group-hover:text-emerald-700">
                      {benefit.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-150 flex items-center gap-1.5 text-xs text-slate-500 font-medium group-hover:text-slate-800 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-[#00E37C]" />
                  <span>Incluido en el ecosistema IVOO</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
