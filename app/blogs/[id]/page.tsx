import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailPageContent } from '@/components/sections/BlogDetailPageContent';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.blogs?.variants?.LexoraBlogs1) {
    return <div>Data not found</div>;
  }

  const currentBlog = sectionData?.blogs?.variants?.LexoraBlogs1.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentBlog) {
    return (
      <main className="bg-white">
        <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
        <Header data={sectionData?.header?.variants?.LexoraHeader1} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          {sectionData?.globalUI?.variants?.LexoraGlobalUI1?.industryNotFoundText || 'Blog Not Found'}
        </div>
        <Footer data={commonData?.Footer} />
      </main>
    );
  }

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  
  const baseBreadcrumb = sectionData?.blogDetailBreadcrumb?.variants?.LexoraBlogDetailBreadcrumb1;
  
  const breadcrumbData = baseBreadcrumb ? {
    ...baseBreadcrumb,
    title: currentBlog.title,
    paths: [
      ...(baseBreadcrumb.paths || [{ label: 'Home', url: '/' }, { label: 'Blogs', url: '/blogs' }]),
      { label: currentBlog.title }
    ]
  } : undefined;

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailPageContent blog={currentBlog} allBlogs={sectionData?.blogs?.variants?.LexoraBlogs1.items} globalUI={globalUI} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
