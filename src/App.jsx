import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import CommunitySection from './components/CommunitySection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-bg text-warm-text font-sans selection:bg-warm-accent-soft selection:text-warm-text">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Content Sections strictly in order */}
      <main>
        {/* SECTION 01 — PROFIL / HERO */}
        <HeroSection />

        {/* SECTION 02 — TENTANG SAYA */}
        <AboutSection />

        {/* SECTION 03 — PORTOFOLIO */}
        <PortfolioSection />

        {/* SECTION 04 — PENGABDIAN KEPADA MASYARAKAT */}
        <CommunitySection />

        {/* SECTION 05 — SERTIFIKAT */}
        <CertificatesSection />

        {/* SECTION 06 — KONTAK */}
        <ContactSection />
      </main>
    </div>
  );
}
