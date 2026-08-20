"use client";

import React, { useState } from 'react';
import { ServicesData } from '../../../data/templates.types';
import { FaBriefcase, FaShieldAlt, FaHeartbeat, FaFileContract, FaArrowRight, FaArrowLeft, FaBalanceScale, FaGavel } from 'react-icons/fa';

export const Services = ({ data }: { data?: ServicesData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4; // Show 4 cards at a time on desktop
  const maxIndex = data ? Math.max(0, data.items.length - itemsPerPage) : 0;

  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaBriefcase': return <FaBriefcase />;
      case 'FaShieldAlt': return <FaShieldAlt />;
      case 'FaHeartbeat': return <FaHeartbeat />;
      case 'FaFileContract': return <FaFileContract />;
      case 'FaBalanceScale': return <FaBalanceScale />;
      case 'FaGavel': return <FaGavel />;
      default: return <FaBriefcase />;
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="services-section">
      <div className="services-bg-left" style={{ backgroundImage: `url(${data.bgImage})` }}></div>

      <div className="services-container">

        <div className="services-top">
          <div className="services-content">
            <div className="services-tagline">
              <span>— {data.badge} —</span>
            </div>

            <h2 className="services-sec-title">
              {data.title.split('\n').map((line, i) => {
                if (line.includes('Legal Practice Areas.')) {
                  const parts = line.split('Legal Practice Areas.');
                  return (
                    <React.Fragment key={i}>
                      {parts[0]}<span className="gold-text">Legal Practice Areas.</span>{parts[1]}
                    </React.Fragment>
                  );
                }
                return (
                  <React.Fragment key={i}>
                    {line}
                    {i === 0 && <br />}
                  </React.Fragment>
                );
              })}
            </h2>

            <div className="title-separator">
              <span className="sep-line"></span>
              <FaBalanceScale className="sep-icon" />
              <span className="sep-line"></span>
            </div>

            <p className="services-sec-desc">{data.description}</p>
          </div>
        </div>

        <div className="services-carousel-wrapper">
          <div
            className="services-grid"
            style={{ transform: `translateX(-${currentIndex * 310}px)` }}
          >
            {data.items.map((item, index) => (
              <div key={item.id} className={`service-card ${index === currentIndex ? 'active' : ''}`}>
                <div className="card-number">0{index + 1}</div>
                <div className="service-card-icon">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="service-title">{item.title}</h3>

                {/* Horizontal line for active card in reference */}
                <div className="card-title-line"></div>

                <p className="service-description">{item.description}</p>
                <a href={item.linkUrl} className="service-link">
                  {item.linkText} <FaArrowRight className="link-icon" />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-controls">
          <div className="pagination-lines">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                className={`line-dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              ></button>
            ))}
          </div>
          <div className="nav-arrows">
            <button className="nav-btn prev" onClick={handlePrev}>
              <FaArrowLeft />
            </button>
            <button className="nav-btn next" onClick={handleNext}>
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .services-section {
            position: relative;
            background-color: #08101a; /* Darker Navy Background to match reference */
            padding: 40px 0 30px; /* Adjusted as per user request */
            color: #ffffff;
            overflow: hidden;
          }
          
          .services-bg-left {
            position: absolute;
            top: 0;
            left: 0;
            width: 30%; /* Matches image width covering the first card */
            height: 100%;
            background-size: cover;
            background-position: center left;
            background-repeat: no-repeat;
            z-index: 1;
            /* Small fade on the very edge of the image to blend cleanly if needed, though reference looks sharp */
            mask-image: linear-gradient(to right, black 95%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, black 95%, transparent 100%);
          }

          .services-container {
            position: relative;
            z-index: 2;
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }

          /* Top Content Area */
          .services-top {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 60px;
          }
          .services-content {
            width: calc(100% - 310px); /* 280px card + 30px gap to align with 2nd card */
          }
          
          .services-tagline {
            margin-bottom: 20px;
          }
          .services-tagline span {
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          
          .services-sec-title {
            font-size: 44px;
            font-family: var(--font-primary);
            color: #ffffff;
            margin-bottom: 25px;
            line-height: 1.3;
            font-weight: 700;
          }
          .gold-text {
            color: var(--color-accent);
          }

          .title-separator {
            display: flex;
            align-items: center;
            gap: 15px;
            margin-bottom: 25px;
          }
          .sep-line {
            width: 40px;
            height: 1px;
            background-color: var(--color-accent);
            opacity: 0.5;
          }
          .sep-icon {
            color: var(--color-accent);
            font-size: 18px;
          }

          .services-sec-desc {
            color: #8c97a3;
            font-size: 15px;
            line-height: 1.8;
            max-width: 800px;
          }

          /* Services Carousel Wrapper */
          .services-carousel-wrapper {
            position: relative;
            z-index: 3;
            overflow: hidden; /* Hide overflowing cards on right */
            margin-bottom: 20px; /* Reduced gap between cards and buttons */
            padding-bottom: 10px; /* Space for hover effect shadow */
          }

          /* Services Cards */
          .services-grid {
            display: flex;
            gap: 30px;
            width: max-content;
            transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
          }
          
          .service-card {
            background-color: #0f1825; /* Match reference dark card bg */
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            padding: 35px 25px;
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
            width: 280px; /* Fixed smaller width to fit 4 nicely */
            flex-shrink: 0;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          }
          .service-card:hover, .service-card.active {
            border-color: var(--color-accent);
          }

          .card-number {
            position: absolute;
            top: 20px;
            right: 25px;
            font-size: 50px;
            font-weight: 700;
            color: rgba(255, 255, 255, 0.04);
            font-family: var(--font-primary);
            line-height: 1;
            transition: all 0.3s ease;
          }
          .service-card:hover .card-number, .service-card.active .card-number {
            color: rgba(255, 255, 255, 0.08);
          }

          .service-card-icon {
            width: 70px;
            height: 70px;
            border: 1px solid var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            color: var(--color-accent);
            transition: all 0.4s ease;
          }
          .service-card:hover .service-card-icon, .service-card.active .service-card-icon {
            background-color: var(--color-accent);
            color: var(--color-primary);
          }

          .service-title {
            font-size: 22px;
            color: #ffffff;
            margin-bottom: 15px;
            font-family: var(--font-primary);
            font-weight: 600;
          }

          .card-title-line {
            width: 0;
            height: 2px;
            background-color: var(--color-accent);
            margin-bottom: 15px;
            transition: width 0.4s ease;
          }
          .service-card:hover .card-title-line, .service-card.active .card-title-line {
            width: 30px;
          }

          .service-description {
            color: #8c97a3;
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 30px;
          }

          .service-link {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
          }
          .service-link:hover {
            gap: 15px;
            color: #ffffff;
          }

          /* Carousel Controls */
          .carousel-controls {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 15px; /* Reduced gap */
            padding: 0;
            position: relative;
          }
          
          .pagination-lines {
            display: flex;
            gap: 12px;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
          .line-dot {
            width: 30px;
            height: 3px;
            background-color: rgba(255,255,255,0.2);
            border: none;
            cursor: pointer;
            transition: all 0.3s;
          }
          .line-dot.active {
            background-color: var(--color-accent);
          }

          .nav-arrows {
            display: flex;
            gap: 15px;
          }
          .nav-btn {
            width: 55px;
            height: 55px;
            border-radius: 50%;
            border: 1px solid rgba(255,255,255,0.2);
            background: transparent;
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 18px; /* Slightly larger icon */
          }
          .nav-btn:first-child {
            background-color: transparent;
            border-color: rgba(255,255,255,0.2);
          }
          .nav-btn:last-child, .nav-btn:hover {
            background-color: var(--color-accent);
            border-color: var(--color-accent);
            color: var(--color-primary);
          }

          /* Responsive */
          @media (max-width: 1200px) {
            .services-bg-left {
              width: 100%;
              opacity: 0.15;
            }
            .services-bg-left::after {
              display: none;
            }
            .services-top {
              justify-content: center;
            }
            .services-content {
              width: 100%;
              padding-left: 0;
              text-align: center;
            }
            .title-separator {
              justify-content: center;
            }
            .services-sec-desc {
              margin: 0 auto;
            }
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
            .services-sec-title {
              font-size: 32px;
            }
            .pagination-lines {
              position: static;
              transform: none;
              margin-right: auto;
            }
            .carousel-controls {
              justify-content: space-between;
            }
          }
        `
      }} />
    </section>
  );
};
