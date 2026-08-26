import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutFirm } from '@/components/sections/AboutFirm';
import { AboutWhyChooseUs } from '@/components/sections/AboutWhyChooseUs';
import { AboutMission } from '@/components/sections/AboutMission';
import { AboutApproach } from '@/components/sections/AboutApproach';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  // Read data
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <main className="lexora-about-page">
      
      {/* Top Bar & Header */}
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      {/* Breadcrumb Banner */}
      <Breadcrumb data={sectionData?.aboutBreadcrumb?.variants?.LexoraAboutBreadcrumb1} />
      
      {/* About Sections */}
      <AboutFirm data={sectionData?.aboutFirm?.variants?.LexoraAboutFirm1} />
      <AboutWhyChooseUs data={sectionData?.aboutWhyChooseUs?.variants?.LexoraAboutWhyChooseUs1} />
      <AboutMission data={sectionData?.aboutMission?.variants?.LexoraAboutMission1} />
      <AboutApproach data={sectionData?.aboutApproach?.variants?.LexoraAboutApproach1} />
      
      {/* Footer */}
      <Footer data={commonData?.Footer} />
      
    </main>
  );
}
