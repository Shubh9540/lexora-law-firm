import React from 'react';
import { LegalPageData } from '@/types/templates.types';
import { FaCheckCircle } from 'react-icons/fa';

export function LegalPageContent({ data }: { data: LegalPageData }) {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-20 px-5 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-16">
          {data.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-8 flex items-center gap-4">
                <span className="w-1 h-8 bg-[var(--color-accent)] inline-block"></span>
                {section.title}
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-[15px]">
                {section.content.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
              
              {section.listItems && section.listItems.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8">
                  {section.listItems.map((item, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <FaCheckCircle className="text-[var(--color-accent)] w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
