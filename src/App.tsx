import "./App.scss";
import SyndicateRow from "./component/SyndicateRow/SyndicateRow";
import HeaderTable from "./component/HeaderTable/HeaderTable";
import Share from "./component/Share/Share";
import InfoCell from "./component/InfoCell/InfoCell";
import { useContext } from "react";
import { ISyndicate } from "./interfaces/ISyndicate";
import { SyndicateContext } from "./context/members";
import HiddenRow from "./component/HiddenRow/HiddenRow";
import { CountersContextProps } from "./interfaces/CountersContextProps";
import { CountersContext } from "./context/counters";

function App() {
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const { counters, setCounters, setShareCode } =
    useContext<CountersContextProps>(CountersContext);
  // return how many counters are hidden
  const visibleCount = counters.reduce((acc, counter) => {
    if (!counter.hidden) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);

  return (
    <div className="main-div">
      <div
        className="grid-container"
        style={{ gridTemplateColumns: `90px repeat(${visibleCount}, 1fr)` }}
      >
        <InfoCell></InfoCell>
        <HeaderTable></HeaderTable>
        <SyndicateRow
          rowIndex={3}
          letter={"T"}
          areaName={"transportation"}
        ></SyndicateRow>
        <SyndicateRow
          rowIndex={2}
          letter={"F"}
          areaName={"fortification"}
        ></SyndicateRow>
        <SyndicateRow
          rowIndex={1}
          letter={"R"}
          areaName={"research"}
        ></SyndicateRow>
        <SyndicateRow
          rowIndex={0}
          letter={"I"}
          areaName={"intervention"}
        ></SyndicateRow>
      </div>
      <div className="menu">
        <HiddenRow></HiddenRow>
        <Share></Share>
      </div>
    </div>
  );
}

export default App;
