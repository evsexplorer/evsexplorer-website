import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { translations } from './translations';

interface HeroProps {
  language: 'en' | 'de';
}

export function Hero({ language }: HeroProps) {
  const t = translations[language];

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="main-content" className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32" role="banner">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #0E1E42 1px, transparent 0)
            `,
            backgroundSize: '20px 20px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Tagline */}
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-gray-300 mb-8"
          style={{ backgroundColor: '#0E1E42' }}>
            <span 
              className="text-sm font-medium"
              style={{ color: 'white' }}
            >
              {t.tagline}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="max-w-4xl mx-auto mb-6">
            <span 
              className="block"
              style={{ color: '#0E1E42' }}
            >
              {t.heroTitle}
            </span>
          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-gray-600 mb-10">
            {t.heroDescription}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="inline-flex items-center px-8 py-4 hover:shadow-lg hover:opacity-90"
              style={{ backgroundColor: '#32AEE2' }}
            >
              {t.getStarted}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToFeatures}
              className="inline-flex items-center px-8 py-4 hover:shadow-lg"
              style={{ 
                borderColor: '#0E1E42',
                color: '#0E1E42'
              }}
            >
              <Play className="mr-2 w-5 h-5" />
              {t.learnMore}
            </Button>
          </div>

          {/* Visual Elements */}
          <div className="mt-16 relative">
            <div className="flex justify-center items-center space-x-8">
              {/* Connection Indicators */}
              <div className="hidden lg:flex flex-col items-center space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ backgroundColor: '#A1C736' }}
                    />
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-transparent via-current to-transparent animate-pulse"
                        style={{ color: '#32AEE2' }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Central Server Representation */}
              <div className="relative">
                <div 
                  className="w-24 h-24 rounded-xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: '#0E1E42' }}
                >
                  <div className="text-white text-center">
                    <div className="text-xs">OCPP</div>
                    <div className="text-sm font-bold">2.0.1</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center">
                  <div 
                    className="w-3 h-3 rounded-full animate-ping"
                    style={{ backgroundColor: '#A1C736' }}
                  />
                </div>
              </div>

              {/* More Connection Indicators */}
              <div className="hidden lg:flex flex-col items-center space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-transparent via-current to-transparent animate-pulse"
                        style={{ 
                          color: '#32AEE2',
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    </div>
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse"
                      style={{ 
                        backgroundColor: '#A1C736',
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}