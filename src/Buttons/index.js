import React, { Fragment } from "react";
import "./style.css";

const Buttons = ({ tasks, hideDoneTasks }) => (
  <div className="buttons">
    {tasks.lenght > 0 && (
      <Fragment>
        <button className="buttons__button">
          {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </Fragment>
    )}
  </div>
);

export default Buttons;
