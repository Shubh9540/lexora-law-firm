"use client";

import React, { useState, useEffect } from 'react';
import { ServicesData } from '@/types/templates.types';
import { FaBriefcase, FaShieldAlt, FaHeartbeat, FaFileContract, FaArrowRight, FaArrowLeft, FaBalanceScale, FaGavel } from 'react-icons/fa';

export const Services = ({ data }: { data?: ServicesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const itemsPerPage = 4; // Show 4 cards at a time on desktop
  const maxIndex = data ? Math.max(0, data.items.length - itemsPerPage) : 0;

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaHeartbeat': return <FaHeartbeat />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaBalanceScale': return <FaBalanceScale />;
      case 'FaGavel': return <FaGavel />;
      default: return <FaBriefcase />;
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const highlight = data.highlightText || 'Legal Practice Areas.';

  return (
    <section className="relative bg-[#08101a] py-12 lg:py-16 text-white overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full xl:w-[30%] h-full bg-cover bg-left max-xl:opacity-15 z-[1] [mask-image:linear-gradient(to_right,black_95%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,black_95%,transparent_100%)] max-xl:after:hidden" 
        style={{ backgroundImage: `url(${data.bgImage})` }}
      ></div>

      <div className="relative z-[2] max-w-[1250px] mx-auto px-5">

        <div className="flex justify-center xl:justify-end mb-[60px]">
          <div className="w-full xl:w-[calc(100%-310px)] text-center xl:text-left xl:pl-0">
            <div className="mb-5">
              <span className="text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">— {data.badge} —</span>
            </div>

            <h2 className="text-[32px] md:text-[44px] font-family-[var(--)] text-white mb-[25px] leading-[1.3] font-bold">
              {data.title.split('\n').map((line, i) => {
                if (line.includes(highlight)) {
                  const parts = line.split(highlight);
                  return (
                    <React.Fragment key={i}>
                      {parts[0]}<span className="text-[#c49250]">{highlight}</span>{parts[1]}
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                );
              })}
            </h2>

            <div className="flex items-center justify-center xl:justify-start gap-[15px] mb-[25px]">
              <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
              <FaBalanceScale className="text-[#c49250] text-[18px]" />
              <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
            </div>

            <p className="text-[#8c97a3] text-[15px] leading-[1.8] max-w-[800px] mx-auto xl:mx-0">{data.description}</p>
          </div>
        </div>

        <div className="relative z-[3] overflow-hidden mb-5 pb-2.5">
          <div
            className="flex gap-[30px] w-max transition-transform duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] max-md:grid max-md:grid-cols-1 max-md:w-full max-md:transform-none max-xl:grid max-xl:grid-cols-2 max-xl:w-full max-xl:transform-none"
            style={{ transform: isClient && window.innerWidth > 1200 ? `translateX(-${currentIndex * 310}px)` : 'none' }}
          >
            {data.items.map((item, index) => {
              return (
                <div key={item.id} className="bg-[#0f1825] border border-white/5 rounded-lg p-[35px_25px] relative overflow-hidden transition-all duration-[400ms] w-full xl:w-[280px] shrink-0 shadow-[0_10px_30px_rgba(0,0,0,0.2)] group hover:border-[#c49250]">
                  <div className="absolute top-5 right-[25px] text-[50px] font-bold text-white/5 font-family-[var(--)] leading-none transition-all duration-300 group-hover:text-white/10">
                    0{index + 1}
                  </div>
                  <div className="w-[70px] h-[70px] border border-[#c49250] rounded-full flex items-center justify-center text-[30px] text-[#c49250] transition-all duration-[400ms] mb-[15px]">
                    {renderIcon(item.icon)}
                  </div>
                  <h3 className="text-[22px] text-white mb-[15px] font-family-[var(--)] font-semibold">{item.title}</h3>

                  <div className="w-0 h-[2px] bg-[#c49250] mb-[15px] transition-all duration-[400ms] group-hover:w-[30px]"></div>

                  <p className="text-[#8c97a3] text-[14px] leading-[1.7] mb-[30px]">{item.description}</p>
                  <a href={item.linkUrl} className="inline-flex items-center gap-2.5 text-[#c49250] text-[14px] font-semibold no-underline transition-all duration-300 hover:gap-[15px] hover:text-white">
                    {item.linkText} <FaArrowRight className="text-[14px]" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-between xl:justify-end mt-[15px] p-0 relative max-md:justify-between">
          <div className="flex gap-3 max-xl:static max-xl:transform-none max-xl:mr-auto xl:absolute xl:left-1/2 xl:-translate-x-1/2">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`w-[30px] h-[3px] border-none cursor-pointer transition-all duration-300${idx === currentIndex ? 'bg-[#c49250]' : 'bg-white/20'}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
          <div className="flex gap-[15px] max-xl:hidden">
            <button className="w-[55px] h-[55px] rounded-full border border-white/20 bg-transparent text-white flex items-center justify-center cursor-pointer transition-all duration-300 text-[18px] hover:bg-[#c49250] hover:border-[#c49250] hover:text-[#051024]" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
            <button className="w-[55px] h-[55px] rounded-full border border-[#c49250] bg-[#c49250] text-[#051024] flex items-center justify-center cursor-pointer transition-all duration-300 text-[18px] hover:bg-[#c49250] hover:border-[#c49250] hover:text-[#051024]" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
