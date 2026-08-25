import React from 'react';
import Link from 'next/link';
import { NotFoundData } from '@/types/templates.types';

export function NotFoundContent({ data }: { data: NotFoundData }) {
  if (!data) return null;

  return (
    <section className="py-32 bg-white flex items-center justify-center min-h-[70vh]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h1 
          className="text-[180px] md:text-[250px] font-bold text-[var(--color-primary)] leading-none mb-6 font-serif"
          style={{ textShadow: '4px 4px 10px rgba(0,0,0,0.1), -2px -2px 5px rgba(212,175,55,0.2)' }}
        >
          {data.errorCode}
        </h1>
        
        <h2 className="text-4xl md:text-5xl font-bold text-[#001736] mb-6">
          {data.title}
        </h2>
        
        <p className="text-gray-500 mb-12 text-lg">
          {data.description}
        </p>
        
        <Link 
          href="/"
          className="inline-block bg-[#b38b4d] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition shadow-md"
        >
          {data.buttonText}
        </Link>
      </div>
    </section>
  );
}
