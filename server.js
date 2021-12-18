const express = require("express");
const path = require("path");
// require("dotenv").config();
const app = express();
const axios = require("axios");

//recieve the search query from the client
app.get("/api/search/all", (req, res) => {
  res.send("hello");
});

app.get("/api/search/favourite", (req, res) => {
  res.send("its working");
});

app.use("/", express.static(path.join(__dirname, "client/build")));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
