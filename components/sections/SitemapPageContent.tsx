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
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;
  const detailSuffix = globalUI?.sitemapDetailSuffix || 'Detail';
  
  const pages = [
    { name: globalUI?.sitemapHome || 'Home', url: '/' },
    { name: globalUI?.sitemapAbout || 'About Us', url: '/about' },
    { name: globalUI?.sitemapWhyChooseUs || 'Why Choose Us', url: '/why-choose-us' },
    { name: globalUI?.sitemapOurApproach || 'Our Approach', url: '/our-approach' },
    { name: globalUI?.sitemapServices || 'Services', url: '/services' },
    { name: globalUI?.sitemapIndustries || 'Industries We Serve', url: '/industries' },
  ];

  sectionData?.services?.variants?.LexoraServices1?.items?.forEach((service) => {
    pages.push({ name: `${service.title} ${detailSuffix}`, url: `/services/${service.slug}` });
  });

  sectionData?.industries?.variants?.LexoraIndustries1?.items?.forEach((industry) => {
    pages.push({ name: `${industry.title} ${detailSuffix}`, url: `/industries/${industry.slug}` });
  });

  pages.push({ name: globalUI?.sitemapTeam || 'Our Team', url: '/team' });

  sectionData?.team?.variants?.LexoraTeam1?.members?.forEach((member) => {
    pages.push({ name: `${member.name} ${detailSuffix}`, url: `/team/${member.slug}` });
  });

  pages.push(
    { name: 'Blog', url: '/blogs' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Events', url: '/events' },
    { name: 'Awards & Recognitions', url: '/awards' },
    { name: 'Client Testimonials', url: '/testimonials' },
    { name: 'FAQ', url: '/faq' },
    { name: 'Careers', url: '/careers' },
    { name: 'Office Locations', url: '/locations' },
    { name: 'Contact Us', url: '/contact' },
    { name: 'Book Consultation', url: '/book-consultation' },
    { name: 'News & Media', url: '/news-media' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
    { name: 'Terms & Conditions', url: '/terms-conditions' },
    { name: 'Legal Disclaimer', url: '/legal-disclaimer' }
  );

  return (
    <main className="bg-white">
      
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={sectionData?.sitemapBreadcrumb?.variants?.LexoraSitemapBreadcrumb1 || globalUI?.defaultSitemapBreadcrumb || {
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
              const num = (index + 1).toString().padStart(2, '00');
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

      <Footer data={commonData?.Footer} />
      
    </main>
  );
};