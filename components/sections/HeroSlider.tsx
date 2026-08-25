"use client";

import React, { useState, useEffect } from 'react';
import { HeroData } from '@/types/templates.types';
import { FaArrowRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

export const HeroSlider = ({ data }: { data?: HeroData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!data?.slides) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [data]);

  const handlePrev = () => {
    if (!data?.slides) return;
    setCurrentSlide((prev) => (prev === 0 ? data.slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!data?.slides) return;
    setCurrentSlide((prev) => (prev === data.slides.length - 1 ? 0 : prev + 1));
  };

  if (!data || !data.slides) return null;

  return (
    <section className="main-slider-one">
      {data.slides.map((slide, index) => {
        const titleLines = slide.title.split('\\n');
        const subtitleLines = slide.subtitle.split('\\n');
        
        return (
          <div 
            key={slide.id} 
            className={"main-slider-one__single " + (index === currentSlide ? 'active' : '')}
          >
            <div 
              className="main-slider-one__bg"
              style={{ backgroundImage: "url(/" + slide.image + ")" }}
            ></div>
            <div className="main-slider-overlay"></div>
            
            <div className="container main-slider-container">
              <div className="main-slider-one__content">
                <div className="tagline">
                  <span>{slide.badge}</span>
                </div>
                <div className="title-box">
                  <h2>
                    {titleLines.map((line, i) => (
                      <React.Fragment key={i}>
                        <span className={i === titleLines.length - 1 ? "gold-text" : ""}>{line}</span>
                        <br />
                      </React.Fragment>
                    ))}
                  </h2>
                </div>
                <div className="text-box">
                  <p>
                    {subtitleLines.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>

                <div className="main-slider-one__btn">
                  <a href={slide.buttonUrl} className="thm-btn-outline">
                    {slide.buttonText}
                    <i className="icon-next"><FaArrowRight /></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="slider-nav-btn prev-btn" onClick={handlePrev} aria-label="Previous Slide">
        <FaAngleLeft />
      </div>
      <div className="slider-nav-btn next-btn" onClick={handleNext} aria-label="Next Slide">
        <FaAngleRight />
      </div>

      {/* Grid Lines Overlay */}
      <div className="grid-lines">
        <div className="line line1"></div>
        <div className="line line2"></div>
        <div className="line line3"></div>
        <div className="line line4"></div>
        <div className="line line5"></div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .main-slider-one {
            position: relative;
            height: calc(100vh - 120px);
            min-height: 700px;
            overflow: hidden;
            background-color: var(--color-primary);
          }
          
          .main-slider-one__single {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            visibility: hidden;
            transition: opacity 1s ease-in-out, visibility 1s ease-in-out;
            z-index: 1;
          }
          .main-slider-one__single.active {
            opacity: 1;
            visibility: visible;
            z-index: 2;
          }
          
          .main-slider-one__bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transform: scale(1.05);
            transition: transform 6s ease;
          }
          .main-slider-one__single.active .main-slider-one__bg {
            transform: scale(1);
          }
          
          .main-slider-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, rgba(5,16,36,0.95) 0%, rgba(5,16,36,0.7) 50%, rgba(5,16,36,0.2) 100%);
            z-index: 1;
          }
          
          .main-slider-container {
            position: relative;
            z-index: 5;
            height: 100%;
            max-width: 1200px; /* Keep it indented relative to 1700px header */
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            align-items: center;
          }
          
          .main-slider-one__content {
            max-width: 700px;
            color: #fff;
          }
          
          .tagline {
            margin-bottom: 25px;
            overflow: hidden;
          }
          .tagline span {
            display: inline-flex;
            flex-direction: column;
            align-items: flex-start;
            color: var(--color-accent);
            font-size: 13px;
            font-weight: 500;
            letter-spacing: 2px;
            text-transform: uppercase;
            position: relative;
            transform: translateY(100%);
            opacity: 0;
            transition: all 0.8s ease 0.4s;
          }
          /* Diamond and Line styling */
          .tagline span::after {
            content: '';
            display: block;
            width: 100%;
            height: 1px;
            background-color: var(--color-accent);
            margin-top: 15px;
            position: relative;
          }
          .tagline span::before {
            content: '';
            position: absolute;
            bottom: -3px;
            left: 50%;
            transform: translateX(-50%) rotate(45deg);
            width: 7px;
            height: 7px;
            background-color: var(--color-accent);
            z-index: 2;
          }
          .main-slider-one__single.active .tagline span {
            transform: translateY(0);
            opacity: 1;
          }
          
          .title-box {
            margin-bottom: 20px;
            overflow: hidden;
            margin-top: 20px;
          }
          .title-box h2 {
            font-size: 54px; 
            color: #ffffff; 
            font-family: 'Playfair Display', serif !important; /* Force serif for header */
            font-weight: 700;
            line-height: 1.1;
            margin: 0;
            transform: translateY(100px);
            opacity: 0;
            transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1) 0.6s;
          }
          .main-slider-one__single.active .title-box h2 {
            transform: translateY(0);
            opacity: 1;
          }
          .title-box h2 .gold-text {
            color: var(--color-accent);
          }
          
          .text-box {
            margin-bottom: 35px; 
            overflow: hidden;
          }
          .text-box p {
            font-size: 15px; 
            line-height: 1.6;
            color: #d1d5db;
            margin: 0;
            position: relative;
            padding-top: 20px;
            transform: translateY(50px);
            opacity: 0;
            transition: all 0.8s ease 0.8s;
          }
          .text-box p::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 35px;
            height: 2px;
            background-color: var(--color-accent);
          }
          .main-slider-one__single.active .text-box p {
            transform: translateY(0);
            opacity: 1;
          }
          
          .main-slider-one__btn {
            overflow: hidden;
            padding-bottom: 10px;
          }
          
          .thm-btn-outline {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            gap: 25px;
            background-color: transparent;
            color: #fff;
            padding: 8px 8px 8px 30px;
            border: 1px solid rgba(196, 154, 69, 0.4);
            border-radius: 4px; /* Rectangular with slight roundness like screenshot */
            font-size: 12px;
            font-weight: 500;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 0.3s ease;
            transform: translateY(50px);
            opacity: 0;
          }
          .main-slider-one__single.active .thm-btn-outline {
            transform: translateY(0);
            opacity: 1;
            transition: transform 0.8s ease 1s, opacity 0.8s ease 1s, all 0.3s ease;
          }
          .thm-btn-outline:hover {
            border-color: var(--color-accent);
            background-color: rgba(196, 154, 69, 0.05);
          }
          .thm-btn-outline .icon-next {
            width: 32px;
            height: 32px;
            background-color: var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary);
            font-size: 12px;
            transition: transform 0.3s ease;
          }
          .thm-btn-outline:hover .icon-next {
            transform: scale(1.05);
          }
          
          /* Grid Lines Overlay */
          .grid-lines {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100%;
            max-width: 1400px;
            height: 100%;
            display: flex;
            justify-content: space-between;
            z-index: 3;
            pointer-events: none;
            padding: 0 20px;
          }
          .grid-lines .line {
            width: 1px;
            height: 100%;
            background-color: rgba(255, 255, 255, 0.05);
          }
          
          /* Navigation Buttons */
          .slider-nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 60px; /* Larger */
            height: 60px; /* Larger */
            border-radius: 50%;
            border: 1px solid rgba(196, 154, 69, 0.3);
            background-color: rgba(5, 16, 36, 0.5);
            backdrop-filter: blur(5px);
            color: var(--color-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px; /* Smaller icon inside larger circle */
            cursor: pointer;
            z-index: 10;
            transition: all 0.3s ease;
          }
          .slider-nav-btn:hover {
            background-color: var(--color-accent);
            color: var(--color-primary);
            border-color: var(--color-accent);
          }
          .prev-btn { left: 20px; }
          .next-btn { right: 20px; }

          @media (max-width: 1200px) {
            .title-box h2 { font-size: 56px; }
          }
          @media (max-width: 992px) {
            .title-box h2 { font-size: 48px; }
            .grid-lines { display: none; }
            .prev-btn { left: 20px; }
            .next-btn { right: 20px; }
          }
          @media (max-width: 768px) {
            .main-slider-one { min-height: 600px; height: 100vh; }
            .title-box h2 { font-size: 38px; }
            .text-box p { font-size: 16px; }
            .thm-btn-outline { padding: 8px 8px 8px 25px; font-size: 12px; }
            .slider-nav-btn { width: 40px; height: 40px; font-size: 14px; }
          }
        `
      }} />
    </section>
  );
};
