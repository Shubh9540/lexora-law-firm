"use client";

import React, { useState, useEffect } from 'react';
import { HeaderData } from '../../../data/templates.types';
import { FaBars, FaTimes, FaAngleDown, FaArrowRight } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go'; // For a more robust scale icon if needed

export const Header = ({ data }: { data?: HeaderData }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!data) return null;

  return (
    <>
      <header className={"header-container " + (isScrolled ? 'scrolled' : '')}>
        <div className="header-content">
          <div className="logo-container">
            {data.image ? (
              <img src={"/" + data.image} alt={data.logoText || "Logo"} className="logo-image" />
            ) : (
              <>
                <div className="logo-icon-wrapper">
                  <GoLaw className="logo-scale" />
                </div>
                <div className="logo-text">
                  <h1>{data.logoText}</h1>
                  <p>{data.logoSubText}</p>
                </div>
              </>
            )}
          </div>
          
          <nav className="desktop-nav">
            <ul>
              {data.navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className={index === 0 ? 'active' : ''}>
                    {link.label}
                    {link.dropdown && <FaAngleDown className="dropdown-icon" />}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="header-actions">
            <a href="#" className="contact-btn">
              {data.contactButton} 
              <span className="btn-icon gold-icon"><FaArrowRight /></span>
            </a>
            <a href="#" className="consult-btn">
              {data.consultButton}
              <span className="btn-icon dark-icon"><FaArrowRight /></span>
            </a>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={"mobile-nav-overlay " + (isMobileMenuOpen ? 'open' : '')}>
        <nav className="mobile-nav">
          <ul>
            {data.navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} onClick={() => setIsMobileMenuOpen(false)}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .header-container {
            position: sticky;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background-color: #ffffff;
            box-shadow: 0 4px 15px rgba(0,0,0,0.03);
            transition: all 0.3s ease;
          }
          .header-container.scrolled {
            box-shadow: 0 8px 30px rgba(5, 16, 36, 0.08);
            background-color: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
          }
          .header-content {
            max-width: 1700px;
            margin: 0 auto;
            padding: 12px 20px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            transition: padding 0.3s ease;
          }
          .header-container.scrolled .header-content {
            padding: 8px 20px;
          }
          
          .logo-container {
            display: flex;
            align-items: center;
            gap: 15px;
          }
          
          /* Simulating the Laurel Wreath Shield */
          .logo-icon-wrapper {
            width: 52px;
            height: 62px;
            background-color: var(--color-primary);
            border-radius: 4px 4px 50% 50%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid var(--color-accent);
          }
          .logo-icon-wrapper::before, .logo-icon-wrapper::after {
            content: '';
            position: absolute;
            width: 80%;
            height: 80%;
            border-radius: 50%;
            border: 2px dashed var(--color-accent);
            border-color: var(--color-accent) transparent transparent transparent;
            top: 5px;
            opacity: 0.5;
          }
          .logo-icon-wrapper::before { left: -10px; transform: rotate(-30deg); }
          .logo-icon-wrapper::after { right: -10px; transform: rotate(30deg); }
          
          .logo-scale {
            color: #ffffff;
            font-size: 30px;
            z-index: 2;
          }
          .logo-text h1 {
            font-size: 26px;
            color: var(--color-primary);
            margin: 0 0 2px 0;
            line-height: 1;
            letter-spacing: 0.5px;
          }
          .logo-text p {
            font-size: 10px;
            color: var(--color-primary);
            margin: 0;
            letter-spacing: 1px;
            text-transform: uppercase;
            font-weight: 700;
            font-family: var(--font-primary);
          }
          
          .logo-image {
            max-height: 58px;
            width: auto;
            object-fit: contain;
          }
          
          .desktop-nav {
            margin-left: auto;
          }
          
          .desktop-nav ul {
            display: flex;
            gap: 30px;
            margin: 0;
            padding: 0;
            align-items: center;
          }
          .desktop-nav a {
            font-size: 13px;
            font-weight: 600;
            color: var(--color-primary);
            transition: color 0.3s ease;
            position: relative;
            display: flex;
            align-items: center;
            gap: 5px;
            padding-bottom: 5px;
          }
          .dropdown-icon {
            font-size: 10px;
            margin-top: 2px;
          }
          .desktop-nav a:hover, .desktop-nav a.active {
            color: var(--color-accent);
          }
          .desktop-nav a.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--color-accent);
          }
          
          .header-actions {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-left: 30px;
          }
          
          .contact-btn {
            background-color: #ffffff;
            color: var(--color-primary);
            border: 1px solid var(--color-accent);
            padding: 5px 5px 5px 18px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
          }
          .contact-btn:hover {
            background-color: #f9f9f9;
          }
          
          .consult-btn {
            background: linear-gradient(135deg, #c49250 0%, #ddaf6a 100%);
            color: #ffffff;
            border: none;
            padding: 5px 5px 5px 18px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
          }
          .consult-btn:hover {
            filter: brightness(1.05);
          }
          
          .btn-icon {
            width: 28px;
            height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
          }
          .gold-icon {
            background-color: var(--color-accent);
            color: #ffffff;
          }
          .dark-icon {
            background-color: var(--color-primary);
            color: #ffffff;
          }
          
          .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--color-primary);
            cursor: pointer;
            margin-left: 10px;
          }
          
          .mobile-nav-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(255, 255, 255, 0.98);
            z-index: 999;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.4s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .mobile-nav-overlay.open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
          .mobile-nav ul {
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
          }
          .mobile-nav a {
            font-size: 24px;
            font-weight: 600;
            color: var(--color-primary);
            font-family: var(--font-heading);
          }
          
          @media (max-width: 1200px) {
            .desktop-nav {
              display: none;
            }
            .mobile-menu-btn {
              display: block;
            }
          }
          @media (max-width: 576px) {
            .header-content {
              padding: 10px 15px;
            }
            .logo-image {
              max-height: 40px; /* Reduce logo size on small screens */
            }
            .header-actions {
              margin-left: auto; /* Push to right */
              gap: 8px;
            }
            .header-actions .contact-btn {
              display: none;
            }
            .header-actions .consult-btn {
              padding: 8px 12px;
              font-size: 11px;
              white-space: nowrap; /* Prevent "Book Consultation" from wrapping */
            }
            .header-actions .consult-btn .btn-icon {
              display: none;
            }
            .mobile-menu-btn {
              margin-left: 5px;
              font-size: 22px;
            }
          }
        `
      }} />
    </>
  );
};
