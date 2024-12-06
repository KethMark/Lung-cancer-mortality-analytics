import { Patient } from "@/app/information/patients/columns";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type MedicalFormation = {
  personalDetails: Patient;
};

export const MedicalTable = ({ personalDetails }: MedicalFormation) => {
  const medicalinfo = personalDetails.medical_history;

  const formatBoolean = (value: boolean) => {
    return value ? "Yes" : "No";
  };

  return (
    <Table>
      <TableCaption>medical information.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Family History</TableHead>
          <TableHead>Smoking Status</TableHead>
          <TableHead>Hypertension</TableHead>
          <TableHead>Asthma</TableHead>
          <TableHead>Cirrhosis</TableHead>
          <TableHead className="text-right">Other Cancer</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>{medicalinfo.patient_id}</TableCell>
          <TableCell className="font-medium">
            {formatBoolean(medicalinfo.family_history)}
          </TableCell>
          <TableCell>{medicalinfo.smoking_status}</TableCell>
          <TableCell>{formatBoolean(medicalinfo.hypertension)}</TableCell>
          <TableCell>{formatBoolean(medicalinfo.asthma)}</TableCell>
          <TableCell>{formatBoolean(medicalinfo.cirrhosis)}</TableCell>
          <TableCell className="text-right">
            {formatBoolean(medicalinfo.other_cancer)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
