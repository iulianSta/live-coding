// Fetch time
// Fetch text
function fetchText() {
  fetch("./text.txt")
    .then((response) => response.text())
    .then((data) => {
      //console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
// Fetch JSON file
function fetchJson() {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard = "<h2>All Users </h2>";
      data.forEach((user) => {
        let { id, name, age, city, photo } = user;
        userCard += `
          <div class='card' id=${id}>
          <div class='avatar'>${photo}</div>
        Hi, </br> I am <span>${name}</span>, </br> I am <span>${age}</span> years old, </br>
        I come from <span>${city}</span>.
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}
// Fetch API
// Fetch todos
function fetchApiTodos() {
  const todos = "https://jsonplaceholder.typicode.com/todos";
  fetch(todos)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard = "<h2>To-Do's API response </h2>";
      data.forEach((todo) => {
        let { userId, id, title, completed } = todo;
        userCard += `
          <div id=${id}>
          <h3>${title} for user ID: ${userId}</h3>
          <p>${completed}</p>
          </div>
          `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}
// Fetch comments

function fetchApiComments() {
  const comments = "https://jsonplaceholder.typicode.com/comments";
  fetch(comments)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      let userCard = "<h2>Comments API response </h2>";
      data.forEach((comment) => {
        let { postId, id, name, email, body } = comment;
        userCard += `
            <div id=${id}>
            <h3>${name} for user ID: ${postId}</h3>
            <span>${email}</span>
            <p>${body}</p>
            </div>
            `;
      });
      document.querySelector(".result").innerHTML = userCard;
    })
    .catch((err) => console.log(err));
}
