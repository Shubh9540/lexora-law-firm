"use client";
import React from 'react';
import { AboutApproachData } from '@/types/templates.types';
import { FaUserTie, FaChessKnight, FaShieldAlt, FaChartLine, FaArrowRight, FaBalanceScale } from 'react-icons/fa';

export const AboutApproach = ({ data }: { data?: AboutApproachData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaUserTie': return <FaUserTie />;
      case 'FaChessKnight': return <FaChessKnight />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaChartLine': return <FaChartLine />;
      default: return <FaUserTie />;
    }
  };

  return (
    <section className="about-approach-section">
      <div className="about-approach-container">
        
        <div className="content-side">
          <div className="tagline">
            <span className="icon"><FaBalanceScale /></span>
            <span>{data.badge}</span>
          </div>
          <div className="tagline-line"></div>
          <h2 className="section-title">
            {data.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                <span className={i === 1 ? 'gold-text' : ''}>{line}</span>
                {i === 0 && <br />}
              </React.Fragment>
            ))}
          </h2>
          <p className="section-description">{data.description}</p>
          
          <div className="approach-list">
            {data.points.map((point) => (
              <div key={point.id} className="approach-item">
                <div className="icon-wrapper">
                  {renderIcon(point.icon)}
                </div>
                <div className="item-content">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
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
          <div className="main-image">
            <img src={data.image1} alt="Our Approach" />
          </div>
          <div className="overlap-image">
            <img src={data.image2} alt="Legal Approach" />
          </div>
          <div className="dots-pattern"></div>
        </div>
        
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .about-approach-section {
            padding: 40px 20px;
            background-color: #ffffff;
            overflow: hidden;
          }
          .about-approach-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 4fr 5.5fr;
            gap: 60px;
            align-items: center;
          }
          
          .about-approach-section .content-side {
            display: flex;
            flex-direction: column;
            gap: 15px;
            padding-right: 20px;
          }
          
          .about-approach-section .tagline {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .about-approach-section .tagline .icon {
            color: var(--color-accent);
            font-size: 18px;
          }
          
          .about-approach-section .tagline-line {
            width: 40px;
            height: 2px;
            background-color: var(--color-accent);
            margin-bottom: 10px;
          }
          
          .about-approach-section .section-title {
            font-size: 42px;
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1.2;
            color: var(--color-primary);
            margin: 0;
            margin-bottom: 15px;
          }
          .about-approach-section .gold-text {
            color: var(--color-accent);
          }
          
          .about-approach-section .section-description {
            color: #444444;
            font-size: 15px;
            line-height: 1.7;
            margin-bottom: 25px;
          }
          
          .about-approach-section .approach-list {
            display: flex;
            flex-direction: column;
            gap: 30px;
            margin-bottom: 35px;
            position: relative;
          }
          .about-approach-section .approach-list::before {
            content: '';
            position: absolute;
            left: 25px;
            top: 25px;
            bottom: 25px;
            width: 1px;
            border-left: 1px dashed #d1c8ba;
            z-index: 0;
          }
          
          .about-approach-section .approach-item {
            display: flex;
            align-items: flex-start;
            gap: 25px;
            position: relative;
            z-index: 1;
          }
          
          .about-approach-section .icon-wrapper {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background-color: #fbf8f2;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 20px;
            flex-shrink: 0;
            border: 2px solid #ffffff;
          }
          
          .about-approach-section .item-content h3 {
            font-size: 18px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            margin: 0 0 5px 0;
            font-weight: 600;
          }
          .about-approach-section .item-content p {
            font-size: 14px;
            color: #555555;
            line-height: 1.6;
            margin: 0;
          }
          
          .about-approach-section .primary-btn-gold {
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
          .about-approach-section .primary-btn-gold:hover {
            background-color: #e0b467;
          }
          .about-approach-section .btn-arrow {
            color: #ffffff;
            font-size: 14px;
          }
          
          .about-approach-section .image-side {
            position: relative;
            z-index: 1;
          }
          .about-approach-section .main-image {
            border-radius: 12px;
            overflow: hidden;
            width: 92%;
            margin-left: auto;
            position: relative;
            z-index: 2;
          }
          .about-approach-section .main-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          .about-approach-section .overlap-image {
            position: absolute;
            bottom: -40px;
            left: -20px;
            width: 55%;
            border-radius: 12px;
            overflow: hidden;
            border: 8px solid #ffffff;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 3;
          }
          .about-approach-section .overlap-image img {
            width: 100%;
            height: auto;
            display: block;
          }
          .about-approach-section .dots-pattern {
            position: absolute;
            bottom: -20px;
            right: -20px;
            width: 200px;
            height: 200px;
            background-image: radial-gradient(#d1c8ba 2px, transparent 2px);
            background-size: 20px 20px;
            z-index: 0;
          }
          
          @media (max-width: 992px) {
            .about-approach-container {
              grid-template-columns: 1fr;
            }
            .about-approach-section .image-side {
              max-width: 600px;
              margin: 0 auto;
              margin-top: 50px;
            }
          }
          @media (max-width: 576px) {
            .about-approach-section .section-title {
              font-size: 32px;
            }
          }
        `
      }} />
    </section>
  );
};
