"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { BlogsData } from '@/types/templates.types';
import { FaRegCalendarAlt, FaRegComments, FaAngleDoubleRight } from 'react-icons/fa';

export const BlogsGridSection = ({ data }: { data?: BlogsData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  if (!data || !data.items) return null;

  const totalPages = Math.ceil(data.items.length / itemsPerPage);
  const currentItems = data.items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-6 max-w-[1250px] mx-auto bg-white">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <div className="mb-5">
          <span className="text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase">
            — {data.badge || 'NEWS & BLOG'} —
          </span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-[#051024] mb-6 font-family-[var(--)]">
          {data.title}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-px bg-[#c49250]"></span>
          <span className="w-2 h-2 rotate-45 bg-[#c49250]"></span>
          <span className="w-12 h-px bg-[#c49250]"></span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] mb-16">
        {currentItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-[0_5px_25px_rgba(0,0,0,0.04)] flex flex-col sm:flex-row items-stretch p-5 gap-5 border border-[#f9f9f9] transition-all duration-300 hover:shadow-[0_10px_35px_rgba(0,0,0,0.08)] hover:-translate-y-1 group">
            
            <div className="w-full sm:w-[40%] h-[200px] sm:h-auto rounded-lg overflow-hidden flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            
            <div className="flex flex-row sm:flex-col items-center py-[15px] sm:py-2.5 sm:px-0 sm:pr-[15px] border-b sm:border-b-0 sm:border-r border-[#f0f0f0] flex-shrink-0 justify-start sm:justify-center">
              <div className="w-[35px] h-[35px] rounded-full overflow-hidden mr-[10px] sm:mr-0 sm:mb-[15px] border-2 border-white shadow-[0_2px_5px_rgba(0,0,0,0.1)]">
                <img src={item.authorImage || '/team/team1.jpg'} alt={item.author} className="w-full h-full object-cover" />
              </div>
              <span className="text-[13px] font-bold text-[#051024] tracking-[0.5px] sm:[writing-mode:vertical-rl] sm:[text-orientation:mixed] sm:rotate-180">
                {item.author}
              </span>
            </div>
            
            <div className="py-2.5 flex flex-col justify-center flex-grow">
              <div className="flex items-center gap-2.5 mb-[15px] text-[11px] text-[#6b7280] font-medium flex-wrap">
                <span className="flex items-center gap-[5px]">
                  <FaRegCalendarAlt className="text-[#c09665] text-[13px]" /> {item.date}
                </span>
                <span className="text-[#e5e7eb]">|</span>
                <span className="flex items-center gap-[5px]">
                  <FaRegComments className="text-[#c09665] text-[13px]" /> {item.comments}
                </span>
              </div>
              <Link href={`/blogs/${item.slug || item.id}`} className="text-[20px] block text-[#051024] font-bold mb-2.5 leading-[1.4] transition-colors duration-300 group-hover:text-[#c49250]">
                {item.title}
              </Link>
              <p className="text-[#6b7280] text-[14px] leading-[1.6] mb-5 line-clamp-2 m-0">
                {item.excerpt}
              </p>
              <Link href={`/blogs/${item.slug || item.id}`} className="self-start bg-[#b58d56] text-white text-[11px] font-bold py-2 px-[18px] rounded inline-flex items-center gap-1.5 tracking-[1px] uppercase transition-all duration-300 hover:bg-[#051024]">
                {item.linkText || "READ MORE"} <FaAngleDoubleRight />
              </Link>
            </div>
            
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center border border-[#e5e7eb] rounded hover:bg-[#c49250] hover:text-white hover:border-[#c49250] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &lt;
          </button>

          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className={`w-10 h-10 flex items-center justify-center rounded transition-colors ${
                  currentPage === pageNum
                    ? 'bg-[#c49250] text-white border border-[#c49250]'
                    : 'border border-[#e5e7eb] text-gray-600 hover:bg-[#c49250] hover:text-white hover:border-[#c49250]'
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center border border-[#e5e7eb] rounded hover:bg-[#c49250] hover:text-white hover:border-[#c49250] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            &gt;
          </button>
        </div>
      )}
    </section>
  );
};
