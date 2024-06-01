import { CleaningCycleChart } from "./Charts/CleaningCycleChart";
import { CardWithLink } from "./Components/CardWithLink";
import { PowerGenerationGraph } from "./Components/PowerGenerationGraph";
import { StickyNavbar } from "./Components/StickyNavbar";

const App = () => {
  return (
    <>
      <div className="App">
        <StickyNavbar />
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-4 gap-4">
         {/* <div className="flex justify-center"> */}
          <CardWithLink
            title="Power Genration"
            description="200 kwh"
            link="#"
            linkText="Learn More"
          />
          <CardWithLink
            title="This Month's Irradiation "
            description="20 kwh/m^2"
            link="#"
            linkText="Learn More"
            className="flex-fill" // Add this class for flexible width
          />
          <CardWithLink
            title="Bill Analysis"
            description="$25 "
            date="20/02/2024 - 20/03/2024"
          />
          <CardWithLink
            title="Payment Details"
            description=""
            link="#"
          />
        </div>

        <div className="flex justify-center">
          <PowerGenerationGraph/>
          <CleaningCycleChart 
           title="Cleaning Cycle "
          />
        </div>
        <div className="flex justify-center">
          <CardWithLink
            title="Card 3"
            description="Another card with sjfhsjhfjAnother card with sjfhsjhfj content. lorem
        sldfnlsknk
        sjfnjksdnjkfnfkndkln"
            link="#"
            linkText="Learn More"
          />
          
        </div>
      </div>
    </>
  );
};

export default App;
