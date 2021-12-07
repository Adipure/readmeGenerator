//Const values
const inquirer = require('inquirer');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');
const axios = require('axios');
const fs = require("fs");

// array of questions for user
const questions = [
 {
  type: "input",
  name: "username",
  message: "what is your gitHub username?",
 },
 {
  type: 'input',
  name: 'repo',
  message: "What is the name of your GitHub repository?",

 },
 {
  type: 'input',
  name: 'title',
  message: "What is the title of your project?",

 },
 {
  type: 'input',
  name: 'description',
  message: "Please provide a brief description of your project",

 },
 {
  type: 'input',
  name: 'installation'
  message: "Describe the steps required to install your project for the Installation section.",
 },
 {
  type: 'input',
  name: 'usage'
  message: "Please provide instructions and examples of your project.",
 },
 {
  type: 'input',
  name: 'contribute'
  message: "please provide guidelines on how other developers can contribute to your project.",
 },
 {
  type: 'input',
  name: 'tests'
  message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
 },
 {
  type: 'list',
  name: 'license',
  message: "Choose a license for your project.",
  choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
 },
 {
  type: 'input',
  name: 'email',
  message: "Provide Your Email",
 }
];
// function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, err => {
  if (err) {
   return console.log(err)
  }

  console.log("Your README.md has been Generated.")
 })
}

// function to initialize program
function init() {
 inquirer.prompt(
  questions)
  .then((answer) => {
   writeToFile("readMeFile.md", generateMarkdown(answer))
  })
  .catch((error) => {
   if (error.isTtyError) {
    console.log(error)
   }
  })
}

init();


