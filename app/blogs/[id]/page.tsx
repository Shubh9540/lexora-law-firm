import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { BlogDetailPageContent } from '@/components/sections/BlogDetailPageContent';

export const dynamic = 'force-dynamic';

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
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

  if (!templateData || !templateData.blogs) {
    return <div>Data not found</div>;
  }

  const currentBlog = templateData.blogs.items.find(
    (item) => item.slug === id || item.id === id
  );

  if (!currentBlog) {
    return (
      <main className="bg-white">
        <TopBar data={templateData.topBar} />
        <Header data={templateData.header} />
        <div className="py-20 text-center text-[#051024] font-bold text-2xl min-h-[50vh] flex items-center justify-center">
          {templateData.globalUI?.industryNotFoundText || 'Blog Not Found'}
        </div>
        <Footer data={templateData.footer} />
      </main>
    );
  }

  const globalUI = templateData.globalUI;
  
  const breadcrumbData = templateData.blogDetailBreadcrumb;

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <BlogDetailPageContent blog={currentBlog} allBlogs={templateData.blogs.items} globalUI={globalUI} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
