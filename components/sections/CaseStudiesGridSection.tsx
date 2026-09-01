"use client";
import React from 'react';
import Link from 'next/link';
import { CaseStudiesData, GlobalUIData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa6';

export const CaseStudiesGridSection = ({ data, globalUI }: { data?: CaseStudiesData; globalUI?: GlobalUIData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 px-5 bg-[#fbf8f2]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-[60px] max-w-[700px] mx-auto">
          <div className="flex items-center justify-center gap-[15px] text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
            <span className="w-[30px] h-px bg-[#c49250]"></span>
            <span>{data.badge}</span>
            <span className="w-[30px] h-px bg-[#c49250]"></span>
          </div>
          <h2 className="text-[42px] font-family-[var(--)] text-[#051024] m-0 mb-[15px] font-bold">
            {data.title}
          </h2>
          {data.description && (
            <p className="text-[#666666] text-[16px] leading-[1.6]">
              {data.description}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {data.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.04)] border border-[#f0f0f0] transition-all duration-300 flex flex-col hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[5px] group">
              <div className="w-full h-[240px] overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-[30px] flex flex-col grow">
                <div className="text-[#c49250] text-[12px] font-bold tracking-[1px] uppercase mb-2.5">
                  {item.category}
                </div>
                <h3 className="text-[22px] font-family-[var(--)] text-[#051024] m-0 mb-3 font-bold">
                  {item.title}
                </h3>
                <p className="text-[#666666] text-[14px] leading-[1.7] mb-6 grow">
                  {item.description}
                </p>
                <Link href={`/case-studies/${item.slug}`} className="inline-flex items-center gap-2 text-[#051024] font-bold text-[13px] uppercase tracking-[1px] no-underline transition-colors duration-300 hover:text-[#c49250] mt-auto">
                  {globalUI?.caseStudyReadBtnText || 'READ CASE STUDY'} <FaArrowRight className="text-[#c49250] text-[14px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
