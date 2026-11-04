import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, Search, ZoomIn, ShieldCheck } from 'lucide-react';
import { certificatesData } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', 'Mobile Development', 'Artificial Intelligence', 'Web Development', 'Design', '3D & Interactive', 'Spatial Data'];

  const filteredCerts = filter === 'Semua' 
    ? certificatesData 
    : certificatesData.filter(c => c.category === filter);

  return (
    <section id="sertifikat" className="py-20 md:py-28 border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            05 / Sertifikat
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Validasi Kompetensi
          </span>
        </div>

        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-warm-text font-normal leading-snug">
              Sertifikat dan Pelatihan
            </h2>
          </div>
          <p className="text-xs md:text-sm text-warm-muted max-w-sm">
            Kumpulan sertifikasi teknis, pelatihan profesional, dan kompetensi terverifikasi yang mendukung pengerjaan proyek.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-warm-border">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-full text-xs transition-colors font-medium ${
                filter === cat
                  ? 'bg-warm-accent text-white shadow-subtle'
                  : 'bg-warm-surface text-warm-muted hover:text-warm-text hover:bg-warm-surface/80 border border-warm-border'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group bg-white rounded-xl border border-warm-border p-5 shadow-subtle hover:border-warm-accent/50 hover:shadow-elevated transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Certificate Thumbnail Preview Container */}
                <div className="relative aspect-[16/11] bg-warm-surface rounded-lg border border-warm-border p-4 mb-4 flex flex-col justify-between overflow-hidden group-hover:bg-[#EAE8E1] transition-colors">
                  <div className="flex items-center justify-between text-[10px] font-mono text-warm-muted">
                    <span className="truncate max-w-[150px]">{cert.category}</span>
                    <span className="flex items-center gap-1 font-semibold text-warm-accent">
                      <ShieldCheck size={12} />
                      {cert.year}
                    </span>
                  </div>

                  {/* Visual Document Outline */}
                  <div className="text-center my-auto px-2">
                    <Award size={24} className="mx-auto text-warm-accent mb-1.5 opacity-80" />
                    <div className="font-serif text-xs font-semibold text-warm-text line-clamp-2">
                      {cert.name}
                    </div>
                    <div className="text-[10px] text-warm-muted mt-1 truncate">
                      {cert.issuer}
                    </div>
                  </div>

                  {/* Hover Inspect Indicator */}
                  <div className="absolute inset-0 bg-[#252522]/20 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs text-white font-medium">
                    <ZoomIn size={15} />
                    <span>Perbesar Sertifikat</span>
                  </div>
                </div>

                {/* Certificate Meta & Title */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-warm-muted">
                    <span>{cert.issuer}</span>
                    <span className="font-mono text-[11px]">{cert.year}</span>
                  </div>

                  <h3 className="font-serif text-base text-warm-text font-medium leading-snug group-hover:text-warm-accent transition-colors">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-warm-muted line-clamp-2 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 mt-4 border-t border-warm-border flex items-center justify-between text-xs">
                <span className="text-warm-accent font-medium text-[11px] group-hover:underline flex items-center gap-1">
                  Lihat Lembar Sertifikat
                </span>
                
                {cert.credentialUrl && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(cert.credentialUrl, '_blank', 'noopener,noreferrer');
                    }}
                    className="p-1 text-warm-muted hover:text-warm-text transition-colors"
                    title="Buka tautan verifikasi kredensial"
                  >
                    <ExternalLink size={13} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      <CertificateModal 
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
