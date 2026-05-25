/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Shield, MessageCircle } from 'lucide-react';
import logoSecundario from '../assets/logo-secundario.png';

export default function Footer() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const socialNetworks = [
    { icon: Instagram, href: 'https://instagram.com/ivoovenezuela', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com/ivoovenezuela', label: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/ivoovenezuela', label: 'Twitter' },
    { icon: Youtube, href: 'https://youtube.com/ivoovenezuela', label: 'YouTube' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
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

  return (
    <footer className="bg-slate-900 pt-16 pb-12 relative overflow-hidden text-slate-400 text-sm font-sans">
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00E37C]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered Secondary Logo */}
        <div className="flex justify-center mb-10">
          <img src={logoSecundario} alt="Creditivoo" className="h-16 md:h-20 w-auto" />
        </div>

        {/* Main Columns Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          
          {/* Col 5: Description & Logo */}
          <div className="md:col-span-5 space-y-6 text-left">
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Creditivoo es un sistema de financiamiento privado exclusivo para compras dentro del ecosistema de tiendas IVOO a nivel nacional.
            </p>

            <div className="flex gap-3 pt-2">
              {socialNetworks.map((social, idx) => {
                const IconComp = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 hover:bg-[#00E37C]/15 hover:text-[#00AA5B] text-slate-400 flex items-center justify-center transition-all duration-300 shadow-sm"
                  >
                    <IconComp className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 3: Navigation Quick Links */}
          <div className="md:col-span-3 space-y-4 text-left">
            <h4 className="font-display text-sm font-extrabold text-slate-200 tracking-widest uppercase mb-1">
              Explorar
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleScrollTo('#inicio')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  Inicio principal
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#que-es')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  ¿Qué es Creditivoo?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#como-funciona')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  ¿Cómo funciona?
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#planes')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  Planes de financiamiento
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Help Links */}
          <div className="md:col-span-4 space-y-4 text-left">
            <h4 className="font-display text-sm font-extrabold text-slate-200 tracking-widest uppercase mb-1">
              Soporte y Legalidad
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => handleScrollTo('#preguntas')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  Preguntas frecuentes (FAQ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo('#solicitud')}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors cursor-pointer text-sm text-slate-400"
                >
                  Formulario de solicitud
                </button>
              </li>
              <li>
                <a
                  href="#terminos-pdf"
                  onClick={(e) => { e.preventDefault(); setToastMsg('Visualizando PDF de Términos y Condiciones Generales Creditivoo v1.4'); }}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors block text-sm text-slate-400"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a
                  href="#privacidad"
                  onClick={(e) => { e.preventDefault(); setToastMsg('Declaración de Privacidad de Datos y Protección al Consumidor Ecosistema IVOO'); }}
                  className="hover:text-[#00AA5B] hover:font-bold transition-colors block text-sm text-slate-400"
                >
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider line */}
        <div className="h-px bg-slate-800 my-8" />

        {/* Bottom copyright & micro disclosures */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-start text-left">
          <div className="space-y-1">
            <span className="text-xs text-slate-500 block">
              &copy; {new Date().getFullYear()} Creditivoo. Todos los derechos reservados.
            </span>
            <span className="text-[11px] text-slate-500 block">
              Ecosistema Retail de Tecnología de IVOO Venezuela. Valencia, Estado Carabobo.
            </span>
          </div>
          
          <div className="flex items-center gap-2.5 text-xs text-slate-300 font-semibold bg-slate-800 border border-slate-700 py-1.5 px-3 rounded-xl select-none shadow-sm">
            <Shield className="w-4 h-4 text-[#00E37C]" />
            <span>Encriptación Digital Activa de 256 bits</span>
          </div>
        </div>

        {/* Mandated Small print Legal footnote */}
        <div className="mt-8 p-4 bg-slate-800/50 border border-slate-700/65 rounded-2xl text-[10.5px] text-slate-500 leading-normal text-left">
          <strong>Aviso Comercial Legal:</strong> Creditivoo no es una entidad bancaria ni financiera regulada por la SUDEBAN. La aprobación de saldo, adjudicación de montos, distribución de cuotas mensuales estimadas, iniciales y condiciones crediticias son el resultado exclusivo de filtros automáticos de comportamiento internos y están enteramente sujetos a pre-evaluación digital, perfil transaccional del cliente, historial de pagos previo dentro del ecosistema, disponibilidad física de inventario de productos y políticas internas vigentes de IVOO Venezuela.
        </div>

      </div>

      {/* Floating Interactive Toast */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 bg-slate-900 border border-slate-800 text-white py-3.5 px-5 rounded-xl shadow-2xl z-50 flex items-center justify-between gap-4 max-w-sm font-semibold text-xs leading-normal animate-fade-in animate-bounce-subtle">
          <span>{toastMsg}</span>
          <button 
            onClick={() => setToastMsg(null)} 
            className="text-slate-400 hover:text-white font-bold text-sm shrink-0 leading-none"
            aria-label="Close Notification"
          >
            ✕
          </button>
        </div>
      )}
    </footer>
  );
}
