#!/usr/bin/node
// script that display the status code of a GET request.

const request = require('request');

const url = process.argv[2];

request(url, function (error, response) {
  if (error != null) {
    console.error('error:', error);
    return;
  }
  console.log('code:', response && response.statusCode);
});
