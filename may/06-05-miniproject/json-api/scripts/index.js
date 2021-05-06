// Fetch time
function fetchText() {
  fetch("./text.txt")
    .then((response) => response.text())
    .then((data) => {
      //console.log(data);
      document.querySelector(".result").innerHTML = data;
    })
    .catch((err) => console.log(err));
}
