import React, { useState } from 'react';
import { ArrowUpRight, Calendar, UserCheck, Wrench, Layers } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisuals';
import ProjectDetailModal from './ProjectDetailModal';

export default function PortfolioSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="portofolio" className="py-20 md:py-28 border-b border-warm-border">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            03 / Portofolio
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Koleksi Karya Terpilih
          </span>
        </div>

        {/* Section Intro Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-warm-text font-normal leading-snug">
              Proyek Rekayasa Perangkat Lunak, Spasial, dan Antarmuka
            </h2>
          </div>
          <p className="text-xs md:text-sm text-warm-muted max-w-sm">
            Tepat lima proyek unggulan yang merepresentasikan kemampuan teknis, ketelitian desain, dan pemecahan masalah nyata.
          </p>
        </div>

        {/* Varied Editorial Showcase */}
        <div className="space-y-16 md:space-y-24">
          
          {/* =========================================================================
              PROYEK 01: VR ISTANA SIAK (Featured Large Editorial Spread)
             ========================================================================= */}
          {(() => {
            const p = projectsData[0];
            return (
              <div className="bg-warm-surface/50 border border-warm-border rounded-2xl p-6 md:p-10 shadow-subtle space-y-8">
                {/* Top Meta Line */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-warm-border pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-warm-bg border border-warm-border text-warm-accent">
                      PROYEK {p.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-warm-muted">
                    <span className="flex items-center gap-1 font-mono">
                      <Calendar size={13} className="text-warm-accent" />
                      {p.year}
                    </span>
                    <span>&bull;</span>
                    <span>{p.clientOrContext}</span>
                  </div>
                </div>

                {/* Big Visual Centerpiece */}
                <div className="rounded-xl overflow-hidden border border-warm-border shadow-elevated">
                  <ProjectVisual type={p.previewType} />
                </div>

                {/* Content Split: Title & Bio vs Role, Tech, Action */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
                  <div className="lg:col-span-7 space-y-3">
                    <h3 className="font-serif text-2xl md:text-3xl text-warm-text font-medium leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-base text-warm-muted leading-relaxed">
                      {p.summary}
                    </p>
                  </div>

                  <div className="lg:col-span-5 space-y-4 bg-warm-bg p-5 rounded-xl border border-warm-border">
                    <div className="text-xs">
                      <span className="text-warm-muted font-medium block mb-1">Peran Saya:</span>
                      <span className="font-semibold text-warm-text">{p.role}</span>
                    </div>

                    <div>
                      <span className="text-xs text-warm-muted font-medium block mb-1.5">Teknologi:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {p.techStack.map((tech, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-warm-surface border border-warm-border text-[11px] font-mono text-warm-text">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(p)}
                      className="w-full mt-2 py-2 px-4 bg-warm-accent hover:bg-warm-accent-hover text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <span>Lihat Detail Proyek</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* =========================================================================
              PROYEK 02 & PROYEK 03: Asymmetric Split Editorial Row
             ========================================================================= */}
          
          {/* Proyek 02: SIJAGAT (Text Left, Visual Right) */}
          {(() => {
            const p = projectsData[1];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-warm-border">
                {/* Content Column */}
                <div className="lg:col-span-6 space-y-5 order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-warm-surface border border-warm-border text-warm-accent">
                      PROYEK {p.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                      {p.category}
                    </span>
                    <span className="text-xs text-warm-muted">&bull; {p.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-warm-text font-medium leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-sm text-warm-muted leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-warm-border">
                    <div className="text-xs text-warm-text">
                      <span className="text-warm-muted">Peran:</span> <span className="font-medium">{p.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-warm-surface border border-warm-border text-[11px] font-mono text-warm-text">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-warm-surface hover:bg-[#E5E3DC] text-warm-text text-xs font-medium border border-warm-border transition-colors"
                    >
                      <span>Lihat Detail Proyek</span>
                      <ArrowUpRight size={14} className="text-warm-accent" />
                    </button>
                  </div>
                </div>

                {/* Visual Column */}
                <div className="lg:col-span-6 order-1 lg:order-2">
                  <div className="rounded-xl overflow-hidden border border-warm-border shadow-elevated">
                    <ProjectVisual type={p.previewType} />
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Proyek 03: NUSAREKA ERP (Visual Left, Text Right) */}
          {(() => {
            const p = projectsData[2];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-8 border-t border-warm-border">
                {/* Visual Column */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl overflow-hidden border border-warm-border shadow-elevated">
                    <ProjectVisual type={p.previewType} />
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-6 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded bg-warm-surface border border-warm-border text-warm-accent">
                      PROYEK {p.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                      {p.category}
                    </span>
                    <span className="text-xs text-warm-muted">&bull; {p.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-warm-text font-medium leading-snug">
                    {p.title}
                  </h3>

                  <p className="text-sm text-warm-muted leading-relaxed">
                    {p.summary}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-warm-border">
                    <div className="text-xs text-warm-text">
                      <span className="text-warm-muted">Peran:</span> <span className="font-medium">{p.role}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.techStack.map((tech, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-warm-surface border border-warm-border text-[11px] font-mono text-warm-text">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedProject(p)}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-warm-surface hover:bg-[#E5E3DC] text-warm-text text-xs font-medium border border-warm-border transition-colors"
                    >
                      <span>Lihat Detail Proyek</span>
                      <ArrowUpRight size={14} className="text-warm-accent" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}

          {/* =========================================================================
              PROYEK 04 & PROYEK 05: Editorial Duo Showcase
             ========================================================================= */}
          <div className="pt-8 border-t border-warm-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              
              {/* Proyek 04: DZAPIN MERCHANT */}
              {(() => {
                const p = projectsData[3];
                return (
                  <div className="bg-warm-surface/40 border border-warm-border rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-subtle hover:border-warm-accent/50 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-warm-bg border border-warm-border text-warm-accent">
                          PROYEK {p.number}
                        </span>
                        <span className="text-xs font-mono text-warm-muted">{p.year}</span>
                      </div>

                      {/* Visual */}
                      <div className="rounded-lg overflow-hidden border border-warm-border mb-5">
                        <ProjectVisual type={p.previewType} />
                      </div>

                      <div className="text-[11px] font-mono uppercase tracking-wider text-warm-muted mb-1">
                        {p.category}
                      </div>
                      <h4 className="font-serif text-xl text-warm-text font-medium leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-xs md:text-sm text-warm-muted mt-2.5 leading-relaxed">
                        {p.summary}
                      </p>

                      {/* Ethical Note Banner (Mandatory per prompt) */}
                      <div className="mt-3 p-2.5 bg-warm-accent-soft/60 rounded border border-warm-border text-[11px] text-warm-text">
                        <span className="font-semibold text-warm-accent">Catatan Ruang Lingkup:</span> Proyek ini merupakan hasil perancangan UI/UX komprehensif dan dokumen rekomendasi desain antarmuka.
                      </div>
                    </div>

                    <div className="pt-4 border-t border-warm-border flex items-center justify-between">
                      <span className="text-xs text-warm-muted font-medium">{p.role}</span>
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="inline-flex items-center gap-1.5 text-xs text-warm-accent font-semibold hover:underline"
                      >
                        <span>Detail & Figma Flow</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                );
              })()}

              {/* Proyek 05: FUTSAL-GO */}
              {(() => {
                const p = projectsData[4];
                return (
                  <div className="bg-warm-surface/40 border border-warm-border rounded-xl p-6 flex flex-col justify-between space-y-6 shadow-subtle hover:border-warm-accent/50 transition-colors">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-warm-bg border border-warm-border text-warm-accent">
                          PROYEK {p.number}
                        </span>
                        <span className="text-xs font-mono text-warm-muted">{p.year}</span>
                      </div>

                      {/* Visual */}
                      <div className="rounded-lg overflow-hidden border border-warm-border mb-5">
                        <ProjectVisual type={p.previewType} />
                      </div>

                      <div className="text-[11px] font-mono uppercase tracking-wider text-warm-muted mb-1">
                        {p.category}
                      </div>
                      <h4 className="font-serif text-xl text-warm-text font-medium leading-snug">
                        {p.title}
                      </h4>
                      <p className="text-xs md:text-sm text-warm-muted mt-2.5 leading-relaxed">
                        {p.summary}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-warm-border flex items-center justify-between">
                      <span className="text-xs text-warm-muted font-medium">{p.role}</span>
                      <button
                        onClick={() => setSelectedProject(p)}
                        className="inline-flex items-center gap-1.5 text-xs text-warm-accent font-semibold hover:underline"
                      >
                        <span>Detail & Alur GIS</span>
                        <ArrowUpRight size={13} />
                      </button>
                    </div>
                  </div>
                );
              })()}

            </div>
          </div>

        </div>

      </div>

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
