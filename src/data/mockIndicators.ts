import { StrategicIndicator, IndicatorCategoryMeta, IndicatorCategory, Publication } from '@/types/indicator';

export const CATEGORIES: IndicatorCategoryMeta[] = [
  {
    id: 'sosial',
    name: 'Sosial & Kesejahteraan',
    description: 'Kemiskinan, garis kebutuhan hidup, dan ketimpangan pendapatan',
    iconName: 'Users',
    accentColor: 'from-blue-500 to-indigo-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800',
    badgeText: 'text-blue-700 dark:text-blue-300'
  },
  {
    id: 'ekonomi',
    name: 'Ekonomi & PDRB',
    description: 'Pertumbuhan ekonomi daerah, PDRB tahunan, dan PDRB per kapita',
    iconName: 'TrendingUp',
    accentColor: 'from-emerald-500 to-teal-600',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800',
    badgeText: 'text-emerald-700 dark:text-emerald-300'
  },
  {
    id: 'ketenagakerjaan',
    name: 'Ketenagakerjaan',
    description: 'Tingkat pengangguran terbuka dan partisipasi angkatan kerja',
    iconName: 'Briefcase',
    accentColor: 'from-amber-500 to-orange-600',
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800',
    badgeText: 'text-amber-700 dark:text-amber-300'
  },
  {
    id: 'kesehatan',
    name: 'Kesehatan',
    description: 'Angka harapan hidup dan kualitas derajat kesehatan masyarakat',
    iconName: 'HeartPulse',
    accentColor: 'from-rose-500 to-pink-600',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800',
    badgeText: 'text-rose-700 dark:text-rose-300'
  }
];

export const INKESRA_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-kesra-2025',
    title: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2025',
    year: 2025,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102004.9104',
    publicationNumber: '91040.25035',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2025',
    language: 'Indonesia',
    fileSize: '5.9 MB',
    coverImage: '/images/cover-kesra-2025.png',
    coverGradient: 'from-amber-500 via-orange-600 to-slate-900',
    description: 'Menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, dan perumahan.',
    abstraction: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2025 merupakan publikasi tahunan yang diterbitkan BPS Kabupaten Teluk Bintuni. Publikasi ini menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni. Perubahan taraf kesejahteraan dikaji menurut berbagai aspek yaitu kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, perumahan, serta indikator sosial lainnya.',
    pageCount: 114,
    pdfUrl: '/documents/indikator-kesejahteraan-rakyat-2025.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2025/12/30/c375a8c10ede48cbb0e3aef3/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2025.html'
  },
  {
    id: 'pub-kesra-2024',
    title: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2024',
    year: 2024,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102004.9104',
    publicationNumber: '91040.24038',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '18 Desember 2024',
    language: 'Indonesia',
    fileSize: '1.41 MB',
    coverImage: '/images/cover-kesra-2024.png',
    coverGradient: 'from-amber-600 via-yellow-700 to-slate-900',
    description: 'Menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni tahun 2024 mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, dan perumahan.',
    abstraction: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni Tahun 2024 merupakan publikasi tahunan yang diterbitkan BPS Kabupaten Teluk Bintuni. Data bersumber dari kegiatan survei dan sensus yang dilaksanakan oleh Badan Pusat Statistik dan beberapa publikasi lain yang telah diterbitkan sebelumnya. Publikasi ini menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni. Perubahan taraf kesejahteraan dikaji menurut berbagai aspek yaitu kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, perumahan, serta indikator sosial lainnya.',
    pageCount: 148,
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2024/12/18/382183e61212c15c17469ce2/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2024.html'
  },
  {
    id: 'pub-kesra-2023',
    title: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2023',
    year: 2023,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102004.9104',
    publicationNumber: '91040.2336',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '28 Desember 2023',
    language: 'Indonesia',
    fileSize: '1.39 MB',
    coverImage: '/images/cover-kesra-2023.png',
    coverGradient: 'from-blue-900 via-slate-900 to-indigo-950',
    description: 'Menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni tahun 2023 mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, dan perumahan.',
    abstraction: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni Tahun 2023 merupakan publikasi tahunan yang diterbitkan BPS Kabupaten Teluk Bintuni. Publikasi Indikator Kesejahteraan Rakyat (Inkesra) Kabupaten Teluk Bintuni 2023 menyajikan gambaran perkembangan kesejahteraan rakyat di Kabupaten Teluk Bintuni tahun 2023. Dimensi kesejahteraan rakyat sangatlah luas dan kompleks, karena mencakup berbagai aspek sosial dan ekonomi di masyarakat. Dalam publikasi ini, pembahasan akan dibatasi menjadi beberapa aspek pembahasan mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, pengeluaran konsumsi rumah tangga, perumahan, dan beberapa aspek sosial lainnya. Sumber data yang digunakan dalam pembahasan cukup beragam, dengan sumber data utamanya diperoleh melalui hasil sensus maupun survei yang dilakukan BPS. Beberapa data survei yang digunakan yaitu data hasil Survei Sosial Ekonomi Nasional (SUSENAS) dan Survei Angkatan Kerja Nasional (SAKERNAS), yang mana pada publikasi ini akan digunakan hasil SUSENAS Maret 2023.',
    pageCount: 95,
    pdfUrl: '/documents/indikator-kesejahteraan-rakyat-2023.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2023/12/28/de63a01b1de10c8df5944ee0/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2023.html'
  },
  {
    id: 'pub-kesra-2022',
    title: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2022',
    year: 2022,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102004.9104',
    publicationNumber: '91040.2332',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '1 Desember 2023',
    language: 'Indonesia',
    fileSize: '1.38 MB',
    coverImage: '/images/cover-kesra-2022.png',
    coverGradient: 'from-amber-700 via-blue-900 to-slate-950',
    description: 'Menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni tahun 2022 mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, dan perumahan.',
    abstraction: 'Puji syukur kami panjatkan kehadirat Tuhan Yang Maha Kuasa, karena atas limpahan rahmat dan karunia-Nya Publikasi Indikator Kesejahteraan Rakyat (Inkesra) Kabupaten Teluk Bintuni 2022 dapat terselesaikan. Publikasi Inkesra Kabupaten Teluk Bintuni 2022 merupakan publikasi tahunan yang diterbitkan BPS Kabupaten Teluk Bintuni. Publikasi ini menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni. Perubahan taraf kesejahteraan dikaji menurut berbagai aspek yaitu kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, perumahan, serta indikator sosial lainnya. Sumber data indikator kesejahteraan rakyat yang disajikan berasal dari hasil pengolahan Survei Sosial Ekonomi Nasional (SUSENAS). Sedangkan indikator ketenagakerjaan berasal dari Survei Angkatan Kerja Nasional (SAKERNAS). Semoga publikasi ini bermanfaat bagi semua kalangan yang berkepentingan, termasuk masyarakat pengguna data sebagai bahan rujukan.',
    pageCount: 86,
    pdfUrl: '/documents/indikator-kesejahteraan-rakyat-2022.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2023/12/01/961da42a85e8ddbd3ce965eb/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2022.html'
  },
  {
    id: 'pub-kesra-2021',
    title: 'Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni 2021',
    year: 2021,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102004.9104',
    publicationNumber: '91040.2232',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2022',
    language: 'Indonesia',
    fileSize: '0.9 MB',
    coverImage: '/images/cover-kesra-2021.png',
    coverGradient: 'from-teal-800 via-slate-900 to-amber-900',
    description: 'Menyajikan tingkat perkembangan kesejahteraan rakyat Kabupaten Teluk Bintuni tahun 2021 mencakup aspek kependudukan, kesehatan, pendidikan, ketenagakerjaan, konsumsi rumah tangga, perumahan, dan kemiskinan.',
    abstraction: 'Publikasi Indikator Kesejahteraan Rakyat (Inkesra) Kabupaten Teluk Bintuni 2021 merupakan publikasi yang diterbitkan oleh BPS Kabupaten Teluk Bintuni dan menyajikan indikator yang mencerminkan taraf kesejahteraan rakyat. Data bersumber dari kegiatan survei dan sensus yang dilaksanakan oleh Badan Pusat Statistik dan beberapa publikasi lain yang telah diterbitkan sebelumnya. Data kemudian disajikan dalam bentuk analisis indikator kependudukan, kesehatan, pendidikan, ketenagakerjaan, taraf dan pola konsumsi, perumahan dan lingkungan, kemiskinan, dan indikator sosial lainnya.',
    pageCount: 71,
    pdfUrl: '/documents/indikator-kesejahteraan-rakyat-2021.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2022/12/30/18f800ca78cfb6d56a2e498b/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2021.html'
  }
];

export const NAKER_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-naker-2024',
    title: 'Statistik Ketenagakerjaan Kabupaten Teluk Bintuni 2024',
    year: 2024,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '2301004.9104',
    publicationNumber: '91040.25034',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2025',
    language: 'Indonesia',
    fileSize: '1.78 MB',
    coverImage: '/images/cover-tenagakerja-2024.png',
    coverGradient: 'from-amber-900 via-stone-900 to-amber-950',
    description: 'Berisi informasi komprehensif tentang aktivitas ekonomi penduduk hasil Sakernas 2024 meliputi lapangan pekerjaan, status pekerjaan, TPT, TPAK, dan karakteristik angkatan kerja.',
    abstraction: 'Publikasi Statistik Ketenagakerjaan Kabupaten Teluk Bintuni Tahun 2024 merupakan publikasi yang diterbitkan oleh Badan Pusat Statistik Kabupaten Teluk Bintuni. Data yang digunakan adalah data hasil Survei Angkatan Kerja Nasional (Sakernas) tahun 2024. Publikasi ini bertujuan untuk memenuhi kebutuhan data dan informasi bidang ketenagakerjaan. Publikasi Statistik Ketenagakerjaan ini, berisi informasi tentang aktivitas ekonomi penduduk yang terekam dalam Survei Angkatan Kerja Nasional (Sakernas) 2024. Data yang disajikan berupa tabel-tabel yang mencakup kegiatan penduduk berusia 15 tahun ke atas selama periode tertentu meliputi lapangan pekerjaan, dan status pekerjaan. Publikasi Statistik Ketenagakerjaan Kabupaten Teluk Bintuni Tahun 2024 disajikan dengan keterangan pokok penduduk seperti jenis kelamin dan Pendidikan. Ucapan terima kasih disampaikan kepada semua pihak yang terlibat baik secara langsung maupun tidak langsung dalam penyusunan publikasi ini. Semoga publikasi ini dapat membantu memberikan informasi bagi para pengguna data khususnya di bidang ketenagakerjaan. Saran dan kritik yang membangun senantiasa diharapkan guna penyempurnaan publikasi di masa yang akan datang.',
    pageCount: 75,
    pdfUrl: '/documents/statistik-ketenagakerjaan-teluk-bintuni-2024.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2025/12/30/8380271953804a01116edf32/statistik-ketenagakerjaan-kabupaten-teluk-bintuni-2024.html'
  },
  {
    id: 'pub-naker-2023',
    title: 'Statistik Ketenagakerjaan Kabupaten Teluk Bintuni 2023',
    year: 2023,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '2301004.9104',
    publicationNumber: '91040.24040',
    issnOrIsbn: '-',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2024',
    language: 'Indonesia',
    fileSize: '2.21 MB',
    coverImage: '/images/cover-tenagakerja-2023.png',
    coverGradient: 'from-amber-100 via-orange-200 to-amber-900',
    description: 'Menyajikan indikator ketenagakerjaan terkini, status pekerjaan utama, TPT, dan TPAK di Kabupaten Teluk Bintuni tahun 2023.',
    abstraction: 'Statistik Ketenagakerjaan Kabupaten Teluk Bintuni memberikan informasi mengenai indeks-indeks ketenagakerjaan disertai analisis dan interpretasi akurat. Publikasi ini dapat menjadi acuan dalam melihat kondisi terkini ketenagakerjaan di Kabupaten Teluk Bintuni tahun 2023.',
    pageCount: 65,
    pdfUrl: '/documents/statistik-ketenagakerjaan-teluk-bintuni-2023.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2024/12/30/1f406013483e18f00b188349/statistik-ketenagakerjaan-kabupaten-teluk-bintuni-2023.html'
  }
];

export const RAW_INDICATORS: Omit<StrategicIndicator, 'currentYear' | 'currentValue' | 'previousYear' | 'previousValue' | 'changeValue' | 'changePercent' | 'trendDirection' | 'isPositiveChange'>[] = [
  // 1. Angka Kemiskinan
  {
    id: 'angka-kemiskinan',
    code: 'POVERTY',
    slug: 'angka-kemiskinan',
    name: 'Angka Kemiskinan',
    shortName: 'Angka Kemiskinan',
    category: 'sosial',
    unit: '%',
    definition: 'Persentase penduduk yang memiliki rata-rata pengeluaran per kapita per bulan di bawah Garis Kemiskinan di Kabupaten Teluk Bintuni.',
    polarity: 'lower_is_better',
    featured: true,
    dataPoints: [
      { year: 2021, value: 29.79 },
      { year: 2022, value: 29.73 },
      { year: 2023, value: 28.24 },
      { year: 2024, value: 26.99 },
      { year: 2025, value: 25.34 }
    ],
    insightSnippet: 'Angka kemiskinan turun 1,65 persen poin pada 2025 berkat program perlindungan sosial daerah dan penyerapan tenaga kerja lokal.',
    story: {
      title: 'Menekan Angka Kemiskinan Menuju Kesejahteraan Merata',
      subtitle: 'Dinamika Penurunan Beban Pengeluaran Rumah Tangga di Teluk Bintuni',
      summaryQuote: 'Penurunan angka kemiskinan menjadi 25,34% mencerminkan tren positif perbaikan daya beli masyarakat dan penguatan roda perekonomian daerah.',
      paragraphs: [
        'Pada tahun 2025, persentase penduduk miskin di Kabupaten Teluk Bintuni tercatat sebesar 25,34%, berkurang dari 26,99% pada tahun 2024. Angka ini menunjukkan bahwa setidaknya 1 dari setiap 4 penduduk masih tergolong miskin.',
        'Meskipun masih menjadi tantangan dalam pembangunan daerah, capaian lima tahun terakhir menunjukkan tren penurunan yang konsisten dari 29,79% pada tahun 2021. Peningkatan kemampuan daya beli masyarakat dan terbukanya akses ekonomi menjadi faktor penting dalam menjaga laju penurunan tingkat kemiskinan di Kabupaten Teluk Bintuni.'
      ],
      keyHighlights: [
        { label: 'Capaian 2025', value: '25,34 %', description: 'Persentase penduduk miskin' },
        { label: 'Penurunan YoY', value: '-1,65 %', description: 'Pengurangan persentase dibanding 2024' },
        { label: 'Tren 5 Tahun', value: 'Turun Berkelanjutan', description: 'Konsisten menurun dari 29,79% (2021)' }
      ],
      policyContext: 'Sinergi program bantuan pangan daerah dan optimalisasi dana desa diarahkan untuk program padat karya tunai di distrik-distrik prioritas.',
      humanScaleMeaning: {
        ratioText: 'Sekitar 25 dari 100 Penduduk',
        numerator: 25,
        denominator: 100,
        description: 'Sekitar 25 dari setiap 100 penduduk di Kabupaten Teluk Bintuni memiliki rata-rata pengeluaran bulanan di bawah Garis Kemiskinan (Rp 810.638 per kapita/bulan).',
        contextNote: 'Garis kemiskinan mengukur standar pengeluaran minimum untuk memenuhi kebutuhan makanan (2.100 kkal/kapita/hari) dan kebutuhan non-makanan pokok.'
      }
    },
    publications: INKESRA_PUBLICATIONS,
    source: 'Indikator Kesejahteraan Rakyat - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Juli 2024'
  },

  // 2. Garis Kemiskinan
  {
    id: 'garis-kemiskinan',
    code: 'GK',
    slug: 'garis-kemiskinan',
    name: 'Garis Kemiskinan',
    shortName: 'Garis Kemiskinan',
    category: 'sosial',
    unit: 'Rupiah',
    definition: 'Nilai pengeluaran minimum kebutuhan makanan (2.100 kkal per kapita per hari) dan non-makanan per kapita per bulan yang dibutuhkan seseorang agar tidak dikategorikan miskin.',
    polarity: 'neutral',
    featured: false,
    dataPoints: [
      { year: 2021, value: 693305 },
      { year: 2022, value: 716834 },
      { year: 2023, value: 787048 },
      { year: 2024, value: 734246 },
      { year: 2025, value: 810638 }
    ],
    insightSnippet: 'Garis Kemiskinan berada pada angka Rp 810.638 per kapita/bulan pada 2025, dipengaruhi oleh dinamika harga komoditas pangan pokok.',
    story: {
      title: 'Standar Kebutuhan Dasar dan Batas Kemiskinan',
      subtitle: 'Memahami Komponen Kebutuhan Pangan dan Non-Pangan Warga Bintuni',
      summaryQuote: 'Garis Kemiskinan mencerminkan nilai rupiah minimum pemenuhan nutrisi dan kebutuhan dasar per kapita per bulan.',
      paragraphs: [
        'Garis Kemiskinan (GK) Kabupaten Teluk Bintuni pada tahun 2025 tercatat sebesar Rp 810.638 per kapita per bulan, meningkat Rp 76.392 dibanding tahun 2024.',
        'Kenaikan garis kemiskinan dipengaruhi oleh pergerakan harga komoditas pokok seperti beras, ikan segar, telur ayam, serta biaya perumahan dan transportasi antardistrik.'
      ],
      keyHighlights: [
        { label: 'GK 2025', value: 'Rp 810.638', description: 'Nilai garis kemiskinan per kapita/bulan' },
        { label: 'Kenaikan Nilai', value: '+Rp 76.392', description: 'Perubahan nominal dibanding 2024' },
        { label: 'Komposisi', value: 'Pangan & Non-Pangan', description: 'Kebutuhan nutrisi 2.100 kkal & kebutuhan dasar' }
      ],
      policyContext: 'Pemantauan harga komoditas pangan pokok strategis dan intervensi stabilisasi pasokan menjaga keterjangkauan daya beli kelompok bawah.',
      humanScaleMeaning: {
        ratioText: 'Standar Rp 27.021 / Hari per Jiwa',
        numerator: 27,
        denominator: 100,
        description: 'Seseorang dikategorikan hidup di bawah Garis Kemiskinan jika pengeluaran kebutuhan hidupnya kurang dari Rp 810.638 per bulan (setara ~Rp 27.021 per hari).',
        contextNote: 'Mencakup pemenuhan 2.100 kkal energi makanan (beras, ikan, telur, minyak) serta kebutuhan minimum tempat tinggal, pakaian, pendidikan, dan kesehatan.'
      }
    },
    publications: INKESRA_PUBLICATIONS,
    source: 'Indikator Kesejahteraan Rakyat - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Juli 2024'
  },

  // 3. Tingkat Pengangguran Terbuka
  {
    id: 'tingkat-pengangguran-terbuka',
    code: 'TPT',
    slug: 'tingkat-pengangguran-terbuka',
    name: 'Tingkat Pengangguran Terbuka (TPT)',
    shortName: 'Pengangguran (TPT)',
    category: 'ketenagakerjaan',
    unit: '%',
    definition: 'Persentase jumlah penganggur terhadap total jumlah angkatan kerja yang aktif mencari kerja atau mempersiapkan usaha.',
    polarity: 'lower_is_better',
    featured: true,
    dataPoints: [
      { year: 2021, value: 4.74 },
      { year: 2022, value: 3.58 },
      { year: 2023, value: 3.52 },
      { year: 2024, value: 3.16 }
    ],
    insightSnippet: 'TPT berhasil ditekan ke angka 3,16% pada 2024 seiring perluasan pelatihan vokasi di Pusat Pelatihan Teknik Industri Migas (P2TIM) Bintuni.',
    story: {
      title: 'Peluang Kerja dan Penyerapan Tenaga Kerja Lokal',
      subtitle: 'Pemberdayaan Tenaga Kerja Muda Melalui Pelatihan Vokasi Berstandar Industri',
      summaryQuote: 'Penurunan TPT ke 3,16% membuktikan keberhasilan transfer keahlian bagi tenaga kerja muda daerah untuk diserap di sektor industri dan jasa.',
      paragraphs: [
        'Tingkat Pengangguran Terbuka (TPT) Kabupaten Teluk Bintuni pada tahun 2024 tercatat sebesar 3,16 persen, menurun 0,36 persen poin dari 3,52 persen pada tahun 2023.',
        'Penguatan pelatihan teknik vokasi melalui P2TIM Teluk Bintuni telah membekali tenaga kerja lokal dengan sertifikasi keahlian industri berskala nasional dan internasional.'
      ],
      keyHighlights: [
        { label: 'Realisasi TPT 2024', value: '3,16 %', description: 'Persentase penganggur dari angkatan kerja' },
        { label: 'Penurunan Tahunan', value: '-0,36 %', description: 'Penurunan dibanding tahun 2023' },
        { label: 'Inisiatif Unggulan', value: 'P2TIM Bintuni', description: 'Pelatihan vokasi industri migas gratis bersertifikasi' }
      ],
      policyContext: 'Pengembangan kurikulum link & match antara kebutuhan industri migas dan pelatihan vokasi daerah mempercepat absorpsi pencari kerja.',
      humanScaleMeaning: {
        ratioText: 'Sekitar 3 dari 100 Angkatan Kerja',
        numerator: 3,
        denominator: 100,
        description: 'Dari setiap 100 orang dalam angkatan kerja di Teluk Bintuni, hanya sekitar 3 orang yang sedang mencari pekerjaan atau mempersiapkan usaha baru.',
        contextNote: 'Angkatan kerja adalah penduduk usia 15 tahun ke atas yang bekerja atau sedang aktif mencari pekerjaan.'
      }
    },
    publications: NAKER_PUBLICATIONS,
    source: 'Statistik Ketenagakerjaan - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Desember 2025'
  },

  // 4. TPAK (Tingkat Partisipasi Angkatan Kerja)
  {
    id: 'tingkat-partisipasi-angkatan-kerja',
    code: 'TPAK',
    slug: 'tingkat-partisipasi-angkatan-kerja',
    name: 'Tingkat Partisipasi Angkatan Kerja (TPAK)',
    shortName: 'TPAK',
    category: 'ketenagakerjaan',
    unit: '%',
    definition: 'Persentase jumlah angkatan kerja (bekerja dan mencari kerja) terhadap penduduk usia kerja (15 tahun ke atas).',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 67.35 },
      { year: 2022, value: 70.58 },
      { year: 2023, value: 69.33 },
      { year: 2024, value: 70.07 }
    ],
    insightSnippet: 'TPAK Teluk Bintuni naik menjadi 70,07% pada 2024, menandakan tingginya partisipasi dan keaktifan masyarakat dalam pasar kerja.',
    story: {
      title: 'Dinamika Partisipasi Angkatan Kerja Produktif',
      subtitle: 'Meningkatnya Keterlibatan Masyarakat Usia Produktif dalam Kegiatan Ekonomi',
      summaryQuote: 'Kenaikan TPAK mencapai 70,07% menandakan tingginya keaktifan penduduk usia kerja dalam menggerakkan perekonomian daerah.',
      paragraphs: [
        'Tingkat Partisipasi Angkatan Kerja (TPAK) Kabupaten Teluk Bintuni pada tahun 2024 mencapai 70,07 persen, meningkat 0,74 persen poin dibanding tahun 2023 (69,33 persen).',
        'Peningkatan ini didorong oleh semakin banyaknya angkatan kerja muda dan perempuan yang terserap dalam aktivitas ekonomi produktif, perikanan maritim, perkebunan, dan sektor perdagangan.'
      ],
      keyHighlights: [
        { label: 'TPAK 2024', value: '70,07 %', description: 'Persentase angkatan kerja dari usia kerja' },
        { label: 'Kenaikan Tahunan', value: '+0,74 %', description: 'Peningkatan dibanding tahun 2023' },
        { label: 'Dampak Positif', value: 'Ekspansi Pasar Kerja', description: 'Peningkatan partisipasi perempuan & pemuda' }
      ],
      policyContext: 'Pemberdayaan UMKM lokal dan optimalisasi pelatihan vokasi industri meningkatkan partisipasi angkatan kerja produktif.',
      humanScaleMeaning: {
        ratioText: 'Sekitar 70 dari 100 Usia Kerja',
        numerator: 70,
        denominator: 100,
        description: 'Dari setiap 100 penduduk usia kerja (15 tahun ke atas) di Kabupaten Teluk Bintuni, sekitar 70 orang aktif bekerja atau sedang mencari pekerjaan.',
        contextNote: 'Sisanya sekitar 30 orang masuk dalam kategori bukan angkatan kerja seperti bersekolah/kuliah, mengurus rumah tangga, atau pensiun.'
      }
    },
    publications: NAKER_PUBLICATIONS,
    source: 'Statistik Ketenagakerjaan - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Desember 2025'
  },

  // 5. Pertumbuhan Ekonomi
  {
    id: 'pertumbuhan-ekonomi',
    code: 'GROWTH',
    slug: 'pertumbuhan-ekonomi',
    name: 'Pertumbuhan Ekonomi',
    shortName: 'Pertumbuhan Ekonomi',
    category: 'ekonomi',
    unit: '%',
    definition: 'Laju pertumbuhan Produk Domestik Regional Bruto (PDRB) atas dasar harga konstan yang menggambarkan percepatan produksi barang dan jasa.',
    polarity: 'higher_is_better',
    featured: true,
    dataPoints: [
      { year: 2021, value: -2.30 },
      { year: 2022, value: 2.01 },
      { year: 2023, value: 6.05 },
      { year: 2024, value: 29.22 },
      { year: 2025, value: 7.92 }
    ],
    insightSnippet: 'Ekonomi Teluk Bintuni tumbuh 7,92% pada 2025, ditopang oleh stabilitas industri pengolahan migas, konstruksi, dan perikanan tangkap.',
    story: {
      title: 'Akselerasi Ekonomi di Jantung Energi Papua Barat',
      subtitle: 'Sektor Industri Pengolahan Migas dan Maritim Mendorong Pertumbuhan Kuat',
      summaryQuote: 'Pertumbuhan ekonomi 7,92% menegaskan posisi Teluk Bintuni sebagai motor utama penggerak perekonomian di Papua Barat.',
      paragraphs: [
        'Perekonomian Kabupaten Teluk Bintuni pada tahun 2025 tumbuh sebesar 7,92 persen, setelah pada tahun 2024 mengalami lonjakan signifikan sebesar 29,22 persen akibat ekspansi fasilitas produksi gas alam cair.',
        'Sektor industri pengolahan gas alam cair (LNG), konstruksi, serta perikanan maritim tetap menjadi pilar utama pertumbuhan volume produksi riil daerah.'
      ],
      keyHighlights: [
        { label: 'Laju 2025', value: '7,92 %', description: 'Pertumbuhan riil PDRB ADHK' },
        { label: 'Puncak 2024', value: '29,22 %', description: 'Lonjakan ekspansi fasilitas LNG' },
        { label: 'Sektor Penopang', value: 'Industri Pengolahan', description: 'Kontributor utama nilai tambah ekonomi' }
      ],
      policyContext: 'Hilirisasi gas alam dan pengembangan kawasan industri terpadu menjadi fondasi jangka panjang penguatan struktur ekonomi daerah.',
      humanScaleMeaning: {
        ratioText: 'Laju Ekspansi +7,92% per Tahun',
        numerator: 8,
        denominator: 100,
        description: 'Nilai total barang dan jasa riil yang diproduksi di Kabupaten Teluk Bintuni meningkat 7,92% dibanding tahun sebelumnya.',
        contextNote: 'Pertumbuhan dihitung atas dasar harga konstan (ADHK) guna mengukur peningkatan volume output riil murni tanpa pengaruh inflasi harga.'
      }
    },
    publications: [
      {
        id: 'pub-pdrb-lapus-2024',
        title: 'Produk Domestik Regional Bruto Kabupaten Teluk Bintuni Menurut Lapangan Usaha 2020-2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '5201001.9104',
        publicationNumber: '91040.2405',
        releaseDate: '28 Februari 2025',
        coverGradient: 'from-emerald-600 via-teal-700 to-slate-900',
        description: 'Publikasi resmi neraca ekonomi wilayah memuat laju pertumbuhan ekonomi sektoral dan kontribusi struktur PDRB Teluk Bintuni.',
        pageCount: 168,
        pdfUrl: '#download-pdrb-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      },
      {
        id: 'pub-pdrb-pengeluaran-2024',
        title: 'PDRB Kabupaten Teluk Bintuni Menurut Pengeluaran 2020-2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '5202001.9104',
        publicationNumber: '91040.2408',
        releaseDate: '15 Maret 2025',
        coverGradient: 'from-blue-600 via-cyan-700 to-slate-900',
        description: 'Ulasan agregat konsumsi rumah tangga, investasi (PMTB), dan kinerja ekspor neto daerah Teluk Bintuni.',
        pageCount: 124,
        pdfUrl: '#download-pengeluaran-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      }
    ],
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Februari 2025'
  },

  // 6. PDRB Tahunan
  {
    id: 'pdrb-tahunan',
    code: 'PDRB_TAHUNAN',
    slug: 'pdrb-tahunan',
    name: 'PDRB Tahunan (ADHB)',
    shortName: 'PDRB Tahunan',
    category: 'ekonomi',
    unit: 'Triliun Rupiah',
    definition: 'Nilai total Produk Domestik Regional Bruto atas dasar harga berlaku yang dihasilkan oleh seluruh lapangan usaha dalam satu tahun.',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 31.38 },
      { year: 2022, value: 34.94 },
      { year: 2023, value: 39.54 },
      { year: 2024, value: 52.36 },
      { year: 2025, value: 57.21 }
    ],
    insightSnippet: 'PDRB Tahunan atas dasar harga berlaku menembus Rp 57,21 Triliun pada 2025, mencerminkan skala kue ekonomi Teluk Bintuni yang terus berekspansi.',
    story: {
      title: 'Skala dan Kapasitas Ekonomi Daerah Bintuni',
      subtitle: 'Penciptaan Nilai Tambah Bruto Barang dan Jasa Sepanjang Tahun',
      summaryQuote: 'PDRB Tahunan mencapai Rp 57,21 Triliun (ADHB) dan Rp 37,80 Triliun (ADHK), merefleksikan peran vital Teluk Bintuni dalam output ekonomi regional Papua.',
      paragraphs: [
        'Total PDRB atas dasar harga berlaku (ADHB) Kabupaten Teluk Bintuni pada tahun 2025 mencapai Rp 57,21 Triliun, meningkat dari Rp 52,36 Triliun pada tahun 2024.',
        'Secara riil atas dasar harga konstan 2010 (ADHK), output ekonomi mencapai Rp 37,80 Triliun pada tahun 2025, tumbuh dari Rp 35,03 Triliun pada tahun 2024 seiring tingginya produksi komoditas gas alam cair dan aktivitas industri pengolahan.'
      ],
      keyHighlights: [
        { label: 'PDRB ADHB 2025', value: 'Rp 57,21 T', description: 'Nilai total nominal harga berlaku' },
        { label: 'PDRB ADHK 2025', value: 'Rp 37,80 T', description: 'Nilai riil volume produksi (konstan 2010)' },
        { label: 'Kenaikan Nilai', value: '+Rp 4,85 T', description: 'Peningkatan nominal dibanding 2024' }
      ],
      policyContext: 'Peningkatan nilai tambah dan diversifikasi sektor ekonomi non-migas terus didorong untuk ketahanan ekonomi jangka panjang.',
      humanScaleMeaning: {
        ratioText: 'Skala Ekonomi Rp 57,21 Triliun',
        numerator: 57,
        denominator: 100,
        description: 'Total nilai bruto seluruh barang dan jasa yang dihasilkan seluruh sektor usaha di Kabupaten Teluk Bintuni dalam setahun mencapai Rp 57,21 Triliun (ADHB) dan Rp 37,80 Triliun (ADHK).',
        contextNote: 'PDRB ADHB mengukur nilai pasar tahun berjalan, sedangkan PDRB ADHK mengukur volume riil output ekonomi tanpa pengaruh inflasi harga.'
      }
    },
    publications: [
      {
        id: 'pub-pdrb-adhb-2024',
        title: 'Produk Domestik Regional Bruto Kabupaten Teluk Bintuni Menurut Lapangan Usaha 2020-2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '5201001.9104',
        publicationNumber: '91040.2405',
        releaseDate: '28 Februari 2025',
        coverGradient: 'from-blue-600 via-indigo-700 to-slate-900',
        description: 'Menyajikan tabel dan analisis rinci struktur nilai tambah bruto 17 lapangan usaha di Kabupaten Teluk Bintuni.',
        pageCount: 168,
        pdfUrl: '#download-pdrb-adhb-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      },
      {
        id: 'pub-bda-pdrb-2024',
        title: 'Kabupaten Teluk Bintuni Dalam Angka 2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '1102001.9104',
        publicationNumber: '91040.2401',
        releaseDate: '28 Februari 2024',
        coverGradient: 'from-cyan-600 via-teal-700 to-slate-900',
        description: 'Publikasi tahunan komprehensif yang memuat ringkasan neraca ekonomi regional dan indikator makro daerah.',
        pageCount: 382,
        pdfUrl: '#download-bda-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      }
    ],
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Februari 2025'
  },

  // 7. PDRB Per Kapita
  {
    id: 'pdrb-per-kapita',
    code: 'PDRB_KAPITA',
    slug: 'pdrb-per-kapita',
    name: 'PDRB Per Kapita',
    shortName: 'PDRB Per Kapita',
    category: 'ekonomi',
    unit: 'Juta Rp',
    definition: 'Nilai PDRB atas dasar harga berlaku dibagi dengan jumlah penduduk pertengahan tahun, menggambarkan rata-rata nilai output per jiwa.',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 356.17 },
      { year: 2022, value: 392.07 },
      { year: 2023, value: 438.85 },
      { year: 2024, value: 574.98 },
      { year: 2025, value: 621.84 }
    ],
    insightSnippet: 'PDRB per kapita Teluk Bintuni mencapai Rp 621,84 Juta/orang/tahun pada 2025, mencerminkan tingginya produktivitas sektor industri pengolahan migas daerah.',
    story: {
      title: 'Tingkat Produktivitas dan Output Ekonomi per Jiwa',
      subtitle: 'Kekayaan Sumber Daya Alam dan Kapasitas Produksi per Kapita yang Tinggi',
      summaryQuote: 'PDRB per kapita Rp 621,84 Juta/tahun mencerminkan kapasitas nilai tambah ekonomi makro yang sangat tinggi di kawasan Teluk Bintuni.',
      paragraphs: [
        'PDRB per kapita atas dasar harga berlaku di Kabupaten Teluk Bintuni pada tahun 2025 mencapai Rp 621,84 Juta per orang per tahun, meningkat dari Rp 574,98 Juta pada tahun 2024.',
        'Tingginya angka ini merefleksikan besarnya kontribusi industri pengolahan gas alam cair (LNG) berskala global terhadap pembentukan nilai tambah regional berbanding dengan jumlah penduduk.'
      ],
      keyHighlights: [
        { label: 'PDRB per Kapita 2025', value: 'Rp 621,84 Juta', description: 'Nilai output rata-rata per orang/tahun' },
        { label: 'Setara Bulanan', value: 'Rp 51,82 Juta', description: 'Rata-rata output per jiwa/bulan' },
        { label: 'Kenaikan Nilai', value: '+Rp 46,86 Juta', description: 'Peningkatan dibanding tahun 2024' }
      ],
      policyContext: 'Tingginya produktivitas per kapita diarahkan untuk mempercepat pemerataan pembangunan infrastruktur dasar antardistrik.',
      humanScaleMeaning: {
        ratioText: 'Rata-rata Rp 621,84 Juta / Orang / Tahun',
        numerator: 62,
        denominator: 100,
        description: 'Jika seluruh nilai bruto barang dan jasa yang dihasilkan dibagi rata ke seluruh penduduk Teluk Bintuni, rata-rata output per orang mencapai Rp 621,84 Juta setahun (setara ~Rp 51,82 Juta/bulan).',
        contextNote: 'PDRB per kapita merupakan ukuran produktivitas output makro wilayah, bukan pendapatan riil perorangan rumah tangga.'
      }
    },
    publications: [
      {
        id: 'pub-pdrb-kapita-2024',
        title: 'Produk Domestik Regional Bruto Kabupaten Teluk Bintuni Menurut Lapangan Usaha 2020-2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '5201001.9104',
        publicationNumber: '91040.2405',
        releaseDate: '28 Februari 2025',
        coverGradient: 'from-teal-600 via-emerald-700 to-slate-900',
        description: 'Menyajikan indikator agregat PDRB per kapita dan dinamika perbandingan antarwilayah kabupaten/kota di Papua Barat.',
        pageCount: 168,
        pdfUrl: '#download-pdrb-kapita-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      },
      {
        id: 'pub-bda-kapita-2024',
        title: 'Kabupaten Teluk Bintuni Dalam Angka 2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '1102001.9104',
        publicationNumber: '91040.2401',
        releaseDate: '28 Februari 2024',
        coverGradient: 'from-cyan-600 via-teal-700 to-slate-900',
        description: 'Statistik kependudukan, ketenagakerjaan, dan output ekonomi per kapita tahunan.',
        pageCount: 382,
        pdfUrl: '#download-bda-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      }
    ],
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Februari 2025'
  },

  // 8. Angka Harapan Hidup
  {
    id: 'angka-harapan-hidup',
    code: 'AHH',
    slug: 'angka-harapan-hidup',
    name: 'Angka Harapan Hidup (AHH)',
    shortName: 'Angka Harapan Hidup',
    category: 'kesehatan',
    unit: 'Tahun',
    definition: 'Rata-rata perkiraan banyak tahun yang dapat ditempuh oleh seseorang sejak lahir dengan asumsi tidak ada perubahan pola mortalitas menurut umur.',
    polarity: 'higher_is_better',
    featured: true,
    dataPoints: [
      { year: 2021, value: 67.01 },
      { year: 2022, value: 67.38 },
      { year: 2023, value: 67.75 },
      { year: 2024, value: 68.05 },
      { year: 2025, value: 68.49 }
    ],
    insightSnippet: 'Angka Harapan Hidup meningkat menjadi 68,49 tahun pada 2025, didukung oleh perbaikan layanan kesehatan ibu-anak dan pengendalian penyakit menular.',
    story: {
      title: 'Membangun Generasi Sehat, Menambah Usia Harapan',
      subtitle: 'Peningkatan Akses Layanan Kesehatan Dasar dan Derajat Hidup Warga',
      summaryQuote: 'Kenaikan AHH menjadi 68,49 tahun membuktikan perbaikan berkesinambungan fasilitas kesehatan dan sanitasi lingkungan masyarakat.',
      paragraphs: [
        'Angka Harapan Hidup saat Lahir (AHH) di Kabupaten Teluk Bintuni terus mengalami tren peningkatan dan mencapai 68,49 tahun pada tahun 2025.',
        'Inovasi layanan kesehatan seperti Puskesmas Keliling Perairan dan program pengendalian malaria terbukti menurunkan angka kematian bayi serta memperpanjang usia harapan hidup masyarakat.'
      ],
      keyHighlights: [
        { label: 'AHH 2025', value: '68,49 Tahun', description: 'Perkiraan usia hidup bayi baru lahir' },
        { label: 'Kenaikan Tahunan', value: '+0,44 Tahun', description: 'Peningkatan usia harapan dibanding 2024' },
        { label: 'Inovasi Unggulan', value: 'EDAT & Puskesmas Keliling', description: 'Akses medis terjangkau di pesisir & rawa' }
      ],
      policyContext: 'Penguatan layanan gizi ibu-anak dan intervensi deteksi dini penyakit menular terus memperkuat dimensi umur panjang dan hidup sehat.',
      humanScaleMeaning: {
        ratioText: 'Rata-rata Harapan Hidup 68,49 Tahun',
        numerator: 68,
        denominator: 100,
        description: 'Bayi yang baru lahir di Kabupaten Teluk Bintuni pada tahun 2025 memiliki perkiraan peluang bertahan hidup hingga usia 68,49 tahun.',
        contextNote: 'Angka Harapan Hidup merupakan cerminan derajat kesehatan masyarakat, penurunan angka kematian bayi, dan akses fasilitas medis dasar.'
      }
    },
    publications: [
      {
        id: 'pub-ipm-ahh-2024',
        title: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '4102002.9104',
        publicationNumber: '91040.25034',
        issnOrIsbn: '2089-6727',
        frequency: 'Tahunan',
        releaseDate: 'Desember 2025',
        language: 'Indonesia',
        fileSize: '6.5 MB',
        coverImage: '/images/cover-ipm-2024.png',
        coverGradient: 'from-blue-700 via-indigo-900 to-slate-950',
        description: 'Publikasi resmi evaluasi IPM mencakup dimensi umur panjang & hidup sehat (AHH), pengetahuan (HLS & RLS), serta standar hidup layak di Teluk Bintuni.',
        abstraction: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2024 merupakan publikasi tahunan Badan Pusat Statistik (BPS) edisi kesepuluh yang memberikan gambaran umum mengenai capaian pembangunan manusia di Kabupaten Teluk Bintuni tahun 2024, mencakup situasi pembangunan manusia, hasil penghitungan besaran IPM beserta indeks komponen penyusunnya (UHH, HLS, RLS, dan pengeluaran riil per kapita), serta disparitas IPM antarwilayah.',
        pageCount: 70,
        pdfUrl: '/documents/indeks-pembangunan-manusia-teluk-bintuni-2024.pdf',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      },
      {
        id: 'pub-bda-ahh-2024',
        title: 'Kabupaten Teluk Bintuni Dalam Angka 2024',
        year: 2024,
        publisher: 'BPS Kabupaten Teluk Bintuni',
        catalogNumber: '1102001.9104',
        publicationNumber: '91040.2401',
        releaseDate: '28 Februari 2024',
        coverGradient: 'from-cyan-600 via-teal-700 to-slate-900',
        description: 'Statistik kesehatan, jumlah tenaga medis, fasilitas puskesmas/rumah sakit, dan capaian indikator mortalitas anak.',
        pageCount: 382,
        pdfUrl: '#download-bda-2024',
        bpsUrl: 'https://telukbintunikab.bps.go.id'
      }
    ],
    source: 'Indeks Pembangunan Manusia - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Desember 2024'
  },

  // 9. Gini Ratio
  {
    id: 'gini-ratio',
    code: 'GINI',
    slug: 'gini-ratio',
    name: 'Gini Ratio',
    shortName: 'Gini Ratio',
    category: 'sosial',
    unit: '',
    definition: 'Ukuran derajat ketimpangan distribusi pendapatan atau pengeluaran penduduk yang berkisar antara 0 (kemerataan sempurna) hingga 1 (ketimpangan sempurna).',
    polarity: 'lower_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 0.366 },
      { year: 2022, value: 0.377 },
      { year: 2023, value: 0.383 },
      { year: 2024, value: 0.401 },
      { year: 2025, value: 0.447 }
    ],
    insightSnippet: 'Gini Ratio tercatat sebesar 0,447 pada 2025 (kategori ketimpangan sedang), menunjukkan tantangan perlunya penguatan pemerataan manfaat ekonomi daerah.',
    story: {
      title: 'Menyusutkan Jurang Kesenjangan Ekonomi Daerah',
      subtitle: 'Tantangan Distribusi Pendapatan dan Pemerataan Antarwilayah di Teluk Bintuni',
      summaryQuote: 'Gini Ratio 0,447 menegaskan pentingnya memperluas pemerataan hasil pembangunan dan perlindungan daya beli bagi kelompok masyarakat bawah.',
      paragraphs: [
        'Gini Ratio Kabupaten Teluk Bintuni pada tahun 2025 tercatat sebesar 0,447, meningkat 0,046 poin dibanding capaian tahun 2024 yang tercatat sebesar 0,401.',
        'Kenaikan ini didorong oleh melebarnya kesenjangan pengeluaran seiring pesatnya akselerasi penerimaan pada sektor industri padat modal/migas dibandingkan sektor perdesaan dan informal.'
      ],
      keyHighlights: [
        { label: 'Gini Ratio 2025', value: '0,447', description: 'Kategori ketimpangan Sedang (skala BPS)' },
        { label: 'Kenaikan Poin', value: '+0,046 Poin', description: 'Perubahan dibanding tahun 2024' },
        { label: 'Fokus Kebijakan', value: 'Pemerataan Sosial', description: 'Perlindungan daya beli 40% terbawah' }
      ],
      policyContext: 'Pemberdayaan ekonomi kerakyatan dan perlindungan daya beli kelompok 40% terbawah secara bertahap menekan kesenjangan antarwilayah.',
      humanScaleMeaning: {
        ratioText: 'Indeks Ketimpangan 0,447 (Kategori Sedang)',
        numerator: 45,
        denominator: 100,
        description: 'Koefisien Gini berada pada angka 0,447 (skala 0–1), masuk dalam kategori ketimpangan sedang yang menunjukkan perlunya akselerasi pemerataan ekonomi antardistrik.',
        contextNote: 'Nilai Gini berkisar antara 0 (kemerataan sempurna) hingga 1 (ketimpangan sempurna). Standar BPS mengkategorikan 0,4–0,5 sebagai ketimpangan sedang.'
      }
    },
    publications: INKESRA_PUBLICATIONS,
    source: 'Indikator Kesejahteraan Rakyat - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Agustus 2024'
  }
];

/**
 * Calculates dynamic trend metrics from data points
 */
export function processIndicators(rawList: typeof RAW_INDICATORS): StrategicIndicator[] {
  return rawList.map((item) => {
    const sortedPoints = [...item.dataPoints].sort((a, b) => a.year - b.year);
    const len = sortedPoints.length;
    const current = sortedPoints[len - 1] || { year: 2024, value: 0 };
    const previous = sortedPoints[len - 2] || { year: 2023, value: current.value };

    const changeValue = parseFloat((current.value - previous.value).toFixed(2));
    const changePercent = previous.value !== 0 
      ? parseFloat(((changeValue / Math.abs(previous.value)) * 100).toFixed(2)) 
      : 0;

    let trendDirection: 'up' | 'down' | 'neutral' = 'neutral';
    if (changeValue > 0) trendDirection = 'up';
    else if (changeValue < 0) trendDirection = 'down';

    let isPositiveChange = true;
    if (item.polarity === 'higher_is_better') {
      isPositiveChange = changeValue >= 0;
    } else if (item.polarity === 'lower_is_better') {
      isPositiveChange = changeValue <= 0;
    }

    return {
      ...item,
      currentYear: current.year,
      currentValue: current.value,
      previousYear: previous.year,
      previousValue: previous.value,
      changeValue,
      changePercent,
      trendDirection,
      isPositiveChange
    };
  });
}

export const STRATEGIC_INDICATORS: StrategicIndicator[] = processIndicators(RAW_INDICATORS);

export function getIndicatorBySlug(slug: string): StrategicIndicator | undefined {
  if (!slug) return undefined;
  const cleanSlug = slug.toLowerCase().trim();
  
  // Direct match
  const direct = STRATEGIC_INDICATORS.find((i) => 
    i.slug === cleanSlug || 
    i.id === cleanSlug || 
    i.code.toLowerCase() === cleanSlug
  );
  if (direct) return direct;

  // Alias maps
  if (cleanSlug === 'kemiskinan' || cleanSlug === 'poverty') {
    return STRATEGIC_INDICATORS.find((i) => i.slug === 'angka-kemiskinan');
  }
  if (cleanSlug === 'tpt' || cleanSlug === 'pengangguran') {
    return STRATEGIC_INDICATORS.find((i) => i.slug === 'tingkat-pengangguran-terbuka');
  }
  if (cleanSlug === 'tpak') {
    return STRATEGIC_INDICATORS.find((i) => i.slug === 'tingkat-partisipasi-angkatan-kerja');
  }
  if (cleanSlug === 'ahh' || cleanSlug === 'harapan-hidup') {
    return STRATEGIC_INDICATORS.find((i) => i.slug === 'angka-harapan-hidup');
  }
  if (cleanSlug === 'pertumbuhan' || cleanSlug === 'growth') {
    return STRATEGIC_INDICATORS.find((i) => i.slug === 'pertumbuhan-ekonomi');
  }

  return undefined;
}

export function getIndicatorsByCategory(category: IndicatorCategory | 'all'): StrategicIndicator[] {
  if (category === 'all') return STRATEGIC_INDICATORS;
  return STRATEGIC_INDICATORS.filter((i) => i.category === category);
}

export const TELUK_BINTUNI_METRICS = {
  regencyName: 'Kabupaten Teluk Bintuni',
  provinceName: 'Papua Barat',
  capitalName: 'Bintuni',
  motto: 'Sisar Matiti',
  totalDistricts: 24,
  totalVillages: 117,
  population: '80.120 Jiwa (2024)',
  areaKm2: '18.637 km²',
  lastUpdatedDate: '17 Agustus 2025'
};
