// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');
const { title } = require("process");



    const questions = [
        {
            type: "input",
            message: "What is the title of you Project?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a bried description of what your project's about.",
            name: "description",
        },
        {
            type: "input",
            message: "Table of Contents",
            name: "table of Contents",
        },
        {
            type: "input",
            message: "What does the user need to install this app?(dependencies)",
            name: "Installation",
        },
        {
            type: "input",
            message: "Please explain how this app will be used?",
            name: "Usage",
        },
        {
            type: "input",
            message: "What license is required?",
            name: "License",
        },
        
        {
            type: "input",
            message: "Who is contributing to this project?",
            name: "contributions",
        },
        {
            type: "input",
            message: "What commands are needed to test this app?",
            name: "Tests",
        },
        {
            type: "input",
            message: " Provide contact Info for Inquiries",
            name: "Questions",
        },
        {
            type: "input",
            message: "Please provide your Github username",
            name: "username",
        },
        {
            type: "input",
            message: " What is your email address?",
            name: "email",
        },
    ]

    // TODO: Create a function to write README file
    function writeToFile(filename,data) {
               
        fs.writeFile(filename,data,function(err){
            console.log(filename)
            console.log(data)
            if (err) {
                return console.log(err)
            } else {
                console.log("success")
            }
        })
          

    }


    // function to initialize program
    function init() {
        inquirer.prompt(questions)
        .then(function(data){
            writeToFile("README.md" , generatorMarkdown(data));
            console.log(data)
        })
    }
   
   
   init()
   
   
  