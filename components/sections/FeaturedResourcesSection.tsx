import React from 'react';
import Link from 'next/link';
import { FeaturedResourcesSection as FeaturedResourcesType } from '@/types/templates.types';
import { FaRegFileAlt, FaRegNewspaper, FaArrowRight } from 'react-icons/fa';

export const FeaturedResourcesSection = ({ data }: { data?: FeaturedResourcesType }) => {
  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section className="py-8 lg:py-12 bg-[#faf9f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#c49250] font-bold text-xs tracking-widest uppercase mb-2">
              <span className="w-6 h-[2px] bg-[#c49250]"></span>
              <span>{data.badge}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#051024]">
              {data.title}
            </h2>
          </div>

          {data.viewAllText && (
            <Link
              href={data.viewAllLink || '/client-resources'}
              className="inline-flex items-center gap-2 text-[#051024] font-semibold text-sm hover:text-[#c49250] transition-colors group"
            >
              <span>{data.viewAllText}</span>
              <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1 text-[#c49250]" />
            </Link>
          )}
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((item) => {
            const isArticle = item.type.toUpperCase() === 'ARTICLE';
            const Icon = isArticle ? FaRegNewspaper : FaRegFileAlt;

            return (
              <Link
                key={item.id}
                href={`/client-resources/${item.slug || item.id}`}
                className="group bg-white border border-[#edeae1] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col no-underline"
              >
                {/* Thumbnail Image */}
                <div className="h-[220px] w-full overflow-hidden relative bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Meta Info */}
                    <div className="flex items-center gap-2 text-[#c49250] text-xs font-bold tracking-wider uppercase mb-3">
                      <Icon className="text-sm" />
                      <span>{item.type}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-500 font-medium">{item.readTime}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-[#051024] leading-snug group-hover:text-[#c49250] transition-colors mb-3">
                      {item.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="inline-flex items-center gap-2 text-[#c49250] font-bold text-sm transition-colors group-hover:text-[#051024]">
                    <span>Read More</span>
                    <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
