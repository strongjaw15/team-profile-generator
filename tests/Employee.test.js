const Employee = require("../library/Employee.js")

describe ("Employee", () => {
  describe ("constructor", () =>{
    it ("Should return an employee object with name, id, and email properties when called with the word 'new.'", () => {
      const newEmployee = new Employee("Bob", "808", "bob@bob.net")
      expect({...newEmployee}).toEqual({"email": "bob@bob.net", "id": "808", "name": "Bob"})
    })
  })
  describe ("getName", () => {
    it ("Should return the employee name", () => {
      const newEmployee = new Employee("Bob", "808", "bob@bob.net")
      expect(newEmployee.getName()).toEqual("Bob")
    })
  })
  describe ("getId", () => {
    it ("Should return the employee ID", () => {
      const newEmployee = new Employee("Bob", "808", "bob@bob.net")
      expect(newEmployee.getId()).toEqual("808")
    })
  })
  describe ("getEmail", () => {
    it ("Should return the employee email", () => {
      const newEmployee = new Employee("Bob", "808", "bob@bob.net")
      expect(newEmployee.getEmail()).toEqual("bob@bob.net")
    })
  })
  describe ("getRole", () => {
    it ("Should return the employee role", () => {
      const newEmployee = new Employee("Bob", "808", "bob@bob.net")
      expect(newEmployee.getRole()).toEqual("Employee")
    })
  })
})