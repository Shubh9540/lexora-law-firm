"use client";
import React from 'react';
import { AboutFirmData } from '@/types/templates.types';
import { MdOutlineBalance } from 'react-icons/md';

export const AboutFirm = ({ data }: { data?: AboutFirmData }) => {
  if (!data) return null;

  return (
    <section className="py-10 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center">
        
        {/* Images Section */}
        <div className="relative flex flex-col gap-5 max-w-[600px] mx-auto lg:max-w-none w-full">
          <div className="rounded-[12px] overflow-hidden w-full h-[200px] sm:h-[280px]">
            <img src={data.image1} alt="About Us" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-5 h-[200px] sm:h-[280px]">
            <div className="rounded-[12px] overflow-hidden flex-1 h-full">
              <img src={data.image2} alt="About Us 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[12px] overflow-hidden flex-1 h-full">
              <img src={data.image3} alt="About Us 3" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Center Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] bg-[#051024] rounded-full border-[5px] border-white flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
            <div className="absolute w-[90%] h-[90%] animate-spin [animation-duration:15s]">
               <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePathAboutFirm" d="M 50, 10 a 40,40 0 1,1 -0.1,0" fill="none" />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePathAboutFirm" startOffset="0%">
                      {data.badgeText}
                    </textPath>
                  </text>
                </svg>
            </div>
            <div className="text-[36px] sm:text-[50px] text-[#c49250] z-[2]">
              <MdOutlineBalance />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div>
          <div className="mb-[15px]">
            <span className="text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase block">
              — {data.badge}
            </span>
          </div>
          <h2 className="text-[32px] sm:text-[42px] text-[#051024] font-bold leading-[1.2] mb-[25px]">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 ? <br /> : <span className="text-[#c49250]">.</span>}
              </React.Fragment>
            ))}
          </h2>
          <div className="flex flex-col gap-[15px]">
            <p className="text-[#6b7280] text-[15px] leading-[1.7] m-0">{data.description1}</p>
            <p className="text-[#6b7280] text-[15px] leading-[1.7] m-0">{data.description2}</p>
            <p className="text-[#6b7280] text-[15px] leading-[1.7] m-0">{data.description3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
