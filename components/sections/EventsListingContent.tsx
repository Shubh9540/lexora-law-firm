"use client";
import React from 'react';
import Link from 'next/link';
import { EventsData } from '@/types/templates.types';
import { FaClock, FaMapMarkerAlt, FaArrowRight, FaUserTie, FaLightbulb, FaUsers, FaFileAlt, FaPaperPlane } from 'react-icons/fa';

export const EventsListingContent = ({ data }: { data?: EventsData }) => {
  if (!data || !data.items) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#fafafa]">
      <div className="max-w-[1250px] mx-auto px-5">
        
        <div className="text-center mb-8">
          <h2 className="text-[32px] md:text-[40px] text-[#051024] font-bold font-family-[var(--)] relative inline-block before:content-[''] before:absolute before:top-1/2 before:left-[-60px] before:w-[40px] before:h-[2px] before:bg-[#c49250] after:content-[''] after:absolute after:top-1/2 after:right-[-60px] after:w-[40px] after:h-[2px] after:bg-[#c49250]">
            {data.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[30px] lg:gap-[40px] items-start">
          
          {/* LEFT: Events List */}
          <div className="flex flex-col gap-[30px]">
            {data.items.map((event) => (
              <div key={event.id} className="bg-white rounded-[10px] border border-[#f0f0f0] shadow-[0_5px_15px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] flex flex-col md:flex-row overflow-hidden group">
                
                {/* Date Box */}
                <div className="bg-[#fdfaf6] border-b md:border-b-0 md:border-r border-[#f0f0f0] p-[20px] md:p-[30px] flex flex-col items-center justify-center min-w-[150px] flex-shrink-0">
                  <div className="bg-[#051024] text-white text-[14px] font-bold uppercase py-[8px] px-[20px] rounded mb-[15px] tracking-[1px] w-full text-center">
                    {event.dateBox.month}
                  </div>
                  <div className="text-[#c49250] text-[50px] font-bold leading-[1] font-family-[var(--)] mb-[5px]">
                    {event.dateBox.day}
                  </div>
                  <div className="text-[#666666] text-[16px] font-bold">
                    {event.dateBox.year}
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-[30px] flex-1 flex flex-col">
                  <div className="text-[#c49250] text-[12px] font-bold uppercase tracking-[1px] mb-[10px]">
                    {event.badge}
                  </div>
                  
                  <h3 className="text-[22px] md:text-[26px] text-[#051024] font-bold font-family-[var(--)] leading-[1.3] mb-[15px] group-hover:text-[#c49250] transition-colors">
                    <Link href={`/events/${event.slug || event.id}`}>{event.title}</Link>
                  </h3>
                  
                  <p className="text-[#666666] text-[15px] leading-[1.7] mb-[20px]">
                    {event.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-[20px] mt-auto">
                    <div className="flex items-center gap-[8px] text-[#666666] text-[14px] font-medium">
                      <FaClock className="text-[#c49250]" /> {event.time}
                    </div>
                    <div className="hidden md:block w-[1px] h-[15px] bg-[#e5e7eb]"></div>
                    <div className="flex items-center gap-[8px] text-[#666666] text-[14px] font-medium">
                      <FaMapMarkerAlt className="text-[#c49250]" /> {event.location}
                    </div>
                  </div>
                </div>

                {/* Arrow Button */}
                <div className="p-[30px] md:border-l border-[#f0f0f0] flex items-center justify-center bg-[#fdfaf6] md:bg-transparent">
                  <Link href={`/events/${event.slug || event.id}`} className="w-[50px] h-[50px] rounded-full bg-[#c49250] text-white flex items-center justify-center text-[18px] transition-transform duration-300 hover:scale-110 shadow-[0_5px_15px_rgba(196,146,80,0.3)]">
                    <FaArrowRight />
                  </Link>
                </div>

              </div>
            ))}

          </div>

          {/* RIGHT: Sidebar */}
          <div className="flex flex-col gap-[30px] lg:sticky lg:top-[120px]">
            
            {/* Why Attend Box */}
            <div className="bg-[#fdfaf6] p-[30px] md:p-[40px] rounded-[10px] border border-[#f0e6d3]">
              <h3 className="text-[22px] text-[#051024] font-bold font-family-[var(--)] mb-[25px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#c49250]">
                Why Attend Our Events?
              </h3>
              
              <div className="space-y-[20px]">
                <div className="flex items-center gap-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white border border-[#f0e6d3] text-[#c49250] flex items-center justify-center text-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <FaUserTie />
                  </div>
                  <div className="text-[#666666] text-[15px] font-medium leading-[1.4]">
                    Learn from<br />Industry Experts
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white border border-[#f0e6d3] text-[#c49250] flex items-center justify-center text-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <FaLightbulb />
                  </div>
                  <div className="text-[#666666] text-[15px] font-medium leading-[1.4]">
                    Stay Updated on<br />Latest Legal Trends
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white border border-[#f0e6d3] text-[#c49250] flex items-center justify-center text-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <FaUsers />
                  </div>
                  <div className="text-[#666666] text-[15px] font-medium leading-[1.4]">
                    Network with<br />Professionals
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white border border-[#f0e6d3] text-[#c49250] flex items-center justify-center text-[18px] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                    <FaFileAlt />
                  </div>
                  <div className="text-[#666666] text-[15px] font-medium leading-[1.4]">
                    Gain Practical<br />Insights
                  </div>
                </div>
              </div>
            </div>

            {/* Dark CTA Box */}
            <div className="bg-[#051024] rounded-[10px] p-[30px] md:p-[40px] shadow-[0_15px_30px_rgba(5,16,36,0.2)]">
              <div className="text-[#c49250] text-[35px] mb-[15px]">
                {/* Calendar Icon placeholder using FaClock if no calendar */}
                <FaClock />
              </div>
              <h3 className="text-[24px] text-white font-bold font-family-[var(--)] leading-[1.3] mb-[15px]">
                Have an Event<br />in Mind?
              </h3>
              <p className="text-white/70 text-[14px] leading-[1.6] mb-[25px]">
                We organise and host events that create impact and add value to the legal community.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center gap-[10px] bg-[#c49250] text-white font-bold text-[13px] uppercase tracking-[1px] px-[25px] py-[12px] rounded transition-all hover:bg-white hover:text-[#051024]">
                Partner With Us <FaArrowRight />
              </Link>
            </div>

            {/* Stay Updated Form */}
            <div className="bg-[#fdfaf6] p-[30px] md:p-[40px] rounded-[10px] border border-[#f0e6d3]">
              <h3 className="text-[22px] text-[#051024] font-bold font-family-[var(--)] mb-[15px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#c49250]">
                Stay Updated
              </h3>
              <p className="text-[#666666] text-[14px] leading-[1.6] mb-[20px]">
                Subscribe to receive updates on our upcoming events and webinars.
              </p>
              <form className="flex gap-[10px]" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white border border-[#e5e7eb] rounded px-[15px] py-[12px] text-[14px] outline-none focus:border-[#c49250]"
                  required
                />
                <button type="submit" className="bg-[#c49250] text-white px-[20px] py-[12px] rounded hover:bg-[#051024] transition-colors flex-shrink-0">
                  <FaPaperPlane />
                </button>
              </form>
              <div className="text-[#999999] text-[12px] mt-[15px] flex items-center gap-[5px]">
                <FaClock className="text-[10px]" /> We respect your privacy.
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
