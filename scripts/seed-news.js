import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from 'prisma-generated';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const jsonPath = path.resolve(__dirname, '../../newsData.json');
  console.log('Reading news data from:', jsonPath);
  
  if (!fs.existsSync(jsonPath)) {
    throw new Error(`File not found at path: ${jsonPath}`);
  }

  const rawData = fs.readFileSync(jsonPath, 'utf8');
  const newsList = JSON.parse(rawData);

  console.log(`Starting to seed ${newsList.length} news items...`);

  for (const item of newsList) {
    const publishedAt = item.publishedAt ? item.publishedAt.trim() : null;

    await prisma.news.upsert({
      where: { url: item.url },
      update: {
        id: item.id,
        name: item.name || null,
        author: item.author || null,
        title: item.title,
        description: item.description || null,
        urlToImage: item.urlToImage || null,
        publishedAt: publishedAt,
        content: item.content || null,
      },
      create: {
        id: item.id,
        name: item.name || null,
        author: item.author || null,
        title: item.title,
        description: item.description || null,
        url: item.url,
        urlToImage: item.urlToImage || null,
        publishedAt: publishedAt,
        content: item.content || null,
      },
    });
  }

  try {
    // PostgreSQL id sequence reset (자동 증가가 이어서 작동할 수 있도록)
    await prisma.$executeRawUnsafe(
      `SELECT setval(pg_get_serial_sequence('"News"', 'id'), (SELECT MAX(id) FROM "News"));`
    );
    console.log('Sequence reset successful.');
  } catch (seqError) {
    console.warn('Could not reset sequence (may not be PostgreSQL serial):', seqError.message);
  }

  console.log('Seeding finished successfully.');
}

main()
  .catch((e) => {
    console.error('Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
