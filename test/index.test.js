const expect = require("chai").expect;
const sampleData1 = require("../index").example1;
const sampleData2 = require("../index").example2;
const sampleData3 = require("../index").example3;
const sampleData4 = require("../index").example4;
const isUnique = require("../index").isUnique;
const nonUnique = require("../index").nonUnique;

describe("isUnique", () => {

  it("should be a function", () => {
    expect(isUnique).to.be.a("function");
  })

  it("should return true for unique elements", () => {
    expect(isUnique(sampleData1, 2)).to.be.true;
  })

  it("should return false for non-unique elements", () => {
    expect(isUnique(sampleData1, 1)).to.be.false;
  })

})

describe("nonUnique", () => {

  it("should return array", () => {
    expect(nonUnique(sampleData1)).to.be.an('array')
  })

  it("should return [1,3,1,3] for example-1", () => {
    expect(nonUnique(sampleData1)).to.deep.equal([1, 3, 1, 3]);
  })

  it("should return [] for example-2", () => {
    expect(nonUnique(sampleData2)).to.deep.equal([]);
  })

  it("should return [5,5,5,5,5]  for example-3", () => {
    expect(nonUnique(sampleData3)).to.deep.equal([5, 5, 5, 5, 5]);
  })

  it("should return [10,9,10,10,9] for example-4", () => {
    expect(nonUnique(sampleData4)).to.deep.equal([10, 9, 10, 10, 9]);
  })

})
