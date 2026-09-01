import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { EventDetailContent } from '@/components/sections/EventDetailContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.events?.variants?.LexoraEvents1) {
    return <div>Data not found</div>;
  }

  const currentEvent = sectionData?.events?.variants?.LexoraEvents1.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentEvent) {
    return (
      <main className="bg-white">
        <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
        <Header data={sectionData?.header?.variants?.LexoraHeader1} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          Event Not Found
        </div>
        <Footer data={commonData?.Footer} />
      </main>
    );
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  
  const breadcrumbData = sectionData?.eventDetailBreadcrumb?.variants?.LexoraEventDetailBreadcrumb1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <EventDetailContent event={currentEvent} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
