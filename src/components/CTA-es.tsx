
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Check, ExternalLink } from 'lucide-react';
import GratisBadge from './GratisBadge';

const CTAEs = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    employees: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    setSubmitted(true);
    // Reset form after simulating submission
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        business: '',
        employees: '',
        message: ''
      });
    }, 3000);
  };

  const openDigitalizationPage = () => {
    window.open('/digitalizacion', '_blank');
  };

  const handlePidePresupuesto = () => {
    // Open TidyCal booking page in a new tab
    window.open('https://tidycal.com/gialomals/pide-presupuesto', '_blank');
  };

  return (
    <section id="empezar" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 gold-gradient opacity-90 z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            ¿Listo para recuperar tu tiempo?
          </h2>
          <p className="text-2xl mb-10 text-white/90 leading-relaxed">
            Permítenos mostrarte cómo nuestras soluciones tecnológicas pueden transformar las operaciones de tu negocio y liberar tu valioso tiempo.
          </p>
          
          {!submitted ? (
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button 
                className="bg-black hover:bg-black text-white hover:text-gialoma-gold transition-colors text-xl px-10 py-7"
                onClick={handlePidePresupuesto}
              >
                Pide un Presupuesto
              </Button>
              <div className="relative group">
                <Button 
                  className="bg-black hover:bg-black text-white hover:text-gialoma-gold transition-colors text-xl px-10 py-7"
                  onClick={openDigitalizationPage}
                >
                  Analiza tu Negocio <ExternalLink className="ml-3 h-6 w-6" />
                </Button>
                <GratisBadge 
                  variant="light" 
                  className="absolute -top-3 -right-3 z-10 group-hover:scale-110"
                />
              </div>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gialoma-gold mb-2">¡Gracias!</h3>
              <p className="text-gray-700">
                Hemos recibido tu solicitud. Nuestro equipo analizará las necesidades de tu negocio y se pondrá en contacto contigo pronto.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTAEs;
