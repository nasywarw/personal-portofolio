import React from 'react';
import { Eye, Layers, Box, Cpu, ShieldCheck, MapPin, Smartphone, Activity, CheckCircle2 } from 'lucide-react';

/**
 * Visual preview custom bergaya Warm Editorial untuk 5 proyek spesifik.
 * Dirancang agar memiliki fidelitas visual tinggi, otentik, dan tidak tampak seperti aset generik AI.
 */

export const VRIstanaSiakVisual = () => (
  <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#22211E] text-[#E3E0D8] p-6 rounded-lg relative overflow-hidden flex flex-col justify-between font-mono text-xs border border-[#3A3832]">
    {/* Architectural grid background */}
    <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
      backgroundImage: `linear-gradient(#8C7965 1px, transparent 1px), linear-gradient(90deg, #8C7965 1px, transparent 1px)`,
      backgroundSize: '24px 24px'
    }} />

    {/* Top Bar: Telemetry / VR Metadata */}
    <div className="relative z-10 flex items-center justify-between border-b border-[#3A3832] pb-3">
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#8C7965] animate-pulse"></span>
        <span className="text-[#D8D4CA] tracking-wider uppercase">VR_ENV_SIAK_PALACE_LOD0</span>
      </div>
      <div className="flex items-center gap-4 text-[#A8A49A]">
        <span>FPS: 72 (STABLE)</span>
        <span>POLYCOUNT: 142.4K</span>
      </div>
    </div>

    {/* Center Graphic: Architectural Facade Silhouette & 3D Wireframe */}
    <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center">
      <div className="w-full max-w-md relative">
        <svg viewBox="0 0 400 160" className="w-full h-auto stroke-[#C9B8A2] fill-none" strokeWidth="1.2">
          {/* Siak Palace Silhouette / Front Elevation */}
          {/* Main Dome */}
          <path d="M 200 20 C 185 20, 175 40, 170 55 L 230 55 C 225 40, 215 20, 200 20 Z" fill="#2E2B25" />
          <line x1="200" y1="10" x2="200" y2="20" stroke="#8C7965" strokeWidth="1.5" />
          <circle cx="200" cy="10" r="2.5" fill="#C9B8A2" />

          {/* Side Domes */}
          <path d="M 120 40 C 110 40, 102 52, 100 62 L 140 62 C 138 52, 130 40, 120 40 Z" fill="#2A2722" />
          <path d="M 280 40 C 270 40, 262 52, 260 62 L 300 62 C 298 52, 290 40, 280 40 Z" fill="#2A2722" />

          {/* Roof line */}
          <line x1="80" y1="62" x2="320" y2="62" stroke="#8C7965" strokeWidth="1.5" />
          <line x1="60" y1="75" x2="340" y2="75" />

          {/* Main 2-story Hall */}
          <rect x="70" y="75" width="260" height="70" stroke="#C9B8A2" strokeWidth="1" fill="#22211E" />

          {/* Pillars (Istana Siak iconic colonnade) */}
          <line x1="90" y1="75" x2="90" y2="145" stroke="#8C7965" />
          <line x1="120" y1="75" x2="120" y2="145" stroke="#8C7965" />
          <line x1="150" y1="75" x2="150" y2="145" stroke="#8C7965" />
          <line x1="180" y1="75" x2="180" y2="145" stroke="#8C7965" />
          <line x1="220" y1="75" x2="220" y2="145" stroke="#8C7965" />
          <line x1="250" y1="75" x2="250" y2="145" stroke="#8C7965" />
          <line x1="280" y1="75" x2="280" y2="145" stroke="#8C7965" />
          <line x1="310" y1="75" x2="310" y2="145" stroke="#8C7965" />

          {/* Grand Arch Entrance */}
          <path d="M 185 145 L 185 105 C 185 96, 215 96, 215 105 L 215 145" stroke="#C9B8A2" strokeWidth="1.5" fill="#1C1A17" />
          
          {/* Ground Plane line */}
          <line x1="40" y1="145" x2="360" y2="145" stroke="#D8D4CA" strokeWidth="1.5" />

          {/* Reticle / VR Target Viewport */}
          <circle cx="200" cy="95" r="22" stroke="#8C7965" strokeDasharray="3 3" />
          <circle cx="200" cy="95" r="3" fill="#C9B8A2" />
        </svg>

        {/* Spatial Tag Pill */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="px-2.5 py-1 bg-[#2D2A24] text-[#D8D4CA] rounded text-[11px] border border-[#444036] flex items-center gap-1.5">
            <Box size={13} className="text-[#C9B8A2]" />
            Blender Hard-Surface Mesh &bull; Substance PBR Shading
          </span>
        </div>
      </div>
    </div>

    {/* Bottom Bar: Engine & Pipeline specs */}
    <div className="relative z-10 pt-3 border-t border-[#3A3832] flex flex-wrap items-center justify-between text-[#8E8B83] text-[11px]">
      <span>TARGET: Meta Quest 2 / Quest 3</span>
      <span className="text-[#C9B8A2]">Unity URP &bull; Baked Lighting &bull; 6DoF</span>
    </div>
  </div>
);

export const SijagatVisual = () => (
  <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#F4F3EE] p-5 rounded-lg border border-warm-border flex flex-col justify-between font-sans">
    {/* Android Mobile Frame Simulator */}
    <div className="bg-[#1C1A17] rounded-xl p-3 shadow-sm border border-[#3A3832] text-white flex-1 flex flex-col justify-between overflow-hidden relative">
      {/* Phone status bar */}
      <div className="flex items-center justify-between text-[11px] text-[#A8A49A] px-1 pb-2 border-b border-[#322F29]">
        <span className="font-mono">14:32</span>
        <span className="font-mono text-[#D8D4CA] flex items-center gap-1.5">
          <Activity size={12} className="text-emerald-400" />
          SIJAGAT_YOLOv8_TFLite
        </span>
        <span className="font-mono">82%</span>
      </div>

      {/* Viewfinder Area */}
      <div className="relative my-3 flex-1 min-h-[170px] bg-[#272520] rounded-lg overflow-hidden border border-[#3D3A33] flex items-center justify-center">
        {/* Subtle camera grid */}
        <div className="absolute inset-0 opacity-15" style={{
          backgroundImage: 'linear-gradient(#FAF8F5 1px, transparent 1px), linear-gradient(90deg, #FAF8F5 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }} />

        {/* Horizon silhouette */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#1C1A17] to-transparent opacity-60"></div>

        {/* Bounding Box 1: Flame detection */}
        <div className="absolute left-8 top-6 w-36 h-28 border-2 border-amber-500 bg-amber-500/10 rounded flex flex-col justify-between p-1">
          <div className="inline-block bg-amber-600 text-white text-[10px] font-mono font-medium px-1.5 py-0.5 rounded self-start shadow-sm">
            Api (Flame) 94.6%
          </div>
          <div className="text-[9px] font-mono text-amber-200 self-end">
            x:120 y:84 w:144
          </div>
        </div>

        {/* Bounding Box 2: Smoke detection */}
        <div className="absolute right-6 top-10 w-44 h-24 border-2 border-neutral-400 bg-neutral-400/10 rounded flex flex-col justify-between p-1">
          <div className="inline-block bg-neutral-600 text-white text-[10px] font-mono font-medium px-1.5 py-0.5 rounded self-start shadow-sm">
            Asap (Smoke) 89.2%
          </div>
          <div className="text-[9px] font-mono text-neutral-300 self-end">
            x:280 y:102 w:176
          </div>
        </div>

        {/* Center Crosshair */}
        <div className="w-6 h-6 border border-white/30 rounded-full flex items-center justify-center">
          <div className="w-1 h-1 bg-white/70 rounded-full"></div>
        </div>
      </div>

      {/* Bottom Telemetry Card */}
      <div className="bg-[#26241F] rounded p-2 text-xs flex items-center justify-between border border-[#3D3A33]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
          <span className="text-[11px] text-[#D8D4CA] font-mono">Inferensi: 18ms &bull; CameraX 60 FPS</span>
        </div>
        <span className="text-[10px] font-mono text-[#A8A49A] bg-[#1A1916] px-2 py-0.5 rounded border border-[#35322B]">
          Model: INT8 13.8 MB
        </span>
      </div>
    </div>
  </div>
);

export const NusarekaVisual = () => (
  <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#FAF8F5] p-5 rounded-lg border border-warm-border flex flex-col justify-between font-sans">
    {/* Enterprise Management Dashboard Mockup */}
    <div className="bg-white rounded-lg border border-warm-border p-4 shadow-subtle flex-1 flex flex-col justify-between">
      {/* Header info */}
      <div className="flex items-center justify-between border-b border-warm-border pb-3">
        <div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-warm-muted">PT. Nusareka Prima Engineering</div>
          <div className="font-serif font-medium text-warm-text text-sm mt-0.5">Sistem Manajemen Operasional & Administrasi</div>
        </div>
        <span className="text-[11px] px-2.5 py-0.5 bg-warm-accent-soft text-warm-accent font-medium rounded border border-warm-border">
          RBAC: Admin HR & K3
        </span>
      </div>

      {/* KPI metric tiles */}
      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="p-2.5 rounded bg-warm-surface border border-warm-border">
          <div className="text-[10px] text-warm-muted">Kehadiran Hari Ini</div>
          <div className="text-base font-semibold text-warm-text mt-0.5">97.4%</div>
          <div className="text-[10px] text-emerald-700">142/146 Pegawai</div>
        </div>
        <div className="p-2.5 rounded bg-warm-surface border border-warm-border">
          <div className="text-[10px] text-warm-muted">Kepatuhan K3 Safety</div>
          <div className="text-base font-semibold text-warm-text mt-0.5">100%</div>
          <div className="text-[10px] text-emerald-700">Zero Incident Log</div>
        </div>
        <div className="p-2.5 rounded bg-warm-surface border border-warm-border">
          <div className="text-[10px] text-warm-muted">Payroll Periode</div>
          <div className="text-base font-semibold text-warm-text mt-0.5">Terverifikasi</div>
          <div className="text-[10px] text-warm-accent font-medium">Slip Terbit Otomatis</div>
        </div>
      </div>

      {/* Sample Data Table rows */}
      <div className="border border-warm-border rounded overflow-hidden text-xs">
        <div className="bg-warm-surface px-3 py-1.5 text-[11px] font-medium text-warm-muted flex justify-between border-b border-warm-border">
          <span>Karyawan / Divisi</span>
          <span>Status Absensi</span>
          <span>Dokumen Slip</span>
        </div>
        <div className="px-3 py-2 flex items-center justify-between border-b border-warm-border/60 bg-white">
          <span className="font-medium text-warm-text">Budi Santoso &bull; <span className="text-warm-muted font-normal">Site Engineering</span></span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Hadir (07:48 WIB)</span>
          <span className="text-warm-accent font-mono text-[11px]">PDF_READY</span>
        </div>
        <div className="px-3 py-2 flex items-center justify-between bg-warm-bg/40">
          <span className="font-medium text-warm-text">Siti Nurhaliza &bull; <span className="text-warm-muted font-normal">HSE Officer</span></span>
          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Hadir (07:55 WIB)</span>
          <span className="text-warm-accent font-mono text-[11px]">PDF_READY</span>
        </div>
      </div>
    </div>
  </div>
);

export const DzapinVisual = () => (
  <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#FAF8F5] p-5 rounded-lg border border-warm-border flex flex-col justify-between font-sans">
    {/* UI/UX Figma Canvas representation */}
    <div className="bg-[#EFEEE8] rounded-lg p-3 border border-warm-border flex-1 flex flex-col justify-between">
      {/* Design System Header */}
      <div className="flex items-center justify-between pb-2 border-b border-warm-border text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8C7965]"></span>
          <span className="font-medium text-warm-text">Figma Prototype: Dzapin Merchant QRIS</span>
        </div>
        <span className="text-[11px] font-mono text-warm-muted">v2.4 &bull; Redesign Syariah</span>
      </div>

      {/* Screen Duo: Mobile App & Web Merchant Portal */}
      <div className="grid grid-cols-2 gap-3 my-2 items-center">
        {/* Mobile View Screen */}
        <div className="bg-white rounded-lg p-2.5 border border-warm-border shadow-subtle flex flex-col justify-between">
          <div className="text-[9px] font-mono text-warm-muted uppercase">Mobile Merchant</div>
          <div className="my-1.5 p-2 bg-warm-surface rounded text-center">
            <div className="text-[9px] text-warm-muted">Omzet Masuk Hari Ini</div>
            <div className="text-xs font-serif font-bold text-warm-text mt-0.5">Rp 2.450.000</div>
          </div>
          <div className="h-10 bg-warm-accent-soft rounded border border-warm-border flex items-center justify-center text-[10px] text-warm-accent font-medium">
            [ Tampilkan Kode QRIS ]
          </div>
        </div>

        {/* Web Dashboard Screen */}
        <div className="bg-white rounded-lg p-2.5 border border-warm-border shadow-subtle flex flex-col justify-between">
          <div className="text-[9px] font-mono text-warm-muted uppercase">Web Portal Analitik</div>
          <div className="my-1.5 space-y-1">
            <div className="h-1.5 bg-warm-surface rounded w-full"></div>
            <div className="h-1.5 bg-warm-accent/40 rounded w-4/5"></div>
            <div className="h-1.5 bg-warm-surface rounded w-3/4"></div>
          </div>
          <div className="p-1 bg-warm-surface rounded text-[9px] text-center text-warm-text font-medium">
            32 Transaksi QRIS Berhasil
          </div>
        </div>
      </div>

      {/* UX Highlight banner */}
      <div className="bg-white rounded p-2 text-[11px] text-warm-muted border border-warm-border flex items-center justify-between">
        <span>Fokus: Kecepatan Verifikasi Transaksi Kasir</span>
        <span className="text-warm-accent font-medium">Komponen Terstandar</span>
      </div>
    </div>
  </div>
);

export const FutsalGoVisual = () => (
  <div className="w-full h-full min-h-[300px] md:min-h-[380px] bg-[#F7F6F2] p-5 rounded-lg border border-warm-border flex flex-col justify-between font-sans">
    {/* Map GIS Interface Mockup */}
    <div className="bg-white rounded-lg border border-warm-border p-3 shadow-subtle flex-1 flex flex-col justify-between relative overflow-hidden">
      {/* Search & Location Filter Bar */}
      <div className="flex items-center justify-between gap-2 border-b border-warm-border pb-2 z-10 bg-white">
        <div className="flex items-center gap-1.5 text-xs text-warm-text font-medium">
          <MapPin size={14} className="text-warm-accent" />
          <span>Pekanbaru &bull; Radius 5 Km</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 bg-warm-surface text-warm-muted rounded">
          Leaflet.js &bull; OpenStreetMap
        </span>
      </div>

      {/* Styled Map Graphic Canvas */}
      <div className="relative my-2 flex-1 min-h-[140px] bg-[#EBE9E1] rounded border border-warm-border overflow-hidden flex items-center justify-center">
        {/* Abstract road network vectors */}
        <svg viewBox="0 0 300 140" className="w-full h-full stroke-warm-border fill-none" strokeWidth="2">
          {/* Main roads */}
          <line x1="20" y1="20" x2="280" y2="120" stroke="#DCD8CE" strokeWidth="4" />
          <line x1="20" y1="120" x2="280" y2="30" stroke="#DCD8CE" strokeWidth="3" />
          <path d="M 60 10 Q 150 70 260 80" stroke="#D5D0C3" strokeWidth="2" />
          
          {/* River / landmark curve */}
          <path d="M 10 70 Q 120 110 290 60" stroke="#CAD3D0" strokeWidth="5" />
          
          {/* Radius circle */}
          <circle cx="150" cy="70" r="45" stroke="#8C7965" strokeWidth="1" strokeDasharray="3 3" fill="#8C7965" fillOpacity="0.05" />
          
          {/* Current location pin */}
          <circle cx="150" cy="70" r="4" fill="#8C7965" />
        </svg>

        {/* Court Marker 1 */}
        <div className="absolute left-1/4 top-8 bg-warm-card px-2 py-1 rounded shadow-subtle border border-warm-border text-[10px] font-medium text-warm-text flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
          Futsal Garuda (Vinyl)
        </div>

        {/* Court Marker 2 - Active Popup */}
        <div className="absolute right-8 bottom-6 bg-white p-2 rounded shadow-elevated border border-warm-border text-[10px] z-10 max-w-[160px]">
          <div className="font-semibold text-warm-text">Stadium Futsal Riau</div>
          <div className="text-warm-muted text-[9px] mt-0.5">Rumput Sintetis &bull; Slot 19.00 Ready</div>
          <div className="mt-1 text-warm-accent font-medium text-[9px]">Rp 120.000 / Jam &rarr;</div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="pt-2 border-t border-warm-border flex items-center justify-between text-xs text-warm-muted">
        <span>14 Lapangan Terdata di Pekanbaru</span>
        <span className="text-warm-text font-medium">Filter Jadwal Realtime</span>
      </div>
    </div>
  </div>
);

export const ProjectVisual = ({ type }) => {
  switch (type) {
    case '3d-architecture':
      return <VRIstanaSiakVisual />;
    case 'android-ai':
      return <SijagatVisual />;
    case 'web-system':
      return <NusarekaVisual />;
    case 'uiux-figma':
      return <DzapinVisual />;
    case 'gis-map':
      return <FutsalGoVisual />;
    default:
      return <div className="w-full h-64 bg-warm-surface rounded border border-warm-border"></div>;
  }
};
