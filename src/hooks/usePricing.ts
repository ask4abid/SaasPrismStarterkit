import { useState } from 'react';

export type BillingCycle = 'monthly' | 'yearly';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  yearlyPrice: number;
  popular?: boolean;
  features: PlanFeature[];
  buttonText: string;
}

export const plans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    buttonText: 'Get Started',
    features: [
      { text: 'Up to 3 projects', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Community support', included: true },
      { text: 'Custom domains', included: false },
      { text: 'Advanced security', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Ideal for growing teams and businesses.',
    monthlyPrice: 49,
    yearlyPrice: 39,
    popular: true,
    buttonText: 'Upgrade to Pro',
    features: [
      { text: 'Unlimited projects', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Custom domains', included: true },
      { text: 'Advanced security', included: false },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations.',
    monthlyPrice: 199,
    yearlyPrice: 159,
    buttonText: 'Contact Sales',
    features: [
      { text: 'Unlimited everything', included: true },
      { text: 'Real-time analytics', included: true },
      { text: '24/7 Phone support', included: true },
      { text: 'Custom domains', included: true },
      { text: 'Enterprise security (SSO)', included: true },
    ],
  },
];

export const usePricing = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');

  const toggleBillingCycle = (
    _event: React.MouseEvent<HTMLElement>,
    newCycle: BillingCycle | null
  ) => {
    if (newCycle !== null) {
      setBillingCycle(newCycle);
    }
  };

  return {
    billingCycle,
    toggleBillingCycle,
    plans,
  };
};
