import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Mail, Building, User, CheckCircle, X } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface BookLeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const BookLeadForm: React.FC<BookLeadFormProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    leadName: '',
    email: '',
    companyName: '',
    interests: [] as string[],
    consentToMarketing: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const interestOptions = [
    { id: 'selApUZtpbaMgZC6T', value: 'Marketing', label: 'Marketing Digital' },
    { id: 'selCuoxYcBGy2ni5H', value: 'Sales', label: 'Automatización de Ventas' },
    { id: 'selxEUL02LzwR7f7x', value: 'Technology', label: 'Implementación Tecnológica' },
    { id: 'seljwV8eF9bCJJ44A', value: 'Product Updates', label: 'Actualizaciones del Libro' },
    { id: 'sel9ndF1T0wafLGqE', value: 'Events', label: 'Eventos y Webinars' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInterestChange = (interestValue: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestValue]
        : prev.interests.filter(interest => interest !== interestValue)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.leadName || !formData.email) {
      toast({
        title: "Campos requeridos",
        description: "Por favor completa nombre y email.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.consentToMarketing) {
      toast({
        title: "Consentimiento requerido",
        description: "Necesitas aceptar recibir el PDF por email.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Create the record in Airtable
      const airtableData = {
        "Lead Name": formData.leadName,
        "Email": formData.email,
        "Download Date": new Date().toISOString().split('T')[0],
        "Downloaded Content Title": "Alquimia Digital: Capítulo 0 - Introducción + Primer Capítulo",
        "Download Source Page": "/libro",
        "Language Preference": "Español",
        "Lead Status": "New",
        "Interests (optional)": formData.interests,
        "Consent to Marketing": formData.consentToMarketing,
        "Lead Notes": formData.companyName ? `Empresa: ${formData.companyName}` : ""
      };

      const response = await fetch('/api/airtable-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData)
      });

      if (response.ok) {
        setIsSuccess(true);
        toast({
          title: "¡Éxito!",
          description: "Te hemos enviado el PDF a tu email. ¡Revisa tu bandeja de entrada!",
        });
        
        // Track the conversion
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'lead_generation', {
            event_category: 'Book',
            event_label: 'Free PDF Download',
            value: 1
          });
        }

        setTimeout(() => {
          onSuccess();
          onClose();
        }, 3000);
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu solicitud. Inténtalo de nuevo.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 h-8 w-8 p-0"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          
          {isSuccess ? (
            <div className="text-center">
              <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
              <CardTitle className="text-green-700">¡PDF Enviado!</CardTitle>
              <CardDescription>
                Revisa tu email para descargar tu copia gratuita
              </CardDescription>
            </div>
          ) : (
            <>
              <div className="flex items-center gap-3 mb-2">
                <Download className="h-6 w-6 text-gialoma-gold" />
                <CardTitle>Descarga Gratuita</CardTitle>
              </div>
              <CardDescription>
                Obtén los primeros capítulos de "Alquimia Digital" completamente gratis
              </CardDescription>
            </>
          )}
        </CardHeader>

        {!isSuccess && (
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="leadName" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Nombre completo *
                </Label>
                <Input
                  id="leadName"
                  type="text"
                  placeholder="Tu nombre y apellido"
                  value={formData.leadName}
                  onChange={(e) => handleInputChange('leadName', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="companyName" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  Empresa (opcional)
                </Label>
                <Input
                  id="companyName"
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                />
              </div>

              <div className="space-y-3">
                <Label>¿Qué te interesa más? (opcional)</Label>
                <div className="space-y-2">
                  {interestOptions.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={option.id}
                        checked={formData.interests.includes(option.value)}
                        onCheckedChange={(checked) => 
                          handleInterestChange(option.value, checked as boolean)
                        }
                      />
                      <Label 
                        htmlFor={option.id} 
                        className="text-sm font-normal cursor-pointer"
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="consent"
                  checked={formData.consentToMarketing}
                  onCheckedChange={(checked) => 
                    setFormData(prev => ({ ...prev, consentToMarketing: checked as boolean }))
                  }
                  required
                />
                <Label htmlFor="consent" className="text-xs leading-relaxed cursor-pointer">
                  Acepto recibir el PDF por email y ocasionalmente contenido relevante sobre 
                  transformación digital. Puedes darte de baja en cualquier momento. *
                </Label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gialoma-gold hover:bg-gialoma-darkgold text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Obtener PDF Gratuito
                  </>
                )}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                Te enviaremos el PDF inmediatamente a tu email
              </p>
            </form>
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default BookLeadForm;