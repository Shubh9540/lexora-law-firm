import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustryItem, LexoraTemplateData } from '@/types/templates.types';

interface IndustryDetailContentProps {
  data: IndustryItem;
  templateData: LexoraTemplateData;
}

export const IndustryDetailContent = ({ data, templateData }: IndustryDetailContentProps) => {
  return (
    <section className="industry-detail-section" style={{ padding: '80px 20px', backgroundColor: '#ffffff' }}>
      <div className="ind-detail-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Top Header Section */}
        <div className="ind-top-section">
          <div className="ind-top-left">
            <div className="ind-badge-wrap">
              <FaIcons.FaBalanceScale className="ind-icon-badge" />
              <span className="ind-badge-text">{templateData.industries?.badge || 'INDUSTRIES WE SERVE'}</span>
            </div>
            <h1 className="ind-title-main">{data.title}</h1>
            <h3 className="ind-subtitle-gold">{data.subtitle}</h3>
            <p className="ind-intro-text">{data.introText}</p>
          </div>
          <div className="ind-top-right">
            <div className="ind-featured-image" style={{ backgroundImage: `url('${data.image}')` }}></div>
          </div>
        </div>

        {/* Content Section Split */}
        <div className="ind-content-split">
          
          {/* Left Main Content */}
          <div className="ind-main-col">
            <h2 className="ind-section-heading">Overview</h2>
            
            <div className="ind-overview-block">
              {data.overviewImage && (
                <div className="ind-overview-image" style={{ backgroundImage: `url('${data.overviewImage}')` }}></div>
              )}
              <div className="ind-overview-text" dangerouslySetInnerHTML={{ __html: data.overviewHtml }}></div>
              <div style={{ clear: 'both' }}></div>
            </div>

            {data.services && data.services.length > 0 && (
              <>
                <h2 className="ind-section-heading" style={{ marginTop: '50px' }}>Our Services</h2>
                <div className="ind-services-grid">
                  {data.services.map((srv) => {
                    const SrvIcon = (FaIcons as any)[srv.icon] || FaIcons.FaBalanceScale;
                    return (
                      <div key={srv.id} className="ind-service-item">
                        <div className="ind-srv-icon-wrap">
                          <SrvIcon className="ind-srv-icon" />
                        </div>
                        <div className="ind-srv-content">
                          <h4 className="ind-srv-title">{srv.title}</h4>
                          <p className="ind-srv-desc">{srv.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="ind-sidebar-col">
            
            {data.approach && data.approach.length > 0 && (
              <>
                <h2 className="ind-section-heading">Our Approach</h2>
                <div className="ind-approach-list">
                  {data.approach.map((app) => {
                    const AppIcon = (FaIcons as any)[app.icon] || FaIcons.FaBalanceScale;
                    return (
                      <div key={app.id} className="ind-approach-item">
                        <div className="ind-app-icon-wrap">
                          <AppIcon className="ind-app-icon" />
                        </div>
                        <div className="ind-app-content">
                          <h4 className="ind-app-title">{app.title}</h4>
                          <p className="ind-app-desc">{app.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {data.matters && data.matters.length > 0 && (
              <>
                <h2 className="ind-section-heading" style={{ marginTop: '50px' }}>Representative Matters</h2>
                <div className="ind-matters-box">
                  <ul className="ind-matters-list">
                    {data.matters.map((matter, idx) => (
                      <li key={idx}>{matter}</li>
                    ))}
                  </ul>
                  <Link href="/case-studies" className="ind-matters-link">
                    Explore All Case Studies &rarr;
                  </Link>
                </div>
              </>
            )}

          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          /* Top Section */
          .ind-top-section {
            display: flex;
            gap: 50px;
            align-items: center;
            margin-bottom: 70px;
          }
          .ind-top-left {
            flex: 1;
          }
          .ind-badge-wrap {
            display: flex;
            align-items: center;
            gap: 10px;
            color: var(--color-accent);
            font-weight: 600;
            font-size: 13px;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 20px;
          }
          .ind-icon-badge {
            font-size: 20px;
          }
          .ind-title-main {
            font-size: 48px;
            color: var(--color-primary);
            font-family: var(--font-heading);
            margin: 0 0 15px 0;
            font-weight: 700;
          }
          .ind-subtitle-gold {
            color: var(--color-accent);
            font-size: 22px;
            font-family: var(--font-primary);
            margin: 0 0 20px 0;
            font-weight: 500;
          }
          .ind-intro-text {
            color: var(--color-text-light);
            font-size: 16px;
            line-height: 1.6;
            margin: 0;
          }
          .ind-top-right {
            flex: 1;
          }
          .ind-featured-image {
            width: 100%;
            height: 350px;
            background-size: cover;
            background-position: center;
            border-radius: 12px;
          }

          /* Content Split */
          .ind-content-split {
            display: flex;
            gap: 60px;
          }
          .ind-main-col {
            flex: 0 0 62%;
          }
          .ind-sidebar-col {
            flex: 1;
          }

          /* Common Headings */
          .ind-section-heading {
            font-size: 28px;
            color: var(--color-primary);
            font-family: var(--font-heading);
            border-bottom: 2px solid var(--color-accent);
            padding-bottom: 12px;
            margin-bottom: 30px;
            display: inline-block;
          }

          /* Overview */
          .ind-overview-image {
            float: right;
            width: 250px;
            height: 250px;
            background-size: cover;
            background-position: center;
            border-radius: 8px;
            margin: 0 0 20px 30px;
          }
          .ind-overview-text p {
            color: var(--color-text);
            font-size: 16px;
            line-height: 1.7;
            margin-bottom: 20px;
          }

          /* Services Grid */
          .ind-services-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px 30px;
          }
          .ind-service-item {
            display: flex;
            gap: 15px;
          }
          .ind-srv-icon-wrap {
            color: var(--color-accent);
            font-size: 28px;
            margin-top: 5px;
          }
          .ind-srv-title {
            color: var(--color-primary);
            font-size: 18px;
            margin: 0 0 10px 0;
            font-weight: 700;
          }
          .ind-srv-desc {
            color: var(--color-text-light);
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
          }

          /* Approach List */
          .ind-approach-list {
            display: flex;
            flex-direction: column;
            gap: 30px;
          }
          .ind-approach-item {
            display: flex;
            gap: 20px;
            align-items: flex-start;
          }
          .ind-app-icon-wrap {
            width: 45px;
            height: 45px;
            border: 1px solid var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 18px;
            flex-shrink: 0;
          }
          .ind-app-title {
            color: var(--color-primary);
            font-size: 16px;
            margin: 0 0 8px 0;
            font-weight: 700;
          }
          .ind-app-desc {
            color: var(--color-text-light);
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
          }

          /* Matters Box */
          .ind-matters-box {
            background-color: #fcfaf6;
            padding: 35px 30px;
            border-radius: 8px;
          }
          .ind-matters-list {
            list-style: none;
            padding: 0;
            margin: 0 0 25px 0;
          }
          .ind-matters-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 15px;
            color: var(--color-text);
            font-size: 14.5px;
            line-height: 1.6;
          }
          .ind-matters-list li::before {
            content: "•";
            color: var(--color-accent);
            font-size: 20px;
            position: absolute;
            left: 0;
            top: -2px;
          }
          .ind-matters-link {
            color: var(--color-accent);
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .ind-matters-link:hover {
            color: var(--color-primary);
          }

          /* Responsive */
          @media (max-width: 992px) {
            .ind-top-section {
              flex-direction: column;
            }
            .ind-featured-image {
              height: 300px;
            }
            .ind-content-split {
              flex-direction: column;
            }
            .ind-overview-image {
              float: none;
              width: 100%;
              margin: 0 0 20px 0;
            }
          }
          @media (max-width: 768px) {
            .ind-services-grid {
              grid-template-columns: 1fr;
            }
            .ind-title-main {
              font-size: 36px;
            }
          }
        `
      }} />
    </section>
  );
};
