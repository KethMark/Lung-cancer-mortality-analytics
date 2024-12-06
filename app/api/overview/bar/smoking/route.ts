import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { medical_history } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const smokingStatusData = await db
      .select({
        smokingStatus: sql<string>`smoking_status`,
        count: sql<number>`COUNT(*)::int`,
      })
      .from(medical_history)
      .groupBy(sql`smoking_status`);

    const responseData = smokingStatusData.map(({ smokingStatus, count }) => ({
      smokingStatus: smokingStatus.replace(/\s+/g, '_').toLowerCase(),
      count,
      fill: `var(--color-${smokingStatus.replace(/\s+/g, '_').toLowerCase()})`,
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching smoking status data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
