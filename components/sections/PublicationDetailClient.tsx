'use client';

import React, { useState } from 'react';
import { PublicationItem } from '@/types/templates.types';
import { FiCalendar, FiFolder, FiClock, FiDownload, FiBookOpen, FiCheckCircle } from 'react-icons/fi';

export function PublicationDetailClient({ 
  pub,
  downloadButtonText = 'DOWNLOAD PDF',
  readOnlineButtonText = 'READ ONLINE',
  itemBadge = 'LEGAL GUIDE',
  pagesLabel = 'Pages',
  overviewTitle = 'Overview',
  keyTopicsTitle = 'Key Topics Covered',
  aboutGuideTitle = 'About This Guide',
  tabsConfig = {
    overview: 'OVERVIEW',
    keyTopics: 'KEY TOPICS',
    tableOfContents: 'TABLE OF CONTENTS',
    authors: 'AUTHORS',
    related: 'RELATED PUBLICATIONS'
  }
}: { 
  pub: PublicationItem;
  downloadButtonText?: string;
  readOnlineButtonText?: string;
  itemBadge?: string;
  pagesLabel?: string;
  overviewTitle?: string;
  keyTopicsTitle?: string;
  aboutGuideTitle?: string;
  tabsConfig?: {
    overview: string;
    keyTopics: string;
    tableOfContents: string;
    authors: string;
    related: string;
  };
}) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: tabsConfig.overview },
    { id: 'key-topics', label: tabsConfig.keyTopics },
    { id: 'table-of-contents', label: tabsConfig.tableOfContents },
    { id: 'authors', label: tabsConfig.authors },
    { id: 'related', label: tabsConfig.related },
  ];

  return (
    <div className="bg-[#fcfaf8] min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-white pt-20 pb-12 px-6 shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/3 flex-shrink-0">
            <img
              src={pub.coverImage}
              alt={pub.title}
              className="w-full h-auto object-cover rounded-md shadow-xl"
            />
          </div>
          
          <div className="flex flex-col justify-center pt-4">
            <span className="text-[var(--color-accent)] font-bold tracking-widest text-xs uppercase mb-4">
              {itemBadge}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">{pub.title}</h1>
            <p className="text-gray-600 text-lg mb-8 max-w-3xl">
              {pub.description}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-10 pb-10 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-5 h-5 text-gray-400" />
                <span>{pub.date}</span>
              </div>
              <div className="text-gray-300">|</div>
              <div className="flex items-center gap-2">
                <FiFolder className="w-5 h-5 text-gray-400" />
                <span>{pub.category}</span>
              </div>
              <div className="text-gray-300">|</div>
              <div className="flex items-center gap-2">
                <FiClock className="w-5 h-5 text-gray-400" />
                <span>{pub.pages} {pagesLabel}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={pub.pdfUrl}
                className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-md"
              >
                <FiDownload className="w-5 h-5" />
                {downloadButtonText}
              </a>
              <button
                className="flex items-center gap-2 border border-gray-300 bg-white px-6 py-3 rounded text-sm font-semibold hover:bg-gray-50 transition shadow-sm"
              >
                <FiBookOpen className="w-5 h-5" />
                {readOnlineButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-gray-200 bg-[#fcfaf8] px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-6 text-sm font-bold tracking-wider transition-colors ${
                activeTab === tab.id
                  ? 'text-[var(--color-primary)] border-b-2 border-[var(--color-accent)]'
                  : 'text-gray-500 hover:text-gray-900 border-b-2 border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-16">
              {/* Overview & Key Topics Row */}
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-2/3">
                  <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">{overviewTitle}</h2>
                  <div className="space-y-6 text-gray-700 text-lg">
                    {pub.overview.paragraphs.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                  
                  <div className="mt-10 bg-[#f4f7f9] p-8 rounded-lg border-l-4 border-[var(--color-primary)]">
                    <p className="text-xl italic text-gray-800 mb-4">
                      "{pub.overview.quote.text}"
                    </p>
                    <p className="text-sm font-bold text-[var(--color-primary)]">
                      – {pub.overview.quote.author}
                    </p>
                  </div>
                </div>
                
                <div className="w-full lg:w-1/3">
                  <div className="bg-[#f8f6f0] p-8 rounded-lg h-full">
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-6">{keyTopicsTitle}</h3>
                    <ul className="space-y-4">
                      {pub.overview.keyTopics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FiCheckCircle className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 font-medium">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* About This Guide Section */}
              <div className="pt-12 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">{aboutGuideTitle}</h2>
                <p className="text-gray-700 text-lg mb-10 max-w-4xl">
                  {pub.aboutGuide.text}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {pub.aboutGuide.features.map((feature, i) => (
                    <div key={i} className="flex flex-col">
                      <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center mb-4 text-[var(--color-primary)]">
                        <FiBookOpen className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-[var(--color-primary)] mb-2">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab !== 'overview' && (
            <div className="py-20 text-center text-gray-500">
              <h2 className="text-2xl font-bold text-gray-300 mb-4">{tabs.find(t => t.id === activeTab)?.label}</h2>
              <p>Content for {tabs.find(t => t.id === activeTab)?.label} will be displayed here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
