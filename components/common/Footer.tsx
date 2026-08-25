'use client';

import React from 'react';
import Link from 'next/link';
import { FooterData } from '@/types/templates.types';
import {
  FaShieldAlt, FaUserTie, FaUniversity, FaPaperPlane,
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset,
  FaArrowRight, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaRegStar,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';
import { GiLaurelCrown } from 'react-icons/gi';

const renderBulletIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaShieldAlt':  return <FaShieldAlt />;
    case 'FaUserTie':    return <FaUserTie />;
    case 'FaUniversity': return <FaUniversity />;
    default:             return <FaShieldAlt />;
  }
};

const socialLinks = [
  { icon: <FaLinkedinIn />, href: '#' },
  { icon: <FaFacebookF />,  href: '#' },
  { icon: <FaXTwitter />,   href: '#' },
  { icon: <FaInstagram />,  href: '#' },
  { icon: <FaYoutube />,    href: '#' },
];

export const Footer = ({ data }: { data?: FooterData }) => {
  if (!data) return null;

  return (
    <footer className="bg-[#051024] text-[#a3aab5] text-[13px] relative">

      {/* Top Decorative Divider */}
      <div className="flex items-center justify-center w-full py-5 opacity-80">
        <div className="h-px w-[30vw] max-w-[300px] bg-[#c49250]" />
        <div className="text-[#c49250] text-2xl mx-4"><GoLaw /></div>
        <div className="h-px w-[30vw] max-w-[300px] bg-[#c49250]" />
      </div>

      <div className="w-full max-w-[1250px] mx-auto pt-5 px-6 pb-0">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">

          {/* Column 1: Brand & About */}
          <div className="sm:col-span-2 lg:col-span-3">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 mb-6">
              {data.image ? (
                <img
                  src={'/' + data.image}
                  alt={data.logoText || 'Logo'}
                  className="max-w-[200px] h-auto object-contain"
                />
              ) : (
                <>
                  <div className="w-[45px] h-[55px] bg-transparent rounded-t flex items-center justify-center border border-[#c49250]">
                    <GoLaw className="text-[#c49250] text-[26px]" />
                  </div>
                  <div>
                    <h2 className="text-2xl text-white leading-none tracking-wide font-bold mb-0.5">
                      {data.logoText}
                    </h2>
                    <p className="text-[10px] text-[#c49250] tracking-widest uppercase font-semibold m-0">
                      {data.logoSubText}
                    </p>
                  </div>
                </>
              )}
            </Link>

            <p className="leading-relaxed text-[13px] mb-5">{data.aboutText}</p>

            <div className="h-px w-10 bg-[#c49250] mb-5" />

            <ul className="flex flex-col gap-4 p-0 m-0">
              {data.aboutBullets?.map((bullet, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <span className="text-[#c49250] text-base">{renderBulletIcon(bullet.icon)}</span>
                  <span className="text-[#d1d5db]">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2‑4: Link Groups */}
          {data.linkGroups?.map((group) => (
            <div key={group.id} className="lg:col-span-2">
              <h3 className="text-white text-[14px] font-bold uppercase tracking-widest mb-6">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3.5 p-0 m-0">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      className="text-[#a3aab5] hover:text-[#c49250] transition-colors duration-300 text-[13px]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Newsletter & Contact */}
          <div className="sm:col-span-2 lg:col-span-3">
            <h3 className="text-white text-[14px] font-bold uppercase tracking-widest mb-6">
              {data.newsletterTitle}
            </h3>
            <p className="leading-relaxed mb-5">{data.newsletterText}</p>

            {/* Newsletter Form */}
            <form className="flex mb-7" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="flex-1 min-w-0 bg-[#0b1a36] border border-white/5 px-4 py-3 text-white text-[13px] rounded-l outline-none placeholder-[#6b7280]"
              />
              <button
                type="submit"
                className="flex-shrink-0 w-[46px] flex items-center justify-center bg-[#c49250] text-white border-0 rounded-r cursor-pointer transition-colors duration-300 hover:bg-[#a87b3f]"
              >
                <FaPaperPlane />
              </button>
            </form>

            {/* Contact Info */}
            <ul className="flex flex-col gap-4 p-0 m-0">
              <li className="flex items-start gap-3 leading-relaxed">
                <FaMapMarkerAlt className="text-[#c49250] text-[14px] mt-0.5 flex-shrink-0" />
                <span>
                  {data.contactInfo.address.split('\\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br /></React.Fragment>
                  ))}
                </span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <FaPhoneAlt className="text-[#c49250] text-[14px] mt-0.5 flex-shrink-0" />
                <span>{data.contactInfo.phone}</span>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <FaEnvelope className="text-[#c49250] text-[14px] mt-0.5 flex-shrink-0" />
                <span>{data.contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: CTA + Socials + Awards */}
        <div className="flex flex-col lg:flex-row justify-between items-center border-t border-b border-white/5 py-7 gap-6 text-center lg:text-left">

          {/* CTA Block */}
          <div className="bg-[#0b1a36] border border-white/5 rounded-md px-5 py-4 flex items-center gap-4 w-full lg:w-auto">
            <div className="text-[#c49250] text-2xl"><FaHeadset /></div>
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] text-[#a3aab5]">
                {data.consultation?.title || 'Need Legal Help?'}
              </span>
              <a
                href="#"
                className="text-white text-[14px] font-bold flex items-center gap-2 transition-colors duration-300 hover:text-[#c49250] justify-center lg:justify-start"
              >
                {data.consultation?.buttonText || 'Schedule a Consultation'}
                <FaArrowRight className="text-[12px]" />
              </a>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block w-px h-12 bg-white/10" />
            <div className="flex gap-3">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white text-[15px] transition-all duration-300 hover:bg-[#c49250]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <div className="hidden lg:block w-px h-12 bg-white/10" />
          </div>

          {/* Awards Block */}
          <div className="flex items-center gap-4">
            <div className="relative w-[45px] h-[45px] flex items-center justify-center text-[#c49250]">
              <GiLaurelCrown className="text-[40px] absolute" />
              <FaRegStar className="text-[16px] absolute" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[12px] text-[#d1d5db]">
                {data.awards?.text1 || 'Recognized for Excellence'}
              </span>
              <span className="text-[13px] text-white font-semibold">
                {data.awards?.text2 || 'Award-Winning Legal Team'}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Links */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 gap-4 text-[12px] text-center md:text-left">
          <div className="text-[#a3aab5]">{data.copyright}</div>
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-end">
            {data.bottomLinks?.map((link, idx) => (
              <React.Fragment key={link.label}>
                <a
                  href={link.url}
                  className="text-[#a3aab5] hover:text-[#c49250] transition-colors duration-300"
                >
                  {link.label}
                </a>
                {idx < data.bottomLinks.length - 1 && (
                  <span className="text-white/20">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
