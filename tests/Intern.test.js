const Intern = require("../library/Intern")

describe ("Intern", () => {
  describe ("constructor", () => {
    it ("Should return an Intern object with a school value when called with the word 'new.'", () => {
      const newIntern = new Intern (null, null, null, "UMN")
      expect(newIntern.school).toEqual("UMN")
    })
  })
  describe ("getSchool", () => {
    it ("Should return intern's school", () => {
      const newIntern = new Intern (null, null, null, "UMN")
      expect(newIntern.getSchool()).toEqual("UMN")
    })
  })
  describe ("getRole", () => {
    it ("Should return 'Intern.'", () => {
      const newIntern = new Intern ()
      expect(newIntern.getRole()).toEqual("Intern")
    })
  })
})