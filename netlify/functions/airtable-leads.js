exports.handler = async (event, context) => {
  // Handle CORS for all requests
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    const {
      'Lead Name': leadName,
      'Email': email,
      'WhatsApp Number': whatsappNumber,
      'Download Date': downloadDate,
      'Downloaded Content Title': downloadedContentTitle,
      'Download Source Page': downloadSourcePage,
      'Language Preference': languagePreference,
      'Lead Status': leadStatus,
      'Interests (optional)': interests,
      'Consent to Marketing': consentToMarketing,
      'Lead Notes': leadNotes
    } = JSON.parse(event.body);

    // Validate required fields
    if (!leadName || !email || !whatsappNumber) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Lead Name, Email and WhatsApp Number are required' }),
      };
    }

    if (!consentToMarketing) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Consent to marketing is required' }),
      };
    }

    // Create record in Airtable
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblr80JbJFj9N0EdS`;
    
    const airtableRecord = {
      fields: {
        'Lead Name': leadName,
        'Email': email,
        'WhatsApp Number': whatsappNumber,
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
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          message: 'Failed to create record in Airtable',
          error: errorData
        }),
      };
    }

    const createdRecord = await airtableResponse.json();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Lead created successfully',
        recordId: createdRecord.id 
      }),
    };

  } catch (error) {
    console.error('Error creating lead:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        message: 'Internal server error',
        error: error.message
      }),
    };
  }
};
