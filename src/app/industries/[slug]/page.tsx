import React from 'react';
import fs from 'fs';
import path from 'path';
import { IndustryDetailPage } from '../../templates/lexora/IndustryDetailPage';

export const dynamic = 'force-dynamic';

function getTemplatesData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default function IndustryDetailRoute({ params }: { params: { slug: string } }) {
  let rawData = null;
  try {
    rawData = getTemplatesData();
  } catch (error) {
    console.error("Error loading template data", error);
  }

  if (!rawData || !rawData.lexora) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    );
  }

  return <IndustryDetailPage templateData={rawData.lexora} slug={params.slug} />;
}
