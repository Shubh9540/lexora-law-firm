import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { AboutFirm } from '@/components/sections/AboutFirm';
import { AboutWhyChooseUs } from '@/components/sections/AboutWhyChooseUs';
import { AboutMission } from '@/components/sections/AboutMission';
import { AboutApproach } from '@/components/sections/AboutApproach';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
  // Read data
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading template data", error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

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
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      {/* Breadcrumb Banner */}
      <Breadcrumb data={templateData.aboutBreadcrumb} />
      
      {/* About Sections */}
      <AboutFirm data={templateData.aboutFirm} />
      <AboutWhyChooseUs data={templateData.aboutWhyChooseUs} />
      <AboutMission data={templateData.aboutMission} />
      <AboutApproach data={templateData.aboutApproach} />
      
      {/* Footer */}
      <Footer data={templateData.footer} />
      
    </main>
  );
}
