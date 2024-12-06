import React from "react";
import { Patient } from "./columns";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileTextIcon, IdCardIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { MedicalTable } from "@/components/medical_history/table";
import { TreatmentTable } from "@/components/treatment_details/table";

type Information = {
  personalDetails: Patient
};

export const DataInformation = ({ personalDetails }: Information) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"icon"} variant={"secondary"}>
          <FileTextIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-7xl">
        <div className="mx-auto w-full max-w-6xl">
          <DialogHeader>
            <DialogTitle>Patient Information</DialogTitle>
            <DialogDescription>This was a record information of patient</DialogDescription>
          </DialogHeader>
          <div className="mt-3">
            <Tabs defaultValue="account" className="w-[1152px]">
              <TabsList className="grid grid-cols-2 w-[300px]">
                <TabsTrigger value="medical_history">
                  Medical History
                </TabsTrigger>
                <TabsTrigger value="treatment">Treatment</TabsTrigger>
              </TabsList>
              <TabsContent value="medical_history">
                <MedicalTable personalDetails={personalDetails}/>
              </TabsContent>
              <TabsContent value="treatment">
                <TreatmentTable personalDetails={personalDetails}/>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
