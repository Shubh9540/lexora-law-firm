import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { TestimonialsGridSection } from '@/components/sections/TestimonialsGridSection';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function TestimonialsPage() {
  

  const templateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.testimonials?.variants?.LexoraTestimonials1) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = sectionData?.testimonialsBreadcrumb?.variants?.LexoraTestimonialsBreadcrumb1 || {
    title: 'Testimonials',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'Testimonials' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <TestimonialsGridSection data={sectionData?.testimonials?.variants?.LexoraTestimonials1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
