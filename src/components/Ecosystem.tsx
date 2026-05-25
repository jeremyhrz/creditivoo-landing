/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Store, Smartphone, Globe, Laptop, Cpu, CheckCircle } from 'lucide-react';

export default function Ecosystem() {
  const channels = [
    {
      title: 'Tiendas físicas IVOO',
      description: 'Compra de forma presencial con tu teléfono en cualquiera de nuestras sucursales a nivel nacional (Caracas, Valencia, Maracaibo, Lechería, Mérida, San Cristóbal y más).',
      icon: Store,
      badge: 'Presencial'
    },
    {
      title: 'IVOO App',
      description: 'Accede, simula, solicita y gestiona tus cuotas y pagos desde la comodidad de nuestro aplicativo móvil oficial disponible para iOS y Android.',
      icon: Smartphone,
      badge: 'Digital Móvil'
    },
    {
      title: 'E-commerce IVOO',
      description: 'Financia tu carrito de compras directamente en ivoo.com desde tu computadora, tablet o portátil de forma segura.',
      icon: Globe,
      badge: 'Web Digital'
    },
    {
      title: 'Productos seleccionados',
      description: 'Aplica para categorías destacadas de última tecnología: teléfonos inteligentes, televisores, línea blanca, computación y aires acondicionados.',
      icon: Cpu,
      badge: 'Disponibilidad'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden font-sans">
      
      {/* Light highlights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#00E37C]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-mono font-extrabold tracking-[0.25em] text-[#00E37C] uppercase bg-[#00E37C]/5 px-3.5 py-1.5 rounded-full border border-[#00E37C]/15">
            MEDIOS DISPONIBLES
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            Disponible dentro del ecosistema IVOO
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Creditivoo aplica para compras seleccionadas en IVOO. Su disponibilidad puede variar según canal, sucursal, producto, categoría o fase de implementación.
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {channels.map((ch, idx) => {
            const IconComp = ch.icon;
            return (
              <div
                key={idx}
                className="group rounded-3xl bg-white border border-slate-200 p-8 flex flex-col justify-between hover:border-[#00E37C]/30 hover:shadow-[0_12px_40px_rgba(0,227,124,0.06)] transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 text-[#00E37C] group-hover:bg-[#00E37C]/10 flex items-center justify-center border border-slate-100 transition-all duration-300 shadow-sm">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider font-extrabold uppercase bg-slate-100 px-2.5 py-1 rounded text-slate-500 group-hover:text-[#008A4B] group-hover:bg-[#00E37C]/10 transition-all duration-300">
                      {ch.badge}
                    </span>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-3">
                    {ch.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {ch.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-150 flex items-center gap-2 text-xs text-[#00AA5B] font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Soporte Oficial IVOO</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
