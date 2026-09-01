"use client";
import React from 'react';
import { AboutApproachData } from '@/types/templates.types';
import { FaUserTie, FaChessKnight, FaShieldAlt, FaChartLine, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const AboutApproach = ({ data }: { data?: AboutApproachData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaUserTie': return <FaUserTie />;
      case 'FaChessKnight': return <FaChessKnight />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaChartLine': return <FaChartLine />;
      default: return <FaUserTie />;
    }
  };

  return (
    <section className="py-12 lg:py-16 px-5 bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[4fr_5.5fr] gap-[60px] items-start">
        
        {/* Content Side */}
        <div className="flex flex-col gap-[15px] lg:pr-5 order-2 lg:order-1">
          {/* Tagline */}
          <div className="flex items-center gap-[10px] text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">
            <span className="text-[#c49250] text-[18px]"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          
          {/* Tagline Line */}
          <div className="w-[40px] h-0.5 bg-[#c49250] mb-2.5"></div>
          
          {/* Title */}
          <h2 className="text-[32px] sm:text-[42px] font-bold leading-[1.2] text-[#051024] m-0 mb-[15px]">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'text-[#c49250]' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          
          {/* Description */}
          <p className="text-[#444444] text-[15px] leading-[1.7] mb-[25px]">
            {data.description}
          </p>
          
          {/* Approach List */}
          <div className="flex flex-col gap-[30px] mb-[35px] relative before:content-[''] before:absolute before:left-[25px] before:top-[25px] before:bottom-[25px] before:w-px before:border-l before:border-dashed before:border-[#d1c8ba] before:z-0">
            {data.points.map((point) => (
              <div key={point.id} className="flex items-start gap-[25px] relative z-[1]">
                <div className="w-[50px] h-[50px] rounded-full bg-[#fbf8f2] flex items-center justify-center text-[#c49250] text-[20px] flex-shrink-0 border-2 border-white">
                  {renderIcon(point.icon)}
                </div>
                <div>
                  <h3 className="text-[18px] text-[#051024] m-0 mb-[5px] font-semibold">{point.title}</h3>
                  <p className="text-[14px] text-[#555555] leading-[1.6] m-0">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
        
        {/* Image Side */}
        <div className="relative z-[1] max-w-[600px] mx-auto lg:max-w-none mt-[50px] lg:mt-0 order-1 lg:order-2 w-full">
          <div className="rounded-[12px] overflow-hidden w-[92%] ml-auto relative z-[2]">
            <img src={data.image1} alt="Our Approach" className="w-full h-full object-cover block" />
          </div>
          <div className="absolute -bottom-[40px] -left-[20px] w-[55%] rounded-[12px] overflow-hidden border-[8px] border-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] z-[3]">
            <img src={data.image2} alt="Legal Approach" className="w-full h-auto block" />
          </div>
          <div className="absolute -bottom-[20px] -right-[20px] w-[200px] h-[200px] z-0" style={{ backgroundImage: 'radial-gradient(#d1c8ba 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
      </div>
    </section>
  );
};
