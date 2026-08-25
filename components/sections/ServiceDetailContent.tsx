"use client";
import React from 'react';
import Link from 'next/link';
import { ServiceItem } from '@/types/templates.types';
import { 
  FaShieldAlt, FaHeartbeat, FaChartLine, FaPhoneAlt, FaArrowRight, FaBalanceScale 
} from 'react-icons/fa';
import { 
  FaBriefcase, FaFileContract, FaGavel, FaHandshake, FaHeadset, FaUsers, FaCar, FaBuilding, FaFileSignature, FaSearch
} from 'react-icons/fa';

export const ServiceDetailContent = ({ currentService }: { currentService: ServiceItem }) => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaGavel': return <FaGavel />;
      case 'FaHandshake': return <FaHandshake />;
      case 'FaHeadset': return <FaHeadset />;
      case 'FaUsers': return <FaUsers />;
      case 'FaCar': return <FaCar />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaFileSignature': return <FaFileSignature />;
      case 'FaSearch': return <FaSearch />;
      default: return <FaBriefcase />;
    }
  };

  return (
    <div className="service-detail-content">
      
      {/* Hero Image Section */}
      <div className="service-hero-box">
        <div className="hero-bg-image">
          <img src={currentService.image || '/about/habout2.png'} alt={currentService.title} />
        </div>
        <div className="hero-overlay-content">
          <div className="tagline">
            <span className="icon"><FaBriefcase /></span>
            <span>OUR SERVICES</span>
          </div>
          <h1 className="hero-title">{currentService.title}</h1>
          <p className="hero-desc">{currentService.description}</p>
          <div className="hero-divider"></div>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon"><FaShieldAlt /></div>
              <span>Protect Your<br/>Business</span>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <div className="feature-icon"><FaHandshake /></div>
              <span>Reduce Legal<br/>Risks</span>
            </div>
            <div className="feature-divider"></div>
            <div className="feature-item">
              <div className="feature-icon"><FaChartLine /></div>
              <span>Drive Sustainable<br/>Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="overview-section">
        <div className="tagline-text">Overview</div>
        <h2 className="section-title">{currentService.overviewTitle || `Strategic Legal Support for ${currentService.title}`}</h2>
        <div className="overview-text">
          {currentService.overviewText ? (
            currentService.overviewText.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>We provide strategic legal solutions to help businesses start, grow, and succeed with confidence.</p>
          )}
        </div>
      </div>

      {/* Areas We Cover */}
      {currentService.areasCovered && currentService.areasCovered.length > 0 && (
        <div className="areas-section">
          <h2 className="section-title">Areas We Cover</h2>
          <div className="areas-divider"></div>
          <div className="areas-grid">
            {currentService.areasCovered.map((area) => (
              <div key={area.id} className="area-card">
                <div className="area-icon">
                  {renderIcon(area.icon)}
                </div>
                <div className="area-content">
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA Banner */}
      {currentService.contactBanner && (
        <div className="contact-banner">
          <div className="banner-bg"></div>
          <div className="banner-inner">
            <div className="banner-content">
              <div className="banner-icon-scale"><FaBalanceScale /></div>
              <h2>{currentService.contactBanner.title}</h2>
              <p>{currentService.contactBanner.description}</p>
              <Link href={currentService.contactBanner.buttonUrl} className="primary-btn-gold">
                {currentService.contactBanner.buttonText} <FaArrowRight className="btn-arrow" />
              </Link>
            </div>
            
            <div className="banner-divider"></div>
            
            <div className="banner-phone">
              <div className="phone-icon-circle">
                <FaPhoneAlt />
              </div>
              <div className="phone-text">
                <span className="small-text">Call Us Anytime</span>
                <span className="number">{currentService.contactBanner.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
          .service-detail-content {
            display: flex;
            flex-direction: column;
            gap: 50px;
          }
          
          /* Hero Box */
          .service-hero-box {
            position: relative;
            border-radius: 12px;
            overflow: hidden;
            min-height: 450px;
            display: flex;
            align-items: stretch;
          }
          .hero-bg-image {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 0;
          }
          .hero-bg-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: right center;
          }
          .hero-overlay-content {
            position: relative;
            z-index: 1;
            background-color: var(--color-primary);
            color: #ffffff;
            width: 65%;
            padding: 50px 80px 50px 40px;
            clip-path: polygon(0 0, 100% 0, 82% 100%, 0% 100%);
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .hero-overlay-content .tagline {
            display: flex;
            align-items: center;
            gap: 15px;
            color: var(--color-accent);
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .hero-overlay-content .tagline .icon {
            width: 40px;
            height: 40px;
            border: 1px solid var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
          }
          .hero-overlay-content .hero-title {
            font-size: 46px;
            font-family: var(--font-primary);
            margin: 0 0 15px 0;
            font-weight: 700;
          }
          .hero-overlay-content .hero-desc {
            color: #d1d5db;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 0;
            max-width: 90%;
          }
          
          .hero-divider {
            width: 45px;
            height: 2px;
            background-color: var(--color-accent);
            margin: 25px 0 35px 0;
          }
          
          .hero-features {
            display: flex;
            align-items: flex-start;
            gap: 25px;
          }
          .feature-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 12px;
          }
          .feature-divider {
            width: 1px;
            height: 40px;
            background-color: rgba(255,255,255,0.15);
            margin-top: 10px;
          }
          .feature-icon {
            color: var(--color-accent);
            font-size: 28px;
          }
          .feature-item span {
            font-size: 12px;
            font-weight: 500;
            color: #e5e7eb;
            line-height: 1.4;
          }
          
          /* Overview */
          .tagline-text {
            color: var(--color-accent);
            font-size: 14px;
            font-weight: 600;
            margin-bottom: 10px;
          }
          .section-title {
            font-size: 32px;
            font-family: var(--font-primary);
            color: var(--color-primary);
            margin: 0 0 20px 0;
            font-weight: 700;
          }
          .overview-text p {
            color: #555555;
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 20px;
          }
          
          /* Areas */
          .areas-section {
            background-color: #fbfbfb;
            border-radius: 12px;
            padding: 40px 50px;
          }
          .areas-section .section-title {
            font-size: 24px;
            margin-bottom: 10px;
          }
          .areas-divider {
            width: 45px;
            height: 2px;
            background-color: var(--color-accent);
            margin-bottom: 35px;
          }
          
          .areas-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0;
          }
          .area-card {
            display: flex;
            gap: 15px;
            padding: 30px 25px;
            border-bottom: 1px solid #ebebeb;
            border-right: 1px solid #ebebeb;
            background-color: transparent;
            transition: all 0.3s ease;
          }
          .area-card:nth-child(3n) {
            border-right: none;
          }
          .area-card:nth-last-child(-n+3) {
            border-bottom: none;
          }
          .area-icon {
            color: var(--color-accent);
            font-size: 26px;
            margin-top: 2px;
            flex-shrink: 0;
          }
          .area-content h3 {
            font-size: 15px;
            color: var(--color-primary);
            font-family: var(--font-secondary);
            margin: 0 0 10px 0;
            font-weight: 700;
          }
          .area-content p {
            color: #666666;
            font-size: 13px;
            line-height: 1.6;
            margin: 0;
          }
          
          /* Banner */
          .contact-banner {
            position: relative;
            background-color: var(--color-primary);
            border-radius: 12px;
            overflow: hidden;
            margin-top: 20px;
          }
          .banner-bg {
            position: absolute;
            top: 0;
            right: 0;
            width: 60%;
            height: 100%;
            background-image: url('/banner/ban3.jpg');
            background-size: cover;
            background-position: center;
            opacity: 0.15;
            mask-image: linear-gradient(to left, black 40%, transparent 100%);
            -webkit-mask-image: linear-gradient(to left, black 40%, transparent 100%);
          }
          .banner-inner {
            position: relative;
            z-index: 2;
            display: flex;
            align-items: stretch;
            padding: 50px 40px;
            gap: 0;
          }
          .banner-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            max-width: 55%;
            padding-right: 40px;
          }
          .banner-icon-scale {
            color: var(--color-accent);
            font-size: 32px;
            margin-bottom: 25px;
          }
          .banner-content h2 {
            font-size: 30px;
            font-family: var(--font-primary);
            margin: 0 0 15px 0;
            font-weight: 700;
            color: #ffffff;
            line-height: 1.3;
          }
          .banner-content p {
            color: #d1d5db;
            font-size: 15px;
            line-height: 1.6;
            margin-bottom: 30px;
          }
          
          .primary-btn-gold {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: var(--color-accent);
            color: #ffffff !important;
            padding: 15px 30px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }
          .primary-btn-gold:hover {
            background-color: #e0b467;
          }
          
          .banner-divider {
            width: 1px;
            background-color: rgba(255,255,255,0.15);
            margin: 0;
          }
          
          .banner-phone {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 20px;
            padding-left: 50px;
            justify-content: flex-start;
          }
          .phone-icon-circle {
            width: 65px;
            height: 65px;
            background-color: var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #ffffff;
            font-size: 26px;
            flex-shrink: 0;
          }
          .phone-text {
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .phone-text .small-text {
            font-size: 14px;
            color: #ffffff;
            font-family: var(--font-secondary);
            font-weight: 500;
          }
          .phone-text .number {
            font-size: 24px;
            font-weight: 700;
            color: #ffffff;
            white-space: nowrap;
          }
          
          @media (max-width: 992px) {
            .hero-overlay-content {
              width: 80%;
            }
            .banner-inner {
              flex-direction: column;
              align-items: stretch;
              padding: 40px;
              gap: 30px;
            }
            .banner-content {
              max-width: 100%;
            }
            .banner-divider {
              width: 100%;
              height: 1px;
              margin: 0;
            }
            .banner-phone {
              padding-left: 0;
            }
          }
          @media (max-width: 768px) {
            .hero-overlay-content {
              width: 100%;
              border-radius: 12px;
              margin: 0;
              clip-path: none;
              padding: 40px 30px;
            }
            .areas-section {
              padding: 30px 20px;
            }
            .areas-grid {
              grid-template-columns: 1fr;
            }
            .area-card {
              border-right: none !important;
            }
            .area-card:not(:last-child) {
              border-bottom: 1px solid #ebebeb !important;
            }
            .area-card:nth-last-child(-n+3) {
               border-bottom: 1px solid #ebebeb;
            }
            .area-card:last-child {
               border-bottom: none !important;
            }
            .contact-banner {
            }
          }
        `
      }} />
    </div>
  );
};
