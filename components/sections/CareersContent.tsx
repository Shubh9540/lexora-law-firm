import React from 'react';
import Link from 'next/link';
import { CareersData } from '@/types/templates.types';
import { FaUsers, FaLightbulb, FaBalanceScale, FaTrophy, FaHeart, FaBriefcase } from 'react-icons/fa';
import { FiCheckCircle } from 'react-icons/fi';

const IconMap: { [key: string]: React.ElementType } = {
  users: FaUsers,
  lightbulb: FaLightbulb,
  scales: FaBalanceScale,
  trophy: FaTrophy,
  heart: FaHeart,
  briefcase: FaBriefcase
};

export function CareersContent({ data }: { data: CareersData }) {
  if (!data) return null;

  return (
    <section className="py-12 lg:py-16 bg-[#fbfaf8]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Culture Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-[var(--color-primary)] mb-6">{data.culture.title}</h2>
          <p className="text-gray-600 text-lg">{data.culture.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200 bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-16">
          {data.culture.features.map((feature, i) => {
            const Icon = IconMap[feature.icon] || FaUsers;
            return (
              <div key={i} className="flex flex-col items-center text-center p-6 md:p-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-[#fdfaf5] border-2 border-[var(--color-accent)] text-[var(--color-accent)] text-2xl mb-4">
                  <Icon />
                </div>
                <h3 className="font-bold text-[var(--color-primary)] mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Why Join Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-8 pb-4 border-b-2 border-[var(--color-accent)] inline-block">
              {data.whyJoin.title}
            </h2>
            <ul className="space-y-4">
              {data.whyJoin.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <FiCheckCircle className="text-[var(--color-accent)] w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-[var(--color-primary)] text-white p-6 sm:p-12 rounded-xl shadow-xl flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
              <FaBalanceScale className="text-9xl" />
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-6 items-start">
              <div className="w-20 h-20 rounded-full border-2 border-[var(--color-accent)] flex items-center justify-center text-[var(--color-accent)] text-3xl flex-shrink-0">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{data.whyJoin.banner.title}</h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed max-w-md">
                  {data.whyJoin.banner.description}
                </p>
                <Link
                  href={data.whyJoin.banner.buttonUrl}
                  className="inline-block bg-[#d4af37] text-white px-8 py-3 rounded text-sm font-semibold hover:bg-opacity-90 transition shadow-md"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                >
                  {data.whyJoin.banner.buttonText} &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div id="open-positions" className="mb-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[var(--color-primary)]">{data.positions.title}</h2>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="py-4 px-6 font-bold text-sm">{data.positions.tableHeaders.title}</th>
                    <th className="py-4 px-6 font-bold text-sm">{data.positions.tableHeaders.department}</th>
                    <th className="py-4 px-6 font-bold text-sm">{data.positions.tableHeaders.experience}</th>
                    <th className="py-4 px-6 font-bold text-sm">{data.positions.tableHeaders.location}</th>
                    <th className="py-4 px-6 font-bold text-sm">{data.positions.tableHeaders.action}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {data.positions.items.map((job) => (
                    <tr key={job.id} className="hover:bg-gray-50 transition">
                      <td className="py-12 lg:py-16 px-6">
                        <div className="flex items-center gap-3">
                          <FaBriefcase className="text-[var(--color-accent)]" />
                          <span className="font-bold text-[var(--color-primary)]">{job.title}</span>
                        </div>
                      </td>
                      <td className="py-12 lg:py-16 px-6 text-gray-700 font-medium text-sm">{job.department}</td>
                      <td className="py-12 lg:py-16 px-6 text-gray-700 font-medium text-sm">{job.experience}</td>
                      <td className="py-12 lg:py-16 px-6 text-gray-700 font-medium text-sm">{job.location}</td>
                      <td className="py-12 lg:py-16 px-6">
                        <Link
                          href={`/careers/${job.id}`}
                          className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] px-6 py-2 rounded text-xs font-bold hover:bg-[var(--color-accent)] hover:text-white transition"
                        >
                          {data.positions.viewDetailsText} &rarr;
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-600 font-medium">
              {data.positions.bottomText}{' '}
              <Link href={data.positions.bottomLinkUrl} className="text-[var(--color-accent)] border-b border-[var(--color-accent)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] transition pb-0.5">
                {data.positions.bottomLinkText}
              </Link>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
