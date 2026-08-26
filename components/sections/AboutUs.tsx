"use client";
import React, { useState } from 'react';
import { AboutUsData } from '@/types/templates.types';
import { FaRegFileAlt, FaSearch, FaShieldAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { MdOutlineBalance } from 'react-icons/md';

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  const [activeTab, setActiveTab] = useState(data?.tabs?.[0]?.id || 'mission');
  
  if (!data) return null;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'FaRegFileAlt': return <FaRegFileAlt />;
      case 'FaSearch': return <FaSearch />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaUserTie': return <FaUserTie />;
      default: return <FaRegFileAlt />;
    }
  };

  const activeContent = data.tabs?.find(t => t.id === activeTab)?.content;

  return (
    <section className="py-5 px-5 bg-white">
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
                  <path id="circlePath" d="M 50, 10 a 40,40 0 1,1 -0.1,0" fill="none" />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="0%">
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
          <p className="text-[#6b7280] text-[15px] leading-[1.7] mb-[30px] m-0">
            {data.description}
          </p>
          
          {/* Tabs */}
          <div className="mb-[30px]">
            <div className="flex bg-[#f3f4f6] rounded-[4px] overflow-hidden mb-5">
              {data.tabs?.map(tab => (
                <button 
                  key={tab.id}
                  className={`flex-1 py-[15px] px-[10px] border-none font-semibold text-[14px] cursor-pointer transition-all duration-300 border-b-2 ${
                    activeTab === tab.id 
                      ? 'bg-[#051024] text-white border-[#c49250]' 
                      : 'bg-transparent text-[#051024] border-transparent hover:bg-[#e5e7eb]'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div>
              <p className="text-[15px] leading-[1.7] text-[#6b7280] m-0">{activeContent}</p>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-[35px]">
            {data.features?.map(feature => (
              <div className="flex items-center gap-3" key={feature.id}>
                <div className="w-[24px] h-[24px] flex items-center justify-center text-[#c49250] text-[16px]">
                  {renderIcon(feature.icon)}
                </div>
                <span className="text-[14px] font-medium text-[#4a4a4a]">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Button */}
          <a href={data.buttonUrl} className="inline-flex items-center gap-[15px] bg-[#051024] text-white py-3 pl-[25px] pr-3 rounded-[4px] text-[12px] font-semibold tracking-[1px] transition-all duration-300 hover:bg-[#c49250]">
            {data.buttonText}
            <span className="text-[#051024] bg-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
