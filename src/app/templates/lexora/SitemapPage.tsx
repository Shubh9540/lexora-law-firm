import React from 'react';
import { LexoraTemplateData } from '../../data/templates.types';
import { TopBar } from './components/TopBar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Breadcrumb } from './components/Breadcrumb';
import Link from 'next/link';

interface SitemapPageProps {
  templateData: LexoraTemplateData;
}

export const SitemapPage = ({ templateData }: SitemapPageProps) => {
  const pages = [
    { name: 'Home 🏠', url: '/' },
    { name: 'About Us', url: '/about' },
    { name: 'Why Choose Us', url: '/why-choose-us' },
    { name: 'Our Approach', url: '/our-approach' },
    { name: 'Services', url: '/services' },
    { name: 'Industries We Serve', url: '/industries' },
  ];

  templateData.services?.items?.forEach((service: any) => {
    pages.push({ name: `${service.title} Detail`, url: `/services/${service.slug}` });
  });

  templateData.industries?.items?.forEach((industry: any) => {
    pages.push({ name: `${industry.title} Detail`, url: `/industries/${industry.slug}` });
  });

  pages.push({ name: 'Our Team', url: '/team' });

  templateData.team?.members?.forEach((member: any) => {
    pages.push({ name: `${member.name} Detail`, url: `/team/${member.slug}` });
  });

  return (
    <main className="lexora-sitemap-page" style={{ 
      backgroundColor: '#ffffff',
      '--color-primary': '#0a1828',
      '--color-accent': '#c29b57',
      '--color-bg-light': '#f8f9fa',
      '--color-text': '#333333',
      '--color-text-light': '#666666',
      '--font-primary': '"Playfair Display", serif',
      '--font-secondary': '"Inter", sans-serif'
    } as React.CSSProperties}>
      
      <TopBar data={templateData.topBar} />
      <Header data={templateData.header} />
      
      <Breadcrumb data={templateData.sitemapBreadcrumb || {
        title: 'Sitemap',
        paths: [{ label: 'Home', url: '/' }, { label: 'Sitemap' }],
        bgImage: '/banner/ban1.jpg'
      }} />
      
      <section className="sitemap-section" style={{ padding: '100px 20px', backgroundColor: '#ffffff' }}>
        <div className="sitemap-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'var(--color-accent)', 
              fontSize: '13px', 
              fontWeight: '600', 
              letterSpacing: '2px', 
              textTransform: 'uppercase', 
              marginBottom: '15px' 
            }}>
              <span style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-accent)', margin: '0 15px' }}></span>
              SITEMAP
              <span style={{ width: '30px', height: '1px', backgroundColor: 'var(--color-accent)', margin: '0 15px' }}></span>
            </div>
            
            <h2 style={{ 
              fontSize: '46px', 
              color: 'var(--color-primary)', 
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              marginBottom: '20px'
            }}>Explore All Pages</h2>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)', opacity: '0.5' }}></span>
              <span style={{ color: 'var(--color-accent)', fontSize: '20px' }}>⚖️</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-accent)', opacity: '0.5' }}></span>
            </div>
          </div>

          <div className="sitemap-grid-new">
            {pages.map((page, index) => {
              const num = (index + 1).toString().padStart(2, '0');
              return (
                <Link href={page.url} key={index} className="sitemap-item">
                  <span className="sitemap-num">{num}</span>
                  <span className="sitemap-text">{page.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer data={templateData.footer} />

      <style dangerouslySetInnerHTML={{
        __html: `
          .sitemap-grid-new {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px 50px;
          }
          .sitemap-item {
            display: flex;
            align-items: center;
            padding-bottom: 15px;
            border-bottom: 1px solid #f0f0f0;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .sitemap-item:hover .sitemap-text {
            color: var(--color-accent);
          }
          .sitemap-num {
            background-color: #c29b57;
            color: #ffffff;
            font-size: 13px;
            font-weight: 700;
            padding: 4px 8px;
            border-radius: 2px;
            margin-right: 15px;
            min-width: 32px;
            text-align: center;
          }
          .sitemap-text {
            color: var(--color-primary);
            font-size: 17px;
            font-weight: 600;
            font-family: var(--font-primary);
            transition: color 0.3s ease;
            white-space: pre-line;
          }

          @media (max-width: 992px) {
            .sitemap-grid-new {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            .sitemap-grid-new {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
      
    </main>
  );
};
