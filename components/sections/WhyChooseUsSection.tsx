"use client";
import React from 'react';
import { AboutWhyChooseUsData } from '@/types/templates.types';
import { FaUserTie, FaHandshake, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const WhyChooseUsSection = ({ data }: { data?: AboutWhyChooseUsData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaUserTie': return <FaUserTie />;
      case 'FaHandshake': return <FaHandshake />;
      default: return <FaUserTie />;
    }
  };

  return (
    <section className="py-5 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center">
        
        <div className="flex flex-col gap-5 lg:pr-5">
          <div className="flex items-center gap-2.5 text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">
            <span className="text-[#c49250] text-[18px]"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          <h2 className="text-[36px] sm:text-[46px] font-family-[var(--)] font-bold leading-[1.2] text-[#051024] m-0">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'text-[#c49250]' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="w-[60px] h-[2px] bg-[#c49250] my-[5px]"></div>
          
          <p className="text-[#555555] text-[15px] leading-[1.7] mb-2.5 max-w-full lg:max-w-[90%]">{data.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] mb-[30px]">
            {data.points.map((point) => (
              <div key={point.id} className="bg-white border border-[#f0f0f0] rounded-lg p-[30px_25px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] flex flex-col items-start transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-[5px]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#fbf8f2] text-[#c49250] flex items-center justify-center text-[22px] mb-5 border border-[#f2e6d3]">
                  {renderIcon(point.icon)}
                </div>
                <h3 className="text-[18px] text-[#051024] font-family-[var(--)] m-0 mb-3 font-semibold leading-[1.3]">{point.title}</h3>
                <p className="text-[13px] text-[#666666] leading-[1.6] m-0">{point.text}</p>
              </div>
            ))}
          </div>
          
          <a href={data.buttonUrl} className="inline-flex items-center gap-2.5 bg-[#c49250] !text-white p-[12px_30px] rounded-[4px] text-[15px] font-semibold w-max transition-all duration-300 no-underline !transform-none hover:bg-[#e0b467]">
            {data.buttonText}
            <span className="text-white text-[14px]"><FaArrowRight /></span>
          </a>
        </div>
        
        <div className="h-full min-h-[400px] lg:min-h-[600px] rounded-xl overflow-hidden">
          <img src={data.image} alt={data.title.replace(/\n/g, ' ')} className="w-full h-full object-cover block" />
        </div>
        
      </div>
    </section>
  );
};
