import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalUpdatesGrid } from '@/components/sections/LegalUpdatesGrid';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function LegalUpdatesPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.legalUpdates?.variants?.LexoraLegalUpdates1) {
    return <div>Data not found</div>;
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  const breadcrumbData = sectionData?.legalUpdatesBreadcrumb?.variants?.LexoraLegalUpdatesBreadcrumb1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <LegalUpdatesGrid data={sectionData?.legalUpdates?.variants?.LexoraLegalUpdates1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
