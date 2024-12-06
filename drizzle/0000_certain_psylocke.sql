CREATE TABLE IF NOT EXISTS "medical_history" (
	"history_id" serial PRIMARY KEY NOT NULL,
	"patient_id" integer NOT NULL,
	"cancer_stage" varchar(20),
	"family_history" boolean,
	"smoking_status" varchar(50),
	"bmi" numeric(5, 2),
	"cholesterol_level" numeric(6, 2),
	"hypertension" boolean,
	"asthma" boolean,
	"cirrhosis" boolean,
	"other_cancer" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "patients" (
	"id" serial PRIMARY KEY NOT NULL,
	"age" integer NOT NULL,
	"gender" varchar(10) NOT NULL,
	"country" varchar(100) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "treatment_outcomes" (
	"outcome_id" serial PRIMARY KEY NOT NULL,
	"patient_id" integer NOT NULL,
	"treatment_type" varchar(100),
	"survived" boolean
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "medical_history" ADD CONSTRAINT "medical_history_patient_id_patients_id_fk" FOREIGN KEY ("patient_id") REFERENCES "public"."patients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "treatment_outcomes" ADD CONSTRAINT "treatment_outcomes_patient_id_patients_id_fk" FOREIGN KEY ("patient_id") REFERENCES "public"."patients"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
