
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  flag: string;
  path: string;
}

interface LanguageSelectorProps {
  isMobile?: boolean;
  isCompact?: boolean;
  customColor?: string;
}

const languages: Language[] = [
  { code: 'es', name: 'ES', flag: 'ES', path: '/' },
  { code: 'en', name: 'EN', flag: 'GB', path: '/en' },
  // Italian temporarily removed - { code: 'it', name: 'IT', flag: 'IT', path: '/it' },
];

// CSS flag component that works across all browsers
const FlagIcon = ({ countryCode, className = "" }: { countryCode: string; className?: string }) => {
  const flagStyles = {
    ES: {
      background: 'linear-gradient(to bottom, #C60B1E 0%, #C60B1E 25%, #FFC400 25%, #FFC400 75%, #C60B1E 75%, #C60B1E 100%)',
    },
    GB: {
      background: `
        linear-gradient(to bottom, #012169 0%, #012169 33.33%, white 33.33%, white 66.66%, #C8102E 66.66%, #C8102E 100%),
        linear-gradient(to right, #012169 0%, #012169 33.33%, white 33.33%, white 66.66%, #C8102E 66.66%, #C8102E 100%)
      `,
      backgroundBlendMode: 'multiply',
    }
  };

  return (
    <div 
      className={`inline-block w-5 h-4 rounded-sm border border-gray-300 ${className}`}
      style={flagStyles[countryCode as keyof typeof flagStyles]}
      role="img"
      aria-label={`${countryCode} flag`}
    />
  );
};

export default function LanguageSelector({ isMobile = false, isCompact = false, customColor }: LanguageSelectorProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  // Determine current language based on URL
  const getCurrentLanguage = () => {
    const path = location.pathname;
    if (path.startsWith('/en')) return 'en';
    // if (path.startsWith('/it')) return 'it'; // Italian temporarily disabled
    return 'es'; // Default to Spanish
  };

  const [language, setLanguage] = useState(getCurrentLanguage());

  useEffect(() => {
    setLanguage(getCurrentLanguage());
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (value: string) => {
    const selectedLanguage = languages.find(lang => lang.code === value);
    if (selectedLanguage) {
      setLanguage(value);
      // Navigate to the new language page and refresh
      window.location.href = selectedLanguage.path;
    }
  };

  // Get current language data
  const currentLanguage = languages.find(lang => lang.code === language);

  // Determine text color based on customColor, scrolled state, or defaults
  const getTextColor = () => {
    if (customColor) {
      return customColor === 'white' ? 'text-white' : `text-${customColor}`;
    }
    return isScrolled ? 'text-gialoma-lightgold' : 'text-white';
  };

  return (
    <div className="language-selector">
      {isMobile ? (
        // Mobile version
        <div className="mb-1 text-gialoma-lightgold text-sm font-medium">Seleccionar Idioma:</div>
      ) : null}
      
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger 
          className={
            isMobile
              ? "w-full bg-white text-gialoma-lightgold border-gialoma-lightgold" 
              : isCompact 
                ? `h-9 py-1 px-3 w-auto min-w-[80px] border-gray-300 ${ 
                    isScrolled 
                      ? 'bg-white text-gialoma-gold' 
                      : `bg-white/10 backdrop-blur-sm ${getTextColor()}`
                  }`
                : `w-[100px] border-gray-600 ${ 
                    isScrolled 
                      ? 'bg-white text-gialoma-gold' 
                      : `bg-white/10 backdrop-blur-sm ${getTextColor()}`
                  }`
          }
        >
          <div className="flex items-center gap-2">
            {isMobile ? (
              <Globe size={16} className="text-gialoma-lightgold" />
            ) : (
              <FlagIcon countryCode={currentLanguage?.flag || 'ES'} />
            )}
            <span className="font-medium text-sm">
              {currentLanguage?.name}
            </span>
          </div>
        </SelectTrigger>
        <SelectContent className={isMobile ? "bg-white" : "bg-white/90 backdrop-blur-sm"}>
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code} 
              className="cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <FlagIcon countryCode={lang.flag} />
                <span className="font-medium">{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
