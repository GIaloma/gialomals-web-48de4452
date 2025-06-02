import React, { useEffect, useRef } from 'react';

interface EmbeddedChatAgentProps {
  language: 'en' | 'es';
  height?: string;
}

export const EmbeddedChatAgent: React.FC<EmbeddedChatAgentProps> = ({ 
  language, 
  height = '400px' 
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    // Create the HTML content for the embedded chat
    const chatHTML = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${language === 'es' ? 'Chat - Gialoma' : 'Chat - Gialoma'}</title>
    
    <!-- Botpress Scripts -->
    <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/05/01/17/20250501175630-EVUUQ1E2.js"></script>
    
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            height: 100vh;
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }
        
        .chat-header {
            background: linear-gradient(135deg, #c7ae6a 0%, #d4c078 100%);
            color: white;
            padding: 15px 20px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .chat-header h3 {
            margin: 0;
            font-size: 18px;
            font-weight: 600;
        }
        
        .chat-header p {
            margin: 5px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        
        .chat-container {
            flex: 1;
            position: relative;
            background: white;
        }
        
        .loading-message {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #666;
        }
        
        .loading-spinner {
            width: 40px;
            height: 40px;
            margin: 0 auto 15px;
            border: 3px solid #f3f3f3;
            border-top: 3px solid #c7ae6a;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Custom Botpress styling for embedded mode */
        .bp-widget-web {
            position: absolute !important;
            top: 0 !important;
            left: 0 !important;
            right: 0 !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 100% !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
        }
        
        .bp-widget-web .bp-widget-container {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
        }
        
        .bp-widget-web .bp-widget-fab {
            display: none !important;
        }
    </style>
</head>
<body>
    <div class="chat-header">
        <h3>
            ${language === 'es' ? 'Asistente Virtual de Gialoma' : 'Gialoma Virtual Assistant'}
        </h3>
        <p>
            ${language === 'es' 
              ? '¡Hola! Estoy aquí para ayudarte con cualquier pregunta.' 
              : 'Hello! I\'m here to help you with any questions.'}
        </p>
    </div>
    
    <div class="chat-container">
        <div class="loading-message" id="loading">
            <div class="loading-spinner"></div>
            <p>${language === 'es' ? 'Cargando chat...' : 'Loading chat...'}</p>
        </div>
    </div>

    <script>
        // Initialize Botpress when page loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                // Initialize Botpress with your configuration
                window.botpress.init({
                    "botId": "757520fb-9440-4ae6-bba2-9d41959405fd",
                    "configuration": {
                        "botName": "Gialoma",
                        "botDescription": "${language === 'es' ? 'Me dejas ayudarte?' : 'Can I help you?'}",
                        "fabImage": "https://files.bpcontent.cloud/2025/05/27/16/20250527163748-RGFMO1M4.png",
                        "website": {},
                        "email": {
                            "title": "gialomals@gmail.com",
                            "link": "gialomals@gmail.com"
                        },
                        "phone": {},
                        "termsOfService": {},
                        "privacyPolicy": {},
                        "color": "#c7ae6a",
                        "variant": "soft",
                        "themeMode": "light",
                        "fontFamily": "inter",
                        "radius": 1,
                        "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/05/27/14/20250527145559-MBN7KQN2.css"
                    },
                    "clientId": "41604519-835f-482a-9b27-8f639293c1a9"
                });

                // Auto-open the chat and hide loading
                setTimeout(function() {
                    const loading = document.getElementById('loading');
                    if (loading) loading.style.display = 'none';
                    
                    if (window.botpress && window.botpress.open) {
                        window.botpress.open();
                    }
                }, 1500);
            }, 500);
        });
    </script>
</body>
</html>
    `;

    // Set the iframe content
    iframe.src = 'data:text/html;charset=utf-8,' + encodeURIComponent(chatHTML);
  }, [language]);

  return (
    <div className="w-full border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
      <iframe
        ref={iframeRef}
        style={{ width: '100%', height, border: 'none' }}
        title={language === 'es' ? 'Chat de Gialoma' : 'Gialoma Chat'}
        allow="microphone; camera; geolocation"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  );
};

export default EmbeddedChatAgent;