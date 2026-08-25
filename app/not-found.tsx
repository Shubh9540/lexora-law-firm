import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { NotFoundContent } from '@/components/sections/NotFoundContent';

export default function NotFoundPage() {
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading template data', error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData || !templateData.notFound) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl">404 - Page Not Found</h1>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <NotFoundContent data={templateData.notFound} />
      
      <Footer data={templateData.footer} />
    </main>
  );
}
