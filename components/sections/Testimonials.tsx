import React from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  // Split items into two rows for the double marquee effect
  const half = Math.ceil(data.items.length / 2);
  const topRow = data.items.slice(0, half);
  const bottomRow = data.items.slice(half);

  // Helper to render a single card
  const renderCard = (item: any, index: number, prefix: string) => (
    <div key={`${prefix}-${item.id}-${index}`} className="bg-[#f3f4f6] rounded-xl p-[25px] md:p-10 w-[350px] md:w-[500px] shrink-0 flex flex-col gap-5 relative overflow-hidden transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:bg-white border border-transparent hover:border-[#e5e7eb] group">
      <div className="flex justify-between items-start relative z-10">
        <div className="flex items-center gap-[15px]">
          <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full overflow-hidden shrink-0">
            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="text-[20px] text-[#051024] font-bold mb-0.5 font-family-[var(--)]">{item.name}</h4>
            <p className="text-[13px] text-[#c49250] font-medium">{item.role}</p>
          </div>
        </div>
        <div className="flex gap-1 pt-1">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={`text-[14px]${i < item.rating ? 'text-[#c49250]' : 'text-[#d1d5db]'}`} />
          ))}
        </div>
      </div>
      <div className="relative grow z-10">
        <p className="text-[#6b7280] text-[14px] leading-[1.8]">{item.text}</p>
        <FaQuoteRight className="absolute -bottom-5 right-0 text-[60px] text-black/5 z-0" />
      </div>
    </div>
  );

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-[1250px] mx-auto px-5">
        <div className="text-center mb-[60px]">
          <div className="flex items-center justify-center text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
            <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
            {data.badge}
            <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
          </div>
          <h2 className="text-[32px] md:text-[42px] text-[#051024] font-family-[var(--)] font-bold leading-[1.2] m-0">
            {data.title.split('\\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-[30px] w-full">
        {/* Top Track (Moving Right) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-[30px] w-max animate-scroll-right hover:[animation-play-state:paused]">
            {/* Duplicate content to create seamless loop */}
            {[...topRow, ...topRow].map((item, idx) => renderCard(item, idx, 'top'))}
          </div>
        </div>
        
        {/* Bottom Track (Moving Left) */}
        <div className="flex w-full overflow-hidden">
          <div className="flex gap-[30px] w-max animate-scroll-left hover:[animation-play-state:paused]">
            {/* Duplicate content to create seamless loop */}
            {[...bottomRow, ...bottomRow].map((item, idx) => renderCard(item, idx, 'bottom'))}
          </div>
        </div>
      </div>
    </section>
  );
};
