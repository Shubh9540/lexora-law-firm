import React from 'react';
import { BreadcrumbData } from '../../../data/templates.types';
import { FaAngleRight } from 'react-icons/fa';
import Link from 'next/link';

export const Breadcrumb = ({ data }: { data?: BreadcrumbData }) => {
  if (!data) return null;

  return (
    <section className="breadcrumb-section">
      <div className="breadcrumb-overlay"></div>
      <div className="breadcrumb-container">
        <h1 className="breadcrumb-title">{data.title}</h1>
        <ul className="breadcrumb-list">
          {data.paths.map((path, index) => (
            <li key={index} className="breadcrumb-item">
              {path.url ? (
                <Link href={path.url} className="breadcrumb-link">{path.label}</Link>
              ) : (
                <span className="breadcrumb-current">{path.label}</span>
              )}
              {index < data.paths.length - 1 && (
                <span className="breadcrumb-separator">
                  &rarr;
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .breadcrumb-section {
            position: relative;
            background-image: url('${data.bgImage}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 100px 20px;
            text-align: center;
          }
          .breadcrumb-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(10, 24, 40, 0.75); /* Dark blue overlay */
          }
          .breadcrumb-container {
            position: relative;
            z-index: 2;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .breadcrumb-title {
            color: #ffffff;
            font-family: var(--font-primary);
            font-size: 52px;
            font-weight: 700;
            margin-bottom: 25px;
          }
          .breadcrumb-list {
            display: flex;
            align-items: center;
            gap: 12px;
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .breadcrumb-item {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 15px;
            font-weight: 600;
          }
          .breadcrumb-link {
            color: #ffffff;
            text-decoration: none;
            transition: color 0.3s ease;
          }
          .breadcrumb-link:hover {
            color: var(--color-accent);
          }
          .breadcrumb-current {
            color: #ffffff;
          }
          .breadcrumb-separator {
            color: #ffffff;
            font-size: 14px;
            display: flex;
            align-items: center;
            font-family: system-ui, -apple-system, sans-serif;
          }

          @media (max-width: 768px) {
            .breadcrumb-section {
              padding: 70px 20px;
            }
            .breadcrumb-title {
              font-size: 38px;
            }
          }
        `
      }} />
    </section>
  );
};
