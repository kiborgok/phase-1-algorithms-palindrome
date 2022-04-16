function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverseString(word).toLowerCase()
  if (word.toLowerCase() === reversedWord) {
    return true
  }
  return false
}

function reverseString(str) {
  const strArray = str.split("")
  const reversedArray = strArray.reverse()

  const joinToStr = reversedArray.join("")

  return joinToStr
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
