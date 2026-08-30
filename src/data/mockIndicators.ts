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

export const PDRB_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-pdrb-lapus-2021-2025',
    title: 'Produk Domestik Regional Bruto Kabupaten Teluk Bintuni menurut Lapangan Usaha 2021-2025',
    year: 2026,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '9302021.9104',
    publicationNumber: '91040.26004',
    issnOrIsbn: '2686-4029',
    frequency: 'Tahunan',
    releaseDate: '6 April 2026',
    language: 'Indonesia dan Inggris',
    fileSize: '6.93 MB',
    coverImage: '/images/cover-pdrb-2025.png',
    coverGradient: 'from-emerald-700 via-teal-900 to-slate-950',
    description: 'Publikasi resmi yang menyajikan tinjauan perkembangan perekonomian, struktur lapangan usaha, pertumbuhan riil, dan PDRB per kapita Kabupaten Teluk Bintuni 2021-2025.',
    abstraction: 'Buku Produk Domestik Regional Bruto Kabupaten Teluk Bintuni menurut Lapangan Usaha Tahun 2021-2025 ini merupakan kelanjutan dari penerbitan tahun-tahun sebelumnya yang disusun oleh BPS Kabupaten Teluk Bintuni. Publikasi ini menyajikan tinjauan perkembangan perekonomian Kabupaten Teluk Bintuni secara deskriptif. Dalam buku ini juga ditampilkan tabel-tabel PDRB tahun 2021-2025 atas dasar harga berlaku dan harga konstan 2010 dalam bentuk nilai nominal dan persentase.',
    pageCount: 126,
    pdfUrl: '/documents/pdrb-kabupaten-teluk-bintuni-menurut-lapangan-usaha-2021-2025.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2026/04/06/222ca15c8efa0db962dae705/produk-domestik-regional-bruto-kabupaten-teluk-bintuni-menurut-lapangan-usaha-2021-2025.html'
  }
];

export const IPM_PUBLICATIONS: Publication[] = [
  {
    id: 'pub-ipm-2024',
    title: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2024',
    year: 2024,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102002.9104',
    publicationNumber: '91040.25032',
    issnOrIsbn: '2089-6727',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2025',
    language: 'Indonesia',
    fileSize: '6.21 MB',
    coverImage: '/images/cover-ipm-2024.png',
    coverGradient: 'from-teal-800 via-cyan-900 to-slate-950',
    description: 'Publikasi resmi tahunan BPS edisi kesepuluh yang menyajikan situasi pembangunan manusia, capaian IPM, serta komponen penyusunnya (UHH, HLS, RLS, dan pengeluaran per kapita disesuaikan).',
    abstraction: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2024 merupakan publikasi tahunan Badan Pusat Statistik (BPS) yang telah dipublikasikan sejak tahun 2010 dan saat ini telah sampai edisi kesepuluh. Secara garis besar publikasi ini memberikan gambaran umum mengenai kondisi capaian pembangunan manusia di Kabupaten Teluk Bintuni tahun 2024. Adapun data dan informasi yang disajikan terdiri dari situasi pembangunan manusia di Kabupaten Teluk Bintuni, hasil penghitungan besaran IPM beserta indeks komponen-komponen penyusunnya serta perkembangannya, disparitas IPM antarwilayah, dan posisi absolut antarwilayah dalam pembangunan ekonomi dan pembangunan manusia secara simultan. Data dan informasi pembangunan manusia Kabupaten Teluk Bintuni yang tersaji dalam publikasi ini diharapkan dapat membantu pemerintah daerah, dunia usaha, dunia pendidikan, dan masyarakat dalam menyusun strategi dan mengupayakan pembangunan yang lebih baik dan berkelanjutan.',
    pageCount: 52,
    pdfUrl: '/documents/indeks-pembangunan-manusia-teluk-bintuni-2024.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2025/12/30/9f1506797293a2c8991574c6/indeks-pembangunan-manusia-kabupaten-teluk-bintuni-2024.html'
  },
  {
    id: 'pub-ipm-2023',
    title: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2023',
    year: 2023,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102002.9104',
    publicationNumber: '91040.24005',
    issnOrIsbn: '2089-6727',
    frequency: 'Tahunan',
    releaseDate: '9 Agustus 2024',
    language: 'Indonesia',
    fileSize: '7.79 MB',
    coverImage: '/images/cover-ipm-2023.png',
    coverGradient: 'from-blue-800 via-indigo-900 to-slate-950',
    description: 'Publikasi tahunan BPS edisi kesembilan yang menjelaskan tentang IPM dan menyajikan gambaran umum kondisi capaian pembangunan manusia di Teluk Bintuni tahun 2023.',
    abstraction: 'Publikasi Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2023 ini merupakan publikasi tahunan Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni. Publikasi ini menjelaskan tentang Indeks Pembangunan Manusia (IPM) dan menyajikan gambaran umum kondisi pembangunan manusia di Kabupaten Teluk Bintuni tahun 2023. Adapun data dan informasi yang disajikan terdiri atas: kondisi pembangunan manusia di Kabupaten Teluk Bintuni, hasil penghitungan besaran IPM beserta komponen-komponen serta perkembangannya, disparitas IPM antarwilayah, dan posisi absolut antar wilayah dalam pembangunan ekonomi dan pembangunan manusia secara simultan.',
    pageCount: 52,
    pdfUrl: '/documents/indeks-pembangunan-manusia-teluk-bintuni-2023.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2024/08/09/47d073da90851b8b614d0c8e/indeks-pembangunan-manusia-kabupaten-teluk-bintuni-2023.html'
  },
  {
    id: 'pub-ipm-2022',
    title: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2022',
    year: 2022,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102002.9104',
    publicationNumber: '91040.2331',
    issnOrIsbn: '2089-6727',
    frequency: 'Tahunan',
    releaseDate: '25 September 2023',
    language: 'Indonesia',
    fileSize: '3.19 MB',
    coverImage: '/images/cover-ipm-2022.png',
    coverGradient: 'from-cyan-800 via-teal-900 to-slate-950',
    description: 'Publikasi tahunan BPS Kabupaten Teluk Bintuni yang menyajikan gambaran umum kondisi capaian pembangunan manusia di Teluk Bintuni tahun 2022.',
    abstraction: 'Publikasi Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2022 ini merupakan publikasi tahunan Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni. Publikasi ini menjelaskan tentang Indeks Pembangunan Manusia (IPM) dan menyajikan gambaran umum kondisi pembangunan manusia di Kabupaten Teluk Bintuni tahun 2022. Adapun data dan informasi yang disajikan terdiri atas: kondisi pembangunan manusia di Kabupaten Teluk Bintuni, hasil penghitungan besaran IPM beserta komponen-komponen serta perkembangannya, disparitas IPM antarwilayah, dan posisi absolut antar wilayah dalam pembangunan ekonomi dan pembangunan manusia secara simultan.',
    pageCount: 53,
    pdfUrl: '/documents/indeks-pembangunan-manusia-teluk-bintuni-2022.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2023/09/25/d03c72b7f527b2398c017af7/indeks-pembangunan-manusia-kabupaten-teluk-bintuni-2022.html'
  },
  {
    id: 'pub-ipm-2021',
    title: 'Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2021',
    year: 2021,
    publisher: 'BPS Kabupaten Teluk Bintuni',
    catalogNumber: '4102002.9104',
    publicationNumber: '91040.2231',
    issnOrIsbn: '2089-6727',
    frequency: 'Tahunan',
    releaseDate: '30 Desember 2022',
    language: 'Indonesia',
    fileSize: '3.68 MB',
    coverImage: '/images/cover-ipm-2021.png',
    coverGradient: 'from-blue-900 via-indigo-950 to-slate-950',
    description: 'Publikasi tahunan BPS Kabupaten Teluk Bintuni yang menyajikan gambaran umum kondisi capaian pembangunan manusia di Teluk Bintuni tahun 2021.',
    abstraction: 'Publikasi Indeks Pembangunan Manusia Kabupaten Teluk Bintuni 2021 ini merupakan publikasi tahunan Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni. Publikasi ini menjelaskan tentang Indeks Pembangunan Manusia (IPM) dan menyajikan gambaran umum kondisi pembangunan manusia di Kabupaten Teluk Bintuni tahun 2021. Adapun data dan informasi yang disajikan terdiri atas: kondisi pembangunan manusia di Kabupaten Teluk Bintuni, hasil penghitungan besaran IPM beserta komponen-komponen serta perkembangannya, disparitas IPM antarwilayah, dan posisi absolut antar wilayah dalam pembangunan ekonomi dan pembangunan manusia secara simultan.',
    pageCount: 53,
    pdfUrl: '/documents/indeks-pembangunan-manusia-teluk-bintuni-2021.pdf',
    bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2022/12/30/7ed669bfed518f181f5b4428/indeks-pembangunan-manusia-kabupaten-teluk-bintuni-2021.html'
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
    definition: 'Nilai rupiah pengeluaran minimum per kapita per bulan yang dibutuhkan seseorang untuk memenuhi kebutuhan pokok makanan (setara 2.100 kkal/hari) dan non-makanan.',
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
        'Garis Kemiskinan (GK) Kabupaten Teluk Bintuni pada tahun 2025 tercatat sebesar Rp810.638 per kapita per bulan, meningkat Rp76.392 dibanding tahun 2024 (Rp734.246). Nilai ini merupakan yang tertinggi kedua di Provinsi Papua Barat setelah Kabupaten Manokwari.',
        'Kenaikan nilai Garis Kemiskinan ini dipengaruhi oleh peningkatan harga komoditas pokok makanan (seperti beras, aneka ikan, telur, dan minyak) serta komoditas bukan makanan (seperti biaya perumahan dan aneka barang/jasa).'
      ],
      keyHighlights: [
        { label: 'GK 2025', value: 'Rp 810.638', description: 'Nilai garis kemiskinan per kapita/bulan' },
        { label: 'Kenaikan Nilai', value: '+Rp 76.392', description: 'Perubahan nominal dibanding 2024' },
        { label: 'Batas Rumah Tangga', value: 'Rp 3.242.552', description: 'Batas minimum per keluarga (asumsi 4 jiwa)' }
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
    definition: 'Persentase jumlah pengangguran terhadap total angkatan kerja (penduduk usia kerja yang bekerja maupun sedang mencari kerja) di Kabupaten Teluk Bintuni.',
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
      summaryQuote: 'Tingkat Pengangguran Terbuka menurun menjadi 3,16%, mencerminkan daya serap pasar kerja yang baik di Kabupaten Teluk Bintuni.',
      paragraphs: [
        'Pada tahun 2024, Tingkat Pengangguran Terbuka (TPT) Kabupaten Teluk Bintuni tercatat sebesar 3,16%, turun 0,36 %-poin dari 3,52% pada tahun 2023.',
        'Penurunan ini menunjukkan membaiknya serapan tenaga kerja di berbagai sektor ekonomi, khususnya sektor jasa yang menjadi penopang utama penyerapan tenaga kerja di Kabupaten Teluk Bintuni.'
      ],
      keyHighlights: [
        { label: 'Realisasi TPT 2024', value: '3,16 %', description: 'Persentase penganggur dari angkatan kerja' },
        { label: 'Penurunan Tahunan', value: '-0,36 %', description: 'Penurunan dibanding tahun 2023' },
        { label: 'Sektor Utama', value: 'Sektor Jasa', description: 'Penopang utama serapan tenaga kerja' }
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
    definition: 'Persentase penduduk usia kerja (15 tahun ke atas) yang termasuk dalam angkatan kerja di Kabupaten Teluk Bintuni.',
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
      summaryQuote: 'TPAK Kabupaten Teluk Bintuni tahun 2024 sebesar 70,07%, mengindikasikan bahwa sekitar 70 dari setiap 100 penduduk usia kerja aktif di pasar kerja.',
      paragraphs: [
        'Tingkat Partisipasi Angkatan Kerja (TPAK) Kabupaten Teluk Bintuni pada periode Agustus 2024 tercatat sebesar 70,07%, meningkat 0,74 %-poin dibandingkan keadaan Agustus 2023 (69,33%).',
        'Partisipasi tenaga kerja laki-laki tercatat sebesar 81,70%, lebih tinggi dibanding perempuan (52,87%). Meskipun demikian, partisipasi kerja perempuan mengalami kenaikan dari 50,03% pada tahun 2023 menjadi 52,87% pada tahun 2024.'
      ],
      keyHighlights: [
        { label: 'TPAK 2024', value: '70,07 %', description: 'Persentase angkatan kerja dari usia kerja' },
        { label: 'Kenaikan Tahunan', value: '+0,74 %', description: 'Peningkatan dibanding tahun 2023' },
        { label: 'Menurut Gender', value: '81,70% | 52,87%', description: 'TPAK Laki-laki (81,70%) & Perempuan (52,87%)' }
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
    definition: 'Laju pertumbuhan Produk Domestik Regional Bruto (PDRB) atas dasar harga konstan yang menggambarkan pertambahan volume produksi barang dan jasa di Kabupaten Teluk Bintuni.',
    polarity: 'higher_is_better',
    featured: true,
    dataPoints: [
      { year: 2021, value: -2.30 },
      { year: 2022, value: 2.01 },
      { year: 2023, value: 6.05 },
      { year: 2024, value: 29.22 },
      { year: 2025, value: 7.92 }
    ],
    insightSnippet: 'Ekonomi Kabupaten Teluk Bintuni tumbuh 7,92% pada 2025, didorong oleh pertumbuhan Industri Pengolahan (9,50%) serta Pertambangan dan Penggalian (6,75%).',
    story: {
      title: 'Dinamika Pertumbuhan Ekonomi Riil Daerah',
      summaryQuote: 'Perekonomian Kabupaten Teluk Bintuni tahun 2025 mencatat pertumbuhan positif sebesar 7,92 persen, murni didorong peningkatan produksi riil barang dan jasa.',
      paragraphs: [
        'Pada tahun 2025, nilai PDRB Kabupaten Teluk Bintuni atas dasar harga konstan 2010 mencapai Rp 37,80 triliun, meningkat dari Rp 35,03 triliun pada tahun 2024 atau mengalami pertumbuhan ekonomi sebesar 7,92 persen.',
        'Pertumbuhan ekonomi tertinggi dicapai oleh lapangan usaha Industri Pengolahan yaitu sebesar 9,50 persen seiring peningkatan kapasitas produksi Train 3 LNG Tangguh yang beroperasi penuh sejak April 2024, disusul lapangan usaha Pertambangan dan Penggalian sebesar 6,75 persen.'
      ],
      keyHighlights: [
        { label: 'Pertumbuhan 2025', value: '7,92 %', description: 'Laju pertumbuhan riil PDRB ADHK' },
        { label: 'Tahun 2024', value: '29,22 %', description: 'Lonjakan operasional awal Train 3' },
        { label: 'Sektor Utama', value: 'Industri Pengolahan', description: 'Tumbuh tertinggi 9,50% (LNG Tangguh)' }
      ],
      policyContext: 'Struktur ekonomi Teluk Bintuni didominasi Industri Pengolahan serta Pertambangan dan Penggalian yang menyumbang 92,45 persen dari total PDRB.',
      humanScaleMeaning: {
        ratioText: 'Laju Pertumbuhan Riil +7,92%',
        numerator: 8,
        denominator: 100,
        description: 'Volume total barang dan jasa yang diproduksi di Kabupaten Teluk Bintuni selama tahun 2025 meningkat 7,92% dibandingkan tahun 2024.',
        contextNote: 'Pertumbuhan dihitung atas dasar harga konstan 2010 (ADHK) guna mengukur peningkatan volume output riil murni tanpa pengaruh inflasi harga.'
      }
    },
    publications: PDRB_PUBLICATIONS,
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'April 2026'
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
    definition: 'Nilai tambah bruto seluruh barang dan jasa yang dihasilkan di wilayah Kabupaten Teluk Bintuni atas dasar harga berlaku pada periode satu tahun untuk menggambarkan kemampuan sumber daya dan struktur ekonomi daerah.',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 31.38 },
      { year: 2022, value: 34.94 },
      { year: 2023, value: 39.54 },
      { year: 2024, value: 52.36 },
      { year: 2025, value: 57.21 }
    ],
    insightSnippet: 'PDRB Teluk Bintuni atas dasar harga berlaku mencapai Rp 57,21 triliun pada tahun 2025, didominasi oleh Industri Pengolahan dan Pertambangan (92,45%).',
    story: {
      title: 'Penciptaan Nilai Tambah dan Struktur PDRB Daerah',
      summaryQuote: 'Nilai PDRB Teluk Bintuni atas dasar harga berlaku pada tahun 2025 mencapai Rp 57,21 triliun, meningkat Rp 4,85 triliun dibandingkan tahun 2024.',
      paragraphs: [
        'Nilai PDRB Kabupaten Teluk Bintuni atas dasar harga berlaku (ADHB) pada tahun 2025 mencapai Rp 57,21 triliun, meningkat sebesar Rp 4,85 triliun dibandingkan tahun 2024 yang mencapai Rp 52,36 triliun. Peningkatan nilai PDRB ini dipengaruhi oleh meningkatnya harga di tingkat produsen pada sebagian besar lapangan usaha.',
        'Struktur perekonomian Teluk Bintuni didominasi oleh dua kategori lapangan usaha utama, yaitu Industri Pengolahan dengan kontribusi sebesar 56,28 persen serta Pertambangan dan Penggalian sebesar 36,17 persen, yang secara akumulatif menyumbang 92,45 persen terhadap total PDRB daerah.'
      ],
      keyHighlights: [
        { label: 'PDRB ADHB 2025', value: 'Rp 57,21 T', description: 'Nilai nominal atas dasar harga berlaku' },
        { label: 'PDRB ADHK 2025', value: 'Rp 37,80 T', description: 'Nilai riil volume atas harga konstan 2010' },
        { label: 'Kenaikan Nominal', value: '+Rp 4,85 T', description: 'Peningkatan dibanding tahun 2024 (Rp 52,36 T)' }
      ],
      policyContext: 'Dua kategori lapangan usaha (Industri Pengolahan dan Pertambangan) menjadi penopang utama pembentukan 92,45 persen PDRB Kabupaten Teluk Bintuni.',
      humanScaleMeaning: {
        ratioText: 'Total Output Rp 57,21 Triliun',
        numerator: 57,
        denominator: 100,
        description: 'Nilai bruto seluruh barang dan jasa yang dihasilkan di Kabupaten Teluk Bintuni pada tahun 2025 mencapai Rp 57,21 triliun atas dasar harga berlaku (ADHB) dan Rp 37,80 triliun atas dasar harga konstan 2010 (ADHK).',
        contextNote: 'PDRB ADHB menunjukkan kemampuan sumber daya ekonomi dan struktur pasar berjalan, sedangkan PDRB ADHK mengukur volume fisik riil output tanpa pengaruh inflasi.'
      }
    },
    publications: PDRB_PUBLICATIONS,
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'April 2026'
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
    definition: 'Hasil bagi antara Produk Domestik Regional Bruto (PDRB) atas dasar harga berlaku dengan jumlah penduduk pertengahan tahun, menggambarkan nilai PDRB per satu orang penduduk di Kabupaten Teluk Bintuni.',
    polarity: 'higher_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 356.17 },
      { year: 2022, value: 392.07 },
      { year: 2023, value: 438.85 },
      { year: 2024, value: 574.98 },
      { year: 2025, value: 621.84 }
    ],
    insightSnippet: 'PDRB per kapita Teluk Bintuni mencapai Rp 621,84 juta/tahun pada 2025, mencerminkan tingginya nilai tambah ekonomi berbasis SDA dan migas terhadap jumlah penduduk.',
    story: {
      title: 'PDRB Per Kapita dan Rata-rata Output per Jiwa',
      summaryQuote: 'PDRB per kapita Kabupaten Teluk Bintuni atas dasar harga berlaku pada tahun 2025 mencapai Rp 621,84 juta per tahun, terus meningkat dari tahun ke tahun.',
      paragraphs: [
        'Nilai PDRB per kapita Kabupaten Teluk Bintuni atas dasar harga berlaku sejak tahun 2021 hingga 2025 cenderung meningkat dari tahun ke tahun. Pada tahun 2021 tercatat sebesar Rp 356,17 juta, meningkat menjadi Rp 392,07 juta pada tahun 2022, kemudian naik menjadi Rp 438,85 juta pada tahun 2023, Rp 574,98 juta pada tahun 2024, dan pada tahun 2025 mencapai Rp 621,84 juta per kapita per tahun.',
        'Besar kecilnya nilai PDRB per kapita sangat dipengaruhi oleh jumlah penduduk pertengahan tahun (91.009 jiwa pada tahun 2025) serta potensi sumber daya alam dan dominasi sektor industri pengolahan migas di Kabupaten Teluk Bintuni.'
      ],
      keyHighlights: [
        { label: 'PDRB per Kapita 2025', value: 'Rp 621,84 Juta', description: 'Atas dasar harga berlaku (ADHB) per tahun' },
        { label: 'Harga Konstan (ADHK)', value: 'Rp 410,86 Juta', description: 'Nilai riil per kapita (tumbuh +6,81%)' },
        { label: 'Kenaikan Nominal', value: '+Rp 46,86 Juta', description: 'Peningkatan dibanding tahun 2024 (Rp 574,98 Juta)' }
      ],
      policyContext: 'Tingginya PDRB per kapita didorong oleh nilai tambah industri pengolahan migas berskala besar berbanding jumlah penduduk pertengahan tahun sebesar 91.009 jiwa.',
      humanScaleMeaning: {
        ratioText: 'Rata-rata Rp 621,84 Juta / Orang / Tahun',
        numerator: 62,
        denominator: 100,
        description: 'Jika seluruh nilai tambah bruto yang dihasilkan seluruh lapangan usaha di Kabupaten Teluk Bintuni dibagi rata dengan jumlah penduduk (91.009 jiwa), rata-rata output ekonomi mencapai Rp 621,84 juta per orang dalam setahun (setara ~Rp 51,82 juta/bulan).',
        contextNote: 'PDRB per kapita merupakan indikator makro pembagian output wilayah terhadap penduduk, bukan pendapatan riil perorangan yang diterima masing-masing rumah tangga.'
      }
    },
    publications: PDRB_PUBLICATIONS,
    source: 'PDRB Menurut Lapangan Usaha - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'April 2026'
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
    definition: 'Rata-rata perkiraan banyak tahun yang dapat ditempuh oleh seseorang selama hidup sejak lahir, yang mencerminkan derajat kesehatan dan kualitas hidup masyarakat di suatu wilayah.',
    polarity: 'higher_is_better',
    featured: true,
    dataPoints: [
      { year: 2020, value: 66.86 },
      { year: 2021, value: 67.01 },
      { year: 2022, value: 67.38 },
      { year: 2023, value: 67.75 },
      { year: 2024, value: 68.05 }
    ],
    insightSnippet: 'Umur Harapan Hidup saat lahir Kabupaten Teluk Bintuni mencapai 68,05 tahun pada 2024, mencatatkan laju pertumbuhan tertinggi di Provinsi Papua Barat (+0,44%).',
    story: {
      title: 'Capaian Dimensi Umur Panjang dan Hidup Sehat',
      summaryQuote: 'Umur Harapan Hidup saat lahir di Kabupaten Teluk Bintuni mencapai 68,05 tahun pada tahun 2024, tumbuh 0,44 persen dan merupakan pertumbuhan tertinggi di Provinsi Papua Barat.',
      paragraphs: [
        'Guna menghitung dimensi umur panjang dan hidup sehat dalam IPM, digunakan indikator Umur Harapan Hidup (UHH) saat lahir hasil Long Form SP2020. Pada tahun 2024, UHH Kabupaten Teluk Bintuni mencapai 68,05 tahun, meningkat sebesar 0,30 tahun dibandingkan tahun 2023 (67,75 tahun). Ini menunjukkan bahwa bayi baru lahir di Kabupaten Teluk Bintuni diperkirakan dapat bertahan hidup hingga usia 68 sampai 69 tahun.',
        'Laju pertumbuhan Umur Harapan Hidup Kabupaten Teluk Bintuni pada tahun 2024 tumbuh sebesar 0,44 persen, menempati peringkat pertumbuhan tertinggi di antara seluruh kabupaten/kota se-Provinsi Papua Barat. Peningkatan ini didorong oleh semakin luasnya sebaran sarana prasarana kesehatan, kemudahan akses medis, serta meningkatnya kepedulian masyarakat terhadap pola hidup bersih dan sehat (PHBS).'
      ],
      keyHighlights: [
        { label: 'UHH Saat Lahir 2024', value: '68,05 Tahun', description: 'Perkiraan usia hidup bayi baru lahir' },
        { label: 'Laju Pertumbuhan', value: '+0,44%', description: 'Pertumbuhan tertinggi se-Papua Barat' },
        { label: 'Kenaikan Tahunan', value: '+0,30 Tahun', description: 'Meningkat dari 67,75 tahun pada 2023' }
      ],
      policyContext: 'Pemerataan sebaran sarana-prasarana kesehatan, kemudahan akses menuju fasilitas medis, sosialisasi gizi seimbang, dan cakupan vaksinasi menjadi prioritas utama pembangunan kesehatan daerah.',
      humanScaleMeaning: {
        ratioText: 'Rata-rata Harapan Hidup 68,05 Tahun',
        numerator: 68,
        denominator: 85,
        description: 'Seorang bayi yang baru lahir di Kabupaten Teluk Bintuni pada tahun 2024 diperkirakan memiliki peluang bertahan hidup rata-rata hingga usia 68 sampai 69 tahun.',
        contextNote: 'Umur Harapan Hidup saat lahir (UHH) merefleksikan derajat kesehatan masyarakat secara umum, ketersediaan tenaga medis, serta penurunan angka kematian bayi.'
      }
    },
    publications: IPM_PUBLICATIONS,
    source: 'Indeks Pembangunan Manusia - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Desember 2025'
  },

  // 9. Rasio Gini
  {
    id: 'gini-ratio',
    code: 'GINI',
    slug: 'gini-ratio',
    name: 'Rasio Gini',
    shortName: 'Rasio Gini',
    category: 'sosial',
    unit: '',
    definition: 'Ukuran derajat ketimpangan distribusi pengeluaran penduduk yang didasarkan pada Kurva Lorenz, dengan nilai berkisar antara 0 (pemerataan sempurna) hingga 1 (ketimpangan sempurna).',
    polarity: 'lower_is_better',
    featured: false,
    dataPoints: [
      { year: 2021, value: 0.366 },
      { year: 2022, value: 0.377 },
      { year: 2023, value: 0.383 },
      { year: 2024, value: 0.401 },
      { year: 2025, value: 0.447 }
    ],
    insightSnippet: 'Rasio Gini Kabupaten Teluk Bintuni tercatat sebesar 0,447 pada 2025, berada dalam rentang 0,3 hingga 0,5 yang tergolong kategori ketimpangan sedang.',
    story: {
      title: 'Ketimpangan Pengeluaran Penduduk Daerah',
      summaryQuote: 'Rasio Gini Kabupaten Teluk Bintuni pada tahun 2025 tercatat sebesar 0,447 poin dan masuk dalam kategori ketimpangan sedang.',
      paragraphs: [
        'Berdasarkan hasil Survei Sosial Ekonomi Nasional (Susenas), nilai Rasio Gini penduduk Kabupaten Teluk Bintuni pada tahun 2025 mencapai 0,447 poin. Angka ini menempatkan tingkat ketimpangan pengeluaran masyarakat Teluk Bintuni ke dalam kategori ketimpangan sedang sesuai kriteria BPS (rentang 0,3 sampai dengan 0,5).',
        'Dalam kurun waktu lima tahun terakhir (2021–2025), nilai Rasio Gini berada pada kisaran 0,366 hingga 0,447 poin, mencapai titik terendah pada tahun 2021 (0,366 poin) dan berada pada level 0,447 pada tahun 2025.'
      ],
      keyHighlights: [
        { label: 'Rasio Gini 2025', value: '0,447', description: 'Kategori ketimpangan sedang (rentang 0,3–0,5)' },
        { label: 'Kategori BPS', value: 'Sedang', description: 'Nilai koefisien berada di antara 0,300 dan 0,500' },
        { label: 'Titik Terendah', value: '0,366', description: 'Capaian 5 tahun terakhir (tahun 2021)' }
      ],
      policyContext: 'Rasio Gini diupayakan agar semakin mendekati nol untuk menunjukkan adanya pemerataan distribusi pendapatan dan pengeluaran antar penduduk.',
      humanScaleMeaning: {
        ratioText: 'Rasio Gini 0,447 (Kategori Sedang)',
        numerator: 45,
        denominator: 100,
        description: 'Rasio Gini Kabupaten Teluk Bintuni sebesar 0,447 berada dalam rentang 0,3 hingga 0,5, yang menurut kriteria BPS tergolong dalam kategori ketimpangan sedang.',
        contextNote: 'Nilai 0 menunjukkan pemerataan pengeluaran sempurna (setiap orang memiliki pengeluaran yang sama), sedangkan nilai 1 menunjukkan ketimpangan sempurna.'
      }
    },
    publications: INKESRA_PUBLICATIONS,
    source: 'Indikator Kesejahteraan Rakyat - BPS Kabupaten Teluk Bintuni',
    updatedAt: 'Desember 2025'
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

    const decimals = item.code === 'GINI' ? 3 : 2;
    const rawDiff = current.value - previous.value;
    const changeValue = parseFloat(rawDiff.toFixed(decimals));
    const changePercent = previous.value !== 0 
      ? parseFloat(((rawDiff / Math.abs(previous.value)) * 100).toFixed(2)) 
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
