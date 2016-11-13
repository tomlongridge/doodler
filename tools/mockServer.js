import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';

/* eslint-disable no-console */

const port = 3001;
const app = express();

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../test/mocks/cambridge.json'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
