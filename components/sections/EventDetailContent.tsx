"use client";
import React from 'react';
import { EventItem, GlobalUIData } from '@/types/templates.types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaArrowRight, FaTicketAlt, FaCheckCircle } from 'react-icons/fa';

interface EventDetailContentProps {
  event: EventItem;
  globalUI?: GlobalUIData;
}

export const EventDetailContent = ({ event, globalUI }: EventDetailContentProps) => {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-[40px] lg:gap-[60px] items-start">
          
          {/* LEFT: Main Content */}
          <div>
            <div className="mb-[40px]">
              <div className="flex items-center text-[12px] font-bold mb-[20px] uppercase tracking-[1px]">
                <span className="text-[#c49250]">{event.badge}</span>
                <span className="mx-[15px] text-[#e5e7eb]">|</span>
                <span className="text-[#666666]">{event.dateFull}</span>
              </div>
              
              <h1 className="text-[32px] md:text-[42px] font-family-[var(--)] font-bold text-[#051024] leading-[1.2] mb-[20px]">
                {event.title}
              </h1>
              
              <div className="text-[18px] text-[#666666] leading-[1.6] mb-[30px] font-medium border-l-4 border-[#c49250] pl-5 py-2 bg-[#fbf8f2]">
                {event.excerpt}
              </div>

              <div className="relative rounded-[15px] overflow-hidden mb-[40px] group shadow-lg">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-auto aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Date Box overlay */}
                <div className="absolute top-[20px] right-[20px] bg-white rounded-lg p-3 text-center shadow-lg border-b-4 border-[#c49250]">
                  <div className="text-[12px] font-bold text-[#666] uppercase tracking-wider mb-1">{event.dateBox.month}</div>
                  <div className="text-[28px] font-bold text-[#051024] leading-none mb-1">{event.dateBox.day}</div>
                  <div className="text-[12px] font-medium text-[#c49250]">{event.dateBox.year}</div>
                </div>
              </div>

              {/* About Text */}
              <div className="space-y-[20px] mb-[40px]">
                <h2 className="text-[24px] md:text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] mt-[40px] leading-[1.3]">
                  About The Event
                </h2>
                {event.aboutText?.map((paragraph, index) => (
                  <p key={index} className="text-[#666666] text-[16px] leading-[1.8]">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              {/* Key Topics */}
              {event.keyTopics && event.keyTopics.length > 0 && (
                <div className="mt-[40px]">
                  <h3 className="text-[22px] text-[#051024] font-family-[var(--)] font-bold mb-[25px]">Key Topics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {event.keyTopics.map((topic, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-[#fdfaf6] rounded-[8px] border border-[#f0e6d3]">
                        <FaCheckCircle className="text-[#c49250] mt-1 flex-shrink-0" />
                        <span className="text-[#4a4a4a] text-[15px] font-medium leading-[1.4]">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* RIGHT: Sidebar */}
          <div className="lg:sticky lg:top-[120px]">
            {/* Event Details Card */}
            <div className="bg-[#fbf8f2] rounded-[15px] p-[30px] lg:p-[40px] border border-[#f0e6d3] shadow-sm mb-[30px]">
              <h3 className="text-[22px] text-[#051024] font-family-[var(--)] font-bold mb-[30px] pb-[15px] border-b border-[#e5d5b8]">
                Event Details
              </h3>
              
              <ul className="space-y-[25px]">
                <li className="flex gap-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#c49250] flex-shrink-0 shadow-sm">
                    <FaCalendarAlt className="text-[18px]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-[#666666] mb-[5px] font-medium">Date</div>
                    <div className="text-[16px] text-[#051024] font-bold">{event.dateFull}</div>
                    <div className="text-[13px] text-[#888] mt-1">{event.dayOfWeek}</div>
                  </div>
                </li>
                
                <li className="flex gap-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#c49250] flex-shrink-0 shadow-sm">
                    <FaClock className="text-[18px]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-[#666666] mb-[5px] font-medium">Time</div>
                    <div className="text-[16px] text-[#051024] font-bold">{event.time}</div>
                  </div>
                </li>
                
                <li className="flex gap-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#c49250] flex-shrink-0 shadow-sm">
                    <FaMapMarkerAlt className="text-[18px]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-[#666666] mb-[5px] font-medium">Location</div>
                    <div className="text-[16px] text-[#051024] font-bold leading-[1.4]">{event.location}</div>
                  </div>
                </li>
                
                <li className="flex gap-[20px]">
                  <div className="w-[45px] h-[45px] rounded-full bg-white flex items-center justify-center text-[#c49250] flex-shrink-0 shadow-sm">
                    <FaUsers className="text-[18px]" />
                  </div>
                  <div>
                    <div className="text-[14px] text-[#666666] mb-[5px] font-medium">Capacity</div>
                    <div className="text-[16px] text-[#051024] font-bold">{event.seats}</div>
                  </div>
                </li>
              </ul>
              
              <button className="w-full h-[55px] bg-[#051024] text-white rounded-[5px] font-bold text-[15px] uppercase tracking-[1px] mt-[40px] transition-colors hover:bg-[#c49250] flex items-center justify-center gap-[10px]">
                <FaTicketAlt />
                Register Now
              </button>
            </div>
            
            {/* Need Help Card */}
            <div className="bg-[#051024] rounded-[15px] p-[30px] lg:p-[40px] text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[150px] h-[150px] bg-[#c49250] rounded-bl-full opacity-10"></div>
              
              <div className="w-[60px] h-[60px] rounded-full bg-white/10 flex items-center justify-center text-[#c49250] mx-auto mb-[25px]">
                <FaArrowRight className="text-[20px]" />
              </div>
              
              <h4 className="text-[22px] text-white font-family-[var(--)] font-bold mb-[15px]">
                Have Questions?
              </h4>
              <p className="text-[#a0aec0] text-[15px] leading-[1.6] mb-[25px]">
                Need more information about this event? Our team is here to assist you.
              </p>
              
              <a href="/contact" className="inline-block border-2 border-[#c49250] text-[#c49250] font-bold text-[14px] uppercase tracking-[1px] px-[30px] py-[12px] rounded-[5px] transition-all hover:bg-[#c49250] hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
