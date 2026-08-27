import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { 
  STRATEGIC_INDICATORS, 
  CATEGORIES, 
  getIndicatorBySlug 
} from '@/data/mockIndicators';
import { IndicatorStoryContainer } from '@/components/story/IndicatorStoryContainer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const indicator = getIndicatorBySlug(slug);

  if (!indicator) {
    return {
      title: 'Indikator Tidak Ditemukan | SIPANDA Teluk Bintuni',
      description: 'Halaman detail indikator strategis BPS Kabupaten Teluk Bintuni.'
    };
  }

  return {
    title: `${indicator.name} (${indicator.currentYear}) — SIPANDA | BPS Teluk Bintuni`,
    description: `${indicator.name} Kabupaten Teluk Bintuni tercatat sebesar ${indicator.currentValue}${indicator.unit}. ${indicator.insightSnippet}`,
    openGraph: {
      title: `${indicator.name} Kabupaten Teluk Bintuni: ${indicator.currentValue}${indicator.unit}`,
      description: indicator.insightSnippet,
      type: 'article',
    }
  };
}

export async function generateStaticParams() {
  return STRATEGIC_INDICATORS.map((indicator) => ({
    slug: indicator.slug,
  }));
}

export default async function IndicatorStoryPage({ params }: PageProps) {
  const { slug } = await params;
  const indicator = getIndicatorBySlug(slug);

  if (!indicator) {
    notFound();
  }

  const categoryMeta = CATEGORIES.find((c) => c.id === indicator.category);

  return (
    <IndicatorStoryContainer
      indicator={indicator}
      categoryMeta={categoryMeta}
      allIndicators={STRATEGIC_INDICATORS}
    />
  );
}
