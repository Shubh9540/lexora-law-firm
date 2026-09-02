'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FiDownload } from 'react-icons/fi';
import { PublicationItem } from '@/types/templates.types';

interface PublicationsGridSectionProps {
  publications: PublicationItem[];
  sectionData: any;
}

export const PublicationsGridSection = ({ publications, sectionData }: PublicationsGridSectionProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(publications.length / itemsPerPage);

  const currentItems = publications.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!publications || publications.length === 0) return null;

  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-[#c49250] font-bold tracking-[2px] text-[12px] uppercase block mb-3">
          {sectionData?.publications?.variants?.LexoraPublications1?.subTitle || 'OUR RESOURCES'}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-[#051024] mb-6 uppercase tracking-wider">
          {sectionData?.publications?.variants?.LexoraPublications1?.title || 'PUBLICATIONS'}
        </h1>
        <div className="flex items-center justify-center gap-4 mb-6">
          <span className="w-12 h-px bg-[#c49250]"></span>
          <span className="w-2 h-2 rotate-45 bg-[#c49250]"></span>
          <span className="w-12 h-px bg-[#c49250]"></span>
        </div>
        <p className="text-[15px] text-[#4a4a4a] leading-relaxed">
          {sectionData?.publications?.variants?.LexoraPublications1?.description || 'Explore our in-depth legal research, thought leadership and guides that help clients navigate complex legal and regulatory landscapes.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
        {currentItems.map((pub) => (
          <div key={pub.id} className="flex bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden group">
            {/* Left Image */}
            <div className="w-[45%] flex-shrink-0 relative overflow-hidden bg-[#051024]">
              <img
                src={pub.coverImage || '/banner/ban1.jpg'}
                alt={pub.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Right Content */}
            <div className="w-[55%] p-5 md:p-6 flex flex-col justify-between">
              <div>
                <span className="text-[#c49250] font-bold tracking-[2px] text-[10px] uppercase block mb-3">
                  {pub.type || sectionData?.publications?.variants?.LexoraPublications1?.itemBadge || 'LEGAL GUIDE'}
                </span>
                <h3 className="text-[17px] font-bold text-[#051024] mb-3 leading-tight group-hover:text-[#c49250] transition-colors">
                  {pub.title}
                </h3>
                <p className="text-[#6b7280] text-[12px] mb-4 line-clamp-3 leading-relaxed">
                  {pub.description}
                </p>
                
                <div className="flex items-center gap-2 text-[11px] text-[#6b7280] mb-4 flex-wrap">
                  <span>{pub.date}</span>
                  <span className="text-[#c49250]">|</span>
                  <span>{pub.category}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 mt-auto">
                <Link
                  href={`/publications/${pub.id}`}
                  className="text-[11px] font-bold text-[#051024] hover:text-[#c49250] transition-colors uppercase flex items-center gap-2 tracking-wider"
                >
                  READ PUBLICATION &rarr;
                </Link>
                <a
                  href={pub.pdfUrl || '#'}
                  className="text-[#c49250] hover:text-[#051024] transition-colors"
                  title="Download"
                >
                  <FiDownload className="w-[18px] h-[18px]" />
                </a>
              </div>
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
                    ? 'bg-[#051024] text-white border border-[#051024]'
                    : 'border border-[#e5e7eb] hover:bg-[#c49250] hover:text-white hover:border-[#c49250]'
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
    </div>
  );
};
