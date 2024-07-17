// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{ 
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
}, 
{
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project.',   
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information.',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines.',
},
{
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions.',
},
{
    type: 'list',
    name: 'license',
    message: 'Please select a license for your project.',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
},
{
    type: 'checkbox',
    name: 'technologies',
    message: 'Please select all technologies used.',
    choices: ['HTML', 'CSS', 'JavaScript', 'Inquirer', 'Markdown', 'Node.js', 'JSON'],
},
{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
];

// Creates README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('Success!')
    );
}

// initializes app
function init() {
    inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
    });
}

// Calls to initialize app
init();
