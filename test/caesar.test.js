// My Caesar tests
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests:", () => {
  describe("handling of errors", () => {
    it("return false if shift === 0", () => {
      const input = "testing";
      const shift = 0;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    
    it("return false if shift > 25", () => {
      const input = "testing";
      const shift = 33;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
    
    it("return false if shift < -25", () => {
      const input = "testing";
      const shift = -33;
      const actual = caesar(input, shift);
      expect(actual).to.be.false;
    });
  });
  
  describe("encoding an input with caesar shift", () => {
    it("encode an input by shifting letters", () => {
      const input = "testing";
      const shift = 2;
      const actual = caesar(input, shift);
      const expected = "vguvkpi";
      expect(actual).to.equal(expected);
    });
    
    it("capital letters are ignored", () => {
      const input = "TeStINg Caps";
      const shift = 2;
      const actual = caesar(input, shift);
      const expected = "vguvkpi ecru";
      expect(actual).to.equal(expected);
    });
    
    it("should handle letters towards end of alphabet (wraps)", () => {
      const input = "zoinks";
      const shift = 2;
      const actual = caesar(input, shift);
      const expected = "bqkpmu";
      expect(actual).to.equal(expected);
    });
    
    it("should be able to shift left or negative", () => {
      const input = "zoinks";
      const shift = -2;
      const actual = caesar(input, shift);
      const expected = "xmgliq";
      expect(actual).to.equal(expected);
    });
 });
  
  describe("decoding an input with caesar shift", () => {
    it("decode an input in the opposite direction", () => {
      const input = "vguvkpi";
      const shift = 2;
      const actual = caesar(input, shift, false);
      const expected = "testing";
      expect(actual).to.equal(expected);
    });
    
    it("leave spaces and symbols alone", () => {
      const input = "vguvkpi bqkpmu!";
      const shift = 2;
      const actual = caesar(input, shift, false);
      const expected = "testing zoinks!";
      expect(actual).to.equal(expected);
    });
    
    it("ignore capital letters", () => {
      const input = "BQKpmu";
      const shift = 2;
      const actual = caesar(input, shift, false);
      const expected = "zoinks";
      expect(actual).to.equal(expected);
    });
    
    it("can handle letters at the alphabet end", () => {
      const input = "bqkpmu";
      const shift = 2;
      const actual = caesar(input, shift, false);
      const expected = "zoinks";
      expect(actual).to.equal(expected);
    });
    
    it("should take negative shifts to the left correctly", () => {
      const input = "xmgliq";
      const shift = -2;
      const actual = caesar(input, shift, false);
      const expected = "zoinks";
      expect(actual).to.equal(expected);
    });
  });
});