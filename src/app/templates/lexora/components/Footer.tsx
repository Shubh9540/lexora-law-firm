"use client";

import React from 'react';
import { FooterData } from '../../../data/templates.types';
import { 
  FaShieldAlt, FaUserTie, FaUniversity, FaPaperPlane, 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaHeadset, 
  FaArrowRight, FaLinkedinIn, FaFacebookF, FaInstagram, FaYoutube, FaStar 
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { GoLaw } from 'react-icons/go';

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
    <footer className="footer-section">
      {/* Top Gold Border with Scale */}
      <div className="footer-top-border">
        <div className="border-line"></div>
        <div className="border-icon"><GoLaw /></div>
        <div className="border-line"></div>
      </div>

      <div className="footer-container">
        {/* Main 5-Column Grid */}
        <div className="footer-main">
          
          {/* Column 1: Brand & About */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              {data.image ? (
                <img src={"/" + data.image} alt={data.logoText || "Logo"} className="footer-logo-img" />
              ) : (
                <>
                  <div className="logo-icon-wrapper">
                    <GoLaw className="logo-scale" />
                  </div>
                  <div className="logo-text">
                    <h1>{data.logoText}</h1>
                    <p>{data.logoSubText}</p>
                  </div>
                </>
              )}
            </div>
            <p className="footer-about-text">{data.aboutText}</p>
            <div className="footer-sep"></div>
            <ul className="footer-bullets">
              {data.aboutBullets?.map((bullet, idx) => (
                <li key={idx}>
                  <span className="bullet-icon">{renderBulletIcon(bullet.icon)}</span>
                  <span className="bullet-text">{bullet.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Columns 2, 3, 4: Link Groups */}
          {data.linkGroups?.map((group) => (
            <div key={group.id} className="footer-col links-col">
              <h3 className="footer-col-title">{group.title}</h3>
              <ul className="footer-links">
                {group.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5: Newsletter & Contact */}
          <div className="footer-col newsletter-col">
            <h3 className="footer-col-title">{data.newsletterTitle}</h3>
            <p className="newsletter-text">{data.newsletterText}</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email address" required />
              <button type="submit"><FaPaperPlane /></button>
            </form>
            
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                  {data.contactInfo.address.split('\\n').map((line, i) => (
                    <React.Fragment key={i}>{line}<br/></React.Fragment>
                  ))}
                </span>
              </li>
              <li>
                <FaPhoneAlt className="contact-icon" />
                <span>{data.contactInfo.phone}</span>
              </li>
              <li>
                <FaEnvelope className="contact-icon" />
                <span>{data.contactInfo.email}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Middle Bar: CTA, Socials, Awards */}
        <div className="footer-middle">
          <div className="middle-cta">
            <div className="cta-icon"><FaHeadset /></div>
            <div className="cta-content">
              <span className="cta-small">{data.consultation?.title || "Need Legal Help?"}</span>
              <a href="#" className="cta-link">
                {data.consultation?.buttonText || "Schedule a Consultation"} <FaArrowRight className="arrow" />
              </a>
            </div>
          </div>

          <div className="middle-divider"></div>

          <div className="middle-socials">
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>

          <div className="middle-divider"></div>

          <div className="middle-awards">
            <div className="award-icon-wrapper">
              <FaStar className="star" />
            </div>
            <div className="award-text">
              <span className="award-top">{data.awards?.text1 || "Recognized for Excellence"}</span>
              <span className="award-bottom">{data.awards?.text2 || "Award-Winning Legal Team"}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="footer-bottom">
          <div className="copyright">{data.copyright}</div>
          <div className="bottom-links">
            {data.bottomLinks?.map((link, idx) => (
              <React.Fragment key={idx}>
                <a href={link.url}>{link.label}</a>
                {idx < data.bottomLinks.length - 1 && <span className="sep">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .footer-section {
            background-color: #051024;
            color: #a3aab5;
            font-size: 13px;
            font-family: var(--font-primary);
            position: relative;
          }
          
          /* Top Border */
          .footer-top-border {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            padding: 20px 0;
            opacity: 0.8;
          }
          .border-line {
            height: 1px;
            background-color: var(--color-accent);
            width: 300px;
            max-width: 30vw;
          }
          .border-icon {
            color: var(--color-accent);
            font-size: 24px;
            margin: 0 15px;
          }
          
          .footer-container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px 30px 0;
          }
          
          /* Main Grid */
          .footer-main {
            display: grid;
            grid-template-columns: 2.2fr 1fr 1fr 1fr 2fr;
            gap: 40px;
            padding-bottom: 50px;
          }
          
          .footer-col-title {
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 25px;
            font-family: var(--font-primary);
          }
          
          /* Column 1: Brand */
          .footer-logo {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-bottom: 25px;
          }
          .footer-logo-img {
            max-width: 220px;
            height: auto;
            object-fit: contain;
          }
          .logo-icon-wrapper {
            width: 45px;
            height: 55px;
            background-color: transparent;
            border-radius: 4px 4px 50% 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid var(--color-accent);
          }
          .logo-icon-wrapper::before, .logo-icon-wrapper::after {
            content: '';
            position: absolute;
            width: 80%;
            height: 80%;
            border-radius: 50%;
            border: 1px dashed var(--color-accent);
            border-color: var(--color-accent) transparent transparent transparent;
            top: 5px;
            opacity: 0.5;
          }
          .logo-icon-wrapper::before { left: -8px; transform: rotate(-30deg); }
          .logo-icon-wrapper::after { right: -8px; transform: rotate(30deg); }
          
          .logo-scale {
            color: var(--color-accent);
            font-size: 26px;
            z-index: 2;
          }
          .logo-text h1 {
            font-size: 24px;
            color: #ffffff;
            margin: 0 0 2px 0;
            line-height: 1;
            letter-spacing: 1px;
            font-family: var(--font-heading);
          }
          .logo-text p {
            font-size: 10px;
            color: var(--color-accent);
            margin: 0;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            font-weight: 600;
          }
          
          .footer-about-text {
            line-height: 1.8;
            margin-bottom: 20px;
            font-size: 13px;
          }
          
          .footer-sep {
            height: 1px;
            width: 40px;
            background-color: var(--color-accent);
            margin-bottom: 25px;
          }
          
          .footer-bullets {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .footer-bullets li {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .bullet-icon {
            color: var(--color-accent);
            font-size: 16px;
          }
          .bullet-text {
            color: #d1d5db;
          }
          
          /* Columns 2, 3, 4: Links */
          .footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .footer-links a {
            color: #a3aab5;
            text-decoration: none;
            transition: color 0.3s ease;
            font-size: 13px;
          }
          .footer-links a:hover {
            color: var(--color-accent);
          }
          
          /* Column 5: Newsletter & Contact */
          .newsletter-text {
            line-height: 1.6;
            margin-bottom: 20px;
          }
          .newsletter-form {
            display: flex;
            margin-bottom: 30px;
          }
          .newsletter-form input {
            flex-grow: 1;
            background-color: #0b1a36;
            border: 1px solid rgba(255, 255, 255, 0.05);
            padding: 12px 15px;
            color: #ffffff;
            font-size: 13px;
            border-radius: 4px 0 0 4px;
            outline: none;
          }
          .newsletter-form input::placeholder {
            color: #6b7280;
          }
          .newsletter-form button {
            background-color: #c49250;
            color: #ffffff;
            border: none;
            padding: 0 15px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .newsletter-form button:hover {
            background-color: #a87b3f;
          }
          
          .footer-contact {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .footer-contact li {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            line-height: 1.5;
          }
          .contact-icon {
            color: var(--color-accent);
            font-size: 14px;
            margin-top: 3px;
          }
          
          /* Middle Bar */
          .footer-middle {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding: 30px 0;
            flex-wrap: wrap;
            gap: 20px;
          }
          
          .middle-divider {
            width: 1px;
            height: 50px;
            background-color: rgba(255, 255, 255, 0.1);
          }
          
          .middle-cta {
            background-color: #0b1a36;
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 6px;
            padding: 15px 20px;
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .cta-icon {
            color: var(--color-accent);
            font-size: 24px;
          }
          .cta-content {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .cta-small {
            font-size: 11px;
            color: #a3aab5;
          }
          .cta-link {
            color: #ffffff;
            font-size: 14px;
            font-weight: 700;
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            transition: color 0.3s ease;
          }
          .cta-link:hover {
            color: var(--color-accent);
          }
          .arrow { font-size: 12px; }
          
          .middle-socials {
            display: flex;
            gap: 15px;
          }
          .middle-socials a {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.05);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 15px;
            transition: all 0.3s ease;
          }
          .middle-socials a:hover {
            background-color: var(--color-accent);
          }
          
          .middle-awards {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          .award-icon-wrapper {
            width: 45px;
            height: 45px;
            border: 2px dashed var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 18px;
          }
          .award-text {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
          .award-top {
            font-size: 12px;
            color: #d1d5db;
          }
          .award-bottom {
            font-size: 13px;
            color: #ffffff;
            font-weight: 600;
          }
          
          /* Bottom Bar */
          .footer-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 25px 0;
            font-size: 12px;
            flex-wrap: wrap;
            gap: 15px;
          }
          .bottom-links {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .bottom-links a {
            color: #a3aab5;
            transition: color 0.3s ease;
          }
          .bottom-links a:hover {
            color: var(--color-accent);
          }
          .sep {
            color: rgba(255, 255, 255, 0.2);
          }
          
          /* Responsive */
          @media (max-width: 1200px) {
            .footer-main {
              grid-template-columns: repeat(3, 1fr);
            }
            .newsletter-col {
              grid-column: 1 / -1;
              max-width: 500px;
            }
          }
          @media (max-width: 992px) {
            .footer-middle {
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .middle-divider {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .footer-main {
              grid-template-columns: repeat(2, 1fr);
            }
            .brand-col {
              grid-column: 1 / -1;
            }
            .footer-bottom {
              flex-direction: column;
              text-align: center;
            }
            .bottom-links {
              justify-content: center;
              flex-wrap: wrap;
            }
          }
          @media (max-width: 576px) {
            .footer-main {
              grid-template-columns: 1fr;
              gap: 30px;
            }
            .newsletter-col {
              grid-column: 1;
            }
            .footer-col-title {
              margin-bottom: 15px;
            }
            .footer-links {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 12px;
            }
          }
        `
      }} />
    </footer>
  );
};
