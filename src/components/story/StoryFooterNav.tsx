'use client';

import React from 'react';
import Link from 'next/link';
import { StrategicIndicator } from '@/types/indicator';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface StoryFooterNavProps {
  indicator: StrategicIndicator;
  allIndicators: StrategicIndicator[];
}

export function StoryFooterNav({ indicator, allIndicators }: StoryFooterNavProps) {
  const currentIndex = allIndicators.findIndex((i) => i.id === indicator.id || i.slug === indicator.slug);
  const prevIndicator = currentIndex > 0 
    ? allIndicators[currentIndex - 1] 
    : (allIndicators.length > 1 ? allIndicators[allIndicators.length - 1] : null);
  const nextIndicator = currentIndex < allIndicators.length - 1 
    ? allIndicators[currentIndex + 1] 
    : (allIndicators.length > 1 ? allIndicators[0] : null);

  return (
    <div className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Previous Indicator Card */}
          {prevIndicator ? (
            <Link
              href={`/indicator/${prevIndicator.slug}`}
              className="group w-full sm:w-80 md:w-96 p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-800/90 hover:bg-slate-200/90 dark:hover:bg-slate-700/90 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex items-center gap-4 shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-slate-700 border border-slate-200/80 dark:border-slate-600 flex items-center justify-center shrink-0 group-hover:-translate-x-1 transition-transform text-slate-700 dark:text-slate-200 shadow-xs">
                <ArrowLeft className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block">
                  Indikator Sebelumnya
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white block truncate" title={prevIndicator.name}>
                  {prevIndicator.name}
                </span>
              </div>
            </Link>
          ) : (
            <div className="hidden sm:block sm:w-80 md:w-96" />
          )}

          {/* Next Indicator Card */}
          {nextIndicator && (
            <Link
              href={`/indicator/${nextIndicator.slug}`}
              className="group w-full sm:w-80 md:w-96 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/15 hover:shadow-xl transition-all flex items-center justify-between sm:justify-end gap-4 shrink-0 sm:ml-auto"
            >
              <div className="text-left sm:text-right min-w-0 flex-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 block">
                  Indikator Berikutnya
                </span>
                <span className="text-sm sm:text-base font-extrabold block truncate" title={nextIndicator.name}>
                  {nextIndicator.name}
                </span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center shrink-0 group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-5 h-5 text-white" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
