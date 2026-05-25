/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ShieldCheck, ArrowRight, ClipboardCheck, Sparkles, CheckCircle, Smartphone, Download, AlertCircle, RefreshCw } from 'lucide-react';
import { ApplicationFormData } from '../types';

interface ApplicationFormProps {
  prefillValues: {
    price: number;
    plan: 'basic' | 'plus';
    productName: string;
  } | null;
}

export default function ApplicationForm({ prefillValues }: ApplicationFormProps) {
  // Cities & branches matching IVOO physical presence in Venezuela
  const STORE_LOCATIONS: { [city: string]: string[] } = {
    'Valencia': ['IVOO Valencia (Casa Matriz - Av. Bolívar)', 'IVOO Guaparo'],
    'Caracas': ['IVOO Caracas (Plaza Venezuela)', 'IVOO Chacao', 'IVOO Las Mercedes'],
    'Maracaibo': ['IVOO Maracaibo (Av. Delicias)'],
    'Lechería': ['IVOO Lechería (Av. Intercomunal)'],
    'Barquisimeto': ['IVOO Barquisimeto (Av. Venezuela)'],
    'Mérida': ['IVOO Mérida (C.C. Las Virtudes)'],
    'San Cristóbal': ['IVOO San Cristóbal (Av. 19 de Abril)'],
    'Maracay': ['IVOO Maracay (Av. Las Delicias)'],
  };

  const PRODUCTS_CATALOG = [
    { id: 'phone-android', name: 'Teléfono Inteligente (Android)' },
    { id: 'smart-tv', name: 'Televisor inteligente (Smart TV)' },
    { id: 'split-air', name: 'Aire Acondicionado Split' },
    { id: 'white-line', name: 'Línea Blanca (Nevera/Lavadora)' },
    { id: 'laptop-pc', name: 'Computación / Laptops' },
    { id: 'accessories', name: 'Accesorios de Audio o Gaming' },
    { id: 'custom', name: 'Otro producto seleccionado' },
  ];

  const [formData, setFormData] = useState<ApplicationFormData>({
    name: '',
    lastName: '',
    idNumber: '',
    phone: '',
    email: '',
    city: 'Valencia',
    store: 'IVOO Valencia (Casa Matriz - Av. Bolívar)',
    productInterestId: 'phone-android',
    customProduct: '',
    estimatedPrice: 350,
    selectedPlan: 'plus',
    acceptTerms: false,
    acceptDataTreatment: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionRef, setTransactionRef] = useState('');
  const [downloadedMsg, setDownloadedMsg] = useState(false);

  // Handle pre-fill overrides from the Simulator
  useEffect(() => {
    if (prefillValues) {
      setFormData((prev) => ({
        ...prev,
        estimatedPrice: prefillValues.price,
        selectedPlan: prefillValues.plan,
        customProduct: prefillValues.productName,
        productInterestId: 'custom',
      }));
    }
  }, [prefillValues]);

  // Adjust active store choices automatically if city is updated
  const handleCityChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const city = e.target.value;
    const branches = STORE_LOCATIONS[city] || [];
    setFormData((prev) => ({
      ...prev,
      city: city,
      store: branches[0] || '',
    }));
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: name === 'estimatedPrice' ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Dynamic field validation
    if (!formData.name.trim() || !formData.lastName.trim()) {
      setSubmitError('Por favor introduce tu nombre y apellido completos.');
      return;
    }
    if (!formData.idNumber.trim()) {
      setSubmitError('Por favor introduce tu Cédula de Identidad.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setSubmitError('Por favor introduce un número telefónico de contacto válido (mínimo 10 dígitos).');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setSubmitError('Por favor introduce un correo electrónico de contacto válido.');
      return;
    }
    if (formData.estimatedPrice <= 0) {
      setSubmitError('El monto aproximado de compra debe ser mayor a cero.');
      return;
    }
    if (!formData.acceptTerms) {
      setSubmitError('Debes aceptar los términos y condiciones de Creditivoo.');
      return;
    }
    if (!formData.acceptDataTreatment) {
      setSubmitError('Debes autorizar el tratamiento de tus datos para poder evaluar tu perfil.');
      return;
    }

    setIsSubmitting(true);

    // Simulate standard async evaluation API with a loading thread spinner
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Generate a dynamic Venezuelan-aligned transaction reference code
      const randHex = Math.floor(Math.random() * 90000) + 10000;
      setTransactionRef(`CR-${formData.idNumber.slice(-4)}-${randHex}`);
    }, 2200);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: '',
      lastName: '',
      idNumber: '',
      phone: '',
      email: '',
      city: 'Valencia',
      store: 'IVOO Valencia (Casa Matriz - Av. Bolívar)',
      productInterestId: 'phone-android',
      customProduct: '',
      estimatedPrice: 350,
      selectedPlan: 'plus',
      acceptTerms: false,
      acceptDataTreatment: false,
    });
  };

  // Validation Helpers
  const isNameValid = formData.name.trim().length > 2;
  const isLastNameValid = formData.lastName.trim().length > 2;
  const isIdValid = /^\d{7,9}$/.test(formData.idNumber);
  const isPhoneValid = /^\d{10,12}$/.test(formData.phone.replace(/\D/g, ''));
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
  const isPriceValid = formData.estimatedPrice > 0;

  const getInputClass = (isValid: boolean, value: string | number) => {
    const base = "w-full px-4 py-3 bg-white border rounded-xl text-slate-800 text-sm outline-none transition-all placeholder:text-slate-400 ";
    if (!value) return base + "border-slate-200 focus:border-[#00E37C] focus:ring-1 focus:ring-[#00E37C]";
    return base + (isValid ? "border-[#00E37C] ring-1 ring-[#00E37C]" : "border-rose-500 ring-1 ring-rose-500 text-rose-700");
  };

  const getIdContainerClass = (isValid: boolean, value: string) => {
    const base = "flex bg-white border rounded-xl items-center transition-all ";
    if (!value) return base + "border-slate-200 focus-within:border-[#00E37C] focus-within:ring-1 focus-within:ring-[#00E37C]";
    return base + (isValid ? "border-[#00E37C] ring-1 ring-[#00E37C]" : "border-rose-500 ring-1 ring-rose-500 text-rose-700");
  };

  return (
    <section id="solicitud" className="py-24 bg-white relative overflow-hidden font-sans">
      
      {/* Background lights overlay */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#00E37C]/5 blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-indigo-500/5 blur-[120px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono font-extrabold tracking-[0.25em] text-[#00E37C] uppercase bg-[#00E37C]/5 px-3.5 py-1.5 rounded-full border border-[#00E37C]/15">
            EVALUACIÓN INMEDIATA
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-black text-slate-900 tracking-tight mt-5">
            Solicitar Creditivoo
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#00E37C] to-[#00FF88] mx-auto my-6 rounded-full" />
          <p className="text-slate-600 text-lg">
            Completa nuestro formulario 100% digital de pre-evaluación. No te tomará más de 3 minutos.
          </p>
        </div>

        {/* Dynamic Multi-State Interface Container */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative">
          
          {/* STATE 1: Loading state inside evaluation */}
          {isSubmitting && (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="w-16 h-16 rounded-full border-4 border-[#00E37C]/20 border-t-[#00E37C] animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-[#00E37C]" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-display text-xl font-bold text-slate-900 tracking-tight animate-pulse">
                  Evaluando tu perfil digital...
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto">
                  Analizando bases internas del ecosistema IVOO y procesando tu puntuaje de pre-aprobación del motor Creditivoo.
                </p>
              </div>
            </div>
          )}

          {/* STATE 2: Success response callback */}
          {!isSubmitting && isSuccess && (
            <div className="py-6 flex flex-col items-center justify-center text-center space-y-8">
              
              {/* Checkbox animation */}
              <div className="w-16 h-16 rounded-full bg-[#00E37C]/10 border-2 border-[#00E37C] flex items-center justify-center text-[#00E37C] shadow-[0_4px_12px_rgba(0,227,124,0.15)]">
                <CheckCircle className="w-8 h-8 font-black" />
              </div>

              <div className="space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  ¡Solicitud Recibida!
                </h3>
                <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-[#008A4B] bg-[#00E37C]/10 border border-[#00E37C]/25 px-3 py-1 rounded-full">
                  Pronto te estaremos informando los próximos pasos
                </span>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
                  Hemos enviado una notificación oficial de pre-evaluación exitosa a su buzón comercial <strong className="text-[#008A4B]">{formData.email}</strong>. Puedes presentarte en la sucursal seleccionada para retirar tu producto.
                </p>
              </div>

              {/* Digital receipt mockup */}
              <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-3xl p-6 text-left relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E37C]/5 rounded-full blur-2xl pointer-events-none" />
                
                <h4 className="text-[10px] font-mono text-[#008A4B] font-extrabold uppercase tracking-widest border-b border-slate-200 pb-3 mb-4">
                  COMPROBANTE DIGITAL PRE-APROBADO
                </h4>

                <div className="space-y-3.5 text-xs sm:text-sm font-medium">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Beneficiario</span>
                    <span className="text-slate-800 uppercase font-bold">{formData.name} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Identificación</span>
                    <span className="text-slate-800 font-mono font-bold">{formData.idNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Sucursal de Retiro</span>
                    <span className="text-[#008A4B] font-extrabold">{formData.store}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Monto Límite Pre-Aprobado</span>
                    <span className="text-slate-800 font-black">${formData.estimatedPrice} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-sans">Plan Asignado</span>
                    <span className="text-[#008A4B] font-extrabold uppercase font-mono">
                      {formData.selectedPlan === 'basic' ? 'Básico Free' : 'Plus VIP Preferred'}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-200 pt-3 mt-3">
                    <span className="text-slate-500 font-sans">Referencia de Trámite</span>
                    <span className="font-mono text-slate-900 tracking-wider font-extrabold">{transactionRef}</span>
                  </div>
                </div>

                {/* Print disclaimer */}
                <div className="mt-4 pt-3.5 border-t border-dashed border-slate-200 text-[10px] text-slate-500 leading-relaxed font-sans">
                  Para concretar el retiro, por favor preséntate con tu Cédula de Identidad laminada original vigente y tu teléfono móvil activo para verificar con el token digital SMS en tienda física.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 w-full justify-center">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded-xl bg-white border border-slate-250 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-all cursor-pointer shadow-sm"
                >
                  Realizar otra solicitud
                </button>
                <button
                  onClick={() => setDownloadedMsg(true)}
                  className="px-6 py-3 rounded-xl bg-[#00E37C] text-ivoo-navy font-bold text-sm hover:scale-103 active:scale-97 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-[0_4px_15px_rgba(0,227,124,0.15)]"
                >
                  <Download className="w-4 h-4" />
                  Descargar Comprobante
                </button>
              </div>

              {downloadedMsg && (
                <p className="text-[#008A4B] text-xs font-semibold text-center mt-3 animate-fade-in">
                  ✓ Su comprobante {transactionRef} ha sido guardado. ¡Ya puedes tomar una captura o presentarlo en tienda!
                </p>
              )}

            </div>
          )}

          {/* STATE 3: The standard static Request Form */}
          {!isSubmitting && !isSuccess && (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Validation alert banner if required */}
              {submitError && (
                <div className="p-4 rounded-xl bg-rose-50 border border-rose-250 text-rose-700 flex gap-3 text-xs sm:text-sm items-start">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <span>{submitError}</span>
                </div>
              )}

              {/* Grid block Group 1: Name and Lastname */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div>
                  <label htmlFor="name-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Nombres *
                  </label>
                  <input
                    id="name-input"
                    name="name"
                    type="text"
                    required
                    placeholder="Ej. María Gabriela"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={getInputClass(isNameValid, formData.name)}
                  />
                </div>

                <div>
                  <label htmlFor="lastname-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Apellidos *
                  </label>
                  <input
                    id="lastname-input"
                    name="lastName"
                    type="text"
                    required
                    placeholder="Ej. Pérez Cedeño"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={getInputClass(isLastNameValid, formData.lastName)}
                  />
                </div>
              </div>

              {/* Grid block Group 2: ID and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div>
                  <label htmlFor="idnumber-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Cédula de Identidad *
                  </label>
                  <div className={getIdContainerClass(isIdValid, formData.idNumber)}>
                    <span className="pl-4 pr-2 text-slate-500 font-semibold text-sm select-none border-r border-slate-200 shrink-0">
                      V-
                    </span>
                    <input
                      id="idnumber-input"
                      name="idNumber"
                      type="text"
                      required
                      placeholder="Ej. 12345678"
                      value={formData.idNumber}
                      onChange={handleInputChange}
                      className="w-full px-3 py-3 bg-transparent text-slate-800 text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Teléfono Móvil Activo *
                  </label>
                  <input
                    id="phone-input"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Ej. 04141234567"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={getInputClass(isPhoneValid, formData.phone)}
                  />
                </div>
              </div>

              {/* Input Group 3: Email */}
              <div className="font-sans">
                <label htmlFor="email-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Correo Electrónico *
                </label>
                <input
                  id="email-input"
                  name="email"
                  type="email"
                  required
                  placeholder="Ej. mariagperez@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={getInputClass(isEmailValid, formData.email)}
                />
              </div>

              {/* Grid block Group 4: City and preferring branch */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 font-sans">
                <div>
                  <label htmlFor="city-select" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Ciudad de Residencia *
                  </label>
                  <select
                    id="city-select"
                    name="city"
                    value={formData.city}
                    onChange={handleCityChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:border-[#00E37C] focus:ring-1 focus:ring-[#00E37C] outline-none transition-all"
                  >
                    {Object.keys(STORE_LOCATIONS).map((city) => (
                      <option key={city} value={city} className="text-slate-800">
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="store-select" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Sucursal IVOO de preferencia *
                  </label>
                  <select
                    id="store-select"
                    name="store"
                    value={formData.store}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:border-[#00E37C] focus:ring-1 focus:ring-[#00E37C] outline-none transition-all"
                  >
                    {(STORE_LOCATIONS[formData.city] || []).map((branch) => (
                      <option key={branch} value={branch} className="text-slate-800">
                        {branch}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grid block Group 5: Product category and estimated Price */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 font-sans">
                <div className="sm:col-span-1">
                  <label htmlFor="product-select" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Categoría de Interés *
                  </label>
                  <select
                    id="product-select"
                    name="productInterestId"
                    value={formData.productInterestId}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:border-[#00E37C] focus:ring-1 focus:ring-[#00E37C] outline-none transition-all"
                  >
                    {PRODUCTS_CATALOG.map((p) => (
                      <option key={p.id} value={p.id} className="text-slate-800">
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="customproduct-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Modelo o Producto exacto
                  </label>
                  <input
                    id="customproduct-input"
                    name="customProduct"
                    type="text"
                    placeholder="Ej. Xiaomi Redmi Note 13"
                    value={formData.customProduct}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm focus:border-[#00E37C] focus:ring-1 focus:ring-[#00E37C] outline-none transition-all placeholder:text-slate-400"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="price-input" className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                    Monto aproximado (USD) *
                  </label>
                  <div className={getIdContainerClass(isPriceValid, formData.estimatedPrice.toString())}>
                    <span className="pl-4 pr-1 text-slate-500 font-semibold select-none shrink-0">$</span>
                    <input
                      id="price-input"
                      name="estimatedPrice"
                      type="number"
                      min="50"
                      max="3000"
                      required
                      placeholder="Ej. 350"
                      value={formData.estimatedPrice || ''}
                      onChange={handleInputChange}
                      className="w-full px-2 py-3 bg-transparent text-slate-800 text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>
              </div>

              {/* Selector Block Group 6: Plan interest choice */}
              <div className="font-sans">
                <label className="block text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                  Plan de Financiamiento de Interés *
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setFormData(prev => ({ ...prev, selectedPlan: 'basic' }))}
                    className={`rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all ${
                      formData.selectedPlan === 'basic'
                        ? 'border-[#00E37C] bg-[#00E37C]/5 shadow-sm'
                        : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-bold text-slate-800 block">Plan Básico Free</span>
                      <span className="text-xs text-slate-600 leading-normal block mt-1">3 cuotas fijas, ideal para empezar tu reputación de pago.</span>
                    </div>
                  </div>

                  <div
                    onClick={() => setFormData(prev => ({ ...prev, selectedPlan: 'plus' }))}
                    className={`rounded-2xl border p-4 cursor-pointer flex flex-col justify-between transition-all ${
                      formData.selectedPlan === 'plus'
                        ? 'border-[#00E37C] bg-[#00E37C]/5 shadow-sm'
                        : 'border-slate-200 bg-slate-50/50 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    <div>
                      <span className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                        Plan Plus VIP <span className="text-[10px] px-1.5 py-0.5 bg-[#00E37C]/15 text-[#00AA5B] font-extrabold uppercase rounded">VIP</span>
                      </span>
                      <span className="text-xs text-[#00AA5B] leading-normal font-medium block mt-1">Línea expandida, opción de 0% de inicial, recompensas de IVOOpoints.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Warning disclaimer matching prefill */}
              {formData.selectedPlan === 'basic' && (
                <div className="p-3.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs text-left leading-normal font-sans">
                  <strong>Plan Básico:</strong> Requiere el pago de una inicial mínima estimada del 30% del precio total del producto (${Math.round(formData.estimatedPrice * 0.3)} USD) para retirar en tienda, fraccionándose el saldo sobrante en 3 cuotas.
                </div>
              )}

              {/* Checkbox fields: Required */}
              <div className="space-y-3 pt-4 border-t border-slate-200 font-sans">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    name="acceptTerms"
                    type="checkbox"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 rounded text-[#00E37C] bg-white border-slate-350 focus:ring-0 accent-[#00E37C] shrink-0"
                    id="check-terms"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 transition-colors select-none leading-normal">
                    Acepto los <a href="#terminos" className="text-[#00AA5B] underline font-semibold transition-colors">Términos y condiciones de financiamiento</a> de Creditivoo. *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    name="acceptDataTreatment"
                    type="checkbox"
                    checked={formData.acceptDataTreatment}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 rounded text-[#00E37C] bg-white border-slate-350 focus:ring-0 accent-[#00E37C] shrink-0"
                    id="check-datatreat"
                  />
                  <span className="text-xs sm:text-sm text-slate-600 group-hover:text-slate-800 transition-colors select-none leading-normal">
                    Autorizo de manera libre, consciente e informada el tratamiento de mis datos personales comerciales para fines exclusivos de evaluación Creditivoo. *
                  </span>
                </label>
              </div>

              {/* Submit evaluation Trigger button CTA */}
              <div className="pt-4 font-sans">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#00E37C] text-ivoo-navy font-black text-base hover:bg-[#00df73] hover:scale-[1.01] active:scale-[0.99] transition-all shadow-[0_5px_15px_rgba(0,227,124,0.2)] flex items-center justify-center gap-2 cursor-pointer"
                  id="application-submit-btn"
                >
                  <ClipboardCheck className="w-5 h-5 text-ivoo-navy" />
                  Evaluar mi perfil
                </button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
