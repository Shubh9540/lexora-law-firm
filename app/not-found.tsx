import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundContent } from '@/components/sections/NotFoundContent';
import rawData from '@/data/templates.json';

export default function NotFoundPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData || !sectionData?.notFound?.variants?.LexoraNotFound1) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <NotFoundContent data={sectionData?.notFound?.variants?.LexoraNotFound1} />
      
      <Footer data={commonData?.Footer} />
    </main>
  );
}
