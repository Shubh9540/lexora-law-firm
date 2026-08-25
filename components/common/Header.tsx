'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeaderData } from '@/types/templates.types';
import { FaBars, FaTimes, FaAngleDown, FaArrowRight } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  return (
    <>
      <header
        className={`sticky top-0 left-0 w-full z-[1000] bg-white transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'shadow-[0_8px_30px_rgba(5,16,36,0.08)] backdrop-blur-sm'
            : 'shadow-[0_4px_15px_rgba(0,0,0,0.03)]'
        }`}
      >
        <div className={`w-full max-w-[1250px] mx-auto px-6 flex items-center justify-start transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            {data.image ? (
              <img
                src={'/' + data.image}
                alt={data.logoText || 'Logo'}
                className="max-h-[44px] sm:max-h-[58px] w-auto object-contain"
              />
            ) : (
              <>
                <div className="w-[52px] h-[62px] bg-[#051024] rounded-t flex items-center justify-center border-2 border-[#c49250]">
                  <GoLaw className="text-white text-3xl" />
                </div>
                <div>
                  <h1 className="text-[26px] text-[#051024] leading-none tracking-wide font-bold mb-0.5">
                    {data.logoText}
                  </h1>
                  <p className="text-[10px] text-[#051024] tracking-widest uppercase font-bold m-0">
                    {data.logoSubText}
                  </p>
                </div>
              </>
            )}
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex ml-auto">
            <ul className="flex items-center gap-5 m-0 p-0">
              {data.navLinks.map((link, index) => (
                <li key={link.label} className="relative group">
                  <a
                    href={link.url}
                    className={`text-[13px] font-semibold text-[#051024] transition-colors duration-300 relative flex items-center gap-1 pb-1 hover:text-[#c49250] ${
                      index === 0
                        ? 'text-[#c49250] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#c49250]'
                        : ''
                    }`}
                  >
                    {link.label}
                    {link.dropdown && <FaAngleDown className="text-[10px] mt-0.5" />}
                  </a>
                  
                  {link.dropdown && link.dropdownItems && (
                    <div className="absolute top-full left-0 mt-4 w-[220px] bg-white shadow-lg rounded-md overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300 z-50">
                      <ul className="py-2 m-0 p-0">
                        {link.dropdownItems.map((dropItem) => (
                          <li key={dropItem.label}>
                            <Link 
                              href={dropItem.url}
                              className="block px-5 py-2.5 text-[13px] font-medium text-[#051024] hover:bg-gray-50 hover:text-[#c49250] transition-colors"
                            >
                              {dropItem.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3 ml-auto xl:ml-8">

            {/* Contact Us Button */}
            <a
              href="/contact"
              className="hidden sm:flex items-center gap-3 pl-5 pr-1.5 py-1.5 bg-white text-[#051024] border border-[#c49250] rounded-full font-semibold text-[12px] whitespace-nowrap transition-all duration-300 hover:bg-gray-50"
            >
              {data.contactButton}
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-[11px] bg-[#c49250] text-white">
                <FaArrowRight />
              </span>
            </a>

            {/* Book Consultation Button */}
            <a
              href="/book-consultation"
              className="flex items-center gap-2 sm:gap-3 px-4 sm:pl-5 sm:pr-1.5 py-2 sm:py-1.5 bg-gradient-to-br from-[#c49250] to-[#ddaf6a] text-white rounded-full font-semibold text-[11px] sm:text-[12px] whitespace-nowrap transition-all duration-300 hover:brightness-105"
            >
              <span className="hidden sm:inline">{data.consultButton}</span>
              <span className="sm:hidden">Consult</span>
              <span className="hidden sm:flex w-7 h-7 rounded-full items-center justify-center text-[11px] bg-[#051024] text-white">
                <FaArrowRight />
              </span>
            </a>

            {/* Mobile Hamburger */}
            <button
              className="flex xl:hidden items-center justify-center text-[22px] text-[#051024] cursor-pointer bg-transparent border-0 ml-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white z-[1001] flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-6 text-[28px] text-[#051024] bg-transparent border-0 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <FaTimes />
        </button>

        <nav>
          <ul className="flex flex-col items-center gap-6 text-center p-0 m-0">
            {data.navLinks.map((link) => (
              <li key={link.label} className="w-full">
                <a
                  href={link.url}
                  className="text-2xl font-semibold text-[#051024] hover:text-[#c49250] transition-colors duration-300 flex items-center justify-center gap-2"
                  onClick={(e) => {
                    if (link.dropdown && link.url === '#') {
                      e.preventDefault();
                      // Toggle mobile dropdown logic could go here, but for now we'll just allow clicks to child links
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                >
                  {link.label}
                  {link.dropdown && <FaAngleDown className="text-[14px]" />}
                </a>
                
                {link.dropdown && link.dropdownItems && (
                  <ul className="mt-4 flex flex-col gap-3 text-center p-0 m-0 bg-gray-50 rounded-lg p-4">
                    {link.dropdownItems.map((dropItem) => (
                      <li key={dropItem.label}>
                        <Link
                          href={dropItem.url}
                          className="text-lg font-medium text-[#051024] hover:text-[#c49250] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
