"use client";
import React from 'react';
import Link from 'next/link';
import { CaseStudyItem, GlobalUIData } from '@/types/templates.types';
import { FaArrowLeft, FaArrowRight, FaUser, FaFolderOpen, FaMoneyBillWave, FaCalendarAlt, FaCalendarCheck, FaGlobe, FaStar, FaShieldAlt, FaGavel, FaUserTie, FaHeartbeat } from 'react-icons/fa';

interface CaseStudyDetailContentProps {
  caseStudy: CaseStudyItem;
  globalUI?: GlobalUIData;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export const CaseStudyDetailContent = ({ caseStudy, prevSlug, nextSlug }: CaseStudyDetailContentProps) => {
  const { caseInfo, overview, challenge, result, bannerImage } = caseStudy;

  const renderResultIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaGavel': return <FaGavel />;
      case 'FaUserTie': return <FaUserTie />;
      case 'FaHeartbeat': return <FaHeartbeat />;
      default: return <FaShieldAlt />;
    }
  };

  return (
    <div className="bg-white">

      {/* 1. Hero Banner Area */}
      <div className="max-w-[1200px] mx-auto px-5 py-5">
        <section
          className="relative py-5 bg-cover bg-center rounded-[20px]"
          style={{ backgroundImage: `url(${bannerImage || caseStudy.image})` }}
        >
          {/* Subtle gradient instead of solid overlay if needed, or just dark overlay */}
          <div className="absolute inset-0 bg-black/60 rounded-[20px]"></div>

          <div className="relative z-10 px-[30px] lg:px-[60px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] items-center">

              {/* Left side (Title & Description) */}
              <div>
                <h1 className="text-white text-[28px] md:text-[46px] font-family-[var(--font-heading)] font-bold mb-[20px] leading-[1.2]">
                  {caseStudy.title}
                </h1>
                <p className="text-white/80 text-[14px] md:text-[16px] leading-[1.7] mb-[30px] md:mb-[40px] max-w-[500px]">
                  {caseStudy.description}
                </p>

                <div className="flex gap-[15px]">
                  {prevSlug ? (
                    <Link href={`/case-studies/${prevSlug}`} className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#051024] transition-colors hover:bg-[#c49250] hover:text-white">
                      <FaArrowLeft />
                    </Link>
                  ) : (
                    <div className="w-[45px] h-[45px] rounded-full bg-white/50 flex items-center justify-center text-[#051024]/50 cursor-not-allowed">
                      <FaArrowLeft />
                    </div>
                  )}

                  {nextSlug ? (
                    <Link href={`/case-studies/${nextSlug}`} className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#051024] transition-colors hover:bg-[#c49250] hover:text-white">
                      <FaArrowRight />
                    </Link>
                  ) : (
                    <div className="w-[45px] h-[45px] rounded-full bg-white/50 flex items-center justify-center text-[#051024]/50 cursor-not-allowed">
                      <FaArrowRight />
                    </div>
                  )}
                </div>
              </div>

              {/* Right side (Case Information Card) */}
              {caseInfo && (
                <div className="bg-white rounded-lg p-[25px] md:p-[40px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] w-full lg:max-w-[450px] ml-auto">
                  <h3 className="text-[#051024] text-[20px] md:text-[24px] font-family-[var(--font-heading)] font-bold mb-[20px] md:mb-[30px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                    Case Information
                  </h3>

                  <ul className="flex flex-col gap-[15px] md:gap-[20px] m-0 p-0 list-none text-[14px] md:text-[16px]">
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaUser /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">Client</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.client}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaFolderOpen /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">Category</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.category}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaMoneyBillWave /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">Budget</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.budget}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaCalendarAlt /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">Start Date</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.startDate}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaCalendarCheck /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">End Date</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.endDate}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px]">
                      <div className="w-[20px] text-center text-[#666666]"><FaGlobe /></div>
                      <span className="text-[#051024] font-bold min-w-[80px] md:min-w-[100px]">Website</span>
                      <span className="text-[#666666] break-words flex-1">{caseInfo.website}</span>
                    </li>
                    <li className="flex items-center gap-[15px] md:gap-[20px] pt-[20px] mt-[10px] border-t border-[#f0f0f0]">
                      <div className="w-[20px] text-center text-[#666666]"><FaStar className="text-transparent stroke-[#666666] stroke-[20px]" /></div>
                      <span className="text-[#051024] font-bold min-w-[100px]">Rating</span>
                      <span className="flex text-[#c49250] gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar key={i} className={i < caseInfo.rating ? 'text-[#c49250]' : 'text-[#e5e7eb]'} />
                        ))}
                      </span>
                    </li>
                  </ul>
                </div>
              )}

            </div>
          </div>
        </section>
      </div>

      <div className="max-w-[1200px] mx-auto px-5">
        {/* 2. Overview Section */}
        {overview && (
          <section className="py-[20px] lg:py-[30px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center">
              <div>
                <h2 className="text-[32px] text-[#051024] font-family-[var(--font-heading)] font-bold mb-[25px]">
                  {overview.title}
                </h2>
                <p className="text-[#666666] text-[15px] leading-[1.8]">
                  {overview.text}
                </p>
              </div>
              <div>
                <img src={overview.image} alt="Case Overview" className="w-full rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.1)] object-cover max-h-[350px]" />
              </div>
            </div>
          </section>
        )}

        {/* 3. The Challenge Section */}
        {challenge && (
          <section className="bg-[#fbf8f2] rounded-lg p-[30px] lg:p-[40px] mb-[40px] lg:mb-[60px]">
            <h2 className="text-[28px] lg:text-[32px] text-[#051024] font-family-[var(--font-heading)] font-bold mb-[20px]">
              {challenge.title}
            </h2>
            <p className="text-[#666666] text-[15px] leading-[1.8] mb-[40px] max-w-[800px]">
              {challenge.text}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
              {challenge.points.map((point, index) => (
                <div key={index} className="flex items-start gap-[20px] bg-transparent border-t lg:border-t-0 lg:border-l border-[#e5dfd3] pt-[20px] lg:pt-0 lg:pl-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-[#f2e6d3] text-[#c49250] flex items-center justify-center font-bold text-[16px] shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <p className="text-[#051024] text-[14px] leading-[1.6] font-medium m-0 pt-2">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 4. The Result Section */}
        {result && (
          <section className="py-[20px] lg:py-[30px] border-t border-[#f0f0f0]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[40px] items-start">
              <div className="lg:sticky lg:top-[100px]">
                <h2 className="text-[28px] lg:text-[32px] text-[#051024] font-family-[var(--font-heading)] font-bold mb-[20px]">
                  {result.title}
                </h2>
                <p className="text-[#666666] text-[15px] leading-[1.8]">
                  {result.text}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px]">
                {result.cards.map((card) => (
                  <div key={card.id} className="bg-white border border-[#f0f0f0] rounded-lg p-[30px_20px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] text-center transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[5px]">
                    <div className="w-[60px] h-[60px] mx-auto rounded-full border border-[#f2e6d3] text-[#c49250] flex items-center justify-center text-[24px] mb-[15px] transition-colors hover:bg-[#c49250] hover:text-white">
                      {renderResultIcon(card.icon)}
                    </div>
                    <h3 className="text-[20px] text-[#051024] font-family-[var(--font-heading)] font-bold mb-[15px]">
                      {card.title}
                    </h3>
                    <p className="text-[#666666] text-[14px] leading-[1.6] m-0">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

    </div>
  );
};
