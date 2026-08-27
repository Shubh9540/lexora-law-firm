import React from 'react';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/sections/ServiceDetailPageContent';
import { LexoraTemplateData } from '@/types/templates.types';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Read data
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>{"Loading..."}</p>
      </div>
    );
  }

  // Find current service by slug
  const currentService = sectionData?.services?.variants?.LexoraServices1?.items?.find(
    (item) => item.id === resolvedParams.id || item.slug === resolvedParams.id
  );

  if (!currentService) {
    console.error("SERVICE NOT FOUND:", resolvedParams.id);
    console.error("AVAILABLE SLUGS:", sectionData?.services?.variants?.LexoraServices1?.items?.map(i => i.slug));
    notFound();
  }

  return <ServiceDetailPage templateData={templateData} currentService={currentService} />;
}
