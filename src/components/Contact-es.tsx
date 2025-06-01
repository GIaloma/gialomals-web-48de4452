
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Bot, Check, AlertCircle } from 'lucide-react';

const ContactEs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const submitToAirtable = async (data: typeof formData) => {
    try {
      const airtableData = {
        fields: {
          "Full Name": data.name,
          "Email": data.email,
          "Subject": data.subject,
          "Message": data.message,
          "Submission Date": new Date().toISOString(),
          "Language": "Spanish",
          "Status": "New",
          "Source Page": window.location.href
        }
      };

      const response = await fetch('https://api.airtable.com/v0/appm1vsnLsbKwoEHC/tblETJBTKXn3Y5yy1', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN || 'patnfMJcpDvIGKmKl.b8b1a0e3f8b7d8b7e8e8c8d8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8e8'}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(airtableData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit to Airtable');
      }

      return await response.json();
    } catch (error) {
      console.error('Airtable submission error:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Submit to Airtable
      await submitToAirtable(formData);

      // Also create mailto link as backup
      const emailBody = `
Nuevo mensaje desde el sitio web de Gialoma Life Solutions

Nombre: ${formData.name}
Correo: ${formData.email}
Asunto: ${formData.subject}

Mensaje:
${formData.message}

---
Enviado desde: ${window.location.href}
Fecha: ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
      `;

      const mailtoLink = `mailto:gialoma@gialoma.com?subject=${encodeURIComponent('Nuevo mensaje del sitio web: ' + formData.subject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Show success message
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Open email client (optional backup)
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1000);

      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);

    } catch (error) {
      console.error('Error submitting form:', error);
      setError('Hubo un error al enviar tu mensaje. Por favor intenta de nuevo o contáctanos directamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contactos" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Contactos</span>
          </h2>
          <p className="text-lg text-gialoma-darkgray max-w-2xl mx-auto">
            ¿Tienes preguntas o estás listo para comenzar tu viaje con Gialoma Life Solutions? Contáctanos hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Envíanos un Mensaje</h3>
            
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                    Tu Nombre *
                  </label>
                  <Input 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Juan Pérez" 
                    className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                    Correo Electrónico *
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan@ejemplo.com" 
                    className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                  Asunto *
                </label>
                <Input 
                  id="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="¿Cómo podemos ayudarte?" 
                  className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gialoma-darkgray mb-1">
                  Mensaje *
                </label>
                <Textarea 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tu mensaje..." 
                  rows={5}
                  className="w-full border-gray-300 focus:border-gialoma-gold focus:ring-gialoma-gold"
                  required
                />
              </div>

              <Button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </Button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gialoma-black">Información de Contactos</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Phone className="h-6 w-6 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-1">Llámanos / WhatsApp</h4>
                  <p className="text-gialoma-darkgray">+34 605 865 631<br/>+39 320 070 8093</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <Mail className="h-6 w-6 text-gialoma-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-gialoma-black mb-1">Escríbenos</h4>
                  <p className="text-gialoma-darkgray">gialoma@gialoma.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gialoma-black mb-3 text-center">Horario de Atención</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gialoma-darkgray">Lunes - Viernes:</span>
                  <span className="text-gialoma-black">9:00 - 18:00 CET</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Sábado - Domingo:</span>
                  <span>Cerrado</span>
                </div>
                
                <div className="pt-3 border-t border-gray-200">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3">
                      <Bot className="h-5 w-5 text-gialoma-gold mt-1" />
                    </div>
                    <div>
                      <h5 className="font-medium text-gialoma-black">Soporte Virtual Disponible 24/7</h5>
                      <p className="text-sm text-gialoma-darkgray">
                        Nuestro asistente virtual y sistema de soporte está disponible las 24 horas para ayudarte con tus consultas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Popup */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-md mx-4 text-center">
            <div className="mb-4">
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gialoma-black mb-2">¡Mensaje Enviado!</h3>
            <p className="text-gialoma-darkgray mb-4">
              Tu mensaje ha sido enviado exitosamente. Nos pondremos en contacto contigo lo antes posible.
            </p>
            <Button 
              onClick={() => setIsSuccess(false)}
              className="bg-gialoma-gold hover:bg-gialoma-darkgold text-gialoma-black"
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactEs;
