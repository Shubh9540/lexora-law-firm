import React from 'react';
import { CounterData } from '@/types/templates.types';
import { IoTrophyOutline, IoScaleOutline, IoPeopleOutline, IoRibbonOutline } from 'react-icons/io5';

export const Counter = ({ data }: { data?: CounterData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'IoTrophyOutline': return <IoTrophyOutline />;
      case 'IoScaleOutline': return <IoScaleOutline />;
      case 'IoPeopleOutline': return <IoPeopleOutline />;
      case 'IoRibbonOutline': return <IoRibbonOutline />;
      default: return <IoPeopleOutline />;
    }
  };

  return (
    <section className="py-5 bg-[#051024] border-t border-white/5">
      <div className="max-w-[1250px] mx-auto px-5">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-0 sm:gap-y-10 gap-y-[30px]">
          {data.stats.map((stat, i) => (
            <div 
              key={stat.id} 
              className={`flex items-center justify-center gap-3 sm:gap-5 px-2.5 sm:px-[15px] group border-white/10 ${
                i % 2 === 0 ? 'border-r' : 'border-r-0 lg:border-r'
              } ${i === 3 ? 'lg:border-r-0' : ''} ${
                i > 1 ? 'border-t pt-[30px] sm:pt-10 lg:border-t-0 lg:pt-2.5' : 'pt-0 lg:pt-2.5'
              } lg:pb-2.5`}
            >
              <div className="text-[38px] sm:text-[55px] text-white flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:text-[#c49250]">
                {renderIcon(stat.icon)}
              </div>
              <div className="flex flex-col items-start">
                <h3 className="text-[26px] sm:text-[38px] text-white font-bold leading-none mb-1.5 m-0">{stat.number}</h3>
                <p className="text-[#d1d5db] text-[11px] sm:text-[14px] leading-[1.3] sm:leading-normal font-normal m-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
