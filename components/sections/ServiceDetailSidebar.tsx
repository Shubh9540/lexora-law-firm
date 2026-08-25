"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem, ServicesData, GlobalUIData } from '@/types/templates.types';
import { FaSearch, FaDownload, FaPaperPlane, FaBalanceScale, FaSpinner } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

interface SidebarProps {
  currentService: ServiceItem;
  allServices?: ServicesData;
  globalUI?: GlobalUIData;
}

export const ServiceDetailSidebar = ({ currentService, allServices, globalUI }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        const msg = globalUI?.sidebarSearchDemoMessage || 'Search results for: "{query}"\n(This is a template demo. In production, this would navigate to a search page.)';
        alert(msg.replace('{query}', searchQuery));
        setIsSearching(false);
        setSearchQuery('');
      }, 800);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(globalUI?.sidebarContactSuccessMessage || "Thank you! Your message has been sent successfully. We will contact you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="flex flex-col gap-10">
      
      {/* Search Widget */}
      <div className="bg-white rounded-lg p-[30px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#f0f0f0]">
        <h3 className="text-[22px] text-[#051024] m-0 mb-5 font-bold relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#c49250]">
          {globalUI?.sidebarSearchTitle || 'Search'}
        </h3>
        <form className="flex items-center" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder={globalUI?.sidebarSearchPlaceholder || 'Search services...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
            className="grow p-[12px_15px] border border-[#e5e7eb] rounded-[4px_0_0_4px] outline-none text-[14px]"
          />
          <button 
            type="submit" 
            disabled={isSearching}
            className="bg-[#051024] text-white border-none p-[13px_20px] rounded-[0_4px_4px_0] cursor-pointer transition-colors duration-300 hover:not(:disabled):bg-[#c49250] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSearching ? <FaSpinner className="animate-spin" /> : <FaSearch />}
          </button>
        </form>
      </div>

      {/* Services Menu Widget */}
      {allServices && allServices.items && allServices.items.length > 0 && (
        <div className="bg-white rounded-lg p-[30px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#f0f0f0]">
          <h3 className="text-[22px] text-[#051024] m-0 mb-5 font-bold relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#c49250]">
            {globalUI?.sidebarServicesTitle || 'Our Services'}
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            {allServices.items.map((service) => {
              const isActive = currentService.id === service.id;
              return (
                <li key={service.id}>
                  <Link 
                    href={service.linkUrl || '#'}
                    className={`group flex items-center p-[15px_20px] rounded-[4px] no-underline font-medium text-[15px] transition-colors duration-300 ${isActive ? 'bg-[#051024] text-white' : 'bg-[#fbf8f2] text-[#4a4a4a] hover:bg-[#051024] hover:text-white'}`}
                  >
                    <span className={`mr-[15px] flex items-center justify-center w-[28px] h-[28px] rounded-[4px] text-[14px] transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white ${isActive ? 'bg-white/10 text-white' : 'bg-black/5 text-[#c49250]'}`}>
                      <FaBalanceScale />
                    </span>
                    <span className="grow">{service.title}</span>
                    <FaArrowRight className="text-[12px]" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Resources Widget */}
      {currentService.resources && currentService.resources.length > 0 && (
        <div className="bg-white rounded-lg p-[30px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#f0f0f0]">
          <h3 className="text-[22px] text-[#051024] m-0 mb-5 font-bold relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#c49250]">
            {globalUI?.sidebarResourcesTitle || 'Resources'}
          </h3>
          <ul className="list-none p-0 m-0 flex flex-col gap-[15px]">
            {currentService.resources.map((res) => (
              <li key={res.id}>
                <a 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center p-[15px_20px] bg-white border border-[#f0f0f0] rounded-[4px] text-[#4a4a4a] no-underline font-medium text-[15px] transition-colors duration-300 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:border-[#c49250] hover:text-[#c49250]"
                >
                  <span className="mr-[15px] text-[18px]">📄</span>
                  <span className="grow">{res.title}</span>
                  <FaDownload className="text-[14px] text-[#6b7280] group-hover:text-[#c49250]" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Form Widget */}
      <div className="bg-white rounded-lg p-[30px] shadow-[0_5px_20px_rgba(0,0,0,0.03)] border border-[#f0f0f0]">
        <h3 className="text-[22px] text-[#051024] m-0 mb-5 font-bold relative pb-[15px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-[2px] after:bg-[#c49250]">
          {globalUI?.sidebarContactTitle || 'Have Questions?'}
        </h3>
        <p className="text-[#666666] text-[14px] mb-5">
          {globalUI?.sidebarContactDesc || "We're here to help you."}
        </p>
        <form className="flex flex-col gap-[15px]" onSubmit={handleContactSubmit}>
          <input 
            type="text" 
            placeholder={globalUI?.sidebarContactNamePlaceholder || 'Your Name'} 
            required 
            className="w-full p-[12px_15px] border border-[#e5e7eb] rounded-[4px] outline-none text-[14px] bg-[#fcfcfc] focus:border-[#c49250]"
          />
          <input 
            type="email" 
            placeholder={globalUI?.sidebarContactEmailPlaceholder || 'Your Email'} 
            required 
            className="w-full p-[12px_15px] border border-[#e5e7eb] rounded-[4px] outline-none text-[14px] bg-[#fcfcfc] focus:border-[#c49250]"
          />
          <textarea 
            placeholder={globalUI?.sidebarContactMessagePlaceholder || 'Your Message'} 
            rows={4} 
            required
            className="w-full p-[12px_15px] border border-[#e5e7eb] rounded-[4px] outline-none text-[14px] bg-[#fcfcfc] focus:border-[#c49250]"
          ></textarea>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full justify-center bg-[#051024] text-white p-[14px_25px] rounded-[4px] text-[14px] font-semibold no-underline inline-flex items-center gap-2.5 transition-colors duration-300 border-none cursor-pointer hover:bg-[#c49250] disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (globalUI?.sidebarContactSubmittingText || 'SENDING...') : (globalUI?.sidebarContactSubmitText || 'SEND MESSAGE')} 
            {!isSubmitting && <FaPaperPlane />}
          </button>
        </form>
      </div>

    </div>
  );
};
