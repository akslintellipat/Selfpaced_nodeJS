const { sumAll } = require("./math");
const express = require("express");

const app = express();

app.use(express.json());

app.post("/data", (req, res) => {
  res.status(200).json({ sum: sumAll(req.body.nums) });
});

module.exports = app;
