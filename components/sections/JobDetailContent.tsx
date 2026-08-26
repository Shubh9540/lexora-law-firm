import React from 'react';
import { JobItem, CareersData } from '@/types/templates.types';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaCalendarAlt, FaGift, FaCheckCircle, FaFireAlt, FaBookOpen, FaHeart, FaChartLine } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const IconMap: { [key: string]: React.ElementType } = {
  impact: FaFireAlt,
  growth: FaBookOpen,
  culture: FaHeart,
  career: FaChartLine
};

export function JobDetailContent({ job, detailData }: { job: JobItem, detailData: CareersData['jobDetailData'] }) {
  if (!job || !detailData) return null;

  return (
    <section className="py-5 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-serif text-[var(--color-primary)] mb-8">{job.title}</h1>
          <div className="flex flex-wrap items-center gap-6 md:gap-12 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center text-[var(--color-accent)]">
                <FaBriefcase />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Department</p>
                <p className="font-medium text-gray-800">{job.department}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center text-[var(--color-accent)]">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Location</p>
                <p className="font-medium text-gray-800">{job.location}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center text-[var(--color-accent)]">
                <FaClock />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Experience</p>
                <p className="font-medium text-gray-800">{job.experience}</p>
              </div>
            </div>
            
            {job.employmentType && (
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdfaf5] flex items-center justify-center text-[var(--color-accent)]">
                  <FaCalendarAlt />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">Employment Type</p>
                  <p className="font-medium text-gray-800">{job.employmentType}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Main Content (Left) */}
          <div className="lg:col-span-2 space-y-12">
            
            {job.aboutRole && (
              <div>
                <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-4">{detailData.aboutRoleTitle}</h2>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-6"></div>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {job.aboutRole}
                </p>
              </div>
            )}

            {job.responsibilities && (
              <div>
                <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-4">{detailData.responsibilitiesTitle}</h2>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-6"></div>
                <ul className="space-y-4">
                  {job.responsibilities.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-[var(--color-accent)] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[15px] leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {job.requirements && (
              <div>
                <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-4">{detailData.requirementsTitle}</h2>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-6"></div>
                <ul className="space-y-4">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-[var(--color-accent)] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[15px] leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {job.preferredQualifications && (
              <div>
                <h2 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-4">{detailData.preferredTitle}</h2>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-6"></div>
                <ul className="space-y-4">
                  {job.preferredQualifications.map((req, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="text-[var(--color-accent)] w-5 h-5 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-[15px] leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="bg-[#fbfaf8] border border-[#edeae1] rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="w-20 h-20 rounded-full bg-[#fdfaf5] border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] text-3xl flex-shrink-0">
                <FaGift />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold font-serif text-[var(--color-primary)] mb-6">{detailData.whatWeOfferTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                  {detailData.whatWeOfferItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheckCircle className="text-[var(--color-accent)] w-4 h-4" />
                      <span className="text-gray-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h2 className="text-3xl font-bold font-serif text-[var(--color-primary)] mb-10 text-center">{detailData.whyJoinUsTitle}</h2>
              <div className="flex justify-center gap-2 mb-10 -mt-6">
                <div className="w-12 h-px bg-[var(--color-accent)]"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {detailData.whyJoinUsItems.map((item, i) => {
                  const Icon = IconMap[item.icon] || FaHeart;
                  return (
                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#fdfaf5] text-[var(--color-accent)] flex items-center justify-center text-xl mb-4">
                        <Icon />
                      </div>
                      <h4 className="font-bold text-[var(--color-primary)] text-sm mb-3">{item.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
          
          {/* Sidebar Form (Right) */}
          <div className="lg:col-span-1">
            <div className="bg-[#fbfaf8] border border-[#edeae1] rounded-xl p-8 sticky top-32 shadow-sm">
              <h3 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-2">{detailData.form.title}</h3>
              <p className="text-gray-500 text-sm mb-8">{detailData.form.description}</p>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.fullName}
                  </label>
                  <input type="text" placeholder="Enter your full name" className="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.email}
                  </label>
                  <input type="email" placeholder="Enter your email address" className="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.phone}
                  </label>
                  <input type="tel" placeholder="Enter your phone number" className="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.location}
                  </label>
                  <input type="text" placeholder="Enter your current location" className="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.experience}
                  </label>
                  <select className="w-full border border-gray-200 rounded p-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-white appearance-none">
                    {detailData.form.fields.experienceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.currentPosition}
                  </label>
                  <input type="text" placeholder="Enter your current position" className="w-full border border-gray-200 rounded p-3 text-sm focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)]" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.noticePeriod}
                  </label>
                  <select className="w-full border border-gray-200 rounded p-3 text-sm text-gray-600 focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] bg-white appearance-none">
                    {detailData.form.fields.noticePeriodOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                
                <div className="pt-2">
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.resume}
                  </label>
                  <div className="border border-dashed border-gray-300 rounded bg-white p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition">
                    <p className="text-xs text-gray-500">{detailData.form.fields.resumeHelp}</p>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-[var(--color-primary)] mb-2">
                    {detailData.form.fields.coverLetter}
                  </label>
                  <div className="border border-dashed border-gray-300 rounded bg-white p-4 text-center cursor-pointer hover:border-[var(--color-accent)] transition">
                    <p className="text-xs text-gray-500">{detailData.form.fields.coverLetterHelp}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 py-4">
                  <input type="checkbox" className="mt-1 flex-shrink-0" />
                  <p className="text-xs text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: detailData.form.termsHtml }}></p>
                </div>
                
                <button
                  type="button"
                  className="w-full bg-[#d4af37] text-white py-3 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-md flex justify-center items-center gap-2"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {detailData.form.submitBtnText} &rarr;
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
