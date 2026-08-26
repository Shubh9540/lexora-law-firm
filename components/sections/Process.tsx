"use client";

import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FaPhoneAlt, FaClipboardList, FaGavel, FaTrophy, FaUsers, FaSearch, FaCalculator, FaAngleRight } from 'react-icons/fa';

export const Process = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaPhoneAlt': return <FaPhoneAlt />;
      case 'FaClipboardList': return <FaClipboardList />;
      case 'FaGavel': return <FaGavel />;
      case 'FaTrophy': return <FaTrophy />;
      case 'FaUsers': return <FaUsers />;
      case 'FaSearch': return <FaSearch />;
      case 'FaCalculator': return <FaCalculator />;
      default: return <FaClipboardList />;
    }
  };

  return (
    <section className="bg-[#fafafa] py-5 relative z-[1] overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-5">

        <div className="text-center mb-[70px]">
          <div className="flex items-center justify-center gap-[15px] mb-[15px]">
            <span className="w-[30px] h-px bg-[#c49250]"></span>
            <span className="text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">{data.badge}</span>
            <span className="w-[30px] h-px bg-[#c49250]"></span>
          </div>
          <h2 className="text-[32px] md:text-[46px] text-[#051024] font-bold leading-[1.2] mb-[25px] m-0">
            {data.title} <br /> <span className="text-[#c49250]">{data.subtitle}</span>
          </h2>
          {data.description && (
            <p className="text-[#666666] text-[15px] leading-[1.6] max-w-[600px] mx-auto m-0">{data.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between relative gap-10 lg:gap-0">
          {data.steps.map((step, index) => {
            const isAlt = index % 2 !== 0; // index 1 and 3 are gold

            return (
              <div key={step.id} className="relative pt-[25px] w-full lg:w-[240px]">
                <div className="bg-white rounded-b-[4px] pt-10 px-[15px] pb-[35px] text-center shadow-[0_10px_40px_rgba(0,0,0,0.04)] relative h-full transition-transform duration-300 hover:-translate-y-1 group/card">
                  <div className={`absolute top-0 left-0 w-full box-border border-t-[8px] border-l-[12px] border-r-[12px] border-l-transparent border-r-transparent ${isAlt ? 'border-t-[#c49250]' : 'border-t-[#051024]'}`}></div>
                  <div className={`absolute -top-[24px] left-1/2 -translate-x-1/2 w-[48px] h-[48px] rounded-full text-white flex items-center justify-center text-[16px] font-bold z-[2] border-[4px] border-white ${isAlt ? 'bg-[#c49250]' : 'bg-[#051024]'}`}>
                    0{index + 1}
                  </div>

                  <div className={`w-[90px] h-[90px] rounded-full flex items-center justify-center mx-auto mb-10 transition-colors duration-300 ${isAlt ? 'bg-[#fdf6ec] group-hover/card:bg-[#c49250]' : 'bg-[#f1f4f8] group-hover/card:bg-[#051024]'}`}>
                    <div className={`text-[38px] transition-colors duration-300 group-hover/card:text-white ${isAlt ? 'text-[#c49250]' : 'text-[#051024]'}`}>
                      {renderIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="text-[18px] text-[#051024] font-bold mb-3 m-0">{step.title}</h3>
                  <div className="w-[30px] h-[2px] bg-[#c49250] mx-auto mb-[15px]"></div>
                  <p className="text-[#777777] text-[13px] leading-[1.6] m-0">{step.description}</p>
                </div>

                {/* Connecting arrow, except for the last item */}
                {index < data.steps.length - 1 && (
                  <div className={`hidden lg:block absolute top-1/2 left-full w-[calc((1210px-960px)/3)] h-px -translate-y-1/2 z-[5] ${isAlt ? 'bg-[#c49250]' : 'bg-[#051024]'}`}>
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44px] h-[44px] rounded-full border border-dashed bg-[#fafafa] flex items-center justify-center z-[2] ${isAlt ? 'border-[#c49250]' : 'border-[#051024]'}`}>
                      <div className={`w-[32px] h-[32px] rounded-full text-white flex items-center justify-center text-[12px] ${isAlt ? 'bg-[#c49250]' : 'bg-[#051024]'}`}>
                        <FaAngleRight />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
