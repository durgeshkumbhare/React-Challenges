import React from "react";

const Cell = ({ mark, turn, onClick, disabled, index }) => {
  return (
    <button
    className="cell"
      aria-label={mark == null ? `Mark cell ${index} as ${turn}` : undefined}
      onClick={onClick}
      disabled={disabled}
    >
      <span aria-hidden={true}>{mark} </span>
    </button>
  );
};

export default Cell;
