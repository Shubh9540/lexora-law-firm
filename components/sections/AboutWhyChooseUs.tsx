"use client";
import React from 'react';
import { AboutWhyChooseUsData } from '@/types/templates.types';
import { FaRegUser, FaHandshake, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const AboutWhyChooseUs = ({ data }: { data?: AboutWhyChooseUsData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaAward': return <FaRegUser />;
      case 'FaUserShield': return <FaHandshake />;
      default: return <FaRegUser />;
    }
  };

  return (
    <section 
      className="bg-[#0a1828] bg-cover bg-center bg-blend-overlay py-5 px-5 text-white relative"
      style={{ backgroundImage: `linear-gradient(rgba(10, 24, 40, 0.95), rgba(10, 24, 40, 0.95)), url('${data.image}')` }}
    >
      <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        
        {/* Content Side */}
        <div className="flex flex-col gap-5 justify-center">
          
          <div className="flex items-center gap-2.5 text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">
            <span className="text-[16px]"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          
          <h2 className="text-[36px] md:text-[46px] font-bold leading-[1.2] m-0 text-white">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'text-[#c49250]' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          
          <p className="text-white/80 text-[16px] leading-[1.7] mb-5 m-0">{data.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-[30px]">
            {data.points.map((point) => (
              <div key={point.id} className="bg-transparent border border-white/10 rounded-lg py-[30px] px-[25px] flex flex-col gap-5 transition-colors duration-300 hover:border-white/30">
                <div className="flex justify-start">
                  <div className="w-[50px] h-[50px] rounded-full border border-[#c49250] flex items-center justify-center text-[#c49250] text-[22px]">
                    {renderIcon(point.icon)}
                  </div>
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold m-0 mb-3 text-white">{point.title}</h3>
                  <p className="text-[14px] text-white/70 leading-[1.6] m-0">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href={data.buttonUrl} className="inline-flex items-center gap-2.5 bg-[#c49250] text-[#051024] py-3 px-[30px] rounded font-bold text-[14px] uppercase w-max transition-colors duration-300 hover:bg-[#e0b467]">
            {data.buttonText}
            <span className="text-[14px] text-[#051024]"><FaArrowRight /></span>
          </a>
        </div>
        
        {/* Image Side */}
        <div className="flex">
          <div className="rounded-[12px] overflow-hidden w-full h-full min-h-[400px] lg:min-h-[500px]">
            <img src={data.image} alt="Why Choose Us" className="w-full h-full object-cover block" />
          </div>
        </div>
        
      </div>
    </section>
  );
};
