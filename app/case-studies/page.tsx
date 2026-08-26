import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudiesGridSection } from '@/components/sections/CaseStudiesGridSection';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default function CaseStudiesPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return <div>Data not found</div>;
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={sectionData?.caseStudiesBreadcrumb?.variants?.LexoraCaseStudiesBreadcrumb1 || {
        title: 'Case Studies',
        paths: [{ label: 'Home', url: '/' }, { label: 'Case Studies' }],
        bgImage: '/banner/ban1.jpg'
      }} />
      
      <CaseStudiesGridSection data={sectionData?.caseStudies?.variants?.LexoraCaseStudies1} globalUI={globalUI} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
