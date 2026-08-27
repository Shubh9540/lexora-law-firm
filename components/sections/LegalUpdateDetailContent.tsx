"use client";
import React from 'react';
import Link from 'next/link';
import { LegalUpdateItem, GlobalUIData } from '@/types/templates.types';
import { FaFileAlt, FaUsers, FaClipboardCheck, FaChartLine, FaHandshake, FaBalanceScale, FaArrowRight } from 'react-icons/fa';

interface LegalUpdateDetailContentProps {
  update: LegalUpdateItem;
  allUpdates: LegalUpdateItem[];
  globalUI?: GlobalUIData;
}

export const LegalUpdateDetailContent = ({ update, allUpdates, globalUI }: LegalUpdateDetailContentProps) => {
  // Get 4 related updates excluding current
  const relatedUpdates = allUpdates.filter(u => u.id !== update.id).slice(0, 4);

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'FaFileAlt': return <FaFileAlt />;
      case 'FaUsers': return <FaUsers />;
      case 'FaClipboardCheck': return <FaClipboardCheck />;
      case 'FaChartLine': return <FaChartLine />;
      case 'FaHandshake': return <FaHandshake />;
      default: return <FaFileAlt />;
    }
  };

  return (
    <section className="py-5 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[40px] lg:gap-[60px] items-start">
          
          {/* LEFT: Main Content */}
          <div>
            <div className="mb-[40px]">
              <div className="flex items-center text-[12px] font-bold mb-[20px] uppercase tracking-[1px]">
                <span className="text-[#c49250]">{update.category}</span>
                <span className="mx-[15px] text-[#e5e7eb]">|</span>
                <span className="text-[#666666]">{update.date}</span>
              </div>
              
              <h1 className="text-[32px] md:text-[42px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] leading-[1.2]">
                {update.title}
              </h1>
              
              <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.8] font-medium border-b border-[#f0f0f0] pb-[30px] mb-[40px]">
                {update.excerpt}
              </p>

              {/* Rich Content Blocks */}
              <div className="space-y-[30px]">
                {update.contentBlocks.map((block, index) => {
                  if (block.type === 'heading') {
                    return (
                      <h2 key={index} className="text-[24px] md:text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] mt-[40px] leading-[1.3]">
                        {block.heading}
                      </h2>
                    );
                  } else if (block.type === 'paragraph') {
                    return (
                      <p key={index} className="text-[#666666] text-[15px] md:text-[16px] leading-[1.8] m-0">
                        {block.text}
                      </p>
                    );
                  } else if (block.type === 'list_item') {
                    return (
                      <div key={index} className="flex gap-[20px] items-start pt-[10px]">
                        <div className="w-[50px] h-[50px] rounded-full bg-[#fdfaf6] border border-[#f0e6d3] text-[#c49250] flex items-center justify-center text-[20px] flex-shrink-0">
                          {renderIcon(block.icon)}
                        </div>
                        <div>
                          <h4 className="text-[18px] text-[#051024] font-bold font-family-[var(--)] mb-[10px]">
                            {block.number} {block.heading}
                          </h4>
                          <p className="text-[#666666] text-[15px] leading-[1.7] m-0">
                            {block.text}
                          </p>
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-[40px] lg:sticky lg:top-[120px]">
            
            {/* Featured Image */}
            <div className="rounded-[15px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
              <img src={update.image} alt={update.title} className="w-full h-auto object-cover" />
            </div>

            {/* Related Updates */}
            <div className="bg-white">
              <h3 className="text-[22px] text-[#051024] font-family-[var(--)] font-bold mb-[30px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                Related Updates
              </h3>
              
              <div className="flex flex-col gap-[25px]">
                {relatedUpdates.map((rel) => (
                  <Link key={rel.id} href={`/legal-updates/${rel.slug || rel.id}`} className="flex gap-[15px] items-center group">
                    <img 
                      src={rel.image} 
                      alt={rel.title} 
                      className="w-[70px] h-[70px] rounded-lg object-cover shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div>
                      <div className="text-[#666666] text-[11px] mb-[5px] uppercase font-bold tracking-[0.5px]">
                        {rel.date}
                      </div>
                      <h4 className="text-[14px] text-[#051024] font-bold font-family-[var(--)] leading-[1.4] group-hover:text-[#c49250] transition-colors line-clamp-2 m-0">
                        {rel.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Need Legal Advice CTA Box */}
            <div className="bg-[#051024] rounded-[15px] p-[40px] shadow-[0_20px_40px_rgba(5,16,36,0.3)] text-center relative overflow-hidden">
              <div className="w-[70px] h-[70px] rounded-full border border-white/20 text-[#c49250] flex items-center justify-center text-[30px] mx-auto mb-[25px]">
                <FaBalanceScale />
              </div>
              
              <h3 className="text-[26px] text-white font-family-[var(--)] font-bold leading-[1.2] mb-[15px]">
                Need Legal Advice?
              </h3>
              
              <p className="text-white/70 text-[15px] leading-[1.6] mb-[30px]">
                Our experienced attorneys are here to help you navigate complex legal challenges.
              </p>
              
              <Link href="/contact" className="inline-flex items-center justify-center gap-[10px] bg-[#c49250] text-white font-bold text-[14px] px-[30px] py-[15px] rounded w-full transition-all hover:bg-white hover:text-[#051024]">
                Contact Our Experts <FaArrowRight />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
