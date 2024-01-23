#!/usr/bin/node
// script that computes the number of tasks completed by user id.
const request = require('request');

const url = process.argv[2];

request(url, function (error, response, body) {
  if (error != null) {
    console.error('error:', error);
  }
  const content = JSON.parse(body);
  const users = [];
  content.forEach(item => {
    if (users.includes(item.userId) !== true) {
      users.push(item.userId);
    }
  });
  let result = {};
  let check = 0;
  users.forEach(item => {
    let counter = 0;
    content.forEach(element => {
      if (item === element.userId && element.completed === true) {
        counter += 1;
        check = 1;
      }
    });
    if (check === 1) {
      result[item] = counter;
    } else {
      result = {};
    }
  });
  console.log(result);
});
