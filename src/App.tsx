/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Planes from './components/Planes';
import Simulator from './components/Simulator';
import Benefits from './components/Benefits';
import Requirements from './components/Requirements';
import FAQ from './components/FAQ';
import Security from './components/Security';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

export type AppView =
  | 'inicio'
  | 'que-es'
  | 'como-funciona'
  | 'planes'
  | 'simulador'
  | 'beneficios'
  | 'requisitos'
  | 'preguntas'
  | 'solicitud';

export default function App() {
  // Sync state between Simulator, Planes and ApplicationForm
  const [simulatorPrefill, setSimulatorPrefill] = useState<{
    price?: number;
    plan: 'basic' | 'plus';
    productName?: string;
  } | null>(null);

  const [currentView, setCurrentView] = useState<AppView>('inicio');

  const handleSimulateSelect = useCallback(
    (
      price: number | undefined,
      plan: 'basic' | 'plus',
      productName: string | undefined,
    ) => {
      setSimulatorPrefill({ price, plan, productName });
    },
    [],
  );

  const handleViewChange = useCallback((view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const viewMap = useMemo(
    () => ({
      inicio: (
        <>
          <Hero />
          <Simulator onSimulateSelect={handleSimulateSelect} />
        </>
      ),
      'que-es': <About />,
      'como-funciona': <HowItWorks />,
      planes: <Planes onPlanSelect={(plan) => handleSimulateSelect(undefined, plan, undefined)} />,
      simulador: <Simulator onSimulateSelect={handleSimulateSelect} />,
      beneficios: <Benefits />,
      requisitos: <Requirements />,
      preguntas: <FAQ />,
      solicitud: <ApplicationForm prefillValues={simulatorPrefill} />,
    }),
    [handleSimulateSelect, simulatorPrefill],
  );

  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-[#00E37C]/30 selection:text-[#00FF88] antialiased overflow-x-hidden">
      <Header currentView={currentView} onViewChange={handleViewChange} />

      <main className="relative">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          {viewMap[currentView]}
        </section>
      </main>

      <Footer />
    </div>
  );
}
