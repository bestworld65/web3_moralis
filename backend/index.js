const express = require("express");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
