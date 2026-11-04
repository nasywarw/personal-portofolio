/**
 * Website Portofolio Pribadi — Konsep Warm Editorial
 * Pure Vanilla JavaScript (Tanpa Framework)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSectionSpy();
  initProjectModal();
  initCertificateModal();
  initEmailCopy();
  initContactForm();
});

/* -------------------------------------------------------------------------
   1. Navigasi & Mobile Menu
   ------------------------------------------------------------------------- */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  // Sticky header background
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Toggle mobile menu
  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
      const isExpanded = mobileNav.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Smooth scroll & close mobile menu on click
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          if (mobileNav && mobileNav.classList.contains('open')) {
            mobileNav.classList.remove('open');
          }
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = target.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

/* -------------------------------------------------------------------------
   2. Scroll Spy (Indikator Menu Aktif)
   ------------------------------------------------------------------------- */
function initSectionSpy() {
  const sections = document.querySelectorAll('section[id], footer[id]');
  const desktopLinks = document.querySelectorAll('.nav-links .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .mobile-nav-link');

  function updateActiveLink() {
    let currentId = '';
    const scrollPos = window.scrollY + 180;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    if (!currentId && sections.length > 0) {
      currentId = sections[0].getAttribute('id');
    }

    desktopLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();
}

/* -------------------------------------------------------------------------
   3. Modal Pratinjau Detail Proyek (5 Proyek)
   ------------------------------------------------------------------------- */
const PROJECTS_DATA = {
  'siak': {
    number: '01',
    category: 'Pemodelan 3D / Virtual Reality',
    year: '2024',
    context: 'Proyek Rekayasa Spasial & Pelestarian Warisan Budaya',
    title: 'Pembuatan Model 3D Detil Bangunan Istana Siak untuk Lingkungan Virtual Immersive',
    summary: 'Proyek pengembangan lingkungan virtual imersif yang menghadirkan model 3D bangunan bersejarah Istana Siak beserta elemen arsitektur khas Melayu dan interior aslinya secara mendetail.',
    role: '3D Environmental Artist & VR Integrator',
    tech: ['Blender', 'Adobe Substance 3D Painter', 'Unity', 'Meta Quest', 'C#', 'PBR Workflow'],
    challenge: 'Bangunan Istana Siak memiliki ornamen arsitektur Melayu-Eropa yang rumit pada pilar, kubah, dan ukiran interior. Menjaga fidelitas ornamen tanpa membebani performa perangkat headset Meta Quest mandiri menjadi tantangan kritis.',
    solution: 'Menerapkan teknik high-to-low poly baking di Blender, teksturisasi PBR 2K di Substance 3D Painter, serta optimasi baked lighting dan light probes di Unity agar framerate stabil di 72 FPS.',
    highlights: [
      'Pemodelan arsitektur 3D eksterior dan interior dengan ketepatan proporsi tinggi.',
      'Teksturisasi Physically Based Rendering (PBR) menggunakan Adobe Substance 3D Painter.',
      'Integrasi interaktif ke dalam Unity Engine dan pengujian langsung pada Meta Quest.',
      'Fitur navigasi teleportasi dan eksplorasi artefak sejarah secara interaktif.'
    ],
    deliverables: [
      'Model 3D arsitektur utuh Istana Siak (Lantai 1, Lantai 2, Tangga Khas, Fasad Depan).',
      'Set peta tekstur resolusi tinggi (Albedo, Normal, Roughness, Metallic, AO).',
      'Build aplikasi simulasi Virtual Reality fungsional untuk Meta Quest.'
    ]
  },
  'sijagat': {
    number: '02',
    category: 'Pengembangan Android / Deep Learning',
    year: '2024',
    context: 'Inovasi Mitigasi Kebakaran Hutan & Lahan',
    title: 'SIJAGAT: Aplikasi Deteksi Api dan Asap Berbasis Mobile Menggunakan Deep Learning',
    summary: 'Aplikasi Android yang dirancang untuk mendeteksi keberadaan api dan asap secara real-time langsung melalui feed kamera ponsel menggunakan model computer vision YOLOv8 yang telah dioptimasi.',
    role: 'Android Developer & Deep Learning Engineer',
    tech: ['Kotlin', 'Android Studio', 'CameraX', 'YOLOv8', 'PyTorch', 'TensorFlow Lite'],
    challenge: 'Kondisi asap dan api memiliki variasi bentuk dinamis serta pencahayaan kontras di lapangan terbuka. Model harus berjalan mulus pada ponsel Android dengan konsumsi baterai dan latensi inferensi serendah mungkin.',
    solution: 'Dataset dikurasi dengan augmentasi kondisi pencahayaan dan intensitas asap berbeda. Model YOLOv8n (nano) dikonversi dan dikuantisasi ke TensorFlow Lite INT8 (13.8 MB). Pipeline CameraX diproses pada thread pool terpisah dari thread UI.',
    highlights: [
      'Object Detection menggunakan YOLOv8 dengan dataset citra api dan asap lokal.',
      'Konversi model PyTorch ke format TensorFlow Lite 8-bit terkuantisasi.',
      'Pengembangan aplikasi native Android menggunakan Kotlin dan CameraX API.',
      'Deteksi inferensi secara real-time via kamera serta dukungan input foto galeri dan berkas video.'
    ],
    deliverables: [
      'Model YOLOv8 teroptimasi berukuran di bawah 15 MB dengan akurasi mAP tinggi.',
      'Aplikasi native Android (.apk) fungsional dengan antarmuka viewfinder deteksi.',
      'Modul riwayat tangkapan deteksi dilengkapi koordinat waktu dan label tingkat kepercayaan.'
    ]
  },
  'nusareka': {
    number: '03',
    category: 'Full-Stack Web Development',
    year: '2023 - 2024',
    context: 'PT. Nusareka Prima Engineering',
    title: 'Rancang Bangun Sistem Manajemen Internal PT. Nusareka Prima Engineering',
    summary: 'Sistem berbasis web yang dikembangkan untuk mengintegrasikan informasi dan proses administrasi internal dari berbagai divisi perusahaan ke dalam satu platform terpusat.',
    role: 'Full-Stack Web Developer',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript', 'Blade Engine'],
    challenge: 'Sebelumnya divisi HR, Safety K3, dan Operasional menggunakan spreadsheet terpisah yang rawan duplikasi data, memperlambat verifikasi slip gaji, dan menyulitkan pelacakan audit keselamatan kerja di lapangan.',
    solution: 'Membangun arsitektur basis data relasional terpusat di MySQL dengan relasi referensial ketat, menerapkan Role-Based Access Control (RBAC) di Laravel, dan mengotomasi kalkulasi jam lembur serta penerbitan slip gaji digital berenkripsi.',
    highlights: [
      'Pengelolaan informasi internal dan operasional perusahaan secara terintegrasi.',
      'Fitur manajemen Human Resource: data karyawan, kontrak, dan generate slip gaji otomatis.',
      'Fitur manajemen Safety: logbook kepatuhan K3 dan pelaporan inspeksi lapangan.',
      'Autentikasi aman dengan kontrol hak akses berbasis peran berjenjang.',
      'Pencatatan absensi digital dan pelaporan administrasi terpusat.'
    ],
    deliverables: [
      'Aplikasi web internal perusahaan fungsional siap pakai.',
      'Modul penerbitan dan unduh slip gaji format PDF berenkripsi.',
      'Dashboard analitik kehadiran karyawan dan status audit kepatuhan K3.'
    ]
  },
  'dzapin': {
    number: '04',
    category: 'Desain UI/UX',
    year: '2023',
    context: 'Rekomendasi Desain Produk — PT. Bank Riau Kepri Syariah',
    title: 'Perancangan UI/UX Aplikasi dan Website Dzapin Merchant (QRIS Merchant) PT. Bank Riau Kepri Syariah',
    summary: 'Proyek perancangan ulang antarmuka aplikasi mobile dan perancangan UI/UX website baru untuk layanan transaksi pedagang QRIS Merchant.',
    role: 'UI/UX Designer (Design Proposal & Prototyping)',
    tech: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Flow', 'Heuristic Evaluation'],
    challenge: 'Aplikasi merchant versi awal memiliki hierarki informasi yang padat, navigasi laporan mutasi yang bertingkat banyak, dan kurang memberikan kejelasan status audio/visual saat kasir menerima pembayaran di jam sibuk toko.',
    solution: 'Menyederhanakan alur navigasi menjadi 3 prioritas: Penerimaan QRIS Cepat, Ringkasan Penjualan Hari Ini, dan Mutasi Transaksi. Membangun Design System terstandar dan kartu transaksi kontras tinggi.',
    highlights: [
      'Redesign antarmuka aplikasi mobile agar ramah bagi merchant UMKM pemula.',
      'Perancangan UI/UX website dashboard baru untuk pemantauan merchant volume tinggi.',
      'Visualisasi monitoring transaksi, laporan keuangan, dan riwayat mutasi yang mudah dipahami.',
      'Penyusunan komponen Design System yang konsisten berpedoman pada identitas bank syariah.'
    ],
    deliverables: [
      'File Figma komprehensif mencakup 35+ artboard mobile dan 12+ halaman dashboard web.',
      'Komponen Design System (Skala tipografi, token warna, tombol, tabel data).',
      'Prototipe interaktif clickable untuk pengujian alur penerimaan transaksi QRIS.'
    ]
  },
  'futsalgo': {
    number: '05',
    category: 'GIS / Pengembangan Web',
    year: '2023',
    context: 'Aplikasi Layanan Olahraga Pekanbaru',
    title: 'FUTSAL-GO: Platform Pencarian dan Pemesanan Lapangan Futsal Berbasis GIS',
    summary: 'Aplikasi berbasis web dengan Geographic Information System (GIS) yang membantu pengguna menemukan lokasi lapangan futsal di sekitar Pekanbaru berdasarkan radius dan ketersediaan jadwal.',
    role: 'Full-Stack Web & GIS Developer',
    tech: ['PHP', 'JavaScript', 'Leaflet.js', 'OpenStreetMap', 'MySQL', 'CSS3'],
    challenge: 'Komunitas futsal di Pekanbaru kerap kesulitan mencari lapangan kosong pada akhir pekan karena harus menelepon pengelola satu per satu tanpa mengetahui lokasi pasti dan kelayakan fasilitas lapangan.',
    solution: 'Mengintegrasikan peta interaktif Leaflet.js dengan query spasial radius terdekat, menampilkan pin kustom dengan detail fasilitas, dan menyediakan kalender reservasi waktu langsung.',
    highlights: [
      'Geographic Information System dengan pemetaan titik lapangan futsal di Pekanbaru.',
      'Fitur pencarian lokasi berbasis radius jarak terdekat dari pengguna.',
      'Katalog informasi detail fasilitas (lantai rumput/vinyl, penerangan, shower, parkir).',
      'Fitur alur pemesanan jadwal lapangan interaktif.'
    ],
    deliverables: [
      'Aplikasi web GIS dengan integrasi peta responsif kota Pekanbaru.',
      'Basis data spasial titik koordinat dan katalog fasilitas lapangan.',
      'Modul reservasi slot waktu dan konfirmasi pemesanan pengguna.'
    ]
  }
};

function initProjectModal() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeProjectModal');
  const modalCloseFooter = document.getElementById('modalCloseFooter');
  const detailButtons = document.querySelectorAll('[data-project-id]');

  if (!modal) return;

  function openProject(projectId) {
    const data = PROJECTS_DATA[projectId];
    if (!data) return;

    document.getElementById('modalProjectNumber').textContent = `PROYEK ${data.number}`;
    document.getElementById('modalProjectCategory').textContent = data.category;
    document.getElementById('modalProjectYear').textContent = data.year;
    document.getElementById('modalProjectContext').textContent = data.context;
    document.getElementById('modalProjectTitle').textContent = data.title;
    document.getElementById('modalProjectSummary').textContent = data.summary;
    document.getElementById('modalProjectRole').textContent = data.role;
    document.getElementById('modalProjectChallenge').textContent = data.challenge;
    document.getElementById('modalProjectSolution').textContent = data.solution;

    // Tech pills
    const techContainer = document.getElementById('modalProjectTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'skill-pill';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    // Highlights
    const highlightsContainer = document.getElementById('modalProjectHighlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.style.lineHeight = '1.6';
      li.style.marginBottom = '0.35rem';
      li.textContent = h;
      highlightsContainer.appendChild(li);
    });

    // Deliverables
    const deliverablesContainer = document.getElementById('modalProjectDeliverables');
    deliverablesContainer.innerHTML = '';
    data.deliverables.forEach(d => {
      const li = document.createElement('li');
      li.style.lineHeight = '1.6';
      li.style.marginBottom = '0.35rem';
      li.textContent = d;
      deliverablesContainer.appendChild(li);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  detailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project-id');
      openProject(id);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (modalCloseFooter) modalCloseFooter.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

/* -------------------------------------------------------------------------
   4. Modal Lightbox Zoom Sertifikat
   ------------------------------------------------------------------------- */
function initCertificateModal() {
  const certModal = document.getElementById('certModal');
  const closeCertBtn = document.getElementById('closeCertModal');
  const finishCertBtn = document.getElementById('finishCertModal');
  const certCards = document.querySelectorAll('.cert-card');
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (!certModal) return;

  function openCert(card) {
    const name = card.getAttribute('data-cert-name');
    const issuer = card.getAttribute('data-cert-issuer');
    const year = card.getAttribute('data-cert-year');
    const category = card.getAttribute('data-cert-category');
    const credId = card.getAttribute('data-cert-id');
    const desc = card.getAttribute('data-cert-desc');

    document.getElementById('certModalCategory').textContent = category;
    document.getElementById('certModalYear').textContent = year;
    document.getElementById('certModalIssuer').textContent = issuer;
    document.getElementById('certModalName').textContent = name;
    document.getElementById('certModalDesc').textContent = desc;
    document.getElementById('certModalId').textContent = `ID Kredensial: ${credId}`;
    document.getElementById('certModalYearFooter').textContent = `Tahun Penerbitan: ${year}`;

    certModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCert() {
    certModal.classList.remove('open');
    document.body.style.overflow = '';
  }

  certCards.forEach(card => {
    card.addEventListener('click', () => openCert(card));
  });

  if (closeCertBtn) closeCertBtn.addEventListener('click', closeCert);
  if (finishCertBtn) finishCertBtn.addEventListener('click', closeCert);

  certModal.addEventListener('click', (e) => {
    if (e.target === certModal) closeCert();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certModal.classList.contains('open')) {
      closeCert();
    }
  });

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      certCards.forEach(card => {
        const cat = card.getAttribute('data-cert-category');
        if (filterVal === 'all' || cat === filterVal) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* -------------------------------------------------------------------------
   5. Salin Alamat Email
   ------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailAddressText');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', () => {
    const email = emailText.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span>Tersalin! &#10003;</span>';
      copyBtn.style.color = '#10b981';

      setTimeout(() => {
        copyBtn.innerHTML = originalHTML;
        copyBtn.style.color = '';
      }, 2500);
    }).catch(err => {
      console.error('Gagal menyalin:', err);
    });
  });
}

/* -------------------------------------------------------------------------
   6. Formulir Kontak Interaktif
   ------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const successBox = document.getElementById('contactSuccess');
  const resetBtn = document.getElementById('resetContactForm');

  if (!form || !successBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.style.display = 'none';
    successBox.style.display = 'block';
  });

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      successBox.style.display = 'none';
    });
  }
}
