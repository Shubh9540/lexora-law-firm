"use client";
import React from 'react';
import { AboutWhyChooseUsData } from '@/types/templates.types';
import { FaUserTie, FaHandshake, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const WhyChooseUsSection = ({ data }: { data?: AboutWhyChooseUsData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaUserTie': return <FaUserTie />;
      case 'FaHandshake': return <FaHandshake />;
      default: return <FaUserTie />;
    }
  };

  return (
    <section className="wcu-page-section">
      <div className="wcu-page-container">
        
        <div className="content-side">
          <div className="tagline">
            <span className="icon"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          <h2 className="section-title">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'gold-text' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <div className="title-underline"></div>
          
          <p className="section-description">{data.description}</p>
          
          <div className="wcu-cards-grid">
            {data.points.map((point) => (
              <div key={point.id} className="wcu-card">
                <div className="card-icon">
                  {renderIcon(point.icon)}
                </div>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            ))}
          </div>
          
          <a href={data.buttonUrl} className="primary-btn-gold">
            {data.buttonText}
            <span className="btn-arrow"><FaArrowRight /></span>
          </a>
        </div>
        
        <div className="image-side">
          <img src={data.image} alt="Why Choose Us" className="main-image" />
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .wcu-page-section {
            padding: 80px 20px;
            background-color: #ffffff;
          }
          .wcu-page-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.1fr 0.9fr;
            gap: 60px;
            align-items: center;
          }
          
          .wcu-page-section .content-side {
            display: flex;
            flex-direction: column;
            gap: 20px;
            padding-right: 20px;
          }
          
          .wcu-page-section .tagline {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .wcu-page-section .tagline .icon {
            color: var(--color-accent);
            font-size: 18px;
          }
          
          .wcu-page-section .section-title {
            font-size: 46px;
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1.2;
            color: var(--color-primary);
            margin: 0;
          }
          .wcu-page-section .gold-text {
            color: var(--color-accent);
          }
          .wcu-page-section .title-underline {
            width: 60px;
            height: 2px;
            background-color: var(--color-accent);
            margin-top: 5px;
            margin-bottom: 5px;
          }
          
          .wcu-page-section .section-description {
            color: #555555;
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 10px;
            max-width: 90%;
          }
          
          .wcu-page-section .wcu-cards-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 25px;
            margin-bottom: 30px;
          }
          
          .wcu-page-section .wcu-card {
            background-color: #ffffff;
            border: 1px solid #f0f0f0;
            border-radius: 8px;
            padding: 30px 25px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            transition: all 0.3s ease;
          }
          .wcu-page-section .wcu-card:hover {
            box-shadow: 0 10px 30px rgba(0,0,0,0.08);
            transform: translateY(-5px);
          }
          
          .wcu-page-section .card-icon {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fbf8f2;
            color: var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 22px;
            margin-bottom: 20px;
            border: 1px solid #f2e6d3;
          }
          
          .wcu-page-section .wcu-card h3 {
            font-size: 18px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            margin: 0 0 12px 0;
            font-weight: 600;
            line-height: 1.3;
          }
          
          .wcu-page-section .wcu-card p {
            font-size: 13px;
            color: #666666;
            line-height: 1.6;
            margin: 0;
          }
          
          .wcu-page-section .primary-btn-gold {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background-color: var(--color-accent);
            color: #ffffff !important;
            padding: 12px 30px;
            border-radius: 4px;
            font-size: 15px;
            font-weight: 600;
            width: max-content;
            transition: all 0.3s ease;
            text-decoration: none;
            text-transform: none !important;
          }
          .wcu-page-section .primary-btn-gold:hover {
            background-color: #e0b467;
          }
          .wcu-page-section .btn-arrow {
            color: #ffffff;
            font-size: 14px;
          }
          
          .wcu-page-section .image-side {
            height: 100%;
            min-height: 600px;
            border-radius: 12px;
            overflow: hidden;
          }
          .wcu-page-section .main-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          
          @media (max-width: 992px) {
            .wcu-page-container {
              grid-template-columns: 1fr;
            }
            .wcu-page-section .image-side {
              min-height: 400px;
            }
          }
          @media (max-width: 576px) {
            .wcu-page-section .section-title {
              font-size: 36px;
            }
            .wcu-page-section .wcu-cards-grid {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
    </section>
  );
};
