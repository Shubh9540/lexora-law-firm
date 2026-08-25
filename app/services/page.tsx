import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServicesGridSection } from '@/components/sections/ServicesGridSection';

export const dynamic = 'force-dynamic';

export default function ServicesPage() {
  // Read data
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading template data", error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="lexora-services-page" style={{ 
      backgroundColor: '#ffffff',
      '--color-primary': '#0a1828',
      '--color-accent': '#c29b57',
      '--color-bg-light': '#f8f9fa',
      '--color-text': '#333333',
      '--color-text-light': '#666666',
      '--font-primary': '"Playfair Display", serif',
      '--font-secondary': '"Inter", sans-serif'
    } as React.CSSProperties}>
      
      {/* Top Bar & Header */}
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      {/* Breadcrumb Banner */}
      <Breadcrumb data={templateData.servicesBreadcrumb} />
      
      {/* Main Grid Section */}
      <ServicesGridSection data={templateData.services} />
      
      {/* Footer */}
      <Footer data={templateData.footer} />
      
    </main>
  );
}
