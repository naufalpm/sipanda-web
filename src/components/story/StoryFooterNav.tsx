'use client';

import React from 'react';
import Link from 'next/link';
import { StrategicIndicator } from '@/types/indicator';
import { ArrowLeft, ArrowRight, Compass } from 'lucide-react';

interface StoryFooterNavProps {
  indicator: StrategicIndicator;
  allIndicators: StrategicIndicator[];
}

export function StoryFooterNav({ indicator, allIndicators }: StoryFooterNavProps) {
  const currentIndex = allIndicators.findIndex((i) => i.id === indicator.id || i.slug === indicator.slug);
  const nextIndicator = currentIndex < allIndicators.length - 1 ? allIndicators[currentIndex + 1] : allIndicators[0];
  const prevIndicator = currentIndex > 0 ? allIndicators[currentIndex - 1] : allIndicators[allIndicators.length - 1];

  return (
    <div className="py-12 bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Back to Dashboard button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-sm transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Dashboard SIPANDA</span>
          </Link>

          {/* Next Story Recommendation Card */}
          {nextIndicator && (
            <Link
              href={`/indicator/${nextIndicator.slug}`}
              className="group w-full sm:w-auto p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg shadow-blue-500/15 hover:shadow-xl transition-all flex items-center justify-between sm:justify-end gap-4"
            >
              <div className="text-left sm:text-right">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-200 block">
                  Lanjut ke Indikator Berikutnya
                </span>
                <span className="text-base font-extrabold block">
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
