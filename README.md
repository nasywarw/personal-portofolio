# Website Portofolio Pribadi — Konsep Warm Editorial

Website portofolio profesional dengan estetika **Warm Editorial**, dirancang dengan fokus pada tipografi yang elegan, whitespace yang seimbang, narasi personal yang autentik, serta performa teknis yang andal.

---

## 🎨 Identitas Visual (Warm Editorial)

- **Latar Belakang Utama:** `#F7F6F2`
- **Teks Utama:** `#252522`
- **Teks Sekunder:** `#85847D`
- **Aksen Utama:** `#8C7965`
- **Latar Sekunder:** `#EFEEE8`
- **Garis & Border:** `#E3E0D8`
- **Tipografi:** Kombinasi **Lora** (Serif editorial untuk judul & aksen) dan **Plus Jakarta Sans** (Sans-serif modern untuk keterbacaan teks dan UI).

---

## 📂 Struktur Section (Sesuai Urutan Wajib)

1. **01 / Profil (Hero):** Perkenalan singkat profesional, foto profil bergaya editorial, dan 3 tombol navigasi (`Lihat Portofolio`, `Tentang Saya`, `Hubungi Saya`).
2. **02 / Tentang Saya:** Narasi perjalanan di bidang rekayasa teknologi dan katalog 7 bidang keahlian (Web, UI/UX, Android, 3D Modeling, Virtual Reality, GIS, Deep Learning).
3. **03 / Portofolio:** Tepat 5 proyek spesifik dengan variasi layout visual yang dinamis serta modal detail interaktif:
   - *VR Istana Siak* (Pemodelan 3D / Virtual Reality)
   - *SIJAGAT: Aplikasi Deteksi Api dan Asap* (Pengembangan Android / Deep Learning)
   - *Sistem Manajemen Internal PT. Nusareka Prima Engineering* (Full-Stack Web Development)
   - *Dzapin Merchant (QRIS Merchant) PT. Bank Riau Kepri Syariah* (Desain UI/UX & Rekomendasi Desain)
   - *FUTSAL-GO* (GIS / Pengembangan Web Pekanbaru)
4. **04 / Pengabdian kepada Masyarakat:** Tiga slot dokumentasi kegiatan sosial & transfer pengetahuan berbasis komunitas.
5. **05 / Sertifikat dan Pelatihan:** Galeri sertifikat fleksibel dengan fitur perbesar/lightbox (*Certificate Lightbox Modal*).
6. **06 / Kontak:** Ajakan berkolaborasi, fitur salin email 1-klik, link LinkedIn & GitHub, formulir pesan interaktif, dan footer hak cipta.

---

## 🛠️ Menjalankan Proyek Secara Lokal

Pastikan Node.js (v18+) telah terpasang di komputer Anda.

```bash
# 1. Jalankan development server
npm run dev

# 2. Build untuk produksi
npm run build

# 3. Preview hasil build produksi
npm run preview
```

---

## ✏️ Cara Mengubah Konten & Data Pribadi

Seluruh teks, riwayat, tautan sosial, kredensial, dan daftar proyek tersimpan rapi dan modular di berkas:

📁 `src/data/portfolioData.js`

Anda dapat dengan mudah memperbarui nama, bio, tautan LinkedIn, GitHub, email, maupun foto dokumentasi langsung dari berkas tersebut tanpa perlu mengubah struktur kode komponen.
