#!/usr/bin/node
// script that writes a string to a file.

const argvs = process.argv.slice(2);
const filename = argvs[0];
const content = argvs[1];

const fs = require('fs');
fs.writeFile(filename, content, err => {
  if (err) {
    console.error(err);
  }
});
