import React from 'react';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TeamMember } from '@/types/templates.types';
import { TeamDetailContent } from '@/components/sections/TeamDetailContent';

interface TeamDetailPageProps {
  currentMember: TeamMember;
  allData: any;
}

export const TeamDetailPage = ({ currentMember, allData }: TeamDetailPageProps) => {
  // Create dynamic breadcrumb data
  const globalUI = allData.globalUI;
  const breadcrumbData = {
    title: currentMember.name,
    paths: [
      { label: globalUI?.sitemapHome || 'Home', url: '/' },
      { label: globalUI?.sitemapTeam || 'Our Team', url: '/team' },
      { label: currentMember.name }
    ],
    bgImage: allData.teamBreadcrumb?.bgImage || '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={allData.topbar || allData.topBar} />
      <Header data={allData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TeamDetailContent member={currentMember} globalUI={globalUI} />
      
      <Footer data={allData.footer} />
    </main>
  );
};

