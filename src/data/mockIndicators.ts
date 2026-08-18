import { StrategicIndicator, IndicatorCategoryMeta, IndicatorCategory } from '@/types/indicator';

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
      { year: 2020, value: 30.12 },
      { year: 2021, value: 29.48 },
      { year: 2022, value: 28.55 },
      { year: 2023, value: 27.24 },
      { year: 2024, value: 26.15 }
    ],
    insightSnippet: 'Angka kemiskinan turun 1,09 persen poin pada 2024 berkat program perlindungan sosial daerah dan penyerapan tenaga kerja lokal.',
    story: {
      title: 'Menekan Angka Kemiskinan Menuju Kesejahteraan Merata',
      subtitle: 'Dinamika Penurunan Beban Pengeluaran Rumah Tangga di Teluk Bintuni',
      summaryQuote: 'Penurunan angka kemiskinan menjadi 26,15% mencerminkan efektivitas jaring pengaman sosial dan program bantuan produktif masyarakat.',
      paragraphs: [
        'Pada tahun 2024, persentase penduduk miskin di Kabupaten Teluk Bintuni tercatat sebesar 26,15%, berkurang dari 27,24% pada tahun 2023.',
        'Meskipun masih menghadapi tantangan geografis di wilayah pesisir dan pedalaman, intervensi bantuan langsung pangan dan pembangunan konektivitas antardistrik secara konsisten mempercepat laju pengentasan kemiskinan.'
      ],
      keyHighlights: [
        { label: 'Capaian 2024', value: '26.15 %', description: 'Persentase penduduk miskin' },
        { label: 'Penurunan YoY', value: '-1.09 %', description: 'Pengurangan persentase dibanding 2023' },
        { label: 'Tren 5 Tahun', value: 'Turun Berkelanjutan', description: 'Konsisten menurun dari 30.12% (2020)' }
      ],
      policyContext: 'Sinergi program bantuan pangan daerah dan optimalisasi dana desa diarahkan untuk program padat karya tunai di distrik-distrik prioritas.'
    },
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
      { year: 2020, value: 520150 },
      { year: 2021, value: 546800 },
      { year: 2022, value: 578450 },
      { year: 2023, value: 612300 },
      { year: 2024, value: 642500 }
    ],
    insightSnippet: 'Garis Kemiskinan berada pada angka Rp 642.500 per kapita/bulan pada 2024, dipengaruhi oleh dinamika harga komoditas pangan pokok.',
    story: {
      title: 'Standar Kebutuhan Dasar dan Batas Kemiskinan',
      subtitle: 'Memahami Komponen Kebutuhan Pangan dan Non-Pangan Warga Bintuni',
      summaryQuote: 'Garis Kemiskinan mencerminkan nilai rupiah minimum pemenuhan nutrisi dan kebutuhan dasar per kapita per bulan.',
      paragraphs: [
        'Garis Kemiskinan (GK) Kabupaten Teluk Bintuni pada tahun 2024 tercatat sebesar Rp 642.500 per kapita per bulan, meningkat Rp 30.200 dibanding tahun 2023.',
        'Kenaikan garis kemiskinan dipengaruhi oleh pergerakan harga komoditas pokok seperti beras, ikan segar, telur ayam, serta biaya perumahan dan transportasi antardistrik.'
      ],
      keyHighlights: [
        { label: 'GK 2024', value: 'Rp 642.500', description: 'Nilai garis kemiskinan per kapita/bulan' },
        { label: 'Kenaikan Nilai', value: '+Rp 30.200', description: 'Perubahan nominal dibanding 2023' },
        { label: 'Komposisi', value: 'Pangan & Non-Pangan', description: 'Kebutuhan nutrisi 2.100 kkal & kebutuhan dasar' }
      ]
    },
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
      { year: 2020, value: 7.92 },
      { year: 2021, value: 7.34 },
      { year: 2022, value: 6.81 },
      { year: 2023, value: 6.15 },
      { year: 2024, value: 5.48 }
    ],
    insightSnippet: 'TPT berhasil ditekan ke angka 5,48% seiring perluasan pelatihan vokasi di Pusat Pelatihan Teknik Industri Migas (P2TIM) Bintuni.',
    story: {
      title: 'Peluang Kerja dan Penyerapan Tenaga Kerja Lokal',
      subtitle: 'Pemberdayaan Tenaga Kerja Muda Melalui Pelatihan Vokasi Berstandar Industri',
      summaryQuote: 'Penurunan TPT ke 5,48% membuktikan keberhasilan transfer keahlian bagi tenaga kerja muda daerah untuk diserap di sektor industri dan jasa.',
      paragraphs: [
        'Tingkat Pengangguran Terbuka (TPT) Kabupaten Teluk Bintuni pada Agustus 2024 tercatat sebesar 5,48 persen, menurun 0,67 persen poin dari 6,15 persen pada tahun 2023.',
        'Penguatan pelatihan teknik vokasi melalui P2TIM Teluk Bintuni telah membekali tenaga kerja lokal dengan sertifikasi keahlian industri berskala nasional dan internasional.'
      ],
      keyHighlights: [
        { label: 'Realisasi TPT 2024', value: '5.48 %', description: 'Persentase penganggur dari angkatan kerja' },
        { label: 'Penurunan Tahunan', value: '-0.67 %', description: 'Penurunan dibanding Agustus 2023' },
        { label: 'Inisiatif Unggulan', value: 'P2TIM Bintuni', description: 'Pelatihan vokasi industri migas gratis bersertifikasi' }
      ]
    },
    source: 'Statistik Ketenagakerjaan - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'November 2024'
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
      { year: 2020, value: 67.45 },
      { year: 2021, value: 68.20 },
      { year: 2022, value: 69.15 },
      { year: 2023, value: 70.32 },
      { year: 2024, value: 71.85 }
    ],
    insightSnippet: 'TPAK Teluk Bintuni naik menjadi 71,85% pada 2024, menandakan tingginya partisipasi dan antusiasme masyarakat dalam pasar kerja.',
    story: {
      title: 'Dinamika Partisipasi Angkatan Kerja Produktif',
      subtitle: 'Meningkatnya Keterlibatan Masyarakat Usia Produktif dalam Kegiatan Ekonomi',
      summaryQuote: 'Kenaikan TPAK mencapai 71,85% menandakan tingginya keaktifan penduduk usia kerja dalam menggerakkan perekonomian daerah.',
      paragraphs: [
        'Tingkat Partisipasi Angkatan Kerja (TPAK) Kabupaten Teluk Bintuni pada tahun 2024 mencapai 71,85 persen, meningkat 1,53 persen poin dibanding tahun 2023 (70,32 persen).',
        'Peningkatan ini didorong oleh semakin banyaknya angkatan kerja muda dan perempuan yang terserap dalam aktivitas ekonomi produktif, perikanan maritim, perkebunan, dan sektor perdagangan.'
      ],
      keyHighlights: [
        { label: 'TPAK 2024', value: '71.85 %', description: 'Persentase angkatan kerja dari usia kerja' },
        { label: 'Kenaikan Tahunan', value: '+1.53 %', description: 'Peningkatan dibanding tahun 2023' },
        { label: 'Dampak Positif', value: 'Ekspansi Pasar Kerja', description: 'Peningkatan partisipasi perempuan & pemuda' }
      ]
    },
    source: 'Statistik Ketenagakerjaan - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'November 2024'
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
      { year: 2020, value: -1.24 },
      { year: 2021, value: 2.85 },
      { year: 2022, value: 4.12 },
      { year: 2023, value: 5.68 },
      { year: 2024, value: 6.42 }
    ],
    insightSnippet: 'Ekonomi Teluk Bintuni tumbuh 6,42% pada 2024, didorong oleh sektor industri pengolahan migas, konstruksi, dan perikanan tangkap.',
    story: {
      title: 'Akselerasi Ekonomi di Jantung Energi Papua Barat',
      subtitle: 'Sektor Industri Pengolahan Migas dan Maritim Mendorong Pertumbuhan Kuat',
      summaryQuote: 'Pertumbuhan ekonomi 6,42% menempatkan Teluk Bintuni sebagai lokomotif ekspansi ekonomi di kawasan Papua Barat.',
      paragraphs: [
        'Perekonomian Kabupaten Teluk Bintuni pada tahun 2024 tumbuh sebesar 6,42 persen, meningkat dari capaian tahun 2023 yang tercatat sebesar 5,68 persen.',
        'Sektor industri pengolahan gas alam cair (LNG), konstruksi fasilitas penunjang, serta sektor pertanian dan perikanan maritim menjadi penggerak utama pertumbuhan ekonomi.'
      ],
      keyHighlights: [
        { label: 'Laju 2024', value: '6.42 %', description: 'Pertumbuhan riil PDRB ADHK' },
        { label: 'Kenaikan Laju', value: '+0.74 %', description: 'Percepatan dibanding tahun 2023' },
        { label: 'Sektor Penopang', value: 'Industri Pengolahan', description: 'Kontributor utama nilai tambah ekonomi' }
      ],
      policyContext: 'Hilirisasi gas alam dan pengembangan kawasan industri terpadu menjadi fondasi jangka panjang penguatan struktur ekonomi daerah.'
    },
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
    unit: 'Miliar Rp',
    definition: 'Nilai total Produk Domestik Regional Bruto atas dasar harga berlaku yang dihasilkan oleh seluruh lapangan usaha dalam satu tahun.',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2020, value: 31250.40 },
      { year: 2021, value: 34120.80 },
      { year: 2022, value: 37680.50 },
      { year: 2023, value: 41850.20 },
      { year: 2024, value: 45620.80 }
    ],
    insightSnippet: 'PDRB Tahunan atas dasar harga berlaku menembus Rp 45.620,8 Miliar pada 2024, mencerminkan besaran skala kue ekonomi daerah.',
    story: {
      title: 'Skala dan Kapasitas Ekonomi Daerah Bintuni',
      subtitle: 'Penciptaan Nilai Tambah Bruto Barang dan Jasa Sepanjang Tahun',
      summaryQuote: 'PDRB Tahunan mencapai Rp 45,62 Triliun, merefleksikan peran vital Teluk Bintuni dalam output ekonomi regional Papua.',
      paragraphs: [
        'Total PDRB atas dasar harga berlaku (ADHB) Kabupaten Teluk Bintuni pada tahun 2024 mencapai Rp 45.620,80 Miliar (Rp 45,62 Triliun), naik dari Rp 41.850,20 Miliar pada tahun 2023.',
        'Peningkatan nilai nominal ini mencerminkan tingginya volume produksi komoditas strategis daerah serta peningkatan transaksi riil di berbagai sektor ekonomi.'
      ],
      keyHighlights: [
        { label: 'PDRB ADHB 2024', value: 'Rp 45.620,8 M', description: 'Nilai total output ekonomi tahunan' },
        { label: 'Pertumbuhan Nilai', value: '+9.01 %', description: 'Kenaikan nominal dibanding 2023' },
        { label: 'Basis Perhitungan', value: 'Harga Berlaku (ADHB)', description: 'Mencerminkan nilai pasar tahun berjalan' }
      ]
    },
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
      { year: 2020, value: 385.40 },
      { year: 2021, value: 412.80 },
      { year: 2022, value: 445.60 },
      { year: 2023, value: 489.20 },
      { year: 2024, value: 524.70 }
    ],
    insightSnippet: 'PDRB per kapita Teluk Bintuni mencapai Rp 524,7 Juta/tahun pada 2024, didorong oleh tingginya produktivitas sektor industri bernilai tambah tinggi.',
    story: {
      title: 'Tingkat Produktivitas dan Output Ekonomi per Jiwa',
      subtitle: 'Kekayaan Sumber Daya Alam dan Kapasitas Produksi per Kapita yang Tinggi',
      summaryQuote: 'PDRB per kapita Rp 524,7 Juta mencerminkan modal produktivitas tinggi untuk mendukung transformasi kesejahteraan warga.',
      paragraphs: [
        'PDRB per kapita ADHB di Kabupaten Teluk Bintuni pada tahun 2024 mencapai Rp 524,70 Juta per kapita per tahun, meningkat dari Rp 489,20 Juta pada tahun 2023.',
        'Angka yang tinggi ini merupakan representasi tingginya nilai output industri manufaktur gas alam cair yang beroperasi di wilayah Teluk Bintuni berbanding dengan populasi penduduk.'
      ],
      keyHighlights: [
        { label: 'PDRB per Kapita 2024', value: 'Rp 524.7 Juta', description: 'Nilai output rata-rata per jiwa/tahun' },
        { label: 'Kenaikan Nilai', value: '+Rp 35.5 Juta', description: 'Pertumbuhan dibanding tahun 2023' },
        { label: 'Status Capaian', value: 'Tertinggi Regional', description: 'Salah satu yang tertinggi di Indonesia' }
      ]
    },
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
      { year: 2020, value: 64.12 },
      { year: 2021, value: 64.45 },
      { year: 2022, value: 64.91 },
      { year: 2023, value: 65.38 },
      { year: 2024, value: 65.82 }
    ],
    insightSnippet: 'Angka Harapan Hidup meningkat menjadi 65,82 tahun pada 2024, didukung oleh perbaikan layanan kesehatan ibu-anak dan pengendalian penyakit menular.',
    story: {
      title: 'Membangun Generasi Sehat, Menambah Usia Harapan',
      subtitle: 'Peningkatan Akses Layanan Kesehatan Dasar dan Derajat Hidup Warga',
      summaryQuote: 'Kenaikan AHH menjadi 65,82 tahun membuktikan perbaikan berkesinambungan fasilitas kesehatan dan sanitasi lingkungan masyarakat.',
      paragraphs: [
        'Angka Harapan Hidup saat Lahir (AHH) di Kabupaten Teluk Bintuni terus mengalami tren peningkatan dan mencapai 65,82 tahun pada tahun 2024.',
        'Inovasi layanan kesehatan seperti Puskesmas Keliling Perairan dan program pengendalian malaria terbukti menurunkan angka kematian bayi serta memperpanjang usia harapan hidup masyarakat.'
      ],
      keyHighlights: [
        { label: 'AHH 2024', value: '65.82 Tahun', description: 'Perkiraan usia hidup bayi baru lahir' },
        { label: 'Kenaikan Tahunan', value: '+0.44 Tahun', description: 'Peningkatan usia harapan dibanding 2023' },
        { label: 'Inovasi Unggulan', value: 'EDAT & Puskesmas Keliling', description: 'Akses medis terjangkau di pesisir & rawa' }
      ]
    },
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
    unit: 'Rasio',
    definition: 'Ukuran derajat ketimpangan distribusi pendapatan atau pengeluaran penduduk yang berkisar antara 0 (kemerataan sempurna) hingga 1 (ketimpangan sempurna).',
    polarity: 'lower_is_better',
    featured: false,
    dataPoints: [
      { year: 2020, value: 0.385 },
      { year: 2021, value: 0.378 },
      { year: 2022, value: 0.364 },
      { year: 2023, value: 0.352 },
      { year: 2024, value: 0.341 }
    ],
    insightSnippet: 'Gini Ratio turun ke 0,341 pada 2024 (kategori ketimpangan rendah-sedang), menunjukkan distribusi pendapatan yang semakin merata.',
    story: {
      title: 'Menyusutkan Jurang Kesenjangan Ekonomi Daerah',
      subtitle: 'Distribusi Pendapatan yang Kian Inklusif bagi Seluruh Lapisan Masyarakat',
      summaryQuote: 'Gini Ratio 0,341 membuktikan bahwa manfaat pertumbuhan ekonomi dinikmati semakin merata antarlapisan warga di pedesaan dan perkotaan.',
      paragraphs: [
        'Gini Ratio Kabupaten Teluk Bintuni pada tahun 2024 berada pada level 0,341, turun 0,011 poin dari capaian tahun 2023 yang sebesar 0,352.',
        'Pemberdayaan ekonomi kerakyatan, bantuan permodalan perikanan tangkap, serta keterlibatan koperasi lokal dalam rantai pasok telah memperkuat daya beli kelompok masyarakat 40% terbawah.'
      ],
      keyHighlights: [
        { label: 'Gini Ratio 2024', value: '0.341', description: 'Kategori ketimpangan Rendah - Sedang' },
        { label: 'Perubahan', value: '-0.011 Poin', description: 'Ketimpangan berhasil diturunkan' },
        { label: 'Pemerataan', value: 'Distribusi Membaik', description: 'Penguatan ekonomi kelompok bawah & UMKM' }
      ]
    },
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
  return STRATEGIC_INDICATORS.find((i) => i.slug === slug || i.id === slug || i.code.toLowerCase() === slug.toLowerCase());
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
