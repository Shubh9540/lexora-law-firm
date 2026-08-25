import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { ContactContent } from '@/components/sections/ContactContent';

export const dynamic = 'force-dynamic';

export default async function ContactPage() {
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.contact) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = templateData.contactBreadcrumb || {
    title: 'Contact Us',
    paths: [
      { label: templateData.globalUI?.sitemapHome || 'Home', url: '/' },
      { label: 'Contact Us' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={breadcrumbData} />
      
      <ContactContent data={templateData.contact} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
