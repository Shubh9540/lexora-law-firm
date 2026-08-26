import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { OfficeLocationsContent } from '@/components/sections/OfficeLocationsContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function OfficeLocationsPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.officeLocations?.variants?.LexoraOfficeLocations1) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = sectionData?.officeLocationsBreadcrumb?.variants?.LexoraOfficeLocationsBreadcrumb1 || {
    title: 'Office Locations',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'Locations' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <OfficeLocationsContent data={sectionData?.officeLocations?.variants?.LexoraOfficeLocations1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
