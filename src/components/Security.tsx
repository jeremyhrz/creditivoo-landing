/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, Lock, AlertTriangle, CheckSquare, EyeOff } from 'lucide-react';

export default function Security() {
  const alerts = [
    {
      title: 'Creditivoo nunca te pedirá claves bancarias',
      description: 'Cualquier solicitud que comprometa claves secretas, pines de acceso o passwords proviene de canales falsos. Resguarda tus contraseñas.',
      icon: EyeOff,
      color: 'border-rose-200 bg-rose-50/40 text-rose-700'
    },
    {
      title: 'Usa solo canales oficiales de IVOO',
      description: 'Toda postulación, simulación y canalización de pagos legítimos se realiza exclusivamente a través de la web oficial ivoo.com, sucursales físicas o el App oficial.',
      icon: ShieldCheck,
      color: 'border-[#00E37C]/30 bg-[#00E37C]/5 text-[#008A4B]'
    },
    {
      title: 'Evita compartir códigos de seguridad con terceros',
      description: 'Los códigos de validación SMS y tokens de seguridad enviados a tu teléfono son estrictamente de uso íntimo y personal. No los compartas con nadie.',
      icon: AlertTriangle,
      color: 'border-amber-200 bg-amber-50/45 text-amber-800'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Lights background */}
      <div className="absolute top-[30%] right-0 w-80 h-80 rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Banner container with solid grid structure */}
        <div className="rounded-3xl bg-white border border-slate-200 p-8 sm:p-12 max-w-5xl mx-auto shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Header content (Col 5) */}
            <div className="lg:col-span-5 flex flex-col items-start text-left space-y-5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E37C]/10 border border-[#00E37C]/20 text-[#008A4B] font-bold text-xs tracking-wide">
                <Lock className="w-4 h-4" />
                SEGURIDAD DE GRADO BANCARIO
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tu información segura, tus pagos claros
              </h2>
              
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Creditivoo protege tus datos de manera integral and utiliza tu información únicamente para procesos internos de evaluación, gestión legítima de financiamiento, prevención de fraude y comunicación oficial autorizada.
              </p>
            </div>

            {/* Right Alerts List content (Col 7) */}
            <div className="lg:col-span-7 flex flex-col space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#008A4B] font-extrabold uppercase mb-2">
                RECOMENDACIONES IMPORTANTES DE SEGURIDAD
              </span>

              {alerts.map((al, idx) => {
                const IconComp = al.icon;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl border p-4 sm:p-5 flex gap-4 ${al.color} transition-all duration-300 hover:scale-[1.01]`}
                  >
                    <div className="shrink-0 mt-0.5">
                      <IconComp className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 leading-normal mb-1">
                        {al.title}
                      </h4>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                        {al.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
