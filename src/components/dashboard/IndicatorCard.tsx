'use client';

import React from 'react';
import Link from 'next/link';
import { StrategicIndicator, IndicatorCategoryMeta } from '@/types/indicator';
import { 
  TrendingUp, 
  TrendingDown, 
  Minus, 
  ArrowRight, 
  ChevronRight,
  Calendar
} from 'lucide-react';

interface IndicatorCardProps {
  indicator: StrategicIndicator;
  categoryMeta?: IndicatorCategoryMeta;
  viewMode?: 'grid' | 'list';
  onQuickView?: (indicator: StrategicIndicator) => void;
}

export function IndicatorCard({
  indicator,
  categoryMeta,
  viewMode = 'grid',
  onQuickView
}: IndicatorCardProps) {
  const isUp = indicator.trendDirection === 'up';
  const isDown = indicator.trendDirection === 'down';

  // Format change display
  const changeFormatted = `${indicator.changeValue > 0 ? '+' : ''}${
    indicator.unit === 'Rupiah'
      ? indicator.changeValue.toLocaleString('id-ID')
      : indicator.changeValue
  }`;
  const changePercentFormatted = `${indicator.changePercent > 0 ? '+' : ''}${indicator.changePercent}%`;

  // Trend badge styling based on welfare polarity
  let trendBadgeClass = 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  let trendIcon = <Minus className="w-3.5 h-3.5" />;

  if (isUp) {
    if (indicator.polarity === 'higher_is_better') {
      trendBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      trendIcon = <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
    } else {
      trendBadgeClass = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      trendIcon = <TrendingUp className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />;
    }
  } else if (isDown) {
    if (indicator.polarity === 'lower_is_better') {
      trendBadgeClass = 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
      trendIcon = <TrendingDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />;
    } else {
      trendBadgeClass = 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800';
      trendIcon = <TrendingDown className="w-3.5 h-3.5 text-rose-600 dark:text-rose-400" />;
    }
  }

  // Format large & decimal values nicely
  const formattedValue = typeof indicator.currentValue === 'number'
    ? indicator.code === 'GINI'
      ? indicator.currentValue.toLocaleString('id-ID', { minimumFractionDigits: 3, maximumFractionDigits: 3 })
      : indicator.currentValue >= 1000
        ? indicator.currentValue.toLocaleString('id-ID')
        : indicator.currentValue.toLocaleString('id-ID', { minimumFractionDigits: 1, maximumFractionDigits: 2 })
    : indicator.currentValue;

  /* ========================================================================= */
  /* LIST VIEW MODE                                                            */
  /* ========================================================================= */
  if (viewMode === 'list') {
    return (
      <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 shadow-xs hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3 sm:gap-4 flex-1">
          {/* Category Dot */}
          <div className="flex flex-col items-center">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${categoryMeta?.badgeBg || 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                {categoryMeta?.name || indicator.category}
              </span>
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {indicator.currentYear}
              </span>
            </div>

            <Link href={`/indicator/${indicator.slug}`} className="block">
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {indicator.name}
              </h3>
            </Link>
          </div>
        </div>

        {/* Value + Trend in List */}
        <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pt-3 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
          {/* Metric Value */}
          <div className="text-right">
            <div className="flex items-baseline justify-end gap-1">
              {indicator.unit === 'Rupiah' && (
                <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                  Rp
                </span>
              )}
              <span className="text-2xl font-black tracking-tight text-slate-900 dark:text-white font-mono">
                {formattedValue}
              </span>
              {indicator.unit !== 'Rupiah' && (
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {indicator.unit}
                </span>
              )}
            </div>
            <div className="flex items-center justify-end gap-1 mt-0.5">
              <span className={`inline-flex items-center gap-1 text-xs font-semibold px-1.5 py-0.5 rounded-md border ${trendBadgeClass}`}>
                {trendIcon}
                <span>{changeFormatted} ({changePercentFormatted})</span>
              </span>
            </div>
          </div>

          {/* Action Link */}
          <Link
            href={`/indicator/${indicator.slug}`}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:bg-blue-600 group-hover:text-white text-slate-600 dark:text-slate-300 transition-all duration-150 shadow-xs"
            aria-label={`Buka cerita indikator ${indicator.name}`}
          >
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  /* ========================================================================= */
  /* GRID CARD VIEW MODE (DEFAULT)                                             */
  /* ========================================================================= */
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500/80 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      {/* Decorative gradient top accent line */}
      <div
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
          categoryMeta?.accentColor || 'from-blue-500 to-indigo-600'
        } opacity-70 group-hover:opacity-100 transition-opacity`}
      />

      {/* Card Header: Category & Year */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`text-[11px] font-semibold tracking-wide px-2.5 py-1 rounded-full border ${
              categoryMeta?.badgeBg || 'bg-blue-50 text-blue-700 border-blue-200'
            }`}
          >
            {categoryMeta?.name || indicator.category}
          </span>

          <div className="flex items-center gap-1 text-xs font-mono font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
            <Calendar className="w-3 h-3 text-slate-400" />
            <span>{indicator.currentYear}</span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/indicator/${indicator.slug}`} className="block group/link">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover/link:text-blue-600 dark:group-hover/link:text-blue-400 transition-colors line-clamp-2 min-h-[3.25rem] leading-snug">
            {indicator.name}
          </h3>
        </Link>

        {/* Main Value & Trend Badge */}
        <div className="my-3 pt-1">
          <div className="flex items-baseline gap-1.5">
            {indicator.unit === 'Rupiah' && (
              <span className="text-xl sm:text-2xl font-bold text-slate-500 dark:text-slate-400 font-mono">
                Rp
              </span>
            )}
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
              {formattedValue}
            </span>
            {indicator.unit !== 'Rupiah' && (
              <span className="text-sm font-bold text-slate-500 dark:text-slate-400">
                {indicator.unit}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 mt-2">
            <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md border ${trendBadgeClass}`}>
              {trendIcon}
              <span>{changeFormatted} ({changePercentFormatted})</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">vs {indicator.previousYear}</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between gap-2">
        <span 
          className="text-[11px] text-slate-400 truncate max-w-[180px]"
          title={indicator.source}
        >
          {indicator.source.split('-')[0].trim()}
        </span>

        <Link
          href={`/indicator/${indicator.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group/btn whitespace-nowrap"
        >
          <span>Buka Cerita Data</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
