'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onSearchFocus?: () => void;
  totalIndicators?: number;
}

export function Navbar({ onSearchFocus, totalIndicators }: NavbarProps) {
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
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">
                  SIPANDA
                </span>
                <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 -mt-0.5">
                  Sistem Indikator Daerah • BPS Kab. Teluk Bintuni
                </span>
              </div>
            </Link>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Dark / Light Mode Toggle Button */}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
