import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo/AddTodo";
import classes from "./Project.module.css";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const Project: React.FC<{ id: string; name: string }> = (props) => {
  const [todoList, setTodoList] = useState([]);

  const alterTodo = async (id: string) => {
    const doneRequest = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    };
    // eslint-disable-next-line
    const response = await fetch(
      `http://localhost:3002/todo/done/`,
      doneRequest
    );

    const response2 = await fetch(
      `http://localhost:3002/todo/get-all/${props.id}`
    );
    const todos = await response2.json();
    setTodoList(todos);
  };

  const deleteTodo = async (id: string) => {
    const deleteRequest = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    };
    // eslint-disable-next-line
    const response = await fetch(
      `http://localhost:3002/todo/delete/`,
      deleteRequest
    );

    const response2 = await fetch(
      `http://localhost:3002/todo/get-all/${props.id}`
    );
    const todos = await response2.json();
    setTodoList(todos);
  };

  const checkedHandler = (event: any) => {
    const todoId = event.target.value;
    event.preventDefault();
    alterTodo(todoId);
  };
  const deleteHandler = (event: any) => {
    deleteTodo(event.target.id);
  };

  useEffect(() => {
    const fetchTodos = async (id: string) => {
      const response = await fetch(`http://localhost:3002/todo/get-all/${id}`);
      const todos = await response.json();
      setTodoList(todos);
    };
    fetchTodos(props.id);
  }, [props.id]);

  const todoListCompleted = todoList.filter((item: any) => item.done === true);
  const todoListNotDone = todoList.filter(
    (item: any) => item.done === false && item.deleted === false
  );

  const todoListNotDoneMapped = todoListNotDone.map((item: any) => (
    <div className={classes.undone}>
      <div className={classes.visible}>
        <input
          type="checkbox"
          key={"NotDone" + item.id}
          id={item.id}
          name="todo"
          value={item.id}
          onChange={checkedHandler}
        />
        <label htmlFor={item.id}>{item.text + " - " + item.dueDate}</label>
        <div onClick={deleteHandler} id={item.id} className={classes.delete}>
          X
        </div>
      </div>
    </div>
  ));

  const todoListDoneMapped = todoListCompleted.map((item: any) => (
    <div key={"Done" + item.id} className={classes.done}>
      {item.text}
    </div>
  ));

  return (
    <div className={classes.project}>
      <ProjectHeader name={props.name} id={props.id} />

      <h4>To do:</h4>
      {todoListNotDoneMapped}
      <h4>Done:</h4>
      {todoListDoneMapped}
      <AddTodo id={props.id} setTodo={setTodoList} />
    </div>
  );
};

export default Project;
