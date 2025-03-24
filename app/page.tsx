import HeaderCTA from "./components/HeaderCTA";
import ProblemSolution from "./components/ProblemSolution";
import CompetitiveDifferentiation from "./components/CompetitiveDifferentiation";
import CoreFeatures from "./components/CoreFeatures";
import BusinessImpact from "./components/BusinessImpact";
import PricingTable from "./components/PricingTable";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import LeadersSection from './components/LeadersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeaderCTA />
      <ProblemSolution />
      <LeadersSection />
      <CompetitiveDifferentiation />
      <BusinessImpact />
      <CoreFeatures />

      <PricingTable />
      <FinalCTA />
      <Footer />
    </main>
  );
}