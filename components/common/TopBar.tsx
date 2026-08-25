import React from 'react';
import { TopBarData } from '@/types/templates.types';
import { FaClock, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const renderIcon = (iconName: string) => {
  switch (iconName) {
    case 'FaFacebookF':  return <FaFacebookF />;
    case 'FaTwitter':    return <FaXTwitter />;
    case 'FaLinkedinIn': return <FaLinkedinIn />;
    case 'FaInstagram':  return <FaInstagram />;
    default:             return null;
  }
};

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  return (
    <div className="hidden lg:flex w-full bg-[#051024] border-b border-white/5 text-white text-[13px]">
      <div className="w-full max-w-[1250px] mx-auto px-6 flex items-center justify-between py-2.5">

        {/* Left — Info Items */}
        <div className="flex items-center gap-6">

          {/* Working Hours */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-[#c49250] text-[#c49250] text-[11px]">
              <FaClock />
            </span>
            <span className="text-white/80 font-normal">{data.workingHours}</span>
          </div>

          <span className="text-white/15 select-none">|</span>

          {/* Phone */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-[#c49250] text-[#c49250] text-[11px]">
              <FaPhoneAlt />
            </span>
            <span className="text-white/80 font-normal">{data.phone}</span>
          </div>

          <span className="text-white/15 select-none">|</span>

          {/* Address */}
          <div className="flex items-center gap-2.5">
            <span className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-[#c49250] text-[#c49250] text-[11px]">
              <FaMapMarkerAlt />
            </span>
            <span className="text-white/80 font-normal">{data.address}</span>
          </div>

        </div>

        {/* Right — Social Links */}
        <div className="flex items-center gap-2">
          {data.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              className="flex items-center justify-center w-[28px] h-[28px] rounded-full border border-white/25 text-white text-[11px] transition-all duration-300 hover:border-[#c49250] hover:bg-[#c49250] hover:text-[#051024]"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};