import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { TeamDetailPage } from '../../templates/lexora/TeamDetailPage';
import { ServicesData, TeamData } from '../../data/templates.types';

export const dynamic = 'force-dynamic';

function getTemplatesData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const rawData = getTemplatesData();
  const lexoraData = rawData.lexora;
  
  const teamData: TeamData = lexoraData.team;
  const currentMember = teamData.members.find(m => m.slug === slug);
  
  if (!currentMember) {
    notFound();
  }

  return (
    <TeamDetailPage 
      currentMember={currentMember}
      allData={lexoraData}
    />
  );
}
