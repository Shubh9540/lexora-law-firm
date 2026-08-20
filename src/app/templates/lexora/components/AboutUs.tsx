"use client";
import React, { useState } from 'react';
import { AboutUsData } from '../../../data/templates.types';
import { FaRegFileAlt, FaSearch, FaShieldAlt, FaUserTie, FaArrowRight } from 'react-icons/fa';
import { MdOutlineBalance } from 'react-icons/md';

export const AboutUs = ({ data }: { data?: AboutUsData }) => {
  const [activeTab, setActiveTab] = useState(data?.tabs?.[0]?.id || 'mission');
  
  if (!data) return null;

  const renderIcon = (iconName?: string) => {
    switch (iconName) {
      case 'FaRegFileAlt': return <FaRegFileAlt />;
      case 'FaSearch': return <FaSearch />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaUserTie': return <FaUserTie />;
      default: return <FaRegFileAlt />;
    }
  };

  const activeContent = data.tabs?.find(t => t.id === activeTab)?.content;

  return (
    <section className="about-us-section">
      <div className="about-us-container">
        
        <div className="about-images">
          <div className="image-wrapper img-top">
            <img src={data.image1} alt="About Us" />
          </div>
          <div className="image-row">
            <div className="image-wrapper img-bottom">
              <img src={data.image2} alt="About Us 2" />
            </div>
            <div className="image-wrapper img-bottom">
              <img src={data.image3} alt="About Us 3" />
            </div>
          </div>
          
          <div className="center-badge">
            <div className="badge-ring">
               <svg viewBox="0 0 100 100" width="100%" height="100%">
                  <path id="circlePath" d="M 50, 10 a 40,40 0 1,1 -0.1,0" fill="none" />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePath" startOffset="0%">
                      {data.badgeText}
                    </textPath>
                  </text>
                </svg>
            </div>
            <div className="badge-icon">
              <MdOutlineBalance />
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="about-tagline">
            <span>— {data.badge}</span>
          </div>
          <h2 className="section-title">
            {data.title.split('\\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i === 0 ? <br /> : <span className="gold-dot">.</span>}
              </React.Fragment>
            ))}
          </h2>
          <p className="section-description">{data.description}</p>
          
          <div className="tabs-wrapper">
            <div className="tabs-header">
              {data.tabs?.map(tab => (
                <button 
                  key={tab.id}
                  className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="tab-body">
              <p>{activeContent}</p>
            </div>
          </div>
          
          <div className="features-grid">
            {data.features?.map(feature => (
              <div className="feature-item" key={feature.id}>
                <div className="feature-icon">
                  {renderIcon(feature.icon)}
                </div>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
          
          <a href={data.buttonUrl} className="primary-btn-dark">
            {data.buttonText}
            <span className="btn-arrow"><FaArrowRight /></span>
          </a>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .about-us-section {
            padding: 40px 20px 30px;
            background-color: var(--color-bg-light);
          }
          .about-us-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
          }
          
          /* Images Section */
          .about-images {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .image-wrapper {
            border-radius: 12px;
            overflow: hidden;
          }
          .image-wrapper img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .img-top {
            width: 100%;
            height: 280px;
          }
          .image-row {
            display: flex;
            gap: 20px;
            height: 280px;
          }
          .img-bottom {
            flex: 1;
            height: 100%;
          }
          
          /* Center Badge */
          .center-badge {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 160px;
            height: 160px;
            background-color: var(--color-primary);
            border-radius: 50%;
            border: 5px solid #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
          }
          .badge-ring {
            position: absolute;
            width: 90%;
            height: 90%;
            animation: spin 15s linear infinite;
          }
          .badge-icon {
            font-size: 50px;
            color: var(--color-accent);
            z-index: 2;
          }
          @keyframes spin {
            100% { transform: rotate(360deg); }
          }
          
          /* Content Section */
          .about-tagline span {
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            display: block;
            margin-bottom: 15px;
          }
          
          .section-title {
            font-size: 42px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 25px;
          }
          .gold-dot {
            color: var(--color-accent);
          }
          
          .section-description {
            color: var(--color-text-light);
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 30px;
          }
          
          /* Tabs */
          .tabs-wrapper {
            margin-bottom: 30px;
          }
          .tabs-header {
            display: flex;
            background-color: #f3f4f6;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 20px;
          }
          .tab-btn {
            flex: 1;
            padding: 15px 10px;
            border: none;
            background: none;
            font-family: var(--font-primary);
            font-size: 14px;
            font-weight: 600;
            color: var(--color-primary);
            cursor: pointer;
            transition: all 0.3s ease;
            border-bottom: 2px solid transparent;
          }
          .tab-btn.active {
            background-color: var(--color-primary);
            color: #ffffff;
            border-bottom: 2px solid var(--color-accent);
          }
          .tab-body p {
            font-size: 15px;
            line-height: 1.7;
            color: var(--color-text-light);
            margin: 0;
          }
          
          /* Features */
          .features-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 35px;
          }
          .feature-item {
            display: flex;
            align-items: center;
            gap: 12px;
          }
          .feature-icon {
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 16px;
          }
          .feature-item span {
            font-size: 14px;
            font-weight: 500;
            color: var(--color-text);
          }
          
          /* Button */
          .primary-btn-dark {
            display: inline-flex;
            align-items: center;
            gap: 15px;
            background-color: var(--color-primary);
            color: #ffffff;
            padding: 12px 12px 12px 25px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 1px;
            transition: all 0.3s ease;
          }
          .primary-btn-dark:hover {
            background-color: var(--color-accent);
          }
          .btn-arrow {
            color: var(--color-primary);
            background-color: #ffffff;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
          }
          
          @media (max-width: 992px) {
            .about-us-container {
              grid-template-columns: 1fr;
              gap: 60px;
            }
            .about-images {
              max-width: 600px;
              margin: 0 auto;
            }
          }
          @media (max-width: 576px) {
            .section-title {
              font-size: 32px;
            }
            .features-grid {
              grid-template-columns: 1fr;
            }
            .img-top, .image-row {
              height: 200px;
            }
            .center-badge {
              width: 120px;
              height: 120px;
            }
            .badge-icon {
              font-size: 36px;
            }
          }
        `
      }} />
    </section>
  );
};
