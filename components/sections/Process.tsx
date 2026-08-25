"use client";

import React from 'react';
import { ProcessData } from '@/types/templates.types';
import { FaPhoneAlt, FaClipboardList, FaGavel, FaTrophy, FaUsers, FaSearch, FaCalculator, FaAngleRight } from 'react-icons/fa';

export const Process = ({ data }: { data?: ProcessData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaPhoneAlt': return <FaPhoneAlt />;
      case 'FaClipboardList': return <FaClipboardList />;
      case 'FaGavel': return <FaGavel />;
      case 'FaTrophy': return <FaTrophy />;
      case 'FaUsers': return <FaUsers />;
      case 'FaSearch': return <FaSearch />;
      case 'FaCalculator': return <FaCalculator />;
      default: return <FaClipboardList />;
    }
  };

  return (
    <section className="process-section">
      <div className="process-container">

        <div className="process-header">
          <div className="process-tagline">
            <span className="line"></span>
            <span className="text">{data.badge}</span>
            <span className="line"></span>
          </div>
          <h2 className="process-title">
            {data.title} <br /> <span className="gold-text">{data.subtitle}</span>
          </h2>
          {data.description && (
            <p className="process-desc">{data.description}</p>
          )}
        </div>

        <div className="process-grid">
          {data.steps.map((step, index) => {
            const isAlt = index % 2 !== 0; // index 1 and 3 are gold

            return (
              <div key={step.id} className={`process-card-wrapper ${isAlt ? 'alt' : ''}`}>
                <div className="process-card">
                  <div className="card-top-shape"></div>
                  <div className="card-badge">
                    0{index + 1}
                  </div>

                  <div className="card-icon-wrapper">
                    <div className="card-icon">
                      {renderIcon(step.icon)}
                    </div>
                  </div>

                  <h3 className="card-title">{step.title}</h3>
                  <div className="card-title-line"></div>
                  <p className="card-desc">{step.description}</p>
                </div>

                {/* Connecting arrow, except for the last item */}
                {index < data.steps.length - 1 && (
                  <div className="process-connector">
                    <div className="connector-arrow-wrapper">
                      <div className="connector-arrow-inner">
                        <FaAngleRight />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .process-section {
            background-color: #fafafa;
            padding: 40px 0 30px;
            position: relative;
            z-index: 1;
            overflow: hidden;
          }
          
          .process-container {
            max-width: 1250px; /* Restored to standard section width! */
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .process-header {
            text-align: center;
            margin-bottom: 70px;
          }
          
          .process-tagline {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
            margin-bottom: 15px;
          }
          .process-tagline .line {
            width: 30px;
            height: 1px;
            background-color: var(--color-accent);
          }
          .process-tagline .text {
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          
          .process-title {
            font-size: 46px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 25px;
          }
          .process-title .gold-text {
            color: var(--color-accent);
          }
          
          .process-desc {
            color: #666666;
            font-size: 15px;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .process-grid {
            display: grid;
            grid-template-columns: repeat(4, 240px); /* Fixed narrow width for boxes! */
            justify-content: space-between; /* Spreads them out, creating huge gaps for the long connectors! */
            position: relative;
          }
          
          .process-card-wrapper {
            position: relative;
            padding-top: 25px; /* Space for absolute badge */
            width: 100%;
          }
          
          .process-card {
            background-color: #ffffff;
            border-radius: 0 0 4px 4px; /* Removed top border radius so shape is flush */
            padding: 40px 15px 35px; /* Compact padding */
            text-align: center;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.04);
            position: relative;
            height: 100%;
            transition: transform 0.3s ease;
          }
          .process-card:hover {
            transform: translateY(-5px);
          }
          
          /* The trapezoid top border */
          .card-top-shape {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%; /* Spans full width of the box */
            box-sizing: border-box;
            border-top: 8px solid var(--color-primary);
            border-left: 12px solid transparent; /* Slanted edges directly at corners */
            border-right: 12px solid transparent;
          }
          .process-card-wrapper.alt .card-top-shape {
            border-top-color: var(--color-accent);
          }
          
          /* Circle Badge */
          .card-badge {
            position: absolute;
            top: -24px; /* Adjust for border */
            left: 50%;
            transform: translateX(-50%);
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            font-weight: 700;
            font-family: var(--font-primary);
            z-index: 2;
            border: 4px solid #ffffff; /* White border to cut into the dark top shape */
          }
          .process-card-wrapper.alt .card-badge {
            background-color: var(--color-accent);
          }
          
          /* Icon */
          .card-icon-wrapper {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background-color: #f1f4f8 !important; /* Soft bluish grey for primary */
            border: 0px solid transparent !important; /* Force remove any stray borders */
            outline: none !important;
            box-shadow: none !important;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 40px;
            transition: all 0.3s ease;
          }
          .process-card:hover .card-icon-wrapper {
            background-color: var(--color-primary) !important;
          }
          .process-card-wrapper.alt .card-icon-wrapper {
            background-color: #fdf6ec !important; /* Soft pale gold for alt */
            border: 0px solid transparent !important;
          }
          .process-card-wrapper.alt .process-card:hover .card-icon-wrapper {
            background-color: var(--color-accent) !important;
          }
          
          .card-icon {
            font-size: 38px;
            color: var(--color-primary);
            transition: all 0.3s ease;
            border: none !important;
            background: transparent !important;
          }
          .process-card-wrapper.alt .card-icon {
            color: var(--color-accent);
          }
          
          .process-card:hover .card-icon {
            color: #ffffff;
          }
          
          /* Text Content */
          .card-title {
            font-size: 18px;
            color: var(--color-primary);
            font-family: var(--font-primary);
            font-weight: 700;
            margin-bottom: 12px;
          }
          
          .card-title-line {
            width: 30px;
            height: 2px;
            background-color: var(--color-accent);
            margin: 0 auto 15px;
          }
          
          .card-desc {
            color: #777777;
            font-size: 13px;
            line-height: 1.6;
          }
          
          /* Connecting Arrows */
          .process-connector {
            position: absolute;
            top: 50%;
            left: 100%; /* Starts exactly at the right edge of the card */
            width: calc((1210px - (240px * 4)) / 3); /* Exactly the gap size between cards */
            height: 1px;
            background-color: var(--color-primary); /* Thin colored line matching the card */
            transform: translateY(-50%);
            z-index: 5;
          }
          .process-card-wrapper.alt .process-connector {
            background-color: var(--color-accent);
          }
          
          .connector-arrow-wrapper {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 1px dashed var(--color-primary); /* Dashed outer ring */
            background-color: #fafafa; /* Match section background so line doesn't show through the white gap */
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }
          .process-card-wrapper.alt .connector-arrow-wrapper {
            border-color: var(--color-accent);
          }
          
          .connector-arrow-inner {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            background-color: var(--color-primary);
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }
          .process-card-wrapper.alt .connector-arrow-inner {
            background-color: var(--color-accent);
          }
          
          @media (max-width: 1024px) {
            .process-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px;
            }
            .process-card-wrapper:nth-child(2) .process-connector {
              display: none; /* Hide arrow on the right edge of row 1 */
            }
          }
          
          @media (max-width: 768px) {
            .process-grid {
              grid-template-columns: 1fr;
            }
            .process-connector {
              display: none; /* Hide all connectors on mobile */
            }
            .process-title {
              font-size: 32px;
            }
          }
        `
      }} />
    </section>
  );
};
