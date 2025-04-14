import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tap = ({ tab, isFilterTab, isActiveTab, handleClick }) => {
  const snap = useSnapshot(state);

  return (
    <div
      key={tab.name}
      className={`tab-btn ${isFilterTab ? "" : ""}`}
      onClick={handleClick}
    >
      <img
        src={tab.icon}
        alt={tab.name}
        className={`${
          isFilterTab ? "w-3/3 h-3/3" : "w-11/12 h-11/12 object-contain"
        }`}
      ></img>
    </div>
  );
};

export default Tap;
