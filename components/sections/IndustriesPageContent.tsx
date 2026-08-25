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
  return (
    <main className="bg-white">
      
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      {templateData.industriesBreadcrumb && (
        <Breadcrumb data={templateData.industriesBreadcrumb} />
      )}
      
      {templateData.industries && (
        <IndustriesGridSection data={templateData.industries} />
      )}
      
      <Footer data={templateData.footer} />
    </main>
  );
};
