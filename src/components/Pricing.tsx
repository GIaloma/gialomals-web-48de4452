
import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Pricing = () => {
  const [annual, setAnnual] = useState(false);
  
  const plans = [
    {
      name: "Basic",
      description: "Essential tools for small businesses and startups",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Time management tools",
        "Basic analytics dashboard",
        "General AI chatbot assistance",
        "Email support (business hours)",
        "2 user accounts",
        "Standard security features",
        "Monthly performance report"
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Advanced solutions for growing businesses",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "All Basic features",
        "Advanced analytics with insights",
        "Domain-specific chatbot",
        "Priority support (extended hours)",
        "10 user accounts",
        "Enhanced security features",
        "Weekly performance reports",
        "API access",
        "Custom integrations (2)"
      ],
      buttonText: "Choose Professional",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Customized solutions for large organizations",
      monthlyPrice: "Custom",
      annualPrice: "Custom",
      features: [
        "All Professional features",
        "Dedicated account manager",
        "Fully customized AI assistant",
        "24/7 priority support",
        "Unlimited user accounts",
        "Advanced security features",
        "Real-time analytics dashboard",
        "Custom integrations (unlimited)",
        "Quarterly strategy consulting",
        "White-label options"
      ],
      buttonText: "Contact Us",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Simple, Transparent Pricing</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include our core features with no hidden fees.
          </p>
          
          <div className="flex items-center justify-center mt-8">
            <span className={`mr-2 ${!annual ? 'font-bold text-gialoma-black' : 'text-gialoma-darkgray'}`}>Monthly</span>
            <Switch 
              checked={annual} 
              onCheckedChange={setAnnual} 
              className="mx-2"
            />
            <span className={`ml-2 ${annual ? 'font-bold text-gialoma-black' : 'text-gialoma-darkgray'}`}>
              Annual <span className="text-gialoma-gold">(Save 20%)</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white rounded-lg shadow-md p-8 border ${
                plan.popular 
                  ? 'border-gialoma-gold ring-1 ring-gialoma-gold transform md:-translate-y-4'
                  : 'border-gray-100'
              } transition-all duration-300 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gialoma-gold text-white py-1 px-4 rounded-bl-lg rounded-tr-lg text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold text-gialoma-black mb-2">{plan.name}</h3>
              <p className="text-gialoma-darkgray mb-6">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gialoma-black">
                  {typeof plan.monthlyPrice === 'number' ? 
                    `$${annual ? plan.annualPrice : plan.monthlyPrice}` : plan.monthlyPrice}
                </span>
                {typeof plan.monthlyPrice === 'number' && (
                  <span className="text-gialoma-darkgray">/{annual ? 'year' : 'month'}</span>
                )}
              </div>
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-gialoma-gold mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gialoma-darkgray">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-gialoma-gold hover:bg-gialoma-darkgold text-white' 
                    : 'bg-white border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white'
                }`}
                onClick={() => plan.name === "Enterprise" 
                  ? window.location.href = "/contact" 
                  : window.location.href = "/signup"
                }
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white p-8 rounded-lg shadow-sm max-w-3xl mx-auto border border-gray-100">
          <h3 className="text-2xl font-semibold mb-4">Need a Custom Solution?</h3>
          <p className="text-gialoma-darkgray max-w-2xl mx-auto mb-6">
            We offer tailored solutions designed specifically for your business needs. Our team will work with you to create a custom package that addresses your unique challenges.
          </p>
          <Button 
            variant="outline" 
            className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white"
            onClick={() => window.location.href = "/contact"}
          >
            Contact for Custom Pricing
          </Button>
        </div>
        
        <div className="mt-10 text-center">
          <p className="text-sm text-gialoma-darkgray max-w-2xl mx-auto">
            All plans include our core platform features. Prices shown are in USD. 
            Additional taxes may apply depending on your location. For detailed feature 
            comparisons, please visit our <a href="/features" className="text-gialoma-gold hover:underline">features page</a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
