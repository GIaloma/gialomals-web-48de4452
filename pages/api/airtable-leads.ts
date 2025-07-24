import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const {
      'Lead Name': leadName,
      'Email': email,
      'Download Date': downloadDate,
      'Downloaded Content Title': downloadedContentTitle,
      'Download Source Page': downloadSourcePage,
      'Language Preference': languagePreference,
      'Lead Status': leadStatus,
      'Interests (optional)': interests,
      'Consent to Marketing': consentToMarketing,
      'Lead Notes': leadNotes
    } = req.body;

    // Validate required fields
    if (!leadName || !email) {
      return res.status(400).json({ message: 'Lead Name and Email are required' });
    }

    if (!consentToMarketing) {
      return res.status(400).json({ message: 'Consent to marketing is required' });
    }

    // Create record in Airtable
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblr80JbJFj9N0EdS`;
    
    const airtableRecord = {
      fields: {
        'Lead Name': leadName,
        'Email': email,
        'Download Date': downloadDate,
        'Downloaded Content Title': downloadedContentTitle || 'Alquimia Digital: Capítulo 0 - Introducción + Primer Capítulo',
        'Download Source Page': downloadSourcePage || '/libro',
        'Language Preference': languagePreference || 'Español',
        'Lead Status': leadStatus || 'New',
        'Interests (optional)': interests || [],
        'Consent to Marketing': consentToMarketing,
        'Lead Notes': leadNotes || ''
      }
    };

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRecord)
    });

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.json();
      console.error('Airtable error:', errorData);
      throw new Error('Failed to create record in Airtable');
    }

    const createdRecord = await airtableResponse.json();

    // Here you could also trigger an email send using your preferred email service
    // For example, using Resend, SendGrid, or another service
    // await sendPDFEmail(email, leadName);

    res.status(200).json({ 
      message: 'Lead created successfully',
      recordId: createdRecord.id 
    });

  } catch (error) {
    console.error('Error creating lead:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
}
