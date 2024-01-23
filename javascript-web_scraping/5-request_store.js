#!/usr/bin/node
// script that gets the contents of a webpage and stores it in a file.
const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];

request(url, function (error, response, body) {
  if (error != null) {
    console.error('error:', error);
  }
  const content = body;
  fs.writeFile(filename, content, err => {
    if (err) {
      console.error(err);
    }
  });
});
