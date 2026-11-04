// Data konfigurasi portofolio profesional
// Seluruh teks ditulis dalam bahasa Indonesia yang natural, profesional, dan komunikatif.

export const profileData = {
  name: "M. Raihan Pratama",
  title: "Software Engineer & Desainer Produk Digital",
  shortBio: "Berfokus pada pengembangan sistem web, aplikasi mobile, dan perancangan antarmuka digital yang fungsional, terukur, serta nyaman digunakan.",
  availability: "Terbuka untuk kesempatan kolaborasi dan proyek baru",
  location: "Pekanbaru, Riau, Indonesia",
  actions: [
    { label: "Lihat Portofolio", href: "#portofolio", variant: "primary" },
    { label: "Tentang Saya", href: "#tentang-saya", variant: "secondary" },
    { label: "Hubungi Saya", href: "#kontak", variant: "outline" },
  ],
  stats: [
    { label: "Tahun Eksplorasi & Praktik", value: "3+" },
    { label: "Proyek Utama Selesai", value: "5" },
    { label: "Fokus Teknologi", value: "Full-Stack, AI & 3D" },
  ]
};

export const aboutData = {
  lead: "Membangun teknologi yang bukan hanya bekerja secara teknis, tetapi juga memberi nilai nyata bagi penggunanya.",
  story: [
    "Perjalanan saya di dunia teknologi berawal dari ketertarikan mendalam terhadap bagaimana kode dan desain visual dapat berpadu menyelesaikan masalah nyata. Selama masa studi dan berbagai proyek kolaboratif, saya tidak membatasi diri pada satu ranah saja, melainkan aktif mengeksplorasi spektrum rekayasa perangkat lunak mulai dari arsitektur backend, antarmuka pengguna, hingga pengolahan model kecerdasan buatan.",
    "Bagi saya, perangkat lunak yang baik lahir dari pemahaman menyeluruh terhadap kebutuhan pengguna dan ketelitian implementasi teknis. Ketika merancang sistem internal perusahaan, aplikasi mobile berbasis deep learning, maupun model virtual reality, saya selalu memprioritaskan performa yang andal, struktur kode yang bersih, serta pengalaman interaksi yang manusiawi.",
    "Saat ini, saya terus mengasah keahlian dalam perancangan sistem terdistribusi, optimasi model machine learning pada perangkat edge, serta eksplorasi antarmuka spasial yang imersif."
  ],
  areas: [
    {
      title: "Pengembangan Web",
      tag: "Full-Stack Development",
      description: "Membangun sistem web yang terstruktur, aman, dan responsif. Berpengalaman menangani logika bisnis kompleks, manajemen basis data relasional, hingga antarmuka dinamis modern.",
      skills: ["Laravel", "React", "PHP", "MySQL", "Tailwind CSS", "RESTful API"]
    },
    {
      title: "Desain UI/UX",
      tag: "Product & Interface Design",
      description: "Merancang tata letak dan alur interaksi produk digital yang intuitif melalui riset kebutuhan pengguna, wireframing, pembuatan sistem desain terstandar, dan prototyping interaktif.",
      skills: ["Figma", "Design Systems", "Wireframing", "User Flow", "Usability Heuristics"]
    },
    {
      title: "Pengembangan Aplikasi Android",
      tag: "Mobile Engineering",
      description: "Mengembangkan aplikasi mobile native dengan arsitektur modern yang responsif, efisien dalam penggunaan memori, dan mampu berinteraksi langsung dengan sensor perangkat.",
      skills: ["Kotlin", "Android Studio", "CameraX", "Coroutines", "Jetpack Components"]
    },
    {
      title: "Pemodelan 3D",
      tag: "Spatial & Asset Modeling",
      description: "Menciptakan model tiga dimensi arsitektural dengan tingkat akurasi tinggi, topologi yang rapi, serta pembuatan material tekstur fotorealistik yang dioptimalkan untuk performa realtime.",
      skills: ["Blender", "Adobe Substance 3D Painter", "UV Mapping", "PBR Texturing", "Hard-Surface"]
    },
    {
      title: "Virtual Reality",
      tag: "Immersive Experiences",
      description: "Mengintegrasikan aset 3D ke dalam engine interaktif untuk menghadirkan simulasi lingkungan virtual yang imersif, responsif terhadap pergerakan pengguna, dan stabil pada headset VR.",
      skills: ["Unity", "Meta Quest SDK", "VR Rigging", "Spatial Audio", "C# Scripting"]
    },
    {
      title: "Geographic Information System (GIS)",
      tag: "Spatial Analysis & Mapping",
      description: "Mengolah, menganalisis, dan memvisualisasikan data spasial geografis ke dalam antarmuka peta interaktif berbasis web untuk memudahkan pencarian lokasi dan analisis jarak.",
      skills: ["Leaflet.js", "OpenStreetMap", "GeoJSON", "Spatial Queries", "Location Search"]
    },
    {
      title: "Deep Learning dan Machine Learning",
      tag: "Artificial Intelligence",
      description: "Melatih model computer vision untuk deteksi objek spesifik serta melakukan optimasi dan kuantisasi model agar dapat dijalankan secara efisien pada perangkat mobile bersumber daya terbatas.",
      skills: ["YOLOv8", "PyTorch", "TensorFlow Lite", "Computer Vision", "Model Quantization"]
    }
  ]
};

export const projectsData = [
  {
    id: "vr-istana-siak",
    number: "01",
    title: "Pembuatan Model 3D Detil Bangunan Istana Siak untuk Lingkungan Virtual Immersive",
    shortTitle: "VR Istana Siak",
    category: "Pemodelan 3D / Virtual Reality",
    year: "2024",
    clientOrContext: "Proyek Rekayasa Spasial & Pelestarian Warisan Budaya",
    summary: "Proyek pengembangan lingkungan virtual imersif yang menghadirkan model 3D bangunan bersejarah Istana Siak beserta elemen arsitektur khas Melayu dan interior aslinya secara mendetail.",
    highlights: [
      "Pemodelan arsitektur 3D eksterior dan interior dengan presisi proporsi tinggi.",
      "Teksturisasi Physically Based Rendering (PBR) menggunakan Adobe Substance 3D Painter.",
      "Optimasi topologi poligon untuk mempertahankan ketajaman visual pada framerate VR yang stabil.",
      "Integrasi interaktif ke dalam Unity Engine dan pengujian langsung pada Meta Quest.",
      "Fitur eksplorasi mandiri dengan sistem navigasi teleportasi dan interaksi objek bersejarah."
    ],
    role: "3D Environmental Artist & VR Integrator",
    techStack: ["Blender", "Adobe Substance 3D Painter", "Unity", "Meta Quest", "C#", "PBR Workflow"],
    details: {
      challenge: "Bangunan Istana Siak memiliki ornamen arsitektur Melayu-Eropa yang rumit pada pilar, kubah, dan ukiran interior. Tantangan utama terletak pada menjaga fidelitas detail ornamen bersejarah tanpa membuat beban poligon menjadi terlalu berat untuk headset Meta Quest mandiri.",
      solution: "Pendekatan yang diterapkan adalah teknik high-to-low poly baking: memodelkan ornamen secara mendetail di Blender untuk menghasilkan normal map dan ambient occlusion di Substance 3D Painter, kemudian diterapkan pada mesh berbobot ringan di Unity dengan lighting baked teroptimasi.",
      deliverables: [
        "Model 3D arsitektur utuh Istana Siak (Lantai 1, Lantai 2, Tangga Khas, dan Fasad Depan).",
        "Set tekstur PBR resolusi tinggi (Albedo, Normal, Roughness, Metallic).",
        "Build aplikasi simulasi Virtual Reality untuk perangkat Meta Quest.",
        "Dokumentasi alur kerja aset 3D dan pedoman integrasi engine."
      ]
    },
    themeColor: "#8C7965",
    previewType: "3d-architecture",
  },
  {
    id: "sijagat-api-asap",
    number: "02",
    title: "SIJAGAT: Aplikasi Deteksi Api dan Asap Berbasis Mobile Menggunakan Deep Learning",
    shortTitle: "SIJAGAT: Deteksi Api & Asap",
    category: "Pengembangan Android / Deep Learning",
    year: "2024",
    clientOrContext: "Inovasi Mitigasi Kebakaran Hutan & Lahan",
    summary: "Aplikasi Android yang dirancang untuk mendeteksi kemunculan api dan asap secara dini menggunakan model computer vision YOLOv8 yang dioptimalkan untuk inferensi langsung di perangkat mobile.",
    highlights: [
      "Pelatihan model Object Detection YOLOv8 dengan dataset citra api dan asap lokal.",
      "Konversi dan kuantisasi model dari PyTorch (.pt) ke TensorFlow Lite (.tflite) 8-bit.",
      "Pengembangan aplikasi native Android menggunakan bahasa Kotlin dan CameraX API.",
      "Inferensi computer vision secara real-time langsung melalui feed kamera ponsel tanpa koneksi server.",
      "Fitur uji deteksi fleksibel melalui input galeri foto dan berkas video rekaman."
    ],
    role: "Android Developer & Deep Learning Engineer",
    techStack: ["Kotlin", "Android Studio", "CameraX", "YOLOv8", "PyTorch", "TensorFlow Lite"],
    details: {
      challenge: "Kondisi kabut asap dan api sering kali memiliki variasi bentuk yang tidak beraturan serta kontras cahaya yang ekstrem di lapangan terbuka. Selain itu, model harus mampu berjalan mulus pada ponsel Android dengan konsumsi baterai dan latensi inferensi yang rendah.",
      solution: "Dataset dikurasi dengan augmentasi kondisi pencahayaan dan intensitas asap berbeda. Model YOLOv8n (nano) dilatih dan kemudian dikonversi ke format TFLite FP16/INT8. Pipeline CameraX di Android dioptimalkan menggunakan Thread Pool tersendiri untuk memisahkan rendering UI dari pemrosesan frame deteksi.",
      deliverables: [
        "Model YOLOv8 teroptimasi berukuran di bawah 15 MB dengan akurasi mAP tinggi.",
        "Aplikasi native Android (.apk) fungsional dengan antarmuka viewfinder deteksi real-time.",
        "Modul riwayat tangkapan deteksi dilengkapi koordinat waktu dan label kepercayaan."
      ]
    },
    themeColor: "#9E6D53",
    previewType: "android-ai",
  },
  {
    id: "nusareka-erp",
    number: "03",
    title: "Rancang Bangun Sistem Manajemen Internal PT. Nusareka Prima Engineering",
    shortTitle: "Sistem Manajemen Internal Nusareka",
    category: "Full-Stack Web Development",
    year: "2023 - 2024",
    clientOrContext: "PT. Nusareka Prima Engineering",
    summary: "Sistem manajemen operasional berbasis web yang menyatukan alur kerja administrasi, pengelolaan sumber daya manusia, pengawasan kepatuhan safety, serta keuangan internal dalam satu platform terpusat.",
    highlights: [
      "Pengembangan sistem berbasis Laravel dengan skema database relasional MySQL yang terstruktur.",
      "Modul Human Resource: manajemen data karyawan, pencatatan kontrak, dan generate slip gaji otomatis.",
      "Modul Safety Management: logbook kepatuhan K3, pelaporan insiden, dan inspeksi perlengkapan kerja.",
      "Sistem autentikasi aman dengan kontrol hak akses berbasis peran (Role-Based Access Control / RBAC).",
      "Pencatatan absensi digital terintegrasi dan modul rekapitulasi laporan divisi dalam format PDF/Excel."
    ],
    role: "Full-Stack Web Developer",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS", "JavaScript", "Blade Engine"],
    details: {
      challenge: "Sebelumnya, divisi HR, Safety, dan Operasional menggunakan dokumen spreadsheet terpisah yang rawan duplikasi data, lambat dalam verifikasi slip gaji, serta menyulitkan tracking riwayat kepatuhan keselamatan kerja di area proyek.",
      solution: "Merancang basis data terpusat dengan relasi referensial yang ketat, membangun antarmuka dashboard yang bersih untuk setiap tingkatan staf (Admin, Manager, Pegawai), serta menyematkan otomasi kalkulasi lembur, potongan pajak, dan penerbitan slip gaji digital berenkripsi.",
      deliverables: [
        "Aplikasi web internal perusahaan yang aktif digunakan lintas divisi kerja.",
        "Modul manajemen slip gaji dengan fitur cetak PDF terenkripsi.",
        "Dashboard analitik kehadiran staf dan status inspeksi keselamatan kerja bulanan.",
        "Buku panduan operasional sistem dan dokumentasi skema database."
      ]
    },
    themeColor: "#5B7065",
    previewType: "web-system",
  },
  {
    id: "dzapin-merchant",
    number: "04",
    title: "Perancangan UI/UX Aplikasi dan Website Dzapin Merchant (QRIS Merchant) PT. Bank Riau Kepri Syariah",
    shortTitle: "UI/UX Dzapin Merchant QRIS",
    category: "Desain UI/UX",
    year: "2023",
    clientOrContext: "Rekomendasi Desain Produk — PT. Bank Riau Kepri Syariah",
    summary: "Proyek perancangan ulang antarmuka aplikasi mobile dan perancangan UI/UX website baru untuk mempermudah merchant UMKM memantau transaksi QRIS, laporan keuangan, dan verifikasi pembayaran harian.",
    highlights: [
      "Perancangan ulang (redesign) menyeluruh antarmuka aplikasi mobile agar lebih ramah bagi merchant pemula.",
      "Perancangan antarmuka website dashboard baru untuk pemilik usaha dengan volume transaksi harian tinggi.",
      "Visualisasi data ringkasan omzet, grafik transaksi harian, dan mutasi saldo yang mudah dipahami.",
      "Penyusunan komponen Design System yang konsisten berdasarkan identitas visual perbankan syariah.",
      "Eksplorasi alur verifikasi suara notifikasi pembayaran QRIS dan pengunduhan statemen berkala."
    ],
    role: "UI/UX Designer (Design Proposal & Prototyping)",
    techStack: ["Figma", "Design Systems", "Interactive Prototyping", "Information Architecture", "Heuristic Evaluation"],
    details: {
      challenge: "Aplikasi merchant generasi sebelumnya memiliki hierarki visual yang padat, navigasi laporan keuangan yang berliku, dan kurang memberikan rasa kepastian ketika transaksi QRIS berhasil masuk di jam sibuk toko.",
      solution: "Menyederhanakan alur navigasi utama menjadi 3 fokus utama: Penerimaan QRIS Cepat, Ringkasan Penjualan Hari Ini, dan Riwayat Mutasi. Tampilan dibuat bersih dengan kontras tinggi, tombol aksi berukuran ergonomis, serta kartu status transaksi dengan indikator warna yang jelas.",
      deliverables: [
        "File desain Figma komprehensif mencakup 35+ artboard mobile dan 12+ halaman dashboard web.",
        "Komponen Design System reusable (Typography scales, Color tokens, Buttons, Form inputs, Data tables).",
        "Prototipe interaktif clickable untuk validasi alur penerimaan transaksi QRIS.",
        "Dokumen rekomendasi UX perbaikan antarmuka perbankan merchant."
      ]
    },
    themeColor: "#8C7965",
    previewType: "uiux-figma",
  },
  {
    id: "futsal-go",
    number: "05",
    title: "FUTSAL-GO: Platform Pencarian dan Pemesanan Lapangan Futsal Berbasis Geographic Information System (GIS)",
    shortTitle: "FUTSAL-GO: GIS Lapangan Futsal",
    category: "GIS / Pengembangan Web",
    year: "2023",
    clientOrContext: "Aplikasi Spasial Layanan Olahraga Pekanbaru",
    summary: "Aplikasi berbasis web dengan integrasi Geographic Information System (GIS) yang membantu komunitas olahraga menemukan lapangan futsal di sekitar Pekanbaru berdasarkan radius lokasi, fasilitas, dan ketersediaan jadwal.",
    highlights: [
      "Pemetaan koordinat geografis lapangan futsal di seluruh wilayah Pekanbaru ke dalam peta interaktif.",
      "Fitur pencarian berbasis radius jarak terdekat dari posisi pengguna saat ini.",
      "Katalog detail fasilitas lapangan: jenis lantai (rumput sintetis/vinyl), penerangan, shower, dan area parkir.",
      "Alur pemesanan jadwal lapangan interaktif untuk menghindari bentrokan jam sewa.",
      "Antarmuka responsif yang nyaman diakses melalui ponsel maupun laptop di perjalanan."
    ],
    role: "Full-Stack Web & GIS Developer",
    techStack: ["PHP", "JavaScript", "Leaflet.js", "OpenStreetMap", "MySQL", "Bootstrap / CSS"],
    details: {
      challenge: "Pemain futsal di Pekanbaru kerap mengalami kendala saat mencari lapangan kosong di akhir pekan karena harus menghubungi pengelola satu per satu melalui telepon tanpa mengetahui lokasi pasti dan kelayakan fasilitas.",
      solution: "Membangun platform berbasis web yang menyematkan layer peta Leaflet.js dengan marker kustom, popup informasi ringkas, serta filter jenis lantai dan harga per jam. Sistem pemesanan dilengkapi kalender jadwal realtime untuk setiap lapangan terdaftar.",
      deliverables: [
        "Aplikasi web GIS dengan peta interaktif responsif kota Pekanbaru.",
        "Basis data spasial titik lokasi dan detail fasilitas lapangan futsal.",
        "Modul reservasi slot waktu dan konfirmasi bukti pemesanan pengguna."
      ]
    },
    themeColor: "#6B7280",
    previewType: "gis-map",
  }
];

export const communityServicesData = [
  {
    id: "pkm-01",
    title: "Pelatihan Literasi Digital dan Pengenalan Perangkat Lunak untuk Remaja Komunitas",
    organization: "Program Pengabdian Sivitas Akademika",
    year: "2024",
    role: "Instruktur Teknis & Fasilitator Materi",
    description: "Kegiatan pendampingan intensif bagi remaja dan generasi muda setempat untuk meningkatkan kemampuan literasi digital, dasar pemrograman visual, serta etika pemanfaatan teknologi internet secara produktif dan aman.",
    contributions: [
      "Menyusun modul materi pengenalan komputer dan logika pemrograman dasar yang mudah dipahami pemula.",
      "Membimbing langsung peserta dalam sesi praktik interaktif pembuatan halaman web sederhana.",
      "Memberikan pemaparan mengenai peluang karir di industri kreatif dan pengembangan perangkat lunak."
    ],
    location: "Pekanbaru, Riau",
    documentationNote: "Dokumentasi sesi workshop langsung bersama kelompok peserta binaan."
  },
  {
    id: "pkm-02",
    title: "Digitalisasi Pencatatan Administrasi dan Profil Usaha Mikro Berbasis Komunitas",
    organization: "Inisiatif Pengabdian Masyarakat Terpadu",
    year: "2023",
    role: "Koordinator Tim Pendamping Digital",
    description: "Membantu para pelaku usaha mikro di lingkungan sekitar dalam mendokumentasikan profil produk mereka ke format digital serta menerapkan sistem pencatatan inventaris dan transaksi sederhana menggunakan spreadsheet.",
    contributions: [
      "Menganalisis alur pencatatan manual pelaku usaha dan merancang template pembukuan digital yang ramah pengguna.",
      "Memberikan pendampingan langsung 'one-on-one' tata cara penggunaan template dan backup data mandiri.",
      "Membantu pembuatan profil digital toko untuk meningkatkan keterlihatan usaha di penelusuran lokal."
    ],
    location: "Kampar & Sekitarnya, Riau",
    documentationNote: "Dokumentasi pendampingan langsung di lokasi usaha peserta program."
  },
  {
    id: "pkm-03",
    title: "Edukasi Kesadaran Keamanan Siber dan Proteksi Data Pribadi Masyarakat",
    organization: "Sosialisasi Teknologi Informasi Masyarakat",
    year: "2023",
    role: "Pemateri & Penyusun Panduan Keamanan",
    description: "Program sosialisasi kepada masyarakat umum mengenai langkah-langkah praktis melindungi data pribadi, mengenali modus penipuan online (phishing, social engineering), serta penerapan autentikasi dua faktor pada akun digital sehari-hari.",
    contributions: [
      "Merancang materi presentasi visual dan infografis ringkas yang mudah dipahami tanpa jargon teknis rumit.",
      "Melakukan simulasi langsung cara mengenali tautan palsu dan mengamankan aplikasi pesan singkat.",
      "Membagikan panduan cetak kiat keamanan digital keluarga kepada seluruh peserta kegiatan."
    ],
    location: "Pekanbaru, Riau",
    documentationNote: "Dokumentasi sesi diskusi tanya-jawab dan pembagian panduan siber praktis."
  }
];

export const certificatesData = [
  {
    id: "cert-01",
    name: "Pengembang Aplikasi Android Native Profesional",
    issuer: "Platform Sertifikasi Keahlian Terakreditasi",
    year: "2024",
    category: "Mobile Development",
    credentialId: "CERT-ANDR-2024-8841",
    credentialUrl: "https://example.com/verify/cert-andr-2024",
    description: "Sertifikasi kompetensi rekayasa aplikasi Android menggunakan Kotlin, arsitektur MVVM, Coroutines, dan integrasi API RESTful.",
    skills: ["Kotlin", "Android Architecture", "Coroutines", "Room Database"]
  },
  {
    id: "cert-02",
    name: "Spesialisasi Computer Vision dan Deteksi Objek",
    issuer: "Lembaga Pelatihan Kecerdasan Buatan Terbuka",
    year: "2024",
    category: "Artificial Intelligence",
    credentialId: "CERT-AI-CV-2024-1029",
    credentialUrl: "https://example.com/verify/cert-ai-cv-2024",
    description: "Penguasaan pipeline pelatihan model computer vision, optimasi dataset citra, augmentasi, dan ekspor model ke format edge inference.",
    skills: ["YOLOv8", "Deep Learning", "PyTorch", "TensorFlow Lite"]
  },
  {
    id: "cert-03",
    name: "Full-Stack Web Application Engineering",
    issuer: "Akademi Pemrograman Berkelanjutan",
    year: "2023",
    category: "Web Development",
    credentialId: "CERT-FSW-2023-4512",
    credentialUrl: "https://example.com/verify/cert-fsw-2023",
    description: "Kompetensi perancangan arsitektur backend MVC, normalisasi database relasional, autentikasi sesi, serta integrasi frontend modern.",
    skills: ["PHP", "Laravel", "MySQL", "JavaScript", "Security Basics"]
  },
  {
    id: "cert-04",
    name: "Perancangan Pengalaman Pengguna (UI/UX Design)",
    issuer: "Institut Desain Produk Digital",
    year: "2023",
    category: "Design",
    credentialId: "CERT-UIUX-2023-7721",
    credentialUrl: "https://example.com/verify/cert-uiux-2023",
    description: "Sertifikasi proses perancangan produk digital mulai dari riset persona, user journey mapping, wireframing Figma, hingga usability testing.",
    skills: ["Figma", "Design System", "Prototyping", "Usability Testing"]
  },
  {
    id: "cert-05",
    name: "Fundamental Pemodelan 3D dan Pengolahan Tekstur PBR",
    issuer: "Pusat Pelatihan Grafika Komputer & Media",
    year: "2023",
    category: "3D & Interactive",
    credentialId: "CERT-3D-2023-3398",
    credentialUrl: "https://example.com/verify/cert-3d-2023",
    description: "Keahlian pemodelan poligon keras (hard-surface), unwrap UV koordinat, pembuatan material berbasis fisika (PBR), dan persiapan aset untuk game engine.",
    skills: ["Blender", "Substance 3D", "PBR Materials", "Topology"]
  },
  {
    id: "cert-06",
    name: "Pengenalan Sistem Informasi Geografis (GIS) Berbasis Web",
    issuer: "Lembaga Pendidikan Data Spasial Digital",
    year: "2022",
    category: "Spatial Data",
    credentialId: "CERT-GIS-2022-9904",
    credentialUrl: "https://example.com/verify/cert-gis-2022",
    description: "Dasar pengolahan data geospasial vektor dan raster, integrasi layer peta digital web dengan pustaka Leaflet.js dan koordinat WGS84.",
    skills: ["Leaflet.js", "GeoJSON", "Spatial Analysis", "Mapping"]
  }
];

export const contactData = {
  heading: "Mari Berdiskusi dan Memulai Kerja Sama",
  subheading: "Saya selalu menyambut percakapan mengenai proyek rekayasa perangkat lunak, perancangan antarmuka, eksplorasi teknologi baru, maupun peluang kolaborasi profesional.",
  email: "kontak.raihanpratama@gmail.com",
  socialLinks: [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/raihan-pratama-sample",
      handle: "linkedin.com/in/raihan-pratama",
      description: "Jaringan profesional dan riwayat pengalaman kerja"
    },
    {
      name: "GitHub",
      url: "https://github.com/raihan-pratama-sample",
      handle: "github.com/raihan-pratama",
      description: "Repositori kode sumber dan eksplorasi teknis mandiri"
    },
    {
      name: "Figma Community",
      url: "https://figma.com/@raihanpratama",
      handle: "figma.com/@raihanpratama",
      description: "Eksplorasi konsep antarmuka dan komponen UI"
    }
  ],
  location: "Pekanbaru, Riau — Indonesia",
  workingHours: "Senin – Jumat, 09.00 – 18.00 WIB"
};
