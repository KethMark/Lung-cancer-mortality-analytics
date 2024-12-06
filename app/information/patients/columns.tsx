import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/data-table-header";
import { ages, countries, genders } from "../../../lib/data";
import { DataInformation } from "./data";

export type Patient = {
  patients: {
    id: number;
    age: number;
    gender: string;
    country: string;
  }
  medical_history: {
    id: number;
    patient_id: number;
    family_history: boolean;
    smoking_status: string;
    hypertension: boolean;
    asthma: boolean;
    cirrhosis: boolean;
    other_cancer: boolean;
  }
  treatment_details: {
    id: number;
    patient_id: number;
    diagnosis_date: string;
    cancer_stage: string;
    beginning_of_treatment_date: string;
    treatment_type: string;
    end_treatment_date: string | null;
    survived: boolean;
  }
}

export const columnsPatient: ColumnDef<Patient>[] = [
  {
    accessorKey: "patients.id",
    header: "ID",
  },
  {
    accessorKey: "patients.age",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Age"} props={ages} />
    ),
    cell: ({ row }) => {
      const age = ages.find((age) => age.value === row.original.patients.age);
      
      if (!age) {
        return null;
      }

      return <span>{age.label}</span>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.original.patients.age);
    },
  },
  {
    accessorKey: "patients.gender",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Gender"} props={genders} />
    ),
    cell: ({ row }) => {
      const gender = genders.find(
        (gender) => gender.value === row.original.patients.gender
      );
  
      if (!gender) {
        return null;
      }
  
      return <span>{gender.label}</span>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.original.patients.gender);
    },
  },
  {
    accessorKey: "patients.country",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title={"Country"} props={countries}/>
    ),
    cell: ({ row }) => {
      const country = countries.find(
        (country) => country.value === row.original.patients.country
      );
  
      if (!country) {
        return null;
      }
  
      return <span>{country.label}</span>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.original.patients.country);
    },
  },
  {
    id: 'actions',
    header: 'Information',
    enableHiding: false,
    cell: ({ row }) => {
      const patient = row.original;

      return <DataInformation personalDetails={patient}/>
    }
  }
];