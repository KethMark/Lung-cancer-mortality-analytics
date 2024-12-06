import { CancerComponent } from "@/components/overview/piechart/cancer";
import { GenderComponent } from "@/components/overview/piechart/gender";
import { SurvivalComponent } from "@/components/overview/line/survival";
import { TreatmentComponent } from "@/components/overview/piechart/treatment";
import { DiagnosedPatientComponent } from "@/components/overview/line/patient";
import { DiagnosedAgeComponent } from "@/components/overview/line/age";
import { PrevalanceComponent } from "@/components/overview/bar/prevalence";
import { SmokingComponent } from "@/components/overview/bar/smoking";
import { GenderAreaComponent } from "@/components/overview/area/gender";
import { SurvivalAreaComponent } from "@/components/overview/area/survival";

export default function Home() {
  return (
    <div className="p-2 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold">
          {" "}
          Lung Cancer Mortality Analytics{" "}
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <CancerComponent />
        <GenderComponent />
        <TreatmentComponent />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <SurvivalComponent />
        <DiagnosedPatientComponent />
        <DiagnosedAgeComponent />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <PrevalanceComponent />
        <SmokingComponent />
      </div>

      <div className="grid grid-cols-1 space-y-4">
        <GenderAreaComponent />
        <SurvivalAreaComponent />
      </div>
    </div>
  );
}
