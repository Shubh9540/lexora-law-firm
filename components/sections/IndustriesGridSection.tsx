import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustriesData } from '@/types/templates.types';

interface IndustriesGridSectionProps {
  data: IndustriesData;
}

export const IndustriesGridSection = ({ data }: IndustriesGridSectionProps) => {
  return (
    <section className="py-20 px-5 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-[60px] max-w-[800px] mx-auto">
          <div className="flex items-center justify-center mb-[15px]">
            <FaIcons.FaBalanceScale className="text-[#c49250] text-[32px]" />
          </div>
          <div className="flex items-center justify-center gap-5 mb-5">
            <span className="h-px w-[40px] bg-[#c49250]"></span>
            <h2 className="text-[42px] text-[#051024] font-bold m-0">{data.title}</h2>
            <span className="h-px w-[40px] bg-[#c49250]"></span>
          </div>
          <p className="text-[#6b7280] text-[16px] leading-[1.6] m-0">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
          {data.items.map((item) => {
            const Icon = (FaIcons as any)[item.icon] || FaIcons.FaBalanceScale;
            return (
              <div key={item.id} className="rounded-[6px] overflow-hidden shadow-[0_5px_25px_rgba(0,0,0,0.06)] bg-white flex flex-col border border-[#f0f0f0] transition-transform duration-300 hover:-translate-y-[5px]">
                <div 
                  className="h-[180px] bg-cover bg-center" 
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                <div className="pt-[45px] pb-[30px] px-[25px] text-center relative flex-1 flex flex-col">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] bg-[#051024] border-2 border-[#c49250] rounded-full flex items-center justify-center z-[2]">
                    <Icon className="text-[#c49250] text-[20px]" />
                  </div>
                  <h3 className="text-[#051024] text-[20px] font-bold mb-[15px] m-0">{item.title}</h3>
                  <p className="text-[#6b7280] text-[14px] leading-[1.6] flex-1 mb-[25px] m-0">{item.shortDescription}</p>
                  <Link href={`/industries/${item.slug}`} className="text-[#c49250] font-semibold text-[14px] no-underline transition-colors duration-300 hover:text-[#051024]">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
