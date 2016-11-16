import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.get('*', function(req, res) {
  res.header("Content-Type", "application/json");
  res.sendFile(path.join( __dirname, '../test/mocks/cambridge.json'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
