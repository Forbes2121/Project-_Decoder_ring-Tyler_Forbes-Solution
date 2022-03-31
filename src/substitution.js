// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //check to see if new alphabet is given
    if (!alphabet) return false;

    //make sure the given alphabet is 26 characters
    if (alphabet.length !== 26) return false;
    
    //loop through and test uniqueness of all the characters in the given alphabet
    let testUnique = {};
    for (let x = 0; x < alphabet.length; x++) {
      let char = alphabet[x];
      if (testUnique[char]) return false;
      testUnique[char] = true;
    }

    //ignore uppercase, so simply to just bring it all to lowercase
    let lowerInput = input.toLowerCase();
    let lowerAlphabet = alphabet.toLowerCase();

    //create two arrays, one for standard alphabet and one for unique alphabet, plus a space at the end for both
    let standardAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    let uniqueAlphabet = lowerAlphabet.split('');
    uniqueAlphabet.push(' ');

    //initialize an array to push values to
    let result = [];

    //if encoding, loop through and find index of standard alphabet, then go and get character that lines up in unique alphabet
    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexAt = standardAlphabet.indexOf(lowerInput[i]);
        result.push(uniqueAlphabet[indexAt]);
      }
    }

    //similar to encode, but switching the alphabets around
    if (!encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        let indexAt = uniqueAlphabet.indexOf(lowerInput[i]);
        result.push(standardAlphabet[indexAt]);
      }
    }

    //join together my array into a string and return that string
    let output = result.join('');
    return output;

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
