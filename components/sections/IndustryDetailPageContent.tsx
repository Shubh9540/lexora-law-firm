import React from 'react';
import { LexoraTemplateData, IndustryItem } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { IndustryDetailContent } from '@/components/sections/IndustryDetailContent';

interface IndustryDetailPageProps {
  templateData: LexoraTemplateData;
  id: string;
}

export const IndustryDetailPageContent = ({ templateData, id }: IndustryDetailPageProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  const item = sectionData?.industries?.variants?.LexoraIndustries1?.items?.find((i) => i.id === id || i.slug === id);
  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;

  if (!item) {
    return (
      <div className="h-[50vh] flex items-center justify-center bg-white text-[#051024]">
        <h2>{globalUI?.industryNotFoundText || 'Industry not found'}</h2>
      </div>
    );
  }

  // Determine breadcrumb structure
  const baseBreadcrumb = sectionData?.industriesBreadcrumb?.variants?.LexoraIndustriesBreadcrumb1 || globalUI?.defaultIndustriesBreadcrumb || {
    title: 'Industries We Serve',
    paths: [{ label: 'Home', url: '/' }, { label: 'Industries' }],
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
      <IndustryDetailContent data={item} templateData={templateData} />
      <Footer data={commonData?.Footer} />
    </main>
  );
};
