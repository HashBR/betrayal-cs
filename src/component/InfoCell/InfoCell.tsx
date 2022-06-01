import "./InfoCell.scss";

const InfoCell = () => {
  return (
    <div className="grid-item first info-cell">
      <img
        alt="PoE Logo"
        className="logo-img"
        src="https://web.poecdn.com/protected/image/layout/sentinellogo.png?key=gRYQQgc-tgNPZeE4SNPCdQ"
      />
      <div className="info-text">
        <span className="description">Betrayal Cheat Sheet</span>
        <br></br>
        <span className="version">v0.9.4</span>
      </div>
    </div>
  );
};

export default InfoCell;
