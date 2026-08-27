'use client';

import React from 'react';
import { StrategicIndicator, IndicatorCategoryMeta } from '@/types/indicator';
import { ThematicIllustration } from './illustrations/ThematicIllustration';
import { resolveMetricDisplay, formatIndonesianNumber } from '@/lib/formatters';
import { TrendingDown, TrendingUp, Minus, Calendar, ChevronDown, Sparkles } from 'lucide-react';

interface StoryHeroProps {
  indicator: StrategicIndicator;
  categoryMeta?: IndicatorCategoryMeta;
  onScrollDown?: () => void;
}

export function StoryHero({ indicator, categoryMeta, onScrollDown }: StoryHeroProps) {
  const isUp = indicator.trendDirection === 'up';
  const isDown = indicator.trendDirection === 'down';

  // Standardized Indonesian metric values & format
  const {
    prefix: valuePrefix,
    formattedValue,
    suffix: valueSuffix,
    changeFormatted,
    changePercentFormatted
  } = resolveMetricDisplay(indicator);

  // Trend badge styling based on welfare polarity
  let trendBadgeClass = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  let trendIcon = <Minus className="w-4 h-4" />;
  let trendLabel = 'Stabil';

  if (isUp) {
    if (indicator.polarity === 'higher_is_better') {
      trendBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      trendIcon = <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      trendLabel = 'Meningkat (Positif)';
    } else {
      trendBadgeClass = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      trendIcon = <TrendingUp className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      trendLabel = 'Meningkat (Perlu Perhatian)';
    }
  } else if (isDown) {
    if (indicator.polarity === 'lower_is_better') {
      trendBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      trendIcon = <TrendingDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      trendLabel = 'Menurun (Membaik)';
    } else {
      trendBadgeClass = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      trendIcon = <TrendingDown className="w-4 h-4 text-rose-600 dark:text-rose-400" />;
      trendLabel = 'Menurun';
    }
  }

  const prevFormattedValue = formatIndonesianNumber(
    indicator.previousValue,
    indicator.code === 'GINI' ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
  );

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-between pt-6 pb-12">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-3/4 max-w-3xl h-64 bg-blue-500/10 dark:bg-blue-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main Hero Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Metric & High-impact stats */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top metadata tags */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full border shadow-xs ${categoryMeta?.badgeBg || 'bg-blue-50 text-blue-700 border-blue-200'}`}>
                {categoryMeta?.name || indicator.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full border border-slate-200/80 dark:border-slate-700">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                Periode Rilis: {indicator.currentYear}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-blue-600 dark:text-blue-400 font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                Data Strategis Daerah
              </span>
            </div>

            {/* Indicator Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                {indicator.name}
              </h1>
              <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 max-w-xl font-medium leading-relaxed">
                {indicator.definition}
              </p>
            </div>

            {/* Giant Metric Display */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-4">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400">
                Realisasi Angka Capaian Terkini ({indicator.currentYear})
              </span>

              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap">
                {valuePrefix && (
                  <span className="text-2xl sm:text-4xl font-extrabold text-slate-500 dark:text-slate-400 font-mono">
                    {valuePrefix}
                  </span>
                )}
                <span className="text-5xl sm:text-7xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                  {formattedValue}
                </span>
                {valueSuffix && (
                  <span className="text-2xl sm:text-4xl font-bold text-slate-500 dark:text-slate-400 font-mono">
                    {valueSuffix}
                  </span>
                )}
              </div>

              {/* Trend Pill */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold px-3 py-1 rounded-xl border ${trendBadgeClass}`}>
                  {trendIcon}
                  <span>{changeFormatted} ({changePercentFormatted})</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  dari tahun {indicator.previousYear} ({valuePrefix ? `${valuePrefix} ` : ''}{prevFormattedValue}{valueSuffix ? ` ${valueSuffix}` : ''})
                </span>
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 ml-auto">
                  Status: {trendLabel}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Thematic Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <ThematicIllustration
              indicatorCode={indicator.code}
              category={indicator.category}
              activeScene={1}
            />
          </div>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="max-w-6xl mx-auto px-4 w-full flex flex-col items-center justify-center pt-8 text-center">
        <button
          onClick={onScrollDown}
          className="group inline-flex flex-col items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-hidden"
          aria-label="Gulir ke bawah untuk melihat cerita dan makna data"
        >
          <span className="tracking-wide">Gulir untuk melihat penjelasan lengkap</span>
          <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:border-blue-300 dark:group-hover:border-blue-700 transition-all shadow-xs animate-bounce">
            <ChevronDown className="w-4 h-4 text-slate-600 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
          </div>
        </button>
      </div>
    </section>
  );
}
