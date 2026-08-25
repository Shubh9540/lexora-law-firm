import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '@/components/sections/ServiceDetailPageContent';
import { LexoraTemplateData } from '@/types/templates.types';

export const dynamic = 'force-dynamic';

export default async function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Read data
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'data', 'templates.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    rawData = JSON.parse(fileContents);
  } catch (error) {
    console.error("Error loading template data", error);
  }

  const templateData: LexoraTemplateData | undefined = rawData?.lexora;

  if (!templateData) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  // Find current service by slug
  const currentService = templateData.services.items.find(
    (item) => item.id === resolvedParams.id || item.slug === resolvedParams.id
  );

  if (!currentService) {
    console.error("SERVICE NOT FOUND:", resolvedParams.id);
    console.error("AVAILABLE SLUGS:", templateData.services.items.map(i => i.slug));
    notFound();
  }

  return <ServiceDetailPage templateData={templateData} currentService={currentService} />;
}
