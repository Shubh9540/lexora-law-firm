"use client";
import React from 'react';
import { EventItem } from '@/types/templates.types';
import { FaScaleUnbalanced } from 'react-icons/fa6';
import { FaRegCalendarAlt, FaRegClock, FaMapMarkerAlt, FaUsers, FaCheckCircle, FaArrowRight, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export const EventDetailContent = ({ update: event }: { update: EventItem }) => {
  return (
    <section className="py-5 bg-[#fafafa]">
      <div className="max-w-[1250px] mx-auto px-5">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] items-center mb-8">
          <div>
            <div className="flex items-center gap-[10px] text-[#c49250] text-[13px] font-bold uppercase tracking-[1.5px] mb-[15px]">
              <FaScaleUnbalanced className="text-[18px]" /> {event.badge}
            </div>
            
            <h1 className="text-[36px] md:text-[50px] text-[#051024] font-bold font-family-[var(--)] leading-[1.1] mb-[25px]">
              {event.title}
            </h1>
            
            <div className="w-[50px] h-[3px] bg-[#c49250] mb-[25px]"></div>
            
            <p className="text-[#666666] text-[16px] md:text-[18px] leading-[1.7] font-medium max-w-[500px]">
              {event.excerpt}
            </p>
          </div>
          
          <div className="rounded-[15px] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
            <img src={event.image} alt={event.title} className="w-full h-auto object-cover max-h-[400px]" />
          </div>
        </div>

        {/* Middle Stats Strip */}
        <div className="bg-[#fdfaf6] rounded-[15px] border border-[#f0e6d3] p-[30px] md:p-[40px] mb-[60px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[30px] divide-x-0 md:divide-x divide-[#f0e6d3]">
            
            <div className="flex flex-col items-center text-center px-[10px]">
              <div className="w-[60px] h-[60px] rounded-full border border-[#c49250] text-[#c49250] flex items-center justify-center text-[24px] mb-[15px] bg-white shadow-[0_5px_15px_rgba(196,146,80,0.1)]">
                <FaRegCalendarAlt />
              </div>
              <div className="text-[#051024] font-bold text-[16px] font-family-[var(--)] mb-[5px]">{event.dateFull}</div>
              <div className="text-[#666666] text-[14px]">{event.dayOfWeek}</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-[10px]">
              <div className="w-[60px] h-[60px] rounded-full border border-[#c49250] text-[#c49250] flex items-center justify-center text-[24px] mb-[15px] bg-white shadow-[0_5px_15px_rgba(196,146,80,0.1)]">
                <FaRegClock />
              </div>
              <div className="text-[#051024] font-bold text-[16px] font-family-[var(--)] mb-[5px]">{event.time}</div>
              <div className="text-[#666666] text-[14px]">(IST)</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-[10px]">
              <div className="w-[60px] h-[60px] rounded-full border border-[#c49250] text-[#c49250] flex items-center justify-center text-[24px] mb-[15px] bg-white shadow-[0_5px_15px_rgba(196,146,80,0.1)]">
                <FaMapMarkerAlt />
              </div>
              <div className="text-[#051024] font-bold text-[16px] font-family-[var(--)] mb-[5px]">Location</div>
              <div className="text-[#666666] text-[14px]">{event.location}</div>
            </div>
            
            <div className="flex flex-col items-center text-center px-[10px]">
              <div className="w-[60px] h-[60px] rounded-full border border-[#c49250] text-[#c49250] flex items-center justify-center text-[24px] mb-[15px] bg-white shadow-[0_5px_15px_rgba(196,146,80,0.1)]">
                <FaUsers />
              </div>
              <div className="text-[#051024] font-bold text-[16px] font-family-[var(--)] mb-[5px]">Limited Seats</div>
              <div className="text-[#666666] text-[14px]">{event.seats}</div>
            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-[40px] lg:gap-[60px] items-start">
          
          {/* Left: About & Topics */}
          <div>
            <h2 className="text-[28px] md:text-[32px] text-[#051024] font-bold font-family-[var(--)] mb-[25px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
              About the Event
            </h2>
            <div className="space-y-[20px] mb-[40px]">
              {event.aboutText.map((paragraph, index) => (
                <p key={index} className="text-[#666666] text-[16px] leading-[1.8] m-0">
                  {paragraph}
                </p>
              ))}
            </div>

            <h2 className="text-[28px] md:text-[32px] text-[#051024] font-bold font-family-[var(--)] mb-[25px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[40px] after:h-[2px] after:bg-[#c49250]">
              Key Topics
            </h2>
            <ul className="space-y-[15px]">
              {event.keyTopics.map((topic, index) => (
                <li key={index} className="flex items-start gap-[15px]">
                  <FaCheckCircle className="text-[#c49250] text-[20px] mt-[4px] flex-shrink-0" />
                  <span className="text-[#4a4a4a] text-[16px] font-medium leading-[1.6]">
                    {topic}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Registration Form & Contact */}
          <div className="flex flex-col gap-[30px] lg:sticky lg:top-[120px]">
            
            {/* Form */}
            <div className="bg-white rounded-[10px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] overflow-hidden border border-[#f0f0f0]">
              <div className="bg-[#051024] p-[30px] text-center">
                <h3 className="text-[24px] text-white font-bold font-family-[var(--)] mb-[10px]">
                  Register for the Event
                </h3>
                <p className="text-white/70 text-[14px]">
                  Fill in your details to register for this event.
                </p>
              </div>
              
              <div className="p-[30px]">
                <form className="space-y-[20px]" onSubmit={(e) => e.preventDefault()}>
                  
                  <div>
                    <label className="block text-[#051024] text-[13px] font-bold mb-[8px]">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Enter your full name" 
                      className="w-full bg-[#fafafa] border border-[#e5e7eb] rounded px-[15px] py-[12px] text-[14px] outline-none focus:border-[#c49250]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#051024] text-[13px] font-bold mb-[8px]">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="w-full bg-[#fafafa] border border-[#e5e7eb] rounded px-[15px] py-[12px] text-[14px] outline-none focus:border-[#c49250]"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-[#051024] text-[13px] font-bold mb-[8px]">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="Enter your phone number" 
                      className="w-full bg-[#fafafa] border border-[#e5e7eb] rounded px-[15px] py-[12px] text-[14px] outline-none focus:border-[#c49250]"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start gap-[10px] pt-[5px]">
                    <input type="checkbox" id="terms" className="mt-[4px]" required />
                    <label htmlFor="terms" className="text-[#666666] text-[13px] leading-[1.5]">
                      I agree to the <a href="/terms-conditions" className="text-[#c49250] font-bold hover:underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-[#c49250] font-bold hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  
                  <button type="submit" className="w-full bg-[#c49250] text-white font-bold text-[15px] py-[15px] rounded transition-all hover:bg-[#051024] flex items-center justify-center gap-[10px] mt-[10px]">
                    Register Now <FaArrowRight />
                  </button>
                  
                </form>
                
                <div className="text-center text-[#999999] text-[12px] mt-[20px] flex items-center justify-center gap-[8px]">
                  <FaRegCalendarAlt className="text-[14px]" /> Your information is secure and confidential.
                </div>
              </div>
            </div>

            {/* Questions Box */}
            <div className="bg-[#fdfaf6] p-[30px] rounded-[10px] border border-[#f0e6d3]">
              <h3 className="text-[20px] text-[#051024] font-bold font-family-[var(--)] mb-[15px] relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[30px] after:h-[2px] after:bg-[#c49250]">
                Have Questions?
              </h3>
              <p className="text-[#666666] text-[14px] mb-[20px]">
                Our team is here to help you.
              </p>
              
              <div className="space-y-[15px]">
                <a href="tel:+919876543210" className="flex items-center gap-[12px] text-[#051024] font-medium text-[15px] hover:text-[#c49250] transition-colors">
                  <FaPhoneAlt className="text-[#c49250]" /> +91 98765 43210
                </a>
                <a href="mailto:events@lexandco.com" className="flex items-center gap-[12px] text-[#051024] font-medium text-[15px] hover:text-[#c49250] transition-colors">
                  <FaEnvelope className="text-[#c49250]" /> events@lexandco.com
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
