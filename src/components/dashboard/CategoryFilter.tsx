'use client';

import React from 'react';
import { IndicatorCategory, IndicatorCategoryMeta } from '@/types/indicator';
import { 
  Search, 
  X, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  Users, 
  TrendingUp, 
  Briefcase, 
  GraduationCap, 
  HeartPulse, 
  Layers
} from 'lucide-react';

export type SortOption = 'default' | 'change_desc' | 'name_asc' | 'year_desc';

interface CategoryFilterProps {
  categories: IndicatorCategoryMeta[];
  selectedCategory: IndicatorCategory | 'all';
  onSelectCategory: (category: IndicatorCategory | 'all') => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  categoryCounts: Record<string, number>;
  totalCount: number;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  viewMode,
  onViewModeChange,
  categoryCounts,
  totalCount
}: CategoryFilterProps) {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'sosial':
        return <Users className="w-4 h-4" />;
      case 'ekonomi':
        return <TrendingUp className="w-4 h-4" />;
      case 'ketenagakerjaan':
        return <Briefcase className="w-4 h-4" />;
      case 'pendidikan':
        return <GraduationCap className="w-4 h-4" />;
      case 'kesehatan':
        return <HeartPulse className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-4 mb-8">
      {/* Search Bar, Sort, and View Mode Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-3 sm:p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            id="indicator-search"
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Cari indikator (misal: Kemiskinan, PDRB, TPAK, Gini Ratio)..."
            className="w-full pl-10 pr-9 py-2.5 text-sm bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 text-slate-900 dark:text-white placeholder-slate-400 transition-all duration-150"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Controls Row (Sort + Layout Switcher) */}
        <div className="flex items-center gap-2.5 self-end md:self-auto">
          {/* Sort Dropdown */}
          <div className="relative flex items-center">
            <SlidersHorizontal className="w-3.5 h-3.5 absolute left-3 text-slate-400 pointer-events-none" />
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              className="pl-8 pr-8 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer appearance-none"
            >
              <option value="default">Urutan Standar</option>
              <option value="change_desc">Perubahan Tertinggi</option>
              <option value="name_asc">Nama (A - Z)</option>
              <option value="year_desc">Tahun Terbaru</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
            <button
              onClick={() => onViewModeChange('grid')}
              type="button"
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Tampilan Grid Kartu"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              type="button"
              className={`p-1.5 rounded-lg text-xs font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-xs'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
              title="Tampilan Daftar Ringkas"
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Tabs Scrollable on Mobile */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar scroll-smooth">
        {/* All Tab */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
              : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Semua Indikator</span>
          <span
            className={`px-1.5 py-0.2 rounded-full text-[11px] font-mono ${
              selectedCategory === 'all'
                ? 'bg-blue-700/80 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
            }`}
          >
            {totalCount}
          </span>
        </button>

        {/* Dynamic Categories */}
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          const count = categoryCounts[cat.id] || 0;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {getCategoryIcon(cat.id)}
              <span>{cat.name}</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[11px] font-mono ${
                  isActive
                    ? 'bg-blue-700/80 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
