import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PublicationDetailClient } from '@/components/sections/PublicationDetailClient';

export const dynamic = 'force-dynamic';

export default async function PublicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
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

  const pub = templateData.publications?.items.find(p => p.id === resolvedParams.id);

  if (!pub) {
    return <div className="py-20 text-center">Publication not found</div>;
  }

  const breadcrumbData = templateData.publicationDetailBreadcrumb || {
    title: pub.title,
    paths: [
      { label: templateData.globalUI?.sitemapHome || 'Home', url: '/' },
      { label: templateData.publications?.title || 'Publications', url: '/publications' },
      { label: pub.title }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />

      <PublicationDetailClient 
        pub={pub} 
        downloadButtonText={templateData.publications?.downloadButtonText}
        readOnlineButtonText={templateData.publications?.readOnlineButtonText}
        itemBadge={templateData.publications?.itemBadge}
        pagesLabel={templateData.publications?.pagesLabel}
        overviewTitle={templateData.publications?.overviewTitle}
        keyTopicsTitle={templateData.publications?.keyTopicsTitle}
        aboutGuideTitle={templateData.publications?.aboutGuideTitle}
        tabsConfig={templateData.publications?.tabs}
      />

      <Footer data={templateData.footer} />
    </main>
  );
}
