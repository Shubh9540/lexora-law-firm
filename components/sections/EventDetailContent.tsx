"use client";
import React from 'react';
import { EventItem, GlobalUIData } from '@/types/templates.types';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaUsers, FaArrowRight, FaTicketAlt } from 'react-icons/fa';

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
                <span className="text-[#c49250]">{event.category}</span>
                <span className="mx-[15px] text-[#e5e7eb]">|</span>
                <span className="text-[#666666]">{event.status}</span>
              </div>
              
              <h1 className="text-[32px] md:text-[42px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] leading-[1.2]">
                {event.title}
              </h1>
              <div className="w-[40px] h-[2px] bg-[#c49250] mb-[25px]"></div>
              
              <div className="flex flex-wrap gap-[15px] md:gap-[30px] mb-[40px] pb-[30px] border-b border-[#f0f0f0]">
                <div className="flex items-center gap-[10px] text-[#666666] text-[15px] font-medium">
                  <FaCalendarAlt className="text-[#c49250]" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-[10px] text-[#666666] text-[15px] font-medium">
                  <FaClock className="text-[#c49250]" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-[10px] text-[#666666] text-[15px] font-medium">
                  <FaMapMarkerAlt className="text-[#c49250]" />
                  <span>{event.location}</span>
                </div>
              </div>

              {/* Rich Content Blocks */}
              <div className="space-y-[30px]">
                {event.contentBlocks?.map((block: any, index: number) => {
                  if (block.type === 'heading') {
                    return (
                      <h2 key={index} className="text-[24px] md:text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[20px] mt-[40px] leading-[1.3]">
                        {block.heading}
                      </h2>
                    );
                  } else if (block.type === 'paragraph') {
                    return (
                      <p key={index} className="text-[#666666] text-[15px] md:text-[16px] leading-[1.8] m-0">
                        {block.text}
                      </p>
                    );
                  } else if (block.type === 'schedule') {
                    return (
                      <div key={index} className="mt-[40px]">
                        <h3 className="text-[22px] text-[#051024] font-family-[var(--)] font-bold mb-[25px]">Event Schedule</h3>
                        <div className="space-y-[20px]">
                          {block.items?.map((item: any, i: number) => (
                            <div key={i} className="flex flex-col md:flex-row gap-[15px] md:gap-[30px] p-[25px] bg-[#fdfaf6] rounded-[10px] border border-[#f0e6d3]">
                              <div className="md:w-[150px] flex-shrink-0">
                                <div className="text-[#c49250] font-bold text-[16px] mb-[5px]">{item.time}</div>
                                <div className="text-[#666666] text-[13px] uppercase tracking-[1px]">{item.duration}</div>
                              </div>
                              <div>
                                <h4 className="text-[18px] text-[#051024] font-bold font-family-[var(--)] mb-[10px]">{item.activity}</h4>
                                {item.speaker && (
                                  <div className="text-[#666666] text-[15px] flex items-center gap-[10px]">
                                    <FaUsers className="text-[#c49250]" />
                                    <span>Speaker: {item.speaker}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <div className="space-y-[40px] lg:sticky lg:top-[120px]">
            
            {/* Featured Image */}
            <div className="rounded-[15px] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)]">
              <img src={event.image} alt={event.title} className="w-full h-auto object-cover" />
            </div>

            {/* Registration Box */}
            <div className="bg-[#fbf8f2] rounded-[15px] p-[30px] md:p-[40px] border border-[#e5dfd3]">
              <h3 className="text-[24px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                Event Details
              </h3>
              
              <ul className="flex flex-col gap-[20px] mb-[35px]">
                <li className="flex justify-between items-center border-b border-[#e5dfd3] pb-[15px]">
                  <span className="text-[#666666] font-medium">Registration Fee</span>
                  <span className="text-[#051024] font-bold">{event.price}</span>
                </li>
                <li className="flex justify-between items-center border-b border-[#e5dfd3] pb-[15px]">
                  <span className="text-[#666666] font-medium">Capacity</span>
                  <span className="text-[#051024] font-bold">{event.capacity} Attendees</span>
                </li>
                <li className="flex justify-between items-center pb-[5px]">
                  <span className="text-[#666666] font-medium">Registration Closes</span>
                  <span className="text-[#051024] font-bold">{event.registrationDeadline}</span>
                </li>
              </ul>
              
              <button className="flex items-center justify-center gap-[10px] w-full bg-[#c49250] text-white font-bold text-[15px] py-[18px] px-[30px] rounded-[5px] transition-all duration-300 hover:bg-[#051024]">
                <FaTicketAlt /> Register Now
              </button>
            </div>

            {/* Speakers Quick View */}
            {event.speakers && event.speakers.length > 0 && (
              <div className="bg-white">
                <h3 className="text-[22px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
                  Featured Speakers
                </h3>
                
                <div className="flex flex-col gap-[20px]">
                  {event.speakers?.map((speaker: any, idx: number) => (
                    <div key={idx} className="flex gap-[15px] items-center">
                      <img src={speaker.image} alt={speaker.name} className="w-[60px] h-[60px] rounded-full object-cover border-2 border-[#f0f0f0]" />
                      <div>
                        <h4 className="text-[16px] text-[#051024] font-bold font-family-[var(--)] m-0 leading-[1.2]">{speaker.name}</h4>
                        <div className="text-[#c49250] text-[13px] font-medium mt-[5px]">{speaker.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </section>
  );
};
