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

  const isTPT = indicator.code === 'TPT';
  const isTPAK = indicator.code === 'TPAK';
  const isKemiskinan = indicator.code === 'KEMISKINAN';

  const simulationTitle = isTPT 
    ? 'Simulasi 100 Angkatan Kerja'
    : isTPAK
    ? 'Simulasi 100 Penduduk Usia Kerja'
    : 'Simulasi 100 Penduduk';

  const otherLegendText = isTPT
    ? `${denominator - numerator} orang bekerja`
    : isTPAK
    ? `${denominator - numerator} orang bukan angkatan kerja`
    : isKemiskinan
    ? `${denominator - numerator} orang tidak miskin`
    : `${denominator - numerator} orang lainnya`;

  const matrixUnitName = isTPT ? 'Angkatan kerja' : isTPAK ? 'Penduduk usia kerja' : 'Penduduk';

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
                </div>

                {/* Multi-Scale Expenditure Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
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
                      <span className="text-[10px] text-slate-400">Operasional Awal Train 3</span>
                    </div>
                  </div>

                  {/* Sectoral Driver List */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-2.5">
                    <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block">
                      3 Lapangan Usaha Penopang Utama (2025):
                    </span>
                    <div className="space-y-2.5">
                      {/* 1. Industri Pengolahan */}
                      <div className="p-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/40 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-emerald-200/80 dark:bg-emerald-800/60 text-emerald-800 dark:text-emerald-200 text-[10px] font-black flex items-center justify-center shrink-0">1</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            Industri Pengolahan
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="py-1 px-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-medium border border-emerald-200/60 dark:border-slate-700 text-center flex items-center justify-center gap-1">
                            <span>Peranan:</span>
                            <strong className="font-bold text-slate-900 dark:text-white">56,28%</strong>
                          </div>
                          <div className="py-1 px-2.5 rounded-lg bg-emerald-600 text-white font-bold shadow-sm text-center flex items-center justify-center gap-1">
                            <span>Tumbuh:</span>
                            <span>+9,50%</span>
                          </div>
                        </div>
                      </div>

                      {/* 2. Pertambangan & Penggalian */}
                      <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-200/80 dark:bg-blue-800/60 text-blue-800 dark:text-blue-200 text-[10px] font-black flex items-center justify-center shrink-0">2</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            Pertambangan & Penggalian
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="py-1 px-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-medium border border-blue-200/60 dark:border-slate-700 text-center flex items-center justify-center gap-1">
                            <span>Peranan:</span>
                            <strong className="font-bold text-slate-900 dark:text-white">36,17%</strong>
                          </div>
                          <div className="py-1 px-2.5 rounded-lg bg-blue-600 text-white font-bold shadow-sm text-center flex items-center justify-center gap-1">
                            <span>Tumbuh:</span>
                            <span>+6,75%</span>
                          </div>
                        </div>
                      </div>

                      {/* 3. Administrasi Pemerintahan */}
                      <div className="p-3 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/70 dark:border-teal-800/40 space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-teal-200/80 dark:bg-teal-800/60 text-teal-800 dark:text-teal-200 text-[10px] font-black flex items-center justify-center shrink-0">3</span>
                          <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                            Administrasi Pemerintahan
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-[11px]">
                          <div className="py-1 px-2.5 rounded-lg bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 font-medium border border-teal-200/60 dark:border-slate-700 text-center flex items-center justify-center gap-1">
                            <span>Peranan:</span>
                            <strong className="font-bold text-slate-900 dark:text-white">1,85%</strong>
                          </div>
                          <div className="py-1 px-2.5 rounded-lg bg-teal-600 text-white font-bold shadow-sm text-center flex items-center justify-center gap-1">
                            <span>Tumbuh:</span>
                            <span>+6,41%</span>
                          </div>
                        </div>
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
            /* PDRB TAHUNAN: Dual Perspective (ADHB vs ADHK) & Sectoral Structure 2025   */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-indigo-200/70 dark:border-slate-800 shadow-lg shadow-indigo-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    Struktur & Skala Nilai Tambah PDRB (2025)
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
                      1. Harga Berlaku (ADHB)
                    </span>
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      Rp 57,21 <span className="text-sm font-semibold text-slate-500">Triliun</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      Mengukur <strong>nilai transaksi pasar tahun 2025</strong> termasuk dinamika harga produsen.
                    </p>
                  </div>

                  {/* ADHK Card */}
                  <div className="p-4 rounded-2xl bg-indigo-50/80 dark:bg-indigo-950/40 border border-indigo-300/80 dark:border-indigo-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-300">
                      2. Harga Konstan (ADHK 2010)
                    </span>
                    <div className="text-2xl font-black text-indigo-700 dark:text-indigo-300 font-mono">
                      Rp 37,80 <span className="text-sm font-semibold text-indigo-600/70">Triliun</span>
                    </div>
                    <p className="text-[11px] text-indigo-900/70 dark:text-indigo-300/70 leading-snug">
                      Mengukur <strong>volume fisik murni barang & jasa</strong> riil tanpa pengaruh inflasi.
                    </p>
                  </div>
                </div>

                {/* 2025 Sectoral Share Structure */}
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-700 dark:text-slate-300">Distribusi Lapangan Usaha PDRB 2025:</span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold font-mono">Total: 100%</span>
                  </div>

                  {/* Segmented Bar */}
                  <div className="h-3.5 w-full rounded-full overflow-hidden flex shadow-inner bg-slate-100 dark:bg-slate-800">
                    <div style={{ width: '56.28%' }} className="bg-emerald-500 hover:bg-emerald-600 transition-colors" title="Industri Pengolahan (56,28%)" />
                    <div style={{ width: '36.17%' }} className="bg-blue-500 hover:bg-blue-600 transition-colors" title="Pertambangan & Penggalian (36,17%)" />
                    <div style={{ width: '7.55%' }} className="bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 transition-colors" title="15 Sektor Lainnya (7,55%)" />
                  </div>

                  {/* 3 Structure Cards */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
                    <div className="p-2 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
                      <div className="flex items-center justify-center gap-1 font-bold text-emerald-800 dark:text-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>Industri</span>
                      </div>
                      <span className="text-xs font-black text-emerald-700 dark:text-emerald-400 font-mono block mt-0.5">56,28%</span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400">Rp 32,20 T</span>
                    </div>

                    <div className="p-2 rounded-xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-800/40">
                      <div className="flex items-center justify-center gap-1 font-bold text-blue-800 dark:text-blue-300">
                        <span className="w-2 h-2 rounded-full bg-blue-500" />
                        <span>Tambang</span>
                      </div>
                      <span className="text-xs font-black text-blue-700 dark:text-blue-400 font-mono block mt-0.5">36,17%</span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400">Rp 20,69 T</span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                      <div className="flex items-center justify-center gap-1 font-bold text-slate-700 dark:text-slate-300">
                        <span className="w-2 h-2 rounded-full bg-slate-400" />
                        <span>15 Sektor Lain</span>
                      </div>
                      <span className="text-xs font-black text-slate-700 dark:text-slate-300 font-mono block mt-0.5">7,55%</span>
                      <span className="text-[9px] text-slate-500 dark:text-slate-400">Rp 4,32 T</span>
                    </div>
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
          ) : indicator.code === 'PDRB_KAPITA' ? (
            /* ========================================================================= */
            /* PDRB PER KAPITA: Conceptual Calculation & Per-Capita Breakdown (2025)     */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-teal-200/70 dark:border-slate-800 shadow-lg shadow-teal-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-teal-700 dark:text-teal-400 flex items-center gap-1.5">
                    <Coins className="w-4 h-4" />
                    Konteks Perhitungan PDRB per Kapita (2025)
                  </span>
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-800 dark:text-teal-300">
                    BPS Teluk Bintuni
                  </span>
                </div>

                {/* 2 Big Cards: ADHB vs ADHK per Kapita */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                  {/* ADHB per Kapita */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-slate-950/70 border border-teal-200/80 dark:border-slate-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 dark:text-teal-400">
                      PDRB per Kapita ADHB (2025)
                    </span>
                    <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
                      Rp 621,84 <span className="text-sm font-semibold text-slate-500">Juta/Thn</span>
                    </div>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-snug">
                      Setara <strong>Rp 51,82 Juta/bulan</strong> atau ~Rp 1,70 Juta/hari.
                    </p>
                  </div>

                  {/* ADHK per Kapita */}
                  <div className="p-4 rounded-2xl bg-teal-50/80 dark:bg-teal-950/40 border border-teal-300/80 dark:border-teal-800 space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                      PDRB per Kapita ADHK (2025)
                    </span>
                    <div className="text-2xl font-black text-teal-700 dark:text-teal-300 font-mono">
                      Rp 410,86 <span className="text-sm font-semibold text-teal-600/70">Juta/Thn</span>
                    </div>
                    <p className="text-[11px] text-teal-900/70 dark:text-teal-300/70 leading-snug">
                      Nilai riil per kapita konstan 2010 (tumbuh <strong>+6,81%</strong>).
                    </p>
                  </div>
                </div>

                {/* Mathematical Formula Breakdown Box */}
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800 space-y-2.5">
                  <span className="text-[11px] font-bold text-slate-600 dark:text-slate-400 block">
                    Rumus & Komponen Pembentuk (Tahun 2025):
                  </span>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center items-center">
                    {/* Pembilang */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-slate-400 block">Total PDRB ADHB</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white font-mono block mt-0.5">
                        Rp 57,21 T
                      </span>
                      <span className="text-[9px] text-slate-500">Nilai Tambah Bruto</span>
                    </div>

                    {/* Penyebut */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800">
                      <span className="text-[10px] font-bold text-slate-400 block">Jumlah Penduduk</span>
                      <span className="text-sm font-black text-slate-900 dark:text-white font-mono block mt-0.5">
                        91.009 Jiwa
                      </span>
                      <span className="text-[9px] text-slate-500">Pertengahan Tahun</span>
                    </div>

                    {/* Hasil */}
                    <div className="p-2.5 rounded-xl bg-teal-50 dark:bg-teal-950/50 border border-teal-300 dark:border-teal-800 ring-1 ring-teal-400/20">
                      <span className="text-[10px] font-bold text-teal-700 dark:text-teal-400 block">Output per Jiwa</span>
                      <span className="text-sm font-black text-teal-800 dark:text-teal-300 font-mono block mt-0.5">
                        Rp 621,84 Jt
                      </span>
                      <span className="text-[9px] text-teal-700/80 font-medium">per orang / tahun</span>
                    </div>
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
          ) : indicator.code === 'GINI' ? (
            /* ========================================================================= */
            /* RASIO GINI: Inequality Gauge & BPS Threshold Spectrum                     */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-violet-50/80 via-white to-purple-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-violet-200/70 dark:border-slate-800 shadow-lg shadow-violet-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-violet-700 dark:text-violet-400 flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    Skala Derajat Ketimpangan Pengeluaran
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
                        Rasio Gini (2025)
                      </span>
                      <div className="text-3xl font-black text-violet-700 dark:text-violet-300 font-mono">
                        {formatIndonesianNumber(indicator.currentValue, { minDecimals: 3, maxDecimals: 3 })}
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Skala 0 (Merata) s.d. 1 (Timpang)</span>
                    </div>

                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Tahun 2024 (Lalu)
                      </span>
                      <div className="text-xl font-bold text-slate-700 dark:text-slate-300 font-mono">
                        0,401
                      </div>
                      <span className="text-[10px] text-amber-600 dark:text-amber-400 font-semibold">
                        Selisih: +0,046 Poin
                      </span>
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

                    {/* 3 Categories Legend based on BPS Inkesra */}
                    <div className="grid grid-cols-3 gap-1 pt-2 text-center text-[10px]">
                      <div className="p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/50">
                        <span className="font-bold text-emerald-800 dark:text-emerald-300 block">&lt; 0,300</span>
                        <span className="text-[9px] text-emerald-600/80">Rendah</span>
                      </div>
                      <div className="p-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-400/80 ring-1 ring-amber-400/30">
                        <span className="font-bold text-amber-800 dark:text-amber-300 block">0,300 – 0,500</span>
                        <span className="text-[9px] text-amber-700 font-bold">Sedang (Posisi 0,447)</span>
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
            /* ANGKA HARAPAN HIDUP: Longevity Spectrum & Healthcare Dimensions (IPM BPS) */
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
                        Umur Harapan Hidup (2024)
                      </span>
                      <div className="text-3xl font-black text-rose-600 dark:text-rose-400 font-mono">
                        68,05 <span className="text-base font-semibold text-slate-500">Tahun</span>
                      </div>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">Perkiraan rata-rata usia hidup bayi baru lahir</span>
                    </div>

                    <div className="text-right pl-4 border-l border-slate-100 dark:border-slate-800">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Laju Pertumbuhan
                      </span>
                      <div className="text-xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        +0,44%
                      </div>
                      <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-semibold">Tertinggi se-Papua Barat</span>
                    </div>
                  </div>

                  {/* Longevity Progress Bar against BPS/UNDP Standard (20 - 85 years) */}
                  <div className="space-y-1.5 pt-1">
                    <div className="flex justify-between text-[10px] font-bold text-slate-500">
                      <span>20 Tahun (Batas Min)</span>
                      <span className="text-rose-600 font-extrabold">Posisi Bintuni: 68,05 Tahun</span>
                      <span>85 Tahun (Batas Maks)</span>
                    </div>

                    {/* Gradient Age Spectrum */}
                    <div className="relative h-4 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden shadow-inner">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 shadow-sm transition-all duration-700"
                        style={{ width: `${((68.05 - 20) / (85 - 20)) * 100}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                      <span>Standar Global UNDP</span>
                      <span>Indeks Kesehatan IPM: 0,739</span>
                    </div>

                    {/* 3 Contextual Cards based on BPS Publication */}
                    <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px]">
                      <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/60 dark:border-emerald-800/40">
                        <span className="font-bold text-emerald-800 dark:text-emerald-300 block">+0,44%</span>
                        <span className="text-[9px] text-emerald-600/80">Laju Tertinggi Papua Barat</span>
                      </div>
                      <div className="p-2 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200/60 dark:border-rose-800/40">
                        <span className="font-bold text-rose-800 dark:text-rose-300 block">+0,30 Tahun</span>
                        <span className="text-[9px] text-rose-600/80">Kenaikan dari 2023 (67,75)</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                        <span className="font-bold text-slate-700 dark:text-slate-300 block">Peringkat 5</span>
                        <span className="text-[9px] text-slate-500">Antar 7 Kab di Papua Barat</span>
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
          ) : (
            /* ========================================================================= */
            /* DEFAULT / DEMOGRAPHIC METRICS: 100 People Waffle Matrix                   */
            /* ========================================================================= */
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/40 dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-800/50 border border-blue-200/60 dark:border-slate-800 shadow-lg shadow-blue-500/5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {simulationTitle}
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
                              ? `${matrixUnitName} ke-${index + 1}: ${isTPT ? 'Penganggur' : isKemiskinan ? 'Penduduk Miskin' : 'Termasuk dalam kategori capaian'}`
                              : `${matrixUnitName} ke-${index + 1}: ${isTPT ? 'Bekerja' : isKemiskinan ? 'Tidak Miskin' : 'Di luar kategori capaian'}`
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
                      <span>{otherLegendText}</span>
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
