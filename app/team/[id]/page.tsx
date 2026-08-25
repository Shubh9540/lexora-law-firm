import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { TeamDetailPage } from '@/components/sections/TeamDetailPageContent';
import { ServicesData, TeamData } from '@/types/templates.types';

export const dynamic = 'force-dynamic';

function getTemplatesData() {
  const filePath = path.join(process.cwd(), 'data', 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  const rawData = getTemplatesData();
  const lexoraData = rawData.lexora;
  
  const teamData: TeamData = lexoraData.team;
  const currentMember = teamData.members.find(m => m.id === id || m.slug === id);
  
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
