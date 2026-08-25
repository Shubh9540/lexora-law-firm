import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { IndustriesGridSection } from '@/components/sections/IndustriesGridSection';

interface IndustriesPageProps {
  templateData: LexoraTemplateData;
}

export const IndustriesPage = ({ templateData }: IndustriesPageProps) => {
  return (
    <main className="lexora-industries-page" style={{ 
      backgroundColor: '#ffffff',
      '--color-primary': '#0a1828',
      '--color-accent': '#c29b57',
      '--color-bg-light': '#f8f9fa',
      '--color-text': '#333333',
      '--color-text-light': '#666666',
      '--font-primary': '"Playfair Display", serif',
      '--font-secondary': '"Inter", sans-serif'
    } as React.CSSProperties}>
      
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      {templateData.industriesBreadcrumb && (
        <Breadcrumb data={templateData.industriesBreadcrumb} />
      )}
      
      {templateData.industries && (
        <IndustriesGridSection data={templateData.industries} />
      )}
      
      <Footer data={templateData.footer} />
    </main>
  );
};
