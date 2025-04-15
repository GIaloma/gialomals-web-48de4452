
import React, { useState, useEffect } from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
];

export default function LanguageSelector() {
  const [language, setLanguage] = useState('en');
  const [isScrolled, setIsScrolled] = useState(false);

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
    setLanguage(value);
    // You can add logic here to change the language throughout the app
    // This might involve using a context or i18n library in a real implementation
  };

  return (
    <div className="language-selector">
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger 
          className={`w-[110px] border-gray-600 ${
            isScrolled 
              ? 'bg-white text-gialoma-lightgold' 
              : 'bg-white/10 backdrop-blur-sm text-white'
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="text-lg">
              {languages.find(lang => lang.code === language)?.flag}
            </span>
            <SelectValue />
          </div>
        </SelectTrigger>
        <SelectContent className="bg-white/90 backdrop-blur-sm">
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code} className="cursor-pointer">
              <div className="flex items-center gap-2">
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
