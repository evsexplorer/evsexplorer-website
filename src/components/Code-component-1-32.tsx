import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import { translations } from './translations';

interface ContactProps {
  language: 'en' | 'de';
}

export function Contact({ language }: ContactProps) {
  const t = translations[language];

  const handleContactClick = () => {
    window.location.href = `mailto:${t.contactEmail}`;
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="mb-4"
            style={{ color: '#0E1E42' }}
          >
            {t.contactTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                {/* Icon */}
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto"
                  style={{ backgroundColor: '#32AEE2' }}
                >
                  <Mail className="w-10 h-10 text-white" />
                </div>

                {/* Contact Information */}
                <div className="space-y-4">
                  <h3 style={{ color: '#0E1E42' }}>
                    {language === 'en' ? 'Contact Our Sales Team' : 'Kontaktieren Sie unser Vertriebsteam'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'en' 
                      ? 'Get in touch with our team to discuss your OCPP testing requirements and discover how EVSExplorer can enhance your workflow.'
                      : 'Setzen Sie sich mit unserem Team in Verbindung, um Ihre OCPP-Testanforderungen zu besprechen und zu erfahren, wie EVSExplorer Ihren Workflow verbessern kann.'
                    }
                  </p>
                </div>

                {/* Email Display */}
                <div className="flex items-center justify-center space-x-3 p-4 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-5 h-5 text-gray-500" />
                  <span 
                    className="font-medium"
                    style={{ color: '#0E1E42' }}
                  >
                    {t.contactEmail}
                  </span>
                </div>

                {/* CTA Button */}
                <Button
                  onClick={handleContactClick}
                  size="lg"
                  className="inline-flex items-center px-8 py-4"
                  style={{ backgroundColor: '#A1C736' }}
                >
                  {t.contactButton}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>

                {/* Additional Info */}
                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    {language === 'en'
                      ? 'We typically respond within 24 hours during business days.'
                      : 'Wir antworten normalerweise innerhalb von 24 Stunden an Werktagen.'
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Contact Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#0E1E42' }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 style={{ color: '#0E1E42' }}>
                {language === 'en' ? 'Expert Support' : 'Expertenunterstützung'}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'en'
                  ? 'Get technical guidance from our OCPP specialists'
                  : 'Erhalten Sie technische Beratung von unseren OCPP-Spezialisten'
                }
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#32AEE2' }}
              >
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <h4 style={{ color: '#0E1E42' }}>
                {language === 'en' ? 'Quick Setup' : 'Schnelle Einrichtung'}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'en'
                  ? 'Start testing your charge points within hours'
                  : 'Beginnen Sie innerhalb weniger Stunden mit dem Testen Ihrer Ladepunkte'
                }
              </p>
            </div>

            <div className="text-center">
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#A1C736' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h4 style={{ color: '#0E1E42' }}>
                {language === 'en' ? 'Custom Solutions' : 'Individuelle Lösungen'}
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                {language === 'en'
                  ? 'Tailored implementations for your specific needs'
                  : 'Maßgeschneiderte Implementierungen für Ihre spezifischen Anforderungen'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}