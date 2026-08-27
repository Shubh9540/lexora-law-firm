import React from 'react';
import { SitemapPage } from '@/components/sections/SitemapPageContent';
import rawData from '@/data/templates.json';
import { LexoraTemplateData } from '@/types/templates.types';
export const dynamic = 'force-dynamic';



export default function SitemapRoute() {
  

  const templateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;

  if (!sectionData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>{templateData?.categories?.LawFirm?.sections?.globalUI?.variants?.LexoraGlobalUI1?.loadingText || "Loading..."}</p>
      </div>
    );
  }

  return <SitemapPage templateData={templateData} />;
}
