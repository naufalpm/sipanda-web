'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { HeroBanner } from '@/components/dashboard/HeroBanner';
import { CategoryFilter, SortOption } from '@/components/dashboard/CategoryFilter';
import { IndicatorCard } from '@/components/dashboard/IndicatorCard';
import { Footer } from '@/components/dashboard/Footer';
import { 
  STRATEGIC_INDICATORS, 
  CATEGORIES 
} from '@/data/mockIndicators';
import { IndicatorCategory, StrategicIndicator } from '@/types/indicator';
import { 
  Layers, 
  FileText, 
  ArrowRight,
  X
} from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [indicators, setIndicators] = useState<StrategicIndicator[]>(STRATEGIC_INDICATORS);
  const [selectedCategory, setSelectedCategory] = useState<IndicatorCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickModalIndicator, setQuickModalIndicator] = useState<StrategicIndicator | null>(null);

  // Sync indicators with PostgreSQL database via API
  useEffect(() => {
    async function loadDbIndicators() {
      try {
        const res = await fetch('/api/indicators');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data) && json.data.length > 0) {
            setIndicators(json.data);
          }
        }
      } catch (err) {
        console.warn('Using default indicators due to API error:', err);
      }
    }
    loadDbIndicators();
  }, []);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.id] = indicators.filter((i) => i.category === cat.id).length;
    });
    return counts;
  }, [indicators]);

  // Filtered & Sorted indicators
  const filteredIndicators = useMemo(() => {
    let result = [...indicators];

    // Filter by Category
    if (selectedCategory !== 'all') {
      result = result.filter((i) => i.category === selectedCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.shortName.toLowerCase().includes(q) ||
          i.code.toLowerCase().includes(q) ||
          i.definition.toLowerCase().includes(q) ||
          i.insightSnippet.toLowerCase().includes(q)
      );
    }

    // Sort
    switch (sortBy) {
      case 'change_desc':
        result.sort((a, b) => Math.abs(b.changePercent) - Math.abs(a.changePercent));
        break;
      case 'name_asc':
        result.sort((a, b) => a.name.localeCompare(b.name, 'id'));
        break;
      case 'year_desc':
        result.sort((a, b) => b.currentYear - a.currentYear);
        break;
      case 'default':
      default:
        // Featured first, then default order
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [indicators, selectedCategory, searchQuery, sortBy]);

  const handleSearchFocus = () => {
    const searchInput = document.getElementById('indicator-search');
    if (searchInput) {
      searchInput.focus();
      searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  const categoryMap = useMemo(() => {
    const map = new Map();
    CATEGORIES.forEach((c) => map.set(c.id, c));
    return map;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar onSearchFocus={handleSearchFocus} totalIndicators={indicators.length} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Header Section */}
        <HeroBanner />

        {/* Indicators Section */}
        <section id="indicators" className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Katalog Indikator Strategis</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Penyajian Indikator Daerah
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Pilih kartu indikator untuk melihat narasi analisis, grafik tren historis, dan publikasi resmi BPS.
              </p>
            </div>

            <div className="text-xs text-slate-600 dark:text-slate-400 font-mono bg-white dark:bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
              Menampilkan <span className="font-bold text-blue-600 dark:text-blue-400">{filteredIndicators.length}</span> dari {STRATEGIC_INDICATORS.length} indikator
            </div>
          </div>

          {/* Interactive Filter, Search, and Sort Bar */}
          <CategoryFilter
            categories={CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            categoryCounts={categoryCounts}
            totalCount={STRATEGIC_INDICATORS.length}
          />

          {/* Indicators Grid or List */}
          {filteredIndicators.length > 0 ? (
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'space-y-4'
              }
            >
              {filteredIndicators.map((indicator) => (
                <IndicatorCard
                  key={indicator.id}
                  indicator={indicator}
                  categoryMeta={categoryMap.get(indicator.category)}
                  viewMode={viewMode}
                  onQuickView={(ind) => setQuickModalIndicator(ind)}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 my-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Tidak ada indikator yang cocok
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Tidak ditemukan data untuk kata kunci &ldquo;{searchQuery}&rdquo; pada kategori yang dipilih.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors cursor-pointer shadow-sm shadow-blue-500/20"
              >
                Reset Semua Filter
              </button>
            </div>
          )}
        </section>
      </main>

      {/* Quick Preview Modal when indicator is clicked from hero or shortcut */}
      {quickModalIndicator && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 dark:border-slate-800">
            {/* Close Button */}
            <button
              onClick={() => setQuickModalIndicator(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                {quickModalIndicator.code}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                Tahun {quickModalIndicator.currentYear}
              </span>
            </div>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {quickModalIndicator.name}
            </h3>

            {/* Big Value */}
            <div className="my-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-100 dark:border-slate-800">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {quickModalIndicator.currentValue}
                </span>
                <span className="text-sm font-bold text-slate-500">
                  {quickModalIndicator.unit}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">
                Perubahan: {quickModalIndicator.changeValue > 0 ? '+' : ''}{quickModalIndicator.changeValue} {quickModalIndicator.unit} ({quickModalIndicator.changePercent}%) dari tahun {quickModalIndicator.previousYear}
              </p>
            </div>

            {/* Insight & Definition */}
            <div className="space-y-3 mb-6 text-xs text-slate-600 dark:text-slate-300">
              <div>
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                  Definisi:
                </span>
                <p className="leading-relaxed">{quickModalIndicator.definition}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                  Wawasan Ringkas:
                </span>
                <p className="italic bg-blue-50/70 dark:bg-slate-800/50 p-2.5 rounded-xl border border-blue-100 dark:border-slate-700/60 leading-relaxed text-slate-700 dark:text-slate-300">
                  &ldquo;{quickModalIndicator.insightSnippet}&rdquo;
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setQuickModalIndicator(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                Tutup
              </button>
              <Link
                href={`/indicator/${quickModalIndicator.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Buka Penjelasan Detail</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
}
