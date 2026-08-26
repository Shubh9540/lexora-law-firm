import React from 'react';
import Link from 'next/link';
import { TeamData } from '@/types/templates.types';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaBalanceScale } from 'react-icons/fa';

export const Team = ({ data, theme = 'dark' }: { data?: TeamData, theme?: 'dark' | 'light' }) => {
  if (!data) return null;

  const isLight = theme === 'light';
  const highlight = data.highlightText || 'Attorneys';

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedinIn': return <FaLinkedinIn />;
      case 'FaTwitter': return <FaTwitter />;
      case 'FaEnvelope': return <FaEnvelope />;
      default: return null;
    }
  };

  const renderTitle = (title: string) => {
    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) => {
      if (part.toLowerCase() === highlight.toLowerCase()) {
        return <span key={i} className="text-[#c49250]">{part}</span>;
      }
      return part;
    });
  };

  return (
    <section className={`py-5 ${isLight ? 'bg-white' : 'bg-[#051024]'}`}>
      <div className="max-w-[1250px] mx-auto px-5">
        
        <div className="text-center mb-[50px]">
          <div className="flex items-center justify-center text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-[15px]">
            <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
            {data.badge}
            <span className="w-[30px] h-px bg-[#c49250] mx-[15px]"></span>
          </div>
          
          <h2 className={`text-[32px] sm:text-[42px] font-family-[var(--font-heading)] font-bold leading-[1.2] mb-[15px] ${isLight ? 'text-[#051024]' : 'text-white'}`}>
            {renderTitle(data.title)}
          </h2>
          
          <div className="flex items-center justify-center gap-[15px] mb-5">
            <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
            <FaBalanceScale className="text-[#c49250] text-[16px]" />
            <span className="w-[40px] h-px bg-[#c49250] opacity-50"></span>
          </div>
          
          {data.subtitle && (
            <p className={`text-[15px] max-w-[550px] mx-auto leading-[1.6] ${isLight ? 'text-[#4a4a4a]' : 'text-[#a0aec0]'}`}>
              {data.subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {data.members.map(member => (
            <div 
              key={member.id} 
              className={`rounded-lg overflow-hidden transition-all duration-300 border hover:-translate-y-[5px] group ${
                isLight 
                  ? 'bg-[#fbf8f2] border-[#f0f0f0] shadow-[0_5px_20px_rgba(0,0,0,0.03)] hover:border-[#c49250] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)]' 
                  : 'bg-[#0b1a30] border-white/5 hover:border-[#c49a45]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]'
              }`}
            >
              <Link href={`/team/${member.slug}`} className="no-underline block">
                <div className="w-full h-[250px] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
              </Link>
              <div className="p-[25px]">
                <Link href={`/team/${member.slug}`} className="no-underline block group/name">
                  <h4 className={`text-[20px] font-bold mb-1.5 font-family-[var(--font-primary)] transition-colors duration-300 group-hover/name:text-[#c49250] ${isLight ? 'text-[#051024]' : 'text-white'}`}>
                    {member.name}
                  </h4>
                </Link>
                <p className="text-[#c49250] text-[13px] font-medium mb-[15px]">
                  {member.role}
                </p>
                
                {member.description && (
                  <p className={`text-[13px] leading-[1.6] mb-[25px] border-t pt-[15px] ${isLight ? 'text-[#4a4a4a] border-black/5' : 'text-[#a0aec0] border-white/5'}`}>
                    {member.description}
                  </p>
                )}
                
                <div className="flex gap-3">
                  {member.socials.map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      className={`w-[34px] h-[34px] rounded-full flex items-center justify-center text-[14px] transition-all duration-300 hover:bg-[#c49250] hover:border-[#c49250] hover:text-white border ${
                        isLight 
                          ? 'border-black/10 text-[#6b7280]' 
                          : 'border-white/10 text-[#d1d5db]'
                      }`} 
                      aria-label={social.platform}
                    >
                      {renderIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
