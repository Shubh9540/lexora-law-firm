"use client";
import React from 'react';
import { TeamMember, GlobalUIData } from '@/types/templates.types';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaFacebookF, FaPinterestP, FaBriefcase, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap, FaUserTie } from 'react-icons/fa';

interface TeamDetailContentProps {
  member: TeamMember;
  globalUI?: GlobalUIData;
}

export const TeamDetailContent = ({ member, globalUI }: TeamDetailContentProps) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedinIn': return <FaLinkedinIn />;
      case 'FaTwitter': return <FaTwitter />;
      case 'FaEnvelope': return <FaEnvelope />;
      case 'FaFacebookF': return <FaFacebookF />;
      case 'FaPinterestP': return <FaPinterestP />;
      default: return null;
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-[#fbf8f2]">
      <div className="max-w-[1250px] mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-[50px] items-start">
          
          {/* Left Sidebar */}
          <div className="bg-[#051024] rounded-lg overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.08)] mx-auto max-w-[450px] lg:max-w-none w-full">
            <div className="w-full h-[380px]">
              <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
            </div>
            
            <div className="p-[40px_30px]">
              <div className="text-[#c49250] text-[13px] font-semibold tracking-[2px] uppercase mb-2.5">
                {globalUI?.teamDetailBadge || 'EXPERT LAWYER'}
              </div>
              <h2 className="text-[32px] text-white font-family-[var(--)] font-bold mb-5">
                {member.name}
              </h2>
              <p className="text-[#a0aec0] text-[14px] leading-[1.7] mb-[30px] border-b border-white/10 pb-[30px]">
                {member.detailDescription || member.description}
              </p>
              
              <div className="flex flex-col gap-[25px] mb-[35px]">
                <div className="flex items-start gap-[15px]">
                  <div className="w-10 h-10 rounded-full border border-[#c49250] flex items-center justify-center text-[#c49250] text-[16px] shrink-0"><FaBriefcase /></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-semibold tracking-[1px] mb-[5px] uppercase">{globalUI?.teamDetailExpLabel || 'EXPERIENCE'}</span>
                    <span className="text-[#a0aec0] text-[14px]">{member.experience || globalUI?.teamDetailDefaultExp || "10+ Years of Experience"}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-[15px]">
                  <div className="w-10 h-10 rounded-full border border-[#c49250] flex items-center justify-center text-[#c49250] text-[16px] shrink-0"><FaPhoneAlt /></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-semibold tracking-[1px] mb-[5px] uppercase">{globalUI?.teamDetailPhoneLabel || 'PHONE'}</span>
                    <span className="text-[#a0aec0] text-[14px]">{member.phone || globalUI?.teamDetailDefaultPhone || "+111 875 74885"}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-[15px]">
                  <div className="w-10 h-10 rounded-full border border-[#c49250] flex items-center justify-center text-[#c49250] text-[16px] shrink-0"><FaEnvelope /></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-semibold tracking-[1px] mb-[5px] uppercase">{globalUI?.teamDetailEmailLabel || 'EMAIL'}</span>
                    <span className="text-[#a0aec0] text-[14px]">{member.email || globalUI?.teamDetailDefaultEmail || "info@lexora.com"}</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-[15px]">
                  <div className="w-10 h-10 rounded-full border border-[#c49250] flex items-center justify-center text-[#c49250] text-[16px] shrink-0"><FaMapMarkerAlt /></div>
                  <div className="flex flex-col">
                    <span className="text-white text-[12px] font-semibold tracking-[1px] mb-[5px] uppercase">{globalUI?.teamDetailLocationLabel || 'LOCATION'}</span>
                    <span className="text-[#a0aec0] text-[14px]">{member.location || globalUI?.teamDetailDefaultLocation || "New York, USA"}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-3 border-t border-white/10 pt-[30px]">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.url} className="w-[38px] h-[38px] rounded-full border border-white/15 flex items-center justify-center text-[#a0aec0] text-[14px] transition-all duration-300 hover:bg-[#c49250] hover:border-[#c49250] hover:text-white">
                    {renderIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="flex flex-col gap-[50px] pt-2.5">
            
            {/* Professional Skills */}
            {member.skills && member.skills.length > 0 && (
              <div className="mb-2.5">
                <h3 className="text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] flex items-center gap-[15px]">
                  <FaUserTie className="w-[45px] h-[45px] bg-[#051024] text-white rounded-full flex items-center justify-center p-3 text-[20px]" /> 
                  {globalUI?.teamDetailSkillsTitle || 'Professional Skills'}
                </h3>
                <p className="text-[#4a4a4a] text-[15px] leading-[1.7] mb-[35px]">
                  {member.detailDescription || member.description}
                </p>
                
                <div className="flex flex-col gap-[25px]">
                  {member.skills.map((skill, idx) => (
                    <div key={idx} className="w-full">
                      <div className="flex justify-between mb-2.5 font-semibold text-[#051024] text-[15px]">
                        <span>{skill.name}</span>
                        <span className="bg-[#c49250] text-white py-0.5 px-2 rounded-[4px] text-[12px]">{skill.percent}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#e5e7eb] rounded-[3px] overflow-hidden">
                        <div className="h-full bg-[#051024] rounded-[3px]" style={{ width: `${skill.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Professional Experience */}
            {member.experienceTimeline && member.experienceTimeline.length > 0 && (
              <div className="mb-2.5">
                <h3 className="text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] flex items-center gap-[15px]">
                  <FaBriefcase className="w-[45px] h-[45px] bg-[#051024] text-white rounded-full flex items-center justify-center p-3 text-[20px]" /> 
                  {globalUI?.teamDetailExpTitle || 'Professional Experience'}
                </h3>
                
                <div className="relative pl-5 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[23px] before:w-[2px] before:bg-[#e5e7eb]">
                  {member.experienceTimeline.map((exp, idx) => (
                    <div key={idx} className="relative pl-[45px] mb-10 flex flex-col md:flex-row gap-[5px] md:gap-[30px] last:mb-0">
                      <div className="absolute left-0 top-[5px] w-3 h-3 bg-[#c49250] rounded-full border-2 border-white shadow-[0_0_0_4px_rgba(196,154,69,0.2)] z-[2]"></div>
                      <div className="text-[14px] text-[#c49250] font-semibold min-w-[120px] pt-0.5">{exp.period}</div>
                      <div className="grow">
                        <h4 className="text-[18px] text-[#051024] font-bold mb-[5px]">{exp.role}</h4>
                        <span className="block text-[#d64a2f] text-[14px] font-medium mb-3">{exp.company}</span>
                        <p className="text-[#4a4a4a] text-[14.5px] leading-[1.6]">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Educational Background */}
            {member.education && member.education.length > 0 && (
              <div className="mb-2.5">
                <h3 className="text-[28px] text-[#051024] font-family-[var(--)] font-bold mb-[25px] flex items-center gap-[15px]">
                  <FaGraduationCap className="w-[45px] h-[45px] bg-[#051024] text-white rounded-full flex items-center justify-center p-3 text-[20px]" /> 
                  {globalUI?.teamDetailEduTitle || 'Educational Background'}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
                  {member.education.map((edu, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-[25px] border border-[#f0f0f0] flex items-center gap-5 shadow-[0_5px_15px_rgba(0,0,0,0.02)] transition-all duration-300 hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)] hover:border-[#e2e8f0]">
                      <div className="w-[60px] h-[60px] rounded-lg overflow-hidden bg-[#f8f9fa] flex items-center justify-center shrink-0 p-[5px] border border-[#eee]">
                        <img src={edu.logo} alt={edu.university} className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex flex-col">
                        <h4 className="text-[16px] text-[#051024] font-bold mb-[5px]">{edu.university}</h4>
                        <p className="text-[13px] text-[#4a4a4a] mb-2.5 leading-[1.4]">{edu.certificate}</p>
                        <span className="text-[12px] text-[#d64a2f] font-semibold">
                          {globalUI?.teamDetailPassingYearLabel || '🗓 Passing Year:'} {edu.year}
                        </span>
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
