"use client";
import React from 'react';
import { AboutMissionData } from '@/types/templates.types';
import { FaBullseye, FaEye, FaLandmark } from 'react-icons/fa';

import { MdOutlineBalance } from 'react-icons/md';

export const AboutMission = ({ data }: { data?: AboutMissionData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBullseye': return <FaBullseye />;
      case 'FaEye': return <FaEye />;
      case 'FaLandmark': return <FaLandmark />;
      default: return <FaBullseye />;
    }
  };

  return (
    <section className="about-mission-section">
      <div className="about-mission-container">
        
        <div className="mission-header">
          <div className="tagline">
            <span className="line"></span>
            <span>ABOUT US</span>
            <span className="line"></span>
          </div>
          <h2 className="section-title">
            Our <span className="gold-text">Mission, Vision & History</span>
          </h2>
          <div className="title-separator">
            <MdOutlineBalance className="separator-icon" />
          </div>
          <p className="section-description">
            {data.description}
          </p>
        </div>

        <div className="mission-cards">
          {data.items.map((item, index) => {
            const isImageLeft = index % 2 === 0;
            
            return (
              <div key={item.id} className={`mission-card ${isImageLeft ? 'image-left' : 'image-right'}`}>
                {isImageLeft ? (
                  <>
                    <div className="card-image-side">
                       {item.bgImage && <img src={item.bgImage} alt={item.title} />}
                    </div>
                    <div className="card-content-side">
                      <div className="icon-wrapper">
                        {renderIcon(item.icon)}
                      </div>
                      <div className="content-text">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="card-content-side">
                      <div className="icon-wrapper">
                        {renderIcon(item.icon)}
                      </div>
                      <div className="content-text">
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                    <div className="card-image-side">
                       {item.bgImage && <img src={item.bgImage} alt={item.title} />}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .about-mission-section {
            padding: 60px 20px;
            background-color: #ffffff;
          }
          .about-mission-container {
            max-width: 1200px;
            margin: 0 auto;
          }
          
          /* Header */
          .about-mission-section .mission-header {
            text-align: center;
            margin-bottom: 50px;
          }
          .about-mission-section .tagline {
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
          .about-mission-section .tagline .line {
            width: 40px;
            height: 1px;
            background-color: var(--color-accent);
          }
          .about-mission-section .section-title {
            font-size: 42px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            font-weight: 700;
            margin: 0 0 15px 0;
          }
          .about-mission-section .gold-text {
            color: var(--color-accent);
          }
          .about-mission-section .title-separator {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
          }
          .about-mission-section .title-separator::before,
          .about-mission-section .title-separator::after {
            content: '';
            position: absolute;
            top: 50%;
            width: 40px;
            height: 1px;
            background-color: var(--color-accent);
            opacity: 0.5;
          }
          .about-mission-section .title-separator::before {
            margin-left: -70px;
          }
          .about-mission-section .title-separator::after {
            margin-left: 70px;
          }
          .about-mission-section .separator-icon {
            color: var(--color-accent);
            font-size: 24px;
          }
          
          .about-mission-section .section-description {
            color: #444444;
            font-size: 15px;
            line-height: 1.7;
            max-width: 600px;
            margin: 0 auto;
          }
          
          /* Cards */
          .about-mission-section .mission-cards {
            display: flex;
            flex-direction: column;
            gap: 25px;
          }
          
          .about-mission-section .mission-card {
            display: flex;
            background-color: #f8f6f2; /* Light beige matching screenshot */
            border-radius: 8px;
            overflow: hidden;
            height: 250px;
          }
          
          .about-mission-section .card-image-side {
            flex: 1;
            height: 100%;
          }
          .about-mission-section .card-image-side img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }
          
          .about-mission-section .card-content-side {
            flex: 1;
            padding: 40px;
            display: flex;
            align-items: flex-start;
            gap: 25px;
          }
          
          .about-mission-section .icon-wrapper {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-color: #f1ede3;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 45px;
            flex-shrink: 0;
          }
          
          .about-mission-section .content-text h3 {
            font-size: 28px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            margin: 0 0 20px 0;
            font-weight: 600;
            position: relative;
            padding-bottom: 15px;
          }
          .about-mission-section .content-text h3::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50px;
            height: 2px;
            background-color: var(--color-accent);
          }
          .about-mission-section .content-text p {
            font-size: 14px;
            color: #444444;
            line-height: 1.7;
            margin: 0;
          }
          
          @media (max-width: 768px) {
            .about-mission-section .mission-card {
              flex-direction: column !important;
              height: auto;
            }
            .about-mission-section .card-image-side {
              height: 250px;
            }
          }
        `
      }} />
    </section>
  );
};
