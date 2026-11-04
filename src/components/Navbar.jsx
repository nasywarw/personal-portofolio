import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Profil', href: '#profil', id: 'profil' },
  { label: 'Tentang Saya', href: '#tentang-saya', id: 'tentang-saya' },
  { label: 'Portofolio', href: '#portofolio', id: 'portofolio' },
  { label: 'Pengabdian', href: '#pengabdian', id: 'pengabdian' },
  { label: 'Sertifikat', href: '#sertifikat', id: 'sertifikat' },
  { label: 'Kontak', href: '#kontak', id: 'kontak' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('profil');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-warm-bg/90 backdrop-blur-md border-b border-warm-border py-3 shadow-subtle' 
          : 'bg-warm-bg/60 backdrop-blur-sm border-b border-warm-border/50 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between">
        
        {/* Brand / Name Monogram */}
        <a 
          href="#profil" 
          onClick={(e) => handleNavClick(e, '#profil')}
          className="group flex items-center gap-2.5 text-warm-text font-serif text-lg font-medium tracking-tight"
        >
          <span className="w-8 h-8 rounded-full bg-warm-surface border border-warm-border flex items-center justify-center font-serif text-sm font-semibold text-warm-accent group-hover:bg-warm-accent group-hover:text-white transition-colors">
            R
          </span>
          <span className="tracking-tight text-warm-text font-serif">
            Raihan Pratama
          </span>
        </a>

        {/* Desktop Navigation Links (Strict order: Profil, Tentang Saya, Portofolio, Pengabdian, Sertifikat, Kontak) */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors rounded-full ${
                  isActive 
                    ? 'text-warm-text font-semibold bg-warm-surface' 
                    : 'text-warm-muted hover:text-warm-text hover:bg-warm-surface/60'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3 h-0.5 bg-warm-accent rounded-full"></span>
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Direct Action: Email shortcut */}
        <div className="hidden md:flex items-center">
          <a
            href="#kontak"
            onClick={(e) => handleNavClick(e, '#kontak')}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-warm-border text-xs font-medium text-warm-text hover:border-warm-accent hover:text-warm-accent transition-colors bg-warm-surface/40"
          >
            <span>Tersedia</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-warm-text hover:bg-warm-surface transition-colors border border-warm-border"
          aria-label="Buka menu navigasi"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-warm-border bg-warm-bg px-6 py-5 shadow-elevated animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-lg text-sm transition-colors ${
                    isActive 
                      ? 'bg-warm-surface text-warm-text font-semibold border border-warm-border' 
                      : 'text-warm-muted hover:text-warm-text hover:bg-warm-surface/50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-warm-accent"></span>}
                </a>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-warm-border flex items-center justify-between text-xs text-warm-muted">
            <span>Status: Terbuka untuk Kolaborasi</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          </div>
        </div>
      )}
    </header>
  );
}
