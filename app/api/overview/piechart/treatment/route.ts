import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { treatment_details } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const treatmentData = await db
      .select({
        treatment_type: treatment_details.treatment_type,
        count: sql<number>`count(*)::int`,
      })
      .from(treatment_details)
      .groupBy(treatment_details.treatment_type);

    const chartData = treatmentData.map(({ treatment_type, count }) => ({
      treatment: treatment_type.toLowerCase().replace(/\s+/g, '-'), 
      value: count, 
      fill: `var(--color-${treatment_type.toLowerCase().replace(/\s+/g, '-')})`,
    }));

    return NextResponse.json(chartData);
  } catch (error) {
    console.error('Error fetching treatment distribution data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}