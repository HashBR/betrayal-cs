import "./App.scss";
import SyndicateRow from "./component/SyndicateRow/SyndicateRow";
import HeaderTable from "./component/HeaderTable/HeaderTable";
import Share from "./component/Share/Share";
import InfoCell from "./component/InfoCell/InfoCell";

function App() {
  return (
    <div className="main-div">
      <div className="grid-container">
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
        <Share></Share>
        <img
          src={
            window.location.origin +
            "/betrayal-cs/images/transportation/aisling-t.svg"
          }
          alt="Aisling Transporataion"
        />
      </div>
    </div>
  );
}

export default App;
