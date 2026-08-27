import React from 'react';
import { ContactData } from '@/types/templates.types';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegUser, FaRegEnvelope } from 'react-icons/fa';
import { FiClock } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs';

export function ContactContent({ data }: { data: ContactData }) {
  if (!data) return null;

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
          
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
            {data.title}
          </h2>
          
          <p className="text-gray-600 text-lg whitespace-pre-line">
            {data.description}
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Email Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 rounded-full bg-[#fdfaf5] border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-2xl mb-6">
              <FaEnvelope />
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)] mb-4">Email Address</h3>
            <div className="space-y-1">
              {data.infoCards.emails.map((email, i) => (
                <p key={i} className="text-gray-600 font-medium">{email}</p>
              ))}
            </div>
          </div>
          
          {/* Phone Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 rounded-full bg-[#fdfaf5] border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-2xl mb-6">
              <FaPhoneAlt />
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)] mb-4">Phone Number</h3>
            <div className="space-y-1">
              {data.infoCards.phones.map((phone, i) => (
                <p key={i} className="text-gray-600 font-medium">{phone}</p>
              ))}
            </div>
          </div>
          
          {/* Location Card */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition">
            <div className="w-16 h-16 rounded-full bg-[#fdfaf5] border-2 border-[var(--color-accent)] text-[var(--color-accent)] flex items-center justify-center text-2xl mb-6">
              <FaMapMarkerAlt />
            </div>
            <h3 className="font-bold text-lg text-[var(--color-primary)] mb-4">Our Location</h3>
            <div className="space-y-1">
              <p className="text-gray-600 font-medium whitespace-pre-line">{data.infoCards.address}</p>
            </div>
          </div>
          
        </div>

        {/* Bottom Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Office Map Box */}
          <div className="bg-[var(--color-primary)] rounded-xl p-8 lg:p-10 text-white flex flex-col">
            <div className="flex flex-col sm:flex-row sm:justify-between items-start mb-8 gap-6 sm:gap-4">
              <div>
                <h3 className="text-3xl font-bold text-[var(--color-accent)] mb-3">{data.officeCard.title}</h3>
                <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{data.officeCard.description}</p>
              </div>
              <div className="flex items-start gap-3 sm:mt-2 flex-shrink-0 bg-[#001736] p-4 rounded-lg sm:bg-transparent sm:p-0">
                <FiClock className="text-[var(--color-accent)] text-xl flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  {data.officeCard.workingHours.map((wh, i) => (
                    <div key={i} className="flex flex-col mb-1">
                      <span className="font-medium text-gray-200">{wh.days}</span>
                      <span className="text-white font-bold">{wh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 w-full flex-1 min-h-[300px] lg:min-h-[340px] rounded-lg overflow-hidden relative">
              <iframe 
                src={`https://maps.google.com/maps?q=${encodeURIComponent(data.officeCard.mapLocationQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          {/* Right: Form Box */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 lg:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <FaEnvelope className="text-[var(--color-accent)] text-2xl" />
                <h3 className="text-3xl font-bold text-[var(--color-primary)]">{data.form.title}</h3>
              </div>
              <div className="w-12 h-0.5 bg-[var(--color-accent)] mb-6"></div>
              <p className="text-gray-500 mb-8">{data.form.description}</p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder={data.form.fields.fullName} 
                      className="w-full border border-gray-200 rounded-lg p-4 pr-12 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition"
                    />
                    <FaRegUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder={data.form.fields.email} 
                      className="w-full border border-gray-200 rounded-lg p-4 pr-12 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition"
                    />
                    <FaRegEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder={data.form.fields.phone} 
                      className="w-full border border-gray-200 rounded-lg p-4 pr-12 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition"
                    />
                    <BsTelephone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
                  </div>
                  
                  <div className="relative">
                    <select 
                      className="w-full border border-gray-200 rounded-lg p-4 pr-12 text-sm text-gray-600 bg-white appearance-none focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition"
                    >
                      {data.form.fields.subjectOptions.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  
                </div>
                
                <div className="relative">
                  <textarea 
                    rows={5}
                    placeholder={data.form.fields.message}
                    className="w-full border border-gray-200 rounded-lg p-4 pr-12 text-sm text-gray-700 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition resize-none"
                  ></textarea>
                  <div className="absolute right-4 top-4 text-gray-400">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.3333 1.99998C11.5084 1.82488 11.7163 1.686 11.9451 1.59128C12.1739 1.49655 12.419 1.44788 12.6667 1.44788C12.9143 1.44788 13.1594 1.49655 13.3882 1.59128C13.617 1.686 13.8249 1.82488 14 1.99998C14.1751 2.17508 14.314 2.38299 14.4087 2.61177C14.5034 2.84055 14.5521 3.08566 14.5521 3.33332C14.5521 3.58097 14.5034 3.82608 14.4087 4.05486C14.314 4.28364 14.1751 4.49155 14 4.66665L4.99999 13.6666L1.33333 14.6666L2.33333 11L11.3333 1.99998Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                
                <button 
                  type="button"
                  className="bg-[var(--color-accent)] text-white px-8 py-4 rounded text-sm font-bold uppercase tracking-wider hover:bg-opacity-90 transition shadow-md flex items-center gap-2"
                >
                  {data.form.submitBtnText} &rarr;
                </button>
              </form>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
