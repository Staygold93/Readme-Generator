// TODO: Create a function that returns a license badge based on which license is passed in
function generateMarkdown(data) {
  return `

 
 # ${data.title}
 https://github.com/${data.username}/${data.title}
  # Description 
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
# Installation 
The Following necessary dependencies must be installed to run the application ${data.installation}
# Usage 
In order to use this app ,${data.Usage}
This Project is licensed under the ${data.License} license.
![Github license](https://img.shields.io/badge/license-MIT-blue.svg)
# Contributing 
Contributors : ${data.contributions}
# Tests 
The following is needed to run the test: ${data.Tests}
# Questions 
If you have any questions about the repo , contact ${data.username}
`
}

module.exports = generateMarkdown;








// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

