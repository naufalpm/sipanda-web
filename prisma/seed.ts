import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import 'dotenv/config';
import { RAW_INDICATORS } from '../src/data/mockIndicators';

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🚀 Starting SIPANDA Database Seeder...');

  // 1. Collect all distinct publications
  const publicationMap = new Map<string, any>();
  for (const ind of RAW_INDICATORS) {
    if (ind.publications) {
      for (const pub of ind.publications) {
        if (!publicationMap.has(pub.id)) {
          publicationMap.set(pub.id, pub);
        }
      }
    }
  }

  console.log(`📚 Seeding ${publicationMap.size} Publications...`);
  for (const pub of Array.from(publicationMap.values())) {
    await prisma.publication.upsert({
      where: { id: pub.id },
      update: {
        title: pub.title,
        year: pub.year,
        coverUrl: pub.coverUrl,
        pdfUrl: pub.pdfUrl,
        catalogNumber: pub.catalogNumber,
        publicationNumber: pub.publicationNumber,
        releaseDate: pub.releaseDate,
        description: pub.description,
      },
      create: {
        id: pub.id,
        title: pub.title,
        year: pub.year,
        coverUrl: pub.coverUrl,
        pdfUrl: pub.pdfUrl,
        catalogNumber: pub.catalogNumber,
        publicationNumber: pub.publicationNumber,
        releaseDate: pub.releaseDate,
        description: pub.description,
      },
    });
  }

  // 2. Seed Indicators & DataPoints
  console.log(`📊 Seeding ${RAW_INDICATORS.length} Strategic Indicators...`);
  for (const ind of RAW_INDICATORS) {
    // Upsert indicator
    const indicator = await prisma.indicator.upsert({
      where: { code: ind.code },
      update: {
        id: ind.id,
        slug: ind.slug,
        name: ind.name,
        shortName: ind.shortName,
        category: ind.category,
        unit: ind.unit,
        definition: ind.definition,
        polarity: ind.polarity,
        featured: ind.featured,
        insightSnippet: ind.insightSnippet,
        story: ind.story ? JSON.parse(JSON.stringify(ind.story)) : null,
        source: ind.source,
        publications: ind.publications
          ? {
              set: ind.publications.map((p) => ({ id: p.id })),
            }
          : undefined,
      },
      create: {
        id: ind.id,
        code: ind.code,
        slug: ind.slug,
        name: ind.name,
        shortName: ind.shortName,
        category: ind.category,
        unit: ind.unit,
        definition: ind.definition,
        polarity: ind.polarity,
        featured: ind.featured,
        insightSnippet: ind.insightSnippet,
        story: ind.story ? JSON.parse(JSON.stringify(ind.story)) : null,
        source: ind.source,
        publications: ind.publications
          ? {
              connect: ind.publications.map((p) => ({ id: p.id })),
            }
          : undefined,
      },
    });

    // Seed DataPoints
    for (const dp of ind.dataPoints) {
      await prisma.dataPoint.upsert({
        where: {
          indicatorId_year: {
            indicatorId: indicator.id,
            year: dp.year,
          },
        },
        update: {
          value: dp.value,
          note: dp.note || null,
        },
        create: {
          indicatorId: indicator.id,
          year: dp.year,
          value: dp.value,
          note: dp.note || null,
        },
      });
    }

    console.log(`  ✓ Seeded ${ind.name} (${ind.code}) with ${ind.dataPoints.length} data points`);
  }

  console.log('✅ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during database seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
