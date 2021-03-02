require("dotenv").config();
// const express = require("express");
// const app = express();
const port = process.env.PORT;

const app = require("./app");

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
