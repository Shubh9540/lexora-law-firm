import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustryItem, LexoraTemplateData } from '@/types/templates.types';

interface IndustryDetailContentProps {
  data: IndustryItem;
  templateData: LexoraTemplateData;
}

export const IndustryDetailContent = ({ data, templateData }: IndustryDetailContentProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;

  return (
    <section className="py-12 lg:py-16 px-5 bg-white">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row gap-[50px] items-center mb-8">
          <div className="flex-1">
            <div className="flex items-center gap-2.5 text-[#c49250] font-semibold text-[13px] tracking-[2px] uppercase mb-5">
              <FaIcons.FaBalanceScale className="text-[20px]" />
              <span>{sectionData?.industries?.variants?.LexoraIndustries1?.badge || 'INDUSTRIES WE SERVE'}</span>
            </div>
            <h1 className="text-[36px] md:text-[48px] text-[#051024] font-bold m-0 mb-[15px]">{data.title}</h1>
            <h3 className="text-[#c49250] text-[22px] font-medium m-0 mb-5">{data.subtitle}</h3>
            <div className="w-[40px] h-[2px] bg-[#c49250] mb-[25px]"></div>
            <p className="text-[#6b7280] text-[16px] leading-[1.6] m-0">{data.introText}</p>
          </div>
          <div className="flex-1 w-full">
            <div 
              className="w-full h-[300px] md:h-[350px] bg-cover bg-center rounded-[12px]" 
              style={{ backgroundImage: `url('${data.image}')` }}
            ></div>
          </div>
        </div>

        {/* Content Section Split */}
        <div className="flex flex-col lg:flex-row gap-[60px]">
          
          {/* Left Main Content */}
          <div className="lg:flex-[0_0_62%]">
            <h2 className="text-[28px] text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-[30px] inline-block">
              Overview
            </h2>
            
            <div className="w-full">
              {data.overviewImage && (
                <div 
                  className="w-full lg:w-[250px] h-[250px] lg:float-right bg-cover bg-center rounded-lg mb-5 lg:ml-[30px] lg:mb-[20px]" 
                  style={{ backgroundImage: `url('${data.overviewImage}')` }}
                ></div>
              )}
              <div 
                className="[&>p]:text-[#4a4a4a] [&>p]:text-[16px] [&>p]:leading-[1.7] [&>p]:mb-5" 
                dangerouslySetInnerHTML={{ __html: data.overviewHtml }}
              ></div>
              <div className="clear-both"></div>
            </div>

            {data.services && data.services.length > 0 && (
              <>
                <h2 className="text-[28px] text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-[30px] mt-[50px] inline-block">
                  Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-[30px]">
                  {data.services.map((srv) => {
                    const SrvIcon = (FaIcons as any)[srv.icon] || FaIcons.FaBalanceScale;
                    return (
                      <div key={srv.id} className="flex gap-[15px]">
                        <div className="text-[#c49250] text-[28px] mt-1.5">
                          <SrvIcon />
                        </div>
                        <div>
                          <h4 className="text-[#051024] text-[18px] font-bold m-0 mb-2.5">{srv.title}</h4>
                          <p className="text-[#6b7280] text-[14px] leading-[1.6] m-0">{srv.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="flex-1">
            
            {data.approach && data.approach.length > 0 && (
              <>
                <h2 className="text-[28px] text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-[30px] inline-block">
                  Our Approach
                </h2>
                <div className="flex flex-col gap-[30px]">
                  {data.approach.map((app) => {
                    const AppIcon = (FaIcons as any)[app.icon] || FaIcons.FaBalanceScale;
                    return (
                      <div key={app.id} className="flex gap-5 items-start">
                        <div className="w-[45px] h-[45px] border border-[#c49250] rounded-full flex items-center justify-center text-[#c49250] text-[18px] shrink-0">
                          <AppIcon />
                        </div>
                        <div>
                          <h4 className="text-[#051024] text-[16px] font-bold m-0 mb-2">{app.title}</h4>
                          <p className="text-[#6b7280] text-[14px] leading-[1.6] m-0">{app.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {data.matters && data.matters.length > 0 && (
              <>
                <h2 className="text-[28px] text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-[30px] mt-[50px] inline-block">
                  Representative Matters
                </h2>
                <div className="bg-[#fcfaf6] p-[35px_30px] rounded-lg">
                  <ul className="list-none p-0 m-0 mb-[25px]">
                    {data.matters.map((matter, idx) => (
                      <li 
                        key={idx} 
                        className="relative pl-5 mb-[15px] text-[#4a4a4a] text-[14.5px] leading-[1.6] before:content-['•'] before:text-[#c49250] before:text-[20px] before:absolute before:left-0 before:-top-[2px]"
                      >
                        {matter}
                      </li>
                    ))}
                  </ul>
                  <Link href="/case-studies" className="text-[#c49250] font-semibold text-[14px] no-underline transition-colors duration-300 hover:text-[#051024]">
                    Explore All Case Studies &rarr;
                  </Link>
                </div>
              </>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
