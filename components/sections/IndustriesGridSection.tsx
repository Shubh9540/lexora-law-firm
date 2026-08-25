import React from 'react';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import { IndustriesData } from '@/types/templates.types';

interface IndustriesGridSectionProps {
  data: IndustriesData;
}

export const IndustriesGridSection = ({ data }: IndustriesGridSectionProps) => {
  return (
    <section className="industries-grid-section" style={{ padding: '80px 20px', backgroundColor: '#fcfcfc' }}>
      <div className="ind-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div className="ind-header" style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
            <FaIcons.FaBalanceScale style={{ color: 'var(--color-accent)', fontSize: '32px' }} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
            <span style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-accent)' }}></span>
            <h2 style={{ 
              fontSize: '42px', 
              color: 'var(--color-primary)', 
              fontFamily: 'var(--font-heading)',
              margin: 0
            }}>{data.title}</h2>
            <span style={{ height: '1px', width: '40px', backgroundColor: 'var(--color-accent)' }}></span>
          </div>
          <p style={{ color: 'var(--color-text-light)', fontSize: '16px', lineHeight: '1.6' }}>
            {data.subtitle}
          </p>
        </div>

        <div className="ind-grid">
          {data.items.map((item) => {
            const Icon = (FaIcons as any)[item.icon] || FaIcons.FaBalanceScale;
            return (
              <div key={item.id} className="ind-card">
                <div className="ind-card-image" style={{ backgroundImage: `url('${item.image}')` }}></div>
                <div className="ind-card-content">
                  <div className="ind-card-icon-wrapper">
                    <Icon className="ind-card-icon" />
                  </div>
                  <h3 className="ind-card-title">{item.title}</h3>
                  <p className="ind-card-desc">{item.shortDescription}</p>
                  <Link href={`/industries/${item.slug}`} className="ind-card-link">
                    Learn More &rarr;
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .ind-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
          }
          .ind-card {
            border-radius: 6px;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(0,0,0,0.06);
            background: #ffffff;
            display: flex;
            flex-direction: column;
            border: 1px solid #f0f0f0;
            transition: transform 0.3s ease;
          }
          .ind-card:hover {
            transform: translateY(-5px);
          }
          .ind-card-image {
            height: 180px;
            background-size: cover;
            background-position: center;
          }
          .ind-card-content {
            padding: 45px 25px 30px;
            text-align: center;
            position: relative;
            flex: 1;
            display: flex;
            flex-direction: column;
          }
          .ind-card-icon-wrapper {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 50px;
            height: 50px;
            background-color: var(--color-primary);
            border: 2px solid var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 2;
          }
          .ind-card-icon {
            color: var(--color-accent);
            font-size: 20px;
          }
          .ind-card-title {
            color: var(--color-primary);
            font-size: 20px;
            font-family: var(--font-heading);
            margin-bottom: 15px;
          }
          .ind-card-desc {
            color: var(--color-text-light);
            font-size: 14px;
            line-height: 1.6;
            flex: 1;
            margin-bottom: 25px;
          }
          .ind-card-link {
            color: var(--color-accent);
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .ind-card-link:hover {
            color: var(--color-primary);
          }

          @media (max-width: 1024px) {
            .ind-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }
          @media (max-width: 768px) {
            .ind-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 576px) {
            .ind-grid {
              grid-template-columns: 1fr;
            }
          }
        `
      }} />
    </section>
  );
};
