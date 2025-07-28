import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  acceptTerms: boolean;
  language: 'English' | 'Español';
  sourcePage: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validate required fields
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      return res.status(400).json({ 
        message: 'Todos los campos marcados con * son obligatorios' 
      });
    }

    if (!formData.acceptTerms) {
      return res.status(400).json({ 
        message: 'Debes aceptar nuestros términos de servicio y política de privacidad' 
      });
    }

    // Create Airtable record
    const airtableData = {
      fields: {
        'Full Name': formData.fullName,
        'Email': formData.email,
        'Subject': formData.subject,
        'Message': formData.message,
        'Submission Date': new Date().toISOString(),
        'Language': formData.language,
        'Status': 'New',
        'Source Page': formData.sourcePage || 'Website Contact Form',
        'ID': `CONTACT-${Date.now()}`,
        'Accept Cookies': formData.acceptTerms
      }
    };

    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/appm1vsnLsbKwoEHC/tblETJBTKXn3Y5yy1`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData),
      }
    );

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Airtable error:', errorData);
      throw new Error('Error al guardar en Airtable');
    }

    const airtableResult = await airtableResponse.json();

    // Track form submission in Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Contact Form Submission',
        value: 1
      });
    }

    return res.status(200).json({ 
      message: 'Mensaje enviado exitosamente. Te responderemos en un plazo de 24 horas durante los días laborales.',
      id: airtableResult.id 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      message: 'Error interno del servidor. Por favor, inténtalo de nuevo.' 
    });
  }
}