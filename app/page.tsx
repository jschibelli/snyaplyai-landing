import HeaderCTA from "./components/HeaderCTA";
import ProblemSolution from "./components/ProblemSolution";
import CompetitiveDifferentiation from "./components/CompetitiveDifferentiation";
import CoreFeatures from "./components/CoreFeatures";
import BusinessImpact from "./components/BusinessImpact";
import SocialProof from "./components/SocialProof";
import PricingTable from "./components/PricingTable";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <HeaderCTA />
      <ProblemSolution />
      <CompetitiveDifferentiation />
      <CoreFeatures />
      <BusinessImpact />
      <SocialProof />
      <PricingTable />
      <FinalCTA />
      <Footer />
    </div>
  );
}