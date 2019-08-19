const express = require('express'),
  middleware = require('./middleware/middleware.js'),
  bodyParser = require('body-parser'),
  app = express(),
  PORT = 8080;

app.use(bodyParser.json())

app.get('/getTtsData/:shoe', middleware.getTrueSize, (req, res) => {
  res.send(res.locals.data);
});

app.post('/postTtsData', middleware.postTrueSize, (req, res) => {
  res.locals.err ? res.send(res.locals.err) : res.send();
});

app.use('*', (req, res) => {
  res.send('Catch All');
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});

