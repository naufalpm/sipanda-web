'use client';

import React, { useState, useEffect, useRef } from 'react';
import { StrategicIndicator, IndicatorCategoryMeta } from '@/types/indicator';
import { StoryNavigation } from './StoryNavigation';
import { StoryHero } from './StoryHero';
import { StoryExplanation } from './StoryExplanation';
import { StoryTrend } from './StoryTrend';
import { StoryPublications } from './StoryPublications';
import { StoryFooterNav } from './StoryFooterNav';
import { Footer } from '@/components/dashboard/Footer';
import { useRouter } from 'next/navigation';

interface IndicatorStoryContainerProps {
  indicator: StrategicIndicator;
  categoryMeta?: IndicatorCategoryMeta;
  allIndicators: StrategicIndicator[];
}

export function IndicatorStoryContainer({
  indicator,
  categoryMeta,
  allIndicators
}: IndicatorStoryContainerProps) {
  const router = useRouter();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeScene, setActiveScene] = useState<number>(1);
  const heroRef = useRef<HTMLDivElement>(null);

  // Track overall scroll progress & active scene
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Determine active scene based on viewport position
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      const scene2 = document.getElementById('scene-explanation');
      const scene3 = document.getElementById('scene-trend');
      const scene4 = document.getElementById('scene-publications');

      if (scene4 && scrollY >= scene4.offsetTop) {
        setActiveScene(4);
      } else if (scene3 && scrollY >= scene3.offsetTop) {
        setActiveScene(3);
      } else if (scene2 && scrollY >= scene2.offsetTop) {
        setActiveScene(2);
      } else {
        setActiveScene(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation: ArrowLeft (prev), ArrowRight (next), Escape (home)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid triggering when user is in input/textarea
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }

      const currentIndex = allIndicators.findIndex((i) => i.id === indicator.id || i.slug === indicator.slug);
      if (e.key === 'ArrowRight' && currentIndex < allIndicators.length - 1) {
        router.push(`/indicator/${allIndicators[currentIndex + 1].slug}`);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        router.push(`/indicator/${allIndicators[currentIndex - 1].slug}`);
      } else if (e.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allIndicators, indicator, router]);

  const scrollToExplanation = () => {
    const target = document.getElementById('scene-explanation');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToScene = (sceneId: string) => {
    const target = document.getElementById(sceneId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-200 selection:bg-blue-500 selection:text-white">
      {/* Top Scrollytelling Navigation Bar */}
      <StoryNavigation
        indicator={indicator}
        categoryMeta={categoryMeta}
        allIndicators={allIndicators}
        scrollProgress={scrollProgress}
      />

      {/* Floating Scene Progress Navigation Indicator (Desktop Sticky Side Indicator) */}
      <aside 
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-3 pointer-events-auto"
        aria-label="Navigasi Bagian Cerita"
      >
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-2 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-900/5 flex flex-col gap-1.5 min-w-[145px]">
          {[
            { id: 'top', label: '1. Angka Utama', num: 1 },
            { id: 'scene-explanation', label: '2. Apa Artinya?', num: 2 },
            { id: 'scene-trend', label: '3. Tren', num: 3 },
            { id: 'scene-publications', label: '4. Publikasi BPS', num: 4 },
          ].map((scene) => {
            const isActive = activeScene === scene.num;
            return (
              <button
                key={scene.num}
                onClick={() => (scene.id === 'top' ? window.scrollTo({ top: 0, behavior: 'smooth' }) : scrollToScene(scene.id))}
                className={`group flex items-center justify-between gap-2.5 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
                title={scene.label}
              >
                <span className="text-[11px] whitespace-nowrap">
                  {scene.label}
                </span>
                <span
                  className={`w-2 h-2 rounded-full transition-all shrink-0 ${
                    isActive ? 'bg-white scale-125' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>

      {/* Main Scrollytelling Story Body */}
      <main className="flex-1">
        {/* Scene 1: Main Statistic */}
        <div ref={heroRef}>
          <StoryHero
            indicator={indicator}
            categoryMeta={categoryMeta}
            onScrollDown={scrollToExplanation}
          />
        </div>

        {/* Scene 2: Apa Artinya? */}
        <StoryExplanation indicator={indicator} />

        {/* Scene 3: Change / Trend */}
        <StoryTrend indicator={indicator} />

        {/* Scene 4: Related Publications */}
        <StoryPublications indicator={indicator} />

        {/* Bottom Story Navigation & Exploration */}
        <StoryFooterNav indicator={indicator} allIndicators={allIndicators} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
