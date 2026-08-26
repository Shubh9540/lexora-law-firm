import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default function WhyChooseUsPage() {
  // Read data
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="lexora-wcu-page" style={{ 
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
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      {/* Breadcrumb Banner */}
      <Breadcrumb data={sectionData?.whyChooseUsBreadcrumb?.variants?.LexoraWhyChooseUsBreadcrumb1} />
      
      {/* Main Section */}
      <WhyChooseUsSection data={sectionData?.aboutWhyChooseUs?.variants?.LexoraAboutWhyChooseUs1} />
      
      {/* Footer */}
      <Footer data={commonData?.Footer} />
      
    </main>
  );
}
