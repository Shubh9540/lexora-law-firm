'use client';

import React from 'react';
import { HeroData } from '@/types/templates.types';
import { FaArrowRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';
// Swiper Slider imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export const HeroSlider = ({ data }: { data?: HeroData }) => {
  if (!data || !data.slides) return null;

  return (
    <section className="relative overflow-hidden bg-[#051024] h-[calc(100vh-120px)] min-h-[700px] md:min-h-[600px]">

      <Swiper
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        navigation={{
          prevEl: '.hero-prev',
          nextEl: '.hero-next',
        }}
        className="w-full h-full"
      >
        {data.slides.map((slide) => {
          const titleLines = slide.title.split('\n');
          const subtitleLines = slide.subtitle.split('\n');

          return (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div className="relative w-full h-full">

                  {/* Background Image */}
                  <div
                    className={`absolute inset-0 bg-cover bg-center transition-transform duration-[6000ms] ease-linear ${isActive ? 'scale-100' : 'scale-105'
                      }`}
                    style={{ backgroundImage: `url(/${slide.image})` }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#051024]/95 via-[#051024]/70 to-[#051024]/20" />

                  {/* Content */}
                  <div className="relative z-10 h-full max-w-[1200px] mx-auto px-5 flex items-center">
                    <div className="max-w-[700px] text-white">

                      {/* Badge / Tagline */}
                      <div className="mb-6 overflow-hidden">
                        <span
                          className={`relative inline-flex flex-col items-start text-[#c49250] text-sm font-medium tracking-widest uppercase transition-all duration-700 ease-in-out delay-[400ms] after:block after:w-full after:h-px after:bg-[#c49250] after:mt-4 before:absolute before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45 before:w-2 before:h-2 before:bg-[#c49250] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                            }`}
                        >
                          {slide.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <div className="mb-5 mt-5 overflow-hidden">
                        <h2
                          className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight m-0 font-['Playfair_Display',_serif] transition-all duration-1000 ease-out delay-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
                            }`}
                        >
                          {titleLines.map((line, i) => (
                            <React.Fragment key={i}>
                              <span className={i === titleLines.length - 1 ? 'text-[#c49250]' : 'text-white'}>
                                {line}
                              </span>
                              <br />
                            </React.Fragment>
                          ))}
                        </h2>
                      </div>

                      {/* Subtitle */}
                      <div className="mb-9 overflow-hidden">
                        <p
                          className={`relative text-base sm:text-lg leading-relaxed text-gray-300 m-0 pt-5 transition-all duration-700 ease-in-out delay-1000 before:absolute before:top-0 before:left-0 before:w-9 before:h-0.5 before:bg-[#c49250] ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        >
                          {subtitleLines.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="overflow-hidden pb-2.5">
                        <a
                          href={slide.buttonUrl}
                          className={`inline-flex items-center justify-between gap-6 bg-transparent text-white pl-8 pr-2 py-2 border border-[#c49250]/40 rounded text-xs font-medium uppercase tracking-widest transition-all duration-700 delay-[1200ms] hover:border-[#c49250] hover:bg-[#c49250]/10 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                            }`}
                        >
                          {slide.buttonText}
                          <span className="w-8 h-8 rounded-full bg-[#c49250] flex items-center justify-center text-[#051024] text-xs">
                            <FaArrowRight />
                          </span>
                        </a>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          );
        })}

        {/* Custom Navigation Buttons (Managed by Swiper) */}
        <button className="hero-prev absolute top-1/2 -translate-y-1/2 left-5 z-20 w-12 h-12 md:w-10 md:h-10 rounded-full border border-[#c49250]/30 bg-[#051024]/50 backdrop-blur-sm text-[#c49250] text-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#c49250] hover:text-[#051024]">
          <FaAngleLeft />
        </button>

        <button className="hero-next absolute top-1/2 -translate-y-1/2 right-5 z-20 w-12 h-12 md:w-10 md:h-10 rounded-full border border-[#c49250]/30 bg-[#051024]/50 backdrop-blur-sm text-[#c49250] text-sm flex items-center justify-center cursor-pointer transition-all duration-300 hover:bg-[#c49250] hover:text-[#051024]">
          <FaAngleRight />
        </button>
      </Swiper>

      {/* Grid Lines — desktop only */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-full hidden lg:flex justify-between z-[3] pointer-events-none px-5">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="w-px h-full bg-white/5" />
        ))}
      </div>

    </section>
  );
};