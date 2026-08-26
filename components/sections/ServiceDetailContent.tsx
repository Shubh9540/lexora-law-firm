"use client";
import React from 'react';
import Link from 'next/link';
import { ServiceItem, LexoraTemplateData } from '@/types/templates.types';
import { 
  FaShieldAlt, FaHeartbeat, FaChartLine, FaPhoneAlt, FaArrowRight, FaBalanceScale 
} from 'react-icons/fa';
import { 
  FaBriefcase, FaFileContract, FaGavel, FaHandshake, FaHeadset, FaUsers, FaCar, FaBuilding, FaFileSignature, FaSearch
} from 'react-icons/fa';

export const ServiceDetailContent = ({ currentService, templateData }: { currentService: ServiceItem, templateData?: LexoraTemplateData }) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const commonData = templateData?.common;

  const globalUI = sectionData?.globalUI?.variants?.LexoraGlobalUI1;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaGavel': return <FaGavel />;
      case 'FaHandshake': return <FaHandshake />;
      case 'FaHeadset': return <FaHeadset />;
      case 'FaUsers': return <FaUsers />;
      case 'FaCar': return <FaCar />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaFileSignature': return <FaFileSignature />;
      case 'FaSearch': return <FaSearch />;
      case 'FaChartLine': return <FaChartLine />;
      default: return <FaBriefcase />;
    }
  };

  const defaultFeatures = globalUI?.defaultServiceFeatures || [];

  return (
    <div className="flex flex-col gap-[50px]">
      
      {/* Hero Image Section */}
      <div className="relative rounded-[12px] overflow-hidden min-h-[450px] flex items-stretch">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <img className="w-full h-full object-cover object-right" src={currentService.image || '/about/habout2.png'} alt={currentService.title} />
        </div>
        <div className="relative z-[1] bg-[#051024] text-white w-full md:w-[80%] lg:w-[65%] p-[40px_30px] md:p-[50px_80px_50px_40px] flex flex-col justify-center rounded-[12px] md:rounded-none md:[clip-path:polygon(0_0,100%_0,82%_100%,0%_100%)]">
          <div className="flex items-center gap-[15px] text-[#c49250] text-[12px] font-semibold tracking-[2px] uppercase mb-5">
            <span className="w-[40px] h-[40px] border border-[#c49250] rounded-full flex items-center justify-center text-[18px]">
              <FaBriefcase />
            </span>
            <span>{globalUI?.servicesBadge || 'OUR SERVICES'}</span>
          </div>
          <h1 className="text-[46px] font-bold m-0 mb-[15px]">{currentService.title}</h1>
          <p className="text-[#d1d5db] text-[15px] leading-[1.6] mb-0 max-w-[90%]">{currentService.description}</p>
          <div className="w-[45px] h-[2px] bg-[#c49250] m-[25px_0_35px_0]"></div>
          
          {defaultFeatures.length > 0 && (
            <div className="flex items-start gap-[25px]">
              {defaultFeatures.map((feat, index) => (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="text-[#c49250] text-[28px]">{renderIcon(feat.icon)}</div>
                    <span 
                      className="text-[12px] font-medium text-[#e5e7eb] leading-[1.4]"
                      dangerouslySetInnerHTML={{ __html: feat.title }}
                    ></span>
                  </div>
                  {index < defaultFeatures.length - 1 && (
                    <div className="w-px h-[40px] bg-white/15 mt-2.5"></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Overview Section */}
      <div>
        <div className="text-[#c49250] text-[14px] font-semibold mb-2.5">Overview</div>
        <h2 className="text-[32px] text-[#051024] m-0 mb-5 font-bold">
          {currentService.overviewTitle || `Strategic Legal Support for ${currentService.title}`}
        </h2>
        <div className="[&>p]:text-[#555555] [&>p]:text-[15px] [&>p]:leading-[1.7] [&>p]:mb-5">
          {currentService.overviewText ? (
            currentService.overviewText.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{globalUI?.defaultOverviewFallback || 'We provide strategic legal solutions to help businesses start, grow, and succeed with confidence.'}</p>
          )}
        </div>
      </div>

      {/* Areas We Cover */}
      {currentService.areasCovered && currentService.areasCovered.length > 0 && (
        <div className="bg-[#fbfbfb] rounded-[12px] p-[30px_20px] md:p-[40px_50px]">
          <h2 className="text-[24px] text-[#051024] m-0 mb-2.5 font-bold">Areas We Cover</h2>
          <div className="w-[45px] h-[2px] bg-[#c49250] mb-[35px]"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {currentService.areasCovered.map((area) => (
              <div 
                key={area.id} 
                className="flex gap-[15px] p-[30px_25px] bg-transparent transition-all duration-300 border-b border-[#ebebeb] md:border-r md:[&:nth-child(3n)]:border-r-0 md:[&:nth-last-child(-n+3)]:border-b-0 max-md:[&:last-child]:border-b-0"
              >
                <div className="text-[#c49250] text-[26px] mt-0.5 shrink-0">
                  {renderIcon(area.icon)}
                </div>
                <div>
                  <h3 className="text-[15px] text-[#051024] m-0 mb-2.5 font-bold">{area.title}</h3>
                  <p className="text-[#666666] text-[13px] leading-[1.6] m-0">{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Banner */}
      {currentService.contactBanner && (
        <div className="relative bg-[#051024] rounded-[12px] overflow-hidden mt-5">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-[url('/banner/ban3.jpg')] bg-cover bg-center opacity-15 [mask-image:linear-gradient(to_left,black_40%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_40%,transparent_100%)]"></div>
          <div className="relative z-[2] flex flex-col lg:flex-row items-stretch p-[40px] md:p-[50px_40px] gap-[30px] lg:gap-0">
            <div className="flex-1 flex flex-col items-start lg:max-w-[55%] lg:pr-[40px] w-full">
              <div className="text-[#c49250] text-[32px] mb-[25px]"><FaBalanceScale /></div>
              <h2 className="text-[30px] m-0 mb-[15px] font-bold text-white leading-[1.3]">{currentService.contactBanner.title}</h2>
              <p className="text-[#d1d5db] text-[15px] leading-[1.6] mb-[30px]">{currentService.contactBanner.description}</p>
              <Link href={currentService.contactBanner.buttonUrl} className="inline-flex items-center gap-2.5 bg-[#c49250] text-white p-[15px_30px] rounded-[4px] text-[14px] font-semibold no-underline uppercase transition-all duration-300 hover:bg-[#e0b467]">
                {currentService.contactBanner.buttonText} <FaArrowRight />
              </Link>
            </div>
            
            <div className="w-full h-px lg:w-px lg:h-auto bg-white/15 m-0"></div>
            
            <div className="flex-1 flex items-center gap-5 lg:pl-[50px] justify-start">
              <div className="w-[65px] h-[65px] bg-[#c49250] rounded-full flex items-center justify-center text-white text-[26px] shrink-0">
                <FaPhoneAlt />
              </div>
              <div className="flex flex-col gap-[5px]">
                <span className="text-[14px] text-white font-medium">{globalUI?.callUsAnytimeText || 'Call Us Anytime'}</span>
                <span className="text-[24px] font-bold text-white whitespace-nowrap">{currentService.contactBanner.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
