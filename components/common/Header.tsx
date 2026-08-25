"use client";

import React, { useState, useEffect } from 'react';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes, FaAngleDown, FaArrowRight } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go'; // For a more robust scale icon if needed

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  return (
    <>
      <header className={`sticky top-0 left-0 w-full z-[1000] bg-white transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-[0_8px_30px_rgba(5,16,36,0.08)] bg-white/98 backdrop-blur-[10px]' : 'shadow-[0_4px_15px_rgba(0,0,0,0.03)]'}`}>
        <div 
          style={{ maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto' }} 
          className={`w-full px-5 flex justify-start items-center transition-all duration-300 ease-in-out ${isScrolled ? 'py-2' : 'py-3'}`}
        >
          <div className="flex items-center gap-[15px]">
            {data.image ? (
              <img src={"/" + data.image} alt={data.logoText || "Logo"} className="max-h-[58px] w-auto object-contain max-[576px]:max-h-[40px]" />
            ) : (
              <>
                <div className="w-[52px] h-[62px] bg-[#051024] rounded-t-[4px] rounded-b-[50%] relative flex items-center justify-center border-2 border-[#c49250] before:content-[''] before:absolute before:w-[80%] before:h-[80%] before:rounded-full before:border-2 before:border-dashed before:border-t-[#c49250] before:border-x-transparent before:border-b-transparent before:top-[5px] before:opacity-50 before:left-[-10px] before:-rotate-[30deg] after:content-[''] after:absolute after:w-[80%] after:h-[80%] after:rounded-full after:border-2 after:border-dashed after:border-t-[#c49250] after:border-x-transparent after:border-b-transparent after:top-[5px] after:opacity-50 after:right-[-10px] after:rotate-[30deg]">
                  <GoLaw className="text-white text-[30px] z-[2]" />
                </div>
                <div className="">
                  <h1 className="text-[26px] text-[#051024] m-0 mb-[2px] leading-none tracking-[0.5px] font-bold">{data.logoText}</h1>
                  <p className="text-[10px] text-[#051024] m-0 tracking-[1px] uppercase font-bold">{data.logoSubText}</p>
                </div>
              </>
            )}
          </div>
          
          <nav style={{ marginLeft: 'auto' }} className="max-[1200px]:hidden">
            <ul className="flex gap-[20px] m-0 p-0 items-center">
              {data.navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className={`text-[13px] font-semibold text-[#051024] transition-colors duration-300 ease-in-out relative flex items-center gap-[5px] pb-[5px] hover:text-[#c49250] ${index === 0 ? "text-[#c49250] after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#c49250]" : ""}`}
                  >
                    {link.label}
                    {link.dropdown && <FaAngleDown className="text-[10px] mt-[2px]" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Spacer to guarantee 30px gap between navigation links and header actions */}
          <div style={{ width: '30px', flexShrink: 0 }} className="max-[1200px]:hidden" />
          
          <div className="flex items-center gap-3 max-[576px]:ml-auto max-[576px]:gap-2">
            <a href="#" style={{ padding: '6px 6px 6px 20px', gap: '12px' }} className="bg-white text-[#051024] border border-[#c49250] whitespace-nowrap rounded-[30px] font-semibold text-[12px] flex items-center transition-all duration-300 ease-in-out hover:bg-[#f9f9f9] max-[576px]:hidden">
              {data.contactButton} 
              <span className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[12px] bg-[#c49250] text-white"><FaArrowRight /></span>
            </a>
            <a href="#" style={{ padding: '6px 6px 6px 20px', gap: '12px' }} className="bg-gradient-to-br from-[#c49250] to-[#ddaf6a] text-white border-0 whitespace-nowrap rounded-[30px] font-semibold text-[12px] flex items-center transition-all duration-300 ease-in-out hover:brightness-105 max-[576px]:px-3 max-[576px]:py-2 max-[576px]:text-[11px]">
              {data.consultButton}
              <span className="w-[28px] h-[28px] rounded-full flex items-center justify-center text-[12px] bg-[#051024] text-white max-[576px]:hidden"><FaArrowRight /></span>
            </a>
            <button className="hidden max-[1200px]:block bg-none border-0 text-[24px] text-[#051024] cursor-pointer ml-[10px] max-[576px]:ml-[5px] max-[576px]:text-[22px]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-white/98 z-[999] flex items-center justify-center transition-all duration-400 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}`}>
        <nav className="">
          <ul className="flex flex-col gap-5 text-center">
            {data.navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="text-[24px] font-semibold text-[#051024]" onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
