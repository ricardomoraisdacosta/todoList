const { response } = require("express");
const { fetchAll } = require("../models/user");
const User = require("../models/user");

exports.userLogin = (req, res) => {
  res.json(User.login(req.body.username, req.body.password));
};
exports.userRegistration = (req, res) => {
  const user = new User(req.body.username, req.body.password);
  const response = user.save();
  res.json(response);
};
exports.getUsers = (req, res) => {
  res.json(User.fetchAll());
};
