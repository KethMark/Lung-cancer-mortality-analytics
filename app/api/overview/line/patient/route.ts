import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { treatment_details } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const survivalData = await db
      .select({
        monthName: sql<string>`to_char(diagnosis_date, 'Mon')`,
        monthNumber: sql<number>`EXTRACT(MONTH FROM diagnosis_date)::int`,
        patients: sql<number>`COUNT(*)::int`, // Explicitly cast to integer
      })
      .from(treatment_details)
      .groupBy(
        sql`to_char(diagnosis_date, 'Mon')`,
        sql`EXTRACT(MONTH FROM diagnosis_date)`
      )
      .orderBy(sql`EXTRACT(MONTH FROM diagnosis_date)`);

    const chartData = survivalData.map(({ monthName, patients }) => ({
      month: monthName.toLowerCase().trim(),
      patients,
    }));

    return NextResponse.json(chartData);
  } catch (error) {
    console.error('Error fetching monthly patient data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
