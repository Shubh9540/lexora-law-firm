"use client";
import React from 'react';
import { AboutWhyChooseUsData } from '@/types/templates.types';
import { FaRegUser, FaHandshake, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const AboutWhyChooseUs = ({ data }: { data?: AboutWhyChooseUsData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaAward': return <FaRegUser />;
      case 'FaUserShield': return <FaHandshake />;
      default: return <FaRegUser />;
    }
  };

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <div className="content-side">
          <div className="tagline">
            <span className="icon"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          <h2 className="section-title">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'section-title-highlight' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="section-description">{data.description}</p>
          
          <div className="points-grid">
            {data.points.map((point) => (
              <div key={point.id} className="point-card">
                <div className="point-icon-wrapper">
                  <div className="point-icon">
                    {renderIcon(point.icon)}
                  </div>
                </div>
                <div className="point-content">
                  <h3 className="point-title">{point.title}</h3>
                  <p className="point-text">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          <a href={data.buttonUrl} className="primary-btn-gold">
            {data.buttonText}
            <span className="btn-arrow"><FaArrowRight /></span>
          </a>
        </div>
        
        <div className="image-side">
          <div className="image-wrapper">
            <img src={data.image} alt="Why Choose Us" />
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .why-choose-us-section {
            background-color: var(--color-primary);
            background-image: linear-gradient(rgba(10, 24, 40, 0.95), rgba(10, 24, 40, 0.95)), url('${data.image}');
            background-size: cover;
            background-position: center;
            background-blend-mode: overlay;
            padding: 40px 20px;
            color: #ffffff;
            position: relative;
          }
          .why-choose-us-container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: stretch;
          }
          
          .why-choose-us-section .content-side {
            display: flex;
            flex-direction: column;
            gap: 20px;
            justify-content: center;
          }
          
          .why-choose-us-section .tagline {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent) !important;
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .why-choose-us-section .tagline .icon {
            font-size: 16px;
          }
          
          .why-choose-us-section .section-title {
            font-size: 46px;
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1.2;
            margin: 0;
            color: #ffffff !important;
          }
          .why-choose-us-section .section-title-highlight {
            color: var(--color-accent) !important;
          }
          
          .why-choose-us-section .section-description {
            color: #ffffff !important;
            opacity: 0.8;
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 20px;
          }
          
          .why-choose-us-section .points-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 30px;
          }
          
          .why-choose-us-section .point-card {
            background-color: transparent;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 30px 25px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            transition: border-color 0.3s ease;
          }
          .why-choose-us-section .point-card:hover {
            border-color: rgba(255, 255, 255, 0.3);
          }
          
          .why-choose-us-section .point-icon-wrapper {
            display: flex;
            justify-content: flex-start;
          }
          .why-choose-us-section .point-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 1px solid var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent) !important;
            font-size: 22px;
          }
          
          .why-choose-us-section .point-title {
            font-size: 18px;
            font-family: var(--font-primary);
            margin: 0 0 12px 0;
            color: #ffffff !important;
            font-weight: 600;
          }
          .why-choose-us-section .point-text {
            font-size: 14px;
            color: #ffffff !important;
            opacity: 0.7;
            line-height: 1.6;
            margin: 0;
          }
          
          .primary-btn-gold {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: var(--color-accent) !important;
            color: #000000 !important;
            padding: 12px 30px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            width: max-content;
            transition: all 0.3s ease;
            text-decoration: none;
          }
          .primary-btn-gold:hover {
            background-color: #e0b467 !important;
          }
          .btn-arrow {
            font-size: 14px;
            color: #000000 !important;
          }
          
          .image-side {
            display: flex;
          }
          .image-side .image-wrapper {
            border-radius: 12px;
            overflow: hidden;
            width: 100%;
            height: 100%;
            min-height: 500px;
          }
          .image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 992px) {
            .why-choose-us-container {
              grid-template-columns: 1fr;
            }
            .image-side .image-wrapper {
              min-height: 400px;
            }
          }
          
          @media (max-width: 768px) {
            .points-grid {
              grid-template-columns: 1fr;
            }
            .section-title {
              font-size: 36px;
            }
          }
        `
      }} />
    </section>
  );
};
