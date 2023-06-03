// import express
const express = require("express");

// create app object
const app = express();
const port = 3000;

// Routes

// Greeting Route
app.get("/", (req, res) => {
  res.send("<h1>Hello There</h1>");
});

app.get("/greeting/:name", (req, res) => {
  const name = req.params.name;
  res.send(`<h1>Hey there, ${name}</h1>`);
});

// Tip Calculator
app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseFloat(req.params.total);
  const tipPercentage = parseFloat(req.params.tipPercentage);
  const tip = (total * tipPercentage) / 100;
  res.send(`<h1>${tip}</h1>`);
});

// Magic 8 Ball
app.get("/magic/:question", (req, res) => {
  const question = req.params.question.replace(/%20/g, " ");
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  const magic8BallResponse =
    responses[Math.floor(Math.random() * responses.length)];
  const htm = `<h1>${question}?</h1><h1>mmmm...</h1><h1>${magic8BallResponse}</h1>`;
  res.send(htm);
});

function checkFibonacci(n) {
  if (n == 0 || n == 1) {
    return true;
  }
  prev = 0;
  curr = 1;
  while (n >= curr) {
    tmp = curr;
    curr = curr + prev;
    prev = tmp;
    if (curr == n) {
      return true;
    }
  }

  return false;
}

app.get("/fibonacci/:param", (req, res) => {
  const param = req.params.param;
  const isFibonacci = checkFibonacci(param);
  if (isFibonacci) {
    res.send(`<h1>Very good. It is Fibonacci</h1>`);
  } else {
    text = `<h1>I can tell this is not a fibonacci number</h1>`;
  }
  res.send(text);
});

// Tell the server to listen for request
app.listen(port, () => {
  console.log(`I'm listening of port ${port}`);
});
