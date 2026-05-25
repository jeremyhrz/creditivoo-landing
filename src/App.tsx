/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import Planes from './components/Planes';
import Simulator from './components/Simulator';
import Benefits from './components/Benefits';
import IvooPoints from './components/IvooPoints';
import Requirements from './components/Requirements';
import Ecosystem from './components/Ecosystem';
import FAQ from './components/FAQ';
import Security from './components/Security';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

export default function App() {
  // Sync state between Simulator, Planes and ApplicationForm
  const [simulatorPrefill, setSimulatorPrefill] = useState<{
    price?: number;
    plan: 'basic' | 'plus';
    productName?: string;
  } | null>(null);

  const handleSimulateSelect = (price: number | undefined, plan: 'basic' | 'plus', productName: string | undefined) => {
    setSimulatorPrefill({ price, plan, productName });
  };

  return (
    <div className="bg-white min-h-screen text-slate-800 selection:bg-[#00E37C]/30 selection:text-[#00FF88] antialiased">
      {/* 1. Header Navigation */}
      <Header />

      {/* Main Container Sections */}
      <main className="relative">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. What is Creditivoo Segment */}
        <About />

        {/* 4. Timeline How It Works */}
        <HowItWorks />

        {/* 5. Comparatives plans */}
        <Planes onPlanSelect={(plan) => handleSimulateSelect(undefined, plan, undefined)} />

        {/* 6. Interactive Simulator Calculator */}
        <Simulator onSimulateSelect={handleSimulateSelect} />

        {/* 7. Bento grid of benefits */}
        <Benefits />

        {/* 8. Behavior credit metric / IVOOPoints info */}
        <IvooPoints />

        {/* 9. Requirements to apply */}
        <Requirements />

        {/* 10. Channel ecosystem of IVOO stores */}
        <Ecosystem />

        {/* 11. Custom FAQ Accordion Stack */}
        <FAQ />

        {/* 12. Security advisory alerts */}
        <Security />

        {/* 13. High-fidelity Application Evaluation Form */}
        <ApplicationForm prefillValues={simulatorPrefill} />
      </main>

      {/* 14. Footer branding and legal warnings */}
      <Footer />
    </div>
  );
}
