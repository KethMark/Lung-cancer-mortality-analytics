CREATE TABLE IF NOT EXISTS "treatment_details" (
	"id" serial PRIMARY KEY NOT NULL,
	"patient_id" integer NOT NULL,
	"diagnosis_date" date NOT NULL,
	"cancer_stage" varchar(10) NOT NULL,
	"beginning_of_treatment_date" date NOT NULL,
	"treatment_type" varchar(50) NOT NULL,
	"end_treatment_date" date,
	"survived" boolean NOT NULL
);
--> statement-breakpoint
ALTER TABLE "treatment_outcomes" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "treatment_outcomes" CASCADE;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "family_history" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "smoking_status" SET DATA TYPE varchar(20);--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "smoking_status" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "hypertension" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "asthma" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "cirrhosis" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ALTER COLUMN "other_cancer" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "medical_history" ADD COLUMN "id" serial PRIMARY KEY NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "treatment_details" ADD CONSTRAINT "treatment_details_patient_id_patients_id_fk" FOREIGN KEY ("patient_id") REFERENCES "public"."patients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "medical_history" DROP COLUMN IF EXISTS "history_id";--> statement-breakpoint
ALTER TABLE "medical_history" DROP COLUMN IF EXISTS "cancer_stage";--> statement-breakpoint
ALTER TABLE "medical_history" DROP COLUMN IF EXISTS "bmi";--> statement-breakpoint
ALTER TABLE "medical_history" DROP COLUMN IF EXISTS "cholesterol_level";