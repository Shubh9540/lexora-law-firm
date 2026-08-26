import React from 'react';
import { IndustriesPageContent } from '@/components/sections/IndustriesPageContent';
import rawData from '@/data/templates.json';
import { LexoraTemplateData } from '@/types/templates.types';
export const dynamic = 'force-dynamic';



export default function IndustriesRoute() {
  

  const templateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;

  if (!sectionData) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-[#051024]">
        <p>Loading...</p>
      </div>
    );
  }

  return <IndustriesPageContent templateData={templateData} />;
}
