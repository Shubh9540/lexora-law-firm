import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { CaseStudyDetailContent } from '@/components/sections/CaseStudyDetailContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function CaseStudyDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.caseStudies?.variants?.LexoraCaseStudies1) {
    return <div>Data not found</div>;
  }

  const currentCaseStudy = sectionData?.caseStudies?.variants?.LexoraCaseStudies1.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentCaseStudy) {
    return (
      <main className="bg-white">
        <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
        <Header data={sectionData?.header?.variants?.LexoraHeader1} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          {sectionData?.globalUI?.variants?.LexoraGlobalUI1?.industryNotFoundText || 'Case Study Not Found'}
        </div>
        <Footer data={commonData?.Footer} />
      </main>
    );
  }

  const currentIndex = sectionData?.caseStudies?.variants?.LexoraCaseStudies1.items.findIndex(
    (item) => item.slug === id || item.id === id
  );

  let prevSlug = null;
  let nextSlug = null;

  if (currentIndex > 0) {
    prevSlug = sectionData?.caseStudies?.variants?.LexoraCaseStudies1.items[currentIndex - 1].slug;
  }
  if (currentIndex < sectionData?.caseStudies?.variants?.LexoraCaseStudies1.items.length - 1) {
    nextSlug = sectionData?.caseStudies?.variants?.LexoraCaseStudies1.items[currentIndex + 1].slug;
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  const breadcrumbData = sectionData?.caseStudyDetailBreadcrumb?.variants?.LexoraCaseStudyDetailBreadcrumb1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <CaseStudyDetailContent 
        caseStudy={currentCaseStudy} 
        globalUI={globalUI} 
        prevSlug={prevSlug} 
        nextSlug={nextSlug} 
      />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
