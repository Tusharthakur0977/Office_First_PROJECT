import React, { useContext } from "react";
import "./darkModeBtn.css";
import { Context } from "../../../context/Context";

const Darkmodebtn = () => {
  const { toggleDark, handleModeChange } = useContext(Context);
  return (
    <>
      <div id="mySidenav" className="sidenav ">
        <div>
          <input
            type="checkbox"
            checked={toggleDark}
            onChange={handleModeChange}
            className="checkbox"
            id="checkbox"
          />
          <label htmlFor="checkbox" className="label">
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball" />
          </label>
        </div>
      </div>
    </>
  );
};

export default Darkmodebtn;
