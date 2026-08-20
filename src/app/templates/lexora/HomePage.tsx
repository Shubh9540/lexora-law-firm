import React from 'react';
import fs from 'fs';
import path from 'path';
import { LexoraTemplateData } from '../../data/templates.types';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { AboutUs } from './components/AboutUs';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { Counter } from './components/Counter';
import { Testimonials } from './components/Testimonials';
import { Blogs } from './components/Blogs';
import { Footer } from './components/Footer';

export const dynamic = 'force-dynamic';

export default function HomePage() {
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

  return (
    <main>
      <TopBar data={templateData?.topBar} />
      <Header data={templateData?.header} />
      <HeroSlider data={templateData?.hero} />
      <AboutUs data={templateData?.aboutUs} />
      <Services data={templateData?.services} />
      <Process data={templateData?.process} />
      <Team data={templateData?.team} />
      <Counter data={templateData?.counter} />
      <Testimonials data={templateData?.testimonials} />
      <Blogs data={templateData?.blogs} />
      <Footer data={templateData?.footer} />
    </main>
  );
}
