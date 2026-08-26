import React from 'react';
import Link from 'next/link';
import { LexoraTemplateData } from '@/types/templates.types';
import { TopBar } from '@/components/common/TopBar';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';
import { Breadcrumb } from '@/components/common/Breadcrumb';
import { FiCalendar, FiFolder, FiClock, FiDownload, FiBookOpen } from 'react-icons/fi';
import rawData from '@/data/templates.json';

export const dynamic = 'force-dynamic';

export default async function PublicationsPage() {
  

  const templateData: LexoraTemplateData = rawData as unknown as LexoraTemplateData;
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  if (!templateData) {
    return <div>Data not found</div>;
  }

  const breadcrumbData = sectionData?.publicationsBreadcrumb?.variants?.LexoraPublicationsBreadcrumb1 || {
    title: sectionData?.publications?.variants?.LexoraPublications1?.title || 'Publications',
    paths: [
      { label: sectionData?.globalUI?.variants?.LexoraGlobalUI1?.sitemapHome || 'Home', url: '/' },
      { label: sectionData?.publications?.variants?.LexoraPublications1?.title || 'Publications' }
    ],
    bgImage: '/banner/ban1.jpg'
  };

  const publications = sectionData?.publications?.variants?.LexoraPublications1?.items || [];

  return (
    <main className="bg-white">
      <TopBar data={sectionData?.topBar?.variants?.LexoraTopBar1} />
      <Header data={sectionData?.header?.variants?.LexoraHeader1} />
      
      <Breadcrumb data={breadcrumbData} />

      <div className="py-20 px-6 max-w-7xl mx-auto">
        <div className="mb-12">
          <h4 className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase mb-2">
            {sectionData?.publications?.variants?.LexoraPublications1?.badge || 'Legal Guides'}
          </h4>
          <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]">
            {sectionData?.publications?.variants?.LexoraPublications1?.title || 'Publications'}
          </h1>
          <p className="mt-4 text-[var(--color-text-light)] max-w-2xl">
            {sectionData?.publications?.variants?.LexoraPublications1?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {publications.map((pub) => (
            <div key={pub.id} className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-shadow hover:shadow-md">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <img
                  src={pub.coverImage}
                  alt={pub.title}
                  className="w-full h-auto object-cover rounded-md shadow-md"
                />
              </div>
              
              <div className="flex flex-col justify-center">
                <span className="text-[var(--color-accent)] font-bold tracking-widest text-xs uppercase mb-2">
                  {sectionData?.publications?.variants?.LexoraPublications1?.itemBadge || 'LEGAL GUIDE'}
                </span>
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-3">{pub.title}</h2>
                <p className="text-[var(--color-text-light)] text-sm mb-4 line-clamp-3">
                  {pub.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{pub.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiFolder className="w-4 h-4" />
                    <span>{pub.category}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-4 h-4" />
                    <span>{pub.pages} {sectionData?.publications?.variants?.LexoraPublications1?.pagesLabel || 'Pages'}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  <a
                    href={pub.pdfUrl}
                    className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-opacity-90 transition"
                  >
                    <FiDownload className="w-4 h-4" />
                    {sectionData?.publications?.variants?.LexoraPublications1?.downloadButtonText || 'DOWNLOAD PDF'}
                  </a>
                  <Link
                    href={`/publications/${pub.id}`}
                    className="flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded text-sm font-semibold hover:bg-gray-50 transition"
                  >
                    <FiBookOpen className="w-4 h-4" />
                    {sectionData?.publications?.variants?.LexoraPublications1?.readOnlineButtonText || 'READ ONLINE'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer data={commonData?.Footer} />
    </main>
  );
}
