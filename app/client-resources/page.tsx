import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ClientResourceCategories } from '@/components/sections/ClientResourceCategories';
import { FeaturedResourcesSection } from '@/components/sections/FeaturedResourcesSection';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function ClientResourcesPage() {
  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.clientResources?.variants?.LexoraClientResources1) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = sectionData?.clientResourcesBreadcrumb?.variants?.LexoraClientResourcesBreadcrumb1 || {
    title: 'Client Resources',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'Client Resources' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <ClientResourceCategories data={sectionData?.clientResources?.variants?.LexoraClientResources1} />
      
      <FeaturedResourcesSection data={sectionData?.clientResources?.variants?.LexoraClientResources1?.featuredSection} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
