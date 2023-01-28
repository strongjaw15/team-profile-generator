const Employee = require("./Employee")

class Intern extends Employee {
  constructor(name, id, email, school){
    super(name, id, email)
    this.school = school
  }
  getSchool(){
    return this.school
  }
  getRole(){
    return "Intern"
  }
}

const internQuestions = [
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
  }]

module.exports = {Intern, internQuestions}