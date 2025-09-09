import React from 'react';
import { Separator } from './ui/separator';
import evsexplorerLogo from 'figma:asset/cb71f464b18f6d1a5ae5e91219f7311c3c3df3dc.png';
import { translations } from './translations';

interface FooterProps {
  language: 'en' | 'de';
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer 
      className="py-12"
      style={{ backgroundColor: '#0E1E42' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={evsexplorerLogo} 
              alt="EVSExplorer" 
              className="h-12 w-auto filter brightness-0 invert"
            />
          </div>

          {/* Tagline */}
          <p className="text-center text-gray-300 max-w-2xl">
            {t.hostedAt}
          </p>

          <Separator className="w-full max-w-md bg-gray-600" />

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              {t.copyright}
            </p>
            
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                {language === 'en' ? 'Hosted at' : 'Gehostet unter'} evsexplorer.com
              </p>
            </div>
          </div>

          {/* Technical Info */}
          <div className="text-center pt-8 border-t border-gray-600 w-full">
            <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-400">
              <span>OCPP 2.0.1</span>
              <span>•</span>
              <span>WebSocket Server</span>
              <span>•</span>
              <span>REST API</span>
              <span>•</span>
              <span>JSON Schema Validation</span>
              <span>•</span>
              <span>{language === 'en' ? 'Professional Testing' : 'Professionelle Tests'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}