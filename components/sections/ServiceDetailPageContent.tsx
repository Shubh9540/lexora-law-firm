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
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;
  
  // Create dynamic breadcrumb data
  const breadcrumbData = {
    title: currentService.title,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Services', url: '/services' },
      { label: currentService.title }
    ],
    bgImage: currentService.image || sectionData?.globalUI?.variants?.LexoraGlobalUI1?.defaultIndustriesBreadcrumb?.bgImage || '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      
      {/* Top Bar & Header */}
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      {/* Dynamic Breadcrumb Banner */}
      <Breadcrumb data={breadcrumbData} />
      
      {/* Main Content Layout */}
      <section className="py-5 px-5 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-[50px]">
          
          {/* Left Column */}
          <ServiceDetailContent currentService={currentService} templateData={templateData} />
          
          {/* Right Column (Sidebar) */}
          <ServiceDetailSidebar 
            currentService={currentService} 
            allServices={sectionData?.services?.variants?.LexoraServices1} 
            globalUI={sectionData?.globalUI?.variants?.LexoraGlobalUI1}
          />
          
        </div>
      </section>

      {/* Footer */}
      <Footer data={commonData?.Footer} />
      
    </main>
  );
}

