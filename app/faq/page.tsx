import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function FaqPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.faq?.variants?.LexoraFaq1) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = sectionData?.faqBreadcrumb?.variants?.LexoraFaqBreadcrumb1 || {
    title: 'FAQ',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'FAQ' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <FaqAccordion data={sectionData?.faq?.variants?.LexoraFaq1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
