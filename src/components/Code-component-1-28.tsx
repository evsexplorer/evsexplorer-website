import React from 'react';
import { Card, CardContent } from './ui/card';
import { 
  Zap, 
  Network, 
  Shield, 
  Monitor, 
  Settings, 
  Activity, 
  TrendingUp, 
  Link, 
  History, 
  Bell, 
  BarChart3, 
  Server 
} from 'lucide-react';
import { translations } from './translations';

interface FeaturesProps {
  language: 'en' | 'de';
}

const featureIcons = [
  Zap,           // Core OCPP 2.0.1 Protocol
  Network,       // Multi-Connection Support
  Shield,        // Message Validation
  Monitor,       // Real-time Dashboard
  Settings,      // Auto-Response System
  Activity,      // Live Event Monitoring
  TrendingUp,    // Uptime Analytics
  Link,          // Connection Control
  History,       // Message History
  Bell,          // Custom Alerts
  BarChart3,     // Transaction Visualization
  Server         // REST API Control
];

export function Features({ language }: FeaturesProps) {
  const t = translations[language];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="mb-4"
            style={{ color: '#0E1E42' }}
          >
            {t.featuresTitle}
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600">
            {t.featuresSubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {t.features.map((feature, index) => {
            const IconComponent = featureIcons[index];
            
            return (
              <Card 
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 border-gray-200 hover:border-gray-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col items-start space-y-4">
                    {/* Icon */}
                    <div 
                      className="p-3 rounded-lg"
                      style={{ 
                        backgroundColor: index % 3 === 0 ? '#32AEE2' : 
                                        index % 3 === 1 ? '#A1C736' : '#0E1E42'
                      }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2">
                      <h3 
                        className="group-hover:text-opacity-80 transition-colors"
                        style={{ color: '#0E1E42' }}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Visual Section */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-2xl p-12">
            <h3 
              className="mb-6"
              style={{ color: '#0E1E42' }}
            >
              OCPP 2.0.1 Compliance Testing
            </h3>
            
            {/* Protocol Flow Visualization */}
            <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
              {/* Charge Point */}
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#A1C736' }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">Charge Point</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block">
                <div className="flex items-center">
                  <div 
                    className="w-16 h-1 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                  />
                  <div 
                    className="w-0 h-0 ml-1"
                    style={{
                      borderLeft: '8px solid #32AEE2',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent'
                    }}
                  />
                </div>
              </div>

              {/* EVSExplorer Server */}
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#0E1E42' }}
                >
                  <Server className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">EVSExplorer</p>
              </div>

              {/* Arrow */}
              <div className="hidden sm:block">
                <div className="flex items-center">
                  <div 
                    className="w-16 h-1 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                  />
                  <div 
                    className="w-0 h-0 ml-1"
                    style={{
                      borderLeft: '8px solid #32AEE2',
                      borderTop: '4px solid transparent',
                      borderBottom: '4px solid transparent'
                    }}
                  />
                </div>
              </div>

              {/* Test Dashboard */}
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#A1C736' }}
                >
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">Dashboard</p>
              </div>
            </div>

            <p className="text-gray-600 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Complete WebSocket communication with real-time monitoring, message validation, and comprehensive testing capabilities for OCPP 2.0.1 compliance.'
                : 'Vollständige WebSocket-Kommunikation mit Echtzeit-Überwachung, Nachrichten-Validierung und umfassenden Testfunktionen für OCPP 2.0.1 Compliance.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}