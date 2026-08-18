'use client';

import React from 'react';
import { StrategicIndicator } from '@/types/indicator';
import { TELUK_BINTUNI_METRICS } from '@/data/mockIndicators';
import { MapPin, Calendar } from 'lucide-react';

interface HeroBannerProps {
  indicators?: StrategicIndicator[];
  onSelectIndicator?: (indicator: StrategicIndicator) => void;
}

export function HeroBanner({ indicators, onSelectIndicator }: HeroBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-blue-50/40 to-white dark:from-slate-950 dark:via-slate-900/60 dark:to-slate-950 pt-8 pb-8 sm:pt-12 sm:pb-10 border-b border-slate-200/70 dark:border-slate-800/70">
      {/* Background Decorative Blur Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/15 dark:bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-indigo-400/15 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-400/10 dark:bg-emerald-600/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Region & Badge Bar */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4 sm:mb-5 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100/90 dark:bg-blue-950/80 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-800 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{TELUK_BINTUNI_METRICS.regencyName} • {TELUK_BINTUNI_METRICS.provinceName}</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>Rilis Data: 2024 / 2025</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
            Sistem Informasi Penyajian{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
              Indikator Strategis Daerah
            </span>
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Portal resmi diseminasi data statistik Kabupaten Teluk Bintuni. Menyajikan visualisasi data, 
            analisis capaian pembangunan manusia, ketenagakerjaan, serta pertumbuhan ekonomi daerah secara transparan, akurat, dan komunikatif.
          </p>
        </div>
      </div>
    </section>
  );
}
