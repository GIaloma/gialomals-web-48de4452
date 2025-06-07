import React, { useEffect } from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {

  useEffect(() => {
    if (isOpen) {
      // Create a new window/tab for the chat
      const chatWindow = window.open(
        '', // Empty URL initially
        'gialoma-chat', // Window name (reuses same window if already open)
        'width=400,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
      );

      if (chatWindow) {
        // Create the HTML content for the chat window with bubble
        const chatHTML = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${language === 'es' ? 'Chat - Gialoma' : 'Chat - Gialoma'}</title>
    
    <!-- Updated Botpress v3.0 Scripts -->
    <script src="https://cdn.botpress.cloud/webchat/v3.0/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/06/06/09/20250606092953-YNVKJXHW.js"></script>
    
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            padding: 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            max-width: 350px;
            width: 100%;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            color: #c7ae6a;
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        .subtitle {
            color: #666;
            font-size: 16px;
            margin-bottom: 10px;
        }
        .description {
            color: #888;
            font-size: 14px;
            line-height: 1.4;
        }
        .chat-info {
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            background: rgba(255,255,255,0.9);
            border-radius: 10px;
            font-size: 14px;
            color: #666;
            max-width: 350px;
            width: 100%;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .chat-info .icon {
            font-size: 20px;
            margin-bottom: 8px;
            display: block;
        }
        
        /* Custom Botpress bubble positioning */
        .bp-widget-web {
            bottom: 20px !important;
            right: 20px !important;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">GIALOMA</div>
        <div class="subtitle">${language === 'es' ? 'Asistente de IA' : 'AI Assistant'}</div>
        <div class="description">
            ${language === 'es' 
              ? 'Haz clic en el botón de chat para comenzar una conversación' 
              : 'Click the chat button to start a conversation'}
        </div>
    </div>
    
    <div class="chat-info">
        <span class="icon">💬</span>
        ${language === 'es' 
          ? 'El chat aparecerá en la esquina inferior derecha.<br>Puedes cerrar esta ventana cuando termines.' 
          : 'The chat will appear in the bottom right corner.<br>You can close this window when you\\'re done.'}
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

                // Auto-open the chat after a brief delay
                setTimeout(function() {
                    if (window.botpress && window.botpress.open) {
                        window.botpress.open();
                    }
                }, 1000);
            }, 500);
        });

        // Handle window close
        window.addEventListener('beforeunload', function() {
            // Notify parent window that chat is closing
            if (window.opener && !window.opener.closed) {
                try {
                    window.opener.postMessage({ type: 'chat-closed' }, '*');
                } catch (e) {
                    // Ignore cross-origin errors
                }
            }
        });

        // Add keyboard shortcut to close window
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                window.close();
            }
        });
    </script>
</body>
</html>
        `;

        // Write the HTML to the new window
        chatWindow.document.write(chatHTML);
        chatWindow.document.close();

        // Focus the new window
        chatWindow.focus();

        // Listen for messages from the chat window
        const handleMessage = (event: MessageEvent) => {
          if (event.data?.type === 'chat-closed') {
            onClose();
            window.removeEventListener('message', handleMessage);
          }
        };
        
        window.addEventListener('message', handleMessage);

        // Check if window is closed periodically
        const checkClosed = setInterval(() => {
          if (chatWindow.closed) {
            onClose();
            clearInterval(checkClosed);
            window.removeEventListener('message', handleMessage);
          }
        }, 1000);

        // Close our state immediately since we've opened the window
        setTimeout(() => {
          onClose();
        }, 100);
      } else {
        // If popup was blocked, show an alert
        alert(language === 'es' 
          ? 'Por favor permite las ventanas emergentes para usar el chat' 
          : 'Please allow popups to use the chat feature');
        onClose();
      }
    }
  }, [isOpen, language, onClose]);

  // This component doesn't render anything visible - the chat opens in a new window
  return null;
};

export default ChatAgent;