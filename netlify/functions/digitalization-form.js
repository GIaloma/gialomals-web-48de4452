exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method not allowed' }),
    };
  }

  try {
    // Parse incoming data
    const formData = JSON.parse(event.body);
    console.log('Received form data:', formData);
    
    // Validate required fields
    const requiredFields = [
      'Nombre Completo',
      'Email', 
      'Empresa',
      'Cargo',
      'Cual es el tamaño de tu empresa?',
      'En qué sector opera tu empresa?'
    ];
    
    for (const field of requiredFields) {
      if (!formData[field]) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ message: `${field} is required` }),
        };
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData['Email'])) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ message: 'Invalid email format' }),
      };
    }

    // Create unique ID
    const uniqueId = `eval_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const currentDate = new Date().toISOString();

    // Prepare Airtable record with exact field mapping
    const airtableRecord = {
      fields: {
        // Basic Information
        'Nombre Completo': formData['Nombre Completo'],
        'Email': formData['Email'],
        'Empresa': formData['Empresa'],
        'Cargo': formData['Cargo'],
        'Teléfono': formData['Teléfono'] || '',
        
        // Company Information
        'Cual es el tamaño de tu empresa?': formData['Cual es el tamaño de tu empresa?'],
        'En qué sector opera tu empresa?': formData['En qué sector opera tu empresa?'],
        
        // Process Questions
        'P1 - Procesos Manuales Diarios': formData['P1 - Procesos Manuales Diarios'] || '',
        'P2 - Frecuencia de Errores': formData['P2 - Frecuencia de Errores'] || '',
        'P3 - Herramientas Digitales': formData['P3 - Herramientas Digitales'] || '',
        'P4 - Integración de Herramientas': formData['P4 - Integración de Herramientas'] || '',
        'P5 - Horas Automatizables': formData['P5 - Horas Automatizables'] || '',
        'P6 - Tiempo Procesos': formData['P6 - Tiempo Procesos'] || '',
        'P7 - Nivel de Estrés': formData['P7 - Nivel de Estrés'] || '',
        'P8 - Agotamiento Digital': formData['P8 - Agotamiento Digital'] || '',
        'P9 - Procesos Digitalizados': formData['P9 - Procesos Digitalizados'] || '',
        'P10 - Análisis de Datos': formData['P10 - Análisis de Datos'] || '',
        'P11 - Horas Extra': formData['P11 - Horas Extra'] || '',
        'P12 - Desconexión Digital': formData['P12 - Desconexión Digital'] || '',
        'P13 - Áreas Prioritarias': formData['P13 - Áreas Prioritarias'] || '',
        'P14 - Tareas Frustrantes': formData['P14 - Tareas Frustrantes'] || '',
        'P15 - Objetivos Digitalización': formData['P15 - Objetivos Digitalización'] || '',
        'P16 - Presupuesto': formData['P16 - Presupuesto'] || '',
        
        // System fields
        'ID Evaluación': uniqueId,
        'Fecha Evaluación': currentDate,
        'Accept Cookies': formData['Accept Cookies'] || false,
        
        // Additional tracking fields
        'Próxima Acción': 'Contactar'
      }
    };

    console.log('Sending to Airtable:', airtableRecord);

    // Send to Airtable
    const airtableUrl = `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/tblVZPZIBWGdanps2`;
    
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
      console.error('Airtable error response:', errorData);
      console.error('Airtable error status:', airtableResponse.status);
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          message: 'Failed to create record in Airtable',
          details: `Status: ${airtableResponse.status}`,
          airtableError: errorData
        }),
      };
    }

    const createdRecord = await airtableResponse.json();
    console.log('Created Airtable record:', createdRecord);

    // Return success response
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        message: 'Form submitted successfully',
        recordId: createdRecord.id,
        evaluationId: uniqueId
      }),
    };

  } catch (error) {
    console.error('Function error:', error);
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