import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  language: 'en' | 'de';
}

export function SEO({ language }: SEOProps) {
  const seoData = {
    en: {
      title: 'EVSExplorer - Professional OCPP 2.0.1 Testing & Charge Point Monitoring | EVSE Compliance Testing',
      description: 'EVSExplorer is the leading OCPP 2.0.1 WebSocket server for charge point testing, EVSE monitoring, and compliance testing. Professional OCPP testing solutions with REST API control, real-time monitoring, and comprehensive charge point validation.',
      keywords: 'OCPP, OCPP 2.0.1, charge point testing, EVSE testing, EVSE monitoring, charge point monitoring, OCPP compliance testing, electric vehicle charging, WebSocket server, charge point validation, EV charging infrastructure, OCPP protocol testing, charge point certification, EVSE compliance, electric vehicle supply equipment',
      canonicalUrl: 'https://evsexplorer.com',
      siteName: 'EVSExplorer',
      author: 'EVSExplorer Team',
      twitterCard: 'summary_large_image',
      ogType: 'website'
    },
    de: {
      title: 'EVSExplorer - Professionelle OCPP 2.0.1 Tests & Ladepunkt-Überwachung | EVSE Compliance Testing',
      description: 'EVSExplorer ist der führende OCPP 2.0.1 WebSocket-Server für Ladepunkt-Tests, EVSE-Überwachung und Compliance-Tests. Professionelle OCPP-Testlösungen mit REST-API-Steuerung, Echtzeit-Überwachung und umfassender Ladepunkt-Validierung.',
      keywords: 'OCPP, OCPP 2.0.1, Ladepunkt-Tests, EVSE-Tests, EVSE-Überwachung, Ladepunkt-Überwachung, OCPP Compliance Testing, Elektrofahrzeug-Laden, WebSocket-Server, Ladepunkt-Validierung, E-Mobility Ladeinfrastruktur, OCPP-Protokoll-Tests, Ladepunkt-Zertifizierung, EVSE Compliance, Elektrofahrzeug-Ladestation',
      canonicalUrl: 'https://evsexplorer.com',
      siteName: 'EVSExplorer',
      author: 'EVSExplorer Team',
      twitterCard: 'summary_large_image',
      ogType: 'website'
    }
  };

  const currentSEO = seoData[language];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EVSExplorer",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "description": currentSEO.description,
    "url": currentSEO.canonicalUrl,
    "author": {
      "@type": "Organization",
      "name": currentSEO.author
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "USD",
      "description": language === 'en' ? "Contact for pricing" : "Kontakt für Preisanfrage"
    },
    "featureList": [
      "OCPP 2.0.1 Protocol Implementation",
      "Multi Charge Point Connection Support", 
      "Real-time Message Validation",
      "Comprehensive Dashboard Monitoring",
      "REST API Control",
      "Custom Alert System",
      "Transaction Visualization",
      "Compliance Testing Tools"
    ],
    "applicationSubCategory": "OCPP Testing Software",
    "screenshot": currentSEO.canonicalUrl + "/screenshot.png",
    "downloadUrl": currentSEO.canonicalUrl,
    "supportingData": {
      "@type": "Dataset",
      "name": "OCPP 2.0.1 Compliance Data",
      "description": language === 'en' ? 
        "Comprehensive OCPP 2.0.1 testing and monitoring data for electric vehicle charge points" :
        "Umfassende OCPP 2.0.1 Test- und Überwachungsdaten für Elektrofahrzeug-Ladepunkte"
    }
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "EVSExplorer",
    "url": currentSEO.canonicalUrl,
    "logo": currentSEO.canonicalUrl + "/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "sales",
      "email": "hello@evsexplorer.com"
    },
    "sameAs": [
      currentSEO.canonicalUrl
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang={language} />
      <title>{currentSEO.title}</title>
      <meta name="description" content={currentSEO.description} />
      <meta name="keywords" content={currentSEO.keywords} />
      <meta name="author" content={currentSEO.author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentSEO.canonicalUrl} />
      
      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en" href="https://evsexplorer.com?lang=en" />
      <link rel="alternate" hrefLang="de" href="https://evsexplorer.com?lang=de" />
      <link rel="alternate" hrefLang="x-default" href="https://evsexplorer.com" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={currentSEO.ogType} />
      <meta property="og:url" content={currentSEO.canonicalUrl} />
      <meta property="og:title" content={currentSEO.title} />
      <meta property="og:description" content={currentSEO.description} />
      <meta property="og:image" content={currentSEO.canonicalUrl + "/og-image.png"} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={currentSEO.siteName} />
      <meta property="og:locale" content={language === 'en' ? 'en_US' : 'de_DE'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content={currentSEO.twitterCard} />
      <meta name="twitter:url" content={currentSEO.canonicalUrl} />
      <meta name="twitter:title" content={currentSEO.title} />
      <meta name="twitter:description" content={currentSEO.description} />
      <meta name="twitter:image" content={currentSEO.canonicalUrl + "/twitter-image.png"} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0E1E42" />
      <meta name="apple-mobile-web-app-title" content="EVSExplorer" />
      <meta name="application-name" content="EVSExplorer" />
      <meta name="msapplication-TileColor" content="#0E1E42" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <script type="application/ld+json">
        {JSON.stringify(organizationData)}
      </script>
      
      {/* Additional Technical Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* Industry-Specific Meta Tags */}
      <meta name="classification" content="OCPP Testing Software" />
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="target" content="EVSE manufacturers, charge point operators, testing laboratories" />
      
      {/* Business Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="Worldwide" />
      <meta name="ICBM" content="40.7589, -73.9851" />
      
      {/* Additional Schema Markup for Technical Software */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TechArticle",
          "headline": "OCPP 2.0.1 Testing and Charge Point Monitoring Solution",
          "description": currentSEO.description,
          "author": {
            "@type": "Organization",
            "name": "EVSExplorer"
          },
          "publisher": {
            "@type": "Organization",
            "name": "EVSExplorer",
            "logo": {
              "@type": "ImageObject",
              "url": currentSEO.canonicalUrl + "/logo.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": currentSEO.canonicalUrl
          },
          "datePublished": "2025-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
          "articleSection": "OCPP Testing",
          "keywords": currentSEO.keywords.split(', ')
        })}
      </script>
    </Helmet>
  );
}