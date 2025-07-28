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
      'Full Name': fullName,
      'Email': email,
      'Subject': subject,
      'Message': message,
      'Submission Date': submissionDate,
      'Language': language,
      'Status': status,
      'Source Page': sourcePage,
      'User Agent': userAgent,
      'IP Address': ipAddress,
      'Consent to Marketing': consentToMarketing
    } = JSON.parse(event.body);

    console.log('Contact form data received:', {
      fullName,
      email,
      subject,
      language,
      sourcePage,
      consentToMarketing
    });

    // Validate required fields
    if (!fullName || !email || !subject || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Full Name, Email, Subject and Message are required' }),
      };
    }

    if (!consentToMarketing) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Consent to marketing is required' }),
      };
    }

    // Create unique ID for the submission
    const uniqueId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Create record in Airtable with correct field names
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblETJBTKXn3Y5yy1`;
    
    const airtableRecord = {
      fields: {
        'Full Name': fullName,
        'Email': email,
        'Subject': subject,
        'Message': message,
        'Submission Date': submissionDate || new Date().toISOString(),
        'Language': language || 'Español',
        'Status': status || 'New',
        'Source Page': sourcePage || '/contacto',
        'ID': uniqueId,
        'Accept Cookies': consentToMarketing // Map consent to Accept Cookies field
      }
    };

    console.log('Sending to Airtable:', JSON.stringify(airtableRecord, null, 2));

    const airtableResponse = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(airtableRecord)
    });

    if (!airtableResponse.ok) {
      const errorData = await airtableResponse.text();
      console.error('Airtable API error:', {
        status: airtableResponse.status,
        statusText: airtableResponse.statusText,
        body: errorData
      });
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          message: 'Failed to create record in Airtable',
          error: `${airtableResponse.status}: ${errorData}`
        }),
      };
    }

    const createdRecord = await airtableResponse.json();
    console.log('Airtable success:', createdRecord);

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Contact form submitted successfully',
        recordId: createdRecord.id 
      }),
    };

  } catch (error) {
    console.error('Error submitting contact form:', error);
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
