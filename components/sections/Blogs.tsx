import React from 'react';
import Link from 'next/link';
import { BlogsData } from '@/types/templates.types';
import { FaRegCalendarAlt, FaRegComments, FaAngleDoubleRight } from 'react-icons/fa';

export const Blogs = ({ data }: { data?: BlogsData }) => {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1250px] mx-auto px-5">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center text-[#c49250] text-[12px] font-bold tracking-[2px] uppercase mb-3 before:content-[''] before:inline-block before:w-[30px] before:h-px before:bg-[#c49250] before:mx-[15px] after:content-[''] after:inline-block after:w-[30px] after:h-px after:bg-[#c49250] after:mx-[15px]">
            {data.badge}
          </div>
          <h2 className="text-[40px] text-[#051024] font-bold m-0">{data.title}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          {data.items.map(item => (
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
      </div>
    </section>
  );
};
