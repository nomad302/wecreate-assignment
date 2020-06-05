import React from "react";

const ProcessBlock = (props) => {
  return (
    <div className="process">
      <div
        className="processblock-container"
        style={{ background: props.background }}>
        <img src={props.img} alt={props.name} />
      </div>
      <p>
        <b>{props.name}</b>
      </p>
    </div>
  );
};

export default ProcessBlock;
