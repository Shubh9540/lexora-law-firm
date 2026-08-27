import React from 'react';
import Link from 'next/link';
import { ClientResourceItem, LexoraTemplateData } from '@/types/templates.types';
import { FaBalanceScale, FaCheckCircle, FaRegFileAlt, FaClock, FaPhoneAlt, FaArrowRight, FaShieldAlt } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

interface ResourceDetailContentProps {
  data: ClientResourceItem;
  templateData: LexoraTemplateData;
}

export const ResourceDetailContent = ({ data, templateData }: ResourceDetailContentProps) => {
  const sectionData = templateData?.categories?.LawFirm?.sections;
  const allResources = sectionData?.clientResources?.variants?.LexoraClientResources1?.featuredSection?.items || [];
  const relatedResources = allResources.filter((r) => r.id !== data.id && r.slug !== data.slug);

  return (
    <section className="py-8 lg:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-[#c49250] font-bold text-xs tracking-widest uppercase mb-3">
              <FaBalanceScale className="text-base" />
              <span>{data.type} &bull; {data.readTime}</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#051024] font-bold leading-tight mb-4">
              {data.title}
            </h1>
            
            {data.subtitle && (
              <h3 className="text-[#c49250] text-lg sm:text-xl font-medium mb-4">
                {data.subtitle}
              </h3>
            )}
            
            <p className="text-gray-600 text-base leading-relaxed">
              {data.introText}
            </p>
          </div>

          <div className="flex-1 w-full">
            <div 
              className="w-full h-[280px] sm:h-[350px] bg-cover bg-center rounded-2xl shadow-md overflow-hidden border border-gray-100" 
              style={{ backgroundImage: `url('${data.image}')` }}
            ></div>
          </div>
        </div>

        {/* Content Section Split */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          
          {/* Left Main Content */}
          <div className="lg:flex-[0_0_65%] space-y-10">
            
            {/* Overview Section */}
            <div>
              <h2 className="text-2xl sm:text-3xl text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-6 inline-block">
                Overview & Legal Insights
              </h2>
              
              <div className="w-full">
                {data.overviewImage && (
                  <div 
                    className="w-full lg:w-[280px] h-[220px] lg:float-right bg-cover bg-center rounded-xl mb-6 lg:ml-6 lg:mb-4 shadow-sm border border-gray-100" 
                    style={{ backgroundImage: `url('${data.overviewImage}')` }}
                  ></div>
                )}
                {data.overviewHtml && (
                  <div 
                    className="[&>p]:text-gray-600 [&>p]:text-[15px] [&>p]:leading-relaxed [&>p]:mb-4" 
                    dangerouslySetInnerHTML={{ __html: data.overviewHtml }}
                  ></div>
                )}
                <div className="clear-both"></div>
              </div>
            </div>

            {/* Key Takeaways Section */}
            {data.keyPoints && data.keyPoints.length > 0 && (
              <div>
                <h2 className="text-2xl sm:text-3xl text-[#051024] font-bold border-b-2 border-[#c49250] pb-3 mb-6 inline-block">
                  {data.keyPointsTitle || 'Key Takeaways & Core Considerations'}
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.keyPoints.map((point) => (
                    <div key={point.id} className="bg-[#fdfaf6] border border-[#edeae1] rounded-xl p-5 hover:border-[#c49250] transition-colors">
                      <div className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#c49250] text-lg mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="text-[#051024] text-base font-bold mb-1.5">{point.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Download CTA Banner */}
            <div className="bg-[#051024] text-white rounded-2xl p-8 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#c49250]/20 text-[#c49250] flex items-center justify-center text-2xl flex-shrink-0">
                  <FiDownload />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Download Resource Checklist</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Get a printable summary with step-by-step documentation pointers.</p>
                </div>
              </div>
              <a
                href="/dummy.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#c49250] hover:bg-[#b08143] text-white text-sm font-bold px-6 py-3 rounded-lg transition-colors flex-shrink-0"
              >
                <FiDownload />
                <span>Download PDF</span>
              </a>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="flex-1 space-y-8">
            
            {/* Sidebar Highlights */}
            {data.sidebarHighlights && data.sidebarHighlights.length > 0 && (
              <div className="bg-[#fdfaf6] border border-[#edeae1] rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#051024] border-b border-[#edeae1] pb-3 mb-5">
                  Important Notes
                </h3>
                <div className="space-y-4">
                  {data.sidebarHighlights.map((hl) => (
                    <div key={hl.id} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-white border border-[#c49250] flex items-center justify-center text-[#c49250] text-sm flex-shrink-0 mt-0.5">
                        <FaShieldAlt />
                      </div>
                      <div>
                        <h4 className="text-[#051024] text-sm font-bold">{hl.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed mt-0.5">{hl.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Resources */}
            {relatedResources.length > 0 && (
              <div className="bg-white border border-[#edeae1] rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[#051024] border-b border-gray-100 pb-3 mb-5">
                  More Resources
                </h3>
                <div className="space-y-4">
                  {relatedResources.map((res) => (
                    <Link
                      key={res.id}
                      href={`/client-resources/${res.slug || res.id}`}
                      className="group flex gap-3 items-center no-underline border-b border-gray-50 pb-3 last:border-b-0"
                    >
                      <div className="w-16 h-14 rounded-lg bg-cover bg-center overflow-hidden flex-shrink-0" style={{ backgroundImage: `url('${res.image}')` }}></div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-bold text-[#c49250] uppercase tracking-wider">{res.type}</span>
                        <h4 className="text-xs sm:text-sm font-bold text-[#051024] group-hover:text-[#c49250] transition-colors truncate">
                          {res.title}
                        </h4>
                      </div>
                      <FaArrowRight className="text-gray-400 group-hover:text-[#c49250] text-xs flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Consultation Widget */}
            <div className="bg-[#fdfaf6] border border-[#edeae1] rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 rounded-full bg-[#c49250]/10 text-[#c49250] mx-auto flex items-center justify-center text-xl mb-4">
                <FaPhoneAlt />
              </div>
              <h4 className="text-lg font-bold text-[#051024] mb-2">Need Legal Advice?</h4>
              <p className="text-gray-500 text-xs leading-relaxed mb-5">
                Our attorneys are ready to assess your case and provide tailored guidance.
              </p>
              <Link
                href="/book-consultation"
                className="inline-block w-full bg-[#c49250] hover:bg-[#051024] text-white text-xs font-bold py-3 rounded-lg transition-colors uppercase tracking-wider"
              >
                Schedule Consultation
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
