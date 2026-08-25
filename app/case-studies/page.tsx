import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudiesGridSection } from '@/components/sections/CaseStudiesGridSection';

export const dynamic = 'force-dynamic';

export default function CaseStudiesPage() {
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData) {
    return <div>Data not found</div>;
  }

  const globalUI = templateData.globalUI;

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar || rawData?.lexora?.topbar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={templateData.caseStudiesBreadcrumb || {
        title: 'Case Studies',
        paths: [{ label: 'Home', url: '/' }, { label: 'Case Studies' }],
        bgImage: '/banner/ban1.jpg'
      }} />
      
      <CaseStudiesGridSection data={templateData.caseStudies} globalUI={globalUI} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
