const inquirer = require("inquirer")

const Employee = require("./library/Employee")
const Engineer = require("./library/Engineer")
const Inter = require("./library/Intern")
const Manager = require("./library/Manager")

function start(){
  inquirer.prompt([
    {
      type: "input",
      message: "Please enter the team manager's name.",
      name: "name"
    }
  ])
}

start()