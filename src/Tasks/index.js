import React from "react";
import { StyledTasks, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <StyledTasks>
    {tasks.map((task) => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <Button toggleDone onClick={() => toggleTaskDone(task.id)}>
          {task.done ? "✔" : ""}
        </Button>
        <Content done={task.done}>{task.content}</Content>
        <Button remove onClick={() => removeTask(task.id)}>
          🗑
        </Button>
      </Item>
    ))}
  </StyledTasks>
);

export default Tasks;
