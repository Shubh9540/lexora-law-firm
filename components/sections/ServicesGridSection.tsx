"use client";
import React from 'react';
import Link from 'next/link';
import { ServicesData, GlobalUIData } from '@/types/templates.types';
import { FaArrowRight } from 'react-icons/fa6';
import { 
  FaBriefcase, FaBalanceScale, FaShieldAlt, 
  FaGavel, FaFileContract, FaBuilding, FaUsers, FaFileSignature, FaRegComments
} from 'react-icons/fa';

export const ServicesGridSection = ({ data, globalUI }: { data?: ServicesData; globalUI?: GlobalUIData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaBalanceScale': return <FaBalanceScale />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaGavel': return <FaGavel />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaUsers': return <FaUsers />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaFileSignature': return <FaFileSignature />;
      default: return <FaBriefcase />;
    }
  };

  return (
    <section className="py-5 px-5 bg-[#fbf8f2]">
      <div className="text-center max-w-[700px] mx-auto mb-8">
        <div className="flex items-center justify-center gap-[15px] text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
          <span className="w-[30px] h-[2px] bg-[#c49250]"></span>
          <span>{data.badge || globalUI?.servicesBadge || 'OUR SERVICES'}</span>
          <span className="w-[30px] h-[2px] bg-[#c49250]"></span>
        </div>
        <h2 className="text-[42px] font-family-[var(--)] text-[#051024] m-0 mb-[15px] font-bold">
          {globalUI?.servicesGridTitle || 'How We Can Help'}
        </h2>
        <p className="text-[#666666] text-[16px] mb-[25px]">
          {globalUI?.servicesGridSubtitle || 'Trusted legal guidance tailored to your unique needs.'}
        </p>
        <div className="flex items-center justify-center gap-[15px]">
          <span className="w-[40px] h-px bg-[#c49250]"></span>
          <span className="text-[#c49250] text-[32px] flex"><FaBalanceScale /></span>
          <span className="w-[40px] h-px bg-[#c49250]"></span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mb-[60px]">
        {data.items.map((item, index) => (
          <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.04)] transition-all duration-300 flex flex-row h-[240px] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] hover:-translate-y-[5px]">
            <div className="relative w-[45%] h-full">
              <img src={item.image || '/about/habout1.jpg'} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute top-[15px] left-[15px] w-[38px] h-[44px] bg-[#c49250] [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center">
                <div className="w-[34px] h-[40px] bg-[#051024] text-white [clip-path:polygon(50%_0%,100%_25%,100%_75%,50%_100%,0%_75%,0%_25%)] flex items-center justify-center font-medium text-[14px]">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
            <div className="w-[55%] p-[25px_20px] flex flex-col justify-center">
              <div className="text-[#c49250] text-[24px] w-[45px] h-[45px] border border-[#c49250]/50 rounded-full flex items-center justify-center mb-3">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-[18px] font-family-[var(--)] text-[#051024] m-0 mb-2.5 font-bold">
                {item.title}
              </h3>
              <p className="text-[#666666] text-[12px] leading-[1.6] mb-auto">
                {item.description}
              </p>
              <Link href={item.linkUrl} className="inline-flex items-center gap-2 text-[#c49250] font-semibold text-[13px] no-underline transition-colors duration-300 mt-[15px] hover:text-[#051024]">
                {item.linkText || globalUI?.servicesGridLearnMore || 'Learn More'} <FaArrowRight className="text-[12px]" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[1200px] mx-auto bg-white rounded-lg flex flex-col md:flex-row justify-between items-center shadow-[0_5px_20px_rgba(0,0,0,0.03)] overflow-hidden md:pr-[30px] max-md:pb-[30px] max-md:text-center max-md:gap-5">
        <div className="w-full md:w-[100px] h-[80px] md:h-[100px] bg-[#051024] text-[#c49250] flex items-center justify-center text-[40px] shrink-0">
          <FaRegComments />
        </div>
        <div className="grow px-5 md:px-[30px]">
          <h3 className="text-[20px] font-family-[var(--)] text-[#051024] m-0 mb-1 font-semibold">
            {globalUI?.servicesGridBannerTitle || 'Don\'t See Your Legal Need?'}
          </h3>
          <p className="text-[#666666] text-[14px] m-0">
            {globalUI?.servicesGridBannerDesc || 'We handle a wide range of legal matters. Contact us to discuss how we can help.'}
          </p>
        </div>
        <Link href={globalUI?.servicesGridBannerBtnUrl || '#'} className="bg-[#051024] text-white p-[12px_25px] rounded-[4px] text-[13px] font-semibold no-underline inline-flex items-center gap-2.5 transition-colors duration-300 shrink-0 hover:bg-[#c49250] !text-white">
          {globalUI?.servicesGridBannerBtnText || 'CONTACT US'} <FaArrowRight />
        </Link>
      </div>

    </section>
  );
};
