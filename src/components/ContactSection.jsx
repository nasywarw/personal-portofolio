import React, { useState } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Send, MapPin, Clock, ArrowUp } from 'lucide-react';
import { contactData } from '../data/portfolioData';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="pt-20 md:pt-28 pb-12 bg-warm-surface/60 border-t border-warm-border relative">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs text-warm-accent font-semibold tracking-widest uppercase">
            06 / Kontak
          </span>
          <span className="w-8 h-[1px] bg-warm-border"></span>
          <span className="text-xs text-warm-muted uppercase tracking-wider">
            Terhubung & Kolaborasi
          </span>
        </div>

        {/* Top Split: Narrative & Direct Email Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-warm-border">
          
          {/* Left: Invitation Headline & Info (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-warm-text font-normal leading-snug">
              {contactData.heading}
            </h2>
            
            <p className="text-sm md:text-base text-warm-muted leading-relaxed max-w-lg">
              {contactData.subheading}
            </p>

            {/* Direct Email Card with One-Click Copy */}
            <div className="p-5 rounded-xl bg-warm-bg border border-warm-border shadow-subtle space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                Alamat Surat Elektronik Utama
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <a 
                  href={`mailto:${contactData.email}`}
                  className="font-serif text-base sm:text-lg text-warm-text font-medium hover:text-warm-accent transition-colors truncate"
                >
                  {contactData.email}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3 py-1.5 rounded-lg bg-warm-surface hover:bg-[#E4E2DA] border border-warm-border text-xs font-medium text-warm-text transition-colors flex items-center gap-1.5 shrink-0"
                    title="Salin alamat email"
                  >
                    {copied ? (
                      <>
                        <Check size={14} className="text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Tersalin!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} className="text-warm-accent" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contactData.email}`}
                    className="p-1.5 rounded-lg bg-warm-accent hover:bg-warm-accent-hover text-white transition-colors shrink-0"
                    title="Buka aplikasi email"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Metadata & Availability info */}
            <div className="grid grid-cols-2 gap-4 text-xs text-warm-muted pt-2">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-warm-accent shrink-0 mt-0.5" />
                <span>{contactData.location}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-warm-accent shrink-0 mt-0.5" />
                <span>{contactData.workingHours}</span>
              </div>
            </div>

            {/* Social & Professional Links */}
            <div className="pt-4 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-warm-muted">
                Kanal Profesional:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {contactData.socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-warm-bg border border-warm-border hover:border-warm-accent/50 transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <div className="text-xs font-medium text-warm-text group-hover:text-warm-accent transition-colors">
                        {link.name}
                      </div>
                      <div className="text-[11px] text-warm-muted truncate max-w-[180px]">
                        {link.handle}
                      </div>
                    </div>
                    <ArrowUpRight size={14} className="text-warm-muted group-hover:text-warm-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Clean Inquiry Form (6 cols) */}
          <div className="lg:col-span-6">
            <div className="p-6 md:p-8 bg-warm-bg rounded-xl border border-warm-border shadow-subtle">
              <h3 className="font-serif text-xl text-warm-text font-normal mb-1">
                Kirimkan Pesan Singkat
              </h3>
              <p className="text-xs text-warm-muted mb-6">
                Formulir langsung untuk mendiskusikan peluang kerja, proyek lepas, atau sekadar bertukar sapa.
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-lg bg-warm-surface border border-warm-border text-center space-y-3 animate-in fade-in">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <Check size={20} />
                  </div>
                  <h4 className="font-serif text-lg font-medium text-warm-text">
                    Terima Kasih, Pesan Telah Dikirim
                  </h4>
                  <p className="text-xs text-warm-muted max-w-sm mx-auto leading-relaxed">
                    Saya akan meninjau pesan Anda dan segera memberikan tanggapan melalui alamat email yang dicantumkan.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs text-warm-accent font-medium hover:underline pt-2 inline-block"
                  >
                    Kirim pesan lain &rarr;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block text-warm-text font-medium mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Contoh: Pratama Wijaya"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border text-warm-text placeholder:text-warm-muted/60 focus:outline-none focus:border-warm-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-text font-medium mb-1">
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@institusi.com"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border text-warm-text placeholder:text-warm-muted/60 focus:outline-none focus:border-warm-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-text font-medium mb-1">
                      Subjek Percakapan
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Peluang Proyek / Kolaborasi Teknis"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border text-warm-text placeholder:text-warm-muted/60 focus:outline-none focus:border-warm-accent transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-text font-medium mb-1">
                      Pesan
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tuliskan latar belakang rencana atau pertanyaan Anda di sini..."
                      className="w-full px-3.5 py-2.5 rounded-lg bg-warm-surface border border-warm-border text-warm-text placeholder:text-warm-muted/60 focus:outline-none focus:border-warm-accent transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-warm-accent hover:bg-warm-accent-hover text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2 shadow-subtle"
                  >
                    <span>Kirimkan Pesan</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Bottom Editorial Footer: Copyright & Navigation */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-warm-muted">
          <div>
            &copy; {new Date().getFullYear()} M. Raihan Pratama. Seluruh hak cipta dilindungi.
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-[11px]">Dirancang dengan Pendekatan Warm Editorial</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-warm-accent hover:text-warm-text transition-colors font-medium"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
