import React from 'react';
import { IndustryDetailPageContent } from '@/components/sections/IndustryDetailPageContent';
import rawData from '@/data/templates.json';
import { LexoraTemplateData } from '@/types/templates.types';
export const dynamic = 'force-dynamic';



export default async function IndustryDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;

  if (!sectionData) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-[#051024]">
        <p>Loading...</p>
      </div>
    );
  }

  return <IndustryDetailPageContent templateData={templateData} id={id} />;
}
