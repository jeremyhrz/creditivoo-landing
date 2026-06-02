/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CheckCircle2, ShieldAlert, Sparkles, Smartphone, Award, Clock } from 'lucide-react';

export default function Requirements() {
  const reqsList = [
    'Ser mayor de edad (mayores de 18 años).',
    'Tener documento de identidad original y vigente (Cédula de Identidad).',
    'Tener un número telefónico personal y activo.',
    'Tener un correo electrónico de uso frecuente.',
    'Completar el registro digital con datos fidedignos.',
    'Aceptar los términos y condiciones de financiamiento.',
    'Pasar la evaluación automatizada interna.',
    'Cumplir con la inicial o activación requerida según el plan otorgado.',
  ];

  return (
    <section id="requisitos" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Lights background */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-[#00E37C]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            CONTRATACIONES REQUISITOS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            ¿Qué necesitas para aplicar?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Nuestros requisitos están simplificados al máximo nivel posible. Olvídate de los trámites bancarios burocráticos y las carpetas de papeles.
          </p>
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          
          {/* Left Column: Requirements visual checklist grid */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm">
            <h3 className="font-display text-2xl font-bold text-slate-900 tracking-tight mb-6">
              Requisitos Obligatorios
            </h3>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reqsList.map((req, idx) => (
                <li
                  key={idx}
                  className="p-3.5 rounded-xl bg-white border border-slate-200 flex gap-3 text-slate-700 shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#00E37C] shrink-0 mt-0.5 animate-pulse" />
                  <span className="text-xs sm:text-sm font-medium leading-normal">{req}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 p-3.5 rounded-xl bg-orange-50 border border-orange-200 flex gap-3">
              <ShieldAlert className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
              <p className="text-xs text-orange-850 leading-normal">
                Nota importante: Creditivoo se reserva el derecho de aprobación según sus políticas internas de evaluación.
              </p>
            </div>
          </div>

          {/* Right Column: Speed & Digital Promo graphic panel */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00E37C]/30 transition-all shadow-sm">
            <div>
              <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50 mb-4 inline-block">
                100% DIGITAL Sencillo
              </span>
              
              <h3 className="font-display text-2xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                Sin carpeta, sin banco y sin complicaciones.
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Hemos reinventado el financiamiento directo en tienda. Evaluamos tus datos en fracciones de segundo con nuestro motor digital, ofreciéndote opciones al instante.
              </p>

              {/* Icon markers list */}
              <div className="space-y-4 font-sans">
                <div className="flex gap-3.5 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00E37C] shadow-sm">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-none">Todo en tu smartphone</h4>
                    <span className="text-xs text-slate-500">Sin filas, sin firmar montañas de roles</span>
                  </div>
                </div>

                <div className="flex gap-3.5 items-center">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#00E37C] shadow-sm">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-none">Aprobación en minutos</h4>
                    <span className="text-xs text-slate-500">Verificamos tu perfil al instante</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-150 flex items-center gap-2.5 text-[#00AA5B]">
              <Award className="w-5 h-5 fill-[#00E37C]/10" />
              <span className="text-xs font-sans font-semibold uppercase tracking-wider text-emerald-500">
                RESPALDADO POR EL ECOSISTEMA IVOO
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
