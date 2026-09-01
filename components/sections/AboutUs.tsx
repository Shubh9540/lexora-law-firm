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
    <section className="py-12 lg:py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Images Section */}
        <div className="lg:col-span-5 relative flex flex-col gap-5 max-w-xl mx-auto lg:max-w-none w-full">
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
                  <path id="circlePath" d="M 50, 10 a 40,40 0 1,1 -0.1,0" fill="none" />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="0%">
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
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-4">
            <span className="text-[#c49250] text-sm font-semibold tracking-widest uppercase block">
              — {data.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl text-[#051024] font-bold leading-tight mb-4">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 ? <br /> : <span className="text-[#c49250]">.</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6 m-0">
            {data.description}
          </p>
          
          {/* Tabs */}
          <div className="mb-6">
            <div className="flex bg-gray-100 rounded overflow-hidden mb-5">
              {data.tabs?.map(tab => (
                <button 
                  key={tab.id}
                  className={`flex-1 py-3 px-2 border-none font-semibold text-sm cursor-pointer transition-all duration-300 border-b-2 ${
                    activeTab === tab.id 
                      ? 'bg-[#051024] text-white border-[#c49250]' 
                      : 'bg-transparent text-[#051024] border-transparent hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div>
              <p className="text-sm leading-relaxed text-gray-500 m-0">{activeContent}</p>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {data.features?.map(feature => (
              <div className="flex items-center gap-3" key={feature.id}>
                <div className="w-5 h-5 flex items-center justify-center text-[#c49250] text-base">
                  {renderIcon(feature.icon)}
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.text}</span>
              </div>
            ))}
          </div>
          
          {/* Button */}
          <div>
            <a href={data.buttonUrl} className="inline-flex items-center gap-3 bg-[#051024] text-white py-3.5 px-8 rounded text-xs font-semibold tracking-widest transition-all duration-300 hover:bg-[#c49250]">
              {data.buttonText}
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
