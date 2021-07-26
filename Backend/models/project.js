let projects = [];

module.exports = class Project {
  constructor(name, userName) {
    this.name = name;
    this.userName = userName;
    this.id = userName + name + Math.random().toString(36).substring(7);
  }
  save() {
    projects.push(this);
  }

  static delete(id) {
    projects = projects.filter((project) => project.id !== id);
  }

  static edit(id, name, username) {
    const projectIndex = projects.findIndex((project) => project.id == id);
    projects[projectIndex].name = name;
    projects[projectIndex].userName = username;
    return projects[projectIndex];
  }

  static find(id) {
    return projects.filter((project) => project.id === id);
  }
  static fetchAll(userName) {
    return projects.filter((project) => project.userName === userName);
  }
};
