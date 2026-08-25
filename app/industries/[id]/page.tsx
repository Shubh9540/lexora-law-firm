import React from 'react';
import fs from 'fs';
import path from 'path';
import { IndustryDetailPageContent } from '@/components/sections/IndustryDetailPageContent';

export const dynamic = 'force-dynamic';

function getTemplatesData() {
  const filePath = path.join(process.cwd(), 'data', 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function IndustryDetailRoute({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  let rawData = null;
  try {
    rawData = getTemplatesData();
  } catch (error) {
    console.error("Error loading template data", error);
  }

  if (!rawData || !rawData.lexora) {
    return (
      <div className="h-screen flex items-center justify-center bg-white text-[#051024]">
        <p>{rawData?.lexora?.globalUI?.loadingText || 'Loading...'}</p>
      </div>
    );
  }

  return <IndustryDetailPageContent templateData={rawData.lexora} id={id} />;
}
