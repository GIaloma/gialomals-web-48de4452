import React from 'react';

interface ChatAgentProps {
  isOpen: boolean;
  onClose: () => void;
  language: 'en' | 'es';
}

export const ChatAgent: React.FC<ChatAgentProps> = ({ isOpen, onClose, language }) => {
  
  // Open Botpress chat in a new tab/window
  React.useEffect(() => {
    if (isOpen) {
      // Create a new window/tab for the chat
      const chatWindow = window.open(
        '', // Empty URL initially
        'gialoma-chat', // Window name (reuses same window if already open)
        'width=400,height=600,scrollbars=yes,resizable=yes,menubar=no,toolbar=no,location=no,status=no'
      );

      if (chatWindow) {
        // Create the HTML content for the chat window
        const chatHTML = `
<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${language === 'es' ? 'Chat - Gialoma' : 'Chat - Gialoma'}</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            min-height: 100vh;
        }
        .header {
            text-align: center;
            margin-bottom: 20px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: #c7ae6a;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #666;
            font-size: 14px;
        }
        .chat-container {
            background: white;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow: hidden;
            height: 70vh;
        }
        .close-info {
            text-align: center;
            margin-top: 20px;
            padding: 15px;
            background: rgba(255,255,255,0.8);
            border-radius: 10px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">GIALOMA</div>
        <div class="subtitle">${language === 'es' ? 'Asistente de IA' : 'AI Assistant'}</div>
    </div>
    
    <div class="chat-container" id="chat-container">
        <!-- Botpress chat will be injected here -->
    </div>
    
    <div class="close-info">
        ${language === 'es' 
          ? '💡 Puedes cerrar esta ventana cuando termines de chatear' 
          : '💡 You can close this window when you\'re done chatting'}
    </div>

    <!-- Load Botpress Scripts -->
    <script src="https://cdn.botpress.cloud/webchat/v2.4/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2025/05/01/17/20250501175630-EVUUQ1E2.js"></script>
    
    <script>
        // Initialize Botpress when page loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                if (window.botpressWebChat) {
                    window.botpressWebChat.init();
                    window.botpressWebChat.show();
                    
                    // Try to style the chat to fit the container
                    setTimeout(function() {
                        const chatElement = document.querySelector('#bp-web-widget') || 
                                          document.querySelector('[data-testid="widget"]');
                        if (chatElement) {
                            chatElement.style.position = 'relative';
                            chatElement.style.width = '100%';
                            chatElement.style.height = '100%';
                            chatElement.style.border = 'none';
                        }
                    }, 1000);
                }
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