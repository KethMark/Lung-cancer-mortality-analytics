import { NextResponse } from 'next/server';
import { sql } from 'drizzle-orm';
import { db } from '@/db';
import { treatment_details } from '@/db/schema';

export async function GET() {
  try {
    const stats = await db.execute(sql`
      SELECT 
        DATE(td.diagnosis_date) as date,
        SUM(CASE WHEN td.survived = TRUE THEN 1 ELSE 0 END)::int as survived,
        SUM(CASE WHEN td.survived = FALSE THEN 1 ELSE 0 END)::int as not_survived
      FROM ${treatment_details} td
      WHERE td.diagnosis_date >= '2023-01-01'
      GROUP BY DATE(td.diagnosis_date)
      ORDER BY date
    `);

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching survival stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
