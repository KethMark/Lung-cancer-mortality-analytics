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

type TreatmentFormation = {
  personalDetails: Patient;
};

export const TreatmentTable = ({ personalDetails }: TreatmentFormation) => {
  const treatmentinfo = personalDetails.treatment_details;

  const formatBoolean = (value: boolean) => {
    return value ? "Yes" : "No";
  };

  return (
    <Table>
      <TableCaption>treatment information.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Diagnosis Date</TableHead>
          <TableHead>Cancer Stage</TableHead>
          <TableHead>Beggining of the Treatment Date</TableHead>
          <TableHead>Treatment Type</TableHead>
          <TableHead>End Treatment Date</TableHead>
          <TableHead className="text-right">Survived</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">
            {treatmentinfo.diagnosis_date}
          </TableCell>
          <TableCell>{treatmentinfo.cancer_stage}</TableCell>
          <TableCell>{treatmentinfo.beginning_of_treatment_date}</TableCell>
          <TableCell>{treatmentinfo.treatment_type}</TableCell>
          <TableCell>{treatmentinfo.end_treatment_date}</TableCell>
          <TableCell className="text-right">
            {formatBoolean(treatmentinfo.survived)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
