import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudyDetailContent } from '@/components/sections/CaseStudyDetailContent';

export const dynamic = 'force-dynamic';

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.caseStudies) {
    return <div>Data not found</div>;
  }

  const currentCaseStudy = templateData.caseStudies.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentCaseStudy) {
    return (
      <main className="bg-white">
        <TopBar data={templateData.topBar || rawData?.lexora?.topbar} />
        <Header data={templateData.header} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          {templateData.globalUI?.industryNotFoundText || 'Case Study Not Found'}
        </div>
        <Footer data={templateData.footer} />
      </main>
    );
  }

  const currentIndex = templateData.caseStudies.items.findIndex(
    (item) => item.slug === id || item.id === id
  );

  let prevSlug = null;
  let nextSlug = null;

  if (currentIndex > 0) {
    prevSlug = templateData.caseStudies.items[currentIndex - 1].slug;
  }
  if (currentIndex < templateData.caseStudies.items.length - 1) {
    nextSlug = templateData.caseStudies.items[currentIndex + 1].slug;
  }

  const globalUI = templateData.globalUI;
  const breadcrumbData = templateData.caseStudyDetailBreadcrumb;

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar || rawData?.lexora?.topbar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <CaseStudyDetailContent 
        caseStudy={currentCaseStudy} 
        globalUI={globalUI} 
        prevSlug={prevSlug} 
        nextSlug={nextSlug} 
      />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
