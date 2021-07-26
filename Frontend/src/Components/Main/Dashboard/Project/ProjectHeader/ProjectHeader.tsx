import React from "react";
import classes from "./ProjectHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../../store";
import { setProjects } from "../../../../../store/main.store";

const ProjectHeader: React.FC<{ name: string; id: string }> = (props) => {
  const dispatch = useDispatch();
  const userId = useSelector((state: RootState) => state.main.userName);

  const deleteProject = async (id: string) => {
    const deleteProjectRequest = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: id,
      }),
    };
    // eslint-disable-next-line
    const response = await fetch(
      `http://localhost:3002/project/delete/`,
      deleteProjectRequest
    );

    const response2 = await fetch(
      `http://localhost:3002/project/get-all/${userId}`
    );
    const projects = await response2.json();
    dispatch(setProjects(projects));
  };

  const deleteHandler = (event: any) => {
    deleteProject(event.target.id);
  };
  return (
    <div className={classes.projectHeader}>
      <h4>{props.name}</h4>
      <div onClick={deleteHandler} id={props.id} className={classes.delete}>
        {" "}
        Delete
      </div>
    </div>
  );
};

export default ProjectHeader;
