import React, { useState } from "react";
import "./ToDoForm.css";
import { Form } from "react-bootstrap";

const ToDoForm = ({ addToDo }) => {
  const [value, setValue] = useState("");
  console.log(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addToDo(value);
    setValue("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Enter New Task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Form>
  );
};

export default ToDoForm;
