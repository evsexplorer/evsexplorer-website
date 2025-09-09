import React from 'react';
import { Button } from './ui/button';
import { Globe } from 'lucide-react';
import evsexplorerLogo from 'figma:asset/cb71f464b18f6d1a5ae5e91219f7311c3c3df3dc.png';
import { translations } from './translations';

interface HeaderProps {
  language: 'en' | 'de';
  setLanguage: (lang: 'en' | 'de') => void;
}

export function Header({ language, setLanguage }: HeaderProps) {
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={evsexplorerLogo} 
              alt="EVSExplorer" 
              className="h-10 w-auto"
            />
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-gray-600" />
              <Button
                variant={language === 'en' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('en')}
                className="px-3 py-1"
                style={{ 
                  backgroundColor: language === 'en' ? '#0E1E42' : 'transparent',
                  borderColor: '#0E1E42',
                  color: language === 'en' ? 'white' : '#0E1E42'
                }}
              >
                EN
              </Button>
              <Button
                variant={language === 'de' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setLanguage('de')}
                className="px-3 py-1"
                style={{ 
                  backgroundColor: language === 'de' ? '#0E1E42' : 'transparent',
                  borderColor: '#0E1E42',
                  color: language === 'de' ? 'white' : '#0E1E42'
                }}
              >
                DE
              </Button>
            </div>

            {/* Contact Button */}
            <Button 
              onClick={scrollToContact}
              style={{ backgroundColor: '#32AEE2' }}
              className="hover:opacity-90"
            >
              {t.contact}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}