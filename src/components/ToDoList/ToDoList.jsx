import React from "react";
import "./ToDoList.css";

const ToDoList = ({ task, index }) => {
  console.log(task, index);

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.text}</td>
      <td>{task.isCompleted ? "Done" : "Still in Progress"}</td>
    </tr>
  );
};

export default ToDoList;
