"use client";
import React from 'react';
import { AboutFirmData } from '@/types/templates.types';
import { MdOutlineBalance } from 'react-icons/md';

export const AboutFirm = ({ data }: { data?: AboutFirmData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Images Section */}
        <div className="relative flex flex-col gap-5 max-w-xl mx-auto lg:max-w-none w-full">
          <div className="rounded-xl overflow-hidden w-full h-52 sm:h-72">
            <img src={data.image1} alt="About Us" className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-5 h-52 sm:h-72">
            <div className="rounded-xl overflow-hidden flex-1 h-full">
              <img src={data.image2} alt="About Us 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden flex-1 h-full">
              <img src={data.image3} alt="About Us 3" className="w-full h-full object-cover" />
            </div>
          </div>
          
          {/* Center Badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-40 sm:h-40 bg-[#051024] rounded-full border-4 border-white flex items-center justify-center shadow-lg">
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
            <div className="text-4xl sm:text-5xl text-[#c49250] z-[2]">
              <MdOutlineBalance />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <div className="mb-4">
            <span className="text-[#c49250] text-sm font-semibold tracking-widest uppercase block">
              — {data.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#051024] font-bold leading-tight mb-6">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 ? <br /> : <span className="text-[#c49250]">.</span>}
              </React.Fragment>
            ))}
          </h2>
          <div className="flex flex-col gap-4">
            <p className="text-gray-500 text-base leading-relaxed m-0">{data.description1}</p>
            <p className="text-gray-500 text-base leading-relaxed m-0">{data.description2}</p>
            <p className="text-gray-500 text-base leading-relaxed m-0">{data.description3}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
