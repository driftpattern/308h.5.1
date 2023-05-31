// https://ps-react-curriculum.herokuapp.com/308H/5/lab/
// JavaScript Functions Lab
/*
// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  

// 2.
// Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
function maxOfThree(x, y, z) {
    nums = [x, y, z];
    nums = nums.sort((a, b) => b - a);
    return nums[0];
}

console.log(maxOfThree(3, 9, 11));


// 3.
// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
    const vowels = ["a", "e", "i", "o", "u"];
  
    // Iterate over the vowels array
    for (let i = 0; i < vowels.length; i++) {
      // Check if the character matches any vowel
      if (char.toLowerCase() === vowels[i]) {
        return true;
      }
    }
  
    return false;
  }
  
  console.log(isCharAVowel("A"));


// 4. 
// Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]); would return 11.
function sumArray(...digits) {
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    return sum;
  }
// print the sum of the values
console.log(sumArray(2, 4, 5));


// 5. 
// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product of those numbers. For example, multiplyArray([2, 4, 5]); would return 40.
function multiplyArray(...digits) {
    let product = 1;
    for (let i = 0; i < digits.length; i++) {
      product *= digits[i];
    }
    return product;
  }
// print the product of the values
console.log(multiplyArray(2, 4, 5, 10));


// 6. 
// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.
function numArgs() {
    return arguments.length;
  }
  
console.log(numArgs("something", "else", "ok"));


// 7. 
// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar'); would return the string "ratskcor".
function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
console.log(reverseString("myString"));


*/
// 8.
// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.
// console.clear();

const myStrings = ["string1", "string2 aaa", "string3 aabbcc", "12345678901234567890"];


function longestStringInArray(array) {
    let lengths = [];
    for (let i = 0; i < myStrings.length; i++) {
        lengths.push(myStrings[i].length);
    }
    lengths = lengths.sort((a, b) => b - a);
    console.log(lengths[0]);
};


longestStringInArray(myStrings);

