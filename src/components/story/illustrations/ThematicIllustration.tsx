'use client';

import React from 'react';

interface ThematicIllustrationProps {
  indicatorCode: string;
  category: string;
  className?: string;
  activeScene?: number;
}

export function ThematicIllustration({
  indicatorCode,
  category,
  className = '',
  activeScene = 1
}: ThematicIllustrationProps) {
  const code = indicatorCode.toUpperCase();

  // 1. Angka Kemiskinan / Poverty Rate
  if (code === 'POVERTY') {
    return (
      <div className={`relative w-full max-w-[420px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-amber-500/20 via-blue-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-blue-50/30 to-amber-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* User provided Illustration */}
          <img
            src="/images/kemiskinan-illustration.png"
            alt="Ilustrasi Tematik Kerentanan Sosial dan Kemiskinan"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 2. Garis Kemiskinan (Poverty Line - 2.100 kkal basket + non-food)
  if (code === 'GK') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-rose-500/15 via-amber-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-rose-50/20 to-amber-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* Garis Kemiskinan Illustration */}
          <img
            src="/images/garis-kemiskinan-illustration.png"
            alt="Ilustrasi Komponen Garis Kemiskinan 2.100 kkal dan Non-Makanan"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 3. TPT (Tingkat Pengangguran Terbuka)
  if (code === 'TPT') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-amber-500/20 via-orange-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-amber-50/25 to-orange-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* TPT Illustration */}
          <img
            src="/images/tpt-illustration.png"
            alt="Ilustrasi Tingkat Pengangguran Terbuka dan Pasar Tenaga Kerja"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 4. TPAK (Tingkat Partisipasi Angkatan Kerja)
  if (code === 'TPAK') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-blue-500/20 via-indigo-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-blue-50/25 to-indigo-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* TPAK Illustration */}
          <img
            src="/images/tpak-illustration.png"
            alt="Ilustrasi Tingkat Partisipasi Angkatan Kerja dan Produktivitas Tenaga Kerja"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 5. Pertumbuhan Ekonomi (Economic Growth Rate)
  if (code === 'GROWTH') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-emerald-500/20 via-teal-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-emerald-50/25 to-teal-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* Pertumbuhan Ekonomi Illustration */}
          <img
            src="/images/pertumbuhan-ekonomi-illustration.png"
            alt="Ilustrasi Pertumbuhan Ekonomi, Industri Pengolahan, dan Aktivitas Logistik Daerah"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 6. PDRB Tahunan (ADHB Nominal PDRB Output)
  if (code === 'PDRB_TAHUNAN') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-blue-500/20 via-cyan-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-blue-50/25 to-cyan-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#0ea5e9_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* PDRB Tahunan Illustration */}
          <img
            src="/images/pdrb-tahunan-illustration.png"
            alt="Ilustrasi PDRB Tahunan dan Skala Output Ekonomi Daerah Papua Barat"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 7. PDRB Per Kapita (GDP per Capita)
  if (code === 'PDRB_KAPITA') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-teal-500/20 via-blue-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-teal-50/25 to-blue-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#14b8a6_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* PDRB Per Kapita Illustration */}
          <img
            src="/images/pdrb-per-kapita-illustration.png"
            alt="Ilustrasi PDRB Per Kapita dan Rata-rata Nilai Output per Jiwa"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 8. Health / Angka Harapan Hidup (AHH)
  if (code === 'AHH') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-rose-500/20 via-pink-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-rose-50/25 to-pink-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#f43f5e_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* Angka Harapan Hidup Illustration */}
          <img
            src="/images/angka-harapan-hidup-illustration.png"
            alt="Ilustrasi Angka Harapan Hidup, Derajat Kesehatan Keluarga dan Lansia"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // 9. Gini Ratio (Tingkat Ketimpangan Pendapatan)
  if (code === 'GINI') {
    return (
      <div className={`relative w-full max-w-[440px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
        {/* Background ambient glow discs */}
        <div className="absolute inset-0 bg-radial from-violet-500/20 via-indigo-500/15 to-transparent blur-2xl rounded-full scale-110 -z-10" />

        <div className="relative w-full h-full max-h-[360px] flex items-center justify-center p-3 rounded-3xl bg-gradient-to-b from-slate-50/90 via-violet-50/25 to-indigo-50/20 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/80 border border-slate-200/80 dark:border-slate-800 shadow-xl overflow-hidden group">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

          {/* Rasio Gini Illustration */}
          <img
            src="/images/gini-ratio-illustration.png"
            alt="Ilustrasi Rasio Gini dan Pemerataan Distribusi Pengeluaran Masyarakat"
            className="relative z-10 w-auto h-full max-h-[330px] object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
    );
  }

  // Default Generic Clean Vector
  return (
    <div className={`relative w-full max-w-[420px] aspect-4/3 flex items-center justify-center select-none ${className}`}>
      <div className="absolute inset-0 bg-radial from-blue-500/20 via-indigo-500/10 to-transparent blur-2xl rounded-full scale-110 -z-10" />
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-full drop-shadow-md">
        <rect x="20" y="20" width="360" height="260" rx="28" fill="#f8fafc" stroke="#3b82f6" strokeOpacity="0.2" strokeWidth="1.5" />
        <ellipse cx="200" cy="245" rx="150" ry="16" fill="#cbd5e1" opacity="0.6" />
        <circle cx="200" cy="140" r="60" fill="#3b82f6" opacity="0.85" />
        <rect x="110" y="248" width="180" height="26" rx="13" fill="#0f172a" fillOpacity="0.85" />
        <text x="200" y="265" fill="#ffffff" fontSize="11" fontWeight="600" textAnchor="middle">
          INDIKATOR STRATEGIS
        </text>
      </svg>
    </div>
  );
}
