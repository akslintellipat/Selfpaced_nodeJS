const express = require("express");
const app = express();

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/form.html");
});

app.use(express.urlencoded({ extended: false }));
app.post("/form", (req, res) => {
  for (key in req.body) {
    console.log(key, req.body[key]);
  }
  res.send("Form data received");
});

app.listen(8000, () => {
  console.log("listening on port 8000");
});
