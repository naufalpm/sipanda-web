'use client';

import React, { useState, useRef, useEffect } from 'react';
import { StrategicIndicator, Publication } from '@/types/indicator';
import { 
  BookOpen, 
  Download, 
  ExternalLink, 
  ChevronLeft,
  ChevronRight,
  Sparkles,
  FileText
} from 'lucide-react';

interface StoryPublicationsProps {
  indicator: StrategicIndicator;
}

export function StoryPublications({ indicator }: StoryPublicationsProps) {
  const [downloadModalPub, setDownloadModalPub] = useState<Publication | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);

  const publications = indicator.publications || [
    {
      id: 'pub-default-1',
      title: `Indikator Kesejahteraan Rakyat Kabupaten Teluk Bintuni ${indicator.currentYear}`,
      year: indicator.currentYear,
      publisher: 'BPS Kabupaten Teluk Bintuni',
      catalogNumber: '4102004.9104',
      publicationNumber: '91040.25035',
      releaseDate: `30 Desember ${indicator.currentYear}`,
      coverImage: '/images/cover-kesra-2025.png',
      coverGradient: 'from-amber-500 via-orange-600 to-slate-900',
      description: `Publikasi resmi yang memuat data dan ulasan indikator ${indicator.name} di Kabupaten Teluk Bintuni.`,
      pageCount: 114,
      pdfUrl: '/documents/indikator-kesejahteraan-rakyat-2025.pdf',
      bpsUrl: 'https://telukbintunikab.bps.go.id/id/publication/2025/12/30/c375a8c10ede48cbb0e3aef3/indikator-kesejahteraan-rakyat-kabupaten-teluk-bintuni-2025.html'
    },
    {
      id: 'pub-default-2',
      title: `Kabupaten Teluk Bintuni Dalam Angka ${indicator.currentYear}`,
      year: indicator.currentYear,
      publisher: 'BPS Kabupaten Teluk Bintuni',
      catalogNumber: '1102001.9104',
      publicationNumber: '91040.2401',
      releaseDate: `Februari ${indicator.currentYear}`,
      coverGradient: 'from-cyan-600 via-teal-700 to-slate-900',
      description: 'Publikasi tahunan komprehensif memuat seluruh statistik sektoral daerah.',
      pageCount: 380,
      bpsUrl: 'https://telukbintunikab.bps.go.id'
    }
  ];


  // Update visible card count based on screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, publications.length - visibleCount);

  // Ensure current index is valid after resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  // Touch swipe handling for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchDelta(currentTouch - touchStart);
  };

  const handleTouchEnd = () => {
    if (touchDelta > 50) {
      prevSlide();
    } else if (touchDelta < -50) {
      nextSlide();
    }
    setTouchStart(null);
    setTouchDelta(0);
  };

  return (
    <section id="scene-publications" className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-slate-800/80 bg-slate-50/60 dark:bg-slate-950/60 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400">
            Sumber Resmi & Rujukan
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Publikasi Rujukan BPS
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Buka dan unduh publikasi resmi BPS Kabupaten Teluk Bintuni.
            </p>
          </div>

          {publications.length > visibleCount && (
            <div className="flex items-center gap-1.5 bg-white dark:bg-slate-900 px-2.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-xs self-start md:self-auto">
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className={`p-1.5 rounded-lg transition-colors ${
                    currentIndex > 0
                      ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' 
                      : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  }`}
                  aria-label="Publikasi sebelumnya"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 px-1 font-semibold">
                  {currentIndex + 1} / {maxIndex + 1}
                </span>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= maxIndex}
                  className={`p-1.5 rounded-lg transition-colors ${
                    currentIndex < maxIndex
                      ? 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800' 
                      : 'text-slate-300 dark:text-slate-700 cursor-not-allowed'
                  }`}
                  aria-label="Publikasi berikutnya"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
        </div>

        {/* Card Component Renderer */}
        {(() => {
          const renderCard = (pub: Publication) => (
            <div 
              onClick={() => setDownloadModalPub(pub)}
              className="w-full group/card relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-500/70 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer active:scale-[0.99]"
            >
              {/* Book Showcase Header */}
              {pub.coverImage ? (
                <div className="relative h-56 sm:h-60 w-full bg-slate-900 overflow-hidden flex items-center justify-center p-4">
                  <div 
                    className="absolute inset-0 bg-cover bg-center scale-125 blur-xl opacity-35 brightness-75"
                    style={{ backgroundImage: `url(${pub.coverImage})` }}
                  />
                  <div className="relative z-10 h-full max-h-[210px] aspect-3/4 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 group-hover/card:scale-105 group-hover/card:-rotate-1 transition-transform duration-500">
                    <img
                      src={pub.coverImage}
                      alt={`Sampul Buku ${pub.title}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-white/30 via-white/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                  </div>
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-mono font-bold shadow-lg border border-white/10">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    <span>{pub.year}</span>
                  </div>
                </div>
              ) : (
                <div
                  className={`relative h-56 sm:h-60 bg-gradient-to-br ${
                    pub.coverGradient || 'from-blue-600 via-indigo-700 to-slate-900'
                  } p-5 flex flex-col justify-between text-white overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-15" />
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-white/20 backdrop-blur-xs flex items-center justify-center font-black text-[10px] tracking-wider">
                        BPS
                      </div>
                      <span className="text-[10px] font-semibold tracking-wider text-white/80 uppercase">
                        Publikasi Resmi
                      </span>
                    </div>
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-xs">
                      {pub.year}
                    </span>
                  </div>
                  <div className="relative z-10 my-auto">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-300/90 block mb-1">
                      STATISTIK DAERAH
                    </span>
                    <h3 className="text-base sm:text-lg font-black leading-snug line-clamp-3 text-white drop-shadow-xs">
                      {pub.title}
                    </h3>
                  </div>
                  <div className="relative z-10 pt-2 border-t border-white/20 flex items-center justify-between text-[11px] text-white/70">
                    <span className="truncate">{pub.publisher}</span>
                    {pub.pageCount && <span>{pub.pageCount} Hal</span>}
                  </div>
                </div>
              )}

              {/* Publication Content & Metadata */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug line-clamp-2 group-hover/card:text-amber-600 dark:group-hover/card:text-amber-400 transition-colors">
                    {pub.title}
                  </h3>

                  {/* Metadata Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
                    {pub.catalogNumber && (
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-amber-800 dark:text-amber-300 font-semibold border border-amber-200/60 dark:border-amber-800/40">
                        Kat: {pub.catalogNumber}
                      </span>
                    )}
                    {pub.publicationNumber && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        Pub: {pub.publicationNumber}
                      </span>
                    )}
                    {pub.fileSize && (
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {pub.fileSize}
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {pub.description}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-2">
                  {pub.pdfUrl && !pub.pdfUrl.startsWith('#') ? (
                    <a
                      href={pub.pdfUrl}
                      download={`${pub.title.replace(/\s+/g, '_')}.pdf`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs hover:shadow-md hover:shadow-amber-500/20 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh PDF</span>
                    </a>
                  ) : (
                    <a
                      href={pub.bpsUrl || 'https://telukbintunikab.bps.go.id'}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold shadow-xs hover:shadow-md hover:shadow-amber-500/20 transition-all"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Unduh PDF</span>
                    </a>
                  )}

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setDownloadModalPub(pub);
                    }}
                    className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-all border border-slate-200/60 dark:border-slate-700"
                    title="Lihat Abstraksi & Detail Lengkap"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Detail</span>
                  </button>
                </div>
              </div>
            </div>
          );

          if (publications.length <= 2) {
            return (
              <div className="mt-8">
                <div className={`grid grid-cols-1 ${publications.length === 2 ? 'sm:grid-cols-2 max-w-4xl' : 'max-w-md'} mx-auto gap-6`}>
                  {publications.map((pub) => (
                    <div key={pub.id} className="flex">
                      {renderCard(pub)}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div className="relative mt-8 group/carousel">
              {/* Side Floating Left Button */}
              <button
                onClick={prevSlide}
                disabled={currentIndex === 0}
                className={`absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 shadow-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 ${
                  currentIndex === 0 
                    ? 'opacity-0 pointer-events-none' 
                    : 'opacity-100 hover:scale-110 active:scale-95'
                }`}
                aria-label="Geser ke kiri"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Side Floating Right Button */}
              <button
                onClick={nextSlide}
                disabled={currentIndex >= maxIndex}
                className={`absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-700 shadow-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all duration-300 ${
                  currentIndex >= maxIndex 
                    ? 'opacity-0 pointer-events-none' 
                    : 'opacity-100 hover:scale-110 active:scale-95'
                }`}
                aria-label="Geser ke kanan"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Track Container */}
              <div 
                className="overflow-hidden rounded-3xl"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{
                    transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`
                  }}
                >
                  {publications.map((pub) => (
                    <div
                      key={pub.id}
                      className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-2.5 sm:p-3 flex"
                    >
                      {renderCard(pub)}
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots Indicator for Sliding Carousel */}
              <div className="mt-6 flex items-center justify-center gap-2">
                {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentIndex === idx 
                        ? 'w-8 bg-amber-600 dark:bg-amber-400' 
                        : 'w-2.5 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600'
                    }`}
                    aria-label={`Slide ke-${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          );
        })()}

        {/* Detail & Abstraction Modal */}
        {downloadModalPub && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-7 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-bold text-sm">Detail & Abstraksi Publikasi</span>
                </div>
                <button
                  onClick={() => setDownloadModalPub(null)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-sm font-bold p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  ✕
                </button>
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg leading-snug">
                  {downloadModalPub.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Penerbit: {downloadModalPub.publisher} ({downloadModalPub.year})
                </p>
              </div>

              {/* Structured Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Nomor Katalog</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">{downloadModalPub.catalogNumber || '-'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Nomor Publikasi</span>
                  <span className="font-mono font-semibold text-slate-900 dark:text-white">{downloadModalPub.publicationNumber || '-'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Tanggal Rilis</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{downloadModalPub.releaseDate || '-'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Frekuensi Terbit</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{downloadModalPub.frequency || 'Tahunan'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Bahasa</span>
                  <span className="font-semibold text-slate-900 dark:text-white">{downloadModalPub.language || 'Indonesia'}</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Ukuran File</span>
                  <span className="font-mono font-bold text-amber-600 dark:text-amber-400">{downloadModalPub.fileSize || '5.9 MB'}</span>
                </div>
              </div>

              {/* Abstraction Section */}
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 block">
                  Abstraksi
                </span>
                <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                  {downloadModalPub.abstraction || downloadModalPub.description}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="flex flex-col sm:flex-row gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setDownloadModalPub(null)}
                  className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Tutup
                </button>

                <a
                  href={downloadModalPub.bpsUrl || 'https://telukbintunikab.bps.go.id'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold transition-colors inline-flex items-center justify-center gap-1.5 border border-slate-200 dark:border-slate-700"
                >
                  <span>Lihat Publikasi Resmi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {downloadModalPub.pdfUrl && !downloadModalPub.pdfUrl.startsWith('#') ? (
                  <a
                    href={downloadModalPub.pdfUrl}
                    download={`${downloadModalPub.title.replace(/\s+/g, '_')}.pdf`}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-600 text-white text-xs font-semibold text-center hover:bg-amber-700 transition-colors inline-flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh Berkas PDF ({downloadModalPub.fileSize || '5.9 MB'})</span>
                  </a>
                ) : (
                  <a
                    href={downloadModalPub.bpsUrl || 'https://telukbintunikab.bps.go.id'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-amber-600 text-white text-xs font-semibold text-center hover:bg-amber-700 transition-colors inline-flex items-center justify-center gap-1.5 shadow-md shadow-amber-500/20"
                  >
                    <span>Akses di Portal BPS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
