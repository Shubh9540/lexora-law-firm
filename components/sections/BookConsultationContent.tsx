import React from 'react';
import { BookConsultationData } from '@/types/templates.types';
import { FaRegUser, FaShieldAlt, FaRegFileAlt, FaBalanceScale, FaPhoneAlt, FaLock, FaRegCalendarAlt } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const IconMap: { [key: string]: React.ElementType } = {
  FaRegUser,
  FaShieldAlt,
  FaRegFileAlt,
  FaBalanceScale
};

export function BookConsultationContent({ data }: { data: BookConsultationData }) {
  if (!data) return null;

  return (
    <section className="py-24 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="lg:w-5/12">
            <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-6"></div>
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-primary)] mb-6">
              {data.leftColumn.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-12">
              {data.leftColumn.description}
            </p>
            
            <div className="space-y-10 mb-12">
              {data.leftColumn.features.map((feature, i) => {
                const Icon = IconMap[feature.icon] || FaRegUser;
                return (
                  <div key={i} className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-[#fdfaf5] flex-shrink-0 flex items-center justify-center text-[var(--color-accent)] text-2xl shadow-sm border border-[#edeae1]">
                      <Icon />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-serif text-[var(--color-primary)] mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-[#f5ebd7] rounded-xl p-8 flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#001736] flex-shrink-0 flex items-center justify-center text-[var(--color-accent)] text-2xl shadow-sm">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-bold text-[#001736] mb-1">{data.leftColumn.contactBox.title}</h4>
                <p className="text-xs text-gray-700 mb-2">{data.leftColumn.contactBox.description}</p>
                <p className="text-xl font-bold text-[var(--color-accent)]">{data.leftColumn.contactBox.phone}</p>
              </div>
            </div>
          </div>
          
          {/* Right Column (Form) */}
          <div className="lg:w-7/12">
            <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
              <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--color-primary)] mb-6">
                {data.rightColumn.title}
              </h2>
              <p className="text-gray-500 mb-10 leading-relaxed text-sm">
                {data.rightColumn.description}
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {data.rightColumn.form.fullNameLabel}
                    </label>
                    <input 
                      type="text" 
                      placeholder={data.rightColumn.form.fullNamePlaceholder}
                      className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {data.rightColumn.form.emailLabel}
                    </label>
                    <input 
                      type="email" 
                      placeholder={data.rightColumn.form.emailPlaceholder}
                      className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50"
                    />
                  </div>
                  
                  {/* Phone */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {data.rightColumn.form.phoneLabel}
                    </label>
                    <div className="flex">
                      <div className="flex-shrink-0 border border-gray-200 border-r-0 rounded-l-lg bg-gray-50/50 flex items-center px-4 gap-2">
                        <span className="text-sm font-medium text-gray-700">+91</span>
                        <FiChevronDown className="text-gray-500" />
                      </div>
                      <input 
                        type="tel" 
                        placeholder={data.rightColumn.form.phonePlaceholder}
                        className="w-full border border-gray-200 rounded-r-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50"
                      />
                    </div>
                  </div>
                  
                  {/* Practice Area */}
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {data.rightColumn.form.practiceAreaLabel}
                    </label>
                    <input 
                      type="text" 
                      placeholder={data.rightColumn.form.practiceAreaPlaceholder}
                      className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50"
                    />
                  </div>
                  
                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                      {data.rightColumn.form.subjectLabel}
                    </label>
                    <input 
                      type="text" 
                      placeholder={data.rightColumn.form.subjectPlaceholder}
                      className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50"
                    />
                  </div>
                  
                </div>
                
                {/* Details */}
                <div>
                  <label className="block text-sm font-bold text-[var(--color-primary)] mb-2">
                    {data.rightColumn.form.detailsLabel}
                  </label>
                  <textarea 
                    rows={5}
                    placeholder={data.rightColumn.form.detailsPlaceholder}
                    className="w-full border border-gray-200 rounded-lg p-4 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-gray-50/50 resize-none"
                  ></textarea>
                </div>
                
                {/* Submit */}
                <div className="pt-4">
                  <button 
                    type="button"
                    className="w-full bg-[#001736] text-white py-4 rounded-lg font-bold shadow-md hover:bg-opacity-90 transition flex items-center justify-center gap-3"
                  >
                    <FaRegCalendarAlt className="text-xl" />
                    {data.rightColumn.form.submitBtnText}
                  </button>
                </div>
                
                {/* Secure text */}
                <div className="text-center pt-2 flex items-center justify-center gap-2 text-gray-500 text-sm">
                  <FaLock className="w-3 h-3" />
                  <span>{data.rightColumn.form.secureText}</span>
                </div>
                
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
