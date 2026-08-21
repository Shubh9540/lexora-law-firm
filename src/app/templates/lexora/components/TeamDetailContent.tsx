"use client";
import React from 'react';
import { TeamMember } from '../../../data/templates.types';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaFacebookF, FaPinterestP, FaBriefcase, FaPhoneAlt, FaMapMarkerAlt, FaGraduationCap, FaUserTie } from 'react-icons/fa';

interface TeamDetailContentProps {
  member: TeamMember;
}

export const TeamDetailContent = ({ member }: TeamDetailContentProps) => {
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
    <section className="team-detail-section">
      <div className="team-detail-container">
        <div className="team-detail-grid">
          
          {/* Left Sidebar */}
          <div className="team-sidebar">
            <div className="team-sidebar-img">
              <img src={member.image} alt={member.name} />
            </div>
            
            <div className="team-sidebar-info">
              <div className="team-badge">EXPERT LAWYER</div>
              <h2 className="team-sidebar-name">{member.name}</h2>
              <p className="team-sidebar-desc">{member.detailDescription || member.description}</p>
              
              <div className="team-contact-list">
                <div className="contact-item">
                  <div className="contact-icon"><FaBriefcase /></div>
                  <div className="contact-text">
                    <span className="contact-label">EXPERIENCE</span>
                    <span className="contact-value">{member.experience || "10+ Years of Experience"}</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FaPhoneAlt /></div>
                  <div className="contact-text">
                    <span className="contact-label">PHONE</span>
                    <span className="contact-value">{member.phone || "+111 875 74885"}</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FaEnvelope /></div>
                  <div className="contact-text">
                    <span className="contact-label">EMAIL</span>
                    <span className="contact-value">{member.email || "info@lexora.com"}</span>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon"><FaMapMarkerAlt /></div>
                  <div className="contact-text">
                    <span className="contact-label">LOCATION</span>
                    <span className="contact-value">{member.location || "New York, USA"}</span>
                  </div>
                </div>
              </div>
              
              <div className="team-sidebar-socials">
                {member.socials.map((social, idx) => (
                  <a key={idx} href={social.url} className="social-circle">
                    {renderIcon(social.icon)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="team-content">
            
            {/* Professional Skills */}
            {member.skills && member.skills.length > 0 && (
              <div className="content-block">
                <h3 className="block-title">
                  <FaUserTie className="title-icon" /> Professional Skills
                </h3>
                <p className="block-desc">
                  {member.detailDescription || member.description}
                </p>
                
                <div className="skills-list">
                  {member.skills.map((skill, idx) => (
                    <div key={idx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-percent">{skill.percent}%</span>
                      </div>
                      <div className="skill-bar-bg">
                        <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Professional Experience */}
            {member.experienceTimeline && member.experienceTimeline.length > 0 && (
              <div className="content-block">
                <h3 className="block-title">
                  <FaBriefcase className="title-icon" /> Professional Experience
                </h3>
                
                <div className="experience-timeline">
                  {member.experienceTimeline.map((exp, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-date">{exp.period}</div>
                      <div className="timeline-content">
                        <h4 className="timeline-role">{exp.role}</h4>
                        <span className="timeline-company">{exp.company}</span>
                        <p className="timeline-desc">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Educational Background */}
            {member.education && member.education.length > 0 && (
              <div className="content-block">
                <h3 className="block-title">
                  <FaGraduationCap className="title-icon" /> Educational Background
                </h3>
                
                <div className="education-grid">
                  {member.education.map((edu, idx) => (
                    <div key={idx} className="education-card">
                      <div className="edu-logo">
                        <img src={edu.logo} alt={edu.university} />
                      </div>
                      <div className="edu-info">
                        <h4 className="edu-uni">{edu.university}</h4>
                        <p className="edu-cert">{edu.certificate}</p>
                        <span className="edu-year">🗓 Passing Year: {edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .team-detail-section {
            padding: 80px 0;
            background-color: #fbf8f2;
            min-height: 100vh;
          }
          .team-detail-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }
          .team-detail-grid {
            display: grid;
            grid-template-columns: 350px 1fr;
            gap: 50px;
            align-items: start;
          }
          
          /* Left Sidebar */
          .team-sidebar {
            background-color: var(--color-primary);
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 15px 40px rgba(0,0,0,0.08);
          }
          .team-sidebar-img {
            width: 100%;
            height: 380px;
          }
          .team-sidebar-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
          }
          .team-sidebar-info {
            padding: 40px 30px;
          }
          .team-badge {
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
          .team-sidebar-name {
            font-size: 32px;
            color: #ffffff;
            font-family: var(--font-heading);
            font-weight: 700;
            margin-bottom: 20px;
          }
          .team-sidebar-desc {
            color: #a0aec0;
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 30px;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding-bottom: 30px;
          }
          
          .team-contact-list {
            display: flex;
            flex-direction: column;
            gap: 25px;
            margin-bottom: 35px;
          }
          .contact-item {
            display: flex;
            align-items: flex-start;
            gap: 15px;
          }
          .contact-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            border: 1px solid var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 16px;
            flex-shrink: 0;
          }
          .contact-text {
            display: flex;
            flex-direction: column;
          }
          .contact-label {
            color: #ffffff;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            margin-bottom: 5px;
          }
          .contact-value {
            color: #a0aec0;
            font-size: 14px;
          }
          
          .team-sidebar-socials {
            display: flex;
            gap: 12px;
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 30px;
          }
          .social-circle {
            width: 38px;
            height: 38px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.15);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #a0aec0;
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .social-circle:hover {
            background-color: var(--color-accent);
            border-color: var(--color-accent);
            color: #ffffff;
          }
          
          /* Right Content */
          .team-content {
            display: flex;
            flex-direction: column;
            gap: 50px;
            padding-top: 10px;
          }
          .content-block {
            margin-bottom: 10px;
          }
          .block-title {
            font-size: 28px;
            color: var(--color-primary);
            font-family: var(--font-heading);
            font-weight: 700;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .title-icon {
            width: 45px;
            height: 45px;
            background-color: var(--color-primary);
            color: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            font-size: 20px;
          }
          .block-desc {
            color: var(--color-text);
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 35px;
          }
          
          /* Skills */
          .skills-list {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }
          .skill-item {
            width: 100%;
          }
          .skill-info {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-weight: 600;
            color: var(--color-primary);
            font-size: 15px;
          }
          .skill-percent {
            background-color: var(--color-accent);
            color: #fff;
            padding: 2px 8px;
            border-radius: 4px;
            font-size: 12px;
          }
          .skill-bar-bg {
            width: 100%;
            height: 6px;
            background-color: #e5e7eb;
            border-radius: 3px;
            overflow: hidden;
          }
          .skill-bar-fill {
            height: 100%;
            background-color: var(--color-primary);
            border-radius: 3px;
          }
          
          /* Experience Timeline */
          .experience-timeline {
            position: relative;
            padding-left: 20px;
          }
          .experience-timeline::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 23px;
            width: 2px;
            background-color: #e5e7eb;
          }
          .timeline-item {
            position: relative;
            padding-left: 45px;
            margin-bottom: 40px;
            display: flex;
            gap: 30px;
          }
          .timeline-item:last-child {
            margin-bottom: 0;
          }
          .timeline-dot {
            position: absolute;
            left: 0;
            top: 5px;
            width: 12px;
            height: 12px;
            background-color: var(--color-accent);
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 0 0 4px rgba(196, 154, 69, 0.2);
            z-index: 2;
          }
          .timeline-date {
            font-size: 14px;
            color: var(--color-accent);
            font-weight: 600;
            min-width: 120px;
            padding-top: 2px;
          }
          .timeline-content {
            flex-grow: 1;
          }
          .timeline-role {
            font-size: 18px;
            color: var(--color-primary);
            font-weight: 700;
            margin-bottom: 5px;
          }
          .timeline-company {
            display: block;
            color: #d64a2f; /* Dark orange/red brand color */
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;
          }
          .timeline-desc {
            color: var(--color-text);
            font-size: 14.5px;
            line-height: 1.6;
          }
          
          /* Education */
          .education-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }
          .education-card {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 25px;
            border: 1px solid #f0f0f0;
            display: flex;
            align-items: center;
            gap: 20px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.02);
            transition: all 0.3s ease;
          }
          .education-card:hover {
            box-shadow: 0 10px 25px rgba(0,0,0,0.06);
            border-color: #e2e8f0;
          }
          .edu-logo {
            width: 60px;
            height: 60px;
            border-radius: 8px;
            overflow: hidden;
            background-color: #f8f9fa;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            padding: 5px;
            border: 1px solid #eee;
          }
          .edu-logo img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
          }
          .edu-info {
            display: flex;
            flex-direction: column;
          }
          .edu-uni {
            font-size: 16px;
            color: var(--color-primary);
            font-weight: 700;
            margin-bottom: 5px;
          }
          .edu-cert {
            font-size: 13px;
            color: var(--color-text);
            margin-bottom: 10px;
            line-height: 1.4;
          }
          .edu-year {
            font-size: 12px;
            color: #d64a2f;
            font-weight: 600;
          }
          
          @media (max-width: 992px) {
            .team-detail-grid {
              grid-template-columns: 1fr;
            }
            .team-sidebar {
              max-width: 450px;
              margin: 0 auto;
            }
          }
          @media (max-width: 768px) {
            .education-grid {
              grid-template-columns: 1fr;
            }
            .timeline-item {
              flex-direction: column;
              gap: 5px;
            }
          }
        `
      }} />
    </section>
  );
};
