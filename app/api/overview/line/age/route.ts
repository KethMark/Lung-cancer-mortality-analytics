import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { treatment_details, patients } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const yearlyAverageAgeData = await db
      .select({
        year: sql<number>`EXTRACT(YEAR FROM diagnosis_date)::text`,
        averageAge: sql<number>`AVG(age)::int`, // Calculate average age as an integer
      })
      .from(treatment_details)
      .innerJoin(patients, sql`patients.id = treatment_details.patient_id`) // Join with patients table
      .groupBy(sql`EXTRACT(YEAR FROM diagnosis_date)`) // Group by year
      .orderBy(sql`EXTRACT(YEAR FROM diagnosis_date)`); // Order by year

    const responseData = yearlyAverageAgeData.map(({ year, averageAge }) => ({
      year,
      averageAge,
    }));

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching yearly average age data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
