/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo, memo } from 'react';
import { Sparkles, ArrowRight, HelpCircle, DollarSign, Calculator, Info } from 'lucide-react';

interface SimulatorProps {
  onSimulateSelect: (price: number, plan: 'basic' | 'plus', productName: string) => void;
}

const PRESETS = [
  { name: 'Smart TV Síragon 50"', price: 349, category: 'Televisor' },
  { name: 'Xiaomi Redmi Note 13', price: 189, category: 'Teléfono' },
  { name: 'Aire Split 12000 BTU', price: 299, category: 'Electrodoméstico' },
  { name: 'Laptop ASUS VivoBook', price: 549, category: 'Computación' },
  { name: 'Nevera Condesa 10' , price: 429, category: 'Línea Blanca' },
];

function Simulator({ onSimulateSelect }: SimulatorProps) {
  const [selectedPreset, setSelectedPreset] = useState<number>(-1);
  const [productPrice, setProductPrice] = useState<number>(349);
  const [productName, setProductName] = useState<string>('Smart TV Síragon 50"');
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'plus'>('basic');

  const calculateInitialPayment = useCallback((plan: 'basic' | 'plus', totalAmount: number) => {
    return plan === 'basic' ? Math.round(totalAmount * 0.6) : 0;
  }, []);

  const calculateCuotas = useCallback((plan: 'basic' | 'plus', totalAmount: number) => {
    const initialPayment = calculateInitialPayment(plan, totalAmount);
    const financedAmount = totalAmount - initialPayment;
    return Math.round(financedAmount / 3);
  }, [calculateInitialPayment]);

  const handlePresetClick = useCallback((idx: number) => {
    setSelectedPreset(idx);
    const preset = PRESETS[idx];
    setProductPrice(preset.price);
    setProductName(preset.name);
  }, []);

  const handlePriceChange = useCallback((val: number) => {
    setProductPrice(val);
    setSelectedPreset(-1); // Remove active preset choice
    setProductName('Producto Personalizado');
  }, []);

  const initialPayment = useMemo(
    () => calculateInitialPayment(selectedPlan, productPrice),
    [calculateInitialPayment, selectedPlan, productPrice],
  );
  const monthlyCuota = useMemo(
    () => calculateCuotas(selectedPlan, productPrice),
    [calculateCuotas, selectedPlan, productPrice],
  );
  const calculatedFinanced = useMemo(
    () => productPrice - initialPayment,
    [productPrice, initialPayment],
  );

  const handleApplySimulator = useCallback(() => {
    onSimulateSelect(productPrice, selectedPlan, productName);

    // Smooth scroll to form
    const element = document.querySelector('#solicitud');
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
  }, [onSimulateSelect, productPrice, selectedPlan, productName]);

  return (
    <section id="simulador" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 right-0 w-[clamp(260px,35vw,500px)] h-[clamp(260px,35vw,500px)] rounded-full bg-[#00E37C]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[clamp(320px,40vw,600px)] h-[clamp(320px,40vw,600px)] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold tracking-[0.25em] text-[#00E37C] uppercase bg-[#00E37C]/10 px-4 py-2 rounded-full border border-[#00E37C]/20 shadow-[0_0_15px_rgba(0,227,124,0.2)]">
            SIMULADOR INTELIGENTE
          </span>
          <h2 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mt-6 leading-tight">
            Proyecta tu Inversión
          </h2>
          <p className="text-slate-500 text-lg mt-4 max-w-lg mx-auto">
            Configura tu plan ideal y descubre la cuota perfecta para tu bolsillo con nuestra tecnología de financiamiento.
          </p>
        </div>

        {/* Simulator Core - Glassmorphism UI */}
        <div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-2xl border border-slate-200/60 p-6 sm:p-10 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] relative overflow-hidden">
          
          {/* Subtle interior glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00E37C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* LEFT COLUMN: Inputs & Controls */}
            <div className="lg:col-span-6 flex flex-col space-y-10">
              
              {/* 1. Plan Selector (Pill Tabs) */}
              <div>
                <label className="text-sm font-semibold text-slate-700 tracking-wide block mb-4 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-[#00E37C]/10 text-[#00E37C] flex items-center justify-center text-xs font-bold">1</span>
                  Selecciona tu Plan
                </label>
                <div className="flex bg-slate-100 p-1.5 rounded-2xl relative">
                  <button
                    onClick={() => setSelectedPlan('basic')}
                    className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                      selectedPlan === 'basic'
                        ? 'bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white shadow-lg shadow-[#00E37C]/30 scale-[1.02]'
                        : 'text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    Plan Básico
                  </button>
                  <button
                    onClick={() => setSelectedPlan('plus')}
                    className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold transition-all duration-300 z-10 flex items-center justify-center gap-2 ${
                      selectedPlan === 'plus'
                        ? 'bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white shadow-lg shadow-[#00E37C]/30 scale-[1.02]'
                        : 'text-slate-600 hover:bg-slate-200/70'
                    }`}
                  >
                    Plan Plus
                    <span className={`text-[9px] uppercase px-2 py-0.5 rounded-full tracking-wider ${selectedPlan === 'plus' ? 'bg-white/20 text-white' : 'bg-[#00E37C]/20 text-[#00E37C]'}`}>VIP</span>
                  </button>
                </div>
              </div>

              {/* 2. Product Price Slider */}
              <div>
                <div className="flex justify-between items-end mb-4">
                  <label htmlFor="price-slider" className="text-sm font-semibold text-slate-700 tracking-wide flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00E37C]/10 text-[#00E37C] flex items-center justify-center text-xs font-bold">2</span>
                    Monto a Financiar
                  </label>
                  <div className="flex items-center gap-1 font-display text-3xl font-extrabold text-slate-900 bg-slate-50 px-4 py-1.5 rounded-xl border border-slate-100">
                    <span className="text-slate-400 font-medium text-2xl">$</span>
                    <span>{productPrice}</span>
                  </div>
                </div>
                
                <div className="relative pt-2 pb-6">
                  <input
                    id="price-slider"
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={productPrice}
                    onChange={(e) => handlePriceChange(Number(e.target.value))}
                    className="w-full h-2.5 rounded-full bg-slate-200 appearance-none cursor-pointer accent-[#00E37C] shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E37C]/30"
                  />
                  <div className="absolute bottom-0 w-full flex justify-between text-xs font-mono font-medium text-slate-400">
                    <span>$50 min</span>
                    <span>$2,000 max</span>
                  </div>
                </div>
              </div>

              {/* 3. Quick Presets */}
              <div>
                <label className="text-sm font-semibold text-slate-700 tracking-wide block mb-3 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold">o</span>
                  Equipos de Referencia
                </label>
                <div className="flex flex-wrap gap-2">
                  {PRESETS.map((preset, idx) => (
                    <button
                      key={idx}
                      onClick={() => handlePresetClick(idx)}
                      className={`px-3.5 py-2 text-[13px] font-medium rounded-lg border transition-all duration-200 ${
                        selectedPreset === idx
                          ? 'bg-[#00E37C] border-[#00E37C] text-white shadow-md shadow-[#00E37C]/20'
                          : 'bg-white border-slate-200 text-slate-600 hover:border-[#00E37C]/40 hover:bg-slate-50'
                      }`}
                    >
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Results & CTA */}
            <div className="lg:col-span-6 bg-slate-50/50 p-8 sm:p-10 rounded-[2rem] border border-slate-200/60 relative">
              <h3 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-8 flex items-center gap-2">
                <Calculator className="w-4 h-4" /> Resumen Financiero
              </h3>

              {/* Dual Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                
                {/* Initial Payment Card */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden group hover:border-[#00E37C]/50 transition-colors">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-slate-100 rounded-full blur-xl group-hover:bg-[#00E37C]/10 transition-colors" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide block mb-2 relative z-10">
                    Pago Inicial Requerido
                  </span>
                  <div className="flex items-start gap-1 relative z-10">
                    <span className="text-slate-400 font-medium text-2xl mt-1">$</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                      {initialPayment}
                    </span>
                  </div>
                  {selectedPlan === 'plus' && (
                    <span className="inline-block mt-2 text-[10px] font-bold text-[#00E37C] bg-[#00E37C]/10 px-2 py-0.5 rounded-full">
                      BENEFICIO VIP APLICADO
                    </span>
                  )}
                </div>

                {/* Monthly Cuota Card */}
                <div className="bg-gradient-to-br from-[#00E37C]/10 to-emerald-50 p-6 rounded-2xl border border-[#00E37C]/30 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E37C]/20 rounded-full blur-2xl" />
                  <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wide block mb-2 relative z-10">
                    Cuota Mensual (3 Meses)
                  </span>
                  <div className="flex items-start gap-1 relative z-10">
                    <span className="text-emerald-600 font-medium text-2xl mt-1">$</span>
                    <span className="text-4xl md:text-5xl font-extrabold text-emerald-600 tracking-tight">
                      {monthlyCuota}
                    </span>
                  </div>
                  <span className="inline-block mt-2 text-[10px] font-medium text-emerald-700/70">
                    Cálculo exacto de financiamiento
                  </span>
                </div>

              </div>

              {/* Informative Row */}
              <div className="flex justify-between items-center text-sm mb-10 py-3 border-y border-slate-200/60">
                <span className="text-slate-500 font-medium">Monto Financiado</span>
                <span className="font-mono font-bold text-slate-800">${calculatedFinanced} USD</span>
              </div>

              {/* Action Button */}
              <button
                onClick={handleApplySimulator}
                className="w-full min-h-[44px] py-5 rounded-2xl bg-gradient-to-r from-[#00E37C] to-emerald-500 text-white font-bold text-lg transition-all duration-300 ease-in-out hover:scale-[1.02] shadow-xl shadow-[#00E37C]/30 flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                id="simulator-action-btn"
              >
                Iniciar Solicitud Instantánea
                <ArrowRight className="w-5 h-5 text-white" />
              </button>

              <div className="flex items-start gap-2 mt-4 text-xs text-slate-500 leading-tight">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p>
                  Esta simulación es referencial. La aprobación final, el límite de crédito y las condiciones exactas dependen de la evaluación crediticia de Creditivoo.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Simulator);
