import "./InfoCell.scss";

const InfoCell = () => {
  return (
    <div className="grid-item first info-cell">
      <img
        alt="PoE Logo"
        className="logo-img"
        src="https://web.poecdn.com/protected/image/layout/sentinellogo.png?key=gRYQQgc-tgNPZeE4SNPCdQ"
      />
      <span className="info-text">Betrayal Cheat Sheet</span>
      <span className="info-text">v0.9.2</span>
    </div>
  );
};

export default InfoCell;
