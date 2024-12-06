import { NextResponse } from 'next/server';
import { sql } from 'drizzle-orm';
import { db } from '@/db';
import { patients, treatment_details } from '@/db/schema';

export async function GET() {
  try {
    const stats = await db.execute(sql`
      SELECT 
        DATE(td.beginning_of_treatment_date) as date,
        SUM(CASE WHEN p.gender = 'Male' THEN 1 ELSE 0 END)::int as male,
        SUM(CASE WHEN p.gender = 'Female' THEN 1 ELSE 0 END)::int as female
      FROM ${treatment_details} td
      JOIN ${patients} p ON td.patient_id = p.id
      WHERE td.beginning_of_treatment_date >= '2023-01-01'
      GROUP BY DATE(td.beginning_of_treatment_date)
      ORDER BY date
    `);

    return NextResponse.json(stats);
  } catch (error) {
    console.error('Error fetching treatment stats:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
