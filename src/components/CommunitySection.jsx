import React from 'react';
import { Users, Calendar, Building2, CheckCircle2, Camera, MapPin, HeartHandshake } from 'lucide-react';
import { communityServicesData } from '../data/portfolioData';

export default function CommunitySection() {
  return (
    <section id="pengabdian" className="py-20 md:py-28 border-b border-warm-border bg-warm-surface/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            04 / Pengabdian
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Dampak Sosial & Komunitas
          </span>
        </div>

        {/* Section Title & Subheading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="font-serif text-3xl sm:text-4xl text-warm-text font-normal leading-snug">
              Pengabdian kepada Masyarakat
            </h2>
          </div>
          <p className="text-xs md:text-sm text-warm-muted max-w-sm">
            Tiga inisiatif dan kegiatan sosial berbasis transfer pengetahuan teknologi, pendampingan UMKM, dan literasi digital masyarakat.
          </p>
        </div>

        {/* 3 Flexible Activity Slots in Warm Editorial Storytelling Layout */}
        <div className="space-y-12">
          {communityServicesData.map((item, index) => (
            <div 
              key={item.id}
              className="bg-warm-bg rounded-xl border border-warm-border p-6 md:p-8 shadow-subtle hover:border-warm-accent/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Documentation Slot (5 cols) */}
                <div className="lg:col-span-5 space-y-2">
                  <div className="relative aspect-[16/10] bg-warm-surface rounded-lg border border-warm-border overflow-hidden flex flex-col justify-between p-4 group">
                    {/* Documentation Photo Frame Placeholder */}
                    <div className="flex items-center justify-between text-[11px] font-mono text-warm-muted">
                      <span className="flex items-center gap-1">
                        <Camera size={13} className="text-warm-accent" />
                        Dokumentasi 0{index + 1}
                      </span>
                      <span>{item.year}</span>
                    </div>

                    <div className="my-auto text-center space-y-1.5 p-3">
                      <div className="w-10 h-10 rounded-full bg-warm-bg border border-warm-border flex items-center justify-center mx-auto text-warm-accent">
                        <Users size={18} />
                      </div>
                      <div className="text-xs font-serif text-warm-text font-medium">
                        Slot Dokumentasi Kegiatan
                      </div>
                      <div className="text-[11px] text-warm-muted leading-tight max-w-xs mx-auto">
                        {item.documentationNote}
                      </div>
                    </div>

                    <div className="pt-2 border-t border-warm-border/80 flex items-center justify-between text-[11px] text-warm-muted">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-warm-accent" />
                        {item.location}
                      </span>
                      <span className="font-mono text-[10px]">ARSIP_KEGIATAN</span>
                    </div>
                  </div>
                </div>

                {/* Right: Narrative & Contributions (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-mono font-semibold px-2 py-0.5 rounded bg-warm-surface border border-warm-border text-warm-accent">
                      KEGIATAN 0{index + 1}
                    </span>
                    <span className="flex items-center gap-1 text-warm-muted">
                      <Calendar size={13} className="text-warm-accent" />
                      {item.year}
                    </span>
                    <span className="text-warm-muted">&bull;</span>
                    <span className="flex items-center gap-1 text-warm-muted">
                      <Building2 size={13} className="text-warm-accent" />
                      {item.organization}
                    </span>
                  </div>

                  {/* Activity Name */}
                  <h3 className="font-serif text-xl md:text-2xl text-warm-text font-medium leading-snug">
                    {item.title}
                  </h3>

                  {/* Short Natural Description */}
                  <p className="text-xs md:text-sm text-warm-muted leading-relaxed">
                    {item.description}
                  </p>

                  {/* Role & Specific Contributions */}
                  <div className="pt-3 border-t border-warm-border space-y-2">
                    <div className="text-xs font-medium text-warm-text flex items-center gap-2">
                      <span className="text-warm-muted">Peran:</span>
                      <span className="text-warm-accent font-semibold">{item.role}</span>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      {item.contributions.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2.5 text-xs text-warm-text/90">
                          <CheckCircle2 size={13} className="text-warm-accent shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
