#!/usr/bin/env node

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const file = process.argv[2];

if (file) {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file).toString('utf-8');
    rl.question('\nType a word: ', answer => {
      if (content.match(new RegExp(answer, 'gi'))) {
        console.log(`The word ${answer} exists.`);
      } else {
        console.log(`The word ${answer} does not exist.`);
      }
      rl.close();
    });
  } else {
    console.error(`The file does not exists (${file})`);  
  }
} else {
  console.error('Please, pass a file path.');
}