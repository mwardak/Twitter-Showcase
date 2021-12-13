const express = require("express");
const path = require("path");
// require("dotenv").config();
const app = express();
const axios = require("axios");

app.use("/", express.static(path.join(__dirname, "client/build")));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
