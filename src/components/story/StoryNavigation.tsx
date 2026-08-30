'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { StrategicIndicator, IndicatorCategoryMeta } from '@/types/indicator';
import { ThemeToggle } from '@/components/dashboard/ThemeToggle';

interface StoryNavigationProps {
  indicator: StrategicIndicator;
  categoryMeta?: IndicatorCategoryMeta;
  allIndicators: StrategicIndicator[];
  scrollProgress?: number; // 0 to 100
}

export function StoryNavigation({
  indicator,
  categoryMeta,
  allIndicators,
  scrollProgress = 0
}: StoryNavigationProps) {
  const currentIndex = allIndicators.findIndex((i) => i.id === indicator.id || i.slug === indicator.slug);
  const prevIndicator = currentIndex > 0 ? allIndicators[currentIndex - 1] : null;
  const nextIndicator = currentIndex < allIndicators.length - 1 ? allIndicators[currentIndex + 1] : null;

  const currentNumberStr = String(currentIndex >= 0 ? currentIndex + 1 : 1).padStart(2, '0');
  const totalNumberStr = String(allIndicators.length).padStart(2, '0');

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      {/* Scroll Progress Bar */}
      <div 
        className="absolute bottom-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-150"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Left: Back to Dashboard */}
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/60 text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-xs sm:text-sm transition-all group"
            aria-label="Kembali ke Dashboard Utama"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="hidden xs:inline">Kembali ke Dashboard</span>
            <span className="xs:hidden">Dashboard</span>
          </Link>

          {/* Indicator Index */}
          <div className="hidden md:flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              {currentNumberStr} / {totalNumberStr}
            </span>
            <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${categoryMeta?.badgeBg || 'bg-blue-50 text-blue-700 border-blue-200'}`}>
              {categoryMeta?.name || indicator.category}
            </span>
          </div>
        </div>

        {/* Center: Title / Active Indicator preview */}
        <div className="hidden lg:block text-center truncate max-w-xs">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white truncate">
            {indicator.name}
          </h2>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
            BPS Kab. Teluk Bintuni
          </p>
        </div>

        {/* Right: Prev / Next Switcher & Theme Toggle */}
        <div className="flex items-center gap-2">
          {/* Previous Story Button */}
          {prevIndicator ? (
            <Link
              href={`/indicator/${prevIndicator.slug}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title={`Sebelumnya: ${prevIndicator.name}`}
              aria-label="Indikator Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </Link>
          ) : (
            <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed">
              <ChevronLeft className="w-4 h-4" />
            </span>
          )}

          {/* Next Story Button */}
          {nextIndicator ? (
            <Link
              href={`/indicator/${nextIndicator.slug}`}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              title={`Berikutnya: ${nextIndicator.name}`}
              aria-label="Indikator Berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <span className="p-2 rounded-xl bg-slate-50 dark:bg-slate-900 text-slate-300 dark:text-slate-700 cursor-not-allowed">
              <ChevronRight className="w-4 h-4" />
            </span>
          )}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
