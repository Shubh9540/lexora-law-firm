import React from 'react';
import { LexoraTemplateData, IndustryItem } from '../../data/templates.types';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { IndustryDetailContent } from './components/IndustryDetailContent';

interface IndustryDetailPageProps {
  templateData: LexoraTemplateData;
  slug: string;
}

export const IndustryDetailPage = ({ templateData, slug }: IndustryDetailPageProps) => {
  const item = templateData.industries?.items?.find((i) => i.slug === slug);

  if (!item) {
    return (
      <div style={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h2>Industry not found</h2>
      </div>
    );
  }

  // Determine breadcrumb structure
  const baseBreadcrumb = templateData.industriesBreadcrumb || {
    title: 'Industries We Serve',
    paths: [{ label: 'Home', url: '/' }, { label: 'Industries' }],
    bgImage: '/banner/ban1.jpg'
  };

  const dynamicBreadcrumb = {
    ...baseBreadcrumb,
    title: item.title,
    paths: [
      ...baseBreadcrumb.paths,
      { label: item.title }
    ]
  };

  return (
    <main className="lexora-industry-detail-page" style={{ 
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
      <Breadcrumb data={dynamicBreadcrumb} />
      <IndustryDetailContent data={item} templateData={templateData} />
      <Footer data={templateData.footer} />
    </main>
  );
};
