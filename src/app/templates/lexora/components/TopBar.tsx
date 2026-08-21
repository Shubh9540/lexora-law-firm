import React from 'react';
import { TopBarData } from '../../../data/templates.types';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; // Assuming react-icons v4+ for X icon

export const TopBar = ({ data }: { data?: TopBarData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaFacebookF': return <FaFacebookF />;
      case 'FaTwitter': return <FaXTwitter />;
      case 'FaLinkedinIn': return <FaLinkedinIn />;
      case 'FaInstagram': return <FaInstagram />;
      default: return null;
    }
  };

  return (
    <div className="top-bar-container">
      <div className="top-bar-content">
        <div className="top-bar-left">
          <div className="top-bar-item">
            <span className="top-icon-wrapper"><FaClock /></span>
            <span className="top-text">{data.workingHours}</span>
          </div>
          <div className="top-bar-item">
            <span className="top-icon-wrapper"><FaPhoneAlt /></span>
            <span className="top-text">{data.phone}</span>
          </div>
          <div className="top-bar-item">
            <span className="top-icon-wrapper"><FaMapMarkerAlt /></span>
            <span className="top-text">{data.address}</span>
          </div>
        </div>
        <div className="top-bar-right">
          {data.socialLinks.map((link, index) => (
            <a key={index} href={link.url} className="social-icon">
              {renderIcon(link.icon)}
            </a>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
          .top-bar-container {
            background-color: var(--color-primary);
            color: #ffffff;
            font-size: 13px;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255,255,255,0.05);
          }
          .top-bar-content {
            max-width: 1700px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
          }
          .top-bar-left {
            display: flex;
            align-items: center;
            gap: 20px;
          }
          .top-bar-item {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          
          .top-icon-wrapper {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 1px solid var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff; /* White icon inside */
            font-size: 13px;
          }
          
          .top-text {
            color: #ffffff;
            font-size: 12px; /* Smaller text */
            font-weight: 500;
          }
          .top-divider {
            color: rgba(255, 255, 255, 0.2);
            font-size: 16px;
          }
          .top-bar-right {
            display: flex;
            gap: 12px;
          }
          .social-icon {
            color: #ffffff;
            width: 32px;
            height: 32px;
            border: 1px solid var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .social-icon:hover {
            background-color: var(--color-accent);
            color: var(--color-primary);
          }
          @media (max-width: 992px) {
            .top-bar-container {
              display: none;
            }
          }
        `
      }} />
    </div>
  );
};
