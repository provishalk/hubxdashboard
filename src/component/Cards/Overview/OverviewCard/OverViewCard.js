import React from "react";
const OverViewCard = ({ children, count, tag, unit }) => {
  return (
    <div className="overview__box">
      <div className="overview__card">
        <div className="overview__box__icon">{children}</div>
        <p className="overview__card__tag">{tag}</p>
        <div className="d-flex  justify-content-center">
          <h2 className="overview__card__count">
          {count}
        </h2>
        <span className="overview__unit">{unit}</span>
        </div>
        
      </div>
    </div>
  );
};

export default OverViewCard;
