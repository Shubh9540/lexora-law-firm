"use client";
import React from 'react';
import Link from 'next/link';
import { ServicesData } from '../../../data/templates.types';
import { FaArrowRight } from 'react-icons/fa6';
import { 
  FaBriefcase, FaBalanceScale, FaShieldAlt, 
  FaGavel, FaFileContract, FaBuilding, FaUsers, FaFileSignature, FaRegComments
} from 'react-icons/fa';

export const ServicesGridSection = ({ data }: { data?: ServicesData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaBalanceScale': return <FaBalanceScale />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaGavel': return <FaGavel />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaUsers': return <FaUsers />;
      case 'FaBuilding': return <FaBuilding />;
      case 'FaFileSignature': return <FaFileSignature />;
      default: return <FaBriefcase />;
    }
  };

  return (
    <section className="services-page-section">
      <div className="services-page-header">
        <div className="tagline">
          <span className="line"></span>
          <span>{data.badge || 'OUR SERVICES'}</span>
          <span className="line"></span>
        </div>
        <h2 className="section-title">How We Can Help</h2>
        <p className="section-subtitle">Trusted legal guidance tailored to your unique needs.</p>
        <div className="scale-divider">
          <span className="line"></span>
          <span className="icon"><FaBalanceScale /></span>
          <span className="line"></span>
        </div>
      </div>

      <div className="services-grid-container">
        {data.items.map((item, index) => (
          <div key={item.id} className="service-card">
            <div className="card-image">
              <img src={item.image || '/about/habout1.jpg'} alt={item.title} />
              <div className="card-number-wrapper">
                <div className="card-number">{String(index + 1).padStart(2, '0')}</div>
              </div>
            </div>
            <div className="card-content">
              <div className="card-icon-wrapper">
                {renderIcon(item.icon)}
              </div>
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.description}</p>
              <Link href={item.linkUrl} className="card-link">
                {item.linkText || 'Learn More'} <FaArrowRight className="link-arrow" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="services-bottom-banner">
        <div className="banner-icon-box">
          <FaRegComments />
        </div>
        <div className="banner-text">
          <h3>Don't See Your Legal Need?</h3>
          <p>We handle a wide range of legal matters. Contact us to discuss how we can help.</p>
        </div>
        <Link href="#" className="primary-btn-dark">
          CONTACT US <FaArrowRight className="btn-arrow" />
        </Link>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .services-page-section {
            padding: 80px 20px;
            background-color: #fbf8f2;
          }
          
          .services-page-header {
            text-align: center;
            max-width: 700px;
            margin: 0 auto 60px;
          }
          .services-page-header .tagline {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
          }
          .services-page-header .tagline .line {
            width: 30px;
            height: 2px;
            background-color: var(--color-accent);
          }
          .services-page-header .section-title {
            font-size: 42px;
            font-family: var(--font-primary);
            color: var(--color-primary);
            margin: 0 0 15px 0;
            font-weight: 700;
          }
          .services-page-header .section-subtitle {
            color: #666666;
            font-size: 16px;
            margin-bottom: 25px;
          }
          .services-page-header .scale-divider {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
          }
          .services-page-header .scale-divider .line {
            width: 40px;
            height: 1px;
            background-color: var(--color-accent);
          }
          .services-page-header .scale-divider .icon {
            color: var(--color-accent);
            font-size: 32px;
            display: flex;
          }
          
          .services-grid-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 25px;
            margin-bottom: 60px;
          }
          
          .service-card {
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.04);
            transition: all 0.3s ease;
            display: flex;
            flex-direction: row;
            height: 240px; /* Fixed height for uniformity */
          }
          .service-card:hover {
            box-shadow: 0 15px 30px rgba(0,0,0,0.1);
            transform: translateY(-5px);
          }
          
          .card-image {
            position: relative;
            width: 45%;
            height: 100%;
          }
          .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .card-number-wrapper {
            position: absolute;
            top: 15px;
            left: 15px;
            width: 38px;
            height: 44px;
            background-color: var(--color-accent);
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .card-number {
            width: 34px;
            height: 40px;
            background-color: var(--color-primary);
            color: #ffffff;
            clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 500;
            font-size: 14px;
          }
          
          .card-content {
            width: 55%;
            padding: 25px 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          .card-icon-wrapper {
            color: var(--color-accent);
            font-size: 24px;
            width: 45px;
            height: 45px;
            border: 1px solid rgba(194, 155, 87, 0.5); /* subtle gold border */
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 12px;
          }
          
          .card-title {
            font-size: 18px;
            font-family: var(--font-primary);
            color: var(--color-primary);
            margin: 0 0 10px 0;
            font-weight: 700;
          }
          .card-desc {
            color: #666666;
            font-size: 12px;
            line-height: 1.6;
            margin-bottom: auto; /* Push link to bottom */
          }
          
          .card-link {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: var(--color-accent);
            font-weight: 600;
            font-size: 13px;
            text-decoration: none;
            transition: color 0.3s ease;
            margin-top: 15px;
          }
          .card-link:hover {
            color: var(--color-primary);
          }
          .card-link .link-arrow {
            font-size: 12px;
          }
          
          .services-bottom-banner {
            max-width: 1200px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            overflow: hidden;
            padding-right: 30px;
          }
          
          .banner-icon-box {
            width: 100px;
            height: 100px;
            background-color: var(--color-primary);
            color: var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            flex-shrink: 0;
          }
          
          .banner-text {
            flex-grow: 1;
            padding: 0 30px;
          }
          .banner-text h3 {
            font-size: 20px;
            font-family: var(--font-primary);
            color: var(--color-primary);
            margin: 0 0 5px 0;
            font-weight: 600;
          }
          .banner-text p {
            color: #666666;
            font-size: 14px;
            margin: 0;
          }
          
          .primary-btn-dark {
            background-color: var(--color-primary);
            color: #ffffff !important;
            padding: 12px 25px;
            border-radius: 4px;
            font-size: 13px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            flex-shrink: 0;
          }
          .primary-btn-dark:hover {
            background-color: var(--color-accent);
          }
          
          @media (max-width: 1200px) {
            .services-grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 768px) {
            .services-grid-container {
              grid-template-columns: 1fr;
            }
            .services-bottom-banner {
              flex-direction: column;
              padding: 0 0 30px 0;
              text-align: center;
              gap: 20px;
            }
            .banner-icon-box {
              width: 100%;
              height: 80px;
            }
            .banner-text {
              padding: 0 20px;
            }
          }
        `
      }} />
    </section>
  );
};
