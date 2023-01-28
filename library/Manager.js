const Employee = require("./Employee")

class Manager extends Employee {
  constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber
  }
  getRole(){
    return "Manager"
  }
}

managerQuestions = [
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
  }]


module.exports = {Manager, managerQuestions}