// import express
const express = require("express");

// create app object
const app = express();
const port = 3000;

// Routes

// Define a "root" route directly on app
app.get("/", (req, res) => {
  res.send("<h1>Hello There</h1>");
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hey there, ${name}</h1>`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);
  const tip = (total * tipPercentage) / 100;
  res.send(`<h1>${tip}</h1>`);
});

// Tell the server to listen for request
app.listen(port, () => {
  console.log(`I'm listening of port ${port}`);
});
