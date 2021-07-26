let todos = [];

module.exports = class Todo {
  constructor(text, dueDate, dateCreated, projectId) {
    this.id = projectId + Math.random().toString(36).substring(7);
    this.text = text;
    this.dueDate = dueDate;
    this.dateCreated = dateCreated;
    this.deleted = false;
    this.done = false;
    this.projectId = projectId;
  }

  save() {
    todos.push(this);
  }
  static getTodo(id) {
    return todos.filter((todo) => todo.id === id);
  }

  static delete(id) {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    todos[todoIndex].deleted = true;
    return todos[todoIndex];
  }

  static done(id) {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    todos[todoIndex].done = true;
    return todos[todoIndex];
  }

  static edit(id, text, dueDate, completed) {
    const todoIndex = todos.findIndex((todo) => todo.id == id);
    todos[todoIndex].text = text;
    todos[todoIndex].dueDate = dueDate;
    todos[todoIndex].completed = completed;
    return todos[todoIndex];
  }

  static fetchAll(projectId) {
    return todos.filter((todo) => todo.projectId === projectId);
  }
};
