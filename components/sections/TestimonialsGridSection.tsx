"use client";

import React, { useState } from 'react';
import { TestimonialsData } from '@/types/templates.types';
import { FaStar, FaQuoteLeft, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { FaScaleBalanced } from 'react-icons/fa6';

export const TestimonialsGridSection = ({ data }: { data?: TestimonialsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  if (!data) return null;

  const itemsPerPage = 6;
  const totalPages = Math.ceil(data.items.length / itemsPerPage);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.items.slice(startIndex, startIndex + itemsPerPage);

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <section className="py-12 lg:py-20 bg-[#fdfaf6]">
      <div className="max-w-[1250px] mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-[800px] mx-auto mb-12 lg:mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-[#c49250]"></div>
            <div className="flex items-center gap-2 text-[#c49250] font-bold tracking-widest text-sm uppercase">
              <FaScaleBalanced className="text-lg" />
              <span>{data.badge}</span>
            </div>
            <div className="h-[1px] w-12 bg-[#c49250]"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#051024] font-family-[var(--)] mb-6">
            {data.title}
          </h2>
          
          {data.subtitle && (
            <p className="text-[#6b7280] text-lg max-w-[700px] mx-auto leading-relaxed">
              {data.subtitle}
            </p>
          )}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {currentItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm flex flex-col gap-6 transition-all duration-300 hover:shadow-md hover:border-[#c49250]/30"
            >
              <div className="flex justify-between items-start">
                <FaQuoteLeft className="text-4xl text-[#c49250]" />
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-[14px]${i < item.rating ? 'text-[#c49250]' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
              </div>
              
              <div className="grow">
                <p className="text-[#4a4a4a] text-base leading-[1.8]">
                  {item.text}
                </p>
              </div>
              
              <div className="h-px w-full bg-gray-100"></div>
              
              <div className="flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full bg-[#051024] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {getInitials(item.name)}
                </div>
                <div>
                  <h4 className="text-[#051024] font-bold text-lg">{item.name}</h4>
                  <p className="text-[#6b7280] text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button 
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-[#051024] hover:bg-[#051024] hover:text-white hover:border-[#051024] transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#051024] disabled:hover:border-gray-200"
            >
              <FaArrowLeft className="text-sm" />
            </button>
            
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 flex items-center justify-center rounded border transition-all font-medium
${currentPage === i + 1 
 ? 'bg-[#051024] text-white border-[#051024]' 
 : 'border-gray-200 text-[#051024] hover:border-[#051024]'
 }`}
              >
                {i + 1}
              </button>
            ))}
            
            <button 
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="w-10 h-10 flex items-center justify-center rounded border border-gray-200 text-[#051024] hover:bg-[#051024] hover:text-white hover:border-[#051024] transition-all disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-[#051024] disabled:hover:border-gray-200"
            >
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
