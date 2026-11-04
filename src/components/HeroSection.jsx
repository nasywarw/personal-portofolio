import React from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/portfolioData';

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="profil" className="pt-28 md:pt-36 pb-20 md:pb-28 border-b border-warm-border relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Index / Meta Tag */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            01 / Profil
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Perkenalan Profesional
          </span>
        </div>

        {/* Main Hero Grid: Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Editorial Introduction (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-surface border border-warm-border text-xs text-warm-text">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-warm-muted">{profileData.availability}</span>
            </div>

            {/* Name & Professional Identity */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-warm-text font-normal tracking-tight leading-tight">
                {profileData.name}
              </h1>
              <p className="text-base sm:text-lg text-warm-accent font-medium tracking-wide">
                {profileData.title}
              </p>
            </div>

            {/* Short Authentic Bio (Not overblown, not AI cliché) */}
            <p className="text-sm sm:text-base text-warm-muted leading-relaxed max-w-xl">
              {profileData.shortBio}
            </p>

            {/* Quick Context Strip */}
            <div className="flex items-center gap-2 text-xs text-warm-muted pt-1">
              <MapPin size={14} className="text-warm-accent shrink-0" />
              <span>{profileData.location}</span>
            </div>

            {/* Three Action Buttons strictly as requested: Lihat Portofolio, Tentang Saya, Hubungi Saya */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollTo('#portofolio')}
                className="px-5 py-2.5 bg-warm-accent hover:bg-warm-accent-hover text-white text-xs sm:text-sm font-medium rounded-lg transition-all shadow-subtle hover:shadow flex items-center gap-2"
              >
                <span>Lihat Portofolio</span>
                <ArrowDown size={15} />
              </button>

              <button
                onClick={() => scrollTo('#tentang-saya')}
                className="px-5 py-2.5 bg-warm-surface hover:bg-[#E6E4DD] text-warm-text text-xs sm:text-sm font-medium rounded-lg border border-warm-border transition-colors"
              >
                Tentang Saya
              </button>

              <button
                onClick={() => scrollTo('#kontak')}
                className="px-5 py-2.5 bg-transparent hover:bg-warm-surface text-warm-text text-xs sm:text-sm font-medium rounded-lg border border-warm-border transition-colors"
              >
                Hubungi Saya
              </button>
            </div>

          </div>

          {/* Right Column: Editorial Profile Photo Frame & Subtle Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Editorial Frame with subtle warm borders */}
              <div className="bg-warm-surface p-3 rounded-2xl border border-warm-border shadow-elevated">
                
                {/* Inner Photo Display Container */}
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-[#E7E4DC] border border-warm-border flex flex-col justify-between p-6">
                  
                  {/* Subtle editorial watermark */}
                  <div className="flex justify-between items-start text-[11px] font-mono text-warm-muted uppercase tracking-wider">
                    <span>Identitas Kreatif</span>
                    <span>No. 001/ENG</span>
                  </div>

                  {/* Elegant Monogram / Portrait Avatar Graphic */}
                  <div className="my-auto flex flex-col items-center text-center space-y-4">
                    <div className="w-24 h-24 rounded-full bg-warm-bg border-2 border-warm-accent/40 flex items-center justify-center shadow-subtle text-warm-accent">
                      <span className="font-serif text-3xl font-normal">RP</span>
                    </div>

                    <div className="space-y-1">
                      <div className="font-serif text-lg text-warm-text font-medium">
                        M. Raihan Pratama
                      </div>
                      <div className="text-xs text-warm-muted font-mono">
                        Engineer & Designer
                      </div>
                    </div>
                  </div>

                  {/* Photo Frame Footer Note */}
                  <div className="pt-3 border-t border-warm-border/80 flex items-center justify-between text-[11px] text-warm-muted">
                    <span className="font-mono">Pekanbaru &bull; ID</span>
                    <span className="inline-flex items-center gap-1 text-warm-accent font-medium">
                      Aktif Meneliti & Membangun
                    </span>
                  </div>

                </div>

              </div>

              {/* Decorative Subtle Corner Accent */}
              <div className="absolute -bottom-3 -left-3 bg-white px-3.5 py-2 rounded-lg border border-warm-border shadow-subtle text-xs font-mono text-warm-text hidden sm:flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-accent"></span>
                <span>Portofolio Mandiri 2024</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
