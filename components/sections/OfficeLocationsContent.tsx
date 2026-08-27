import React from 'react';
import Link from 'next/link';
import { OfficeLocationsData } from '@/types/templates.types';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

export function OfficeLocationsContent({ data }: { data: OfficeLocationsData }) {
  if (!data || !data.items) return null;

  return (
    <section className="py-5 bg-[#fbfaf8]">
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

        {/* Office Cards List */}
        <div className="space-y-12">
          {data.items.map((location) => (
            <div key={location.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col lg:flex-row h-auto lg:h-[400px]">
              
              {/* Photo */}
              <div className="lg:w-1/3 relative h-64 lg:h-full flex-shrink-0">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${location.image})` }}
                ></div>
              </div>
              
              {/* Info */}
              <div className="lg:w-1/3 p-8 md:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-200">
                <div className="flex items-center gap-2 mb-3">
                  <FaMapMarkerAlt className="text-[var(--color-accent)]" />
                  <span className="text-[var(--color-accent)] font-bold text-xs uppercase tracking-wider">{location.badge}</span>
                </div>
                <h3 className="text-3xl font-bold text-[var(--color-primary)] mb-4">{location.city}</h3>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mb-8"></div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-[var(--color-accent)] w-5 h-5 flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-sm leading-relaxed">{location.address}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhoneAlt className="text-[var(--color-accent)] w-4 h-4 flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{location.phone}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-[var(--color-accent)] w-4 h-4 flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{location.email}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaClock className="text-[var(--color-accent)] w-4 h-4 flex-shrink-0" />
                    <p className="text-gray-700 text-sm font-medium">{location.workingHours}</p>
                  </div>
                </div>
              </div>
              
              {/* Map */}
              <div className="lg:w-1/3 relative h-64 lg:h-full flex-shrink-0 bg-gray-100">
                <iframe 
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(location.address || location.city)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                
                <div className="absolute bottom-6 right-6 pointer-events-none">
                  <Link
                    href={location.directionsUrl}
                    className="inline-flex items-center justify-center bg-white text-[var(--color-accent)] border border-gray-200 px-6 py-3 rounded text-sm font-bold shadow-md hover:border-[var(--color-accent)] transition pointer-events-auto"
                  >
                    {data.getDirectionsText} &rarr;
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
