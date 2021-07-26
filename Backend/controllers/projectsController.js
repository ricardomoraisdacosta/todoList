const { response } = require("express");
const Project = require("../models/project");

exports.getProjects = (req, res) => {
  const projects = Project.fetchAll(req.params.user);
  res.json(projects);
};
exports.getProject = (req, res) => {
  res.json(Project.find(req.body.id));
};

exports.deleteProject = (req, res) => {
  Project.delete(req.body.id);
  res.json(req.body.id);
};

exports.editProject = (req, res) => {
  res.json(Project.edit(req.body.id, req.body.name, req.body.username));
};

exports.addProject = (req, res) => {
  const project = new Project(req.body.name, req.body.username);

  project.save();
  res.json(project);
};
