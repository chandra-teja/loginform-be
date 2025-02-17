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

app.post("/api/callback", (req, res) => {
  try {
    console.log(req.body, "callback api reqbody");
    res.send({
      message: "Callback received",
      request: req,
    });
  } catch (err) {
    console.log("callback api error", err);
  }
});

app.listen(port, () => console.log(`Server is running on port - ${port}`));
module.exports = app;
