console.log('hello from node');
// to execute a file : $ node <name of the file>

const chalk = require('chalk');

// console.log(chalk.blue('Hello world!'));
const crypto = require('crypto');
// node internal packages don't have to be installed but still be required
const randomString = crypto.randomBytes(64).toString('Hex');
// console.log(randomString);

const addNumbers = require('./add');

// const functions = require('./functions');
const { goodBye, hello: xyz } = require('./functions');
// console.log(functions);
console.log(xyz());
console.log(goodBye());

const sum = addNumbers(2, 3);
// console.log(sum);



// create project
// npm init -y 
// install one of these packages:
// https://github.com/sindresorhus/awesome-nodejs#weird
// and get it to work

const supervillains = require('supervillains');

const randomSupervillain = supervillains.random();
// console.log(randomSupervillain);

const fs = require('fs');

const content = fs.readFileSync('example.txt', 'utf-8');
fs.writeFileSync('newFile.txt', content)
// console.log(content);
// this way you can access arguments that you pass via node <name of file> <argument>
console.log('you entered: ', process.argv[2]);