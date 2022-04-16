function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word).toLowerCase()
  return word.toLowerCase() === reversedWord
}

function reverseString(str) {
  return str.split("").reverse().join("")
}

/* 
  Add your pseudocode here
  check if "word".toLowerCase() === reversed("word").toLowerCase()
  if true
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
  So isPalindrome func takes in a string then returns true if the
  reverse of the string === the string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
