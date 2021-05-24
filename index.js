// create variable and use require function to add Inquirer
const inquirer = require("inquirer");
// create variable and use require function to add fs to write file later
const fs = require("fs");
// create variable and using require to use npm's path//doesn't need install//part of npm
const path = require("path");
// create variable and requiring generateMarkdown.js 
var generateMarkdown = require("./generateMarkdown.js");
    
// function to write README file takes in fileName and user data parameters
function writeToFile(fileName, data) {
  // writing file and syncing it using path to join the current working directory using the fileName and user data.
  fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// function to initialize program
function init() {
  // inquirer prompted questions for user//VIA command-line prompts
  inquirer.prompt([
    {
      // Takes user text input
      type: "input",
      name: "title",
      message: "What's Your Projects Name?"
      }, 
      {
        // Takes user text input
        type: "input",
        name: "description",
        message: "Enter A Description For Your Project"
      }, 
       {
        // Takes user text input
        type: "input",
        name: "usage",
        message: "Enter Usage Info"
      }, 
      {
        // Takes user text input
        type: "input",
        name: "installation",
        message: "Enter Your Projects Installation Instructions"
      },
     
      {
        // Takes user text input
          type: "input",
          name: "contribution",
          message: "Enter Your Project Contribution Guidelines"
      },
      {
        // Takes user text input
          type: "input",
          name: "tests",
          message: "Enter Test Instructions"
      },
    {
      // Takes user text input
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },
    {
      // Takes email input and validates proper format criteria met for input
      message: "Please enter your email",
      name: "email",
      type: "input",
      validate: function (email) {

          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

          if (valid) {
              return true;
          } else {
              console.log(".  Please enter a valid email")
              return false;
          }
      } 
    },
    
      { 
        // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
          type: "checkbox",
          message: "Licensing Options",
          name: "license",
          choices: [
              "None",
              "Apache2.0",
              "GNU Public v3.0",
              "MIT",
              "Boost Software 1.0",
              "Creative Commons Zero v1.0 Universal",
              "Eclipse Public 2.0",
              "GNU Affero General Public v3.0",
              "GNU General Public v2.0",
              "GNU Lesser General Public v2.1",
              "Mozilla Public 2.0",
              "the Unilicense"
            ]
        }
        // Where the user input is stored (data)
    ]).then(function(data) {
      // message for the user
      console.log("Generating README...");
      // calling function writeToFile(fileName, data) using "README.md" and generateMarkdown(data) parameters & uses a spread opperater to spread data. 
      writeToFile("README.md", generateMarkdown({...data}));  
});
}
// function call to initialize program
init()