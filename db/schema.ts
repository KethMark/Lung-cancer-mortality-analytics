import {
  integer,
  serial,
  varchar,
  pgTable,
  boolean,
  date,
} from "drizzle-orm/pg-core";

export const patients = pgTable('patients', {
  id: serial('id').primaryKey(),
  age: integer('age').notNull(),
  gender: varchar('gender', { length: 10 }).notNull(), 
  country: varchar('country', { length: 100 }).notNull(),
});

export const medical_history = pgTable('medical_history', {
  id: serial('id').primaryKey(),
  patient_id: integer('patient_id')
    .notNull()
    .references(() => patients.id),
  family_history: boolean('family_history').notNull(),
  smoking_status: varchar('smoking_status', { length: 20 }).notNull(),
  hypertension: boolean('hypertension').notNull(),
  asthma: boolean('asthma').notNull(),
  cirrhosis: boolean('cirrhosis').notNull(),
  other_cancer: boolean('other_cancer').notNull(),
});

export const treatment_details = pgTable('treatment_details', {
  id: serial('id').primaryKey(),
  patient_id: integer('patient_id')
    .notNull()
    .references(() => patients.id),
  diagnosis_date: date('diagnosis_date').notNull(),
  cancer_stage: varchar('cancer_stage', { length: 10 }).notNull(), 
  beginning_of_treatment_date: date('beginning_of_treatment_date').notNull(),
  treatment_type: varchar('treatment_type', { length: 50 }).notNull(), 
  end_treatment_date: date('end_treatment_date'),
  survived: boolean('survived').notNull(),
});