const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const axios = require("axios");

app.get("/api/search/all", async (req, res) => {
  try {
    const { search } = req.query;

    const accessToken = process.env.ACCESS_TOKEN;

    const url = `https://api.twitter.com/2/tweets/search/recent?query=${search}&tweet.fields=public_metrics&expansions=author_id&user.fields=description,created_at,profile_image_url`;

    const response = await axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    res.json(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/search/favourite", async (req, res) => {
  try {
    const { id } = req.query;
    console.log(id);

    const accessToken = process.env.ACCESS_TOKEN;

    const url = `https://api.twitter.com/2/users/${id}/tweets?tweet.fields=public_metrics`;

    const response = axios.get(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    console.log(response.data);

    res.send(response.data);
  } catch (error) {
    console.log(error);
  }
});

app.use("/", express.static(path.join(__dirname, "client/build")));
const port = process.env.PORT || 3000;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});
app.listen(port, () => console.log(`server listening on port ${port}`));
// catch all route
