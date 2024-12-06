import { NextResponse } from 'next/server';
import { db } from '@/db/index';
import { treatment_details } from '@/db/schema';
import { sql } from 'drizzle-orm';

export async function GET() {
  try {
    const stageData = await db
      .select({
        stage: treatment_details.cancer_stage,
        count: sql<number>`COUNT(*)::int`,
      })
      .from(treatment_details)
      .groupBy(treatment_details.cancer_stage);

    const romanToNumber: Record<string, number> = {
      I: 1,
      II: 2,
      III: 3,
      IV: 4,
    };

    const sortedStageData = stageData.sort((a, b) => {
      const stageA = a.stage.split(' ')[1]; 
      const stageB = b.stage.split(' ')[1];
      return romanToNumber[stageA] - romanToNumber[stageB];
    });

    const cancerStagePieChart = sortedStageData.map(({ stage, count }) => {
      const romanNumeral = stage.split(' ')[1]; 
      return {
        name: romanNumeral,
        value: count,
        fill: `var(--color-${romanNumeral})`, 
      };
    });

    return NextResponse.json(cancerStagePieChart);
  } catch (error) {
    console.error('Error fetching cancer stage data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
