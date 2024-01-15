const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a short description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "How can someone use your project:"
  },
  {
    type: "list",
    name: "license",
    message: "What is the correct license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "General Public License", "The Unlicense", "BSD 3-Clause", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "Outline how someone can contribute to your project:"
  },
  {
    type: "input",
    name: "tests",
    message: "Explain how to run tests for your project:"
  },
  {
    type: "input",
    name: "questions",
    message: "Provide your username and email, plus how users can rach you with additional questions:"
  },
  
];


// function to write README file
function writeToFile(fileName, data) {
  const createReadme = path.join(process.cwd(), fileName);
  fs.writeFileSync(createReadme, data);
    console.log(`${fileName} has been successfully created!`);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(answers => {
        const writeAnswers = generateMarkdown(answers);
        writeToFile("README.md", writeAnswers);
      },
      error => {
        console.error("There is an error with the prompt", error);
      }
    );
}

// function call to initialize program
init();