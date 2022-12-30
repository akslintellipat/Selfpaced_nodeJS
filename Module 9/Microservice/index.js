const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/module9", (err) => {
  if (err) console.log("Error in connecting to database: ", err);
  else console.log("Connected to database");
});

const todoSchema = mongoose.Schema({
  name: String,
  dueDate: Date,
  description: String,
});

const Todo = mongoose.model("Todo", todoSchema);

const app = express();
app.use(express.json());

app.get("/todos", async (req, res) => {
  let todos = await Todo.find({});
  res.json(todos);
});

app.post("/todos", (req, res) => {
  Todo.create(req.body)
    .then((response) => {
      res.json(response);
    })
    .catch((err) => {
      res.json({
        error: err,
      });
    });
});

app.listen(8001, "localhost", (err) => {
  if (err) console.log("Error:  ", err);
  else console.log("microservice server running on port 8001");
});
