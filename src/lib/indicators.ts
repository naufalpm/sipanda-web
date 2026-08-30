import { prisma } from '@/lib/prisma';
import { 
  StrategicIndicator, 
  IndicatorCategory, 
  TrendPolarity, 
  DataPoint, 
  Publication 
} from '@/types/indicator';
import { 
  STRATEGIC_INDICATORS as FALLBACK_INDICATORS, 
  getIndicatorBySlug as getFallbackBySlug,
  CATEGORIES 
} from '@/data/mockIndicators';

/**
 * Calculates dynamic trend metrics (currentValue, changeValue, changePercent, trendDirection) from data points
 */
export function calculateIndicatorMetrics(item: any): StrategicIndicator {
  const sortedPoints = [...(item.dataPoints || [])].sort((a, b) => a.year - b.year);
  const len = sortedPoints.length;
  const current = sortedPoints[len - 1] || { year: 2024, value: 0 };
  const previous = sortedPoints[len - 2] || { year: 2023, value: current.value };

  const decimals = item.code === 'GINI' ? 3 : 2;
  const rawDiff = current.value - previous.value;
  const changeValue = parseFloat(rawDiff.toFixed(decimals));
  const changePercent = previous.value !== 0 
    ? parseFloat(((rawDiff / Math.abs(previous.value)) * 100).toFixed(2)) 
    : 0;

  let trendDirection: 'up' | 'down' | 'neutral' = 'neutral';
  if (changeValue > 0) trendDirection = 'up';
  else if (changeValue < 0) trendDirection = 'down';

  let isPositiveChange = true;
  if (item.polarity === 'higher_is_better') {
    isPositiveChange = changeValue >= 0;
  } else if (item.polarity === 'lower_is_better') {
    isPositiveChange = changeValue <= 0;
  }

  return {
    id: item.id,
    code: item.code,
    slug: item.slug,
    name: item.name,
    shortName: item.shortName || item.name,
    category: item.category as IndicatorCategory,
    unit: item.unit || '',
    definition: item.definition || '',
    polarity: (item.polarity as TrendPolarity) || 'higher_is_better',
    featured: item.featured ?? false,
    currentYear: current.year,
    currentValue: current.value,
    previousYear: previous.year,
    previousValue: previous.value,
    changeValue,
    changePercent,
    trendDirection,
    isPositiveChange,
    dataPoints: sortedPoints.map((dp: any) => ({
      year: dp.year,
      value: dp.value,
      note: dp.note || undefined
    })),
    insightSnippet: item.insightSnippet || '',
    story: item.story || {
      title: item.name,
      summaryQuote: item.insightSnippet || '',
      paragraphs: [],
      keyHighlights: []
    },
    publications: (item.publications || []).map((p: any) => ({
      id: p.id,
      title: p.title,
      year: p.year,
      publisher: p.publisher || 'BPS Kabupaten Teluk Bintuni',
      catalogNumber: p.catalogNumber || undefined,
      publicationNumber: p.publicationNumber || undefined,
      releaseDate: p.releaseDate || '',
      description: p.description || '',
      abstraction: p.abstraction || undefined,
      pageCount: p.pageCount || undefined,
      bpsUrl: p.bpsUrl || undefined,
      fileSize: p.fileSize || undefined,
      coverGradient: p.coverGradient || undefined,
      coverImage: p.coverUrl || p.coverImage || undefined,
      pdfUrl: p.pdfUrl || undefined,
    })),
    source: item.source || 'BPS Kabupaten Teluk Bintuni',
    updatedAt: typeof item.updatedAt === 'string' ? item.updatedAt : item.updatedAt ? item.updatedAt.toISOString().split('T')[0] : '2025'
  };
}

/**
 * Fetch all strategic indicators from PostgreSQL Database (Prisma)
 * with reliable fallback to verified static data if DB is offline.
 */
export async function getStrategicIndicators(): Promise<StrategicIndicator[]> {
  try {
    const dbIndicators = await prisma.indicator.findMany({
      include: {
        dataPoints: {
          orderBy: { year: 'asc' }
        },
        publications: {
          orderBy: { year: 'desc' }
        }
      }
    });

    if (dbIndicators && dbIndicators.length > 0) {
      return dbIndicators.map((item: any) => calculateIndicatorMetrics(item));
    }
  } catch (error) {
    console.warn('⚠️ Database query failed or unavailable, falling back to static verified data:', error);
  }

  return FALLBACK_INDICATORS;
}

/**
 * Fetch a single indicator by slug from PostgreSQL Database (Prisma)
 */
export async function getIndicatorBySlug(slug: string): Promise<StrategicIndicator | null> {
  try {
    const dbIndicator = await prisma.indicator.findFirst({
      where: { slug },
      include: {
        dataPoints: {
          orderBy: { year: 'asc' }
        },
        publications: {
          orderBy: { year: 'desc' }
        }
      }
    });

    if (dbIndicator) {
      return calculateIndicatorMetrics(dbIndicator as any);
    }
  } catch (error) {
    console.warn(`⚠️ DB query for slug '${slug}' failed, falling back to static verified data:`, error);
  }

  return getFallbackBySlug(slug) || null;
}

export { CATEGORIES };
