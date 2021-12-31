const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const axios = require("axios");

app.get("/api/search/all", async (req, res) => {
  const { search } = req.query;

  try {
    const accessToken = process.env.ACCESS_TOKEN;

    const url = `https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=public_metrics&expansions=author_id&user.fields=description`;
    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data);
    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/search/favourite", (req, res) => {
  res.send("its working");
});

app.use("/", express.static(path.join(__dirname, "client/build")));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server listening on port ${port}`));
