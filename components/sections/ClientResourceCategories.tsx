import React from 'react';
import { ClientResourcesData } from '@/types/templates.types';
import { FaRegFileAlt, FaRegFolder, FaRegQuestionCircle, FaBookOpen, FaUsers } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const renderCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'guide':
      return <FaRegFileAlt className="w-7 h-7 text-[#c49250]" />;
    case 'caseProcess':
      return <FaRegFolder className="w-7 h-7 text-[#c49250]" />;
    case 'forms':
      return <FiDownload className="w-7 h-7 text-[#c49250]" />;
    case 'faq':
      return <FaRegQuestionCircle className="w-7 h-7 text-[#c49250]" />;
    case 'glossary':
      return <FaBookOpen className="w-7 h-7 text-[#c49250]" />;
    case 'helpfulLinks':
      return <FaUsers className="w-7 h-7 text-[#c49250]" />;
    default:
      return <FaRegFileAlt className="w-7 h-7 text-[#c49250]" />;
  }
};

export const ClientResourceCategories = ({ data }: { data?: ClientResourcesData }) => {
  if (!data || !data.categoryCards || data.categoryCards.length === 0) return null;

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 lg:gap-6">
          {data.categoryCards.map((item) => (
            <a
              key={item.id}
              href={item.link || '#'}
              className="group bg-white border border-[#edeae1] rounded-2xl p-6 text-center shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between no-underline"
            >
              <div className="w-full flex flex-col items-center">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-[#fdfaf5] border border-[#f0e6d3] flex items-center justify-center mb-5 group-hover:bg-[#c49250]/10 transition-colors duration-300 flex-shrink-0">
                  {renderCategoryIcon(item.icon)}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-bold text-[#051024] leading-snug group-hover:text-[#c49250] transition-colors duration-300 mb-2">
                  {item.title}
                </h3>

                {/* Accent Divider */}
                <div className="w-8 h-[2px] bg-[#c49250] mx-auto mb-3"></div>

                {/* Description */}
                <p className="text-gray-500 text-[13px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
