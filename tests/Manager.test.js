const {Manager} = require("../library/Manager")

describe ("Manager", () => {
  describe ("constructor", () => {
    it ("Should return a Manager object with an officenumber value when called with the word 'new.'", () => {
      const newManager = new Manager ("", "", "", "606")
      expect(newManager.officeNumber).toEqual("606")
    })
  })
  describe ("getRole", () => {
    it ("Should return 'Manager.'", () => {
      const newManager = new Manager ()
      expect(newManager.getRole()).toEqual("Manager")
    })
  })
})