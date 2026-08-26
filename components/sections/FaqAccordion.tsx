'use client';

import React, { useState } from 'react';
import { FaqData } from '@/types/templates.types';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { FaBalanceScale } from 'react-icons/fa';

export function FaqAccordion({ data }: { data: FaqData }) {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  if (!data || !data.items) return null;

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  // Split items into two columns
  const half = Math.ceil(data.items.length / 2);
  const leftColumn = data.items.slice(0, half);
  const rightColumn = data.items.slice(half);

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="w-12 h-px bg-[var(--color-accent)]"></span>
            <span className="text-[var(--color-accent)] font-bold tracking-widest text-sm uppercase">
              {data.badge}
            </span>
            <span className="w-12 h-px bg-[var(--color-accent)]"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6 font-serif">
            {data.title.replace(data.highlightText || '', '')}
            {data.highlightText && (
              <span className="text-[var(--color-accent)]"> {data.highlightText} </span>
            )}
            {data.title.split(data.highlightText || '')[1]}
          </h2>
          
          <div className="flex justify-center mb-6">
            <FaBalanceScale className="text-[var(--color-accent)] text-2xl" />
          </div>
          
          <p className="text-gray-600 text-lg">
            {data.description}
          </p>
        </div>

        {/* Accordion Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {leftColumn.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-lg transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#edeae1] bg-[#fdfaf5] border-l-4 border-l-[var(--color-accent)] shadow-sm' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className="font-bold text-[var(--color-primary)] text-lg pr-4">
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-primary)] text-white'}`}>
                      {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-[15px]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            {rightColumn.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border rounded-lg transition-all duration-300 ${
                    isOpen 
                      ? 'border-[#edeae1] bg-[#fdfaf5] border-l-4 border-l-[var(--color-accent)] shadow-sm' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                  >
                    <span className="font-bold text-[var(--color-primary)] text-lg pr-4">
                      {item.question}
                    </span>
                    <span className={`flex-shrink-0 flex items-center justify-center w-8 h-8 rounded ${isOpen ? 'bg-[var(--color-primary)] text-white' : 'bg-[var(--color-primary)] text-white'}`}>
                      {isOpen ? <FiMinus className="w-5 h-5" /> : <FiPlus className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-5 md:px-6 pb-6 pt-2 text-gray-600 leading-relaxed text-[15px]">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
