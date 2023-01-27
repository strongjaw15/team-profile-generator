const inquirer = require("inquirer")
const fs = require("fs")

const Employee = require("./library/Employee")
const Engineer = require("./library/Engineer")
const Intern = require("./library/Intern")
const Manager = require("./library/Manager")
const { listenerCount } = require("process")

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
    <div class="card border-light mb-3">
      <div class="card-body">
        <h1>My Team</h1>
      </div>
    </div>
  </header>
  
  
  <main>`

let engineerString = ``
let internString = ``

const footerString = 
` </main>

<footer></footer>
</body>
</html>`

// This is the start function, which calls up the getManager function from the Manager class.
function start(){
    getManager()
}

// This creates a new manager object.
function getManager(){
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the team manager's name:",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter the team manager's employee ID:",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter the team manager's email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter the team manager's office number:",
      name: "officeNumber"
    }
  ])
  .then(data => {
    const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
    createManager(manager)
  })
}

// This creates the manager card and puts it into the final string.
function createManager(manager){
  const managerString = 
  `<div class="card border-primary mb-3" style="width: 18rem;">
    <div class="card-header">
      ${manager.name}<br>
      &#x1F377; ${manager.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}" target="_blank" rel="noopener noreferrer">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>`

  finalString = finalString.concat(managerString)
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
      case "Finish Building Team": writeEngineers()
        break;
    }
  }
  )
}

// This creates a new engineer object.
function addEngineer(){
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the engineer's name:",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter the engineer's employee ID:",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter the engineer's email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter the engineer's GitHub username:",
      name: "github"
    }
  ])
  .then(data => {
    const engineer = new Engineer(data.name, data.id, data.email, data.github)
    createEngineer(engineer)
  })
}

// This creates the engineer card and puts it into the final string.
function createEngineer(engineer){
  engineerString = engineerString.concat(
  `<div class="card border-success mb-3" style="width: 18rem;">
    <div class="card-header">
      ${engineer.name}<br>
      &#x1F37A; ${engineer.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}" target="_blank" rel="noopener noreferrer">${engineer.email}</a></li>
      <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
    </ul>
  </div>`
  )
  menu()
}

// This creates a new manager object.
function addIntern(){
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the intern's name:",
      name: "name"
    },
    {
      type: "input",
      message: "Please enter the intern's employee ID:",
      name: "id"
    },
    {
      type: "input",
      message: "Please enter the intern's email address:",
      name: "email"
    },
    {
      type: "input",
      message: "Please enter the intern's school:",
      name: "school"
    }
  ])
  .then(data => {
    const intern = new Intern(data.name, data.id, data.email, data.school)
    createIntern(intern)
  })
}

// This creates the intern card and puts it into the final string.
function createIntern(intern){
  internString = internString.concat(
  `<div class="card border-info mb-3" style="width: 18rem;">
    <div class="card-header">
      ${intern.name}<br>
      &#x1F95B; ${intern.getRole()}
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank" rel="noopener noreferrer">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>`
  )
  menu()
}

// This adds the engineers.
function writeEngineers(){
  finalString = finalString.concat(engineerString)
  writeInterns()
}

// This adds the interns.
function writeInterns(){
  finalString = finalString.concat(internString)
  addFooter()
}

// This adds the rest of the html to the final string before it gets written to file.
function addFooter(){
  finalString = finalString.concat(footerString)
  writeHtml()
}

// This function takes the final string and writes it to a new index.HTML file in the root.
function writeHtml(){
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