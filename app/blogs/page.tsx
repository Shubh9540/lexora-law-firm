import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { Blogs } from '@/components/sections/Blogs';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function BlogsPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.blogs?.variants?.LexoraBlogs1) {
    return <div>Data not found</div>;
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  const breadcrumbData = sectionData?.blogsBreadcrumb?.variants?.LexoraBlogsBreadcrumb1;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      {/* Reusing the homepage Blogs component for the listing page */}
      <Blogs data={sectionData?.blogs?.variants?.LexoraBlogs1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
