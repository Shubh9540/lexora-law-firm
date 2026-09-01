"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CounterData } from '@/types/templates.types';
import { IoTrophyOutline, IoScaleOutline, IoPeopleOutline, IoRibbonOutline } from 'react-icons/io5';

const AnimatedCounter = ({ endValueStr }: { endValueStr: string }) => {
  const match = endValueStr.match(/^([0-9.]+)(.*)$/);
  const endNum = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : '';
  
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!ref.current || hasAnimated) return;
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setHasAnimated(true);
        let startTimestamp: number | null = null;
        const duration = 2000;
        
        const step = (timestamp: number) => {
          if (!startTimestamp) startTimestamp = timestamp;
          const progress = Math.min((timestamp - startTimestamp) / duration, 1);
          // Easing function for smoother animation (easeOutQuart)
          const easeProgress = 1 - Math.pow(1 - progress, 4);
          setCount(Math.floor(easeProgress * endNum));
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [endNum, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

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
    <section className="py-12 lg:py-16 bg-[#051024] border-t border-white/5">
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
                <h3 className="text-[26px] sm:text-[38px] text-white font-bold leading-none mb-1.5 m-0">
                  <AnimatedCounter endValueStr={stat.number} />
                </h3>
                <p className="text-[#d1d5db] text-[11px] sm:text-[14px] leading-[1.3] sm:leading-normal font-normal m-0">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
