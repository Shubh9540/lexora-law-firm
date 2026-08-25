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
    bgImage: currentService.image || templateData.globalUI?.defaultIndustriesBreadcrumb?.bgImage || '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      
      {/* Top Bar & Header */}
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      {/* Dynamic Breadcrumb Banner */}
      <Breadcrumb data={breadcrumbData} />
      
      {/* Main Content Layout */}
      <section className="py-[80px] px-5 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[50px]">
          
          {/* Left Column */}
          <ServiceDetailContent currentService={currentService} templateData={templateData} />
          
          {/* Right Column (Sidebar) */}
          <ServiceDetailSidebar 
            currentService={currentService} 
            allServices={templateData.services} 
            globalUI={templateData.globalUI}
          />
          
        </div>
      </section>

      {/* Footer */}
      <Footer data={templateData.footer} />
      
    </main>
  );
}

