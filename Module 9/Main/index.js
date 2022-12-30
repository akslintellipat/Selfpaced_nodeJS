const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/todos", (req, res) => {
  axios
    .get("http://localhost:8001/todos")
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log("Error happened: ", err);
    });
});

app.get("/addtodo", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/addtodo", (req, res) => {
  axios
    .post("http://localhost:8001/todos", req.body)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.log("Error happened: ", err);
    });
});

app.listen(8000, "localhost", (err) => {
  if (err) console.log("Error:  ", err);
  else console.log("main server running on port 8000");
});
