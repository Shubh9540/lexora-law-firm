import React from 'react';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamMember, LexoraTemplateData } from '@/types/templates.types';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';

interface TeamDetailPageProps {
  currentMember: TeamMember;
  templateData: LexoraTemplateData;
}

export const TeamDetailPage = ({ currentMember, templateData }: TeamDetailPageProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;
  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;

  const breadcrumbData = {
    title: currentMember.name,
    paths: [
      { label: globalUI?.sitemapHome || 'Home', url: '/' },
      { label: globalUI?.sitemapTeam || 'Our Team', url: '/team' },
      { label: currentMember.name }
    ],
    bgImage: sectionData?.teamBreadcrumb?.variants?.LexoraTeamBreadcrumb1?.bgImage || '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TeamDetailContent member={currentMember} globalUI={globalUI} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
};