import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { LegalPageContent } from '@/components/sections/LegalPageContent';

export const dynamic = 'force-dynamic';

export default async function LegalDisclaimerPage() {
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.legalDisclaimer) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = templateData.legalDisclaimerBreadcrumb;

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <LegalPageContent data={templateData.legalDisclaimer} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
