import React from 'react';
import { aboutData } from '../data/portfolioData';
import { Compass, BookOpen, Sparkles, Code2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="tentang-saya" className="py-20 md:py-28 border-b border-warm-border bg-warm-surface/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            02 / Tentang Saya
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Perjalanan, Filosofi & Keahlian
          </span>
        </div>

        {/* Lead Headline */}
        <div className="max-w-3xl mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-warm-text font-normal leading-snug">
            {aboutData.lead}
          </h2>
        </div>

        {/* Narrative Section: 2 Columns of Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-warm-border">
          
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-warm-bg rounded-xl border border-warm-border shadow-subtle space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-warm-accent uppercase tracking-wider">
                <Compass size={14} />
                <span>Pendekatan Rekayasa</span>
              </div>
              <p className="text-sm text-warm-text leading-relaxed font-serif italic">
                &ldquo;Saya melihat kode dan antarmuka sebagai dua sisi dari mata uang yang sama. Keandalan logika di belakang layar hanya akan terasa bermakna saat pengguna dapat berinteraksi dengannya secara intuitif dan tanpa hambatan.&rdquo;
              </p>
              <div className="pt-2 border-t border-warm-border text-xs text-warm-muted">
                Prinsip kerja: Ketelitian teknis, kode bersih, dan empati terhadap pengguna.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-5 text-sm md:text-base text-warm-text/90 leading-relaxed">
            {aboutData.story.map((paragraph, idx) => (
              <p key={idx} className="text-warm-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

        </div>

        {/* 7 Core Areas of Practice (Editorial Catalog Layout) */}
        <div className="pt-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-warm-accent font-semibold mb-1">
                Eksplorasi Multidisiplin
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-warm-text font-normal">
                Bidang & Ranah Pekerjaan
              </h3>
            </div>
            <p className="text-xs md:text-sm text-warm-muted max-w-md">
              Tujuh fokus utama yang saya tekuni melalui riset akademis, proyek profesional, dan pengembangan prototipe mandiri.
            </p>
          </div>

          {/* List layout with clean editorial borders instead of repetitive cards */}
          <div className="divide-y divide-warm-border border-y border-warm-border">
            {aboutData.areas.map((area, idx) => (
              <div 
                key={idx}
                className="py-6 md:py-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start group hover:bg-warm-bg/60 transition-colors px-2 md:px-4 rounded-lg"
              >
                {/* Index & Title */}
                <div className="md:col-span-4 flex items-start gap-4">
                  <span className="font-mono text-xs text-warm-accent font-medium mt-1">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg md:text-xl text-warm-text font-medium group-hover:text-warm-accent transition-colors">
                      {area.title}
                    </h4>
                    <span className="inline-block text-[11px] font-mono text-warm-muted mt-1 uppercase tracking-wide">
                      {area.tag}
                    </span>
                  </div>
                </div>

                {/* Narrative Description */}
                <div className="md:col-span-5">
                  <p className="text-xs md:text-sm text-warm-muted leading-relaxed">
                    {area.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="md:col-span-3 flex flex-wrap gap-1.5 md:justify-end">
                  {area.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-warm-bg border border-warm-border text-[11px] font-mono text-warm-text/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
