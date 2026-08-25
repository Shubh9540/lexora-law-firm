import React from 'react';
import { TopBarData } from '@/types/templates.types';
import {
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFacebookF':
        return <FaFacebookF />;

      case 'FaTwitter':
        return <FaXTwitter />;

      case 'FaLinkedinIn':
        return <FaLinkedinIn />;

      case 'FaInstagram':
        return <FaInstagram />;

      default:
        return null;
    }
  };

  return (
    <div 
      style={{ paddingTop: '14px', paddingBottom: '14px' }} 
      className="border-b border-white/[0.05] bg-[#051024] text-[13px] text-white max-[992px]:hidden"
    >
      <div 
        style={{ maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto' }} 
        className="w-full flex items-center justify-between px-5 lg:px-6"
      >
        
        {/* Left Side: Info */}
        <div className="flex items-center gap-4 lg:gap-7">
          {/* Working Hours */}
          <div className="flex items-center gap-3">
            <span className="flex size-[30px] items-center justify-center rounded-full border border-[#c49250] text-[12px] text-[#c49250]">
              <FaClock />
            </span>
            <span className="text-[13px] font-normal text-white/90">
              {data.workingHours}
            </span>
          </div>

          <span className="text-white/20">|</span>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <span className="flex size-[30px] items-center justify-center rounded-full border border-[#c49250] text-[12px] text-[#c49250]">
              <FaPhoneAlt />
            </span>
            <span className="text-[13px] font-normal text-white/90">
              {data.phone}
            </span>
          </div>

          <span className="text-white/20">|</span>

          {/* Address */}
          <div className="flex items-center gap-3">
            <span className="flex size-[30px] items-center justify-center rounded-full border border-[#c49250] text-[12px] text-[#c49250]">
              <FaMapMarkerAlt />
            </span>
            <span className="text-[13px] font-normal text-white/90">
              {data.address}
            </span>
          </div>
        </div>

        {/* Right Side: Social Links */}
        <div className="flex items-center gap-3">
          {data.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="flex size-[30px] items-center justify-center rounded-full border border-white/30 text-[12px] text-white transition-all duration-300 hover:border-[#c49250] hover:bg-[#c49250] hover:text-[#051024]"
            >
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
};