"use client";
import React from 'react';
import { AboutMissionData } from '@/types/templates.types';
import { FaBullseye, FaEye, FaLandmark } from 'react-icons/fa';

import { MdOutlineBalance } from 'react-icons/md';

export const AboutMission = ({ data }: { data?: AboutMissionData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBullseye': return <FaBullseye />;
      case 'FaEye': return <FaEye />;
      case 'FaLandmark': return <FaLandmark />;
      default: return <FaBullseye />;
    }
  };

  return (
    <section className="py-[60px] px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-[50px]">
          <div className="flex items-center justify-center gap-[15px] text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
            <span className="w-[40px] h-px bg-[#c49250]"></span>
            <span>{data.badge}</span>
            <span className="w-[40px] h-px bg-[#c49250]"></span>
          </div>
          <h2 className="text-[42px] text-[#051024] font-bold m-0 mb-[15px]">
            {(() => {
              const firstSpace = data.title.indexOf(' ');
              const titlePart1 = firstSpace !== -1 ? data.title.substring(0, firstSpace) : data.title;
              const titlePart2 = firstSpace !== -1 ? data.title.substring(firstSpace + 1) : '';
              return (
                <>
                  {titlePart1} {titlePart2 && <span className="text-[#c49250]">{titlePart2}</span>}
                </>
              );
            })()}
          </h2>
          <div className="flex justify-center items-center mb-5 relative before:absolute before:content-[''] before:top-1/2 before:w-[40px] before:h-px before:bg-[#c49250] before:opacity-50 before:-translate-x-[70px] after:absolute after:content-[''] after:top-1/2 after:w-[40px] after:h-px after:bg-[#c49250] after:opacity-50 after:translate-x-[70px]">
            <MdOutlineBalance className="text-[#c49250] text-[24px]" />
          </div>
          <p className="text-[#444444] text-[15px] leading-[1.7] max-w-[600px] mx-auto m-0">
            {data.description}
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-[25px]">
          {data.items.map((item, index) => {
            const isImageLeft = index % 2 === 0;
            
            return (
              <div key={item.id} className="flex flex-col md:flex-row bg-[#f8f6f2] rounded-lg overflow-hidden h-auto md:h-[250px]">
                {isImageLeft ? (
                  <>
                    <div className="w-full md:flex-1 h-[250px] md:h-full">
                       {item.bgImage && <img src={item.bgImage} alt={item.title} className="w-full h-full object-cover block" />}
                    </div>
                    <div className="w-full md:flex-1 p-[40px] flex items-start gap-[25px]">
                      <div className="w-[100px] h-[100px] rounded-full bg-[#f1ede3] flex items-center justify-center text-[#c49250] text-[45px] flex-shrink-0">
                        {renderIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="text-[28px] text-[#051024] font-semibold m-0 mb-5 relative pb-[15px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#c49250]">
                          {item.title}
                        </h3>
                        <p className="text-[14px] text-[#444444] leading-[1.7] m-0">{item.text}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-full md:flex-1 p-[40px] flex items-start gap-[25px]">
                      <div className="w-[100px] h-[100px] rounded-full bg-[#f1ede3] flex items-center justify-center text-[#c49250] text-[45px] flex-shrink-0">
                        {renderIcon(item.icon)}
                      </div>
                      <div>
                        <h3 className="text-[28px] text-[#051024] font-semibold m-0 mb-5 relative pb-[15px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-[50px] after:h-[2px] after:bg-[#c49250]">
                          {item.title}
                        </h3>
                        <p className="text-[14px] text-[#444444] leading-[1.7] m-0">{item.text}</p>
                      </div>
                    </div>
                    <div className="w-full md:flex-1 h-[250px] md:h-full">
                       {item.bgImage && <img src={item.bgImage} alt={item.title} className="w-full h-full object-cover block" />}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
