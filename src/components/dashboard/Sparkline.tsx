'use client';

import React from 'react';
import { DataPoint } from '@/types/indicator';

interface SparklineProps {
  data: DataPoint[];
  color?: string;
  isPositive?: boolean;
  height?: number;
  width?: number;
  className?: string;
  showPoints?: boolean;
}

export function Sparkline({
  data,
  color,
  isPositive = true,
  height = 50,
  width = 160,
  className = '',
  showPoints = true
}: SparklineProps) {
  if (!data || data.length < 2) {
    return <div className="h-10 text-xs text-slate-400 flex items-center">Data tren terbatas</div>;
  }

  const values = data.map((d) => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min === 0 ? 1 : max - min;

  // Add padding around the chart
  const paddingY = 8;
  const paddingX = 6;
  const chartHeight = height - paddingY * 2;
  const chartWidth = width - paddingX * 2;

  const points = data.map((d, index) => {
    const x = paddingX + (index / (data.length - 1)) * chartWidth;
    // Invert y because SVG y goes downwards
    const y = paddingY + chartHeight - ((d.value - min) / range) * chartHeight;
    return { x, y, value: d.value, year: d.year };
  });

  const pathD = points.reduce((acc, point, index, arr) => {
    if (index === 0) return `M ${point.x},${point.y}`;
    
    // Smooth Bezier Curve interpolation
    const prev = arr[index - 1];
    const cx1 = prev.x + (point.x - prev.x) / 2;
    const cy1 = prev.y;
    const cx2 = prev.x + (point.x - prev.x) / 2;
    const cy2 = point.y;
    return `${acc} C ${cx1},${cy1} ${cx2},${cy2} ${point.x},${point.y}`;
  }, '');

  const areaD = `${pathD} L ${points[points.length - 1].x},${height} L ${points[0].x},${height} Z`;

  const strokeColor = color || (isPositive ? '#10b981' : '#ef4444');
  const gradientId = `sparkline-gradient-${Math.random().toString(36).substring(2, 9)}`;

  return (
    <div className={`relative inline-block select-none ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible w-full h-auto"
        style={{ maxHeight: height }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={strokeColor} stopOpacity="0.25" />
            <stop offset="100%" stopColor={strokeColor} stopOpacity="0.0" />
          </linearGradient>
        </defs>

        {/* Fill Area */}
        <path d={areaD} fill={`url(#${gradientId})`} />

        {/* Line Path */}
        <path
          d={pathD}
          fill="none"
          stroke={strokeColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dots on Data Points */}
        {showPoints &&
          points.map((pt, i) => {
            const isLast = i === points.length - 1;
            return (
              <g key={i} className="group/dot">
                {isLast && (
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r="6"
                    className="animate-ping"
                    fill={strokeColor}
                    opacity="0.3"
                  />
                )}
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isLast ? '3.5' : '2'}
                  fill={isLast ? strokeColor : '#ffffff'}
                  stroke={strokeColor}
                  strokeWidth={isLast ? '2' : '1.5'}
                />
              </g>
            );
          })}
      </svg>
      
      {/* Year labels at bottom */}
      <div className="flex justify-between items-center text-[10px] text-slate-400 dark:text-slate-500 mt-1 px-1 font-mono">
        <span>{data[0]?.year}</span>
        <span>{data[data.length - 1]?.year}</span>
      </div>
    </div>
  );
}
