import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { medical_history } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const conditionData = await db
      .select({
        hypertensionCount: sql<number>`SUM(CASE WHEN hypertension THEN 1 ELSE 0 END)::int`,
        asthmaCount: sql<number>`SUM(CASE WHEN asthma THEN 1 ELSE 0 END)::int`,
        cirrhosisCount: sql<number>`SUM(CASE WHEN cirrhosis THEN 1 ELSE 0 END)::int`,
        otherCancerCount: sql<number>`SUM(CASE WHEN other_cancer THEN 1 ELSE 0 END)::int`,
      })
      .from(medical_history);

    const { 
      hypertensionCount, 
      asthmaCount, 
      cirrhosisCount, 
      otherCancerCount 
    } = conditionData[0];

    const responseData = [
      { condition: 'hypertension', count: hypertensionCount, fill: "var(--color-hypertension)" },
      { condition: 'asthma', count: asthmaCount, fill: "var(--color-asthma)" },
      { condition: 'cirrhosis', count: cirrhosisCount, fill: "var(--color-cirrhosis)" },
      { condition: 'other_cancer', count: otherCancerCount, fill: "var(--color-other_cancer)" },
    ];

    return NextResponse.json(responseData);
  } catch (error) {
    console.error('Error fetching condition data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
