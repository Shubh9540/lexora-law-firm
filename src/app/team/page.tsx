import React from 'react';
import fs from 'fs';
import path from 'path';
import { Header } from '../templates/lexora/components/Header';
import { Footer } from '../templates/lexora/components/Footer';
import { Breadcrumb } from '../templates/lexora/components/Breadcrumb';
import { Team } from '../templates/lexora/components/Team';
import { TopBar } from '../templates/lexora/components/TopBar';

export const dynamic = 'force-dynamic';

function getTemplatesData() {
  const filePath = path.join(process.cwd(), 'src', 'app', 'data', 'templates.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default function TeamPage() {
  const rawData = getTemplatesData();
  const lexoraData = rawData.lexora;

  return (
    <main className="lexora-team-page" style={{ 
      backgroundColor: '#ffffff',
      '--color-primary': '#0a1828',
      '--color-accent': '#c29b57',
      '--color-bg-light': '#f8f9fa',
      '--color-text': '#333333',
      '--color-text-light': '#666666',
      '--font-primary': '"Playfair Display", serif',
      '--font-secondary': '"Inter", sans-serif'
    } as React.CSSProperties}>
      <TopBar data={lexoraData.topbar} />
      <Header data={lexoraData.header} />
      
      <Breadcrumb data={lexoraData.teamBreadcrumb} />
      
      <div style={{ backgroundColor: '#ffffff' }}>
        <Team data={lexoraData.team} theme="light" />
      </div>

      <Footer data={lexoraData.footer} />
    </main>
  );
}
