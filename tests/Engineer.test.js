const {Engineer} = require("../library/Engineer")

describe ("Engineer", () => {
  describe ("constructor", () => {
    it ("Should return an Engineer object with a github value when called with the word 'new.'", () => {
      const newEngineer = new Engineer (null, null, null, "github")
      expect(newEngineer.github).toEqual("github")
    })
  })
  describe ("getSchool", () => {
    it ("Should return intern's school", () => {
      const newEngineer = new Engineer (null, null, null, "github")
      expect(newEngineer.getGithub()).toEqual("github")
    })
  })
  describe ("getRole", () => {
    it ("Should return 'Engineer.'", () => {
      const newEngineer = new Engineer ()
      expect(newEngineer.getRole()).toEqual("Engineer")
    })
  })
})