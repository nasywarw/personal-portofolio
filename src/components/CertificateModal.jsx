import React, { useEffect } from 'react';
import { X, Award, ExternalLink, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export default function CertificateModal({ cert, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !cert) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#252522]/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl bg-warm-bg border border-warm-border rounded-xl shadow-elevated overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border bg-warm-surface/80">
          <div className="flex items-center gap-2 text-xs">
            <span className="font-mono text-warm-accent font-semibold px-2 py-0.5 rounded bg-warm-bg border border-warm-border">
              {cert.category}
            </span>
            <span className="text-warm-muted">&bull;</span>
            <span className="text-warm-muted font-medium">{cert.year}</span>
          </div>
          
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-warm-muted hover:text-warm-text hover:bg-warm-bg transition-colors"
            aria-label="Tutup pratinjau sertifikat"
          >
            <X size={20} />
          </button>
        </div>

        {/* Certificate Display Canvas */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Aesthetic Warm Editorial Certificate Document Representation */}
          <div className="bg-[#FAF8F5] border-2 border-warm-border rounded-lg p-6 md:p-10 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            {/* Subtle watermark seal */}
            <div className="absolute right-6 bottom-6 opacity-5 pointer-events-none">
              <Award size={180} />
            </div>

            {/* Certificate Top Header */}
            <div className="flex items-start justify-between border-b border-warm-border/80 pb-4">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-widest text-warm-muted">
                  Sertifikat Kompetensi & Pelatihan
                </div>
                <div className="text-xs text-warm-text font-medium mt-1">
                  Diterbitkan oleh: <span className="text-warm-accent">{cert.issuer}</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                <ShieldCheck size={14} />
                <span>Kredensial Terverifikasi</span>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="my-6 text-center space-y-2">
              <div className="text-xs uppercase tracking-wider text-warm-muted font-mono">
                Diberikan Sebagai Bukti Keahlian
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-warm-text font-medium px-4">
                {cert.name}
              </h3>
              <p className="text-xs md:text-sm text-warm-muted max-w-lg mx-auto pt-1 leading-relaxed">
                {cert.description}
              </p>
            </div>

            {/* Certificate Footer Details */}
            <div className="pt-4 border-t border-warm-border/80 flex flex-wrap items-center justify-between text-xs text-warm-muted">
              <div>
                <span className="font-mono text-[11px]">ID Kredensial: {cert.credentialId}</span>
              </div>
              <div>
                <span className="font-mono text-[11px]">Tahun Penerbitan: {cert.year}</span>
              </div>
            </div>
          </div>

          {/* Competency tags */}
          {cert.skills && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-warm-muted mb-2">
                Keahlian yang Divalidasi:
              </div>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded bg-warm-surface border border-warm-border text-xs text-warm-text font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-warm-border bg-warm-surface/80">
          <div className="text-xs text-warm-muted">
            Format Dokumen Asli: Portable Document Format (PDF)
          </div>

          <div className="flex items-center gap-2">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-warm-bg hover:bg-warm-surface text-xs font-medium text-warm-text border border-warm-border transition-colors"
              >
                <span>Periksa Kredensial</span>
                <ExternalLink size={13} className="text-warm-accent" />
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-warm-accent hover:bg-warm-accent-hover text-white text-xs font-medium rounded transition-colors"
            >
              Selesai
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
