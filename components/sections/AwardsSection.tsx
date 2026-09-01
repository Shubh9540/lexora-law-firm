import React from 'react';
import { AwardsData } from '@/types/templates.types';
import { FaTrophy, FaStar, FaGlobe, FaHandshake, FaBalanceScale, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

export function AwardsSection({ data }: { data: AwardsData }) {
  if (!data) return null;

  return (
    <section className="py-8 bg-[#fdfaf6]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_420px] xl:grid-cols-[280px_1fr_500px] gap-6 lg:gap-8">
          {/* Left Column: Banner */}
          <div className="bg-[#051024] rounded-xl p-8 lg:p-10 flex flex-col items-center justify-center text-center text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('/images/building-bg.jpg')] bg-cover bg-center"></div>
            <div className="relative z-10 flex flex-col items-center h-full w-full">
              <FaTrophy className="text-5xl text-[#c49250] mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold font-family-[var(--)] mb-6 leading-tight">{data.title}</h2>
              <p className="text-gray-300 text-sm lg:text-base mb-8 leading-relaxed">
                {data.description}
              </p>
              <div className="mt-auto w-full">
                <a
                  href={data.buttonUrl}
                  className="inline-block border border-[#c49250] text-[#c49250] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#c49250] hover:text-white transition duration-300 w-full md:w-auto"
                >
                  {data.buttonText} &rarr;
                </a>
              </div>
            </div>
          </div>

          {/* Middle Column: Timeline */}
          <div className="relative pt-2">
            {/* Vertical Line */}
            <div className="absolute left-[11px] top-8 bottom-8 w-px bg-[#c49250]/40"></div>
            
            <div className="space-y-2 relative z-10">
              {data.items.map((item, i) => (
                <div key={i} className="flex gap-4 group items-center relative pl-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-1 top-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-[#c49250] ring-4 ring-[#fdfaf6] shadow-sm z-10"></div>
                  
                  {/* Content Card */}
                  <div className="flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 lg:px-5 lg:py-3.5 shadow-sm group-hover:shadow-md transition flex items-center gap-4 group-hover:border-[#c49250]/30">
                    
                    {/* Year with Laurel Effect */}
                    <div className="relative flex-shrink-0 w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] flex items-center justify-center bg-[#fdfaf6]/50 rounded-full">
                      <div className="absolute inset-1 border-[2px] border-dashed border-[#c49250] rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"></div>
                      <span className="text-sm lg:text-base font-bold text-[#051024] font-family-[var(--)] relative z-10">
                        {item.year}
                      </span>
                    </div>
                    
                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-base lg:text-lg font-bold text-[#051024] mb-0.5 lg:mb-1 group-hover:text-[#c49250] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#6b7280] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quotes & Features */}
          <div className="flex flex-col gap-6">
            {/* Founder Quote */}
            <div className="bg-[#051024] text-white p-8 lg:p-10 rounded-xl shadow-lg relative flex flex-col justify-center min-h-[180px]">
              <FaQuoteLeft className="text-[#c49250] text-3xl absolute top-6 left-6 opacity-100" />
              <p className="text-xl lg:text-2xl italic font-family-[var(--)] mb-6 pl-12 pt-4 leading-relaxed">
                <span className="text-white font-medium">
                  {data.founderQuote.text.split(', ')[0]},
                </span>
                <br />
                <span className="text-[#c49250]">
                  {data.founderQuote.text.split(', ')[1] || ''}
                </span>
              </p>
              <p className="text-sm text-gray-400 pl-12 border-t border-gray-700/50 pt-4 font-medium">
                — {data.founderQuote.author}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xl:gap-4">
              {data.features.map((feat, i) => (
                <div key={i} className="bg-white border border-gray-100 p-3 xl:p-4 rounded-xl text-center shadow-sm flex flex-col items-center justify-center gap-2 xl:gap-3 hover:shadow-md transition hover:border-[#c49250]/30 aspect-square">
                  <div className="text-2xl xl:text-3xl text-[#c49250]">
                    {feat.icon === 'star' && <FaStar />}
                    {feat.icon === 'globe' && <FaGlobe />}
                    {feat.icon === 'handshake' && <FaHandshake />}
                    {feat.icon === 'scales' && <FaBalanceScale />}
                  </div>
                  <span className="text-[11px] xl:text-xs font-semibold text-[#051024] leading-tight px-1">
                    {feat.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Client Quote */}
            <div className="bg-[#fdfaf6] p-8 rounded-xl shadow-sm border border-[#e5d5be] relative mt-auto flex flex-col justify-center min-h-[160px]">
              <FaQuoteLeft className="text-[#c49250] text-xl absolute top-6 left-6 opacity-40" />
              <p className="text-sm text-[#4a4a4a] mb-5 pl-8 pt-1 leading-relaxed">
                {data.clientQuote.text}
              </p>
              <p className="text-xs font-bold text-[#c49250] pl-8">
                — {data.clientQuote.author}
              </p>
              <FaQuoteRight className="text-[#c49250] text-4xl absolute bottom-4 right-6 opacity-10" />
            </div>
          </div>
        </div>

        {/* Featured In */}
        <div className="mt-8 bg-white border border-gray-100 rounded-xl shadow-sm p-8 text-center relative max-w-[1400px] mx-auto">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-6 text-sm font-bold text-[#051024] uppercase tracking-[0.2em] flex items-center gap-4">
            <span className="w-12 h-[2px] bg-[#c49250] hidden sm:block"></span>
            Featured In
            <span className="w-12 h-[2px] bg-[#c49250] hidden sm:block"></span>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center divide-x divide-gray-200 pt-8 w-full">
            {data.featuredIn.map((logo, i) => (
              <div key={i} className="px-4 md:px-6 lg:px-8 py-4 flex justify-center items-center w-1/2 md:w-1/3 lg:w-full">
                <img 
                  src={logo.logo} 
                  alt={logo.alt} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
