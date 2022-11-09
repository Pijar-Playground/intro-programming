const fetch = require("node-fetch");
const getData = fetch("https://jsonplaceholder.typicode.com/todos"); // promise

// chaing operation es 11
getData
  .then((res) => res.json())
  .then((res) =>
    console.log(
      `Todo list ${res[3]?.judul} statusnya ${
        res[3]?.completed ? "Sudah" : "Belum"
      } dikerjakan`
    )
  )
  .catch((err) => console.log(err));
