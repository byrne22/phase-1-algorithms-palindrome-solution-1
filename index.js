

function isPalindrome(word) {
  // Write your algorithm here
  let lowerCaseWord = word.toLowerCase()
  let reversedWord = word.split('').reverse().join('')
  return  lowerCaseWord === reversedWord
  
  
}
console.log(isPalindrome('racecar'))
console.log(isPalindrome('mom'))
console.log(isPalindrome('run'))

/* 
  Add your pseudocode here
*/
// convert  input string to lowerCase
// reverse input string
// compare the two variable
// return the result of the comparison

/*
  Add written explanation of your solution here
  inside the function isPalindrome,define the varIable that will be assigned to the lower case input
  define the second variaBle that hold the reversed input.
  afterwards the function is going to return the result of comparing the two variable using strict equality assignment.
  the function will return true is the condition is met and false if the condition is not met
*/

// run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;