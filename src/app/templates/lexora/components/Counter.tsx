import React from 'react';
import { CounterData } from '../../../data/templates.types';
import { IoTrophyOutline, IoScaleOutline, IoPeopleOutline, IoRibbonOutline } from 'react-icons/io5';

export const Counter = ({ data }: { data?: CounterData }) => {
  if (!data) return null;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'IoTrophyOutline': return <IoTrophyOutline />;
      case 'IoScaleOutline': return <IoScaleOutline />;
      case 'IoPeopleOutline': return <IoPeopleOutline />;
      case 'IoRibbonOutline': return <IoRibbonOutline />;
      default: return <IoPeopleOutline />;
    }
  };

  return (
    <section className="counter-section">
      <div className="counter-container">
        <div className="counter-grid">
          {data.stats.map(stat => (
            <div key={stat.id} className="counter-item">
              <div className="counter-icon">
                {renderIcon(stat.icon)}
              </div>
              <div className="counter-text">
                <h3 className="counter-number">{stat.number}</h3>
                <p className="counter-label">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .counter-section {
            padding: 40px 0 30px;
            background-color: var(--color-primary);
            border-top: 1px solid rgba(255, 255, 255, 0.05);
          }
          
          .counter-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .counter-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 0; /* No gap so borders connect perfectly */
          }
          
          .counter-item {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            padding: 10px 15px; /* Added padding instead of gap */
            border-right: 1px solid rgba(255, 255, 255, 0.08); /* Faint vertical border */
          }
          .counter-item:last-child {
            border-right: none; /* Remove border from the last item */
          }
          
          .counter-icon {
            font-size: 55px; /* Slightly larger for outline style */
            color: #ffffff;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            stroke-width: 1px; /* Thinner stroke if supported by the SVG */
          }
          .counter-item:hover .counter-icon {
            transform: scale(1.1);
            color: var(--color-accent);
          }
          
          .counter-text {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
          }
          
          .counter-number {
            font-size: 38px;
            color: #ffffff;
            font-family: var(--font-primary);
            font-weight: 700;
            line-height: 1;
            margin-bottom: 5px;
          }
          
          .counter-label {
            color: #d1d5db;
            font-size: 14px;
            font-weight: 400;
          }

          @media (max-width: 992px) {
            .counter-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 40px 0;
            }
            .counter-item:nth-child(2) {
              border-right: none;
            }
            .counter-item:nth-child(3), .counter-item:nth-child(4) {
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 40px;
            }
          }
          @media (max-width: 576px) {
            .counter-grid {
              grid-template-columns: repeat(2, 1fr); /* 2x2 grid on mobile */
              gap: 30px 0;
            }
            .counter-item {
              gap: 12px;
              padding: 0 10px;
              justify-content: center;
              border-top: none; /* Reset from tablet */
            }
            .counter-item:nth-child(3), .counter-item:nth-child(4) {
              border-top: 1px solid rgba(255, 255, 255, 0.08);
              padding-top: 30px;
            }
            .counter-icon {
              font-size: 38px; /* Smaller icon for mobile */
            }
            .counter-number {
              font-size: 26px; /* Smaller number */
            }
            .counter-label {
              font-size: 11px; /* Smaller label */
              line-height: 1.3;
            }
          }
        `
      }} />
    </section>
  );
};

