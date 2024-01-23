#!/usr/bin/node
// script that prints the number of movies where the character “Wedge Antilles” is present.

const request = require('request');

const API = process.argv[2];
const id = '18';

request(API, function (error, response, body) {
  if (error != null) {
    console.error('error:', error);
  }
  const objMovie = JSON.parse(body);
  let count = 0;
  objMovie.results.forEach(element => {
    element.characters.forEach(item => {
      if (item.includes(id)) {
        count += 1;
      }
    });
  });
  console.log(count);
});
