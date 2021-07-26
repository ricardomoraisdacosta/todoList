const users = [];

module.exports = class User {
  constructor(userName, password) {
    this.userName = userName;
    this.password = password;
  }
  save() {
    if (users.findIndex((user) => user.userName === this.userName) !== -1) {
      return "NOT_OK";
    } else {
      users.push(this);

      return "OK";
    }
  }

  static login(username, password) {
    const userIndex = users.findIndex((user) => user.userName === username);
    if (userIndex === -1) {
      return false;
    } else {
      if (users[userIndex].password === password) {
        return true;
      } else return false;
    }
  }
  static fetchAll() {
    return users;
  }
};
