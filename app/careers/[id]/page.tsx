import React from 'react';
import { notFound } from 'next/navigation';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { JobDetailContent } from '@/components/sections/JobDetailContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.careers?.variants?.LexoraCareers1) {
    return <div>Data not found</div>;
  }

  // Find job from items list (which exists inside positions or at root of careers depending on old schema, but we placed it inside positions)
  const job = sectionData?.careers?.variants?.LexoraCareers1.positions?.items?.find(i => i.id === id) || 
              // Fallback if data structure slightly varied
              (sectionData?.careers?.variants?.LexoraCareers1 as any).items?.find((i: any) => i.id === id);

  if (!job || !sectionData?.careers?.variants?.LexoraCareers1.jobDetailData) {
    notFound();
  }

  const breadcrumbData = sectionData?.jobDetailBreadcrumb?.variants?.LexoraJobDetailBreadcrumb1 || {
    title: job.title,
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'Careers', url: '/careers' },
      { label: job.title }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <JobDetailContent job={job} detailData={sectionData?.careers?.variants?.LexoraCareers1.jobDetailData} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
