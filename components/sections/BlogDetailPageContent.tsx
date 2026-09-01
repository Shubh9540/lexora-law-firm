"use client";
import React from 'react';
import Link from 'next/link';
import { BlogItem, GlobalUIData } from '@/types/templates.types';
import { FaUser, FaCalendarAlt, FaGavel, FaPhoneAlt, FaArrowRight } from 'react-icons/fa';

interface BlogDetailPageContentProps {
  blog: BlogItem;
  allBlogs: BlogItem[];
  globalUI?: GlobalUIData;
}

export const BlogDetailPageContent = ({ blog, allBlogs, globalUI }: BlogDetailPageContentProps) => {
  // Get 3 recent posts excluding the current one
  const recentPosts = allBlogs.filter(b => b.id !== blog.id).slice(0, 3);

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'FaGavel': return <FaGavel />;
      default: return <FaGavel />;
    }
  };

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[40px] lg:gap-[60px] items-start">
          
          {/* LEFT: Main Content */}
          <div>
            {/* Featured Image & Author Box */}
            <div className="relative mb-[40px] lg:mb-[60px]">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-auto rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] object-cover max-h-[500px]" 
              />
              
              <div className="w-[90%] md:w-[80%] mx-auto bg-white rounded-lg p-[15px] md:p-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.05)] -mt-[30px] md:-mt-[40px] relative z-10 flex flex-wrap items-center justify-center gap-[20px] md:gap-[40px] border border-[#f0f0f0]">
                <div className="flex items-center gap-[10px] text-[#666666]">
                  <FaUser className="text-[#c49250]" />
                  <span className="text-[14px] md:text-[15px]">By {blog.author}</span>
                </div>
                <div className="flex items-center gap-[10px] text-[#666666]">
                  <FaCalendarAlt className="text-[#c49250]" />
                  <span className="text-[14px] md:text-[15px]">{blog.date}</span>
                </div>
              </div>
            </div>

            {/* Title & Body Content */}
            <div>
              <h1 className="text-[32px] md:text-[42px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] leading-[1.3]">
                {blog.title}
              </h1>
              <div className="w-[40px] h-[2px] bg-[#c49250] mb-[30px]"></div>

              {blog.contentBlocks ? (
                <div className="space-y-[30px]">
                  {blog.contentBlocks.map((block, index) => {
                    if (block.type === 'paragraph') {
                      return (
                        <p key={index} className="text-[#666666] text-[15px] md:text-[16px] leading-[1.8] m-0">
                          {block.text}
                        </p>
                      );
                    } else if (block.type === 'heading_with_icon') {
                      return (
                        <div key={index} className="flex items-center gap-[15px] pt-[15px]">
                          <div className="w-[45px] h-[45px] rounded-full bg-[#051024] text-white flex items-center justify-center text-[18px] flex-shrink-0 shadow-[0_5px_15px_rgba(5,16,36,0.2)]">
                            {renderIcon(block.icon)}
                          </div>
                          <h3 className="text-[24px] md:text-[28px] text-[#051024] font-family-[var(--)] font-bold m-0 relative pb-[10px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#c49250]">
                            {block.heading}
                          </h3>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              ) : (
                <p className="text-[#666666] text-[15px] md:text-[16px] leading-[1.8]">
                  {blog.excerpt}
                </p>
              )}
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-[40px] lg:sticky lg:top-[120px]">
            
            {/* Recent Posts Box */}
            <div className="bg-white rounded-lg p-[30px] shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-[#f0f0f0]">
              <h3 className="text-[24px] text-[#051024] font-family-[var(--)] font-bold mb-[30px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                Recent Posts
              </h3>
              
              <div className="flex flex-col gap-[25px]">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-[15px] items-center">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-[80px] h-[80px] rounded-lg object-cover shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex-shrink-0"
                    />
                    <div>
                      <div className="flex items-center gap-[8px] text-[#666666] text-[12px] mb-[5px]">
                        <FaCalendarAlt className="text-[#c49250]" />
                        <span>{post.date}</span>
                      </div>
                      <Link href={`/blogs/${post.slug || post.id}`} className="text-[15px] text-[#051024] font-bold font-family-[var(--)] leading-[1.4] hover:text-[#c49250] transition-colors line-clamp-2 mb-[5px]">
                        {post.title}
                      </Link>
                      <Link href={`/blogs/${post.slug || post.id}`} className="text-[#c49250] text-[13px] font-bold flex items-center gap-[5px] hover:text-[#051024] transition-colors">
                        {post.linkText || 'Read More'} <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Need Legal Help CTA Box */}
            <div className="bg-[#051024] rounded-lg p-[40px] shadow-[0_20px_40px_rgba(5,16,36,0.3)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-white/5 rounded-full blur-[30px] -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="w-[60px] h-[60px] rounded-full bg-[#c49250] text-white flex items-center justify-center text-[24px] mb-[30px] shadow-[0_10px_20px_rgba(196,146,80,0.3)]">
                <FaPhoneAlt />
              </div>
              
              <p className="text-white/80 text-[16px] mb-[10px]">
                {globalUI?.sidebarContactTitle || 'Need Legal Help?'}
              </p>
              <h3 className="text-[32px] text-white font-family-[var(--)] font-bold leading-[1.2] mb-[30px] relative pb-[20px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                We are here<br />for you
              </h3>
              
              <p className="text-white/80 text-[14px] mb-[10px]">
                {globalUI?.callUsAnytimeText || 'Call us anytime'}
              </p>
              <a href="tel:+11187574885" className="text-[#c49250] text-[28px] font-bold font-family-[var(--)] block mb-[30px] hover:text-white transition-colors">
                +111 875 74885
              </a>
              
              <Link href="/contact" className="inline-flex items-center justify-center gap-[10px] bg-[#c49250] text-white font-bold text-[14px] tracking-[1px] px-[30px] py-[15px] rounded w-full transition-all hover:bg-white hover:text-[#051024]">
                CONTACT US <FaArrowRight />
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};
