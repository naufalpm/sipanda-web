'use client';

import React, { useState } from 'react';
import { StrategicIndicator, DataPoint } from '@/types/indicator';
import { formatIndonesianNumber } from '@/lib/formatters';
import { 
  TrendingDown, 
  TrendingUp, 
  Minus, 
  Activity, 
  Calendar, 
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';

interface StoryTrendProps {
  indicator: StrategicIndicator;
}

export function StoryTrend({ indicator }: StoryTrendProps) {
  const dataPoints = [...indicator.dataPoints].sort((a, b) => a.year - b.year);
  const [selectedPoint, setSelectedPoint] = useState<DataPoint>(
    dataPoints[dataPoints.length - 1] || { year: indicator.currentYear, value: indicator.currentValue }
  );

  const values = dataPoints.map((d) => d.value);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const valueSpan = maxValue - minValue || 1;
  const padding = valueSpan * 0.2;
  const chartMin = Math.max(0, minValue - padding);
  const chartMax = maxValue + padding;

  const firstPoint = dataPoints[0];
  const lastPoint = dataPoints[dataPoints.length - 1];
  const totalYears = dataPoints.length;
  const totalPeriodDelta = lastPoint && firstPoint 
    ? parseFloat((lastPoint.value - firstPoint.value).toFixed(2)) 
    : 0;

  // Chart SVG Coordinates calculation
  const svgWidth = 700;
  const svgHeight = 280;
  const chartPaddingX = 50;
  const chartPaddingY = 40;
  const plotWidth = svgWidth - chartPaddingX * 2;
  const plotHeight = svgHeight - chartPaddingY * 2;

  const points = dataPoints.map((d, index) => {
    const x = chartPaddingX + (index / (dataPoints.length - 1 || 1)) * plotWidth;
    const y = chartPaddingY + (1 - (d.value - chartMin) / (chartMax - chartMin)) * plotHeight;
    return { ...d, x, y };
  });

  // Generate SVG path string (smooth cubic Bezier or straight lines)
  const linePathD = points.reduce((acc, pt, i, arr) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`;
    const prev = arr[i - 1];
    const cp1x = prev.x + (pt.x - prev.x) / 2;
    const cp1y = prev.y;
    const cp2x = prev.x + (pt.x - prev.x) / 2;
    const cp2y = pt.y;
    return `${acc} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${pt.x} ${pt.y}`;
  }, '');

  // Closed area under the curve
  const areaPathD = `${linePathD} L ${points[points.length - 1]?.x || 0} ${svgHeight - chartPaddingY} L ${points[0]?.x || 0} ${svgHeight - chartPaddingY} Z`;

  // Unit & currency prefix/suffix resolver
  let valuePrefix = '';
  let valueSuffix = indicator.unit;

  if (indicator.unit === 'Rupiah') {
    valuePrefix = 'Rp';
    valueSuffix = '';
  } else if (indicator.unit === 'Triliun Rupiah' || indicator.unit === 'Triliun Rp' || indicator.code === 'PDRB_TAHUNAN') {
    valuePrefix = 'Rp';
    valueSuffix = 'Triliun';
  } else if (indicator.unit === 'Juta Rupiah' || indicator.unit === 'Juta Rp' || indicator.code === 'PDRB_KAPITA') {
    valuePrefix = 'Rp';
    valueSuffix = 'Juta';
  } else if (indicator.unit === 'Miliar Rupiah' || indicator.unit === 'Miliar Rp') {
    valuePrefix = 'Rp';
    valueSuffix = 'Miliar';
  }

  const formatVal = (val: number | undefined) => {
    if (val === undefined) return '-';
    const numStr = formatIndonesianNumber(
      val,
      indicator.code === 'GINI' ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
    );
    return `${valuePrefix ? `${valuePrefix} ` : ''}${numStr}${valueSuffix ? ` ${valueSuffix}` : ''}`;
  };

  const formatDelta = (val: number) => {
    const absStr = formatIndonesianNumber(
      Math.abs(val),
      indicator.code === 'GINI' ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
    );
    return `${val > 0 ? '+' : val < 0 ? '-' : ''}${valuePrefix ? `${valuePrefix} ` : ''}${absStr}${valueSuffix ? ` ${valueSuffix}` : ''}`;
  };

  return (
    <section id="scene-trend" className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-3">
          <div className="p-2 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400">
            <Activity className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Dinamika Historis & Tren Deret Waktu
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Bagaimana Perubahannya dari Waktu ke Waktu?
            </h2>
            <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 mt-2 font-medium">
              Evolusi capaian {indicator.name} di Kabupaten Teluk Bintuni dalam kurun {totalYears} tahun terakhir ({firstPoint?.year}–{lastPoint?.year}).
            </p>
          </div>

          {/* Quick Summary Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs self-start md:self-auto">
            {totalPeriodDelta < 0 ? (
              <ArrowDownRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            ) : totalPeriodDelta > 0 ? (
              <ArrowUpRight className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            ) : null}
            <div className="text-xs">
              <span className="text-slate-400 font-medium">Perubahan {totalYears} Tahun: </span>
              <span className="font-bold font-mono text-slate-900 dark:text-white">
                {formatDelta(totalPeriodDelta)}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive SVG Chart Container */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 shadow-xl shadow-slate-200/40 dark:shadow-none space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {indicator.name} ({valuePrefix ? `${valuePrefix} ` : ''}{valueSuffix})
              </span>
            </div>
            <span className="text-xs text-slate-400 font-medium">
              *Klik pada titik kurva untuk melihat rincian tahun
            </span>
          </div>

          {/* SVG Chart */}
          <div className="relative w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${svgWidth} ${svgHeight}`}
              className="w-full h-auto min-w-[580px] overflow-visible select-none"
            >
              <defs>
                <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.28" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
                <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#2563eb" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* Horizontal Grid lines */}
              {[0.25, 0.5, 0.75, 1].map((pct) => {
                const yVal = chartPaddingY + (1 - pct) * plotHeight;
                return (
                  <line
                    key={pct}
                    x1={chartPaddingX}
                    y1={yVal}
                    x2={svgWidth - chartPaddingX}
                    y2={yVal}
                    stroke="currentColor"
                    className="text-slate-200 dark:text-slate-800"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Gradient Area under curve */}
              <path d={areaPathD} fill="url(#areaGradient)" />

              {/* Trend Main Line */}
              <path
                d={linePathD}
                fill="none"
                stroke="#2563eb"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Interactive Nodes */}
              {points.map((pt) => {
                const isSelected = selectedPoint.year === pt.year;
                const nodeFormatted = formatIndonesianNumber(
                  pt.value,
                  indicator.code === 'GINI' ? { minDecimals: 3, maxDecimals: 3 } : { minDecimals: 1, maxDecimals: 2 }
                );
                return (
                  <g
                    key={pt.year}
                    className="cursor-pointer group"
                    onClick={() => setSelectedPoint(pt)}
                    tabIndex={0}
                    role="button"
                    aria-label={`Tahun ${pt.year}: ${formatVal(pt.value)}`}
                  >
                    {/* Hover hit-area */}
                    <circle cx={pt.x} cy={pt.y} r="24" fill="transparent" />

                    {/* Vertical guide line on selection */}
                    {isSelected && (
                      <line
                        x1={pt.x}
                        y1={chartPaddingY}
                        x2={pt.x}
                        y2={svgHeight - chartPaddingY}
                        stroke="#3b82f6"
                        strokeWidth="1.5"
                        strokeDasharray="2 2"
                        opacity={0.8}
                      />
                    )}

                    {/* Node */}
                    <circle
                      cx={pt.x}
                      cy={pt.y}
                      r={isSelected ? 10 : 7}
                      fill="#ffffff"
                      stroke="#2563eb"
                      strokeWidth={isSelected ? 4 : 3}
                      filter="url(#nodeGlow)"
                      className="transition-all duration-200 group-hover:scale-125"
                    />

                    {/* Value Label */}
                    <g transform={`translate(${pt.x}, ${pt.y - 20})`}>
                      <text
                        x="0"
                        y="0"
                        fill={isSelected ? '#2563eb' : '#64748b'}
                        fontSize="10"
                        fontWeight="bold"
                        textAnchor="middle"
                        fontFamily="monospace"
                      >
                        {nodeFormatted}
                      </text>
                    </g>

                    {/* Year Label */}
                    <text
                      x={pt.x}
                      y={svgHeight - 12}
                      fill={isSelected ? '#2563eb' : '#64748b'}
                      fontSize={isSelected ? '12' : '11'}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      textAnchor="middle"
                      fontFamily="monospace"
                    >
                      {pt.year}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Selected Point Dynamic Callout Banner */}
          <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-mono font-black text-sm">
                Tahun {selectedPoint.year}
              </span>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">
                Nilai Realisasi Tercatat: <strong className="text-blue-600 dark:text-blue-400 font-mono font-bold">{formatVal(selectedPoint.value)}</strong>
              </span>
            </div>

            {selectedPoint.year !== firstPoint?.year && (
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Perubahan terhadap baseline ({firstPoint?.year}): <strong>{formatDelta(selectedPoint.value - (firstPoint?.value || 0))}</strong>
              </span>
            )}
          </div>

          {/* Bottom Year Buttons (Mobile-friendly selector) */}
          <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Pilih Tahun Rujukan:
            </span>
            <div className="flex items-center gap-1.5 flex-wrap">
              {dataPoints.map((pt) => {
                const isSelected = selectedPoint.year === pt.year;
                return (
                  <button
                    key={pt.year}
                    onClick={() => setSelectedPoint(pt)}
                    className={`px-3 py-1 rounded-xl text-xs font-mono font-bold transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20 scale-105'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {pt.year}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Milestone Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase text-slate-400">Titik Awal ({firstPoint?.year})</span>
            <div className="text-2xl font-black text-slate-900 dark:text-white font-mono">
              {formatVal(firstPoint?.value)}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Kondisi baseline awal periode pemantauan {totalYears} tahun ({firstPoint?.year})
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase text-slate-400">Capaian Terkini ({lastPoint?.year})</span>
            <div className="text-2xl font-black text-blue-600 dark:text-blue-400 font-mono">
              {formatVal(lastPoint?.value)}
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Angka realisasi resmi rilis terbaru BPS Teluk Bintuni
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/70 dark:border-emerald-800/60 shadow-xs space-y-1">
            <span className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400">
              Perubahan {totalYears} Tahun
            </span>
            <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">
              {formatDelta(totalPeriodDelta)}
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-300">
              Akumulasi perubahan dari tahun {firstPoint?.year} hingga {lastPoint?.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
