const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/callback", (req, res) => {
  console.log(req.body);
  res.send({
    message: "Callback received",
    request: req,
  });
});

app.listen(port, () => console.log(`Server is running on port - ${port}`));
