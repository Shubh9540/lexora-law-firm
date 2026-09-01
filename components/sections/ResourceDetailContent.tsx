"use client";
import React from 'react';
import Link from 'next/link';
import { ClientResourceItem, GlobalUIData } from '@/types/templates.types';
import { FaFilePdf, FaFileWord, FaFileExcel, FaDownload, FaArrowLeft, FaArrowRight, FaEye } from 'react-icons/fa';

interface ResourceDetailContentProps {
  data: ClientResourceItem;
  globalUI?: GlobalUIData;
  prevSlug?: string | null;
  nextSlug?: string | null;
}

export const ResourceDetailContent = ({ data: resource, globalUI, prevSlug, nextSlug }: ResourceDetailContentProps & { prevSlug?: string | null; nextSlug?: string | null; templateData?: any }) => {
  
  const getFileIcon = (type?: string) => {
    switch (type) {
      case 'pdf': return <FaFilePdf className="text-red-500" />;
      case 'doc':
      case 'docx': return <FaFileWord className="text-blue-500" />;
      case 'xls':
      case 'xlsx': return <FaFileExcel className="text-green-500" />;
      default: return <FaFilePdf className="text-red-500" />;
    }
  };

  return (
    <section className="py-[60px] lg:py-[100px] bg-white">
      <div className="max-w-[1000px] mx-auto px-5">
        
        {/* Header Section */}
        <div className="text-center mb-[50px] lg:mb-[60px]">
          <div className="inline-block bg-[#fdfaf6] border border-[#f0e6d3] text-[#c49250] text-[12px] font-bold uppercase tracking-[2px] px-[20px] py-[8px] rounded-full mb-[25px]">
            {resource.category}
          </div>
          
          <h1 className="text-[32px] md:text-[42px] lg:text-[48px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] leading-[1.2]">
            {resource.title}
          </h1>
          <div className="w-[40px] h-[2px] bg-[#c49250] mx-auto mb-[25px]"></div>
          
          <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.8] max-w-[800px] mx-auto">
            {resource.description}
          </p>
        </div>

        {/* Action Card */}
        <div className="bg-[#fcfbf9] border border-[#f0f0f0] rounded-[15px] p-[30px] md:p-[50px] flex flex-col md:flex-row items-center justify-between gap-[30px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] mb-[60px]">
          <div className="flex items-center gap-[25px]">
            <div className="text-[50px] md:text-[60px]">
              {getFileIcon(resource.fileType)}
            </div>
            <div>
              <div className="text-[#051024] font-bold text-[20px] mb-[5px] font-family-[var(--)]">
                {resource.title}
              </div>
              <div className="text-[#666666] text-[14px] font-medium flex items-center gap-[15px]">
                <span className="uppercase">{resource.fileType}</span>
                <span className="w-[4px] h-[4px] rounded-full bg-[#c49250]"></span>
                <span>{resource.fileSize}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-[15px] w-full md:w-auto">
            <a 
              href={resource.downloadUrl} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[10px] bg-white border-2 border-[#051024] text-[#051024] font-bold text-[14px] px-[25px] py-[12px] rounded-[5px] transition-all hover:bg-[#051024] hover:text-white"
            >
              <FaEye /> Preview
            </a>
            <a 
              href={resource.downloadUrl} 
              download
              className="flex items-center justify-center gap-[10px] bg-[#c49250] border-2 border-[#c49250] text-white font-bold text-[14px] px-[25px] py-[12px] rounded-[5px] transition-all hover:bg-[#a67c00] hover:border-[#a67c00]"
            >
              <FaDownload /> Download
            </a>
          </div>
        </div>

        {/* Content Details if any */}
        {resource.contentBlocks && resource.contentBlocks.length > 0 && (
          <div className="max-w-[800px] mx-auto mb-[60px] prose prose-lg prose-headings:text-[#051024] prose-headings:font-family-[var(--)] prose-a:text-[#c49250] prose-p:text-[#666666] prose-li:text-[#666666]">
            {resource.contentBlocks.map((block: any, idx: number) => (
              <div key={idx} className="mb-6">
                 {block.type === 'heading' && <h3 className="text-[24px] font-bold mb-4">{block.heading}</h3>}
                 {block.type === 'paragraph' && <p className="mb-4">{block.text}</p>}
              </div>
            ))}
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center border-t border-[#f0f0f0] pt-[30px]">
          {prevSlug ? (
             <Link href={`/resources/${prevSlug}`} className="text-[#051024] font-bold text-[14px] uppercase tracking-[1px] flex items-center gap-[10px] hover:text-[#c49250] transition-colors">
               <FaArrowLeft /> Previous Resource
             </Link>
          ) : <div></div>}
          
          {nextSlug ? (
             <Link href={`/resources/${nextSlug}`} className="text-[#051024] font-bold text-[14px] uppercase tracking-[1px] flex items-center gap-[10px] hover:text-[#c49250] transition-colors">
               Next Resource <FaArrowRight />
             </Link>
          ) : <div></div>}
        </div>

      </div>
    </section>
  );
};
