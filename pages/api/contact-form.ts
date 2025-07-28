import type { NextApiRequest, NextApiResponse } from 'next';

interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  language: string;
  sourcePage: string;
  acceptCookies: boolean;
}

interface ApiResponse {
  success: boolean;
  error?: string;
  recordId?: string;
}

const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID; // Use existing env variable
const AIRTABLE_TABLE_ID = 'tblETJBTKXn3Y5yy1';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Method not allowed' 
    });
  }

  // Check if environment variables are configured
  if (!AIRTABLE_API_KEY) {
    console.error('AIRTABLE_API_KEY not found in environment variables');
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error - API key missing' 
    });
  }

  if (!AIRTABLE_BASE_ID) {
    console.error('AIRTABLE_BASE_ID not found in environment variables');
    return res.status(500).json({ 
      success: false, 
      error: 'Server configuration error - base ID missing' 
    });
  }

  try {
    const formData: ContactFormData = req.body;

    console.log('Contact form submission received:', {
      fullName: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      language: formData.language,
      sourcePage: formData.sourcePage
    });

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'subject', 'message'];
    for (const field of requiredFields) {
      if (!formData[field] || typeof formData[field] !== 'string' || !formData[field].trim()) {
        return res.status(400).json({
          success: false,
          error: `Missing or invalid field: ${field}`
        });
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format'
      });
    }

    // Check cookies acceptance
    if (!formData.acceptCookies) {
      return res.status(400).json({
        success: false,
        error: 'Cookies acceptance is required'
      });
    }

    // Prepare data for Airtable
    const airtableData = {
      records: [
        {
          fields: {
            'Full Name': formData.fullName.trim(),
            'Email': formData.email.trim().toLowerCase(),
            'Subject': formData.subject.trim(),
            'Message': formData.message.trim(),
            'Submission Date': new Date().toISOString(),
            'Language': formData.language || 'Español',
            'Status': 'New',
            'Source Page': formData.sourcePage || '/contacto',
            'Accept Cookies': formData.acceptCookies,
            'ID': `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
          }
        }
      ]
    };

    console.log('Sending to Airtable:', JSON.stringify(airtableData, null, 2));

    // Send to Airtable
    const airtableResponse = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(airtableData),
      }
    );

    if (!airtableResponse.ok) {
      const errorText = await airtableResponse.text();
      console.error('Airtable API error:', {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        body: errorText
      });
      
      throw new Error(`Airtable API error: ${airtableResponse.status} ${airtableResponse.statusText}`);
    }

    const airtableResult = await airtableResponse.json();
    console.log('Airtable success:', airtableResult);

    const recordId = airtableResult.records?.[0]?.id;

    return res.status(200).json({
      success: true,
      recordId: recordId
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error'
    });
  }
}