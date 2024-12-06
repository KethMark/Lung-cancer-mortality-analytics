import { db } from "@/db/index";
import { patients, medical_history, treatment_details } from "@/db/schema";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const patientsWithRelations = await db
      .select()
      .from(patients)
      .leftJoin(medical_history, eq(patients.id, medical_history.patient_id))
      .leftJoin(treatment_details, eq(patients.id, treatment_details.patient_id))
      .orderBy(patients.id)

    return NextResponse.json(patientsWithRelations);
  } catch (error) {
    console.error("Failed to fetch patients with related data:", error);
    return NextResponse.json(
      { error: "Failed to fetch patients with related data" },
      { status: 500 }
    );
  }
}