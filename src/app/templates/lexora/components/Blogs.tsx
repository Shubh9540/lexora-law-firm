import React from 'react';
import { BlogsData } from '../../../data/templates.types';
import { FaRegCalendarAlt, FaRegComments, FaAngleDoubleRight } from 'react-icons/fa';

export const Blogs = ({ data }: { data?: BlogsData }) => {
  if (!data) return null;

  return (
    <section className="blogs-section">
      <div className="blogs-container">
        <div className="blogs-header">
          <div className="section-badge-center">
            {data.badge}
          </div>
          <h2 className="section-title">{data.title}</h2>
        </div>

        <div className="blogs-grid">
          {data.items.map(item => (
            <div key={item.id} className="blog-card">
              <div className="blog-img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="blog-author-strip">
                <div className="author-avatar">
                  <img src={item.authorImage || '/team/team1.jpg'} alt={item.author} />
                </div>
                <span className="author-name-vertical">{item.author}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item">
                    <FaRegCalendarAlt className="meta-icon" /> {item.date}
                  </span>
                  <span className="meta-divider">|</span>
                  <span className="meta-item">
                    <FaRegComments className="meta-icon" /> {item.comments}
                  </span>
                </div>
                <h3 className="blog-title">{item.title}</h3>
                <p className="blog-excerpt">{item.excerpt}</p>
                <a href={item.linkUrl || "#"} className="blog-btn">
                  {item.linkText || "READ MORE"} <FaAngleDoubleRight className="btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .blogs-section {
            padding: 40px 0 30px;
            background-color: #ffffff;
          }
          .blogs-container {
            max-width: 1250px;
            margin: 0 auto;
            padding: 0 20px;
          }
          
          .blogs-header {
            text-align: center;
            margin-bottom: 50px;
          }
          .section-badge-center {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-accent);
            font-size: 12px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            margin-bottom: 12px;
          }
          .section-badge-center::before, .section-badge-center::after {
            content: '';
            display: inline-block;
            width: 30px;
            height: 1px;
            background-color: var(--color-accent);
            margin: 0 15px;
          }
          .section-title {
            font-size: 40px;
            color: var(--color-primary);
            font-family: var(--font-heading);
            font-weight: 700;
            margin-bottom: 0;
          }
          
          .blogs-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }
          
          .blog-card {
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 5px 25px rgba(0,0,0,0.04);
            display: flex;
            align-items: stretch;
            padding: 15px;
            gap: 20px;
            border: 1px solid #f9f9f9;
            transition: all 0.3s ease;
          }
          .blog-card:hover {
            box-shadow: 0 10px 35px rgba(0,0,0,0.08);
            transform: translateY(-5px);
          }
          
          .blog-img {
            width: 40%;
            border-radius: 8px;
            overflow: hidden;
            flex-shrink: 0;
          }
          .blog-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
          }
          .blog-card:hover .blog-img img {
            transform: scale(1.05);
          }
          
          .blog-author-strip {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 10px 15px 10px 0;
            border-right: 1px solid #f0f0f0;
            flex-shrink: 0;
          }
          .author-avatar {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 15px;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          .author-avatar img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .author-name-vertical {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            font-size: 13px;
            font-weight: 700;
            color: var(--color-primary);
            letter-spacing: 0.5px;
            transform: rotate(180deg);
          }
          
          .blog-content {
            padding: 10px 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex-grow: 1;
          }
          
          .blog-meta {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            font-size: 11px;
            color: #6b7280;
            font-weight: 500;
            flex-wrap: wrap;
          }
          .meta-item {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .meta-icon {
            color: #c09665;
            font-size: 13px;
          }
          .meta-divider {
            color: #e5e7eb;
          }
          
          .blog-title {
            font-size: 20px;
            color: var(--color-primary);
            font-weight: 700;
            margin-bottom: 10px;
            line-height: 1.4;
            transition: color 0.3s ease;
          }
          .blog-card:hover .blog-title {
            color: var(--color-accent);
          }
          
          .blog-excerpt {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.6;
            margin-bottom: 20px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          
          .blog-btn {
            align-self: flex-start;
            background-color: #b58d56;
            color: #ffffff;
            font-size: 11px;
            font-weight: 700;
            padding: 8px 18px;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            letter-spacing: 1px;
            text-transform: uppercase;
            transition: all 0.3s ease;
          }
          .blog-btn:hover {
            background-color: var(--color-primary);
            color: #ffffff;
          }
          
          @media (max-width: 992px) {
            .blogs-grid {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 576px) {
            .blog-card {
              flex-direction: column;
              padding: 20px;
            }
            .blog-img {
              width: 100%;
              height: 200px;
            }
            .blog-author-strip {
              flex-direction: row;
              padding: 15px 0;
              border-right: none;
              border-bottom: 1px solid #f0f0f0;
              justify-content: flex-start;
            }
            .author-name-vertical {
              writing-mode: horizontal-tb;
              transform: none;
              margin-left: 10px;
            }
            .author-avatar {
              margin-bottom: 0;
            }
          }
        `
      }} />
    </section>
  );
};
