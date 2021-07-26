import React, { useRef } from "react";
import classes from "./AddTodo.module.css";

const AddTodo: React.FC<{ id: string; setTodo: any }> = (props) => {
  const taskRef: any = useRef();
  const dueDateRef: any = useRef();

  const addTodo = async (addTodoRequest: any) => {
    const res = await fetch("http://localhost:3002/todo/add", addTodoRequest);
    // eslint-disable-next-line
    const result = await res.json();
  };

  const addTodoHandler = (event: any) => {
    event.preventDefault();
    if (
      taskRef.current.value.trim().length === 0 ||
      dueDateRef.current.value.length === 0
    ) {
      alert("Data incomplete please fill the task and the due date");
    } else {
      const addTodoRequest = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: taskRef.current.value,
          dueDate: dueDateRef.current.value,
          dateCreated: new Date().toISOString().split("T")[0],
          projectId: props.id,
        }),
      };
      addTodo(addTodoRequest);
      const fetchTodos = async (id: string) => {
        const response = await fetch(
          `http://localhost:3002/todo/get-all/${id}`
        );
        const todos = await response.json();
        props.setTodo(todos);
      };
      fetchTodos(props.id);
    }
  };

  return (
    <div className={classes.addTodo}>
      <form onSubmit={addTodoHandler}>
        <label htmlFor={"task" + props.id}>Task</label>
        <input type="text" id={"task" + props.id} ref={taskRef} />
        <label htmlFor={"dueDAte" + props.id}>Due Date</label>
        <input type="date" id={"dueDAte" + props.id} ref={dueDateRef} />
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default AddTodo;
