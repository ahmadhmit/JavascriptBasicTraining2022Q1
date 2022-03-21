let { User } = require("./user/user");
let { Post } = require("./user/post");

module.exports = {
  run: () => {
    let user = new User();

    let btnUser = document.getElementById("submit-user");
    let btnPost = document.getElementById("submit-post");

    btnUser.addEventListener("click", function () {
      getUser();
    });

    btnPost.addEventListener("click", function () {
      getPost();
    });

    const getUser = () => {
      let userId = document.getElementById("user-id").value;
      user.loadUser(userId).then((result) => {
        console.log(user);
        document.getElementById("user-info-id").innerHTML = result.id;
        document.getElementById("user-info-name").innerHTML = result.name;
        document.getElementById("user-info-email").innerHTML = result.email;
      });
    };

    // load Post information from userId
    const getPost = () => {
      let post = new Post();
      let userId = document.getElementById("user-id").value;
      let postElm = document.getElementById("post-table");

      let posts = post.loadPost(userId).then((result) => {
        console.table(result);

        //loop inside array per object
        for (let i = 0; i < result.length; i++) {
          const row = document.createElement("tr");
          const postId = document.createElement("td");
          postId.innerHTML = result[i].id;
          const title = document.createElement("td");
          title.innerHTML = result[i].title;
          const body = document.createElement("td");
          body.innerHTML = result[i].body;

          row.appendChild(postId);
          row.appendChild(title);
          row.appendChild(body);
          postElm.appendChild(row);
        }
      });
    };
  },
};
