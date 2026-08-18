'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BarChart3, Search, Layers, Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onSearchFocus?: () => void;
  totalIndicators?: number;
}

export function Navbar({ onSearchFocus, totalIndicators = 10 }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-slate-950/90 border-b border-slate-200/90 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform duration-200">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                    SIPANDA
                  </span>
                  <span className="text-[10px] font-semibold tracking-wider px-1.5 py-0.5 rounded-full bg-blue-50 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800">
                    BINTUNI
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                  Sistem Indikator Daerah • BPS Kab. Teluk Bintuni
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="#indicators"
              className="px-3.5 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Indikator Strategis</span>
              <span className="text-[11px] font-mono px-1.5 py-0.2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                {totalIndicators}
              </span>
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Search Button (Desktop) */}
            <button
              onClick={onSearchFocus}
              type="button"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-100 hover:bg-slate-200/80 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl transition-all duration-150 cursor-pointer shadow-xs"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Cari Indikator...</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-slate-500">
                Ctrl + K
              </kbd>
            </button>

            {/* Dark / Light Mode Toggle Button */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="md:hidden p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-800 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="#indicators"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Indikator Strategis</span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {totalIndicators}
              </span>
            </Link>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between px-3">
              <span className="text-xs text-slate-500">Mode Tampilan</span>
              <ThemeToggle showLabel />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
