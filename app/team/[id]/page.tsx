import React from 'react';
import { notFound } from 'next/navigation';
import rawData from '@/data/templates.json';
import { LexoraTemplateData } from '@/types/templates.types';
import { TeamDetailPage } from '@/components/sections/TeamDetailPageContent';

export const dynamic = 'force-dynamic';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;

  if (!sectionData) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-[#051024]">
        <p>{templateData?.categories?.LawFirm?.sections?.globalUI?.variants?.LexoraGlobalUI1?.loadingText || "Loading..."}</p>
      </div>
    );
  }

  const teamData = sectionData?.team?.variants?.LexoraTeam1;
  const currentMember = teamData?.members?.find(m => m.id === id || m.slug === id);
  
  if (!currentMember) {
    notFound();
  }

  return (
    <TeamDetailPage 
      currentMember={currentMember}
      templateData={templateData}
    />
  );
}