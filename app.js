const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  console.log("get api called");
  res.send("get api called");
});

app.get("/api/callback", (req, res) => {
  const { requestId, accessToken } = req.query;
  try {
    console.log(req.body, "callback api reqbody");
    console.log(`Request ID: ${requestId}, Token: ${accessToken}`);
    res.send({
      message: "Callback received",
      requestId,
      accessToken,
      request: req.body,
    });
  } catch (err) {
    console.log("callback api error", err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

app.post("/api/callback", (req, res) => {
  const { requestId, accessToken } = req.query;
  try {
    console.log(req.body, "callback api reqbody");
    console.log(`Request ID: ${requestId}, Token: ${accessToken}`);
    res.send({
      message: "Callback received",
      requestId,
      accessToken,
      request: req.body,
    });
  } catch (err) {
    console.log("callback api error", err);
    res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

app.listen(port, () => console.log(`Server is running on port - ${port}`));
module.exports = app;
