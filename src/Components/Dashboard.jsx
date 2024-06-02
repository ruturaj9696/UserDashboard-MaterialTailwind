import { BillAnalysisCard } from "../Components/BillAnalysisCard";
import { CardWithLink } from "../Components/CardWithLink";
import { IrradiationCard } from "../Components/IrradiationCard";
import { PlantInformationCard } from "../Components/PlantInformationCard";
import { PowerGenerationCard } from "../Components/PowerGenerationCard";
import { PowerGenerationGraph } from "../Components/PowerGenerationGraph";
import { StickyNavbar } from "../Components/StickyNavbar";
import { CleaningCycleCard } from "./CleaningCycleCard";
import { EpiCard } from "./EpiCard";
import { FinancialAnalysis } from "./FinancialAnalysis";
import { ReportCard } from "./ReportCard";
const Dashboard = () => {
  return (
    <>
      <div className="App">
        <StickyNavbar />
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4">
          <PowerGenerationCard />
          <IrradiationCard />
          <BillAnalysisCard />
          <EpiCard />
        </div>
        <div className="grid grid-cols-2 ">
          <PowerGenerationGraph />
          <div className="grid grid-rows-1-4 gap-4">
            <CleaningCycleCard />
            <div className="grid grid-cols-2">
              <ReportCard />
              <PlantInformationCard />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <FinancialAnalysis/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
