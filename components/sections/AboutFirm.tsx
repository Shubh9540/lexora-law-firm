"use client";
import React from 'react';
import { AboutFirmData } from '@/types/templates.types';
import { MdOutlineBalance } from 'react-icons/md';

export const AboutFirm = ({ data }: { data?: AboutFirmData }) => {
  if (!data) return null;

  return (
    <section className="about-firm-section">
      <div className="about-firm-container">
        
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
                  <path id="circlePathAboutFirm" d="M 50, 10 a 40,40 0 1,1 -0.1,0" fill="none" />
                  <text fill="#ffffff" fontSize="9.5" fontWeight="500" letterSpacing="2">
                    <textPath href="#circlePathAboutFirm" startOffset="0%">
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
          <div className="about-descriptions">
            <p className="section-description">{data.description1}</p>
            <p className="section-description">{data.description2}</p>
            <p className="section-description">{data.description3}</p>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .about-firm-section {
            padding: 40px 20px;
            background-color: var(--color-bg-light);
          }
          .about-firm-container {
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
          
          .about-descriptions {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .section-description {
            color: var(--color-text-light);
            font-size: 15px;
            line-height: 1.7;
            margin: 0;
          }
          
          @media (max-width: 992px) {
            .about-firm-container {
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
