import React from 'react';
import { AwardsData } from '@/types/templates.types';
import { FaTrophy, FaStar, FaGlobe, FaHandshake, FaBalanceScale } from 'react-icons/fa';

export function AwardsSection({ data }: { data: AwardsData }) {
  if (!data) return null;

  return (
    <section className="py-5 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_320px] gap-5">
          {/* Left Column: Banner */}
          <div className="bg-[var(--color-primary)] rounded-xl p-8 flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/building-bg.jpg')] bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col items-center h-full">
              <FaTrophy className="text-4xl text-[var(--color-accent)] mb-4" />
              <h2 className="text-2xl font-bold font-serif mb-4 leading-tight">{data.title}</h2>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {data.description}
              </p>
              <div className="mt-auto pt-4">
                <a
                  href={data.buttonUrl}
                  className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-5 py-2 rounded-full text-xs font-semibold hover:bg-[var(--color-accent)] hover:text-white transition duration-300"
                >
                  {data.buttonText} &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Timeline */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 relative">
            <div className="absolute left-[44px] top-6 bottom-6 w-0.5 bg-gray-200"></div>
            
            <div className="space-y-4 relative z-10">
              {data.items.map((item, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer items-center">
                  {/* Timeline Node */}
                  <div className="relative flex-shrink-0 w-16 h-16 bg-white border border-gray-100 rounded-lg shadow-sm flex items-center justify-center group-hover:border-[var(--color-accent)] transition">
                    <div className="absolute -left-[23.5px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-white shadow-sm"></div>
                    <span className="text-base font-bold text-[var(--color-primary)] font-serif">
                      {item.year}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-lg p-4 shadow-sm group-hover:shadow-md transition">
                    <div className="flex justify-between items-center gap-3">
                      <div>
                        <h3 className="text-base font-bold text-[var(--color-primary)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-gray-300 group-hover:text-[var(--color-accent)] transition mt-1">&gt;</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quotes & Features */}
          <div className="flex flex-col gap-4">
            {/* Founder Quote */}
            <div className="bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-lg relative">
              <span className="text-[var(--color-accent)] text-4xl font-serif absolute top-3 left-3 leading-none opacity-50">"</span>
              <p className="text-base italic font-serif text-gray-100 mb-4 pl-4 pt-1">
                {data.founderQuote.text}
              </p>
              <p className="text-xs text-gray-400 pl-4 border-t border-gray-700 pt-3">
                — {data.founderQuote.author}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {data.features.map((feat, i) => (
                <div key={i} className="bg-white border border-gray-100 p-4 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-3">
                  <div className="text-2xl text-[var(--color-accent)]">
                    {feat.icon === 'star' && <FaStar />}
                    {feat.icon === 'globe' && <FaGlobe />}
                    {feat.icon === 'handshake' && <FaHandshake />}
                    {feat.icon === 'scales' && <FaBalanceScale />}
                  </div>
                  <span className="text-xs font-semibold text-gray-700 leading-tight">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Client Quote */}
            <div className="bg-[#f8f6f0] p-6 rounded-xl shadow-sm border border-[#edeae1] relative mt-auto">
              <span className="text-[var(--color-accent)] text-4xl font-serif absolute top-3 left-3 leading-none opacity-30">"</span>
              <p className="text-xs text-gray-700 mb-4 pl-4 pt-1 leading-relaxed">
                {data.clientQuote.text}
              </p>
              <p className="text-[10px] font-bold text-[var(--color-accent)] pl-4">
                — {data.clientQuote.author}
              </p>
            </div>
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-10 bg-white border border-gray-100 rounded-xl shadow-sm p-6 text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider flex items-center gap-4">
            <span className="w-10 h-px bg-[var(--color-accent)] hidden sm:block"></span>
            Featured In
            <span className="w-10 h-px bg-[var(--color-accent)] hidden sm:block"></span>
          </div>
          <div className="flex flex-wrap justify-center items-center divide-x divide-gray-300 opacity-80 transition duration-500 pt-2">
            {data.featuredIn.map((logo, i) => (
              <span key={i} className="px-5 md:px-8 text-base md:text-lg font-bold text-[var(--color-primary)] uppercase tracking-wider text-center whitespace-nowrap">
                {logo.alt}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
