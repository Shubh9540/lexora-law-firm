import React from 'react';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import { TeamMember } from '../../data/templates.types';
import { TeamDetailContent } from './components/TeamDetailContent';

interface TeamDetailPageProps {
  currentMember: TeamMember;
  allData: any;
}

export const TeamDetailPage = ({ currentMember, allData }: TeamDetailPageProps) => {
  // Create dynamic breadcrumb data
  const breadcrumbData = {
    title: currentMember.name,
    paths: [
      { label: 'Home', url: '/' },
      { label: 'Our Team', url: '/team' },
      { label: currentMember.name }
    ],
    bgImage: allData.teamBreadcrumb?.bgImage || '/banner/ban1.jpg'
  };

  return (
    <main className="lexora-template-wrapper" style={{ 
      backgroundColor: '#ffffff',
      '--color-primary': '#0a1828',
      '--color-accent': '#c29b57',
      '--color-bg-light': '#f8f9fa',
      '--color-text': '#333333',
      '--color-text-light': '#666666',
      '--font-primary': '"Playfair Display", serif',
      '--font-secondary': '"Inter", sans-serif'
    } as React.CSSProperties}>
      <TopBar data={allData.topbar} />
      <Header data={allData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TeamDetailContent member={currentMember} />
      
      <Footer data={allData.footer} />
    </main>
  );
};
