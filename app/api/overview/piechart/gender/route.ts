import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { patients } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const genderData = await db
      .select({
        gender: patients.gender,
        count: sql<number>`count(*)::int`,
      })
      .from(patients)
      .groupBy(patients.gender);

    const genderDistribution = genderData.map(({ gender, count }) => ({
      name: gender,
      value: count,
      fill: `var(--color-${gender})`,
    }));

    return NextResponse.json(genderDistribution);
  } catch (error) {
    console.error('Error fetching gender distribution data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}