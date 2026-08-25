import React from 'react';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import Link from 'next/link';
import { FaBalanceScale } from 'react-icons/fa';

interface SitemapPageProps {
  templateData: LexoraTemplateData;
}

export const SitemapPage = ({ templateData }: SitemapPageProps) => {
  const globalUI = templateData.globalUI;
  const detailSuffix = globalUI?.sitemapDetailSuffix || 'Detail';
  
  const pages = [
    { name: globalUI?.sitemapHome || 'Home 🏠', url: '/' },
    { name: globalUI?.sitemapAbout || 'About Us', url: '/about' },
    { name: globalUI?.sitemapWhyChooseUs || 'Why Choose Us', url: '/why-choose-us' },
    { name: globalUI?.sitemapOurApproach || 'Our Approach', url: '/our-approach' },
    { name: globalUI?.sitemapServices || 'Services', url: '/services' },
    { name: globalUI?.sitemapIndustries || 'Industries We Serve', url: '/industries' },
  ];

  templateData.services?.items?.forEach((service) => {
    pages.push({ name: `${service.title} ${detailSuffix}`, url: `/services/${service.slug}` });
  });

  templateData.industries?.items?.forEach((industry) => {
    pages.push({ name: `${industry.title} ${detailSuffix}`, url: `/industries/${industry.slug}` });
  });

  pages.push({ name: globalUI?.sitemapTeam || 'Our Team', url: '/team' });

  templateData.team?.members?.forEach((member) => {
    pages.push({ name: `${member.name} ${detailSuffix}`, url: `/team/${member.slug}` });
  });

  return (
    <main className="bg-white">
      
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={templateData.sitemapBreadcrumb || globalUI?.defaultSitemapBreadcrumb || {
        title: 'Sitemap',
        paths: [{ label: 'Home', url: '/' }, { label: 'Sitemap' }],
        bgImage: '/banner/ban1.jpg'
      }} />
      
      <section className="py-[100px] px-5 bg-white">
        <div className="max-w-[1200px] mx-auto">
          
          <div className="text-center mb-[60px]">
            <div className="flex items-center justify-center text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
              <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
              {globalUI?.sitemapBadge || 'SITEMAP'}
              <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
            </div>
            
            <h2 className="text-[46px] text-[#051024] font-family-[var(--font-heading)] font-bold mb-5">
              {globalUI?.sitemapTitle || 'Explore All Pages'}
            </h2>
            
            <div className="flex items-center justify-center gap-[15px]">
              <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
              <span className="text-[#c49250] text-[20px]"><FaBalanceScale /></span>
              <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-[25px] gap-x-[50px]">
            {pages.map((page, index) => {
              const num = (index + 1).toString().padStart(2, '0');
              return (
                <Link href={page.url} key={index} className="group flex items-center pb-[15px] border-b border-[#f0f0f0] no-underline transition-all duration-300">
                  <span className="bg-[#c49250] text-white text-[13px] font-bold py-1 px-2 rounded-sm mr-[15px] min-w-[32px] text-center">
                    {num}
                  </span>
                  <span className="text-[#051024] text-[17px] font-semibold font-family-[var(--font-primary)] transition-colors duration-300 whitespace-pre-line group-hover:text-[#c49250]">
                    {page.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer data={templateData.footer} />
      
    </main>
  );
};
