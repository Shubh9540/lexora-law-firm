import React from 'react';
import rawData from '@/data/templates.json';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Team } from '@/components/sections/Team';

export const dynamic = 'force-dynamic';

export default function TeamPage() {
  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!sectionData) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-[#051024]">
        <p>{templateData?.categories?.LawFirm?.sections?.globalUI?.variants?.LexoraGlobalUI1?.loadingText || "Loading..."}</p>
      </div>
    );
  }

  const breadcrumbData = sectionData?.teamBreadcrumb?.variants?.LexoraTeamBreadcrumb1 || {
    title: 'Our Team',
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Our Team' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      <Breadcrumb data={breadcrumbData} />
      
      <div className="bg-white">
        <Team data={sectionData?.team?.variants?.LexoraTeam1} theme="light" />
      </div>

      <Footer data={commonData?.Footer} />
    </main>
  );
}