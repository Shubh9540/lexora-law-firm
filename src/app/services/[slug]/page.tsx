import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import ServiceDetailPage from '../../templates/lexora/ServiceDetailPage';
import { LexoraTemplateData } from '../../data/templates.types';

export const dynamic = 'force-dynamic';

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  
  // Read data
  let rawData = null;
  try {
    const dataPath = path.join(process.cwd(), 'src', 'app', 'data', 'templates.json');
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
  const currentService = templateData.services.items.find((item) => item.slug === resolvedParams.slug);

  if (!currentService) {
    console.error("SERVICE NOT FOUND:", resolvedParams.slug);
    console.error("AVAILABLE SLUGS:", templateData.services.items.map(i => i.slug));
    notFound();
  }

  return <ServiceDetailPage templateData={templateData} currentService={currentService} />;
}
