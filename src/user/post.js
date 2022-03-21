const post = class Post {
  userId;
  id;
  title;
  body;

  constructor() {}

  loadPost(user_id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)
      .then((result) => {
        return result.json();
      })
      .then((result) => {
        return result;
      })
      .catch((err) => {
        throw err;
      });
  }
};

module.exports.Post = post;
