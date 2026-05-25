/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Plan {
  id: 'basic' | 'plus';
  name: string;
  tagline: string;
  price: string;
  benefits: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface ProductInterest {
  id: string;
  name: string;
  category: string;
  avgPrice: number;
}

export interface ApplicationFormData {
  name: string;
  lastName: string;
  idNumber: string; // Cédula de identidad
  phone: string;
  email: string;
  city: string;
  store: string;
  productInterestId: string;
  customProduct?: string;
  estimatedPrice: number;
  selectedPlan: 'basic' | 'plus';
  acceptTerms: boolean;
  acceptDataTreatment: boolean;
}

export interface BenefitCard {
  title: string;
  description: string;
  iconName: string;
}
