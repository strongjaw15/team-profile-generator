const Employee = require("./Employee")

class Engineer extends Employee {
  constructor(name, id, email, github){
    super(name, id, email)
    this.github = github
  }
  getGithub(){
    return this.github
  }
  getRole(){
    return "Engineer"
  }
}

const engineerQuestions = [
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
  }]

module.exports = {Engineer, engineerQuestions}