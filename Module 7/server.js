const express = require("express");
const mongoose = require("mongoose");

const app = express();
const todoSchema = mongoose.Schema({
  name: String,
  dueDate: Date,
  description: String,
});
const todo = mongoose.model("todo", todoSchema);

app.get("/todos", (req, res) => {
  todo.find((err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.send("Error happened");
    } else {
      res.send(data);
    }
  });
});

app.use(express.urlencoded({ extended: true }));

app.post("/todos", (req, res) => {
  let dueDate = new Date(req.body.dueDate);
  let newTodo = new todo({ ...req.body, dueDate });
  newTodo.save((err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.send("Error happened");
    } else {
      res.send(data);
    }
  });
});

app.get("/todos/:id", (req, res) => {
  todo.findById(req.params.id, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.send("Error happened");
    } else {
      res.send(data);
    }
  });
});

app.put("/todos/:id", (req, res) => {
  let data;
  if (req.body.dueDate) {
    data = { ...req.body, dueDate: new Date(req.body.dueDate) };
  } else {
    data = req.body;
  }

  todo.findByIdAndUpdate(req.params.id, data, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.send("Error happened");
    } else {
      res.send(data);
    }
  });
});

app.delete("/todos/:id", (req, res) => {
  todo.findByIdAndRemove(req.params.id, (err, data) => {
    if (err) {
      console.log("Error: ", err);
      res.send("Error happened");
    } else {
      res.send(data);
    }
  });
});

app.listen(3030, "localhost", () => {
  console.log("Server running on localhost:3030");
});

mongoose
  .connect("mongodb://localhost:27017/module7")
  .then((resp) => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
