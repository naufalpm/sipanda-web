# PETUNJUK PENGGUNAAN APLIKASI (USER MANUAL)
## SIPANDA — SISTEM INFORMASI PENYAJIAN INDIKATOR DAERAH
### Badan Pusat Statistik Kabupaten Teluk Bintuni

---

## LEMBAR INFORMASI DOKUMEN

| Parameter | Keterangan |
| :--- | :--- |
| **Nama Aplikasi** | SIPANDA (Sistem Informasi Penyajian Indikator Daerah) |
| **Versi Rilis** | Versi 1.0.0 (Production) |
| **Pengembang** | Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni |
| **Sasaran Pengguna** | Pemerintah Daerah, OPD, Akademisi, Peneliti, Media, dan Masyarakat Umum |
| **Akses Platform** | Web-based (Dapat diakses melalui Desktop, Laptop, Tablet, dan Ponsel Pintar) |
| **Alamat URL** | `https://sipanda-web.vercel.app` (atau portal Satu Data BPS Kab. Teluk Bintuni) |

---

## DAFTAR ISI

1. [BAB I: PENDAHULUAN](#bab-i-pendahuluan)
   - 1.1 Latar Belakang
   - 1.2 Tujuan dan Manfaat
   - 1.3 Kebutuhan Sistem (System Requirements)
2. [BAB II: STRUKTUR & TATA LETAK APLIKASI](#bab-ii-struktur--tata-letak-aplikasi)
   - 2.1 Peta Situs (Sitemap)
   - 2.2 Alur Penggunaan Sistem (User Flow)
3. [BAB III: PANDUAN OPERASIONAL HALAMAN UTAMA (DASHBOARD)](#bab-iii-panduan-operasional-halaman-utama-dashboard)
   - 3.1 Bilah Navigasi Atas & Mode Gelap/Terang
   - 3.2 Banner Informasi Wilayah (Hero Section)
   - 3.3 Fitur Penyaringan, Pencarian, dan Pengurutan Data
   - 3.4 Cara Membaca Kartu Indikator Strategis
   - 3.5 Penggunaan Fitur Ringkasan Cepat (Quick Modal)
4. [BAB IV: PANDUAN OPERASIONAL HALAMAN CERITA DATA (DATA STORYTELLING)](#bab-iv-panduan-operasional-halaman-cerita-data-data-storytelling)
   - 4.1 Navigasi Bilah dan Navigator Melayang (Floating TOC)
   - 4.2 Menelaah Bab 1: Angka Utama & Capaian Terkini
   - 4.3 Menelaah Bab 2: Apa Artinya? (Konteks & Makna Manusiawi)
   - 4.4 Menelaah Bab 3: Tren Deret Waktu & Tabel Historis
   - 4.5 Menelaah Bab 4: Publikasi Rujukan BPS & Unduh PDF
   - 4.6 Berpindah Antar-Indikator (Story Switcher)
5. [BAB V: PUSAT INFORMASI & KONTAK RESMI (FOOTER)](#bab-v-pusat-informasi--kontak-resmi-footer)
   - 5.1 Tautan Satu Data & Mitra Eksternal
   - 5.2 Kanal Komunikasi & Media Sosial Resmi BPS
6. [BAB VI: PANDUAN PEMECAHAN MASALAH (TROUBLESHOOTING & FAQ)](#bab-vi-panduan-pemecahan-masalah-troubleshooting--faq)

---

## BAB I: PENDAHULUAN

### 1.1 Latar Belakang
Diseminasi data statistik pembangunan sering kali menghadapi kendala keterbacaan ketika hanya disajikan dalam bentuk deretan tabel angka yang kaku. **SIPANDA** hadir sebagai media diseminasi modern berbasis *Data Storytelling* yang mengubah data statistik makro Kabupaten Teluk Bintuni menjadi sajian naratif yang kontekstual, komunikatif, dan mudah dicerna oleh berbagai lapisan pemangku kepentingan.

### 1.2 Tujuan dan Manfaat
1. **Bagi Pemerintah Daerah & Perencana Kebijakan**: Menyediakan rujukan indikator makro yang valid, mutakhir, dan dilengkapi analisis kontekstual guna mendukung perencanaan pembangunan (*evidence-based policy*) serta evaluasi RPJMD/RKPD.
2. **Bagi Akademisi & Peneliti**: Memberikan akses deret waktu historis resmi 5 tahun terakhir beserta akses langsung ke dokumen publikasi rilis BPS berformat PDF.
3. **Bagi Masyarakat Umum**: Meningkatkan literasi statistik melalui visualisasi modern dan interpretasi "Makna Skala Manusiawi" (*Human Scale Meaning*).

### 1.3 Kebutuhan Sistem (System Requirements)
SIPANDA adalah aplikasi berbasis web (*web-based application*) murni tanpa perlu instalasi aplikasi tambahan:
* **Peramban Web (Browser)**: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, atau Opera (versi terkini).
* **Perangkat**: Komputer Desktop, Laptop, Tablet, atau Smartphone Android/iOS.
* **Koneksi Internet**: Direkomendasikan minimal 2 Mbps untuk pemuatan grafik dan dokumen PDF.

---

## BAB II: STRUKTUR & TATA LETAK APLIKASI

### 2.1 Peta Situs (Sitemap)
```
SIPANDA Portal
│
├── 1. Halaman Utama (Dashboard)
│   ├── Bilah Navigasi & Theme Toggle (Dark/Light Mode)
│   ├── Hero Banner & Informasi Makro Daerah
│   ├── Panel Filter Kategori (Sosial, Ekonomi, Ketenagakerjaan, Kesehatan)
│   ├── Panel Pencarian & Pengurutan Instan
│   ├── Galeri Kartu Indikator Strategis (Grid / List View)
│   └── Modal Ringkasan Cepat (Quick View Modal)
│
├── 2. Halaman Cerita Data Indikator (/indicator/[slug])
│   ├── Navigasi Atas & Indikator Progres Gulir (Scroll Progress Bar)
│   ├── Floating Scene Navigator (1. Angka Utama | 2. Apa Artinya? | 3. Tren | 4. Publikasi BPS)
│   ├── Bab 1: Hero Stat & Perbandingan Tahun Sebelumnya
│   ├── Bab 2: Ilustrasi Tematik, Narasi Resmi, Makna Manusiawi & Konteks Kebijakan
│   ├── Bab 3: Grafik Deret Waktu Interaktif (2021–2025) & Tabel Historis
│   ├── Bab 4: Galeri Sampul Publikasi BPS, Rincian Metadata & Unduh Berkas PDF
│   └── Footer Navigator (Jelajahi Indikator Lainnya)
│
└── 3. Footer Terpadu
    ├── Identitas Satu Data BPS Kab. Teluk Bintuni
    ├── Tautan Terkait Lembaga & Pemda
    └── Grid Media Sosial & Kontak Resmi (Email, IG, FB, YT)
```

---

## BAB III: PANDUAN OPERASIONAL HALAMAN UTAMA (DASHBOARD)

Halaman utama dirancang untuk memberikan gambaran cepat mengenai seluruh capaian indikator strategis di Kabupaten Teluk Bintuni.

```
┌────────────────────────────────────────────────────────────────────────┐
│  [Logo SIPANDA]                                [Mode Gelap/Terang] ☀️/🌙│
├────────────────────────────────────────────────────────────────────────┤
│  [Hero Banner: Sistem Informasi Penyajian Indikator Daerah]            │
├────────────────────────────────────────────────────────────────────────┤
│  [Semua] [Sosial] [Ekonomi] [Ketenagakerjaan] [Kesehatan]              │
│  [🔍 Cari Indikator...]        [Urutkan: Default ▼]  [⊞ Grid / ☰ List] │
├────────────────────────────────────────────────────────────────────────┤
│  ┌────────────────────────┐  ┌────────────────────────┐                │
│  │ Kartu: Angka Kemiskinan│  │ Kartu: Pertumbuhan Eko │  ...           │
│  │ 25,34% (🟢 -0,98 poin) │  │ 7,92% (🟢 +3,22 poin)  │                │
│  │ [Lihat Cerita] [👁]    │  │ [Lihat Cerita] [👁]    │                │
│  └────────────────────────┘  └────────────────────────┘                │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 Bilah Navigasi Atas & Mode Tampilan
* **Kembali ke Beranda**: Klik logo **SIPANDA** di pojok kiri atas untuk kembali ke tampilan awal kapan saja.
* **Ganti Mode Gelap / Terang**: Klik ikon ☀️ / 🌙 di pojok kanan atas. Sistem akan menyimpan preferensi visual Anda secara otomatis.

### 3.2 Panel Filter Kategori
Klik salah satu tombol tab kategori untuk menyaring indikator sesuai bidang:
1. **Semua**: Menampilkan keseluruhan 9 indikator strategis.
2. **Sosial & Kesejahteraan**: Memuat *Angka Kemiskinan*, *Garis Kemiskinan*, dan *Rasio Gini*.
3. **Ekonomi & PDRB**: Memuat *Pertumbuhan Ekonomi*, *PDRB Tahunan (ADHB)*, dan *PDRB Per Kapita*.
4. **Ketenagakerjaan**: Memuat *Tingkat Pengangguran Terbuka (TPT)* dan *Tingkat Partisipasi Angkatan Kerja (TPAK)*.
5. **Kesehatan**: Memuat *Angka Harapan Hidup (AHH)*.

### 3.3 Kotak Pencarian & Pengurutan
* **Pencarian Instan**: Masukkan kata kunci pada kolom pencarian (misal: `"kemiskinan"`, `"gini"`, `"pdrb"`, atau `"pengangguran"`). Daftar kartu akan terfilter seketika tanpa perlu memuat ulang halaman (*real-time*).
* **Urutkan Indikator**: Klik dropdown pengurutan untuk memilih:
  * *Default*: Menampilkan indikator unggulan (*featured*) di posisi teratas.
  * *Perubahan Terbesar*: Menampilkan indikator dengan pergeseran angka paling signifikan.
  * *Nama (A-Z)*: Mengurutkan berdasarkan abjad nama indikator.
  * *Tahun Rilis*: Mengurutkan berdasarkan tahun pemutakhiran data terbaru.
* **Mode Grid / List**: Klik ikon kisi (Grid) untuk tampilan kartu visual atau ikon daftar (List) untuk tampilan baris ringkas.

### 3.4 Cara Membaca Kartu Indikator (*Indicator Card*)
Setiap kartu memuat informasi terstandarisasi sebagai berikut:
1. **Kategori & Nama Indikator**: Tertera di bagian atas kartu lengkap dengan kode resmi BPS.
2. **Nilai Capaian Utama & Satuan**: Angka rilis mutakhir (misal: `25,34%`, `0,447 poin`, `Rp810.638`).
3. **Tahun Rilis Data**: Tertera di sebelah kanan nilai utama (misal: `Tahun 2025`).
4. **Badge Perubahan (*Delta Trend*)**:
   * Simbol panah dan selisih angka riil dibanding tahun sebelumnya.
   * **Warna Hijau (Positif)**: Menandakan perkembangan data menuju arah yang lebih baik (misal: kemiskinan turun, pertumbuhan ekonomi naik).
   * **Warna Merah (Perhatian)**: Menandakan kondisi yang memerlukan perhatian kebijakan (misal: tingkat pengangguran bertambah, ketimpangan meningkat).
5. **Grafik Mini (*Sparkline*)**: Visual garis tren 5 tahun terakhir (2021–2025).
6. **Tombol "Lihat Cerita Data"**: Mengarahkan pengguna ke halaman narasi lengkap (*story page*).
7. **Tombol Ikon Mata (Preview)**: Membuka jendela ringkasan kilat (*Quick View Modal*).

---

## BAB IV: PANDUAN OPERASIONAL HALAMAN CERITA DATA (DATA STORYTELLING)

Halaman Cerita Data menyajikan penjelasan komprehensif dari setiap indikator melalui alur 4 bab bertingkat.

```
┌────────────────────────────────────────────────────────────────────────┐
│  [← Kembali]  [01 / 09] [Sosial]      Indikator: Angka Kemiskinan [☀️] │
├────────────────────────────────────────────────────────────────────────┤
│  BAB 1: ANGKA UTAMA (Nilai Terkini: 25,34% | Turun 0,98 poin)          │
├────────────────────────────────────────────────────────────────────────┤
│  BAB 2: APA ARTINYA?                                [1. Angka Utama ]  │
│  - Ilustrasi Visual Tematik                         [2. Apa Artinya?]◄ │
│  - Narasi Resmi Analisis BPS                        [3. Tren        ]  │
│  - Makna Skala Manusiawi & Konteks Kebijakan        [4. Publikasi   ]  │
├────────────────────────────────────────────────────────────────────────┤
│  BAB 3: TREN DERET WAKTU (Grafik 5 Tahun & Tabel Historis)             │
├────────────────────────────────────────────────────────────────────────┤
│  BAB 4: PUBLIKASI RUJUKAN BPS (Galeri Sampul Buku & Unduh PDF)         │
├────────────────────────────────────────────────────────────────────────┤
│  [← Indikator Sebelumnya]                  [Indikator Berikutnya →]    │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.1 Navigasi Bilah dan Navigator Melayang (*Floating TOC*)
* **Bilah Kemajuan Gulir (*Progress Bar*)**: Garis biru tipis di bawah bilah navigasi atas bergerak secara dinamis sesuai posisi membaca Anda.
* **Tombol Kembali**: Klik **`← Kembali ke Dashboard`** untuk kembali ke halaman utama.
* **Pengalih Indikator (*Prev/Next*)**: Klik tanda panah `<` atau `>` di bilah atas untuk berpindah langsung ke indikator sebelum atau berikutnya tanpa kembali ke beranda.
* **Navigator Melayang di Sisi Kanan (*Sticky Floating TOC*)**: Di layar desktop, terdapat 4 tombol navigasi yang dapat diklik untuk melompat seketika ke bab yang diinginkan:
  1. `1. Angka Utama`
  2. `2. Apa Artinya?`
  3. `3. Tren`
  4. `4. Publikasi BPS`

---

### 4.2 Bab 1: Angka Utama (*Hero Section*)
* Menampilkan angka capaian dalam ukuran besar yang mencolok.
* **Kutipan Rilis Resmi**: Kotak ringkasan pernyataan resmi BPS mengenai posisi capaian tahun bersangkutan.
* **Komparasi Tahun Sebelumnya**: Memperlihatkan angka tahun dasar/sebelumnya dan nilai selisih perubahannya.

---

### 4.3 Bab 2: Apa Artinya? (*Context & Interpretation*)
Bagian ini menerjemahkan istilah teknis statistik ke dalam bahasa yang mudah dimengerti:
* **Ilustrasi Tematik**: Grafis ilustratif yang merefleksikan dimensi indikator terkait.
* **Narasi Penjelasan Resmi**: Analisis resmi mengenai dinamika pendorong perubahan data dari publikasi BPS.
* **Makna Skala Manusiawi (*Human Scale Meaning*)**: Interpretasi konkret mengenai arti angka tersebut bagi kehidupan sehari-hari masyarakat.
* **Poin-Poin Kunci (*Key Highlights*)**: Kartu-kartu ringkas penjelas fakta krusial data.
* **Konteks Kebijakan (*Policy Context*)**: Keterkaitan angka data dengan evaluasi program pemerintah daerah dan target indikator makro pembangunan.

---

### 4.4 Bab 3: Tren (*Deret Waktu 5 Tahun & Tabel*)
* **Grafik Garis Interaktif**: 
  * Menampilkan deret waktu 5 tahun berturut-turut (2021 s.d. 2025).
  * Arahkan kursor (*hover*) ke titik data pada grafik untuk melihat tooltip nilai presisi dan catatan peristiwa tahun tersebut.
* **Tabel Historis Lengkap**: Memuat data tahunan, nilai capaian, persentase pertumbuhan tahunan (*YoY*), serta catatan metodologi resmi BPS.

---

### 4.5 Bab 4: Publikasi Rujukan BPS (*Katalog & Unduh PDF*)
Menghubungkan visualisasi data dengan dokumen publikasi sumber aslinya:
* **Kartu Sampul Buku**: Menampilkan gambar sampul publikasi resmi BPS Kabupaten Teluk Bintuni (seperti *Indikator Kesejahteraan Rakyat*, *PDRB*, *Ketenagakerjaan*).
* **Tombol "Unduh PDF"**: Klik untuk langsung mengunduh dan membaca berkas publikasi lengkap dalam format PDF.
* **Tombol "Detail"**: Membuka jendela pop-up yang memuat:
  * Nomor Katalog BPS (*Katalog BPS*)
  * Nomor Publikasi BPS
  * Tanggal Rilis Resmi
  * Ukuran Berkas Dokumen
  * **Abstraksi Lengkap**: Ringkasan isi buku publikasi.
* **Tautan Portal BPS**: Tombol tautan langsung menuju halaman rilis publikasi di situs web resmi BPS Kabupaten Teluk Bintuni.

---

## BAB V: PUSAT INFORMASI & KONTAK RESMI (FOOTER)

Bagian bawah halaman (*Footer*) menyediakan akses ke seluruh ekosistem diseminasi data:

```
┌────────────────────────────────────────────────────────────────────────┐
│ SIPANDA Teluk Bintuni  │ TAUTAN TERKAIT          │ MEDIA SOSIAL        │
│ Portal resmi penyajian │ • BPS Kab. Teluk Bintuni│ ✉️ Email            │
│ indikator strategis... │ • BPS Papua Barat       │ 📸 Instagram        │
│                        │ • BPS RI                │ 👥 Facebook         │
│                        │ • Pemkab Teluk Bintuni  │ 🎥 YouTube          │
└────────────────────────────────────────────────────────────────────────┘
```

1. **Deskripsi SIPANDA**: Menegaskan status platform sebagai portal resmi penyajian indikator strategis BPS Kabupaten Teluk Bintuni dalam kerangka Satu Data Indonesia.
2. **Tautan Terkait**:
   * BPS Kabupaten Teluk Bintuni (`telukbintunikab.bps.go.id`)
   * BPS Provinsi Papua Barat (`papuabarat.bps.go.id`)
   * Badan Pusat Statistik RI (`bps.go.id`)
   * Pemerintah Kabupaten Teluk Bintuni (`telukbintunikab.go.id`)
3. **Media Sosial & Kontak Resmi (Grid 2x2)**:
   * ✉️ **Email**: `bpstelukbintuni@gmail.com`
   * 📸 **Instagram**: `@bps_telukbintuni`
   * 👥 **Facebook**: `BPS Kab. Teluk Bintuni`
   * 🎥 **YouTube**: `@bpstelukbintuni9104`

---

## BAB VI: PANDUAN PEMECAHAN MASALAH (TROUBLESHOOTING & FAQ)

### Q1: Apakah data di SIPANDA merupakan data resmi pemerintah?
**Jawaban**: **Ya.** Seluruh data, definisi, metodologi, dan naskah penjelasan di dalam aplikasi SIPANDA bersumber langsung dari rilis publikasi resmi Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni yang telah terverifikasi.

### Q2: Mengapa tombol unduh PDF tidak langsung terbuka di ponsel saya?
**Jawaban**: Pastikan peramban (*browser*) ponsel Anda tidak memblokir jendela sembul (*pop-up*) atau periksa folder *Downloads* pada perangkat Anda setelah mengeklik tombol **Unduh PDF**.

### Q3: Tampilan website terasa lambat atau tidak menampilkan data terbaru.
**Jawaban**: Lakukan pembersihan *cache* peramban dengan menekan kombinasi tombol **`Ctrl + Shift + R`** (di PC/Laptop) atau lakukan *pull-to-refresh* pada layar ponsel Anda.

### Q4: Bagaimana cara mengutip data dari SIPANDA untuk karya ilmiah atau laporan dinas?
**Jawaban**: Anda dapat menyertakan sitasi resmi dengan format:
> *Sumber: Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni, diakses melalui Portal SIPANDA (Sistem Informasi Penyajian Indikator Daerah), [Tahun Akses].*

---

*Hak Cipta © 2026 Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni, Papua Barat. Hak Cipta Dilindungi.*
