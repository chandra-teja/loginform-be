const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  console.log("get api called");
  res.send("get api called");
});

app.post("/api/callback", (req, res) => {
  console.log(req.body, "callback api reqbody");
  res.send({
    message: "Callback received",
    request: req,
  });
});

app.listen(port, () => console.log(`Server is running on port - ${port}`));
module.exports = app;
