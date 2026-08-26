import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalUpdateDetailContent } from '@/components/sections/LegalUpdateDetailContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function LegalUpdateDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.legalUpdates?.variants?.LexoraLegalUpdates1) {
    return <div>Data not found</div>;
  }

  const currentUpdate = sectionData?.legalUpdates?.variants?.LexoraLegalUpdates1.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentUpdate) {
    return (
      <main className="bg-white">
        <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
        <Header data={sectionData?.header?.variants?.LexoraHeader1} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          Update Not Found
        </div>
        <Footer data={commonData?.Footer} />
      </main>
    );
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  
  const breadcrumbData = sectionData?.legalUpdateDetailBreadcrumb?.variants?.LexoraLegalUpdateDetailBreadcrumb1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <LegalUpdateDetailContent update={currentUpdate} allUpdates={sectionData?.legalUpdates?.variants?.LexoraLegalUpdates1.items} globalUI={globalUI} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
