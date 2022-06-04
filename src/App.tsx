import "./App.scss";
import SyndicateRow from "./component/SyndicateRow/SyndicateRow";
import HeaderTable from "./component/HeaderTable/HeaderTable";
import TableManagement from "./component/TableManagement/TableManagement";
import InfoCell from "./component/InfoCell/InfoCell";
import { useContext } from "react";
import HideColumnMenu from "./component/HideColumnMenu/HideColumnMenu";
import { CountersContextProps } from "./interfaces/CountersContextProps";
import { CountersContext } from "./context/counters";
import { HelpModalContext } from "./context/helpmodal";
import HelpModal from "./component/HelpModal/HelpModal";

function App() {
  const { counters } = useContext<CountersContextProps>(CountersContext);
  // return how many counters are hidden
  const visibleCount = counters.reduce((acc, counter) => {
    return acc + (counter.hidden ? 0 : 1);
  }, 0);
  const { isHelpOpen } = useContext(HelpModalContext);

  return (
    <div className="main-div">
      {isHelpOpen && <HelpModal></HelpModal>}
      {visibleCount === 0 && (
        <div className="grid-item all-hidden">
          <h1>Ops, you hid everyone!</h1>
          <img
            alt="Tormented Spirit"
            src={`${process.env.PUBLIC_URL}/images/Torment.png`}
          />
        </div>
      )}
      {visibleCount > 0 && (
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
      )}
      <div className="menu">
        <HideColumnMenu></HideColumnMenu>
        <TableManagement></TableManagement>
      </div>
    </div>
  );
}

export default App;
