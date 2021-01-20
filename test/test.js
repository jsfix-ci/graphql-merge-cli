const assert = require("assert");
const Merge = require("../src/merge");

describe("", function () {
  it("should not throw an error for valid files", function () {
      const schemaFiles = [
        `type Address {
            flat: String
        }`,
        `type Name {
            first: String
        }`];

    assert.doesNotThrow(() => Merge(schemaFiles), Error, "error thrown");
  });

  it("should throw an error for invalid files", function () {
    const schemaFiles = [
        `type Address {
            flat: String
        }`,
        `
        
        
        `];
        
    assert.throws(() => Merge(schemaFiles), Error, "error thrown");
  })
});
