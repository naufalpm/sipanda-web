'use client';

import React from 'react';
import Link from 'next/link';
import { BarChart3, MapPin, Mail, Globe, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-100/80 dark:bg-slate-950 text-slate-600 dark:text-slate-300 border-t border-slate-200/90 dark:border-slate-800/80 pt-12 pb-8 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4">
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

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Sistem Informasi Penyajian Indikator Daerah adalah platform diseminasi data statistik resmi 
              Badan Pusat Statistik (BPS) Kabupaten Teluk Bintuni untuk mewujudkan Satu Data Indonesia.
            </p>
          </div>

          {/* Col 2: Kontak & Kantor */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Kantor BPS Teluk Bintuni
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span>
                  Jl. Raya Bintuni - Manokwari, Kompleks Perkantoran Pemerintah Daerah, 
                  Kabupaten Teluk Bintuni, Papua Barat 98364
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>bps9104@bps.go.id / bps.telukbintuni@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <a
                  href="https://telukbintunikab.bps.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 font-medium"
                >
                  <span>telukbintunikab.bps.go.id</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Indikator Unggulan */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Indikator Strategis
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link href="#indicators" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Indeks Pembangunan Manusia (IPM)
                </Link>
              </li>
              <li>
                <Link href="#indicators" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Persentase Penduduk Miskin
                </Link>
              </li>
              <li>
                <Link href="#indicators" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Pertumbuhan Ekonomi (PDRB ADHK)
                </Link>
              </li>
              <li>
                <Link href="#indicators" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Tingkat Pengangguran Terbuka (TPT)
                </Link>
              </li>
              <li>
                <Link href="#indicators" className="hover:text-blue-600 dark:hover:text-white transition-colors">
                  Gini Ratio & Ketimpangan
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tautan Eksternal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Tautan Eksternal
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
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
                  href="https://data.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>Portal Satu Data Indonesia</span>
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
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} SIPANDA • BPS Kabupaten Teluk Bintuni, Papua Barat. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <span>Diseminasi Data Statistik Resmi Kabupaten Teluk Bintuni</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
