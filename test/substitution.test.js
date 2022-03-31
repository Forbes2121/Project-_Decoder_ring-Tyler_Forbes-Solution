// My Substitution tests
const {expect} = require("chai");
const {substitution} = require("../src/substitution");

describe("substitution() submission tests", () => {
  describe("handling of any errors", () => {
    it("return false if the unique alphabet is missing", () => {
      const input = "test";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });

    it("return false if the unique alphabet is not exactly 26 characters in length", () => {
      const input = "test";
      const alphabet = "tooshortsorry";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("return false if the unique alphabet has duplicate characters", () => {
      const input = "test";
      const alphabet = "abbdefghijklmnopqrstuvwxyz";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding an input", () => {
    it("encode an input using the unique alphabet", () => {
      const input = "test";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet);
      const expected = "dkrd";
      expect(actual).to.equal(expected);
    });

    it("works with any kind of unique characters", () => {
      const input = "test";
      const alphabet = "#wae.zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet);
      const expected = "j.ij";
      expect(actual).to.equal(expected);
    });

    it("should preserve any given spaces", () => {
      const input = "my test";
      const alphabet = "#wae.zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet);
      const expected = "yp j.ij";
      expect(actual).to.equal(expected);
    });
  });

  describe("decoding an input", () => {
    it("decodes an input by using the unique alphabet", () => {
      const input = "dkrd";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet, false);
      const expected = "test";
      expect(actual).to.equal(expected);
    });

    it("works with any unique or special characters", () => {
      const input = "j.ij";
      const alphabet = "#wae.zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "test";
      expect(actual).to.equal(expected);
    });

    it("should preserve any given spaces", () => {
      const input = "yp j.ij";
      const alphabet = "#wae.zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, false);
      const expected = "my test";
      expect(actual).to.equal(expected);
    });
  });
});