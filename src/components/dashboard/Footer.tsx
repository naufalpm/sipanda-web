'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-100/80 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200/90 dark:border-slate-800/80 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 mb-12">
          {/* Col 1: Brand & Identity (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  SIPANDA
                </span>
                <span className="block text-xs font-semibold text-blue-600 dark:text-blue-400">
                  Kabupaten Teluk Bintuni
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              SIPANDA (Sistem Informasi Penyajian Indikator Daerah) adalah portal resmi penyajian indikator strategis oleh BPS Kabupaten Teluk Bintuni guna mendukung perencanaan, evaluasi, dan perumusan kebijakan daerah berbasis data yang akurat.
            </p>
          </div>

          {/* Col 2: Tautan Terkait (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Tautan Terkait
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://telukbintunikab.bps.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>BPS Kab. Teluk Bintuni</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://papuabarat.bps.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>BPS Provinsi Papua Barat</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bps.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Badan Pusat Statistik RI</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://telukbintunikab.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Pemerintah Kab. Teluk Bintuni</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Media Sosial (Span 5, 2x2 Grid) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Media Sosial
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {/* Email */}
              <a
                href="mailto:bpstelukbintuni@gmail.com"
                className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-xs flex items-center gap-2.5 group transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block transition-colors truncate">
                    Email
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                    bpstelukbintuni@gmail.com
                  </span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/bps_telukbintuni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-800 hover:shadow-xs flex items-center gap-2.5 group transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-rose-600 dark:group-hover:text-rose-400 block transition-colors truncate">
                    Instagram
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                    @bps_telukbintuni
                  </span>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/bpstelukbintuni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-800 hover:shadow-xs flex items-center gap-2.5 group transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 block transition-colors truncate">
                    Facebook
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                    BPS Kab. Teluk Bintuni
                  </span>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@bpstelukbintuni9104"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/70 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 hover:border-red-300 dark:hover:border-red-800 hover:shadow-xs flex items-center gap-2.5 group transition-all"
              >
                <div className="w-7 h-7 rounded-lg bg-[#FF0000] text-white flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-red-600 dark:group-hover:text-red-400 block transition-colors truncate">
                    YouTube
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 truncate block">
                    @bpstelukbintuni9104
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} SIPANDA • BPS Kabupaten Teluk Bintuni, Papua Barat. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
