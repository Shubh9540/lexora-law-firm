import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { PublicationDetailClient } from '@/components/sections/PublicationDetailClient';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function PublicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return <div>Data not found</div>;
  }

  const pub = sectionData?.publications?.variants?.LexoraPublications1?.items.find(p => p.id === resolvedParams.id);

  if (!pub) {
    return <div className="py-20 text-center">Publication not found</div>;
  }

  const breadcrumbData = sectionData?.publicationDetailBreadcrumb?.variants?.LexoraPublicationDetailBreadcrumb1 || {
    title: pub.title,
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: sectionData?.publications?.variants?.LexoraPublications1?.title || 'Publications', url: '/publications' },
      { label: pub.title }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />

      <PublicationDetailClient 
        pub={pub} 
        downloadButtonText={sectionData?.publications?.variants?.LexoraPublications1?.downloadButtonText}
        readOnlineButtonText={sectionData?.publications?.variants?.LexoraPublications1?.readOnlineButtonText}
        itemBadge={sectionData?.publications?.variants?.LexoraPublications1?.itemBadge}
        pagesLabel={sectionData?.publications?.variants?.LexoraPublications1?.pagesLabel}
        overviewTitle={sectionData?.publications?.variants?.LexoraPublications1?.overviewTitle}
        keyTopicsTitle={sectionData?.publications?.variants?.LexoraPublications1?.keyTopicsTitle}
        aboutGuideTitle={sectionData?.publications?.variants?.LexoraPublications1?.aboutGuideTitle}
        tabsConfig={sectionData?.publications?.variants?.LexoraPublications1?.tabs}
      />

      <Footer data={commonData?.Footer} />
    </main>
  );
}
