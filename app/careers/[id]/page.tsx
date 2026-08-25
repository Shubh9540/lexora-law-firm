import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { JobDetailContent } from '@/components/sections/JobDetailContent';

export const dynamic = 'force-dynamic';

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.careers) {
    return <div>Data not found</div>;
  }

  // Find job from items list (which exists inside positions or at root of careers depending on old schema, but we placed it inside positions)
  const job = templateData.careers.positions?.items?.find(i => i.id === id) || 
              // Fallback if data structure slightly varied
              (templateData.careers as any).items?.find((i: any) => i.id === id);

  if (!job || !templateData.careers.jobDetailData) {
    notFound();
  }

  const breadcrumbData = templateData.jobDetailBreadcrumb || {
    title: job.title,
    paths: [
      { label: templateData.globalUI?.sitemapHome || 'Home', url: '/' },
      { label: 'Careers', url: '/careers' },
      { label: job.title }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <JobDetailContent job={job} detailData={templateData.careers.jobDetailData} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
