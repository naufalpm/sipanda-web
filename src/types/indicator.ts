export type IndicatorCategory = 
  | 'sosial'
  | 'ekonomi'
  | 'ketenagakerjaan'
  | 'kesehatan';

export type TrendDirection = 'up' | 'down' | 'neutral';

/**
 * Polarity defines whether an upward movement is considered positive for public welfare
 * - 'higher_is_better': Higher is good (e.g. IPM, Economic Growth, RLS, Harapan Hidup) -> Up = Green, Down = Red
 * - 'lower_is_better': Lower is good (e.g. Poverty Rate, Unemployment/TPT, Gini Ratio) -> Down = Green, Up = Red
 * - 'neutral': Neutral metric
 */
export type TrendPolarity = 'higher_is_better' | 'lower_is_better' | 'neutral';

export interface DataPoint {
  year: number;
  value: number;
  note?: string;
}

export interface IndicatorStory {
  title: string;
  subtitle: string;
  summaryQuote: string;
  paragraphs: string[];
  keyHighlights: {
    label: string;
    value: string;
    description: string;
  }[];
  policyContext?: string;
}

export interface StrategicIndicator {
  id: string;
  code: string;
  slug: string;
  name: string;
  shortName: string;
  category: IndicatorCategory;
  unit: string;
  definition: string;
  polarity: TrendPolarity;
  dataPoints: DataPoint[];
  currentYear: number;
  currentValue: number;
  previousYear: number;
  previousValue: number;
  changeValue: number;
  changePercent: number;
  trendDirection: TrendDirection;
  isPositiveChange: boolean;
  insightSnippet: string;
  story: IndicatorStory;
  source: string;
  updatedAt: string;
  featured?: boolean;
}

export interface IndicatorCategoryMeta {
  id: IndicatorCategory;
  name: string;
  description: string;
  iconName: string;
  accentColor: string;
  badgeBg: string;
  badgeText: string;
}
