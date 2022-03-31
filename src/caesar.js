// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    //Check to see if outside +/-25 or if 0 on the shift and an input was given
    if (shift < -25 || shift > 25 || shift === 0 || !input) return false;

    //Check to see if encode is set to false, and if so adjust shift opposite direction
    if (!encode) shift*= -1;

    //Set the string to lowerCase
    let lower = input.toLowerCase();

    //If shift is less than 0, then just adjust it by 26, since the alphabet wraps
    if (shift < 0) {
      return caesar(lower, shift + 26);
    }

    //Declare our output to be added to in the form of a new string
    let result = "";

    //Loop through given string and shift it using charCode (97-122 for lower case) if it is a letter
    for (let i = 0; i < lower.length; i++) {
      let char = lower[i];
      if (char.match(/[a-z]/i)) {
        char = String.fromCharCode(((lower.charCodeAt(i) - 97 + shift) % 26) + 97);
      }
      result += char;
    }
    return result;

  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
