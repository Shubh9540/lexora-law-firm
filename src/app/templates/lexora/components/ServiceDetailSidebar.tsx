"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ServiceItem, ServicesData } from '../../../data/templates.types';
import { FaSearch, FaDownload, FaPaperPlane, FaBalanceScale, FaSpinner } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

interface SidebarProps {
  currentService: ServiceItem;
  allServices: ServicesData;
}

export const ServiceDetailSidebar = ({ currentService, allServices }: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        alert(`Search results for: "${searchQuery}"\n(This is a template demo. In production, this would navigate to a search page.)`);
        setIsSearching(false);
        setSearchQuery('');
      }, 800);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Thank you! Your message has been sent successfully. We will contact you shortly.");
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1200);
  };

  return (
    <div className="service-sidebar">
      
      {/* Search Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Search</h3>
        <form className="search-form" onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Search services..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
          <button type="submit" disabled={isSearching}>
            {isSearching ? <FaSpinner className="fa-spin" /> : <FaSearch />}
          </button>
        </form>
      </div>

      {/* Services Menu Widget */}
      <div className="sidebar-widget">
        <h3 className="widget-title">Our Services</h3>
        <ul className="service-menu-list">
          {allServices.items.map((service) => (
            <li key={service.id} className={currentService.id === service.id ? 'active' : ''}>
              <Link href={service.linkUrl || '#'}>
                <span className="menu-icon">
                  <FaBalanceScale />
                </span>
                <span className="menu-text">{service.title}</span>
                <FaArrowRight className="menu-arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Resources Widget */}
      {currentService.resources && currentService.resources.length > 0 && (
        <div className="sidebar-widget">
          <h3 className="widget-title">Resources</h3>
          <ul className="resources-list">
            {currentService.resources.map((res) => (
              <li key={res.id}>
                <a href={res.url} target="_blank" rel="noopener noreferrer">
                  <span className="res-icon">📄</span>
                  <span className="res-text">{res.title}</span>
                  <FaDownload className="download-icon" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Contact Form Widget */}
      <div className="sidebar-widget form-widget">
        <h3 className="widget-title">Have Questions?</h3>
        <p className="widget-desc">We're here to help you.</p>
        <form className="sidebar-contact-form" onSubmit={handleContactSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows={4} required></textarea>
          <button type="submit" className="primary-btn-dark full-width" disabled={isSubmitting}>
            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'} {!isSubmitting && <FaPaperPlane className="btn-icon" />}
          </button>
        </form>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .service-sidebar {
            display: flex;
            flex-direction: column;
            gap: 40px;
          }
          
          .sidebar-widget {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.03);
            border: 1px solid #f0f0f0;
          }
          
          .widget-title {
            font-size: 22px;
            font-family: var(--font-primary);
            color: var(--color-primary);
            margin: 0 0 20px 0;
            font-weight: 600;
            position: relative;
            padding-bottom: 15px;
          }
          .widget-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 40px;
            height: 2px;
            background-color: var(--color-accent);
          }
          
          /* Search Form */
          .search-form {
            display: flex;
            align-items: center;
          }
          .search-form input {
            flex-grow: 1;
            padding: 12px 15px;
            border: 1px solid #e5e7eb;
            border-radius: 4px 0 0 4px;
            outline: none;
            font-size: 14px;
          }
          .search-form button {
            background-color: var(--color-primary);
            color: #ffffff;
            border: none;
            padding: 13px 20px;
            border-radius: 0 4px 4px 0;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }
          .search-form button:hover:not(:disabled) {
            background-color: var(--color-accent);
          }
          .search-form button:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }
          
          @keyframes fa-spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .fa-spin {
            animation: fa-spin 2s infinite linear;
          }
          
          /* Service Menu */
          .service-menu-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .service-menu-list li a {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            background-color: #fbf8f2;
            border-radius: 4px;
            color: var(--color-text);
            text-decoration: none;
            font-weight: 500;
            font-size: 15px;
            transition: all 0.3s ease;
          }
          .service-menu-list li.active a,
          .service-menu-list li a:hover {
            background-color: var(--color-primary);
            color: #ffffff;
          }
          .service-menu-list .menu-icon {
            margin-right: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 28px;
            height: 28px;
            background-color: rgba(0,0,0,0.05);
            border-radius: 4px;
            color: var(--color-accent);
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .service-menu-list li.active .menu-icon,
          .service-menu-list li a:hover .menu-icon {
            background-color: rgba(255,255,255,0.1);
            color: #ffffff;
          }
          .service-menu-list .menu-text {
            flex-grow: 1;
          }
          .service-menu-list .menu-arrow {
            font-size: 12px;
          }
          
          /* Resources List */
          .resources-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .resources-list li a {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            background-color: #ffffff;
            border: 1px solid #f0f0f0;
            border-radius: 4px;
            color: var(--color-text);
            text-decoration: none;
            font-weight: 500;
            font-size: 15px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          }
          .resources-list li a:hover {
            border-color: var(--color-accent);
            color: var(--color-accent);
          }
          .res-icon {
            margin-right: 15px;
            font-size: 18px;
          }
          .res-text {
            flex-grow: 1;
          }
          .download-icon {
            font-size: 14px;
            color: var(--color-text-light);
          }
          .resources-list li a:hover .download-icon {
            color: var(--color-accent);
          }
          
          /* Form Widget */
          .widget-desc {
            color: #666666;
            font-size: 14px;
            margin-bottom: 20px;
          }
          .sidebar-contact-form {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }
          .sidebar-contact-form input,
          .sidebar-contact-form textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #e5e7eb;
            border-radius: 4px;
            outline: none;
            font-size: 14px;
            background-color: #fcfcfc;
          }
          .sidebar-contact-form input:focus,
          .sidebar-contact-form textarea:focus {
            border-color: var(--color-accent);
          }
          .full-width {
            width: 100%;
            justify-content: center;
          }
          
          .primary-btn-dark {
            background-color: var(--color-primary);
            color: #ffffff !important;
            padding: 14px 25px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 600;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
          }
          .primary-btn-dark:hover {
            background-color: var(--color-accent);
          }
        `
      }} />
    </div>
  );
};
