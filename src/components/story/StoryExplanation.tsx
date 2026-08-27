'use client';

import React from 'react';
import { StrategicIndicator } from '@/types/indicator';
import { 
  HelpCircle, 
  Users, 
  CheckCircle2, 
  Info, 
  Lightbulb, 
  Utensils, 
  Home, 
  Coins, 
  Flame, 
  TrendingUp 
} from 'lucide-react';
import { formatIndonesianNumber } from '@/lib/formatters';

interface StoryExplanationProps {
  indicator: StrategicIndicator;
}

export function StoryExplanation({ indicator }: StoryExplanationProps) {
  const story = indicator.story;
  const isGK = indicator.code === 'GK';

  const humanScale = story.humanScaleMeaning || {
    ratioText: `Sekitar ${Math.round(indicator.currentValue)} dari 100 Penduduk`,
    numerator: Math.min(100, Math.max(1, Math.round(indicator.currentValue))),
    denominator: 100,
    description: indicator.insightSnippet,
    contextNote: indicator.definition
  };

  const numerator = humanScale.numerator;
  const denominator = humanScale.denominator || 100;

  // Garis Kemiskinan threshold & simulation values
  const totalGK = typeof indicator.currentValue === 'number' ? indicator.currentValue : 810638;
  const dailyValue = Math.round(totalGK / 30);
  const household4Value = totalGK * 4;

  return (
    <section id="scene-explanation" className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
            <HelpCircle className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Makna & Konteks Data
          </span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Apa artinya bagi Kabupaten Teluk Bintuni?
        </h2>

        {/* Narrative & Highlights Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Thematic Visualization */}
          {isGK ? (
            /* ========================================================================= */
            /* GARIS KEMISKINAN: Threshold Line & Multi-Scale Expenditure Simulation     */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-blue-200/70 dark:border-slate-800 shadow-lg shadow-blue-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    Simulasi Standar Batas Pengeluaran
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                    Batas Ambang Resmi
                  </span>
                </div>

                {/* Multi-Scale Expenditure Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                  {/* Harian */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Standar Harian
                    </span>
                    <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                      Rp {formatIndonesianNumber(dailyValue)}
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                      per jiwa / hari
                    </p>
                  </div>

                  {/* Bulanan Per Kapita (Utama) */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/90 dark:bg-blue-950/60 border border-blue-300/80 dark:border-blue-800 text-left space-y-1 ring-2 ring-blue-500/20">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      Garis Kemiskinan
                    </span>
                    <div className="text-lg font-black text-blue-700 dark:text-blue-300 font-mono">
                      Rp {formatIndonesianNumber(totalGK)}
                    </div>
                    <p className="text-[10px] text-blue-600/80 dark:text-blue-300/80 leading-tight">
                      per kapita / bulan
                    </p>
                  </div>

                  {/* Rumah Tangga 4 Jiwa */}
                  <div className="p-3.5 rounded-2xl bg-white dark:bg-slate-950/70 border border-slate-200/80 dark:border-slate-800 text-left space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      Rumah Tangga (4 Jiwa)
                    </span>
                    <div className="text-lg font-black text-slate-900 dark:text-white font-mono">
                      Rp {formatIndonesianNumber(household4Value)}
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                      per keluarga / bulan
                    </p>
                  </div>
                </div>

                {/* Threshold Cut-Off Visual Representation */}
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-600 dark:text-slate-400">Diagram Batas Garis Kemiskinan:</span>
                    <span className="text-blue-600 dark:text-blue-400 font-mono font-bold">
                      Cut-off Point: Rp {formatIndonesianNumber(totalGK)}
                    </span>
                  </div>

                  {/* Visual Threshold Bar */}
                  <div className="relative py-2">
                    {/* Top Status Indicators */}
                    <div className="flex justify-between text-[11px] font-bold mb-1.5">
                      <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                        🔻 &lt; Rp {formatIndonesianNumber(totalGK)} (Penduduk Miskin)
                      </span>
                      <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                        🔺 &ge; Rp {formatIndonesianNumber(totalGK)} (Tidak Miskin)
                      </span>
                    </div>

                    {/* Gradient Threshold Line */}
                    <div className="relative h-4 rounded-full bg-gradient-to-r from-rose-500 via-amber-400 to-emerald-500 shadow-inner">
                      {/* Center Marker Pin */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 shadow-md flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
                      </div>
                    </div>

                    <div className="flex justify-between text-[10px] text-slate-400 mt-1.5 font-medium">
                      <span>Pengeluaran di bawah standar minimum</span>
                      <span>Mampu memenuhi standar minimum</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-blue-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-blue-600 dark:text-blue-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : indicator.code === 'GROWTH' ? (
            /* ========================================================================= */
            /* PERTUMBUHAN EKONOMI: Economic Velocity & Sectoral Expansion               */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-emerald-200/70 dark:border-slate-800 shadow-lg shadow-emerald-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Laju Pertumbuhan Ekonomi Daerah
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300">
                    PDRB Riil (ADHK)
                  </span>
                </div>

                {/* Growth Rate Callout Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-emerald-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Capaian Tahun 2025
                      </span>
                      <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
                        +{formatIndonesianNumber(indicator.currentValue)}%
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Pertumbuhan Output Riil per Tahun</span>
                    </div>

                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                        Puncak Lonjakan (2024)
                      </span>
                      <div className="text-xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                        +29,22%
                      </div>
                      <span className="text-[10px] text-slate-400">Ekspansi Fasilitas Migas</span>
                    </div>
                  </div>

                  {/* Sectoral Driver Pills */}
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80">
                    <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-2">
                      Sektor Lapangan Usaha Penopang Utama:
                    </span>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
                        <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 block">Industri LNG</span>
                        <span className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80">Hilirisasi Migas</span>
                      </div>
                      <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40">
                        <span className="text-xs font-bold text-blue-800 dark:text-blue-300 block">Konstruksi</span>
                        <span className="text-[10px] text-blue-600/80 dark:text-blue-400/80">Infrastruktur</span>
                      </div>
                      <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/40">
                        <span className="text-xs font-bold text-amber-800 dark:text-amber-300 block">Perikanan</span>
                        <span className="text-[10px] text-amber-600/80 dark:text-amber-400/80">Maritim Rakyat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-emerald-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-emerald-600 dark:text-emerald-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : indicator.code === 'PDRB_TAHUNAN' ? (
            /* ========================================================================= */
            /* PDRB TAHUNAN: Dual Perspective (ADHB vs ADHK) Comparison                  */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-indigo-200/70 dark:border-slate-800 shadow-lg shadow-indigo-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    Perbandingan Dua Basis Ukuran PDRB
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-300">
                    Standar BPS
                  </span>
                </div>

                {/* 2 Big Cards: ADHB vs ADHK */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {/* ADHB Card */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-indigo-200/80 dark:border-slate-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      1. Harga Berlaku (ADHB / Nominal)
                    </span>
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      Rp 57,21 <span className="text-sm font-semibold text-slate-500">Triliun</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      Mengukur <strong>nilai transaksi pasar riil tahun 2025</strong> termasuk dinamika harga komoditas ekspor.
                    </p>
                  </div>

                  {/* ADHK Card */}
                  <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-300/80 dark:border-indigo-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                      2. Harga Konstan (ADHK / Riil 2010)
                    </span>
                    <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300 font-mono">
                      Rp 37,80 <span className="text-sm font-semibold text-indigo-600/70">Triliun</span>
                    </div>
                    <p className="text-[11px] text-indigo-900/70 dark:text-indigo-300/70 leading-snug">
                      Mengukur <strong>volume fisik murni barang & jasa</strong> yang diproduksi tanpa pengaruh inflasi.
                    </p>
                  </div>
                </div>

                {/* Historical Series Table 2021-2025 */}
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-2">
                    Deret Waktu PDRB Kabupaten Teluk Bintuni (2021–2025):
                  </span>
                  <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
                    {[
                      { y: 2021, adhb: '31,38', adhk: '25,06' },
                      { y: 2022, adhb: '34,94', adhk: '25,56' },
                      { y: 2023, adhb: '39,54', adhk: '27,11' },
                      { y: 2024, adhb: '52,36', adhk: '35,03' },
                      { y: 2025, adhb: '57,21', adhk: '37,80' },
                    ].map((item) => (
                      <div key={item.y} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block">{item.y}</span>
                        <span className="text-[11px] font-mono font-bold text-slate-900 dark:text-white block mt-0.5">Rp {item.adhb} T</span>
                        <span className="text-[9px] font-mono text-indigo-600 dark:text-indigo-400 block">Riil: {item.adhk} T</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-indigo-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : indicator.code === 'GINI' ? (
            /* ========================================================================= */
            /* GINI RATIO: Inequality Gauge & BPS Threshold Spectrum                     */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-purple-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-violet-200/70 dark:border-slate-800 shadow-lg shadow-violet-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-violet-700 dark:text-violet-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Skala Derajat Ketimpangan Pendapatan
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300">
                    Kategori Sedang
                  </span>
                </div>

                {/* Score & Gauge Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-violet-200/80 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Koefisien Gini (2025)
                      </span>
                      <div className="text-3xl font-black text-violet-700 dark:text-violet-300 font-mono">
                        {formatIndonesianNumber(indicator.currentValue, { minDecimals: 3, maxDecimals: 3 })}
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Skala 0 (Merata) s.d. 1 (Timpang)</span>
                    </div>

                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Baseline (2021)
                      </span>
                      <div className="text-xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                        0,366
                      </div>
                      <span className="text-[10px] text-slate-400">Perubahan: +0,081 Poin</span>
                    </div>
                  </div>

                  {/* BPS Spectrum Gauge Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      <span>0,0 (Pemerataan)</span>
                      <span className="text-amber-600 font-extrabold">Posisi: 0,447</span>
                      <span>1,0 (Ketimpangan)</span>
                    </div>

                    {/* Gradient Spectrum Bar */}
                    <div className="relative h-4 rounded-full bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 shadow-inner">
                      {/* Pin marker at ~44.7% */}
                      <div 
                        className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white dark:bg-slate-900 border-2 border-violet-600 shadow-md flex items-center justify-center"
                        style={{ left: '44.7%' }}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-violet-600 animate-pulse" />
                      </div>
                    </div>

                    {/* 3 Categories Legend */}
                    <div className="grid grid-cols-3 gap-1 pt-2 text-center text-[10px]">
                      <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50">
                        <span className="font-bold text-emerald-800 dark:text-emerald-300 block">&lt; 0,400</span>
                        <span className="text-[9px] text-emerald-600/80">Rendah</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-400/80 ring-1 ring-amber-400/30">
                        <span className="font-bold text-amber-800 dark:text-amber-300 block">0,400 – 0,500</span>
                        <span className="text-[9px] text-amber-700 font-bold">Sedang (Posisi 2025)</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200/50">
                        <span className="font-bold text-rose-800 dark:text-rose-300 block">&gt; 0,500</span>
                        <span className="text-[9px] text-rose-600/80">Tinggi</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-violet-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-violet-600 dark:text-violet-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : indicator.code === 'AHH' ? (
            /* ========================================================================= */
            /* ANGKA HARAPAN HIDUP: Longevity Spectrum & Healthcare Dimensions           */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50/80 via-white to-pink-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-rose-200/70 dark:border-slate-800 shadow-lg shadow-rose-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Dimensi Umur Panjang & Hidup Sehat
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-rose-100 dark:bg-rose-900/50 text-rose-800 dark:text-rose-300">
                    Pilar IPM BPS
                  </span>
                </div>

                {/* Score & Progress Card */}
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-rose-200/80 dark:border-slate-800 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Angka Harapan Hidup (2025)
                      </span>
                      <div className="text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">
                        {formatIndonesianNumber(indicator.currentValue)} <span className="text-base font-semibold text-slate-500">Tahun</span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Perkiraan usia rata-rata bayi baru lahir</span>
                    </div>

                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Baseline (2021)
                      </span>
                      <div className="text-xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                        67,01 Tahun
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">Tumbuh: +1,48 Tahun</span>
                    </div>
                  </div>

                  {/* Longevity Progress Bar */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      <span>0 Tahun (Kelahiran)</span>
                      <span className="text-rose-600 font-extrabold">AHH: 68,49 Tahun</span>
                      <span>80+ Tahun</span>
                    </div>

                    {/* Gradient Age Spectrum */}
                    <div className="relative h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 shadow-sm"
                        style={{ width: `${(68.49 / 80) * 100}%` }}
                      />
                    </div>

                    {/* 3 Health Focus Points */}
                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px]">
                      <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-800/40">
                        <span className="font-bold text-rose-800 dark:text-rose-300 block">Kesehatan Ibu & Anak</span>
                        <span className="text-[9px] text-rose-600/80">Penurunan Mortalitas</span>
                      </div>
                      <div className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 border border-pink-200/60 dark:border-pink-800/40">
                        <span className="font-bold text-pink-800 dark:text-pink-300 block">Puskesmas Keliling</span>
                        <span className="text-[9px] text-pink-600/80">Akses Pesisir & Rawa</span>
                      </div>
                      <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200/60 dark:border-purple-800/40">
                        <span className="font-bold text-purple-800 dark:text-purple-300 block">Eliminasi Malaria</span>
                        <span className="text-[9px] text-purple-600/80">Program EDAT Bintuni</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-rose-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-rose-600 dark:text-rose-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : indicator.code === 'PDRB_KAPITA' ? (
            /* ========================================================================= */
            /* PDRB PER KAPITA: Economic Productivity per Citizen Simulation             */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-teal-200/70 dark:border-slate-800 shadow-lg shadow-teal-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    Tingkat Produktivitas Output per Jiwa
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300">
                    Standar BPS
                  </span>
                </div>

                {/* Big Value Cards: Tahunan vs Bulanan */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {/* Output Tahunan */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-teal-200/80 dark:border-slate-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      Rata-rata Tahunan (2025)
                    </span>
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      Rp 621,84 <span className="text-sm font-semibold text-slate-500">Juta</span>
                    </div>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">
                      per orang / tahun
                    </p>
                  </div>

                  {/* Setara Bulanan */}
                  <div className="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-300/80 dark:border-teal-800 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                      Setara Rata-rata Bulanan
                    </span>
                    <div className="text-2xl font-black text-teal-700 dark:text-teal-300 font-mono">
                      Rp 51,82 <span className="text-sm font-semibold text-teal-600/70">Juta</span>
                    </div>
                    <p className="text-[10px] text-teal-900/70 dark:text-teal-300/70">
                      per jiwa / bulan (konversi ÷ 12)
                    </p>
                  </div>
                </div>

                {/* 5-Year Productivity Progression Bar Cards */}
                <div className="p-3.5 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/80">
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block mb-2">
                    Evolusi Produktivitas Per Kapita (2021–2025):
                  </span>
                  <div className="grid grid-cols-5 gap-1.5 text-center text-xs">
                    {[
                      { y: 2021, val: '356,17' },
                      { y: 2022, val: '392,07' },
                      { y: 2023, val: '438,85' },
                      { y: 2024, val: '574,98' },
                      { y: 2025, val: '621,84' },
                    ].map((item) => (
                      <div key={item.y} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-slate-400 block">{item.y}</span>
                        <span className="text-[11px] font-mono font-bold text-teal-700 dark:text-teal-300 block mt-0.5">Rp {item.val}</span>
                        <span className="text-[9px] text-slate-400 block">Juta/thn</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-5 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/50 border border-teal-200/70 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-teal-600 dark:text-teal-400 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* DEFAULT / DEMOGRAPHIC METRICS: 100 People Waffle Matrix                   */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-blue-200/60 dark:border-slate-800 shadow-lg shadow-blue-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    Simulasi 100 Penduduk
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                    {numerator} / {denominator} Orang
                  </span>
                </div>

                {/* 100 Persons Matrix Grid (10x10) */}
                <div className="p-4 rounded-2xl bg-white/80 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800/80">
                  <div className="grid grid-cols-10 gap-1.5 sm:gap-2">
                    {Array.from({ length: denominator }).map((_, index) => {
                      const isHighlighted = index < numerator;
                      return (
                        <div
                          key={index}
                          className={`aspect-square rounded-md flex items-center justify-center transition-all duration-300 ${
                            isHighlighted
                              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-xs scale-105 ring-2 ring-blue-500/20'
                              : 'bg-slate-100 dark:bg-slate-800 text-slate-300 dark:text-slate-600'
                          }`}
                          title={
                            isHighlighted
                              ? `Penduduk ke-${index + 1}: Termasuk dalam kategori capaian`
                              : `Penduduk ke-${index + 1}: Di luar kategori capaian`
                          }
                        >
                          <span className="text-[9px] font-mono font-bold leading-none select-none">
                            {isHighlighted ? '●' : '○'}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Matrix Legend */}
                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-blue-600 inline-block" />
                      <span>{numerator} orang ({formatIndonesianNumber(indicator.currentValue)}%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-xs bg-slate-200 dark:bg-slate-700 inline-block" />
                      <span>{denominator - numerator} orang lainnya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Human scale takeaway note */}
              <div className="mt-6 p-4 rounded-2xl bg-white/60 dark:bg-slate-800/40 border border-blue-100 dark:border-slate-700/60">
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  "{humanScale.description}"
                </p>
                {humanScale.contextNote && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-start gap-1">
                    <Info className="w-3.5 h-3.5 shrink-0 text-blue-500 mt-0.5" />
                    <span>{humanScale.contextNote}</span>
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Right: Key Story Points & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-4">
            {/* Story Paragraphs */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-md space-y-4">
              <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                <Lightbulb className="w-5 h-5" />
                <h3 className="font-bold text-base text-slate-900 dark:text-white">
                  {story.title}
                </h3>
              </div>

              <blockquote className="pl-4 border-l-3 border-blue-500 text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300 italic bg-blue-50/50 dark:bg-blue-950/30 p-3 rounded-r-xl">
                "{story.summaryQuote}"
              </blockquote>

              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {story.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Key highlights mini cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {story.keyHighlights.map((hl, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between"
                >
                  <span className="text-[11px] font-semibold uppercase text-slate-400">
                    {hl.label}
                  </span>
                  <div className="text-lg font-black text-slate-900 dark:text-white font-mono my-1">
                    {hl.value}
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                    {hl.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
