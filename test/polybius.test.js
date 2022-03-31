// Write your tests here!
// My Polybius tests

const {expect} = require("chai");
const {polybius} = require("../src/polybius");

describe("polybius() testing", () => {
  describe("encoding an input", () => {
    it("encode an input from letter to number pairs", () => {
      const input = "test";
      const actual = polybius(input);
      const expected = "44513444";
      expect(actual).to.equal(expected);
    });
    
    it("translates 'i' and 'j' both to a 42 number", () => {
      const input = "jip";
      const actual = polybius(input);
      const expected = "424253";
      expect(actual).to.equal(expected);
    });
    
    it("doesn't touch any of the spaces", () => {
      const input = "my test";
      const actual = polybius(input);
      const expected = "2345 44513444";
      expect(actual).to.equal(expected);
    });
  });
  
  describe("decoding an input", () => {
    it("decode from number pairs to letters", () => {
      const input = "44513444";
      const actual = polybius(input, false);
      const expected = "test";
      expect(actual).to.equal(expected);
    });
    
    it("42's should result in both 'i' and 'j'", () => {
      const input = "424253";
      const actual = polybius(input, false);
      expect(actual).to.include('i');
      expect(actual).to.include('j');
    });
    
    it("shouldn't alter any spaces", () => {
      const input = "2345 44513444";
      const actual = polybius(input, false);
      const expected = "my test";
      expect(actual).to.equal(expected);
    });
    
    it("return false if length of all numbers (no spaces included) is odd", () => {
      const input = "2345 456";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  });
});