import React, { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import "./ToDo.css";
import { Navbar, Container, Table } from "react-bootstrap";

const ToDo = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Clean you room",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Do your homework",
      isCompleted: true,
    },
    {
      id: 3,
      text: "To go to cinema",
      isCompleted: false,
    },
  ]);

  const addToDo = (text) => {
    const newToDo = [...tasks, { text, isCompleted: false }];
    setTask(newToDo);
  };

  return (
    <div>
      <Navbar expand="lg" variant="light" bg="light" className="my-3">
        <Container>
          <Navbar.Brand href="#">To-Do List</Navbar.Brand>
        </Container>
      </Navbar>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Task text</th>
            <th>Task status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <ToDoList key={index} index={index} task={task} />
          ))}
        </tbody>
      </Table>

      <ToDoForm addToDo={addToDo} />
    </div>
  );
};

export default ToDo;
