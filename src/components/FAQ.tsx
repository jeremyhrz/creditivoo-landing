/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: '¿Creditivoo es un banco?',
      a: 'No. Creditivoo no es una entidad bancaria. Es un sistema de financiamiento privado exclusivo para compras dentro del ecosistema IVOO.',
    },
    {
      q: '¿Necesito tarjeta de crédito?',
      a: 'No necesariamente. Las condiciones dependerán de tu proceso de evaluación digital y de los métodos de pago que decidas habilitar.',
    },
    {
      q: '¿Cuánto crédito me pueden aprobar?',
      a: 'El monto dependerá de tu perfil crediticio estimado, evaluación de ingresos y, principalmente, tu comportamiento de pago dentro de Creditivoo.',
    },
    {
      q: '¿Puedo pagar anticipado?',
      a: 'Sí, las condiciones lo permiten por completo. Pagar a tiempo o de forma anticipada es de hecho la mejor vía para acumular IVOOPoints rápido y aumentar tu línea.',
    },
    {
      q: '¿Qué pasa si pago tarde?',
      a: 'El retraso en el cumplimiento de tus pagos puede afectar directamente tus beneficios exclusivos, disminuir tu línea disponible y desmejorar tu perfil histórico dentro de Creditivoo.',
    },
    {
      q: '¿Qué son los IVOOPoints?',
      a: 'Son puntos asociados a tu comportamiento e historial de pagos dentro de Creditivoo. Sirven de indicador principal para desbloquear condiciones preferenciales (tales como inicial de 0%).',
    },
    {
      q: '¿Puedo usar Creditivoo con promociones?',
      a: 'Aplica según cada caso. Dependerá de las condiciones comerciales preestablecidas para la promoción, producto seleccionado o campaña específica activa.',
    },
    {
      q: '¿Dónde puedo pagar mis cuotas?',
      a: 'Los canales de pago oficiales disponibles (como transferencias, pago móvil u otros) serán informados con precisión durante tu solicitud y en el portal exclusivo del cliente.',
    },
    {
      q: '¿Qué productos puedo comprar?',
      a: 'Creditivoo aplica para un amplio y selecto catálogo de tecnología de punta, teléfonos inteligentes, televisores, línea blanca, informática y aires acondicionados disponibles en IVOO.',
    },
    {
      q: '¿Qué pasa si no me aprueban?',
      a: '¡No te preocupes! Podrás revisar los datos ingresados en tu solicitud, mejorar tu historial general e intentar nuevamente una postulación transcurrido el tiempo sugerido.',
    },
  ];

  // Store open state index for accordions (allows toggling single item)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    if (openIndex === idx) {
      setOpenIndex(null);
    } else {
      setOpenIndex(idx);
    }
  };

  return (
    <section id="preguntas" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Glow highlight */}
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] font-sans font-semibold tracking-wider uppercase text-emerald-500 bg-emerald-50/60 px-3 py-1 rounded-full border border-emerald-100/50">
            CENTRO DE AYUDA FAQ
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-6">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg md:text-xl">
            ¿Tienes dudas sobre el sistema? Aquí recopilamos respuestas claras y oportunas.
          </p>
        </div>

        {/* Accordions Stack */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white border ${
                  isOpen ? 'border-[#00E37C]/40 shadow-md ring-1 ring-[#00E37C]/10' : 'border-slate-100'
                } rounded-2xl mb-4 overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md hover:border-slate-200/60`}
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-slate-800 hover:text-[#00E37C] transition-colors duration-300 focus:outline-none"
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                >
                  <span className="font-display sm:text-lg tracking-tight pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown 
                    className={`w-5 h-5 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#00E37C]' : 'text-slate-400'
                    }`} 
                  />
                </button>

                {/* Animated Body */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-0 text-slate-500 font-normal leading-relaxed text-sm md:text-base border-t border-slate-50 mt-2">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
