import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { treatment_details } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const survivalData = await db
      .select({
        monthName: sql<string>`to_char(diagnosis_date, 'Month')`,
        monthNumber: sql<number>`EXTRACT(MONTH FROM diagnosis_date)::int`,
        survived: sql<number>`SUM(CASE WHEN survived THEN 1 ELSE 0 END)::int`,
        notSurvived: sql<number>`SUM(CASE WHEN NOT survived THEN 1 ELSE 0 END)::int`,
      })
      .from(treatment_details)
      .groupBy(
        sql`to_char(diagnosis_date, 'Month')`,
        sql`EXTRACT(MONTH FROM diagnosis_date)`
      )
      .orderBy(sql`EXTRACT(MONTH FROM diagnosis_date)`);

    const chartData = survivalData.map(({ monthName, survived, notSurvived }) => ({
      month: monthName.toLowerCase().trim(),
      survived,
      notSurvived,
    }));

    return NextResponse.json(chartData);
  } catch (error) {
    console.error('Error fetching survival distribution data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
