"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { PublicationItem, GlobalUIData } from '@/types/templates.types';
import { FaDownload, FaShareAlt, FaPrint, FaArrowLeft, FaArrowRight, FaBookOpen, FaUserTie, FaBuilding, FaGlobe, FaLanguage, FaRegCalendarAlt, FaFolderOpen, FaRegClock } from 'react-icons/fa';

interface PublicationDetailClientProps {
  pub: PublicationItem;
  globalUI?: GlobalUIData;
  prevSlug?: string | null;
  nextSlug?: string | null;
  [key: string]: any;
}

export const PublicationDetailClient = ({ pub, globalUI, prevSlug, nextSlug }: PublicationDetailClientProps) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Hardcoded tabs structure similar to template data for now, or you could pass it
  const tabsConfig = {
    overview: "Overview",
    keyTopics: "Key Topics",
    tableOfContents: "Table of Contents",
    authors: "Authors",
    related: "Related Publications"
  };

  const tabs = [
    { id: 'overview', label: tabsConfig.overview },
    { id: 'key-topics', label: tabsConfig.keyTopics },
    { id: 'table-of-contents', label: tabsConfig.tableOfContents },
    { id: 'authors', label: tabsConfig.authors },
    { id: 'related', label: tabsConfig.related },
  ];

  return (
    <div className="bg-[#fcfbf9]">

      {/* 1. Clean Hero Section (Match Screenshot 2) */}
      <section className="py-[60px] lg:py-[80px] bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-col md:flex-row gap-[40px] lg:gap-[60px] items-start">
            
            {/* Left: Book Cover Image */}
            <div className="w-full md:w-[320px] shrink-0">
              <img 
                src={pub.coverImage} 
                alt={pub.title} 
                className="w-full h-auto object-cover shadow-[10px_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* Right: Content details */}
            <div className="flex-1 pt-[10px]">
              <div className="text-[#c49250] text-[13px] font-bold uppercase tracking-[1.5px] mb-[15px]">
                {pub.badge || 'LEGAL GUIDE'}
              </div>
              
              <h1 className="text-[36px] md:text-[46px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] leading-[1.2]">
                {pub.title}
              </h1>
              
              <p className="text-[#4a4a4a] text-[16px] md:text-[18px] leading-[1.7] mb-[25px] max-w-[800px]">
                {pub.description}
              </p>

              {/* Meta Info Row */}
              <div className="flex flex-wrap items-center gap-[20px] md:gap-[30px] text-[#666666] text-[15px] font-medium mb-[35px]">
                <div className="flex items-center gap-[8px]">
                  <FaRegCalendarAlt className="text-[#999999]" />
                  <span>{pub.date}</span>
                </div>
                <div className="hidden md:block w-[1px] h-[15px] bg-[#e0e0e0]"></div>
                <div className="flex items-center gap-[8px]">
                  <FaFolderOpen className="text-[#999999]" />
                  <span>{pub.category}</span>
                </div>
                <div className="hidden md:block w-[1px] h-[15px] bg-[#e0e0e0]"></div>
                <div className="flex items-center gap-[8px]">
                  <FaRegClock className="text-[#999999]" />
                  <span>{pub.pages} Pages</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-[15px] mb-[40px]">
                <a 
                  href={pub.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-[10px] bg-[#051024] text-white font-bold text-[14px] px-[30px] py-[15px] rounded-[4px] transition-all hover:bg-[#c49250]"
                >
                  <FaDownload /> DOWNLOAD PDF
                </a>
                <button className="inline-flex items-center justify-center gap-[10px] bg-white border border-[#d1d5db] text-[#051024] font-bold text-[14px] px-[30px] py-[15px] rounded-[4px] transition-all hover:border-[#051024]">
                  <FaBookOpen /> READ ONLINE
                </button>
              </div>

              {/* Bottom Divider */}
              <div className="w-full h-[1px] bg-[#e5e7eb]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-[80px] z-40 shadow-sm">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex overflow-x-auto hide-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`whitespace-nowrap px-[25px] py-[20px] text-[15px] font-bold uppercase tracking-[1px] transition-all duration-300 border-b-2 ${
                  activeTab === tab.id 
                    ? 'border-[#c49250] text-[#c49250]' 
                    : 'border-transparent text-gray-500 hover:text-[#051024] hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Main Content Area */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          
          {/* Tab Content Panels */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[50px] lg:gap-[80px] animate-fadeIn">
              
              {/* Left: Overview Text */}
              <div>
                <h2 className="text-[32px] text-[#051024] font-family-[var(--)] font-bold mb-[30px] flex items-center gap-4">
                  Executive Overview
                  <span className="h-[2px] w-[60px] bg-[#c49250] inline-block"></span>
                </h2>
                
                <div className="space-y-[25px] text-[#666666] text-[16px] md:text-[17px] leading-[1.9]">
                  {pub.overview?.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                {pub.overview?.quote && (
                  <div className="mt-[40px] p-[40px] bg-[#f9f9f9] border-l-[4px] border-[#c49250] rounded-r-lg relative">
                    <FaBookOpen className="absolute top-[20px] left-[20px] text-[40px] text-[#e0e0e0] opacity-50" />
                    <p className="text-[20px] md:text-[22px] text-[#051024] font-family-[var(--)] font-medium italic leading-[1.6] relative z-10 mb-[15px]">
                      "{pub.overview.quote.text}"
                    </p>
                    <span className="text-[#c49250] font-bold uppercase tracking-[1px] text-[13px]">
                      — {pub.overview.quote.author}
                    </span>
                  </div>
                )}
              </div>

              {/* Right: Quick Stats & About */}
              <div className="space-y-[40px]">
                {/* At a Glance Box */}
                <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-[30px] border border-gray-100">
                  <h3 className="text-[20px] text-[#051024] font-bold mb-[25px] border-b border-gray-100 pb-[15px]">At a Glance</h3>
                  <ul className="space-y-[20px]">
                    <li className="flex items-center gap-[15px]">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#fdfaf6] text-[#c49250] flex items-center justify-center text-[18px]">
                        <FaBookOpen />
                      </div>
                      <div>
                        <div className="text-[12px] text-gray-500 font-bold uppercase tracking-[1px]">Length</div>
                        <div className="text-[#051024] font-bold">{pub.pages} Pages</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#fdfaf6] text-[#c49250] flex items-center justify-center text-[18px]">
                        <FaLanguage />
                      </div>
                      <div>
                        <div className="text-[12px] text-gray-500 font-bold uppercase tracking-[1px]">Language</div>
                        <div className="text-[#051024] font-bold">English</div>
                      </div>
                    </li>
                    <li className="flex items-center gap-[15px]">
                      <div className="w-[40px] h-[40px] rounded-full bg-[#fdfaf6] text-[#c49250] flex items-center justify-center text-[18px]">
                        <FaGlobe />
                      </div>
                      <div>
                        <div className="text-[12px] text-gray-500 font-bold uppercase tracking-[1px]">Region</div>
                        <div className="text-[#051024] font-bold">Global / India</div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* About Guide */}
                {pub.aboutGuide && (
                  <div className="bg-[#051024] rounded-xl p-[30px] text-white">
                    <h3 className="text-[20px] font-bold mb-[15px] text-[#c49250]">About This Guide</h3>
                    <p className="text-white/70 text-[14px] leading-[1.8] mb-[25px]">
                      {pub.aboutGuide.text}
                    </p>
                    <ul className="space-y-[15px]">
                      {pub.aboutGuide.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-[12px]">
                          <FaArrowRight className="text-[#c49250] mt-[4px] flex-shrink-0 text-[12px]" />
                          <div>
                            <span className="font-bold block text-[15px]">{feature.title}</span>
                            <span className="text-white/60 text-[13px]">{feature.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'key-topics' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">Key Topics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-[#f4f7f9] flex items-center justify-center text-[var(--color-accent)] font-bold shrink-0">
                      0{i}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#051024] mb-2">Topic {i} Overview</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'table-of-contents' && (
            <div className="max-w-3xl space-y-6 animate-fadeIn">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Table of Contents</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-gray-200">
                    <span className="text-lg font-semibold text-gray-700">Chapter {i}: Executive Summary & Analysis</span>
                    <span className="text-[var(--color-accent)] font-bold">Pg {i * 12}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'authors' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Authors & Contributors</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden">
                      <img src={`/team/team${i}.jpg`} alt="Author" className="w-full h-full object-cover" onError={(e) => (e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80')} />
                    </div>
                    <h4 className="text-xl font-bold text-[#051024] mb-1">Author Name {i}</h4>
                    <p className="text-[var(--color-accent)] text-sm font-semibold mb-3">Senior Partner</p>
                    <p className="text-gray-500 text-sm">Specializing in corporate law and regulatory compliance with over 15 years of experience.</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'related' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8">Related Publications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2].map((i) => (
                  <div key={i} className="flex gap-6 bg-white p-6 rounded-lg border border-gray-100 hover:border-[var(--color-accent)] transition-colors cursor-pointer">
                    <div className="w-32 h-40 bg-gray-200 rounded shrink-0 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80" alt="Related" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[var(--color-accent)] uppercase mb-2 block">Legal Guide</span>
                      <h4 className="text-xl font-bold text-[#051024] mb-3">Understanding Corporate Tax Laws {i}</h4>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">An essential guide for foreign investors navigating the complex corporate tax structures.</p>
                      <span className="text-sm font-semibold text-[var(--color-primary)] flex items-center gap-2">Read More →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Navigation Footer */}
      <div className="bg-[#f0f0f0] py-[20px]">
        <div className="max-w-[1200px] mx-auto px-5 flex justify-between">
          {prevSlug ? (
             <Link href={`/publications/${prevSlug}`} className="text-[#051024] font-bold text-[14px] uppercase tracking-[1px] flex items-center gap-[10px] hover:text-[#c49250] transition-colors">
               <FaArrowLeft /> Previous Publication
             </Link>
          ) : <div></div>}
          
          {nextSlug ? (
             <Link href={`/publications/${nextSlug}`} className="text-[#051024] font-bold text-[14px] uppercase tracking-[1px] flex items-center gap-[10px] hover:text-[#c49250] transition-colors">
               Next Publication <FaArrowRight />
             </Link>
          ) : <div></div>}
        </div>
      </div>

    </div>
  );
};
