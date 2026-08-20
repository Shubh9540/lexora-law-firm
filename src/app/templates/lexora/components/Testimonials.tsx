import React from 'react';
import { TestimonialsData } from '../../../data/templates.types';
import { FaStar, FaQuoteRight } from 'react-icons/fa';

export const Testimonials = ({ data }: { data?: TestimonialsData }) => {
  if (!data) return null;

  // Split items into two rows for the double marquee effect
  const half = Math.ceil(data.items.length / 2);
  const topRow = data.items.slice(0, half);
  const bottomRow = data.items.slice(half);

  // Helper to render a single card
  const renderCard = (item: any, index: number, prefix: string) => (
    <div key={`${prefix}-${item.id}-${index}`} className="testimonial-card">
      <div className="card-top">
        <div className="author-info">
          <div className="author-img">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="author-details">
            <h4 className="author-name">{item.name}</h4>
            <p className="author-role">{item.role}</p>
          </div>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className={i < item.rating ? 'star active' : 'star'} />
          ))}
        </div>
      </div>
      <div className="card-content">
        <p>{item.text}</p>
        <FaQuoteRight className="quote-icon" />
      </div>
    </div>
  );

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="test-badge">
            {data.badge}
          </div>
          <h2 className="test-title">
            {data.title.split('\\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </h2>
        </div>
      </div>

      <div className="testimonials-marquee-wrapper">
        {/* Top Track (Moving Right) */}
        <div className="marquee-row">
          <div className="marquee-track track-right">
            {/* Duplicate content to create seamless loop */}
            {[...topRow, ...topRow].map((item, idx) => renderCard(item, idx, 'top'))}
          </div>
        </div>
        
        {/* Bottom Track (Moving Left) */}
        <div className="marquee-row">
          <div className="marquee-track track-left">
            {/* Duplicate content to create seamless loop */}
            {[...bottomRow, ...bottomRow].map((item, idx) => renderCard(item, idx, 'bottom'))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .testimonials-section {
            padding: 40px 0 30px;
            background-color: #ffffff; /* White background as per reference */
            overflow: hidden; /* Hide horizontal scroll */
          }
          
          .testimonials-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .testimonials-header {
            text-align: center;
            margin-bottom: 60px;
          }
          
          .test-badge {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 15px;
          }
          .test-badge::before, .test-badge::after {
            content: '';
            display: inline-block;
            width: 30px;
            height: 1px;
            background-color: var(--color-accent);
            margin: 0 15px;
          }
          
          .test-title {
            font-size: 42px;
            color: var(--color-primary);
            font-family: var(--font-heading);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 0;
          }
          
          /* Marquee Layout */
          .testimonials-marquee-wrapper {
            display: flex;
            flex-direction: column;
            gap: 30px;
            width: 100%;
          }
          
          .marquee-row {
            display: flex;
            width: 100%;
            overflow: hidden;
          }
          
          .marquee-track {
            display: flex;
            gap: 30px;
            width: max-content;
          }
          
          /* Animations */
          .track-left {
            animation: scrollLeft 40s linear infinite;
          }
          .track-right {
            /* Start offset so it's not identical to the left track visually */
            transform: translateX(-50%);
            animation: scrollRight 40s linear infinite;
          }
          
          .marquee-track:hover {
            animation-play-state: paused;
          }
          
          @keyframes scrollLeft {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          @keyframes scrollRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          
          /* Card Styling */
          .testimonial-card {
            background-color: #f3f4f6; /* Light gray background */
            border-radius: 12px;
            padding: 40px;
            width: 500px; /* Fixed width for consistent marquee */
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            gap: 20px;
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease;
          }
          .testimonial-card:hover {
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            background-color: #ffffff;
            border: 1px solid #e5e7eb;
          }
          
          .card-top {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            position: relative;
            z-index: 2;
          }
          
          .author-info {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          .author-img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            overflow: hidden;
          }
          .author-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .author-name {
            font-size: 20px;
            color: var(--color-primary);
            font-weight: 700;
            margin-bottom: 2px;
            font-family: var(--font-primary);
          }
          
          .author-role {
            font-size: 13px;
            color: var(--color-accent);
            font-weight: 500;
          }
          
          .rating {
            display: flex;
            gap: 4px;
            padding-top: 5px;
          }
          
          .star {
            color: #d1d5db; /* Grey star */
            font-size: 14px;
          }
          .star.active {
            color: #c49250; /* Gold star */
          }
          
          .card-content {
            position: relative;
            flex-grow: 1;
            z-index: 2;
          }
          
          .card-content p {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.8;
          }
          
          .quote-icon {
            position: absolute;
            bottom: -20px;
            right: 0;
            font-size: 60px;
            color: rgba(0, 0, 0, 0.04);
            z-index: 1;
          }

          @media (max-width: 768px) {
            .test-title {
              font-size: 32px;
            }
            .testimonial-card {
              width: 350px;
              padding: 25px;
            }
            .author-img {
              width: 50px;
              height: 50px;
            }
          }
        `
      }} />
    </section>
  );
};
