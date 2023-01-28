const inquirer = require("inquirer")
const fs = require("fs")

const {Engineer, engineerQuestions} = require("./library/Engineer")
const {Intern, internQuestions} = require("./library/Intern")
const {Manager, managerQuestions} = require("./library/Manager")

// This is the first part of the html string.
let finalString = 
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/style.css">
  <title>My Team</title>
</head>
<body>
  <header>
        <h1>My Team</h1>
  </header>
  
  
  <main>`

// These will be populated with engineer and itern cards.
let engineerString = ``
let internString = ``

// This is the last part of the html string.
const footerString = 
` </main>

<footer></footer>
</body>
</html>`

// This is the start function, which calls up the getManager function.
function start(){
    getManager()
}

// This creates a new manager object.
function getManager(){
  inquirer.prompt(managerQuestions)
  .then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    createManager(manager)
  })
}

// This creates the manager card and puts it into the final string.
function createManager(manager){
  finalString = finalString.concat(
    `<div class="card text-bg-primary mb-3">
      <div class="card-header">
        ${manager.getName()}<br>
        &#x1F377; ${manager.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}" target="_blank" rel="noopener noreferrer">${manager.getEmail()}</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>`)

  menu()
}

// This is the menu the user comes back to after creating each employee.
const menu = () => {
  inquirer.prompt([
    {
      type: "list",
      message: "What would you like to do?",
      choices: ["Add an Engineer", "Add an Intern", "Finish Building Team"],
      name: "menuChoice"
    }
  ])
  .then(data => {
    switch(data.menuChoice){
      case "Add an Engineer": addEngineer()
        break;
      case "Add an Intern": addIntern()
        break;
      case "Finish Building Team": writeHtml()
        break;
    }
  })
}

// This creates a new engineer object.
function addEngineer(){
  inquirer.prompt(engineerQuestions)
  .then(data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    createEngineer(engineer)
  })
}

// This creates an engineer card.
function createEngineer(engineer){
  engineerString = engineerString.concat(
    `<div class="card text-bg-success mb-3">
      <div class="card-header">
        ${engineer.getName()}<br>
        &#x1F37A; ${engineer.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}" target="_blank" rel="noopener noreferrer">${engineer.getEmail()}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
      </ul>
    </div>`
  )
  menu()
}

// This creates a new intern object.
function addIntern(){
  inquirer.prompt(internQuestions)
  .then(data => {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    createIntern(intern)
  })
}

// This creates an intern card.
function createIntern(intern){
  internString = internString.concat(
    `<div class="card text-bg-info mb-3">
      <div class="card-header">
        ${intern.getName()}<br>
        &#x1F95B; ${intern.getRole()}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.getId()}</li>
        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}" target="_blank" rel="noopener noreferrer">${intern.getEmail()}</a></li>
        <li class="list-group-item">School: ${intern.getSchool()}</li>
      </ul>
    </div>`
  )
  menu()
}

// This function takes the final string and writes it to a new index.HTML file in the root.
function writeHtml(){
  finalString = finalString.concat(engineerString).concat(internString).concat(footerString)
  fs.writeFile("index.html", finalString, (err) => {
    if(err){
      console.log(err)
    } else {
      console.log("Team assembled!")
    }
  })
}

// This starts up the program when the user types "node index" into the command line.
start()