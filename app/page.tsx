import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { HeroSlider } from '@/components/sections/HeroSlider';
import { AboutUs } from '@/components/sections/AboutUs';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Team } from '@/components/sections/Team';
import { Counter } from '@/components/sections/Counter';
import { Testimonials } from '@/components/sections/Testimonials';
import { Blogs } from '@/components/sections/Blogs';
import { Footer } from '@/components/common/Footer';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  // Read data
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  return (
    <main>
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      <HeroSlider data={sectionData?.hero?.variants?.LexoraHero1} />
      <AboutUs data={sectionData?.aboutUs?.variants?.LexoraAboutUs1} />
      <Services data={sectionData?.services?.variants?.LexoraServices1} />
      <Process data={sectionData?.process?.variants?.LexoraProcess1} />
      <Team data={sectionData?.team?.variants?.LexoraTeam1} />
      <Counter data={sectionData?.counter?.variants?.LexoraCounter1} />
      <Testimonials data={sectionData?.testimonials?.variants?.LexoraTestimonials1} />
      <Blogs data={sectionData?.blogs?.variants?.LexoraBlogs1} />
      <Footer data={commonData?.Footer} />
    </main>
  );
}
