import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setProjects } from "../../../../store/main.store";

import classes from "./CreateProject.module.css";

const CreateProject: React.FC<{ user: string }> = (props) => {
  const dispatch = useDispatch();
  const projectName: any = useRef();
  const addProject = async () => {
    const addProjectRequest = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: projectName.current.value,
        username: props.user,
      }),
    };
    // eslint-disable-next-line
    const res = await fetch(
      "http://localhost:3002/project/add",
      addProjectRequest
    );

    const fetchProjects = async (user: string) => {
      const response = await fetch(
        `http://localhost:3002/project/get-all/${user}`
      );
      const projects = await response.json();
      dispatch(setProjects(projects));
    };
    fetchProjects(props.user);
  };

  const createProjectHandler = (event: any) => {
    event.preventDefault();
    addProject();
  };
  return (
    <div className={classes.createProject}>
      <h3>Create a new Project</h3>
      <form onSubmit={createProjectHandler}>
        <input type="text" placeholder="Project Name" ref={projectName} />
        <button type="submit">Create Project</button>
      </form>
    </div>
  );
};

export default CreateProject;
