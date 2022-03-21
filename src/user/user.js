const user = class User {
  id;
  name;
  email;

  constructor() {}

  loadUser(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        this.id = result.id;
        this.name = result.name;
        this.email = result.email;
        return { id: this.id, name: this.name, email: this.email };
      })
      .catch((err) => {
        throw err;
      });
  }
};

module.exports.User = user;
