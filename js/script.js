/**
 * Website Portofolio Pribadi — Nasywa Rizka Winanda
 * Pure Vanilla JavaScript (Tanpa Framework)
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initSectionSpy();
  initProjectModalWithCarousel();
  initDocCarousels();
  initCertificateModal();
  initEmailCopy();
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
   3. Modal Pop-up Proyek dengan Carousel Otomatis Gambar Web
   ------------------------------------------------------------------------- */
const PROJECTS_DATA = {
  'siak': {
    number: '01',
    category: 'Pemodelan 3D / Virtual Reality',
    year: '2025',
    context: 'Proyek Akhir',
    title: 'Pembuatan Model 3D Detil Bangunan Istana Siak untuk Lingkungan Virtual Immersive',
    summary: 'Proyek pengembangan lingkungan virtual imersif yang menghadirkan model 3D bangunan bersejarah Istana Siak beserta elemen arsitektur interior dan eksterior aslinya secara mendetail.',
    role: '3D modeling seluruh bangunan yang ada di dalam komplek Istana Siak serta arsitektur bagian dalam Istana Siak dan memerhatikan kompatibilitas model untuk diimport ke Unity (mengatur polycount dan face agar tidak berlebihan sehingga performa game lancar dan bebas lag).',
    tech: ['3D Blender', 'Adobe Substance Painter', 'Unity'],
    downloadUrl: 'https://renand-studio.itch.io/siak-palace-tour',
    highlights: [
      'Pemodelan arsitektur 3D seluruh bangunan komplek istana dan detail interior dengan presisi proporsi tinggi.',
      'Teksturisasi material realistis menggunakan Adobe Substance Painter.',
      'Optimasi polycount mesh dan kompatibilitas aset 3D untuk integrasi lancar ke dalam Unity Engine.'
    ],
    slides: [
      {
        image: 'images/projects/siak/siak-exterior.jpg',
        title: 'Model 3D  Istana Siak',
        caption: 'Tampak luar bangunan Istana Siak dengan pilar kubah khas Melayu-Eropa.'
      },
      {
        image: 'images/projects/siak/siak-interior-1.jpg',
        title: 'Koridor Interior',
        caption: 'Pemodelan lorong istana dengan detail lantai marmer, jendela berpola, dan panel dinding bermotif tradisional.'
      },
      {
        image: 'images/projects/siak/siak-interior-2.jpg',
        title: 'Aula Utama',
        caption: 'Struktur ruang aula dengan ornamen dinding klasik.'
      },
      {
        image: 'images/projects/siak/siak-interior-3.jpg',
        title: 'Gerbang Penghubung Antar Ruangan',
        caption: 'Detail arsitektur lengkungan khas perpaduan Melayu dan Eropa.'
      }
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
    tech: ['Kotlin', 'Android Studio', 'CameraX', 'YOLOv8', 'TensorFlow Lite'],
    challenge: 'Kondisi asap dan api memiliki variasi bentuk dinamis serta pencahayaan kontras di lapangan terbuka.',
    solution: 'Model YOLOv8n dilatih dan dikuantisasi ke TensorFlow Lite INT8 (13.8 MB) dengan CameraX threading terpisah.',
    highlights: [
      'Object Detection menggunakan YOLOv8 dengan dataset citra api dan asap lokal.',
      'Konversi model PyTorch ke format TensorFlow Lite 8-bit terkuantisasi.',
      'Inferensi kamera real-time dan fitur pengujian berkas gambar/video.'
    ],
    slides: [
      {
        title: 'Tampilan Viewfinder Kamera Deteksi Real-Time',
        caption: 'Deteksi bounding box otomatis dengan tingkat kepercayaan api 94.6% dan latensi 18ms.'
      },
      {
        title: 'Antarmuka Pengujian Gambar & Video',
        caption: 'Pengguna dapat menguji file rekaman lokal dan melihat visualisasi bounding box.'
      },
      {
        title: 'Dashboard Riwayat Log Deteksi',
        caption: 'Pencatatan waktu kejadian, koordinat visual, dan tingkat keyakinan model.'
      }
    ]
  },
  'nusareka': {
    number: '03',
    category: 'Full-Stack Web Development',
    year: '2023 - 2024',
    context: 'PT. Nusareka Prima Engineering',
    title: 'Rancang Bangun Sistem Manajemen Internal PT. Nusareka Prima Engineering',
    summary: 'Sistem berbasis web yang dikembangkan untuk mengintegrasikan informasi dan proses administrasi internal dari berbagai divisi perusahaan ke dalam satu platform terpusat.',
    role: 'Full-Stack Web Developer (Magang)',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    challenge: 'Mengintegrasikan data HR, Safety K3, dan slip gaji yang sebelumnya tercecer di spreadsheet terpisah.',
    solution: 'Merancang basis data relasional MySQL terpusat dengan Role-Based Access Control (RBAC) di Laravel.',
    highlights: [
      'Fitur manajemen Human Resource: data karyawan, kontrak, dan slip gaji otomatis.',
      'Fitur manajemen Safety: logbook kepatuhan K3 dan pelaporan inspeksi lapangan.',
      'Pencatatan absensi digital dan penerbitan slip gaji PDF terenkripsi.'
    ],
    slides: [
      {
        title: 'Dashboard Utama Sistem Manajemen Internal',
        caption: 'Ikhtisar analitik kehadiran pegawai harian dan status kepatuhan keselamatan kerja K3.'
      },
      {
        title: 'Modul Manajemen Karyawan & Slip Gaji',
        caption: 'Pencatatan otomatis jam lembur, potongan pajak, dan penerbitan slip gaji digital PDF.'
      },
      {
        title: 'Modul Pengawasan Safety & Absensi',
        caption: 'Sistem logbook K3 dan pencatatan presensi digital karyawan proyek.'
      }
    ]
  },
  'dzapin': {
    number: '04',
    category: 'Desain UI/UX',
    year: '2023',
    context: 'Rekomendasi Desain — PT. Bank Riau Kepri Syariah',
    title: 'Perancangan UI/UX Aplikasi dan Website Dzapin Merchant (QRIS Merchant) PT. Bank Riau Kepri Syariah',
    summary: 'Proyek perancangan ulang antarmuka aplikasi mobile dan perancangan UI/UX website baru untuk layanan transaksi pedagang QRIS Merchant perbankan syariah.',
    role: 'UI/UX Designer (Magang)',
    tech: ['Figma', 'Design Systems', 'Interactive Prototyping', 'User Flow'],
    challenge: 'Menyederhanakan alur transaksi agar kasir dan pemilik usaha UMKM dapat memantau mutasi secara cepat.',
    solution: 'Menyusun alur 3 prioritas (QRIS Cepat, Omzet Hari Ini, Mutasi) dengan kartu visual kontras tinggi.',
    highlights: [
      'Redesign antarmuka mobile agar ramah bagi merchant UMKM pemula.',
      'Perancangan UI/UX website dashboard analitik pedagang.',
      'Penyusunan Design System terstandar berpedoman pada identitas bank syariah.'
    ],
    slides: [
      {
        title: 'Tampilan Utama Aplikasi Mobile Merchant',
        caption: 'Alur penerimaan QRIS cepat, ringkasan omzet harian, dan notifikasi suara transaksi.'
      },
      {
        title: 'Dashboard Web Portal Analitik Transaksi',
        caption: 'Grafik riwayat transaksi mingguan dan filter mutasi rekening toko.'
      },
      {
        title: 'Komponen Design System Terstandar',
        caption: 'Skala tipografi, palet warna perbankan, variasi tombol aksi, dan tabel data terstruktur.'
      }
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
    tech: ['PHP', 'JavaScript', 'Leaflet.js', 'OpenStreetMap', 'MySQL'],
    challenge: 'Menghubungkan data lokasi spasial lapangan futsal dengan sistem reservasi waktu realtime.',
    solution: 'Mengintegrasikan peta interaktif Leaflet.js dengan query radius jarak terdekat dan kalender sewa.',
    highlights: [
      'Pemetaan titik koordinat lapangan futsal di Pekanbaru ke dalam peta digital interaktif.',
      'Pencarian lokasi berbasis radius jarak terdekat dari pengguna.',
      'Detail fasilitas lapangan dan sistem pemesanan jadwal langsung.'
    ],
    slides: [
      {
        title: 'Tampilan Peta Spasial Interaktif Pekanbaru',
        caption: 'Penanda titik lokasi lapangan futsal dengan filter radius jarak dan jenis lantai.'
      },
      {
        title: 'Halaman Detail Fasilitas & Ulasan',
        caption: 'Informasi kelayakan rumput sintetis/vinyl, penerangan lampu, dan ketersediaan shower.'
      },
      {
        title: 'Alur Pemesanan Jadwal Realtime',
        caption: 'Pemilihan slot waktu sewa lapangan dan konfirmasi tanda jadi digital.'
      }
    ]
  }
};

let projectCarouselInterval = null;
let currentProjectSlideIndex = 0;

function initProjectModalWithCarousel() {
  const modal = document.getElementById('projectModal');
  const closeBtn = document.getElementById('closeProjectModal');
  const modalCloseFooter = document.getElementById('modalCloseFooter');
  const projectCards = document.querySelectorAll('[data-project-id]');

  const track = document.getElementById('projectCarouselTrack');
  const prevBtn = document.getElementById('projectCarouselPrev');
  const nextBtn = document.getElementById('projectCarouselNext');
  const indicatorsContainer = document.getElementById('projectCarouselIndicators');

  if (!modal) return;

  function renderCarousel(slides) {
    clearInterval(projectCarouselInterval);
    currentProjectSlideIndex = 0;

    track.innerHTML = '';
    indicatorsContainer.innerHTML = '';

    slides.forEach((slide, idx) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'carousel-slide';
      slideDiv.style.padding = '0';

      if (slide.image) {
        slideDiv.innerHTML = `
          <div style="background-color: var(--bg-card); border-radius: 0.55rem; overflow: hidden; border: 1px solid var(--border-color); display: flex; flex-direction: column; box-shadow: var(--shadow-subtle);">
            <div style="position: relative; width: 100%; height: 220px; overflow: hidden; background-color: #1c1b18;">
              <img src="${slide.image}" alt="${slide.title}" style="width: 100%; height: 100%; object-fit: cover; display: block;">
            </div>
            <div style="padding: 0.65rem 0.95rem; background-color: var(--bg-secondary); border-top: 1px solid var(--border-color);">
              <div style="font-family: var(--font-serif); font-size: 0.88rem; font-weight: 600; color: var(--text-main); margin-bottom: 0.2rem;">
                ${slide.title}
              </div>
              <div style="font-size: 0.74rem; color: var(--text-secondary); line-height: 1.5; text-align: justify; text-justify: inter-word;">
                ${slide.caption}
              </div>
            </div>
          </div>
        `;
      } else {
        slideDiv.innerHTML = `
          <div style="background-color: #252422; border-radius: 0.5rem; padding: 1.25rem; color: #FAF8F5; min-height: 10rem; display: flex; flex-direction: column; justify-content: space-between; font-family: monospace; border: 1px solid #3D3A33;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #3D3A33; padding-bottom: 0.35rem; font-size: 0.68rem; color: #A8A49A;">
              <span style="display: flex; align-items: center; gap: 0.35rem;">
                <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background-color: #8C7965;"></span>
                WEB_PREVIEW_INTERFACE
              </span>
              <span>100% RESPONSIVE</span>
            </div>
            <div style="text-align: center; margin: auto 0; padding: 0.75rem 0;">
              <div style="font-family: var(--font-serif); font-size: 1.05rem; color: #E7E4DC; margin-bottom: 0.25rem;">
                ${slide.title}
              </div>
              <div style="font-size: 0.74rem; color: #A8A49A; max-width: 24rem; margin: 0 auto; line-height: 1.5; text-align: justify; text-justify: inter-word;">
                ${slide.caption}
              </div>
            </div>
            <div style="display: flex; justify-content: space-between; border-top: 1px solid #3D3A33; padding-top: 0.35rem; font-size: 0.68rem; color: #8E8B83;">
              <span>MODUL DIGITAL</span>
              <span style="color: #8C7965;">DOKUMEN RESMI</span>
            </div>
          </div>
        `;
      }
      track.appendChild(slideDiv);

      const dot = document.createElement('div');
      dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
      dot.addEventListener('click', () => goToSlide(idx));
      indicatorsContainer.appendChild(dot);
    });

    goToSlide(0);
    startCarouselAutoPlay(slides.length);
  }

  function goToSlide(index) {
    currentProjectSlideIndex = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    const dots = indicatorsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, idx) => {
      if (idx === index) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  function nextSlide(total) {
    const nextIdx = (currentProjectSlideIndex + 1) % total;
    goToSlide(nextIdx);
  }

  function prevSlide(total) {
    const prevIdx = (currentProjectSlideIndex - 1 + total) % total;
    goToSlide(prevIdx);
  }

  function startCarouselAutoPlay(total) {
    clearInterval(projectCarouselInterval);
    projectCarouselInterval = setInterval(() => {
      nextSlide(total);
    }, 3500);
  }

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

    const downloadContainer = document.getElementById('modalDownloadContainer');
    const downloadLink = document.getElementById('modalDownloadLink');
    if (data.downloadUrl) {
      if (downloadLink) downloadLink.href = data.downloadUrl;
      if (downloadContainer) downloadContainer.style.display = 'block';
    } else {
      if (downloadContainer) downloadContainer.style.display = 'none';
    }

    const challengeEl = document.getElementById('modalProjectChallenge');
    if (challengeEl) challengeEl.textContent = data.challenge || '';
    const solutionEl = document.getElementById('modalProjectSolution');
    if (solutionEl) solutionEl.textContent = data.solution || '';

    const techContainer = document.getElementById('modalProjectTech');
    techContainer.innerHTML = '';
    data.tech.forEach(t => {
      const span = document.createElement('span');
      span.className = 'skill-pill';
      span.textContent = t;
      techContainer.appendChild(span);
    });

    const highlightsContainer = document.getElementById('modalProjectHighlights');
    highlightsContainer.innerHTML = '';
    data.highlights.forEach(h => {
      const li = document.createElement('li');
      li.style.lineHeight = '1.6';
      li.style.marginBottom = '0.35rem';
      li.style.textAlign = 'justify';
      li.textContent = h;
      highlightsContainer.appendChild(li);
    });

    renderCarousel(data.slides);

    prevBtn.onclick = () => {
      prevSlide(data.slides.length);
      startCarouselAutoPlay(data.slides.length);
    };
    nextBtn.onclick = () => {
      nextSlide(data.slides.length);
      startCarouselAutoPlay(data.slides.length);
    };

    const carouselBox = document.getElementById('projectCarouselBox');
    carouselBox.onmouseenter = () => clearInterval(projectCarouselInterval);
    carouselBox.onmouseleave = () => startCarouselAutoPlay(data.slides.length);

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    clearInterval(projectCarouselInterval);
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.preventDefault();
      const id = card.getAttribute('data-project-id');
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
   4. Carousel Otomatis di Bagian Foto Dokumentasi PKM (Per Card)
   ------------------------------------------------------------------------- */
function initDocCarousels() {
  const docCarousels = document.querySelectorAll('.doc-carousel-box');

  docCarousels.forEach((box) => {
    const track = box.querySelector('.doc-carousel-track');
    const slides = box.querySelectorAll('.doc-slide');
    const dotsContainer = box.querySelector('.carousel-indicators');
    const prevBtn = box.querySelector('.carousel-btn-prev');
    const nextBtn = box.querySelector('.carousel-btn-next');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    const total = slides.length;
    let timer = null;

    // Build dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.addEventListener('click', () => {
          goTo(idx);
          restartTimer();
        });
        dotsContainer.appendChild(dot);
      });
    }

    function goTo(idx) {
      currentIndex = idx;
      track.style.transform = `translateX(-${idx * 100}%)`;

      if (dotsContainer) {
        const dots = dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach((d, i) => {
          if (i === idx) d.classList.add('active');
          else d.classList.remove('active');
        });
      }
    }

    function next() {
      const n = (currentIndex + 1) % total;
      goTo(n);
    }

    function prev() {
      const p = (currentIndex - 1 + total) % total;
      goTo(p);
    }

    function startTimer() {
      clearInterval(timer);
      timer = setInterval(next, 3800);
    }

    function restartTimer() {
      clearInterval(timer);
      startTimer();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        next();
        restartTimer();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        prev();
        restartTimer();
      });
    }

    box.addEventListener('mouseenter', () => clearInterval(timer));
    box.addEventListener('mouseleave', () => startTimer());

    startTimer();
  });
}

/* -------------------------------------------------------------------------
   5. Modal Lightbox Zoom Sertifikat
   ------------------------------------------------------------------------- */
function initCertificateModal() {
  const certModal = document.getElementById('certModal');
  const closeCertBtn = document.getElementById('closeCertModal');
  const finishCertBtn = document.getElementById('finishCertModal');
  const certCards = document.querySelectorAll('.cert-card');

  if (!certModal) return;

  function openCert(card) {
    const name = card.getAttribute('data-cert-name');
    const issuer = card.getAttribute('data-cert-issuer');
    const year = card.getAttribute('data-cert-year');
    const credId = card.getAttribute('data-cert-id');
    const desc = card.getAttribute('data-cert-desc');

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
}

/* -------------------------------------------------------------------------
   6. Salin Alamat Email
   ------------------------------------------------------------------------- */
function initEmailCopy() {
  const copyBtn = document.getElementById('copyEmailBtn');
  const emailText = document.getElementById('emailAddressText');

  if (!copyBtn || !emailText) return;

  copyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = emailText.textContent.trim();
    navigator.clipboard.writeText(email).then(() => {
      const originalHTML = copyBtn.innerHTML;
      copyBtn.innerHTML = '<span>Email Tersalin! &#10003;</span>';
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
