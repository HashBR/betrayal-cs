import "./App.scss";
import FortificationRow from "./component/FortificationRow/FortificationRow";
import HeaderTable from "./component/HeaderTable/HeaderTable";
import InterventionRow from "./component/InterventionRow/InterventionRow";
import ResearchRow from "./component/ResearchRow/ResearchRow";
import TransportationRow from "./component/TransportationRow/TransportationRow";

function App() {
  console.log("%PUBLIC_URL%");
  return (
    <div className="main-div grid-container">
      <div className="grid-item first">:)</div>
      <HeaderTable></HeaderTable>
      <TransportationRow></TransportationRow>
      <FortificationRow></FortificationRow>
      <ResearchRow></ResearchRow>
      <InterventionRow></InterventionRow>
    </div>
  );
}

export default App;
