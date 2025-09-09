import React, { useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { SEO } from './components/SEO';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'de'>('en');

  return (
    <HelmetProvider>
      <SEO language={language} />
      <div className="min-h-screen bg-white">
        {/* Semantic HTML structure for better SEO */}
        <Header language={language} setLanguage={setLanguage} />
        <main role="main">
          <Hero language={language} />
          <Features language={language} />
          <Contact language={language} />
        </main>
        <Footer language={language} />
        
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
        >
          {language === 'en' ? 'Skip to main content' : 'Zum Hauptinhalt springen'}
        </a>
      </div>
    </HelmetProvider>
  );
}