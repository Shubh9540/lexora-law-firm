import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalUpdatesGrid } from '@/components/sections/LegalUpdatesGrid';

export const dynamic = 'force-dynamic';

export default async function LegalUpdatesPage() {
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.legalUpdates) {
    return <div>Data not found</div>;
  }

  const globalUI = templateData.globalUI;
  const breadcrumbData = templateData.legalUpdatesBreadcrumb;

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <LegalUpdatesGrid data={templateData.legalUpdates} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
