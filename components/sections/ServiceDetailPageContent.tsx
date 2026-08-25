import React from 'react';
import { LexoraTemplateData, ServiceItem } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ServiceDetailContent } from '@/components/sections/ServiceDetailContent';
import { ServiceDetailSidebar } from '@/components/sections/ServiceDetailSidebar';

interface ServiceDetailPageProps {
  templateData: LexoraTemplateData;
  currentService: ServiceItem;
}

export default function ServiceDetailPage({ templateData, currentService }: ServiceDetailPageProps) {
  
  // Create dynamic breadcrumb data
  const breadcrumbData = {
    title: currentService.title,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: currentService.title }
    ],
    bgImage: currentService.image || '/banner/ban1.jpg' // Use service image or fallback
  };

  return (
    <main className="lexora-service-detail-page" style={{ 
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
      
      {/* Dynamic Breadcrumb Banner */}
      <Breadcrumb data={breadcrumbData} />
      
      {/* Main Content Layout */}
      <section className="service-detail-section" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
        <div className="service-detail-container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr',
          gap: '50px'
        }}>
          
          {/* Left Column */}
          <ServiceDetailContent currentService={currentService} />
          
          {/* Right Column (Sidebar) */}
          <ServiceDetailSidebar 
            currentService={currentService} 
            allServices={templateData.services} 
          />
          
        </div>
      </section>

      {/* Footer */}
      <Footer data={templateData.footer} />

      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 992px) {
            .service-detail-container {
              grid-template-columns: 1fr !important;
            }
          }
        `
      }} />
      
    </main>
  );
}
