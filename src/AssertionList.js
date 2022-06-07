class AssertionList {
  constructor(assertions) {
    this.assertions = assertions
  }

  check() {
    return this.assertions.every(assertion => {
        return assertion.check()
    })
  }
}

module.exports = AssertionList
