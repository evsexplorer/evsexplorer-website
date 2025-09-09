export const translations = {
  en: {
    // Header
    contact: 'Contact',
    
    // Hero
    tagline: 'Professional OCPP 2.0.1 Testing & Monitoring',
    heroTitle: 'Looking for the right tool to test your EV charge point?',
    heroDescription: 'EVSExplorer is a comprehensive OCPP 2.0.1 WebSocket server designed for monitoring and compliance testing of electric vehicle charge points. Use our REST API to create your individual testing scenarios.',
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    // Features
    featuresTitle: 'Comprehensive OCPP 2.0.1 Solution',
    featuresSubtitle: 'Everything you need for professional charge point testing and monitoring',
    
    features: [
      {
        title: 'OCPP 2.0.1 Protocol',
        description: 'Implements the JSON-based OCPP 2.0.1 protocol for seamless communication with charge points.'
      },
      {
        title: 'Multi-Connection Support',
        description: 'Handle connections from multiple charge points simultaneously.'
      },
      {
        title: 'Message Validation',
        description: 'Validate incoming and outgoing OCPP messages using the official JSON schemata for compliance testing.'
      },
      {
        title: 'Real-time Dashboard',
        description: 'Monitor all charge points with comprehensive status information in an intuitive dashboard.'
      },
      {
        title: 'Auto-Response System',
        description: 'Define custom auto-responses to OCPP requests with user-defined response or standard error messages.'
      },
      {
        title: 'Live Event Monitoring',
        description: 'Track connection events like boot events, connector status updates or transaction events in real-time.'
      },
      {
        title: 'Connection Stability Analytics',
        description: 'Analyze online and offline periods of charge points for connection stability insights.'
      },
      {
        title: 'WebSocket Control',
        description: 'Close WebSocket connections or block re-connections for defined testing periods.'
      },
      {
        title: 'Message History',
        description: 'Browse, filter and search in OCPP messages within a certain timeframe.'
      },
      {
        title: 'Custom Alerts',
        description: 'Set up custom alerts to quickly be notified about abnormal charge point conditions.'
      },
      {
        title: 'Transaction Visualization',
        description: 'Visualize charging transactions for detailed meter value analysis and reporting.'
      },
      {
        title: 'REST API Control',
        description: 'Control the entire system through comprehensive REST API endpoints for test automation.'
      }
    ],
    
    // Contact
    contactTitle: 'Ready to Get Started?',
    contactSubtitle: 'Contact us to learn how EVSExplorer can streamline your OCPP testing workflow.',
    contactButton: 'Contact us',
    contactEmail: 'hello@evsexplorer.com',
    
    // Footer
    copyright: '© 2025 EVSExplorer. All rights reserved.',
    brandClaim: 'Professional OCPP 2.0.1 testing'
  },
  de: {
    // Header
    contact: 'Kontakt',
    
    // Hero
    tagline: 'Professionelles OCPP 2.0.1 Testing & Monitoring',
    heroTitle: 'Auf der Suche nach dem richtigen Werkzeug, um Ihre EV-Ladestation zu testen?',
    heroDescription: 'EVSExplorer ist ein umfangreicher OCPP 2.0.1 WebSocket-Server zur Überwachung und für Compliance-Tests von Elektrofahrzeug-Ladestationen. Nutzen Sie auch unsere REST-API um Ihre ganz speziellen Testszenarien zu erstellen.',
    getStarted: 'Los geht\'s',
    learnMore: 'Mehr erfahren',
    
    // Features
    featuresTitle: 'Umfangreiche OCPP 2.0.1 Lösung',
    featuresSubtitle: 'Alles, was Sie für professionelle Ladepunkt-Tests und Überwachung benötigen',
    
    features: [
      {
        title: 'OCPP 2.0.1 Protokoll',
        description: 'Implementiert das JSON-basierte OCPP 2.0.1 Protokoll für die reibungslose Kommunikation mit Ladestationen.'
      },
      {
        title: 'Unterstützung mehrerer Verbindungen',
        description: 'Unterstützt Verbindungen von mehreren Ladepunkten gleichzeitig.'
      },
      {
        title: 'Nachrichten-Validierung',
        description: 'Validierung aller eingehenden und ausgehenden OCPP-Nachrichten anhand der offiziellen JSON-Schemata für Compliance-Tests.'
      },
      {
        title: 'Echtzeit-Dashboard',
        description: 'Überwachen Sie alle Ladepunkte mit zahlreichen Statusinformationen in einem intuitiven Dashboard.'
      },
      {
        title: 'Automatische Antworten',
        description: 'Legen Sie automatische Antworten auf OCPP-Anfragen als benutzerdefinierte Nachrichten oder Standardfehler fest.'
      },
      {
        title: 'Echtzeit-Überwachung',
        description: 'Verfolgen Sie Verbindungsaufbau bzw. -ende, Anmeldung, Konnektor-Statusupdates oder Transaktionsereignisse in Echtzeit.'
      },
      {
        title: 'Analyse der Verbindungsstabilität',
        description: 'Analysieren Sie Online- und Offline-Zeiträume von Ladepunkten um Einblick in die Stabilität der Onlineverbindung zu bekommen.'
      },
      {
        title: 'Kontrolle über Websockets',
        description: 'Schließen Sie WebSocket-Verbindungen oder blockieren Sie Verbindungsversuche für definierte Zeiträume.'
      },
      {
        title: 'Nachrichten-Historie',
        description: 'Analysieren, filtern und suchen Sie nach Inhalten in OCPP-Nachrichten innerhalb eines bestimmten Zeitraums.'
      },
      {
        title: 'Benutzerdefinierte Alarme',
        description: 'Richten Sie benutzerdefinierte Alarme ein, um schnell auf bestimmte Zustände einer Ladestation aufmerksam gemacht zu werden.'
      },
      {
        title: 'Visualisierung von Ladevorgängen',
        description: 'Visualisieren Sie Ladevorgänge zur detaillierten Messdaten-Analyse und Berichterstattung.'
      },
      {
        title: 'REST-API Steuerung',
        description: 'Steuern Sie das gesamte System über die umfangreiche REST-API um Ihre Tests zu automatisieren.'
      }
    ],
    
    // Contact
    contactTitle: 'Bereit loszulegen?',
    contactSubtitle: 'Kontaktieren Sie uns, um zu erfahren, wie EVSExplorer Ihren Test-Workflow optimieren kann.',
    contactButton: 'Kontaktieren Sie uns',
    contactEmail: 'hello@evsexplorer.com',
    
    // Footer
    copyright: '© 2025 EVSExplorer. Alle Rechte vorbehalten.',
    brandClaim: 'Professionelle OCPP 2.0.1 Testlösung'
  }
} as const;