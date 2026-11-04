import React, { useEffect } from 'react';
import { X, Calendar, UserCheck, Wrench, CheckCircle, ArrowRight, Layers, FileText } from 'lucide-react';
import { ProjectVisual } from './ProjectVisuals';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
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

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#252522]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-warm-bg border border-warm-border rounded-xl shadow-elevated overflow-hidden flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-warm-border bg-warm-surface/70">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs px-2.5 py-1 rounded bg-warm-bg border border-warm-border text-warm-accent font-semibold">
              PROYEK {project.number}
            </span>
            <span className="text-xs uppercase tracking-wider text-warm-muted font-medium">
              {project.category}
            </span>
          </div>

          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-warm-muted hover:text-warm-text hover:bg-warm-bg transition-colors border border-transparent hover:border-warm-border"
            aria-label="Tutup jendela detail proyek"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8">
          
          {/* Header Title Section */}
          <div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-warm-muted mb-2">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="text-warm-accent" />
                {project.year}
              </span>
              <span>&bull;</span>
              <span>{project.clientOrContext}</span>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl text-warm-text font-normal leading-snug">
              {project.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-warm-muted leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Visual Showcase */}
          <div className="rounded-lg overflow-hidden border border-warm-border bg-warm-surface">
            <ProjectVisual type={project.previewType} />
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 rounded-lg bg-warm-surface border border-warm-border text-xs md:text-sm">
            <div>
              <div className="flex items-center gap-2 text-warm-muted font-medium mb-1.5">
                <UserCheck size={16} className="text-warm-accent" />
                <span>Peran & Tanggung Jawab</span>
              </div>
              <div className="text-warm-text font-medium">
                {project.role}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-warm-muted font-medium mb-1.5">
                <Wrench size={16} className="text-warm-accent" />
                <span>Teknologi & Alat Utama</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded bg-warm-bg border border-warm-border text-warm-text font-mono text-[11px]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Deep Narrative: Tantangan & Solusi Teknis */}
          {project.details && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-lg border border-warm-border bg-white">
                <h3 className="font-serif text-base font-semibold text-warm-text mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-warm-accent"></span>
                  Tantangan Rekayasa
                </h3>
                <p className="text-xs md:text-sm text-warm-muted leading-relaxed">
                  {project.details.challenge}
                </p>
              </div>

              <div className="p-5 rounded-lg border border-warm-border bg-white">
                <h3 className="font-serif text-base font-semibold text-warm-text mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                  Solusi & Pendekatan Teknis
                </h3>
                <p className="text-xs md:text-sm text-warm-muted leading-relaxed">
                  {project.details.solution}
                </p>
              </div>
            </div>
          )}

          {/* Key Deliverables & Highlights */}
          <div className="space-y-4 pt-2">
            <h3 className="font-serif text-lg text-warm-text font-normal flex items-center gap-2">
              <FileText size={18} className="text-warm-accent" />
              Kontribusi & Luaran Proyek
            </h3>
            
            <div className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs md:text-sm text-warm-text">
                  <div className="w-4 h-4 rounded-full bg-warm-accent-soft flex items-center justify-center shrink-0 mt-0.5 text-warm-accent">
                    <CheckCircle size={13} />
                  </div>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {project.details?.deliverables && (
              <div className="mt-4 pt-4 border-t border-warm-border">
                <div className="text-xs font-semibold uppercase tracking-wider text-warm-muted mb-2">
                  Artefak & Hasil Pekerjaan:
                </div>
                <ul className="space-y-1.5 text-xs text-warm-muted list-disc list-inside">
                  {project.details.deliverables.map((deliv, idx) => (
                    <li key={idx} className="leading-relaxed">{deliv}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-warm-border bg-warm-surface/70">
          <span className="text-xs text-warm-muted font-mono">
            {project.category} &bull; {project.year}
          </span>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-warm-accent hover:bg-warm-accent-hover text-white text-xs font-medium rounded-lg transition-colors"
          >
            Tutup Pratinjau
          </button>
        </div>

      </div>
    </div>
  );
}
