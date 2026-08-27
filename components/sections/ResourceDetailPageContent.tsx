import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ResourceDetailContent } from '@/components/sections/ResourceDetailContent';

interface ResourceDetailPageContentProps {
  templateData: LexoraTemplateData;
  id: string;
}

export const ResourceDetailPageContent = ({ templateData, id }: ResourceDetailPageContentProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  const normalizedId = (id || '').toLowerCase();
  const items = sectionData?.clientResources?.variants?.LexoraClientResources1?.featuredSection?.items || [];
  const item = items.find((i) => {
    const s = (i.slug || '').toLowerCase();
    const itemId = (i.id || '').toLowerCase();
    return s === normalizedId || itemId === normalizedId;
  });

  if (!item) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-white text-[#051024]">
        <h2 className="text-2xl font-bold">Resource not found</h2>
      </div>
    );
  }

  const baseBreadcrumb = sectionData?.clientResourcesBreadcrumb?.variants?.LexoraClientResourcesBreadcrumb1 || {
    title: 'Client Resources',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: 'Client Resources', url: '/client-resources' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  const dynamicBreadcrumb = {
    ...baseBreadcrumb,
    title: item.title,
    paths: [
      ...baseBreadcrumb.paths,
      { label: item.title }
    ]
  };

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      <Breadcrumb data={dynamicBreadcrumb} />
      <ResourceDetailContent data={item} templateData={templateData} />
      <Footer data={commonData?.Footer} />
    </main>
  );
};
