"use client";

import React from 'react';
import { FooterData } from '@/types/templates.types';
import { 
  FaShieldAlt, FaUserTie, FaUniversity, FaPaperPlane, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset, 
  FaArrowRight, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaStar, FaRegStar 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { GiLaurelCrown } from 'react-icons/gi';

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  const renderBulletIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaUserTie': return <FaUserTie />;
      case 'FaUniversity': return <FaUniversity />;
      default: return <FaShieldAlt />;
    }
  };

  return (
    <footer className="bg-[#051024] text-[#a3aab5] text-[13px] relative">
      {/* Top Gold Border with Scale */}
      <div className="flex items-center justify-center w-full py-5 opacity-80">
        <div style={{ width: '300px' }} className="h-px bg-[#c49250] max-w-[30vw]"></div>
        <div className="text-[#c49250] text-[24px] mx-[15px]"><GoLaw /></div>
        <div style={{ width: '300px' }} className="h-px bg-[#c49250] max-w-[30vw]"></div>
      </div>

      <div style={{ maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto' }} className="pt-5 px-[30px] pb-0">
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-12 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[576px]:grid-cols-1 gap-10 pb-[50px] max-[576px]:gap-[30px]">
          
          {/* Column 1: Brand & About */}
          <div className="col-span-3 max-[1200px]:col-span-1 max-[768px]:col-span-full">
            <div style={{ marginBottom: '25px' }} className="flex items-center gap-3">
              {data.image ? (
                <img src={"/" + data.image} alt={data.logoText || "Logo"} className="max-w-[220px] h-auto object-contain" />
              ) : (
                <>
                  <div className="w-[45px] h-[55px] bg-transparent rounded-t-[4px] rounded-b-[50%] relative flex items-center justify-center border border-[#c49250] before:content-[''] before:absolute before:w-[80%] before:h-[80%] before:rounded-full before:border before:border-dashed before:border-t-[#c49250] before:border-x-transparent before:border-b-transparent before:top-[5px] before:opacity-50 before:left-[-8px] before:-rotate-[30deg] after:content-[''] after:absolute after:w-[80%] after:h-[80%] after:rounded-full after:border after:border-dashed after:border-t-[#c49250] after:border-x-transparent after:border-b-transparent after:top-[5px] after:opacity-50 after:right-[-8px] after:rotate-[30deg]">
                    <GoLaw className="text-[#c49250] text-[26px] z-[2]" />
                  </div>
                  <div className="">
                    <h1 className="text-[24px] text-white m-0 mb-[2px] leading-none tracking-[1px] font-bold">{data.logoText}</h1>
                    <p className="text-[10px] text-[#c49250] m-0 tracking-[1.5px] uppercase font-semibold">{data.logoSubText}</p>
                  </div>
                </>
              )}
            </div>
            <p style={{ marginBottom: '20px' }} className="leading-[1.8] text-[13px]">{data.aboutText}</p>
            <div style={{ marginBottom: '25px' }} className="h-px w-10 bg-[#c49250]"></div>
            <ul style={{ gap: '15px' }} className="list-none p-0 m-0 flex flex-col">
              {data.aboutBullets?.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#c49250] text-[16px]">{renderBulletIcon(bullet.icon)}</span>
                  <span className="text-[#d1d5db]">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2, 3, 4: Link Groups */}
          {data.linkGroups?.map((group) => (
            <div key={group.id} className="col-span-2 max-[1200px]:col-span-1">
              <h3 style={{ marginBottom: '25px' }} className="text-white text-[14px] font-bold uppercase tracking-[1px]">{group.title}</h3>
              <ul style={{ gap: '15px' }} className="list-none p-0 m-0 flex flex-col max-[576px]:grid max-[576px]:grid-cols-2 max-[576px]:gap-3">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} className="text-[#a3aab5] hover:text-[#c49250] transition-colors duration-300 ease-in-out text-[13px]">{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Newsletter & Contact */}
          <div className="col-span-3 max-[1200px]:col-span-full max-[1200px]:max-w-[500px] max-[576px]:col-span-1">
            <h3 style={{ marginBottom: '25px' }} className="text-white text-[14px] font-bold uppercase tracking-[1px]">{data.newsletterTitle}</h3>
            <p style={{ marginBottom: '20px' }} className="leading-[1.6]">{data.newsletterText}</p>
            <form style={{ marginBottom: '30px' }} className="flex" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required className="flex-grow bg-[#0b1a36] border border-white/5 px-[15px] py-3 text-white text-[13px] rounded-l-[4px] outline-none placeholder-[#6b7280]" />
              <button type="submit" style={{ flexShrink: 0, width: '46px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="bg-[#c49250] text-white border-0 rounded-r-[4px] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#a87b3f]"><FaPaperPlane /></button>
            </form>
            
            <ul style={{ gap: '15px' }} className="list-none p-0 m-0 flex flex-col">
              <li className="flex items-start gap-3 leading-[1.5]">
                <FaMapMarkerAlt className="text-[#c49250] text-[14px] mt-[3px]" />
                <span>
                  {data.contactInfo.address.split('\\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 leading-[1.5]">
                <FaPhoneAlt className="text-[#c49250] text-[14px] mt-[3px]" />
                <span>{data.contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 leading-[1.5]">
                <FaEnvelope className="text-[#c49250] text-[14px] mt-[3px]" />
                <span>{data.contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: CTA, Socials, Awards */}
        <div className="flex justify-between items-center border-t border-b border-white/5 py-[30px] px-0 flex-wrap gap-5 max-[992px]:flex-col max-[992px]:items-center max-[992px]:text-center">
          <div className="bg-[#0b1a36] border border-white/5 rounded-[6px] px-5 py-[15px] flex items-center gap-[15px]">
            <div className="text-[#c49250] text-[24px]"><FaHeadset /></div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-[#a3aab5]">{data.consultation?.title || "Need Legal Help?"}</span>
              <a href="#" className="text-white text-[14px] font-bold flex items-center gap-2 transition-colors duration-300 ease-in-out hover:text-[#c49250]">
                {data.consultation?.buttonText || "Schedule a Consultation"} <FaArrowRight className="text-[12px]" />
              </a>
            </div>
          </div>

          {/* Desktop socials group: anchors dividers and social icons closely together */}
          <div className="flex items-center gap-[40px] max-[992px]:hidden">
            <div className="w-px h-[50px] bg-white/10"></div>
            <div className="flex gap-[15px]">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaLinkedinIn /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaFacebookF /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaXTwitter /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaInstagram /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaYoutube /></a>
            </div>
            <div className="w-px h-[50px] bg-white/10"></div>
          </div>

          {/* Mobile socials: fallback without dividers for screens < 992px */}
          <div className="hidden max-[992px]:flex gap-[15px]">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaLinkedinIn /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaFacebookF /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaXTwitter /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaInstagram /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 ease-in-out hover:bg-[#c49250]"><FaYoutube /></a>
          </div>

          <div className="flex items-center gap-[15px]">
            <div className="relative w-[45px] h-[45px] flex items-center justify-center text-[#c49250]">
              <GiLaurelCrown className="text-[40px] absolute" />
              <FaRegStar className="text-[16px] absolute mt-[-2px]" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-[#d1d5db]">{data.awards?.text1 || "Recognized for Excellence"}</span>
              <span className="text-[13px] text-white font-semibold">{data.awards?.text2 || "Award-Winning Legal Team"}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="flex justify-between items-center py-[25px] px-0 text-[12px] flex-wrap gap-[15px] max-[768px]:flex-col max-[768px]:text-center">
          <div className="text-[#a3aab5]">{data.copyright}</div>
          <div className="flex items-center gap-3 max-[768px]:justify-center max-[768px]:flex-wrap">
            {data.bottomLinks?.map((link, idx) => (
              <React.Fragment key={idx}>
                <a href={link.url} className="text-[#a3aab5] hover:text-[#c49250] transition-colors duration-300 ease-in-out">{link.label}</a>
                {idx < data.bottomLinks.length - 1 && <span className="text-white/20">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
