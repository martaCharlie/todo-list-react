import React from "react";
import "./style.css";
import { StyledTasks, Item } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map((task) => (
      <Item key={task.id} hidden={tasks.done && hideDone}>
        <button
          className="tasks__button tasks__button--toggleDone"
          onClick={() => toggleTaskDone(task.id)}
        >
          {task.done ? "✔" : ""}
        </button>
        <span
          className={`tasks__content${
            task.done ? " tasks__content--done" : ""
          }`}
        >
          {task.content}
        </span>
        <button
          className="tasks__button tasks__button--remove"
          onClick={() => removeTask(task.id)}
        >
          🗑
        </button>
      </Item>
    ))}
  </StyledTasks>
);

export default Tasks;
