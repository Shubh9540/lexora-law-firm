import React from 'react';
import Link from 'next/link';
import { TeamData } from '../../../data/templates.types';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaBalanceScale } from 'react-icons/fa';

export const Team = ({ data, theme = 'dark' }: { data?: TeamData, theme?: 'dark' | 'light' }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaLinkedinIn': return <FaLinkedinIn />;
      case 'FaTwitter': return <FaTwitter />;
      case 'FaEnvelope': return <FaEnvelope />;
      default: return null;
    }
  };

  // Helper to colorize 'Attorneys' in the title
  const renderTitle = (title: string) => {
    return title.split(' ').map((word, i) => {
      if (word.toLowerCase() === 'attorneys') {
        return <span key={i} className="gold-text">{word} </span>;
      }
      return word + ' ';
    });
  };

  return (
    <section className={`team-section ${theme === 'light' ? 'team-theme-light' : ''}`}>
      <div className="team-container">
        <div className="team-header">
          <div className="team-section-badge">
            {data.badge}
          </div>
          
          <h2 className="team-section-title">
            {renderTitle(data.title)}
          </h2>
          
          <div className="team-title-separator">
            <span className="sep-line"></span>
            <FaBalanceScale className="sep-icon" />
            <span className="sep-line"></span>
          </div>
          
          {data.subtitle && <p className="team-section-subtitle">{data.subtitle}</p>}
        </div>

        <div className="team-grid">
          {data.members.map(member => (
            <div key={member.id} className="team-card">
              <Link href={`/team/${member.slug}`} className="team-img-link">
                <div className="team-img">
                  <img src={member.image} alt={member.name} />
                </div>
              </Link>
              <div className="team-info">
                <Link href={`/team/${member.slug}`} className="team-name-link">
                  <h4 className="team-name">{member.name}</h4>
                </Link>
                <p className="team-role">{member.role}</p>
                
                {member.description && (
                  <p className="team-desc">{member.description}</p>
                )}
                
                <div className="team-socials">
                  {member.socials.map((social, index) => (
                    <a key={index} href={social.url} className="social-link" aria-label={social.platform}>
                      {renderIcon(social.icon)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .team-section {
            padding: 40px 0 30px;
            background-color: var(--color-primary);
          }
          
          .team-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .team-header {
            text-align: center;
            margin-bottom: 50px;
          }
          
          .team-section-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
          }
          .team-section-badge::before, .team-section-badge::after {
            content: '';
            display: inline-block;
            width: 30px;
            height: 1px;
            background-color: var(--color-accent);
            margin: 0 15px;
          }
          
          .team-section-title {
            font-size: 42px;
            color: #ffffff !important;
            font-family: var(--font-heading);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 15px;
          }
          .team-section-title .gold-text {
            color: var(--color-accent);
          }
          
          .team-title-separator {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 20px;
          }
          .team-title-separator .sep-line {
            width: 40px;
            height: 1px;
            background-color: var(--color-accent);
            opacity: 0.5;
          }
          .team-title-separator .sep-icon {
            color: var(--color-accent);
            font-size: 16px;
          }
          
          .team-section-subtitle {
            color: #a0aec0;
            font-size: 15px;
            max-width: 550px;
            margin: 0 auto;
            line-height: 1.6;
          }
          
          .team-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
          
          .team-card {
            background-color: #0b1a30; /* Slightly lighter navy for cards */
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .team-card:hover {
            transform: translateY(-5px);
            border-color: rgba(196, 154, 69, 0.4);
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          
          .team-img {
            width: 100%;
            height: 250px;
            overflow: hidden;
          }
          .team-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            transition: transform 0.5s ease;
          }
          .team-card:hover .team-img img {
            transform: scale(1.05);
          }
          
          .team-info {
            padding: 25px 25px;
            text-align: left; /* Text aligns left in reference */
          }
          
          .team-name-link {
            text-decoration: none;
          }
          
          .team-name {
            font-size: 20px;
            color: #ffffff;
            font-weight: 700;
            margin-bottom: 5px;
            font-family: var(--font-primary);
            transition: color 0.3s ease;
          }
          .team-name-link:hover .team-name {
            color: var(--color-accent);
          }
          
          .team-role {
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 500;
            margin-bottom: 15px;
          }
          
          .team-desc {
            color: #a0aec0;
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 25px;
            border-top: 1px solid rgba(255,255,255,0.05);
            padding-top: 15px;
          }
          
          .team-socials {
            display: flex;
            gap: 12px;
          }
          
          .social-link {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #d1d5db;
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .social-link:hover {
            color: #ffffff;
            border-color: var(--color-accent);
            background-color: var(--color-accent);
          }

          @media (max-width: 992px) {
            .team-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 576px) {
            .team-grid {
              grid-template-columns: 1fr;
            }
            .team-section-title {
              font-size: 32px;
            }
          }
          
          /* Light Theme Overrides for /team page */
          .team-theme-light.team-section {
            background-color: #ffffff;
          }
          .team-theme-light .team-section-title {
            color: var(--color-primary) !important;
          }
          .team-theme-light .team-section-subtitle {
            color: var(--color-text);
          }
          .team-theme-light .team-card {
            background-color: #fbf8f2;
            border-color: #f0f0f0;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
          }
          .team-theme-light .team-card:hover {
            border-color: var(--color-accent);
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          }
          .team-theme-light .team-name {
            color: var(--color-primary);
          }
          .team-theme-light .team-desc {
            color: var(--color-text);
            border-top-color: rgba(0,0,0,0.05);
          }
          .team-theme-light .social-link {
            border-color: rgba(0,0,0,0.1);
            color: var(--color-text-light);
          }
          .team-theme-light .social-link:hover {
            background-color: var(--color-accent);
            border-color: var(--color-accent);
            color: #ffffff;
          }
        `
      }} />
    </section>
  );
};

