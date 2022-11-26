// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
// const questions = [];

const readMeTemp = ({userName, contact , project ,projectDescription,license,installingDependencies,testCommands,repoInfo,contributions}) => {
    `
    #User-Name
    ${userName},
   
    #Contact
    ${contact},
   
    #Project
    ${project},
    
    #Description
    ${projectDescription},
     
    #license
    ${license},
    
    #Installing-Dependencies
    ${installingDependencies},
    
    #Test-Commands
    ${testCommands},
    
    #Repo-Info
    ${repoInfo},
    
    #Contributions
    ${contributions},
    
    `
}


inquirer
    .prompt([
        {
            type: "input",
            message: "what is your GitHub username",
            name: "userName",
        },
        {
            type: "input",
            message: "what is your email address?",
            name: "contact",
        },
        {
            type: "input",
            message: "what is your projects name?",
            name: "project",
        },
        {
            type: "input",
            message: "Please write a short description of your project",
            name: "project-description",
        },
        {
            type: "input",
            message: "What kind of license should your project have?",
            name: "License",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "Installing-dependencies",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests-commands",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "repo-info",
        },
        {
            type: "input",
            message: "What does the user need to know about contributing to the repo?",
            name: "Contributions",
        },
    ])

    // TODO: Create a function to write README file
    .then((results) => {
        console.log("RESULTS?", results);
        const filename = `${results.project.toLowerCase().replace("","")}.md`;
        fs.writeFile(filename,readMeTemp(results), (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log("Your README has been generated!!")
            }
        });
        });

        

       
  




// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
