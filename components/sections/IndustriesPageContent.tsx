import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { IndustriesGridSection } from '@/components/sections/IndustriesGridSection';

interface IndustriesPageProps {
  templateData: LexoraTemplateData;
}

export const IndustriesPageContent = ({ templateData }: IndustriesPageProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  return (
    <main className="bg-white">
      
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      {sectionData?.industriesBreadcrumb?.variants?.LexoraIndustriesBreadcrumb1 && (
        <Breadcrumb data={sectionData?.industriesBreadcrumb?.variants?.LexoraIndustriesBreadcrumb1} />
      )}
      
      {sectionData?.industries?.variants?.LexoraIndustries1 && (
        <IndustriesGridSection data={sectionData?.industries?.variants?.LexoraIndustries1} />
      )}
      
      <Footer data={commonData?.Footer} />
    </main>
  );
};
