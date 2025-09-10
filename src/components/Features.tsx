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
    <section id="features" className="py-20 bg-white" role="region" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            id="features-heading"
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
                className="group border-gray-200 hover:border-gray-400"
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
            <h3 className="mb-6" style={{ color: '#0E1E42' }}>OCPP 2.0.1 Compliance Testing</h3>
            
            {/* Protocol Flow Visualization */}
            <div className="hidden lg:flex flex-wrap justify-center items-center gap-6 mb-8">
              {/* Charge Point */}
              <div className="text-center">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#A1C736' }}
                >
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">
                  {language === 'en' ? 'Charge Point' : 'Ladestation'}
                </p>
              </div>

              {/* Arrow */}
              <div className="block">
                <div className="flex items-center">
                  <div 
                    className="w-0 h-0 mr-05"
                    style={{
                      borderRight: '6px solid #32AEE2',
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent'
                    }}
                  />
                  <div 
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                  />
                  <div 
                    className="w-0 h-0 ml-05"
                    style={{
                      borderLeft: '6px solid #32AEE2',
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent'
                    }}
                  />
                </div>
                <div className="text-xs text-gray-400">OCPP</div>
              </div>

              {/* EVSExplorer Server */}
              <div className="text-center relative">
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#0E1E42' }}
                >
                  <Server className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-gray-600">EVSExplorer</p>
              </div>

              {/* Branching arrows container */}
              <div className="flex flex-col items-center justify-center space-y-8">
                {/* Upper arrow to Dashboard */}
                <div className="flex items-center">
                  <div 
                      className="w-0 h-0 mr-05"
                      style={{
                        borderRight: '6px solid #32AEE2',
                        borderTop: '3px solid transparent',
                        borderBottom: '3px solid transparent'
                      }}
                  />
                  <div 
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                  />
                  <div 
                    className="w-0 h-0 ml-05"
                    style={{
                      borderLeft: '6px solid #32AEE2',
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent'
                    }}
                  />
                </div>
                <div className="text-xs text-gray-400">REST API</div>
                {/* Lower arrow to 3rd Party Tool */}
                <div className="flex items-center">
                  <div 
                    className="w-0 h-0 mr-05"
                    style={{
                      borderRight: '6px solid #32AEE2',
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent'
                    }}
                  />
                  <div 
                    className="w-12 h-1 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                  />
                  <div 
                    className="w-0 h-0 ml-05"
                    style={{
                      borderLeft: '6px solid #32AEE2',
                      borderTop: '3px solid transparent',
                      borderBottom: '3px solid transparent'
                    }}
                  />
                </div>
              </div>

              {/* Right side - Dashboard and 3rd Party Tool */}
              <div className="flex flex-col items-center space-y-8">
                {/* Test Dashboard */}
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                    style={{ backgroundColor: '#0E1E42' }}
                  >
                    <Monitor className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">Dashboard</p>
                </div>

                {/* 3rd Party Test Tool */}
                <div className="text-center">
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-3 mx-auto"
                    style={{ backgroundColor: '#32AEE2' }}
                  >
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-gray-600">
                    {language === 'en' ? '3rd Party Tool' : 'Drittanbieter Test-Werkzeug'}
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile version of the protocol flow */}
            <div className="lg:hidden flex flex-col items-center mb-8">
              {/* Charge Point */}
              <div className="text-center">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#A1C736' }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-gray-600">
                  {language === 'en' ? 'Charge Point' : 'Ladestation'}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center mb-2 mt-2">
                <div 
                  className="w-1 h-3 rounded-full"
                  style={{ backgroundColor: '#32AEE2' }}
                />
                <div className="text-xs text-gray-400">OCPP</div>
                <div 
                  className="w-1 h-3 rounded-full"
                  style={{ backgroundColor: '#32AEE2' }}
                  />
              </div>

              {/* EVSExplorer Server */}
              <div className="text-center relative">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto"
                  style={{ backgroundColor: '#0E1E42' }}
                >
                  <Server className="w-4 h-4 text-white" />
                </div>
                <p className="text-xs text-gray-600">EVSExplorer</p>
              </div>

              {/* Arrow */}
              <div className="flex flex-col items-center mb-2 mt-2">
                <div 
                  className="w-1 h-3 rounded-full"
                  style={{ backgroundColor: '#32AEE2' }}
                />
                <div className="text-xs text-gray-400">REST API</div>
                <div 
                    className="w-1 h-3 rounded-full"
                    style={{ backgroundColor: '#32AEE2' }}
                />
              </div>

              {/* Bottom side - Dashboard and 3rd Party Tool */}
              <div className="flex flex-row space-x-4">
                {/* Test Dashboard */}
                <div className="text-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto"
                    style={{ backgroundColor: '#0E1E42' }}
                  >
                  <Monitor className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-600">Dashboard</p>
                </div>

                {/* 3rd Party Test Tool */}
                <div className="text-center">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-3 mx-auto"
                    style={{ backgroundColor: '#32AEE2' }}
                  >
                  <Settings className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-xs text-gray-600">
                    {language === 'en' ? '3rd Party Tool' : <>Drittanbieter<br/>Test-Werkzeug</>}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? 'Bi-directional WebSocket communication with real-time monitoring, message validation, and comprehensive testing capabilities for OCPP 2.0.1 compliance. Use our built-in dashboard or integrate with your existing 3rd party test tools via our comprehensive REST API.'
                : 'Bidirektionale WebSocket-Kommunikation mit Echtzeit-Überwachung, Nachrichten-Validierung und umfassenden Testfunktionen für OCPP 2.0.1 Compliance. Nutzen Sie unser integriertes Dashboard oder integrieren Sie Ihre bestehenden Drittanbieter Test-Werkzeuge mit unserer umfassenden REST-API.'
              }
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}