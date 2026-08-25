"use client";
import React from 'react';
import { NewsMediaData } from '@/types/templates.types';

export const NewsMediaGrid = ({ data }: { data?: NewsMediaData }) => {
  if (!data || !data.items) return null;

  return (
    <section className="py-8 lg:py-12 bg-[#fafafa]">
      <div className="max-w-[1250px] mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[20px] md:gap-[30px]">
          {data.items.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="bg-white rounded-lg border border-[#f0f0f0] shadow-[0_5px_15px_rgba(0,0,0,0.03)] p-[20px] md:p-[30px] flex items-center justify-center transition-all duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 aspect-[3/2]"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="max-w-[80%] max-h-[80%] object-contain opacity-80 transition-opacity duration-300 hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
