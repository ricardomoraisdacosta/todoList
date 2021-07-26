import React, { useEffect } from "react";
import CreateProject from "./CreateProject/CreateProject";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../../store/main.store";
import { RootState } from "../../../store";
import Project from "./Project/Project";
import classes from "./Dashboard.module.css";

const Dashboard: React.FC<{ user: string }> = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchProjects = async (user: string) => {
      const response = await fetch(
        `http://localhost:3002/project/get-all/${user}`
      );
      const projects = await response.json();
      dispatch(setProjects(projects));
    };
    fetchProjects(props.user);
    // eslint-disable-next-line
  }, [props.user]);

  const projectsFromState = useSelector(
    (state: RootState) => state.main.projects
  );

  const projectsMapped = projectsFromState.map((item: any) => (
    <Project key={"Proj" + item.id} id={item.id} name={item.name} />
  ));

  return (
    <div className={classes.dashboard}>
      {projectsMapped}
      <CreateProject user={props.user} />
    </div>
  );
};

export default Dashboard;
